---
title: Diffsinger Extension
draft: false
tags:
  - Deep-Learning
---
# DiffSinger: Singing Voice Synthesis via Shallow Diffusion Mechanism
493G Final Project

DiffSinger, an acoustic model for SVS based on the diffusion probabilistic model.

TODO:
- [ ] Know more about standard Diffusion model
## Shallow Diffusion 
The shallow diffusion mechanism in DiffSinger is an approach that applies the diffusion probabilistic model concept, traditionally used in image generation, to singing voice synthesis. This mechanism works by gradually denoising a signal over a relatively small number of steps, improving the quality and naturalness of the synthesized singing voice. Unlike deeper diffusion models that require many steps and thus increase computational load and inference time, the shallow diffusion strategy aims to balance efficiency and performance, offering a practical solution for generating high-quality singing voices with less computational resource.

- Repository: https://github.com/MoonInTheRiver/DiffSinger
- Paper:  https://arxiv.org/abs/2105.02446
- Demo: https://aistudio.baidu.com/projectdetail/4596296