import { QuartzTransformerPlugin } from "../types";

interface Options {
  width: string;
  height: string;
  border: string;
}

export const IframePlugin: QuartzTransformerPlugin<Options> = (opts?: Options) => {
    const defaultOpts = {
      width: "100%",
      height: "1024px",
      border: "none",
      ...opts,
    };
  
    return {
      name: "Iframe",
      htmlPlugins() {
        return [
          (html) => {
            if (typeof html !== "string") {
              return html;
            }
            const iframeHtml = `<iframe src="https://wandb.ai/nlp-vera/vera/reports/Vera-Extension-Midway--Vmlldzo2ODUxOTAx" style="border:${defaultOpts.border};height:${defaultOpts.height};width:${defaultOpts.width};"></iframe>`;
            // Insert the iframe HTML at the desired position in your document
            return html.replace("<!-- insert-iframe-here -->", iframeHtml);
          },
        ];
      },
    };
  };
  
