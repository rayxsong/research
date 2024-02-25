A major problem that we have been struggling for several weeks is almost solved. We have been looking for a combination of a good simulator and a FSM visualizer. We are using Habitat, but we didn't find any suitable FSM visualization tool.

Robin just found a python library that can do great job on FSM visualization - [Python State Machine](https://python-statemachine.readthedocs.io/en/latest/index.html). It can generate clear FSM graphs, just like SMACH. Here is an example of a number guessing machine.

![[FSM-guessing.png]]

Robin also implemented this library into Habitat, and it works well as a time based moving robot. There still have two issues with the code: the keyboard doesn't work and `pygame` frame-rate gets extremely low after implementing FSM visualizer.

I tried to resolve them, and the keyboard one has been done. And I found that the low frame-rate was caused by the state machine's graph generations(as a `png` image file), and the visualizer is updating the graph for every frame in `pygame`. I partially resolved this by making it generate a graph only when the state changes. The result gets slightly better, the frame-rate is high as usual when the robot keeps in the current state. However, when it changes between states, the frame-rate is slow but the general experience is much better. If the graph is something like a canvas with draggable nodes not rendering as some static images, I think this problem would be solved.

![[FSM-Visualizer.mov]]

# Python State Machine
### Install
```shell
conda install python-statemachine
conda install pydot
conda install Graphviz

git clone https://github.com/fgmacedo/python-statemachine.git
```
All the following changes are based on `examples/interactive_play.py`.  Here is also a [Colab version](https://colab.research.google.com/drive/1TyVxpmU-dnf9RTEJiQWJg2A8s6pbidem?usp=sharing) you can play with.
### Import and Draw Graph

```python
# import packages
from statemachine import StateMachine, State
from IPython.display import Image, display, clear_output
import io
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import cv2

def view_pydot(pdot):
	# Render the pydot graph to a PNG image
	png_str = pdot.create_png(prog='dot')
	# Convert the PNG image to a format that can be displayed with OpenCV	
	sio = io.BytesIO()
	sio.write(png_str)
	sio.seek(0)
	img = mpimg.imread(sio)
	img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
	
	# Display the image with OpenCV
	cv2.imshow('FSM Graph', img_bgr)
```
### FSM class

```python {69-74}
class FSM(StateMachine): 
    stop = State(initial=True)
    rotate = State()
    move_forward = State()
    move_backward = State()

    transition = (
        move_forward.from_(stop, cond="move_forward_command")
        | stop.from_(move_forward, cond="stop_forward_command")
        | rotate.from_(stop, cond="rotate_command")
        | stop.from_(rotate, cond="stop_rotate_command")
        | move_backward.from_(stop, cond="move_backward_command")
        | stop.from_(move_backward, cond="stop_backward_command")
        | stop.from_(stop, cond="no_key_pressed")
    )

    def __init__(self):
        super().__init__()
        self.pre_state = None
        self.if_state_change = self._if_state_change

    def move_forward_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return pygame.key.get_pressed()[pygame.K_i]

    def stop_forward_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return not pygame.key.get_pressed()[pygame.K_i]

    def rotate_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return pygame.key.get_pressed()[pygame.K_j] or pygame.key.get_pressed()[pygame.K_l]

    def stop_rotate_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return not (pygame.key.get_pressed()[pygame.K_j] or pygame.key.get_pressed()[pygame.K_l])

    def move_backward_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return pygame.key.get_pressed()[pygame.K_k]

    def stop_backward_command(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return not pygame.key.get_pressed()[pygame.K_k]

    def no_key_pressed(self):
        self.if_state_change()
        self.pre_state = self.current_state
        return not any(pygame.key.get_pressed())

    def on_enter_move_forward(self):
        print("Moving forward...")

    def on_enter_stop(self):
        print("Stopping...")

    def on_enter_rotate(self):
        print("Rotating...")

    def on_enter_move_backward(self):
        print("Moving backward...")
    
    def _if_state_change(self):
        if self.pre_state != self.current_state:
            self.pre_state = self.current_state
            view_pydot(self._graph())
            return True
        return False
```
### Update `play_env`
```python
def play_env(env, args, config):
	fsm = FSM()
	# rest of code
	while True:
		try:
			fsm.transition()
		except Exception as e:
			print(e)
    # rest of code
```