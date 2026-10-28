globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/hero-mountain.jpg": {
		"type": "image/jpeg",
		"etag": "\"29b8c-YNUo0WdbFj9Ts1XzFfeYgNzyem0\"",
		"mtime": "2026-10-28T16:58:00.421Z",
		"size": 170892,
		"path": "../hero-mountain.jpg"
	},
	"/odd-hero-poster.jpg": {
		"type": "image/jpeg",
		"etag": "\"157ba-dL9LLLmJoe4FQa0o/JH1Q4uviyI\"",
		"mtime": "2026-10-28T16:58:00.421Z",
		"size": 87994,
		"path": "../odd-hero-poster.jpg"
	},
	"/odd-logo-navy-gold.jpg": {
		"type": "image/jpeg",
		"etag": "\"4538-V8TKujFwDUlza/Cai2jWYxFbRaQ\"",
		"mtime": "2026-10-28T16:58:00.422Z",
		"size": 17720,
		"path": "../odd-logo-navy-gold.jpg"
	},
	"/assets/aura-avenir-B0gZY4V8.jpg": {
		"type": "image/jpeg",
		"etag": "\"18c54-6HTkl0seqJjSqIlDFHIHQps/rwI\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 101460,
		"path": "../assets/aura-avenir-B0gZY4V8.jpg"
	},
	"/assets/aura-coquette-DCrY69Fc.jpg": {
		"type": "image/jpeg",
		"etag": "\"14a46-jCj0d21mXCAtZ7upQGnB/Ou5UTs\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 84550,
		"path": "../assets/aura-coquette-DCrY69Fc.jpg"
	},
	"/assets/aura-crimson-540-BltHo1Gl.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eedc-pmXO9y3cJ75kDfrlXPznwZ2wQK0\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 126684,
		"path": "../assets/aura-crimson-540-BltHo1Gl.jpg"
	},
	"/assets/aura-layl-DzvdVdmt.jpg": {
		"type": "image/jpeg",
		"etag": "\"19832-1hH1yt43J/CGMZCcJFrrhr60Q/A\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 104498,
		"path": "../assets/aura-layl-DzvdVdmt.jpg"
	},
	"/assets/aura-olympus-DwJMeSZF.jpg": {
		"type": "image/jpeg",
		"etag": "\"298fa-f5mrw6iSqbp585Qh1f8U56J+KmE\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 170234,
		"path": "../assets/aura-olympus-DwJMeSZF.jpg"
	},
	"/assets/aura-opium-noir-DShu1--W.jpg": {
		"type": "image/jpeg",
		"etag": "\"1824d-61SWLM/ojmSTHlNK/nGJelDKvj0\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 98893,
		"path": "../assets/aura-opium-noir-DShu1--W.jpg"
	},
	"/assets/aura-sahara-BvTXxZSW.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a18f-O1JiQUkS/6duR/wmzgO0QMD6eKE\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 106895,
		"path": "../assets/aura-sahara-BvTXxZSW.jpg"
	},
	"/assets/aura-velvet-oud-C69DYMrX.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c0dd-EttnGyTlA9w8Ix3+8xLm2x6pDf4\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 114909,
		"path": "../assets/aura-velvet-oud-C69DYMrX.jpg"
	},
	"/assets/hero-mountain-Cfcx5dQ9.jpg": {
		"type": "image/jpeg",
		"etag": "\"29b8c-YNUo0WdbFj9Ts1XzFfeYgNzyem0\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 170892,
		"path": "../assets/hero-mountain-Cfcx5dQ9.jpg"
	},
	"/assets/routes-BXPQ7MFq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae4c-1/YVnENNA6tL2QG5CaVco+Sw4r4\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 44620,
		"path": "../assets/routes-BXPQ7MFq.js"
	},
	"/assets/styles-C5ZgthHT.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15f89-z9aMmY41C7JTrHHQN+8KxyhiuFA\"",
		"mtime": "2026-10-28T16:57:59.857Z",
		"size": 89993,
		"path": "../assets/styles-C5ZgthHT.css"
	},
	"/assets/index-Bx-qGdZh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5440b-ISfJNgLt6Gw41+usWwvhxtMCN40\"",
		"mtime": "2026-10-28T16:57:59.856Z",
		"size": 345099,
		"path": "../assets/index-Bx-qGdZh.js"
	},
	"/odd-hero.mp4": {
		"type": "video/mp4",
		"etag": "\"2d43d0-mE1avvg4WtnKP2xBAFuYJqjZnEc\"",
		"mtime": "2026-10-28T16:58:00.422Z",
		"size": 2966480,
		"path": "../odd-hero.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-pages.mjs
var nitroApp = useNitroApp();
var cloudflare_pages_default = {
	async fetch(cfReq, env, context) {
		augmentReq(cfReq, {
			env,
			context
		});
		const url = new URL(cfReq.url);
		if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfReq);
		return nitroApp.fetch(cfReq);
	},
	scheduled(event, env, context) {}
};
//#endregion
export { cloudflare_pages_default as default };
