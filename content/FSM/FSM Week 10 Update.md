not loop
more loose
home
different error handling strategy
different transparency, indicator

https://waymo.com/intl/zh-cn/
nvidia kitchen
https://www.robocup.org/

During the meeting, I was thinking about a further question when using the LLM. To generate FSM that makes sense, it would be much better if we could fine tune the model with some robotics common sense so that LLM would know what kinds of FSMs are reasonable and what to do for error handling. Robots common sense sounds a very interesting topic that can fundamentally affect the behaviors of robots.

# Robot Common Sense
- RoboCSE: Robot Common Sense Embedding, [paper](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8794070)
- PLASMA, Making Small Language Models Better Procedural Knowledge Models for (Counterfactual) Planning, [paper](https://arxiv.org/pdf/2305.19472.pdf), [repo](https://github.com/allenai/PlaSma)
- Localized Symbolic Knowledge Distillation for Visual Commonsense Models, [paper](https://proceedings.neurips.cc/paper_files/paper/2023/file/257be12f31dfa7cc158dda99822c6fd1-Paper-Conference.pdf), [repo](https://github.com/jamespark3922/localized-skd)
- Do As I Can, Not As I Say, repo