After discussion, we decide to focus on manipulating K-steps(the depth of the diffusion). In Openvpi version, it mentions that the empirical values of K-steps are usually between 300-400.
And in the original Diffsinger paper, 54 is the chosen value. We plan to train a series of models with different K-steps to see the potential pattern.

To find the best K-steps, we plan to adapt KL-divergence mentioned as a shortcut in the paper, or we will figure out a dynamic way to determine the K. 

We also plan to work on the inference evaluation as the original paper used a subjective method asking serval people to give scores. Some benchmarks we are thinking about are:
- note
- noise
- duration
- pitch

We started to deploy the Openvpi's version of Diffsinger on Google Cloud. And [this detailed guide](https://openvpi-docs.feishu.cn/wiki/KmBFwoYDEixrS4kHcTAcajPinPe) (in Chinese) helped us a lot, it contains lots of configurations in the project.
- [Config file explanation](https://openvpi-docs.feishu.cn/wiki/Mt13w6wUaiI0zUkN2wkcwyWBndh)
- [Dataset making](https://openvpi-docs.feishu.cn/wiki/Hlkfw8aMki2qcJko2Vkcjwf9nKb)
- [Inference](https://openvpi-docs.feishu.cn/wiki/IQiQwhLoOiacsakppa8cWhtDnfc)

Diffsinger provides a nice TensorBoardX integration, you can monitor graphs and audio files on the dashboard.

```bash
# start tensorboard on VM, it should be on port 6006 in default
tensorboard --logdir ~/DiffSinger

# run this on your local machine
# map VM localhost to local
gcloud compute ssh your-vm --zone your-zone --project your-project -- -L 8080:localhost:6006 -N -f
```

In the setup process, I had no idea why the training didn't use `GPU` at all, so I reinstalled `CUDA` to fix it. Here are some useful commands.

```bash
# check if you have CUDA and if GPU works
nvcc --version
nvidia-smi
```

Python scripts to check if `CUDA` is working:

```python
python
import torch
print(torch.cuda.is_available())
```

For some reason, after running requirements installation, it cannot find `torchaudio`. If you have the same issue, try install `torch` packages separately. 

```bash
# install envrionment
conda create -n openvpi python=3.8
conda activate openvpi
pip install torch torchvision torchaudio
pip install -r requirements.txt
```

```bash
# binarize before training, if you update config file, redo this step
python scripts/binarize.py --config path/to/config_acoustic.yaml

# training
python scripts/train.py --config path/to/config_acoustic.yaml --exp_name your/model/dir --reset

# inference
python scripts/infer.py acoustic samples/your-DS-file.ds --exp your/model --out your-output-wav-name
```



