# Progress

Finally installed SMACH after over 10 hours effort. Currently using UTM virtual machine with Ubuntu 20.04. Installed Noetic ROS, followed step on ROS Ubuntu website, have to do following steps before installing SMACH, or will likely couldn’t find SMACH package.

```bash
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
sudo apt install curl # if you haven't already installed curl
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
sudo apt update
sudo apt-get install ros-noetic-smach-ros
```

When run SMACH scripts, try run directly in terminal. Run roscore before the SMACH. If you run in VSCode, you will need some time finguring out correct Python environment. After some research, I found that SMACH only supports Noetic ROS, other version ROS(such as Humble w/ Ubuntu 22.04) don’t have this package. So make sure you are using Neotic and Ubuntu 20.04 if you want to install locally, and since Google Colab is using Ubuntu 22.04, we cannot not set up SMACH in Colab right now.

Additionally, I found a easy way to install ROS in Ubuntu 22.04 in case anyone needs it.

```shell
wget http://fishros.com/install -O fishros && . fishros
```

#### Related Links

- UTM, Virtual Machine on MacOS [https://mac.getutm.app/](https://mac.getutm.app/)
- Official Install ROS Noetic [https://wiki.ros.org/noetic/Installation/Ubuntu](https://wiki.ros.org/noetic/Installation/Ubuntu)
- Install ROS Noetic on Ubuntu 20.04 in Chinese [https://zhuanlan.zhihu.com/p/515361781](https://zhuanlan.zhihu.com/p/515361781) 

Trying to install AI habitat locally.