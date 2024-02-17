# Accelerate Lib Parameters

```Python
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

# Mod Commands for Vera
Since we are only using single GPU on Google cloud, we don't need to worry about FSDP. And it seems that our VM couldn't load `t5-v1.1-xxl`, so I changed to the default `t5-v1.1-small`.

```bash
accelerate launch run.py --train_tasks sciq --valid_tasks sciq --run_name "train"

# use default t5-v1.1-small
accelerate launch run.py --run_name "train_stage_a"
```

I didn't expect it downloaded another **44.5GB** dataset in stage a. It was safe that I upgraded the disk to 100GB. 😌

For stage a, I think the estimated time is about 8 hours, I could go to sleep now.