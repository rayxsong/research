I am using [Obsidian](https://obsidian.md/) to write and [Quartz](https://quartz.jzhao.xyz/) to deploy the website. I love both of them and here are some issues and solutions along the way using them. Hope you find them useful if you are also using this combination. 🔩

---
# Quartz Related
- When I wanted to embed some `p5.js` sketches, the `p5.js` doesn't load automatically, I had to refresh pages. I found this might be an issue with SPA(single-page application). SPA is a type of website that works inside a web browser and behaves more like a desktop application. Instead of loading a new web page every time you click on something, an SPA loads all the necessary code, like HTML, CSS, and JavaScript, when you first visit the website. In the initial page, I don't load `p5.js`, that's the reason when I disable SPA, `p5.js` works correctly. If you want to disable it, go to `quartz.config.ts` to change it.
# VSCode Related
- Turn on color picker, go to `user setting`, enable `Default Color Decorators`