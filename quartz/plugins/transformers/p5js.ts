import { QuartzTransformerPlugin } from "../types";

export const JavaScriptPlugin: QuartzTransformerPlugin = () => ({
  name: "P5Js",
  textTransform: (ctx: BuildCtx, src: string | Buffer) => {
    const content = src.toString();
    const sketchHtml = `
      <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
      <script src="path/to/your-sketch.js"></script>
      <div id="p5-container"></div>
    `;
    return content.replace(/\[\[p5js\]\]/g, sketchHtml);
  },
});

export default JavaScriptPlugin;
