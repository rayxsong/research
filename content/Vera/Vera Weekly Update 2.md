# Mod Commands for Vera
Since we are only using single GPU on Google cloud, we don't need to worry about FSDP, so I removed all FSDP related arguments. And it seems that our VM couldn't load `t5-v1.1-xxl`, so I changed to the default `t5-v1.1-small`.

```bash
accelerate launch run.py --train_tasks sciq --valid_tasks sciq --run_name "train"

# use default t5-v1.1-small, stage a training
accelerate launch run.py --run_name "train_stage_a"

# stage b training
accelerate launch run.py --load_from_ckpt ~/vera/runs/train_stage_a/model/ckp_48000.pth --run_name "train_stage_b"

# evaluate Vera model
accelerate launch run.py --mode eval --load_from_ckpt ~/vera/runs/train_stage_b/model/ckp_14000.pth --run_name "eval_stage_b"
```

I didn't expect it downloaded another **44.5GB** dataset in stage a. It was a safe decision to pick 100GB for the disk at first. Even if the disk storage is not large enough, don't panic, Google Cloud has a nice feature that I can stop the VM then do some configurations then launch it again.

Training stage A took about 8 hours and stage B took about 10 hours. Based on what we learned from the paper, two stages use different datasets and stage A uses a much larger one, therefore it is confusing that stage B took longer time. We may need to figure this out later.

# Problems
## Data Processing 
A series of problems popped up during the evaluation. To replicate the paper, we need to evaluate the Vera model on two types of unseen data. However, these two types of datasets we didn't get from the author, we need to find and process them by ourselves. 

The first issue is that one of requirements is to convert datasets to [UnifiedQA](https://github.com/allenai/unifiedqa) format using a [question converting model](https://github.com/allenai/unifiedqa) which is deleted for some reason. Luckily, I found [this model](https://huggingface.co/domenicrosati/question_converter-3b) on Hugging Face, and it is convenient that we could use directly using `transformers` library.

```python
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("domenicrosati/question_converter-3b")
model = AutoModelForSeq2SeqLM.from_pretrained("domenicrosati/question_converter-3b")
```

Now the first one was solved, a second one came. The datasets for evaluation contain lots of different information, I was confused about what should I put in the answer for UnifiedQA format.
UnifiedQA format requires:
- Datasets should be converted into a **text-in/text-out format**.
- Question always comes first.
- We use `\n` separators between different parts of the input.

Ok, it seems quite easy that we can put raw datasets into a parse function then output a processed file. But if you open some datasets, you will find that each dataset contains different types of data, you need to know about datasets and process each one separately. I will take 2 datasets as examples:

### WSC
The Winograd Schema Challenge was proposed as an alternative to the Turing Test
A Winograd schema is a pair of sentences that differ in only one or two words and that contain an ambiguity that is resolved in opposite ways in the two sentences and requires the use of world knowledge and reasoning for its resolution. Vera uses `wsc273` [on Hugging Face](https://huggingface.co/datasets/winograd_wsc/viewer/wsc273).

A Winograd schema is a pair of sentences that are identical except for one or two words. These sentences contain an ambiguous pronoun whose referent must be determined. The correct interpretation of the pronoun depends on understanding the context and the specific words that differ between the two sentences.

For example:
- Sentence: "The trophy doesn't fit in the suitcase because it's too big."
- Quote: "it is too large"
- Options: "the trophy", "the suitcase"
- Label: 0
### COPA
[COPA](https://huggingface.co/datasets/super_glue/viewer/copa) is one of datasets in [the SuperGLUE](https://huggingface.co/datasets/super_glue). The SuperGLUE benchmark is a collection of challenging natural language understanding tasks designed to evaluate and improve the performance of machine learning models on a range of linguistic capabilities.

It is a causal reasoning task where the model is given a premise and two possible causes or effects, and it must choose the more plausible one. The dataset contains tuples of (premise, choice1, choice2, label), where the label indicates which choice is correct (1 or 2). If you are viewing the SuperGLUE on Hugging Face, make sure you select `COPA` in subset.

For example:
- Premise: "The man broke his toe."
- Choice1: "He dropped a hammer on his foot."
- Choice2: "He painted the fence."
- Label: 1

So based on the two examples above, some datasets are not the simple multiple choices, there are some extra information like "quote" or "premise" to handle. That is the part I am not sure how to deal with it. I will figure it out.

Through this investigation of some commonsense datasets, I found that even for me as a human, I cannot answer some questions quickly. Such as some sentences are asking about pronouns, I need to pause a second to make sure I know what the pronoun indicates. 

# Accelerate Lib Parameters

```python
accelerate launch \
    --num_processes 64 \
    --mixed_precision bf16 \
    --use_fsdp --fsdp_auto_wrap_policy TRANSFORMER_BASED_WRAP --fsdp_backward_prefetch_policy BACKWARD_PRE --fsdp_offload_params false --fsdp_sharding_strategy 1 --fsdp_state_dict_type FULL_STATE_DICT --fsdp_transformer_layer_cls_to_wrap T5Block \
    run.py \
    --model_type google/t5-v1_1-xxl \
    --run_name "train_stage_a"
```

1. **`--num_processes 64`**: This sets the number of processes to use for training, which means that the training will be distributed across 64 processes.
2. **`--mixed_precision bf16`**: This enables mixed precision training using the BF16 (bfloat16) data type. Mixed precision can speed up training and reduce memory usage while maintaining model accuracy.
3. **`--use_fsdp`**: This enables the use of Fully Sharded Data Parallel (FSDP) for distributed training. FSDP is a technique that shards the model parameters across multiple devices to reduce memory usage and improve scalability.
4. **`--fsdp_auto_wrap_policy TRANSFORMER_BASED_WRAP`**: This sets the automatic wrapping policy for FSDP to `TRANSFORMER_BASED_WRAP`, which means that the FSDP wrapper will automatically wrap transformer layers in the model to optimize memory usage and performance.
5. **`--fsdp_backward_prefetch_policy BACKWARD_PRE`**: This sets the backward prefetch policy for FSDP to `BACKWARD_PRE`, which means that FSDP will prefetch gradients during the backward pass to improve efficiency.
6. **`--fsdp_offload_params false`**: This specifies whether to offload model parameters to CPU memory during training to save GPU memory. In this case, it's set to `false`, so parameters will not be offloaded.
7. **`--fsdp_sharding_strategy 1`**: This sets the sharding strategy for FSDP. The value `1` corresponds to a specific strategy defined in the `accelerate` library, which determines how model parameters are sharded across devices.
8. **`--fsdp_state_dict_type FULL_STATE_DICT`**: This specifies the type of state dictionary to use for FSDP. `FULL_STATE_DICT` means that the full model state (including all sharded parameters) will be saved and loaded, which is useful for checkpointing and resuming training.
9. **`--fsdp_transformer_layer_cls_to_wrap T5Block`**: This specifies the class of transformer layers to wrap with FSDP. In this case, it's set to `T5Block`, which means that only layers of type `T5Block` in the model will be wrapped for sharding.
10. **`run.py`**: This is the name of the Python script to be executed for training.
11. **`--model_type google/t5-v1_1-xxl`**: This specifies the type of model to be used for training. In this case, it's set to `google/t5-v1_1-xxl`, which is a specific version of the T5 model.
12. **`--run_name "train_stage_a"`**: This sets the name of the training run, which can be useful for logging and tracking purposes. In this case, it's set to `"train_stage_a"`.

# Midway Report
We have finished our midway report. 🎉

![[447_Midway_Report.pdf|800x800]]

<iframe src="https://wandb.ai/nlp-vera/vera/reports/Vera-Extension-Midway--Vmlldzo2ODUxOTAx?accessToken=blb6exf7cj5md8ld0l7m9ul8aeff2eeoxcmnh1c790rys3ka2twfmtmw5x9b91ql"></iframe>
