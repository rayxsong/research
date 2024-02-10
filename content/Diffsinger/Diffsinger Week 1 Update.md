# Exploration
## DiffSinger (OpenVPI maintained version)
A refactored and enhanced version of _DiffSinger_
repo: https://github.com/openvpi/DiffSinger

## MakeDiffSinger
Pipelines and tools to build DiffSinger dataset.
repo: https://github.com/openvpi/MakeDiffSinger
It contains a [step by step tutorial](https://github.com/openvpi/MakeDiffSinger/tree/main/acoustic_forced_alignment) to prepare a dataset using Montreal Forced Aligner. We don't need to know much about MFA, but maybe it is good to have an idea about what forced alignment is. 

>Forced alignment is a technique to take an orthographic transcription of an audio file and generate a time-aligned version using a pronunciation dictionary to look up phones for words.


# Definition Clarification
## Vocoder
Vocoder has a long interesting history. Currently, I understand it as a encoder and decoder tool that can output synthesized sounds based on the input. It sounds like auto-tone in some music application, but they are different. [A good explanation](https://www.reddit.com/r/passcode/comments/v3aw0m/vocoder_and_autotune_whats_the_difference/) I found is:

>What is auto-tune?
Auto-tune is a tool to alter and/or correct the pitch of songs and instruments. A lot of artists use it, both in studio and live performances, and it can be used both for finetuning a sound, or as an artistic choice, when cranked up to eleven (Or the retune turned to zero, really). There’s nothing wrong in using it, and it’s more common than you think. Youtuber Tom Scott describes the nerdy mechanics behind it pretty well in this video.

>What is Vocoder?
The shortest answer is that it’s a way to digitize your voice, using a carrier signal, usually a keyboard/synthezier, and combine it with a modulator signal, your voice. By running your vocal track through the vocoder you can create a robotic, keyboardish sound that merges two sounds: your voice and an instrument. Some good examples are the Imogen Heap song Hide and Seek and some songs by Daft Punk and Kraftwerk. The long answer: Vocoder vs Auto-tune vs Talkbox

I will stop the search on Vocoder here, and I would like to know more about in the future.
## Diffusion
Diffusion Models are successfully in text to image generation in recently years, such as Stable Diffusion and DALLE.
Downside: sampling speed is slow.

Two processes:
1. Forward process, adding noise to images
2. Parametrized Backward process, based on Markov chain, use a neural network in it.

Three components:
1. Noise Scheduler in forward process
2. Neural Network in backward process
3. Timestep Encoding

## Shallow Diffusion 
The shallow diffusion mechanism in DiffSinger is an approach that applies the diffusion probabilistic model concept, traditionally used in image generation, to singing voice synthesis. This mechanism works by gradually denoising a signal over a relatively small number of steps, improving the quality and naturalness of the synthesized singing voice. Unlike deeper diffusion models that require many steps and thus increase computational load and inference time, the shallow diffusion strategy aims to balance efficiency and performance, offering a practical solution for generating high-quality singing voices with less computational resource.

## GAN
Unsupervised, but supervised by itself.

Two parts, both implemented using CNNs:
1. Generator: it generates fake samples
2. Discriminator: it figures out if the given sample is a real sample in the domain set or a fake sample by generator

First, we need to feed discriminator lots of real data to train it until it can find if the input image is not real. Then, generator starts to generate fake images, and send it to discriminator. If discriminator finds it is fake(there is no intermediary, only two decisions: fake or real), generator changes its behaviors, if discriminator finds it is real, generator remains the same behaviors, discriminator needs to change its behaviors.