#Deep-Learning #Concept
Standardization and Normalization are different. Standardization makes mean 0 and variance 1, while Normalization makes inputs to be between 0 and 1.

(data - mean) /  standard deviation

Why
It would be easier make network to learn(still vague about this idea).
If not, the weights in the network would be very different. Think about numbers are small and big, output would be unstable.

Batch Normalization
General normalization only makes the input normalized, it is a naive approach, solves some problems but still may have gradient vanishing problem.

Batch Normalization normalizes all layers of output.
1. Do standardization
2. Scale and offset, two parameters from learning process, not hyperparameters

Decide if you put BN before or after activation functions.
Maybe don't need to use bias, because BN used offset.

hard to use with sequence and small batch, hard to parrallel

Layer Normalization
batter for RNNs
can deal with sequences
any batch number works
can parallelize

not good with CNNs