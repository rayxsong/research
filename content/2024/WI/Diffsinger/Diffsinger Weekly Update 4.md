# Adaptive K
The big idea behind adaptive K is that we want to have both features that high K-steps' rapid loss decreasing and low K-steps' less overfitting. So we need to have a K-step value that can dynamically change during training.

To achieve this, we hope to reward the steep decrease and penalize the steep increase. In the following equations, $\alpha$ and $beta$ are hyperparameters. 
## v1
$$
k = \text{clamp}\left(- \alpha \cdot \left(\frac{d(\text{loss})}{d(step)}\right)^{-1} - \beta \cdot \max(0, \frac{d^2(\text{loss})}{d(step)^2}), k_{\min}, k_{\max}\right)
$$
- $clamp$: constrains the K-step between empirical K-steps, such as $(50,400)$
- $\left(\frac{d(\text{loss})}{d(step)}\right)^{-1}$: rewards the steeper decrease, leads to higher K-step
- $\max(0, \frac{d^2(\text{loss})}{d(step)^2})$: prevents to have concave function leading to overfitting

## v2
$$
k = k_{mid} \left(1+\alpha \cdot \left(\frac{loss_{curr}-loss_{pre}}{loss_{pre}}\right)\right) - \beta \cdot \max \left(0, \frac{loss_{curr}-loss_{pre}}{loss_{pre}}\right)
$$
It has a roughly same idea that allows K to fluctuate, but without derivatives. 