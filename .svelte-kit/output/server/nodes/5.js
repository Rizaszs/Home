

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/showcase/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.f8e452e6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js"];
export const stylesheets = [];
export const fonts = [];
