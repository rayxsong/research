All the previous  related work we have seen should fall in the category of "Tool Path Generation".

Git Repo
Online [Demo](https://rayxsong.github.io/p5.fab-FIDELIS/editor/index.html)
# FIDELIS Extension
## GCode Commands
- printGCode(): Logs all G-code commands to the console with their corresponding index numbers.
- exportGCode(): Opens a new tab or window displaying the G-code for easy copying or saving.
- saveGCode(): Saves the G-code commands to a file named 'fab.gcode'.
- loadGCode(gcodeContent): Loads G-code content into the instance, splitting it into individual commands.
- parseCommand(command): Parses a G-code command, extracting and swapping Y and Z coordinates, and inverting Z.
## Other
- randomPoint(x, y, z): Generates a random point within the specified bounds, or the maximum bounds if none are provided.

# Ongoing Work
- [x] optimize the menu
- [x] upload/save gcode
- [ ] extrusion amount config
- [x] print point to point
- [ ] solely retraction
- [x] random points