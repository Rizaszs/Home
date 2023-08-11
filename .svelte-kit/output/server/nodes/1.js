

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6afcfa4f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js","_app/immutable/chunks/singletons.69a91b85.js","_app/immutable/chunks/paths.38ba5e8c.js"];
export const stylesheets = [];
export const fonts = [];
