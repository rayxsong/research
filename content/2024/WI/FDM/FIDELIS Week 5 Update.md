We gradually find the direction during the last meeting. The main goal of this project is to achieve some post-modification on a current G-code file.  To elaborate on the function we want to achieve, such as we want to print a thin filament between two ends of a L-shape object, it would be hard to achieve in traditional slicer. By using our tool, adding intricate details would be possible and easy to manipulate.

To simplify this project, we will try to identify surfaces and edges on a L-shape object, then indicate any two points on the object to connect with a fine filament. So this introduces the following initial problems to solve:
- Identify edges and surfaces
- Rearrangement in tool path for each layer after adding the filament
- Tool path for the new filament

Come up with a title of this project with ChatGPT: 
>FIDELIS: Fine Detail Enhancement Layer for Intelligent Slicing

Some suggestions by ChatGPT also seems useful:
#### 1. Identifying Edges and Surfaces
- **Geometric Analysis:** Use computational geometry algorithms to analyze the 3D model corresponding to the G-code. Algorithms like the Convex Hull, Edge Detection, and Surface Normal Calculation can help in identifying edges and surfaces.
- **G-code Parsing:** Develop or utilize a G-code parser that can interpret the movements and layer changes. This could help in mapping the G-code back to the geometric features of the model.
- **Machine Learning:** Consider employing machine learning techniques to recognize patterns in the G-code that correspond to edges and surfaces. Training a model on a dataset of G-codes and their respective models could enable the tool to predict edges and surfaces directly from G-code.
#### 2. Rearrangement in Tool Path for Each Layer After Adding the Filament
- **Path Optimization Algorithms:** Once the additional filament's path is determined, use path optimization algorithms to rearrange the tool paths efficiently. Algorithms such as the Traveling Salesman Problem (TSP) solver or Genetic Algorithms can help minimize travel distance and avoid unnecessary retractions.
- **Layer-by-Layer Analysis:** Analyze and adjust the tool paths on a layer-by-layer basis, ensuring that the addition of new filament paths does not disrupt the existing structure's integrity or cause collisions.
- **Simulation:** Implement a simulation feature to predict the outcome of the rearranged tool paths. This can help in visualizing potential issues and adjusting the paths accordingly before the actual printing process.
#### 3. Tool Path for the New Filament
- **Custom Path Generation:** Develop algorithms for generating the tool path for the new filament, ensuring it adheres to the printer's capabilities and material properties. This includes calculating the extrusion rate, speed, and cooling time necessary for the filament to bridge between points successfully.
- **Adaptive Extrusion Control:** For printing thin filaments, especially over gaps, control over the extrusion rate is crucial. Implement adaptive extrusion techniques that can adjust based on the distance between points and the filament's required thickness.
- **Support Structure Analysis:** If the filament spans a considerable gap, consider algorithms for temporary support structure generation that can be easily removed post-printing. Alternatively, explore techniques for printing in mid-air by adjusting cooling rates and extrusion speeds.
#### General Suggestions:
- **User Interface (UI):** Develop a user-friendly UI that allows users to select points on the model (or in the G-code visualization) for filament placement. Offering a preview of the proposed modification and an easy way to adjust parameters will be key to user adoption.
- **Feedback Loop:** Incorporate a feedback mechanism that allows users to test and refine their settings based on the print outcomes. This could involve logging successful parameters for specific models and adjustments for future reference.
- **Documentation and Community:** Create comprehensive documentation and tutorials to help users understand how to use the tool effectively. Building a community around your tool can also provide valuable feedback and innovative uses of the technology.

