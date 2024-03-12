# Progress

Since we are having difficulty working with Habitat, Maya suggested maybe we should try to look at some toy domain stuff to keep pushing the finite state machine visualization. So we will be exploring game engines to see if there are any thing we can adapt.



# Intall ROS on Mac
When I was searching for alternative robotics simulators in game engines, I found RoboStack, a bundling of the Robot Operating System (ROS) by Open Robotics for Linux, Mac and Windows using the `conda` package manager.

```shell
# create env for ROS
conda create -n ROS python=3.9
conda activate ROS

# config conda channels
conda config --add channels robostack
conda config --set channel_priority strict

# install ros1 noetic
conda install ros-noetic-desktop-full
# install comilers
conda install compilers cmake pkg-config make ninja catkin_tools

# run ros to test if it is installed successfully
roscore
```

Not all ROS noetic packages are supported in RoboStack, here is [the list](https://robostack.github.io/noetic.html) of supported packages. SMACH is supported.

# Related Papers
- [MOPA: Modular Object Navigation with PointGoal Agents](https://3dlg-hcvc.github.io/mopa/)
- [SPOC](https://spoc-robot.github.io/)