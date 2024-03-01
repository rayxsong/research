https://github.com/openvpi/DiffSinger


- Manual K
- KL Divergence
- Alternative

Benchmark
-note
-noise
-duration

```bash
tensorboard --logdir ~/DiffSinger

gcloud compute ssh openvpi --zone us-central1-a --project coral-hydra-414523 -- -L 80:localhost:6006 -N -f
```

```bash
sudo apt install nvidia-cuda-toolkit

nvcc --version
nvidia-smi
```

```python
python
import torch
print(torch.cuda.is_available())
```

```bash
# install envrionment
conda create -n openvpi python=3.8
conda activate openvpi
pip install torch torchvision torchaudio
pip install -r requirements.txt
```

```bash
python scripts/binarize.py --config /home/raysong/DiffSinger/configs/config_acoustic_milestone.yaml

python scripts/train.py --config /home/raysong/DiffSinger/configs/config_acoustic_milestone.yaml --exp_name milestone --reset
```

```python
python scripts/infer.py acoustic samples/your-DS-file.ds --exp train-a --out your-output-wav-name
```


