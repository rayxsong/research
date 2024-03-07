To solve negation problems in commonsense, 
- Augment Training Data, Exposure to negation does not solve the problem
- Incorporate features that specifically capture negation, such as the presence of negation words (e.g., "not," "never," "no") or the syntactic structure indicating negation.
- Introduce adversarial examples during training where negated statements are flipped to positive ones and vice versa. This can help the model learn to differentiate between negated and non-negated statements more effectively.

```yml
#environment.yml
name: negater
channels:
  - pytorch
  - conda-forge
dependencies:
  - python=3.7
  - pip:
    - faiss==1.5.3
    - torch==1.6.0
    - transformers==4.3.2
  - numpy=1.18.5
  - pandas=1.0.4
  - PyYAML=5.3.1
  - scikit-learn=0.23.1
  - tqdm=4.46.1
```

```bash
conda env create -f environment.yml
conda activate negater
sudo apt install libopenblas-base libomp-dev
```

```bash
conda env remove -n negater
conda create -n negater python=3.7
conda activate negater
pip install -r requirements.txt
```