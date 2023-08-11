export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-gh-pages/_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.234053a5.js","app":"_app/immutable/entry/app.e1860ea0.js","imports":["_app/immutable/entry/start.234053a5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.69a91b85.js","_app/immutable/chunks/paths.38ba5e8c.js","_app/immutable/entry/app.e1860ea0.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.5ae4157e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
