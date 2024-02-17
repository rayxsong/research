I've noticed that some people, especially those new to cloud computing, find Google Cloud a bit overwhelming. The platform offers many services and features, which can be intimidating for first-time users. Our course website seems to miss this introduction part as well. So I've decided to create this very basic walkthrough to help you set up your first virtual machine (VM) on Google Cloud.

I spent some time figuring it out, hope it is useful somehow.

![[gcloud-setup.png]]

# Google Cloud Setup
0. You might need to add your credit/debit card information before all of these.
1. Go to upper-left select organization `cs.washington.edu`, then select any `My First Project`, remember the project ID.
2. Go to top search bar, search `COMPUTE ENGINE`.
3. Click `CREATE INSTANCE`, create name, region, zone for you VM, and take notes for these information now if you don't want to waste time finding them later. We used `us-west` since it shows low CO2.
4. In `Machine configuration`, select `GPUs`, we are using `NVIDIA T4`, select what you need. If T4 is not available, try other GPUs, like P4. Then click `CUSTOM` to change memory size if you need.
5. In `Boot disk`, change the size to what your project needs, our project uses roughly 50GB.
6. On the right, you can see the estimated cost of your whole VM after various configurations.
7. Then click `CREATE`, and wait 1~2 mins for your VM booting.
8. Once it is done, you should be able to use SSH or `gcloud CLI` to access your VM.

# Using gcloud CLI
1. Download and install **gcloud CLI** [here](https://cloud.google.com/sdk/docs/install).
2. Use `gcloud init` to initialize, and set up passkeys etc.
3. Then use the information you noted in Google Cloud setup to access your VM, replace with your project ID in step 1, and project zone, VM name in step 3:

```bash
gcloud compute ssh --project=project-id --zone=project-zone your-VM-name
```

4. Use it as you use CSE's `attu`. Install some packages, clone some Github projects, etc. Enjoy!

# Useful gcloud commands
1. Now you might want to transfer some files between VM and your local machine. Before that, do this authorization first after connecting to your VM:

```bash
gcloud auth login
```

2. Transferring files from VM to local machine, on your **local machine** do the following:

```bash
gcloud compute scp --recurse VM-NAME:VM-PATH LOCAL-PATH
```

3. Transferring files from local machine to VM, on your **local machine** do the following:

```bash
gcloud compute scp LOCAL-PATH VM-NAME:VM-PATH
```

4. Exit VM, press `~` then `.`
# Install Everything on VM

```bash
# update and install essential
sudo apt-get update
sudo apt-get install build-essential

# install CUDA in the version of your system
wget https://developer.download.nvidia.com/compute/cuda/12.3.2/local_installers/cuda_12.3.2_545.23.08_linux.run
sudo sh cuda_12.3.2_545.23.08_linux.run

# install conda
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash ~/miniconda3/miniconda.sh -b -u

conda init
# restart bash
source ~/.bashrc

# create env
conda env create -f environment.yml
conda activate vera

# install notebook
pip install -U jupyter
```

# Use VSCode with VM
1. Install the extension Remote-SSH
2. `gcloud init`
3. `gcloud compute config-ssh`
4. Add a remote `ssh your-host`
5. Connect

# Safely Exit the SSH
To start a training process on a virtual machine (VM) in the cloud and safely exit the SSH session without interrupting the training, you can use `tmux`.

```bash
# connect to ssh
ssh your-host
# or
gcloud compute ssh --project=project-id --zone=project-zone your-VM-name

# install tmux
sudo apt-get update
sudo apt-get install tmux

# start a new session
tmux new -s your_training_session

# run your scripts, something like this
accelerate launch your_training_script.py

# detach from the current session
# Press `Ctrl` + `b`, then release both keys.
# Press `d` to detach from the session.

# exit ssh safely
exit
```

If you want reattach to your session:

```bash
# connect to ssh
ssh your-host

# check processes you have
nvidia-smi

# reattach
tmux attach -t your_training_session
```
# Use Colab's VM
I found this temporary solution using Colab as some T4 are not available. Basically, it allows you to run the terminal in blocks and you can do everything you want to do on a VM, even if you don't have Colab Pro. Here is [the notebook](https://colab.research.google.com/drive/1_sSWUsLWg2c7aHo4lHW70-MSM6Ywvp98?usp=sharing). Make sure to connect to T4 runtime if you want to use the GPU.

Add a following block:

```Python
!pip install colab-xterm
%load_ext colabxterm
%xterm
```

If you want to use conda:

```bash
# install conda
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm -rf ~/miniconda3/miniconda.sh

vim ~/.zshrc

# add export PATH="/root/miniconda3/bin:$PATH"
# use ':wq!' to save and quit vim

source ~/.zshrc

conda init

source ~/.bashrc
```

# Using VM Notes
1. It is a empty VM, we need to install all needed packages, such as `conda`, `git` etc.
2. If you want to download a folder on your Google Drive, change the following command to your link and folder path:

```bash
gdown Google-Drive-Shared-Link -O Folder-Path --folder
```

3. Prepare the [W&B API key](https://wandb.ai/authorize) if your code is using `wandb` to monitor training.
4. `source ~/.bashrc` is a good friend to refresh `bash` and get some your new packages working.
# Mod Commands for Vera
```bash
accelerate launch run.py --train_tasks sciq --valid_tasks sciq --run_name "train"

# use default t5-v1.1-small
accelerate launch run.py --run_name "train_stage_a"
```
# Before this
We spent a night trying to make Vera running on Colab, but we failed. It seems that Colab doesn't support `conda` very well, this the same issue I had in [[Finite-State Machine]] project. But it was helpful to know you could install some libraries on Colab permanently from [a blog post](https://netraneupane.medium.com/how-to-install-libraries-permanently-in-google-colab-fb15a585d8a5) sent by Jay. So we shifted to Google Cloud, it should work similarly as Colab works except GUI. It turned out, Google Cloud supports `conda` much better than Colab, the environment setup was smooth.
# Related Links
- [Accelerate Library](https://huggingface.co/docs/accelerate/en/index), enables the same PyTorch code to be run across any distributed configuration.
- [W&B](https://wandb.ai/site), AI developer platform, with tools for training models, fine-tuning models, and leveraging foundation models.
