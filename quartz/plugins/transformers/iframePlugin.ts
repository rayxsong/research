import { QuartzTransformerPlugin } from "../types";

interface Options {
  width: string;
  height: string;
  border: string;
}

export const IframePlugin: QuartzTransformerPlugin<Options> = (opts?: Options) => {
    const defaultOpts = {
        width: "",
        height: "",
        border: "",
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
            const iframeHtml = `<iframe src="" style="border:${defaultOpts.border};height:${defaultOpts.height};width:${defaultOpts.width};"></iframe>`;
            // Insert the iframe HTML
            return html.replace("<!-- insert-iframe-here -->", iframeHtml);
          },
        ];
      },
    };
  };
  
