```python
# download test point nav dataset
python -m habitat_sim.utils.datasets_download --uids habitat_test_scenes habitat_test_pointnav_dataset
```

Make sure you have the data at the right position, you should find some folders like these: `data/datasets/pointnav/mp3d/v1/`. If not, manually adjust them.

HomeRobot: https://github.com/facebookresearch/home-robot

We need some necessary data in the 3D environment. I applied for Matterport 3D [research dataset](https://matterport.com/partners/facebook) which is a largest 3D dataset of indoor spaces.

Habitat - Matterport 3D Research Dataset: https://github.com/matterport/habitat-matterport-3dresearch?tab=readme-ov-file

https://aihabitat.org/docs/habitat-lab/habitat-lab-demo.html#scene-semantic-annotations

https://www.open-rmf.org/

https://github.com/osrf/osrf_wiki/wiki/GSoC24

https://wwj718.github.io/post/%E7%BC%96%E7%A8%8B/autonomous-agent-in-roblox/

https://github.com/bblais/RobotSim373

https://github.com/NISYSLAB/Emory-BMI-GSoC

Nick helped us get the access to the Capstone Lab in CSE2 Undergrad Commons. And Micheal helped us set up a machine with Home Robot and tested it running Home Robot successfully. Shout out to them!

# SSH without Password
#MYLE
On your local machine:
```shell
# generate an SSH key pair
ssh-keygen -t rsa -b 4096

# find and copy you public key
cat ~/.ssh/id_rsa.pub
```

Now go to server side:
```shell
mkdir -p ~/.ssh
chmod 700 ~/.ssh

echo your_public_key >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Now you should be able to SSH into the server without being prompted for a password.

