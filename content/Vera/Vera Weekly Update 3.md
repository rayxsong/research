We talked with Gary (one of the authors of Vera) and got the unseen datasets we need.

Gary suggested some other potential datasets that we could use to improve our model. We will look into these datasets and see if they are useful for our project. [Benchmarks for Automated Commonsense Reasoning: A Survey](https://arxiv.org/abs/2302.04752) mentions more than 100 benchmarks we can consider.

We also discussed some potential directions:
- Negation problem: sometime when a statement gets negated, Vera doesn't do the right choice.
- Paraphrase problem: if you paraphrase a sentence you will have the same problem similar to the negation problem.
- Pre-classifier: Vera cannot handle some narrative statements, we could add a classifier before Vera to filter out questions that are not commonsense questions.
- In-context problem: if the input statement is very long and has strong context, Vera also falls off

---
# Related Links
- [Ernest Davis](https://cs.nyu.edu/~davise/), NYU Professor, interested in knowledge representation, and automated commonsense reasoning.
