import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_KLvMeZiw.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_yjozgYMA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/","cacheDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/node_modules/.astro/","outDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/dist/","srcDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/","publicDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/public/","buildClientDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/dist/client/","buildServerDir":"file:///C:/Users/Ivan%20Torres/Downloads/Spotify-clone-main/Spotify-clone-main/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-playlist.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-playlist\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-playlist.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-playlist.json.js","pathname":"/api/get-playlist.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CgB3_l79.css"}],"routeData":{"route":"/playlists/[id]","isIndex":false,"type":"page","pattern":"^\\/playlists\\/([^/]+?)\\/?$","segments":[[{"content":"playlists","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/playlists/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CgB3_l79.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/pages/playlists/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/playlists/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/playlistcard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/get-playlist.json@_@js":"pages/api/get-playlist.json.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/playlists/[id]@_@astro":"pages/playlists/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DvByK12W.mjs","\u0000@astrojs-manifest":"manifest_DIsxbr7Y.mjs","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/listplayersong":"_astro/listplayersong.BUODd-IT.js","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/duracion":"_astro/duracion.DYgT2TFj.js","@astrojs/react/client.js":"_astro/client.DhgtLP_0.js","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/cardplaybuton":"_astro/cardplaybuton.wWyir9Cl.js","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/player.jsx":"_astro/player.Bm3DeYS_.js","C:/Users/Ivan Torres/Downloads/Spotify-clone-main/Spotify-clone-main/src/components/cardplaybuton.jsx":"_astro/cardplaybuton.B7kMXXGw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CgB3_l79.css","/favicon.svg","/_astro/cardplaybuton.B7kMXXGw.js","/_astro/cardplaybuton.wWyir9Cl.js","/_astro/client.DhgtLP_0.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/_astro/duracion.DYgT2TFj.js","/_astro/index.Bh1Hq7Ut.js","/_astro/index.CaZlGE7t.js","/_astro/listplayersong.BUODd-IT.js","/_astro/player.Bm3DeYS_.js","/_astro/player.zU9GCwp2.js","/_astro/playerstore.DFc6T7Jz.js","/music/1/1.mp3","/music/1/2.mp3","/music/1/3.mp3","/music/1/4.mp3","/music/1/5.mp3","/music/2/1.mp3","/music/2/2.mp3","/music/2/3.mp3","/music/2/4.mp3","/music/2/5.mp3","/music/3/1.mp3","/music/3/2.mp3","/music/3/3.mp3","/music/3/4.mp3","/music/3/5.mp3","/music/4/1.mp3","/music/4/2.mp3","/music/4/3.mp3","/music/4/4.mp3","/music/4/5.mp3","/music/5/1.mp3","/music/5/2.mp3","/music/5/3.mp3","/music/5/4.mp3","/music/5/5.mp3","/music/6/1.mp3","/music/6/10.mp3","/music/6/11.mp3","/music/6/12.mp3","/music/6/2.mp3","/music/6/3.mp3","/music/6/4.mp3","/music/6/5.mp3","/music/6/6.mp3","/music/6/7.mp3","/music/6/8.mp3","/music/6/9.mp3","/music/6/cover.jpg","/music/6/Discografiascompletas.Net - Discografías 320kbps MEGA.url","/music/6/front.jpg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"XaDGuNGHijJRWxd0jx5SkOQlrV1kEYPmrzdXHRZUVYA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
