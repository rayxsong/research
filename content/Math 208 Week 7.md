# 1
Since the nullity of A is 2 and A is a 3 × 4 matrix, by the Rank-Nullity Theorem, we have:
$$
\text{rank}(A) + \text{nullity}(A) = \text{number of columns } A
$$

$$
\text{rank}(A) + 2 = 4
$$

$$
\text{rank}(A) = 2
$$


In the given span, notice that
$$\begin{bmatrix}1 \\ 0 \\ 1\end{bmatrix} = -2 \cdot \begin{bmatrix}4 \\ -3 \\ 7\end{bmatrix} - 3 \cdot \begin{bmatrix}3 \\ -2 \\ 5\end{bmatrix}.$$

Since the rank of A is 2, we can use the two basis vectors for the column space as the first two columns of A. The remaining two columns can be any vectors that do not add any new dimension to the column space (to ensure the nullity remains 2).

$$
A = \begin{bmatrix} 3 & 4 & 0 & 0 \\ -2 & -3 & 0 & 0 \\ 5 & 7 & 0 & 0 \end{bmatrix}
$$

<div style="page-break-after: always;"></div>

# 2

To create a matrix that maps from $\mathbb{R}^2$ to $\mathbb{R}^3$ and satisfies the plane equation, we can use:

$$
A = \begin{bmatrix}
1 & 0 \\
1 & 2 \\
0 & 1
\end{bmatrix}
$$

This matrix does not have full rank, ensuring that $T$ is not one-to-one.

The linear transformation $T$ can be represented as:
$$T(\mathbf{x}) = A\mathbf{x}
$$

$$
\begin{bmatrix}
1 & 0 \\
1 & 2 \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
a \\
b
\end{bmatrix}
=
\begin{bmatrix}
a \\
a + 2b \\
b
\end{bmatrix}
$$
For all $a,b \in \mathbb{R}$
$$
a−(a+2b)+2b=a−a−2b+2b=0
$$

Therefore, the linear transformation $T$ defined by the matrix $A$ has the two mentioned properties.

<div style="page-break-after: always;"></div>

# 3
1. Since $A$ and $B$ are row equivalent, they have the same column space. Looking at matrix $B$, we can see that the columns $b_1$ and $b_3$ are linearly independent, and they span a 2-dimensional subspace of $\mathbb{R}^3$. Therefore, ${b_1, b_3}$ is a basis for col($B$), which is the same as col($A$). Since $a_1$ corresponds to $b_1$ and $a_3$ corresponds to $b_3$ in the original matrix $A$, ${a_1, a_3}$ is also a basis for col($A$).
<br>
2. First, let's check if $a_1 + a_2$ and $a_3 + a_4$ are linearly independent. In matrix $B$, the second column $b_2$ is a zero column, so $a_2$ does not contribute to the column space of $A$. Similarly, $b_4$ is not a scalar multiple of $b_3$, so $a_4$ does not affect the linear independence of $a_3$. Therefore, $a_1 + a_2$ is essentially $a_1$, and $a_3 + a_4$ is essentially $a_3$, which we already established are linearly independent in part (a). By Theorem 1, since ${a_1 + a_2, a_3 + a_4}$ are two linearly independent vectors in col($A$), they form a basis for col($A$).
<br>
3. First, observe that $a_1 - \frac{1}{3}a_3$ is a linear combination of $a_1$ and $a_3$, which are basis vectors for col($A$). However, $a_4$ corresponds to $b_4$ in matrix $B$, which is not a linear combination of $b_1$ and $b_3$. Since $b_4$ does not contribute to the column space spanned by $b_1$ and $b_3$, $a_4$ does not contribute to the column space spanned by $a_1$ and $a_3$. Therefore, ${a_1 - \frac{1}{3}a_3, a_4}$ is not a basis for col($A$) because $a_4$ does not add any new dimension to the subspace spanned by $a_1 - \frac{1}{3}a_3$.

<div style="page-break-after: always;"></div>

# 4
 ### (a)
 $A$ is a $2 \times 3$ matrix. $\text{col}(A) = \mathbb{R}^2$ implies that the columns of $A$ span $\mathbb{R}^2$. This means the rank of $A$ must be 2, as it needs to span a 2-dimensional space. $\text{null}(A) = \text{span}\left(\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}\right)$ implies that the nullity of $A$ is 1 (since the null space is spanned by one vector). This vector represents the solution to the homogeneous system $A\mathbf{x} = \mathbf{0}$, which means that for any scalar $c$, $A\begin{bmatrix} c \\ c \\ c \end{bmatrix} = \mathbf{0}$.

We can have:

$$
A = 
\begin{bmatrix}
1 & 0 & -1 \\
0 & 1 & -1 \\
\end{bmatrix}
$$

### (b)
$A$ is a $2 \times 3$ matrix. $\text{col}(A) = \mathbb{R}^2$ implies that the columns of $A$ span $\mathbb{R}^2$. This means the rank of $A$ must be 2, as it needs to span a 2-dimensional space. $\text{null}(A) = \text{span}\left(\begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix}\right)$ implies that the nullity of $A$ is 2 (since the null space is spanned by two vectors). These vectors represent the solutions to the homogeneous system $A\mathbf{x} = \mathbf{0}$.

$$
\text{rank}(A) + \text{nullity}(A) = \text{number of columns } A
$$

$$
\text{rank}(A) + 2 = 3
$$

$$
\text{rank}(A) = 1
$$

This contradicts the requirement that $\text{col}(A) = \mathbb{R}^2$, which implies that the rank of $A$ must be 2. 

Therefore, it is not possible to find a matrix $A$ that satisfies all the given conditions.

### (c)
$A$ is a $2 \times 2$ matrix. The rank of $A$ must be 1, as there is only one linearly independent row. $\text{null}(A) = \text{span}\left(\begin{bmatrix}3 \\ -3\end{bmatrix}\right)$ implies that the nullity of $A$ is 1. This vector represents the solution to the homogeneous system $A\mathbf{x} = \mathbf{0}$, which means that for any scalar $c$, $A\begin{bmatrix}3c \\ -3c\end{bmatrix} = \mathbf{0}$.

Given these conditions, we can construct a matrix $A$ that has rank 1 (to ensure $\text{row}(A) = \text{span}\left(\begin{bmatrix}1 \\ 1\end{bmatrix}\right)$). And it has a null space spanned by $\begin{bmatrix}3 \\ -3\end{bmatrix}$.

We can have:

$$
A = 
\begin{bmatrix}
1 & 1 \\
1 & 1 \\
\end{bmatrix}
$$