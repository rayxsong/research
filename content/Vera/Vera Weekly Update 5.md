# Negation Bechmark
- Not another Negation Benchmark: The NaN-NLI Test Suite for Sub-clausal Negation, [paper](https://arxiv.org/pdf/2210.03256.pdf), [repo](https://github.com/tsafavi/NegatER)
- Say What You Mean! Large Language Models Speak Too Positively about Negative Commonsense Knowledge, [paper](https://arxiv.org/pdf/2305.05976.pdf)
- Language models are not naysayers: An analysis of language models on negation benchmarks, [paper](https://arxiv.org/pdf/2306.08189.pdf), [repo](https://github.com/joey234/llm-neg-bench)

# Negation Dataset
- UnCommonSense: Informative Negative Knowledge about Everyday Concepts, [paper](https://dl.acm.org/doi/10.1145/3511808.3557484), [dataset](https://www.mpi-inf.mpg.de/departments/databases-and-information-systems/research/yago-naga/commonsense/uncommonsense)
- This is not a Dataset: A Large Negation Benchmark to Challenge Large Language Models, [paper](https://arxiv.org/pdf/2310.15941.pdf), [dataset](https://huggingface.co/datasets/HiTZ/This-is-not-a-dataset?row=1)
- “I’m Not Mad”: Commonsense Implications of Negation and Contradiction, [paper](https://aclanthology.org/2021.naacl-main.346.pdf), [ANION dataset](https://github.com/liweijiang/anion?tab=readme-ov-file)
# Other
- Negated Complementary Commonsense using Large Language Models, [paper](https://arxiv.org/pdf/2307.06794.pdf), [repo](https://github.com/navidre/negated_complementary_commonsense)

# How Vera Handles Data
- Multiple-Choice QA
- Boolean QA: convert the question into a declarative statement, and keep the original label


https://cultural-norms-demo-a-team.apps.allenai.org/

**eval/bool/all_f_ap**: The average average precision for false statements across all boolean benchmarks. 63.24

Run summary:
wandb:                eval/bool/all_acc 0.61125
wandb:              eval/bool/all_auroc 0.47096
wandb:                eval/bool/all_ece 0.31479
wandb:               eval/bool/all_f_ap 0.58411
wandb:               eval/bool/all_f_f1 0.0
wandb:                eval/bool/all_f_p 1.0
wandb:                eval/bool/all_f_r 0.0
wandb:               eval/bool/all_t_ap 0.37643
wandb:               eval/bool/all_t_f1 0.0
wandb:                eval/bool/all_t_p 1.0
wandb:                eval/bool/all_t_r 0.0
wandb:             eval/bool/unseen_acc 0.61125
wandb:           eval/bool/unseen_auroc 0.47096
wandb:             eval/bool/unseen_ece 0.31479
wandb:            eval/bool/unseen_f_ap 0.58411
wandb:            eval/bool/unseen_f_f1 0.0
wandb:             eval/bool/unseen_f_p 1.0
wandb:             eval/bool/unseen_f_r 0.0
wandb:            eval/bool/unseen_t_ap 0.37643
wandb:            eval/bool/unseen_t_f1 0.0
wandb:             eval/bool/unseen_t_p 1.0
wandb:             eval/bool/unseen_t_r 0.0
wandb:                        eval/loss inf
wandb:            eval/loss_contrastive inf
wandb:                eval/loss_scoring 21.57938
wandb:             eval/mc/acc/alphanli 0.5
wandb:                eval/mc/acc/codah 0.2175
wandb:            eval/mc/acc/hellaswag 0.2665
wandb:     eval/mc/acc/story_cloze_test 0.52325
wandb:                 eval/mc/acc/swag 0.2655
wandb:       eval/mc/acc_unweighted_all 0.35455
wandb:    eval/mc/acc_unweighted_unseen 0.35455
wandb:                        eval/step 50000