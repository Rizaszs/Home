import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const app = "";
const title = "rizal suryawan";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex justify-between items-center text-white"><a href="${escape(base, true) + "/"}"><b>${escape(title)}</b></a> <ul class="flex gap-2"><li><a href="${escape(base, true) + "/showcase"}">showcase</a></li> <li><a href="${escape(base, true) + "/blog"}">blog</a></li> <li><a href="${escape(base, true) + "/about"}">about</a></li></ul> <button data-svelte-h="svelte-a5egou">contact</button></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="text-white">${escape(title)} © ${escape((/* @__PURE__ */ new Date()).getFullYear())}</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="layout">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
