We gradually find the direction during the last meeting. The main goal of this project is to achieve some post-modification on a current G-code file.  To elaborate on the function we want to achieve, such as we want to print a thin filament between two ends of a L-shape object, it would be hard to achieve in traditional slicer. By using our tool, adding intricate details would be possible and easy to manipulate.

To simplify this project, we will try to identify surfaces and edges on a L-shape object, then indicate any two points on the object to connect with a fine filament. So this introduces the following initial problems to solve:
- Identify edges and surfaces
- Rearrangement in tool path for each layer after adding the filament
- Tool path for the new filament

Come up with a title of this project with ChatGPT: 
>FIDELIS: Fine Detail Enhancement Layer for Intelligent Slicing

