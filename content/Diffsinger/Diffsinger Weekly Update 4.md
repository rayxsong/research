$$
k = \text{clamp}\left(- \alpha \cdot \left(\frac{d(\text{loss})}{d(step)}\right)^{-1} - \beta \cdot \max(0, \frac{d^2(\text{loss})}{d(step)^2}), k_{\min}, k_{\max}\right)
$$

$$
k = k_{mid} \left(1+\alpha \cdot \left(\frac{loss_{curr}-loss_{pre}}{loss_{pre}}\right)\right) - \beta \cdot \max \left(0, \frac{loss_{curr}-loss_{pre}}{loss_{pre}}\right)
$$