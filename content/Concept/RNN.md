Key Idea: RNNs hav an internal stat that is updated as a sequence is processed

new_state = f_with_param_w(old_state, input_vector_at_some_time_step)

new_state also is called hidden representation, is the output for each recurrence step
same function, same parameters are using every time, only hidden representations are changing every time

w is the parameter the model is gonna learn

vanilla RNN is transform previous hidden representation plus transform the current step input, then pass into tanh(), and tanh() is a terrible decision due to gradient vanishing problem.

output = f_another(new_state)
then compute loss from output at each step, add all loss together to get the total loss
all have bias

h_0 = 0
computational graph

many to many, keep new_state every step
many to one, only keep the last new_state
one to many, only one input,
1. passing 0 as input
2. passing new_state generated in the last step as input

seq to seq, such as tranlation
encoder, many to one in a single vec
decoder, one to many producing output from a single vec

example, char-level language model
you wanna have the same dimension of the categories you want to classify

RNNs are dealing with variable lengths of inputs
if the input is so large, we batch them, it is called truncated Backprop through time

Pros:
- process any length of data
- can use information form previous steps
- model size doesn't increase for longer input
- same weight every step

Cons:
- computation is slow
- hard to access information from many steps back

tanh is differentiable
the problem of tanh is that the derivative is almost 0 everywhere except the middle part, and always between 0 and 1, when you multiply them together, it may cause vanishing gradients,
solution might be change RNN architecture

another problem is about the param W
if it is >1 and we multiply many times, then we may have exploding gradients problem
to solve this, a common technique is that gradient clipping, scale gradient if its norm is too big, to stabilize the training

Long Short Term Memory(LSTM), one of RNN architectures
cell memory and hidden state
i,f,o using sigmoid
g, using tanh
for every dimension, 
i decides whether to write that cell
f decides how much should to forget in the past
o decides how much to reveal the cell
g decides how much to write in that cell

backprop doesn't vanish since no matrix multiply by param W, uninterrupted gradient flow
but LSTM doesn't guarantee there is no vanishing or exploding gradient, it provides an easier way for model to learn long distance dependencies

GRU is kind between LSTM and RNN

human correlation, human 
scale data collection, demonstration 
data collection, method body