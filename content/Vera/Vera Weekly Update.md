I've noticed that some people, especially those new to cloud computing, find Google Cloud a bit overwhelming. The platform offers many services and features, which can be intimidating for first-time users. Our course website seems to miss this introduction part as well. So I've decided to create this very basic walkthrough to help you set up your first virtual machine (VM) on Google Cloud.

I spent some time figuring it out, hope it is useful somehow.
![[gcloud-setup.png]]
# Google Cloud Setup
1. Go to upper-left select organization `cs.washington.edu`, then select `My First Project`, remember the project ID.
2. Go to top search bar, search `COMPUTE ENGINE`.
3. Click `CREATE INSTANCE`, create name, region, zone for you VM, and take notes for these information now if you don't want to waste time finding them later. We used `us-west` since it shows low CO2.
4. In `Machine configuration`, select `GPUs`, we used `NVIDIA T4`, select what you need. Then click `CUSTOM` to change memory size if you need.
5. In `Boot disk`, change size to your project needs, our project needs roughly 50GB.
6. On the right, you can see the estimated cost of your VM.
7. Then click `CREATE`, and wait 1~2 mins for your VM booting.
8. Once it is done, you could use SSH or gcloud CLI to access your VM.

# Using gcloud CLI
1. Download and install gcloud CLI [here](https://cloud.google.com/sdk/docs/install).
2. Use `gcloud init` to initialize, and set up passkeys etc.
3. Then use the information you noted in Google Cloud setup to access your VM, replace with your project ID in step 1, and project zone, VM name in step 3:
	```
	gcloud compute ssh --project=project-id --zone=project-zone your-VM-name
	```
4. Use it as you use CSE's `attu`.
5. Install some packages, clone some Github projects, etc. Enjoy!

# Using VM Notes
1. It is a empty VM, we need to install all needed packages, such as `conda`, `git` etc.
2. Sometimes using `gdown` to download files has permission problems, current solution is got the root folder, the use `gdown`
3. Prepare the W&B API key if your code are using `wandb` to monitor training.
4. `source ~/.bashrc` is a good friend when set up some environments.

# Related Links
- [Accelerate Library](https://huggingface.co/docs/accelerate/en/index), nables the same PyTorch code to be run across any distributed configuration.
- [W&B](https://wandb.ai/site), AI developer platform, with tools for training models, fine-tuning models, and leveraging foundation models.
- 