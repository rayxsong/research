import { QuartzTransformerPlugin } from "../types";

export const LoadP5Js: QuartzTransformerPlugin = () => {
  return {
    name: "LoadP5Js",
    htmlPlugins() {
      return [
        (html) => {
          const script = `
            <script>
              window.addEventListener('load', function() {
                var p5Script = document.createElement('script');
                p5Script.src = 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js';
                document.body.appendChild(p5Script);
              });
            </script>
          `;
          if (typeof html === "string") {
            return html.replace("</head>", `${p5JsScriptTag}</head>`);
          } else {
            return html;
          }          
        },
      ];
    },
  };
};

export default LoadP5Js;