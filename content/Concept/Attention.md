Image Captioning with RNNs & Attention
1. use hidden state to cal alignment scores
2. the use alignment scores to get attention by softmax
3. then dot product with weights to get input

the process is differentiable, model chooses its own attention weights, no supervision needed

add a linear layer to solve dimension problem
query: hidden states

the input and output dimension can now change depending on the key and value

self-attention, use linear layer and input to have Key, Value, Query vectors
permutation invariant, swap order of input, the order of output also changes

positional encoding
distance between two steps should be consistent
must be deterministic

masked with -infinity to prevent looking at it

multi-head, add or concatenate different heads

![[RNN_MHA.png]]