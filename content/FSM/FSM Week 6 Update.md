# Progress

## Habitat API
Still have difficulty figuring out how to have Stretch Robot imported into Habitat. Found another project [Home Robot](https://github.com/facebookresearch/home-robot) for Stretch Robot simulation and control using ROS and Habitat, but some packages like Pytorch3D, pyg require osx-64, my machine is osx-arm64, we need to find a machine that satisfies all packages. 
### Task Setting
Different tasks could be save in configuration .yaml file. The format looks like below, but I haven't find a detailed doc talking about the format.
```yaml
defaults:
  - pointnav_base
  - /habitat/dataset/pointnav: habitat_test
  - _self_

habitat:
  environment:
    max_episode_steps: 500
  simulator:
    agents:
      main_agent:
        sim_sensors:
          rgb_sensor:
            width: 256
            height: 256
          depth_sensor:
            width: 256
            height: 256
```
You could also do inline modification on the configuration.

Generating a configuration file:
```python
def make_cfg(settings):
    sim_cfg = habitat_sim.SimulatorConfiguration()
    sim_cfg.gpu_device_id = 0
    sim_cfg.scene_id = settings["scene"]
    sim_cfg.scene_dataset_config_file = settings["scene_dataset"]
    sim_cfg.enable_physics = settings["enable_physics"]

    # Note: all sensors must have the same resolution
    sensor_specs = []

    color_sensor_spec = habitat_sim.CameraSensorSpec()
    color_sensor_spec.uuid = "color_sensor"
    color_sensor_spec.sensor_type = habitat_sim.SensorType.COLOR
    color_sensor_spec.resolution = [settings["height"], settings["width"]]
    color_sensor_spec.position = [0.0, settings["sensor_height"], 0.0]
    color_sensor_spec.sensor_subtype = habitat_sim.SensorSubType.PINHOLE
    sensor_specs.append(color_sensor_spec)

    depth_sensor_spec = habitat_sim.CameraSensorSpec()
    depth_sensor_spec.uuid = "depth_sensor"
    depth_sensor_spec.sensor_type = habitat_sim.SensorType.DEPTH
    depth_sensor_spec.resolution = [settings["height"], settings["width"]]
    depth_sensor_spec.position = [0.0, settings["sensor_height"], 0.0]
    depth_sensor_spec.sensor_subtype = habitat_sim.SensorSubType.PINHOLE
    sensor_specs.append(depth_sensor_spec)

    semantic_sensor_spec = habitat_sim.CameraSensorSpec()
    semantic_sensor_spec.uuid = "semantic_sensor"
    semantic_sensor_spec.sensor_type = habitat_sim.SensorType.SEMANTIC
    semantic_sensor_spec.resolution = [settings["height"], settings["width"]]
    semantic_sensor_spec.position = [0.0, settings["sensor_height"], 0.0]
    semantic_sensor_spec.sensor_subtype = habitat_sim.SensorSubType.PINHOLE
    sensor_specs.append(semantic_sensor_spec)

    # Here you can specify the amount of displacement in a forward action and the turn angle
    agent_cfg = habitat_sim.agent.AgentConfiguration()
    agent_cfg.sensor_specifications = sensor_specs
    agent_cfg.action_space = {
        "move_forward": habitat_sim.agent.ActionSpec(
            "move_forward", habitat_sim.agent.ActuationSpec(amount=0.25)
        ),
        "turn_left": habitat_sim.agent.ActionSpec(
            "turn_left", habitat_sim.agent.ActuationSpec(amount=90.0)
        ),
        "turn_right": habitat_sim.agent.ActionSpec(
            "turn_right", habitat_sim.agent.ActuationSpec(amount=90.0)
        ),
    }
```

### Create a simulator
``` python
cfg = make_cfg(sim_settings)
sim = habitat_sim.Simulator(cfg)
```
## Benchmark
I went to a talk by [Ani Kembhavi](https://anikem.github.io/), some parts of his work using LLM to generate assets were interesting. And they could provide large amounts of generated data for robotics training, such as generated indoor environments and objects.

After the talk, we clarified the benchmark we are implementing with Maya. We we gonna do is to evaluate some simple tasks in Habitat and know more about Habitat’s API. We don’t need to care about FSM so far, try to make Habitat up and running.

There is also an existed benchmark for navigation in Habitat Challenge:

$$
SPL = \frac{1}{N} \sum_{i=1}^{N} S_i \frac{l_i}{\max(p_i, l_i)}
$$
This benchmark is purposed in [On Evaluation of Embodied Navigation Agents](https://arxiv.org/abs/1807.06757). For navigation, maybe we could use this directly.

Some metrics are considered to be used:
- measuring the distance from points on the path to the closest obstacle
- evaluating robot motion risk

Another paper [Benchmarking Metric Ground Navigation](https://arxiv.org/abs/2008.13315) purposed a set of metrics and a data-driven model to combine them to quantify the challenge posed by a particular environment for mobile robot navigation:
- Distance to Closest Obstacle
- Average Visibility
- Dispersion
- Characteristic Dimension
- Tortuosity

When I did research, "localization" is a word that used a lot, but I don't think I fully understand what it is.  

>Robot localization is the process of determining where a mobile robot is located with respect to its environment.

\-[Wiley Encyclopedia of Electrical and Electronics Engineering](https://onlinelibrary.wiley.com/doi/full/10.1002/047134608X.W8318)

Basically, it provides location information of the robot. This information is usually gathered by sensors that monitor robots' motions.  And the knowledge of reliability of the location estimate is crucial as there could be lots of noises in the environment, and it impacts the decisions the robots make.

## Virtual Machine
I gained lots of experience setting up the environment so far, and Arm64 is not compatible(Pytorch3D, ROS, etc.) in the most of time which is disappointing. 

I have tried 4 different virtual machine softwares: UTM, VMWare Fusion, Virtual Box, Parallel Desktop. I like UTM, the interface is simple, and you can emulate x86 system. However, the emulation is extremely slow, I tried to install Ubuntu 20.04 desktop x86_64 using UTM, and the installation process took about 1 hour, so I don't encourage you to use it.
# Plan

Besides navigation, we may need to think about benchmarks in other tasks, such as picking, task time, etc.

Another thing is try to set Habitat on Colab although it is not officially supported. Installation script was removed on official Github repo, but here is a [previous version](https://drive.google.com/file/d/1TtrDDLWs786yp7h8vIB9jiFi0N96tVg8/view) I found.

- [ ] Exploring Habitat
- [ ] Finding alternative libraries writing FSM
- [ ] Try to write simple FSM and make it work in Habitat in realtime
- [ ] Try to implement a FSM visualization, something like SMACH viewer

#### Related Links
- RT-2 by Google: https://robotics-transformer2.github.io/, Transfer Web Knowledge to Robotic Control
- Stretch Model: https://github.com/hello-robot/stretch_ros/tree/noetic/stretch_description
- Current Benchmarks for RL: https://neptune.ai/blog/best-benchmarks-for-reinforcement-learning 
- Eureka by Nvidia: https://eureka-research.github.io/, Eureka is an algorithm leveraging Large Language Models (LLMs), such as GPT-4, to autonomously design reward functions for reinforcement learning, surpassing human-engineered rewards and enabling complex low-level manipulation tasks like dexterous pen spinning without task-specific prompting.


