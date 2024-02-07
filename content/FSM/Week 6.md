# Progress
I went to a talk by Ani Kembhavi, some parts of his work using LLM to generate assets were interesting. And they could provide large amounts of generated data for robotics training, such as generated indoor environments and objects.

After the talk, we clarified the benchmark we are implementing with Maya. We we gonna do is to evaluate some simple tasks in Habitat and know more about Habitat’s API. We don’t need to care about FSM so far, try to make Habitat up and running.

There is also an existed benchmark for navigation in Habitat Challenge:

$$
SPL = \frac{1}{N} \sum_{i=1}^{N} S_i \frac{l_i}{\max(p_i, l_i)}
$$
This benchmark is purposed in [On Evaluation of Embodied Navigation Agents](https://arxiv.org/abs/1807.06757). For navigation, maybe we could use this directly.

Besides navigation, we may need to think about benchmarks in other tasks, such as picking, task time, etc.

Another thing is try to set Habitat on Colab although it is not officially supported. Installation script was removed on official Github repo, but here is a [previous version](https://drive.google.com/file/d/1TtrDDLWs786yp7h8vIB9jiFi0N96tVg8/view) I found.

- Setup Habitat on Colab
- Exploring Habitat
- Figuring out more benchmark

#### Related Links
- https://robotics-transformer2.github.io/
- Stretch Model: https://github.com/hello-robot/stretch_ros/tree/noetic/stretch_description
- https://neptune.ai/blog/best-benchmarks-for-reinforcement-learning 
- https://eureka-research.github.io/