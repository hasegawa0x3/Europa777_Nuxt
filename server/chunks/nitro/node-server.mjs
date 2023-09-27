globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "API_KEY": "Sy5WMUIbIV6m3IBk1PSL"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2abe-mpqxeEY1N1fq3xpTH0jvpL71ibg\"",
    "mtime": "2023-07-17T07:44:00.892Z",
    "size": 10942,
    "path": "../public/favicon.ico"
  },
  "/tmp/1.png": {
    "type": "image/png",
    "etag": "\"7dc7d-XdReuwzOJKaX2SFUcfmH93+hT9M\"",
    "mtime": "2023-07-17T07:44:01.190Z",
    "size": 515197,
    "path": "../public/tmp/1.png"
  },
  "/tmp/2.png": {
    "type": "image/png",
    "etag": "\"5903f-SmkH0c2BcDTRYMwXiSy3O2Fgszc\"",
    "mtime": "2023-07-17T07:44:01.192Z",
    "size": 364607,
    "path": "../public/tmp/2.png"
  },
  "/tmp/3.png": {
    "type": "image/png",
    "etag": "\"57808-rg6ug35/3KJWnlzjNtDTfCx7+kY\"",
    "mtime": "2023-07-17T07:44:01.195Z",
    "size": 358408,
    "path": "../public/tmp/3.png"
  },
  "/tmp/4.png": {
    "type": "image/png",
    "etag": "\"5b6c0-+6Ct4lTRyNYbYlGdr1yKA1D86g8\"",
    "mtime": "2023-07-17T07:44:01.197Z",
    "size": 374464,
    "path": "../public/tmp/4.png"
  },
  "/tmp/5.png": {
    "type": "image/png",
    "etag": "\"66548-VRwkDa62dl4L4kHuQL1eLzdCH3Q\"",
    "mtime": "2023-07-17T07:44:01.200Z",
    "size": 419144,
    "path": "../public/tmp/5.png"
  },
  "/tmp/6.png": {
    "type": "image/png",
    "etag": "\"66929-d22zdMNtAjPeO68TSrLl0AFAYBI\"",
    "mtime": "2023-07-17T07:44:01.202Z",
    "size": 420137,
    "path": "../public/tmp/6.png"
  },
  "/tmp/avatar.png": {
    "type": "image/png",
    "etag": "\"1af53-5uwEcoor+RBgffwhee+dgSIxI9Q\"",
    "mtime": "2023-07-17T07:44:01.203Z",
    "size": 110419,
    "path": "../public/tmp/avatar.png"
  },
  "/tmp/avatarFemale.png": {
    "type": "image/png",
    "etag": "\"1208b-b0vurKKr6AwQyZ3cEziUkLOjqMw\"",
    "mtime": "2023-07-17T07:44:01.204Z",
    "size": 73867,
    "path": "../public/tmp/avatarFemale.png"
  },
  "/tmp/interac.png": {
    "type": "image/png",
    "etag": "\"f5e-d54RF1B0zLu5Cl2Lpw0qFeyeI+4\"",
    "mtime": "2023-07-17T07:44:01.204Z",
    "size": 3934,
    "path": "../public/tmp/interac.png"
  },
  "/tmp/mask.png": {
    "type": "image/png",
    "etag": "\"37c2-CBpdDAgu1FVVY8tOP7cnirheVVw\"",
    "mtime": "2023-07-17T07:44:01.205Z",
    "size": 14274,
    "path": "../public/tmp/mask.png"
  },
  "/tmp/master-card.png": {
    "type": "image/png",
    "etag": "\"15d7-hxHravjBdIDf3WGMdbdzX/oJA24\"",
    "mtime": "2023-07-17T07:44:01.205Z",
    "size": 5591,
    "path": "../public/tmp/master-card.png"
  },
  "/tmp/p1.png": {
    "type": "image/png",
    "etag": "\"31fd-+RyzPtdSURxMNNWfqqH67bfXzSg\"",
    "mtime": "2023-07-17T07:44:01.205Z",
    "size": 12797,
    "path": "../public/tmp/p1.png"
  },
  "/tmp/p1_old.png": {
    "type": "image/png",
    "etag": "\"40f7-JVlbsI2BSyKL54TXcWUeIgs+mXw\"",
    "mtime": "2023-07-17T07:44:01.205Z",
    "size": 16631,
    "path": "../public/tmp/p1_old.png"
  },
  "/tmp/p2.png": {
    "type": "image/png",
    "etag": "\"3ca8-JGkRKYcEdeHE+VTqyqV4tjCpXyg\"",
    "mtime": "2023-07-17T07:44:01.206Z",
    "size": 15528,
    "path": "../public/tmp/p2.png"
  },
  "/tmp/p3.png": {
    "type": "image/png",
    "etag": "\"13a3-K31FAWy8KTK+RfOuo1DzvRDL74Y\"",
    "mtime": "2023-07-17T07:44:01.206Z",
    "size": 5027,
    "path": "../public/tmp/p3.png"
  },
  "/tmp/p4.png": {
    "type": "image/png",
    "etag": "\"12ac-JSxkgFPGktt7xTTeBXSBcjtJ058\"",
    "mtime": "2023-07-17T07:44:01.206Z",
    "size": 4780,
    "path": "../public/tmp/p4.png"
  },
  "/tmp/p5.png": {
    "type": "image/png",
    "etag": "\"5719-HFlmE9QTryYwLhgzhX1+hZqE6to\"",
    "mtime": "2023-07-17T07:44:01.206Z",
    "size": 22297,
    "path": "../public/tmp/p5.png"
  },
  "/tmp/p6.png": {
    "type": "image/png",
    "etag": "\"6a75-IFdaTBwi93QHbLG9qvaxKbbw+pA\"",
    "mtime": "2023-07-17T07:44:01.207Z",
    "size": 27253,
    "path": "../public/tmp/p6.png"
  },
  "/tmp/visa.png": {
    "type": "image/png",
    "etag": "\"12f8-0YSOuGPLpnAh6Dur0o6JC7nhEBU\"",
    "mtime": "2023-07-17T07:44:01.207Z",
    "size": 4856,
    "path": "../public/tmp/visa.png"
  },
  "/imgs/18.png": {
    "type": "image/png",
    "etag": "\"edf-4pxT7OvPuxOrZnfWJpuYsuXOouU\"",
    "mtime": "2023-07-17T07:44:00.892Z",
    "size": 3807,
    "path": "../public/imgs/18.png"
  },
  "/imgs/7163 - Casino Dealer.svg": {
    "type": "image/svg+xml",
    "etag": "\"3652-AYYiBdJyhvFSGx+0EQsepAnQ/3M\"",
    "mtime": "2023-07-17T07:44:00.892Z",
    "size": 13906,
    "path": "../public/imgs/7163 - Casino Dealer.svg"
  },
  "/imgs/active_icon.png": {
    "type": "image/png",
    "etag": "\"6be-qMrD5/NCRzI63mTFCOKq2cFV4gU\"",
    "mtime": "2023-07-17T07:44:00.893Z",
    "size": 1726,
    "path": "../public/imgs/active_icon.png"
  },
  "/imgs/add_currency.png": {
    "type": "image/png",
    "etag": "\"8e6-YTZoyChlo9dJ1i5Cr5oLi9OLjxU\"",
    "mtime": "2023-07-17T07:44:00.893Z",
    "size": 2278,
    "path": "../public/imgs/add_currency.png"
  },
  "/imgs/all_games.png": {
    "type": "image/png",
    "etag": "\"15c4-3iPw8AZUJQQwtQ85tkPqETpYS2E\"",
    "mtime": "2023-07-17T07:44:00.893Z",
    "size": 5572,
    "path": "../public/imgs/all_games.png"
  },
  "/imgs/available_icon.png": {
    "type": "image/png",
    "etag": "\"9e8-mmayRgc3g/wPJBzMw+2ya/fFsHs\"",
    "mtime": "2023-07-17T07:44:00.893Z",
    "size": 2536,
    "path": "../public/imgs/available_icon.png"
  },
  "/imgs/back_bonus.png": {
    "type": "image/png",
    "etag": "\"d5049-SuSGb/R932t5i9U+nvfIFJyDJIg\"",
    "mtime": "2023-07-17T07:44:00.896Z",
    "size": 872521,
    "path": "../public/imgs/back_bonus.png"
  },
  "/imgs/back_bonus_b.png": {
    "type": "image/png",
    "etag": "\"169d79-jT7jzXGjvD35IPCqXG0UVOqD6go\"",
    "mtime": "2023-07-17T07:44:00.901Z",
    "size": 1482105,
    "path": "../public/imgs/back_bonus_b.png"
  },
  "/imgs/back_daily.png": {
    "type": "image/png",
    "etag": "\"b9c68-ncurxpVwJXdVMxa8UW3Z6YSHXZU\"",
    "mtime": "2023-07-17T07:44:00.904Z",
    "size": 760936,
    "path": "../public/imgs/back_daily.png"
  },
  "/imgs/back_daily_b.png": {
    "type": "image/png",
    "etag": "\"cb711-1+KeDO++AaajbplsQIizTw5RoPE\"",
    "mtime": "2023-07-17T07:44:00.909Z",
    "size": 833297,
    "path": "../public/imgs/back_daily_b.png"
  },
  "/imgs/back_dark.png": {
    "type": "image/png",
    "etag": "\"23414-RUeKsBHM020d/jW4s9Xv9uunKdg\"",
    "mtime": "2023-07-22T20:10:42.713Z",
    "size": 144404,
    "path": "../public/imgs/back_dark.png"
  },
  "/imgs/balance.png": {
    "type": "image/png",
    "etag": "\"434-8YmLmjYlg5vN0ymYHx38/XnjxEc\"",
    "mtime": "2023-07-17T07:44:00.911Z",
    "size": 1076,
    "path": "../public/imgs/balance.png"
  },
  "/imgs/banner_bonus.png": {
    "type": "image/png",
    "etag": "\"224a4c-q+vr4cAScpOyZbHC1uaaBm80j/Q\"",
    "mtime": "2023-07-17T07:44:00.919Z",
    "size": 2247244,
    "path": "../public/imgs/banner_bonus.png"
  },
  "/imgs/banner_wallet.png": {
    "type": "image/png",
    "etag": "\"4c70e-Ip5nv9BPDQR9eQ+6iVG33SaMzmY\"",
    "mtime": "2023-07-17T07:44:00.921Z",
    "size": 313102,
    "path": "../public/imgs/banner_wallet.png"
  },
  "/imgs/bitcoin.png": {
    "type": "image/png",
    "etag": "\"5da8-HpotXK4jxc8woVfrzyA/DF74wXU\"",
    "mtime": "2023-07-17T07:44:00.921Z",
    "size": 23976,
    "path": "../public/imgs/bitcoin.png"
  },
  "/imgs/cashback_icon.png": {
    "type": "image/png",
    "etag": "\"86e-wyUXKnVQtMESQIRJU1/qWwD06lw\"",
    "mtime": "2023-07-17T07:44:00.940Z",
    "size": 2158,
    "path": "../public/imgs/cashback_icon.png"
  },
  "/imgs/cash_back.png": {
    "type": "image/png",
    "etag": "\"8dbe-W5JwW/JBcihBlvkKGhG3PzMXGX8\"",
    "mtime": "2023-07-17T07:44:00.940Z",
    "size": 36286,
    "path": "../public/imgs/cash_back.png"
  },
  "/imgs/casino_offers.png": {
    "type": "image/png",
    "etag": "\"639ec-92ST8QlVuSDGFooYpeeA/ZvCpQg\"",
    "mtime": "2023-07-17T07:44:00.942Z",
    "size": 408044,
    "path": "../public/imgs/casino_offers.png"
  },
  "/imgs/check.png": {
    "type": "image/png",
    "etag": "\"461-v59tVMoomvunUFfU3dUfEPapx2U\"",
    "mtime": "2023-07-17T07:44:00.942Z",
    "size": 1121,
    "path": "../public/imgs/check.png"
  },
  "/imgs/crypto_acceptable.png": {
    "type": "image/png",
    "etag": "\"ca0f-+pjNffdYilw3TMzfM7et8vDilaE\"",
    "mtime": "2023-07-17T07:44:00.943Z",
    "size": 51727,
    "path": "../public/imgs/crypto_acceptable.png"
  },
  "/imgs/data.svg": {
    "type": "image/svg+xml",
    "etag": "\"151e-MJIsRa23/A5Hk3zswd2kmg2oR84\"",
    "mtime": "2023-07-17T07:44:00.943Z",
    "size": 5406,
    "path": "../public/imgs/data.svg"
  },
  "/imgs/deposit.png": {
    "type": "image/png",
    "etag": "\"73c-mzlzkDmLecY8UTQ1brK9BPLOMNE\"",
    "mtime": "2023-07-17T07:44:00.943Z",
    "size": 1852,
    "path": "../public/imgs/deposit.png"
  },
  "/imgs/deposit_white.png": {
    "type": "image/png",
    "etag": "\"743-HtfbQVYAfR+1odSoM4a/St6xiRk\"",
    "mtime": "2023-07-17T07:44:00.944Z",
    "size": 1859,
    "path": "../public/imgs/deposit_white.png"
  },
  "/imgs/etirum.png": {
    "type": "image/png",
    "etag": "\"5f5c-ykoMJefvYAT0UbPbuRbVYezYy9I\"",
    "mtime": "2023-07-17T07:44:00.944Z",
    "size": 24412,
    "path": "../public/imgs/etirum.png"
  },
  "/imgs/free_spin_icon.png": {
    "type": "image/png",
    "etag": "\"ddf-vZ1XIPvrCW0wEJBfCOAhCFnaFbw\"",
    "mtime": "2023-07-17T07:44:00.946Z",
    "size": 3551,
    "path": "../public/imgs/free_spin_icon.png"
  },
  "/imgs/game.png": {
    "type": "image/png",
    "etag": "\"784-Y+fSdte418+IgAJPP1ip2qj6p5Y\"",
    "mtime": "2023-07-17T07:44:00.946Z",
    "size": 1924,
    "path": "../public/imgs/game.png"
  },
  "/imgs/gold.png": {
    "type": "image/png",
    "etag": "\"d761d-hJujThxOgZvMUE7G1MPuPB3lXv0\"",
    "mtime": "2023-07-17T07:44:00.951Z",
    "size": 882205,
    "path": "../public/imgs/gold.png"
  },
  "/imgs/hands.png": {
    "type": "image/png",
    "etag": "\"60a-eV+Y5jmQwHReqo97I7xTHPNqRS0\"",
    "mtime": "2023-07-17T07:44:00.952Z",
    "size": 1546,
    "path": "../public/imgs/hands.png"
  },
  "/imgs/happy.png": {
    "type": "image/png",
    "etag": "\"724f8-Bxu8f3s8CmeIJAEQcygL0aaSMMA\"",
    "mtime": "2023-07-17T07:44:00.953Z",
    "size": 468216,
    "path": "../public/imgs/happy.png"
  },
  "/imgs/history.png": {
    "type": "image/png",
    "etag": "\"883-Bl95Dvq77flaKM2AQMoU6oeQvxM\"",
    "mtime": "2023-07-17T07:44:00.961Z",
    "size": 2179,
    "path": "../public/imgs/history.png"
  },
  "/imgs/history_icon.png": {
    "type": "image/png",
    "etag": "\"582-Ik2m6VS/ITMKqCGZeUhGYgT8rkg\"",
    "mtime": "2023-07-17T07:44:00.961Z",
    "size": 1410,
    "path": "../public/imgs/history_icon.png"
  },
  "/imgs/info.png": {
    "type": "image/png",
    "etag": "\"5a7-sxmZoAB1AMGBsdKcExG0NClOfXQ\"",
    "mtime": "2023-07-17T07:44:00.961Z",
    "size": 1447,
    "path": "../public/imgs/info.png"
  },
  "/imgs/interac.png": {
    "type": "image/png",
    "etag": "\"1b86-vegHTjPpN7WvcNtARKuQkV1PpE8\"",
    "mtime": "2023-07-17T07:44:00.962Z",
    "size": 7046,
    "path": "../public/imgs/interac.png"
  },
  "/imgs/left.png": {
    "type": "image/png",
    "etag": "\"179-/984BEiAm1CBdob1OAG0qS8nYDs\"",
    "mtime": "2023-07-17T07:44:00.962Z",
    "size": 377,
    "path": "../public/imgs/left.png"
  },
  "/imgs/liveGames.png": {
    "type": "image/png",
    "etag": "\"ced-lqHIAnL4UaKd5Ja45/nUqmTpMRc\"",
    "mtime": "2023-07-17T07:44:00.962Z",
    "size": 3309,
    "path": "../public/imgs/liveGames.png"
  },
  "/imgs/logo.png": {
    "type": "image/png",
    "etag": "\"2abe-mpqxeEY1N1fq3xpTH0jvpL71ibg\"",
    "mtime": "2023-07-17T07:44:00.962Z",
    "size": 10942,
    "path": "../public/imgs/logo.png"
  },
  "/imgs/logout.png": {
    "type": "image/png",
    "etag": "\"85b-1rI75SCcMU/xVJI0sbxJMEK/XFk\"",
    "mtime": "2023-07-17T07:44:00.963Z",
    "size": 2139,
    "path": "../public/imgs/logout.png"
  },
  "/imgs/logo_full.png": {
    "type": "image/png",
    "etag": "\"c34e-PeacOSGDvdVlUjgf0VUH7LPpEI0\"",
    "mtime": "2023-07-17T07:44:00.963Z",
    "size": 49998,
    "path": "../public/imgs/logo_full.png"
  },
  "/imgs/main.png": {
    "type": "image/png",
    "etag": "\"1de4b4-Oxr1LQvFisIPbrdlPYUcyAynfzg\"",
    "mtime": "2023-07-17T07:44:00.975Z",
    "size": 1959092,
    "path": "../public/imgs/main.png"
  },
  "/imgs/main1.png": {
    "type": "image/png",
    "etag": "\"51a8e7-Uhn6e+Yob7P2/9s2zAI9Yoq4DHc\"",
    "mtime": "2023-07-17T07:44:01.008Z",
    "size": 5351655,
    "path": "../public/imgs/main1.png"
  },
  "/imgs/man_right.png": {
    "type": "image/png",
    "etag": "\"8b8b1-jpj2O9txK/iK4iAEpSwINkylh0Q\"",
    "mtime": "2023-07-17T07:44:01.011Z",
    "size": 571569,
    "path": "../public/imgs/man_right.png"
  },
  "/imgs/man_thumb.png": {
    "type": "image/png",
    "etag": "\"2b76c-umoFrnoOULkMrh3KhQmMwacxI7o\"",
    "mtime": "2023-07-17T07:44:01.012Z",
    "size": 178028,
    "path": "../public/imgs/man_thumb.png"
  },
  "/imgs/man_thumb_t.png": {
    "type": "image/png",
    "etag": "\"36464-G8zwmOLRsT3rd95qcX3vL7ePm4s\"",
    "mtime": "2023-07-17T07:44:01.014Z",
    "size": 222308,
    "path": "../public/imgs/man_thumb_t.png"
  },
  "/imgs/master_card.png": {
    "type": "image/png",
    "etag": "\"2c84-9eMS9m1Ol1/dL4++lj/IBj0QEw0\"",
    "mtime": "2023-07-17T07:44:01.014Z",
    "size": 11396,
    "path": "../public/imgs/master_card.png"
  },
  "/imgs/method.svg": {
    "type": "image/svg+xml",
    "etag": "\"210d-WvzaHo+CAzHHmW41JD00z07tcow\"",
    "mtime": "2023-07-17T07:44:01.014Z",
    "size": 8461,
    "path": "../public/imgs/method.svg"
  },
  "/imgs/new.png": {
    "type": "image/png",
    "etag": "\"12e116-IbSlionddLNye8AYL+SzHkHiv1E\"",
    "mtime": "2023-07-17T07:44:01.023Z",
    "size": 1237270,
    "path": "../public/imgs/new.png"
  },
  "/imgs/noGameImg.png": {
    "type": "image/png",
    "etag": "\"14c0-H+tpkc02zjOl4O27mFqWFHSE+SU\"",
    "mtime": "2023-07-17T07:44:01.023Z",
    "size": 5312,
    "path": "../public/imgs/noGameImg.png"
  },
  "/imgs/pack.png": {
    "type": "image/png",
    "etag": "\"310d7-72mxWON1NK500UcNxdM49thYq5s\"",
    "mtime": "2023-07-17T07:44:01.024Z",
    "size": 200919,
    "path": "../public/imgs/pack.png"
  },
  "/imgs/promotion.png": {
    "type": "image/png",
    "etag": "\"31f33-E00J034AOmCW+zqUwktnX/hm8v8\"",
    "mtime": "2023-07-17T07:44:01.030Z",
    "size": 204595,
    "path": "../public/imgs/promotion.png"
  },
  "/imgs/right.png": {
    "type": "image/png",
    "etag": "\"183-y+QOLqJ8WJbGfca+YIyRYepYCvc\"",
    "mtime": "2023-07-17T07:44:01.030Z",
    "size": 387,
    "path": "../public/imgs/right.png"
  },
  "/imgs/search.png": {
    "type": "image/png",
    "etag": "\"cf2-Pp+KK22hNPt98OmHR2Gm56VaNo0\"",
    "mtime": "2023-07-17T07:44:01.031Z",
    "size": 3314,
    "path": "../public/imgs/search.png"
  },
  "/imgs/silver.png": {
    "type": "image/png",
    "etag": "\"c567c-B33MCWoW0p7ez2aVU9Hon6sHyZQ\"",
    "mtime": "2023-07-17T07:44:01.066Z",
    "size": 808572,
    "path": "../public/imgs/silver.png"
  },
  "/imgs/slot-grey.png": {
    "type": "image/png",
    "etag": "\"1fe6-xLTHq4asUFN7qynGyZG0YgOQdVY\"",
    "mtime": "2023-07-17T07:44:01.066Z",
    "size": 8166,
    "path": "../public/imgs/slot-grey.png"
  },
  "/imgs/slot.png": {
    "type": "image/png",
    "etag": "\"1939-Y8TnIsxhVIJjfFA4CHRaTo62SJY\"",
    "mtime": "2023-07-17T07:44:01.066Z",
    "size": 6457,
    "path": "../public/imgs/slot.png"
  },
  "/imgs/sportbook.png": {
    "type": "image/png",
    "etag": "\"6a289-Nh8XNdlFelkgaZuDESP5JA2mPHQ\"",
    "mtime": "2023-07-17T07:44:01.068Z",
    "size": 434825,
    "path": "../public/imgs/sportbook.png"
  },
  "/imgs/sports-icon.png": {
    "type": "image/png",
    "etag": "\"1c45-0WmEJTK0+XTeC7QASZYlvFsuEms\"",
    "mtime": "2023-07-17T07:44:01.068Z",
    "size": 7237,
    "path": "../public/imgs/sports-icon.png"
  },
  "/imgs/submit.svg": {
    "type": "image/svg+xml",
    "etag": "\"1369-gMe/530ClgkCOzqhnSyaocUgbyA\"",
    "mtime": "2023-07-17T07:44:01.068Z",
    "size": 4969,
    "path": "../public/imgs/submit.svg"
  },
  "/imgs/tournaments1.png": {
    "type": "image/png",
    "etag": "\"1dd956-WFUosJQmzhgcvDh0L8dEo6Hizzc\"",
    "mtime": "2023-07-17T07:44:01.082Z",
    "size": 1956182,
    "path": "../public/imgs/tournaments1.png"
  },
  "/imgs/tournaments2.png": {
    "type": "image/png",
    "etag": "\"17bf7f-xFHKRKcOLDVF9L9f5OsTcuY6SLw\"",
    "mtime": "2023-07-17T07:44:01.087Z",
    "size": 1556351,
    "path": "../public/imgs/tournaments2.png"
  },
  "/imgs/tournaments3.png": {
    "type": "image/png",
    "etag": "\"13e363-FNY2Nz24XPueYFFWN+lzE/XnAbU\"",
    "mtime": "2023-07-17T07:44:01.092Z",
    "size": 1303395,
    "path": "../public/imgs/tournaments3.png"
  },
  "/imgs/tournaments4.png": {
    "type": "image/png",
    "etag": "\"ec654-XPIz28wsKyGPpyY4db5p7IMSjlc\"",
    "mtime": "2023-07-17T07:44:01.098Z",
    "size": 968276,
    "path": "../public/imgs/tournaments4.png"
  },
  "/imgs/tournament_card.png": {
    "type": "image/png",
    "etag": "\"2716dd-API1dx3+ByKVFAeZwENHQ9KhGAI\"",
    "mtime": "2023-07-17T07:44:01.076Z",
    "size": 2561757,
    "path": "../public/imgs/tournament_card.png"
  },
  "/imgs/up.png": {
    "type": "image/png",
    "etag": "\"4f12f-n779w5b8c7yd2Qk3NQHFLTw6sHA\"",
    "mtime": "2023-07-17T07:44:01.100Z",
    "size": 323887,
    "path": "../public/imgs/up.png"
  },
  "/imgs/vip.png": {
    "type": "image/png",
    "etag": "\"3a7af5-VPo8lVjWC1A4lTTmGekG3yvTtBc\"",
    "mtime": "2023-07-17T07:44:01.113Z",
    "size": 3832565,
    "path": "../public/imgs/vip.png"
  },
  "/imgs/visa.png": {
    "type": "image/png",
    "etag": "\"2aab-0SjR3QVwLbMpE96FP4tLh97R25M\"",
    "mtime": "2023-07-17T07:44:01.113Z",
    "size": 10923,
    "path": "../public/imgs/visa.png"
  },
  "/imgs/welcome.png": {
    "type": "image/png",
    "etag": "\"b26916-jNwlhNNxpizcOpW1aqeOY3R/6AQ\"",
    "mtime": "2023-07-17T07:44:01.180Z",
    "size": 11692310,
    "path": "../public/imgs/welcome.png"
  },
  "/imgs/wheel.png": {
    "type": "image/png",
    "etag": "\"8e6c4-O4cm43MCVKXWTH3WHsakHIgA64M\"",
    "mtime": "2023-07-17T07:44:01.183Z",
    "size": 583364,
    "path": "../public/imgs/wheel.png"
  },
  "/imgs/withdrawl.png": {
    "type": "image/png",
    "etag": "\"4cc-hUCty50ZWOWVA8pk+HIDRVGf30U\"",
    "mtime": "2023-07-17T07:44:01.186Z",
    "size": 1228,
    "path": "../public/imgs/withdrawl.png"
  },
  "/imgs/withdrawl_history.png": {
    "type": "image/png",
    "etag": "\"55f-cUa/I5d0J0iqc4kWeWhkoZg/4N8\"",
    "mtime": "2023-07-17T07:44:01.187Z",
    "size": 1375,
    "path": "../public/imgs/withdrawl_history.png"
  },
  "/_nuxt/Activity.vue.2230a8a7.js": {
    "type": "application/javascript",
    "etag": "\"5ce-cofvv8idJ8WAKbhAevVmxpns49g\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 1486,
    "path": "../public/_nuxt/Activity.vue.2230a8a7.js"
  },
  "/_nuxt/auth.ee464f8a.js": {
    "type": "application/javascript",
    "etag": "\"ee9-C7P9hhcSmxQr0aYje/aY2EjcwxU\"",
    "mtime": "2023-09-03T02:21:27.743Z",
    "size": 3817,
    "path": "../public/_nuxt/auth.ee464f8a.js"
  },
  "/_nuxt/Axios.7e581d43.js": {
    "type": "application/javascript",
    "etag": "\"72df-kG4+Ozn3WReO0upKeVCzNtPfvlc\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 29407,
    "path": "../public/_nuxt/Axios.7e581d43.js"
  },
  "/_nuxt/bonus-terms-and-conditions.76fec71f.js": {
    "type": "application/javascript",
    "etag": "\"20ab-BYzjs6BOO96+ADtgM14HkzRlWN4\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 8363,
    "path": "../public/_nuxt/bonus-terms-and-conditions.76fec71f.js"
  },
  "/_nuxt/CategoryBar.vue.f70a46d9.js": {
    "type": "application/javascript",
    "etag": "\"641b-kdn9yewLJRrXpHLD98G1ubsnnVk\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 25627,
    "path": "../public/_nuxt/CategoryBar.vue.f70a46d9.js"
  },
  "/_nuxt/ClosePopup.0ef3e49f.js": {
    "type": "application/javascript",
    "etag": "\"2c4-jv0nRZllv9mk8FyM7ldDe47TnEk\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 708,
    "path": "../public/_nuxt/ClosePopup.0ef3e49f.js"
  },
  "/_nuxt/contact-us.a5e8386e.js": {
    "type": "application/javascript",
    "etag": "\"db3-OGSXiQoq7r16DxL7e0nWEZPQPuE\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 3507,
    "path": "../public/_nuxt/contact-us.a5e8386e.js"
  },
  "/_nuxt/default.f1662a12.js": {
    "type": "application/javascript",
    "etag": "\"1758d5-R4B0KiZQz8J3gcN45v/2O3xT7MA\"",
    "mtime": "2023-09-03T02:21:27.754Z",
    "size": 1530069,
    "path": "../public/_nuxt/default.f1662a12.js"
  },
  "/_nuxt/Deposit-Policy.b35472ed.js": {
    "type": "application/javascript",
    "etag": "\"605-jgEGh3DnivSpzjWcF8IbA527+Ek\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 1541,
    "path": "../public/_nuxt/Deposit-Policy.b35472ed.js"
  },
  "/_nuxt/empty.55ff6c27.js": {
    "type": "application/javascript",
    "etag": "\"c4-tiEppr6WhQJA5EJdHECugvdp8Xo\"",
    "mtime": "2023-09-03T02:21:27.696Z",
    "size": 196,
    "path": "../public/_nuxt/empty.55ff6c27.js"
  },
  "/_nuxt/entry.d53c4177.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"23a-Na65E6tsJ/0YmnD82nX+gapt2Ac\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 570,
    "path": "../public/_nuxt/entry.d53c4177.css"
  },
  "/_nuxt/entry.f5acf7d2.js": {
    "type": "application/javascript",
    "etag": "\"46123-qOZwfmvb3dOxwrxR+WD4+yI9dJo\"",
    "mtime": "2023-09-03T02:21:27.753Z",
    "size": 287011,
    "path": "../public/_nuxt/entry.f5acf7d2.js"
  },
  "/_nuxt/error-404.8bdbaeb8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-jl7r/kE1FF0H+CLPNh+07RJXuFI\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.8bdbaeb8.css"
  },
  "/_nuxt/error-404.e7982469.js": {
    "type": "application/javascript",
    "etag": "\"8d2-pwC8VlohWF2eiYd1poqlaAGtYaQ\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 2258,
    "path": "../public/_nuxt/error-404.e7982469.js"
  },
  "/_nuxt/error-500.696156e5.js": {
    "type": "application/javascript",
    "etag": "\"756-epSx2h9ajuQlTH7orfm6ANKOJqk\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.696156e5.js"
  },
  "/_nuxt/error-500.b63a96f5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-loEWA9n4Kq4UMBzJyT6hY9SSl00\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.b63a96f5.css"
  },
  "/_nuxt/Fairness-RNG-Testing.18a054cc.js": {
    "type": "application/javascript",
    "etag": "\"5d0-yJ0h78e9wOATrxlJrxb7LOHVfio\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 1488,
    "path": "../public/_nuxt/Fairness-RNG-Testing.18a054cc.js"
  },
  "/_nuxt/faq.d7423641.js": {
    "type": "application/javascript",
    "etag": "\"11fb-4xruOc5wid5EkP+oH0kjpcG0f9Q\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 4603,
    "path": "../public/_nuxt/faq.d7423641.js"
  },
  "/_nuxt/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff": {
    "type": "font/woff",
    "etag": "\"28430-5Lt8HkDT/r7ljflj2ydrK/aMEXs\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 164912,
    "path": "../public/_nuxt/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff"
  },
  "/_nuxt/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2": {
    "type": "font/woff2",
    "etag": "\"1f668-qq6TsUbZdzf6voemvHQRE+aJmtM\"",
    "mtime": "2023-09-03T02:21:27.691Z",
    "size": 128616,
    "path": "../public/_nuxt/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2"
  },
  "/_nuxt/game.9a19a91a.js": {
    "type": "application/javascript",
    "etag": "\"1cc3-wB8rukat9ZJGzPUKjlnnu4Xe4Hs\"",
    "mtime": "2023-09-03T02:21:27.741Z",
    "size": 7363,
    "path": "../public/_nuxt/game.9a19a91a.js"
  },
  "/_nuxt/index.0798c5b9.js": {
    "type": "application/javascript",
    "etag": "\"65f-DsUp7npIVno9Gi4O8uVD9Izls8Y\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 1631,
    "path": "../public/_nuxt/index.0798c5b9.js"
  },
  "/_nuxt/index.a15e7708.js": {
    "type": "application/javascript",
    "etag": "\"579c-Ya2yxw4GcTy+6URO8rf4vF4Lur4\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 22428,
    "path": "../public/_nuxt/index.a15e7708.js"
  },
  "/_nuxt/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff": {
    "type": "font/woff",
    "etag": "\"4fd4-I8tjD0QkvL+zOQN3Z7KlTKMvbh4\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20436,
    "path": "../public/_nuxt/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff"
  },
  "/_nuxt/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff": {
    "type": "font/woff",
    "etag": "\"5040-Au3HeE6oCvwlgiTzy4yG3SM6rxk\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20544,
    "path": "../public/_nuxt/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff"
  },
  "/_nuxt/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff": {
    "type": "font/woff",
    "etag": "\"4fc0-Gc7FPDx8IEL3EGa3qS1sjX4ge9c\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20416,
    "path": "../public/_nuxt/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff"
  },
  "/_nuxt/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff": {
    "type": "font/woff",
    "etag": "\"4fb8-a68sfMOgNnbBDOhy75+hqk4YWQE\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20408,
    "path": "../public/_nuxt/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff"
  },
  "/_nuxt/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff": {
    "type": "font/woff",
    "etag": "\"4fc8-1KI7Ey4cqKbLTmeNUZ9q4AqKrFg\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20424,
    "path": "../public/_nuxt/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff"
  },
  "/_nuxt/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff": {
    "type": "font/woff",
    "etag": "\"4f78-2c/mtHe0nUe2JBtCgfSFjZjqymU\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 20344,
    "path": "../public/_nuxt/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff"
  },
  "/_nuxt/KYC-AML-Policy.26c40cd7.js": {
    "type": "application/javascript",
    "etag": "\"6237-VNPmx5BGhljG+EQIeDcCGohsmm0\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 25143,
    "path": "../public/_nuxt/KYC-AML-Policy.26c40cd7.js"
  },
  "/_nuxt/link.a9795c7f.js": {
    "type": "application/javascript",
    "etag": "\"159-3YSC6APOQwUeFr7SQamQUnAEOe0\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 345,
    "path": "../public/_nuxt/link.a9795c7f.js"
  },
  "/_nuxt/Montserrat-Italic-VariableFont_wght.620f4f0e.ttf": {
    "type": "font/ttf",
    "etag": "\"37054-K+V5Xx+AvL2SvXu2HJJbanKUTIw\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 225364,
    "path": "../public/_nuxt/Montserrat-Italic-VariableFont_wght.620f4f0e.ttf"
  },
  "/_nuxt/Montserrat-VariableFont_wght.d2f99d4d.ttf": {
    "type": "font/ttf",
    "etag": "\"365f8-zttbpa9qGOnB6cH2p51/yo3W+UI\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 222712,
    "path": "../public/_nuxt/Montserrat-VariableFont_wght.d2f99d4d.ttf"
  },
  "/_nuxt/nuxt-link.5e334682.js": {
    "type": "application/javascript",
    "etag": "\"1105-U2X0wV4Ttg/cahUk0SxnrFFrR/4\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 4357,
    "path": "../public/_nuxt/nuxt-link.5e334682.js"
  },
  "/_nuxt/others.e94753e7.js": {
    "type": "application/javascript",
    "etag": "\"299-9pEFyhyGlWOZZS9hvj2lYzpyZaE\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 665,
    "path": "../public/_nuxt/others.e94753e7.js"
  },
  "/_nuxt/page.de2ab929.js": {
    "type": "application/javascript",
    "etag": "\"c07-Tgs3UGUL8My7/OdapazO+smDIYw\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 3079,
    "path": "../public/_nuxt/page.de2ab929.js"
  },
  "/_nuxt/Payment-Details-Policy.8c211b91.js": {
    "type": "application/javascript",
    "etag": "\"e40-P6cBq2+q/5hLkcVu+usit5xFpLo\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 3648,
    "path": "../public/_nuxt/Payment-Details-Policy.8c211b91.js"
  },
  "/_nuxt/privacy-and-security-policy.efca04b7.js": {
    "type": "application/javascript",
    "etag": "\"ec8-GcXyZXiM82arbamHEYunxi1NYdc\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 3784,
    "path": "../public/_nuxt/privacy-and-security-policy.efca04b7.js"
  },
  "/_nuxt/Privacy-Policy.83a2ca7d.js": {
    "type": "application/javascript",
    "etag": "\"467f-Rc4eiFeeW5hhUsVAP2clQ/++M5U\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 18047,
    "path": "../public/_nuxt/Privacy-Policy.83a2ca7d.js"
  },
  "/_nuxt/promotions.525b63be.js": {
    "type": "application/javascript",
    "etag": "\"d83-ljJ9QPBtIo5mgA7AJh7oPoMbIlw\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 3459,
    "path": "../public/_nuxt/promotions.525b63be.js"
  },
  "/_nuxt/ProviderList.a140f1f2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"46ca-4r+l8LM8lTJDCxk3sZW236DTFYk\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 18122,
    "path": "../public/_nuxt/ProviderList.a140f1f2.css"
  },
  "/_nuxt/ProviderList.vue.3104e8c8.js": {
    "type": "application/javascript",
    "etag": "\"16014-yW9+tlJNrl1qIrFE4gJvyheJ0kY\"",
    "mtime": "2023-09-03T02:21:27.753Z",
    "size": 90132,
    "path": "../public/_nuxt/ProviderList.vue.3104e8c8.js"
  },
  "/_nuxt/QImg.248a6a92.js": {
    "type": "application/javascript",
    "etag": "\"caf-gTci6xvuUrreqvb1qx5FXBu+TqI\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 3247,
    "path": "../public/_nuxt/QImg.248a6a92.js"
  },
  "/_nuxt/QLinearProgress.6a358f6e.js": {
    "type": "application/javascript",
    "etag": "\"7b1-5EyukaibMubZPPgeS5SOfNWN5aY\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 1969,
    "path": "../public/_nuxt/QLinearProgress.6a358f6e.js"
  },
  "/_nuxt/QPopupProxy.0816d406.js": {
    "type": "application/javascript",
    "etag": "\"7161-6Ua9YeZawMFbOYLJz6SLXYdIHsI\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 29025,
    "path": "../public/_nuxt/QPopupProxy.0816d406.js"
  },
  "/_nuxt/QSelect.a986b9b7.js": {
    "type": "application/javascript",
    "etag": "\"a537-IbeRiA+QSjk3QDjHE23/qnLvTsg\"",
    "mtime": "2023-09-03T02:21:27.753Z",
    "size": 42295,
    "path": "../public/_nuxt/QSelect.a986b9b7.js"
  },
  "/_nuxt/QStepper.eb19bbc4.js": {
    "type": "application/javascript",
    "etag": "\"1ceb-qkQB/BmbfPtUxIsVkFMj+hKjAxw\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 7403,
    "path": "../public/_nuxt/QStepper.eb19bbc4.js"
  },
  "/_nuxt/responsible-gambling.ef310eaa.js": {
    "type": "application/javascript",
    "etag": "\"f2b-a7lrTJ04iwvyun12cVwqJeLMybg\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 3883,
    "path": "../public/_nuxt/responsible-gambling.ef310eaa.js"
  },
  "/_nuxt/Self-exclusion.3a997623.js": {
    "type": "application/javascript",
    "etag": "\"b68-isL5nSnt8Q6vq1847L5qA9cviZY\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 2920,
    "path": "../public/_nuxt/Self-exclusion.3a997623.js"
  },
  "/_nuxt/string.b5df6010.js": {
    "type": "application/javascript",
    "etag": "\"d6-MpnrFpRX8iU2GwYuodA3g/tpmNc\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 214,
    "path": "../public/_nuxt/string.b5df6010.js"
  },
  "/_nuxt/terms-and-conditions.23dd656a.js": {
    "type": "application/javascript",
    "etag": "\"315b-ogbmwaginALyRKZmTKDayyL1l5c\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 12635,
    "path": "../public/_nuxt/terms-and-conditions.23dd656a.js"
  },
  "/_nuxt/Tournament.5d5fdc5e.js": {
    "type": "application/javascript",
    "etag": "\"cc0-NspI2jpTD53pJtHef67o1nQeR2I\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 3264,
    "path": "../public/_nuxt/Tournament.5d5fdc5e.js"
  },
  "/_nuxt/tran.8aef489d.js": {
    "type": "application/javascript",
    "etag": "\"127-O/tsn8SbEDNTOVcS11fCIBqIh5U\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 295,
    "path": "../public/_nuxt/tran.8aef489d.js"
  },
  "/_nuxt/translation.1fefddbb.js": {
    "type": "application/javascript",
    "etag": "\"196334-kpMLvY9O0O0X3nj3s/pM3aYxbxA\"",
    "mtime": "2023-09-03T02:21:27.754Z",
    "size": 1663796,
    "path": "../public/_nuxt/translation.1fefddbb.js"
  },
  "/_nuxt/translation.70cd54bd.js": {
    "type": "application/javascript",
    "etag": "\"55-QACDnX5y6bblin9eFbLx+ns02M4\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 85,
    "path": "../public/_nuxt/translation.70cd54bd.js"
  },
  "/_nuxt/VIP.0074aa43.js": {
    "type": "application/javascript",
    "etag": "\"114e-+/mIVXvx/fodEnV/ACEQPamRhlU\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 4430,
    "path": "../public/_nuxt/VIP.0074aa43.js"
  },
  "/_nuxt/wallet.20d7997b.js": {
    "type": "application/javascript",
    "etag": "\"2194-jBzvzIDciywRd2Op0zDIRavo67E\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 8596,
    "path": "../public/_nuxt/wallet.20d7997b.js"
  },
  "/_nuxt/Wheel.daab6a36.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f3-EO4FkemvKHAjwv7A528N9wXPafI\"",
    "mtime": "2023-09-03T02:21:27.694Z",
    "size": 499,
    "path": "../public/_nuxt/Wheel.daab6a36.css"
  },
  "/_nuxt/Wheel.df262198.js": {
    "type": "application/javascript",
    "etag": "\"abf-U9SasOs4dRRhYRDSDvekAFmz0XQ\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 2751,
    "path": "../public/_nuxt/Wheel.df262198.js"
  },
  "/_nuxt/Withdrawal-Policy.03458dd9.js": {
    "type": "application/javascript",
    "etag": "\"130c-swbfsZY6YT47Y9JT+rivnl76fGY\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 4876,
    "path": "../public/_nuxt/Withdrawal-Policy.03458dd9.js"
  },
  "/_nuxt/_...all_.d48ec052.js": {
    "type": "application/javascript",
    "etag": "\"2f1-xuK4K0qPl3gU9skCPT0NfwDRvBk\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 753,
    "path": "../public/_nuxt/_...all_.d48ec052.js"
  },
  "/_nuxt/_slug_.e7976547.js": {
    "type": "application/javascript",
    "etag": "\"1256-kBIyrJrSou8rjvVIOhGbpMu/M8Y\"",
    "mtime": "2023-09-03T02:21:27.740Z",
    "size": 4694,
    "path": "../public/_nuxt/_slug_.e7976547.js"
  },
  "/_nuxt/_tab_.159837d9.js": {
    "type": "application/javascript",
    "etag": "\"6ea0-nguvikhD1sX9fBFxCnUm3z1owJI\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 28320,
    "path": "../public/_nuxt/_tab_.159837d9.js"
  },
  "/_nuxt/_tab_.50047c54.js": {
    "type": "application/javascript",
    "etag": "\"5e5e-Og17ISLq4PMwNvxZW+ICD3+CCJs\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 24158,
    "path": "../public/_nuxt/_tab_.50047c54.js"
  },
  "/_nuxt/_tab_.510fcda1.js": {
    "type": "application/javascript",
    "etag": "\"4a7b-HTSZci6PtXldVfCF3S43jWL3tjc\"",
    "mtime": "2023-09-03T02:21:27.744Z",
    "size": 19067,
    "path": "../public/_nuxt/_tab_.510fcda1.js"
  },
  "/imgs/bonus/1.png": {
    "type": "image/png",
    "etag": "\"a832c-++THm2vYMrZdTfDa5DI5OcK8ReY\"",
    "mtime": "2023-07-17T07:44:00.923Z",
    "size": 688940,
    "path": "../public/imgs/bonus/1.png"
  },
  "/imgs/bonus/2.png": {
    "type": "image/png",
    "etag": "\"cd242-TbinIq/suJbBHZAOWmoTz9/9JBU\"",
    "mtime": "2023-07-17T07:44:00.926Z",
    "size": 840258,
    "path": "../public/imgs/bonus/2.png"
  },
  "/imgs/bonus/3.png": {
    "type": "image/png",
    "etag": "\"d0990-68t4DdWQqTRVkNZbzQaBfaciAfk\"",
    "mtime": "2023-07-17T07:44:00.929Z",
    "size": 854416,
    "path": "../public/imgs/bonus/3.png"
  },
  "/imgs/bonus/4.png": {
    "type": "image/png",
    "etag": "\"d74f3-F7LDzgew3TWdZuiAIxra4YzM2qI\"",
    "mtime": "2023-07-17T07:44:00.932Z",
    "size": 881907,
    "path": "../public/imgs/bonus/4.png"
  },
  "/imgs/bonus/5.png": {
    "type": "image/png",
    "etag": "\"120ff1-Rw4wA3qTt0ewXXwVmzDrEBxR4/k\"",
    "mtime": "2023-07-17T07:44:00.936Z",
    "size": 1183729,
    "path": "../public/imgs/bonus/5.png"
  },
  "/imgs/bonus/6.png": {
    "type": "image/png",
    "etag": "\"131d3d-ZDQwiCa2KqBEAFAsOBw3H0Vir9I\"",
    "mtime": "2023-07-17T07:44:00.940Z",
    "size": 1252669,
    "path": "../public/imgs/bonus/6.png"
  },
  "/imgs/footer/facebook.png": {
    "type": "image/png",
    "etag": "\"262-/3dtn0k10B346Yn6JfTLwV0pNqw\"",
    "mtime": "2023-07-17T07:44:00.944Z",
    "size": 610,
    "path": "../public/imgs/footer/facebook.png"
  },
  "/imgs/footer/instagram.png": {
    "type": "image/png",
    "etag": "\"79f-aINsqetWIPgpMuITGJoIsd1oXbs\"",
    "mtime": "2023-07-17T07:44:00.944Z",
    "size": 1951,
    "path": "../public/imgs/footer/instagram.png"
  },
  "/imgs/footer/linkdin.png": {
    "type": "image/png",
    "etag": "\"40a-G37F1XAJ5Wim124FfZ9+x9NiAfI\"",
    "mtime": "2023-07-17T07:44:00.945Z",
    "size": 1034,
    "path": "../public/imgs/footer/linkdin.png"
  },
  "/imgs/footer/payment.png": {
    "type": "image/png",
    "etag": "\"25b7-+lz0JxExRBsdS1emxZpK0/QMCSo\"",
    "mtime": "2023-07-17T07:44:00.945Z",
    "size": 9655,
    "path": "../public/imgs/footer/payment.png"
  },
  "/imgs/footer/telegram.png": {
    "type": "image/png",
    "etag": "\"53f-fhAUF2/Opf3HEN0dBBaczeufcQ4\"",
    "mtime": "2023-07-17T07:44:00.945Z",
    "size": 1343,
    "path": "../public/imgs/footer/telegram.png"
  },
  "/imgs/footer/twitter.png": {
    "type": "image/png",
    "etag": "\"641-o0S1WciVOLCDc2Qql2dP340R9EQ\"",
    "mtime": "2023-07-17T07:44:00.945Z",
    "size": 1601,
    "path": "../public/imgs/footer/twitter.png"
  },
  "/imgs/footer/youtube.png": {
    "type": "image/png",
    "etag": "\"433-4AMZh7dAc5vYZE7NzZywVC2RaFY\"",
    "mtime": "2023-07-17T07:44:00.946Z",
    "size": 1075,
    "path": "../public/imgs/footer/youtube.png"
  },
  "/imgs/header/avatarFemale.png": {
    "type": "image/png",
    "etag": "\"1208b-b0vurKKr6AwQyZ3cEziUkLOjqMw\"",
    "mtime": "2023-07-17T07:44:00.955Z",
    "size": 73867,
    "path": "../public/imgs/header/avatarFemale.png"
  },
  "/imgs/header/avatarMale.png": {
    "type": "image/png",
    "etag": "\"1af53-5uwEcoor+RBgffwhee+dgSIxI9Q\"",
    "mtime": "2023-07-17T07:44:00.955Z",
    "size": 110419,
    "path": "../public/imgs/header/avatarMale.png"
  },
  "/imgs/header/bonus.png": {
    "type": "image/png",
    "etag": "\"2fe-8bzR2XLKnfhk5MxhgBLiFbDeuaY\"",
    "mtime": "2023-07-17T07:44:00.956Z",
    "size": 766,
    "path": "../public/imgs/header/bonus.png"
  },
  "/imgs/header/casino-icon.png": {
    "type": "image/png",
    "etag": "\"32b4-2iMY1XISgdIQicGwRu4D9OGgZyc\"",
    "mtime": "2023-07-17T07:44:00.956Z",
    "size": 12980,
    "path": "../public/imgs/header/casino-icon.png"
  },
  "/imgs/header/deposit.png": {
    "type": "image/png",
    "etag": "\"7c9-k2c8KovyrL1g3SXnhJm+MTivj/w\"",
    "mtime": "2023-07-17T07:44:00.956Z",
    "size": 1993,
    "path": "../public/imgs/header/deposit.png"
  },
  "/imgs/header/en.png": {
    "type": "image/png",
    "etag": "\"6b5-y0onTNqoSb9F2kn8x9PoPUb8FBo\"",
    "mtime": "2023-07-17T07:44:00.956Z",
    "size": 1717,
    "path": "../public/imgs/header/en.png"
  },
  "/imgs/header/en_large.png": {
    "type": "image/png",
    "etag": "\"2114-sqVgdai3FHOE5V8yQkjKsIwRy2k\"",
    "mtime": "2023-07-17T07:44:00.956Z",
    "size": 8468,
    "path": "../public/imgs/header/en_large.png"
  },
  "/imgs/header/es.png": {
    "type": "image/png",
    "etag": "\"7ad-LsX8oVxa7usJeUIHNc+1PQl9rZ8\"",
    "mtime": "2023-07-17T07:44:00.957Z",
    "size": 1965,
    "path": "../public/imgs/header/es.png"
  },
  "/imgs/header/es_large.png": {
    "type": "image/png",
    "etag": "\"16474-vSS/l1Ytrjou51lFhgoa8Rzx3Ck\"",
    "mtime": "2023-07-17T07:44:00.957Z",
    "size": 91252,
    "path": "../public/imgs/header/es_large.png"
  },
  "/imgs/header/fr.png": {
    "type": "image/png",
    "etag": "\"3b5-fbtAirb+QsWLzHjKX2PUFGRU58c\"",
    "mtime": "2023-07-17T07:44:00.958Z",
    "size": 949,
    "path": "../public/imgs/header/fr.png"
  },
  "/imgs/header/fr_large.png": {
    "type": "image/png",
    "etag": "\"1d7-eXMGnRwawfAiHUCbzaUPcntMyHQ\"",
    "mtime": "2023-07-17T07:44:00.958Z",
    "size": 471,
    "path": "../public/imgs/header/fr_large.png"
  },
  "/imgs/header/game.png": {
    "type": "image/png",
    "etag": "\"44b-cVge9bk/RTpAA/L768AU/p1BizQ\"",
    "mtime": "2023-07-17T07:44:00.958Z",
    "size": 1099,
    "path": "../public/imgs/header/game.png"
  },
  "/imgs/header/gm.png": {
    "type": "image/png",
    "etag": "\"11b9-EJV7KHBZBMtgFlrZtU5m9jePNJ0\"",
    "mtime": "2023-07-25T18:15:59.171Z",
    "size": 4537,
    "path": "../public/imgs/header/gm.png"
  },
  "/imgs/header/gm_large.png": {
    "type": "image/png",
    "etag": "\"14f-Qj+NEn/HH2vBcKfUV4MnN+C26hU\"",
    "mtime": "2023-07-25T18:06:44.246Z",
    "size": 335,
    "path": "../public/imgs/header/gm_large.png"
  },
  "/imgs/header/it.png": {
    "type": "image/png",
    "etag": "\"1325-hupJXwnUMnnu/0ykIG43rMin5Zc\"",
    "mtime": "2023-07-25T18:17:34.543Z",
    "size": 4901,
    "path": "../public/imgs/header/it.png"
  },
  "/imgs/header/it_large.png": {
    "type": "image/png",
    "etag": "\"158-BNM62dM8Yt973752URpZGHzwO3M\"",
    "mtime": "2023-07-25T18:07:46.536Z",
    "size": 344,
    "path": "../public/imgs/header/it_large.png"
  },
  "/imgs/header/logout.png": {
    "type": "image/png",
    "etag": "\"32f-M/e1JlgMrsJbYz+k+IkfynomsNA\"",
    "mtime": "2023-07-17T07:44:00.959Z",
    "size": 815,
    "path": "../public/imgs/header/logout.png"
  },
  "/imgs/header/logo_full.png": {
    "type": "image/png",
    "etag": "\"c34e-PeacOSGDvdVlUjgf0VUH7LPpEI0\"",
    "mtime": "2023-07-17T07:44:00.958Z",
    "size": 49998,
    "path": "../public/imgs/header/logo_full.png"
  },
  "/imgs/header/menu_left.png": {
    "type": "image/png",
    "etag": "\"31c-MojmsmSs7QVUuWfDvRYNPtXR/1Q\"",
    "mtime": "2023-07-17T07:44:00.959Z",
    "size": 796,
    "path": "../public/imgs/header/menu_left.png"
  },
  "/imgs/header/menu_right.png": {
    "type": "image/png",
    "etag": "\"909-Q2W7K2ENbOwkYiMWg+9GLw0U9Kw\"",
    "mtime": "2023-07-17T07:44:00.959Z",
    "size": 2313,
    "path": "../public/imgs/header/menu_right.png"
  },
  "/imgs/header/pl.png": {
    "type": "image/png",
    "etag": "\"1212-v0dwGaBuLV7hsjKTCn2opHB1Gvc\"",
    "mtime": "2023-07-25T18:18:25.158Z",
    "size": 4626,
    "path": "../public/imgs/header/pl.png"
  },
  "/imgs/header/pl_large.png": {
    "type": "image/png",
    "etag": "\"122-Yi2g5Uom6nSLnzX1eU/FbrkpOSU\"",
    "mtime": "2023-07-25T18:08:23.481Z",
    "size": 290,
    "path": "../public/imgs/header/pl_large.png"
  },
  "/imgs/header/promotion.png": {
    "type": "image/png",
    "etag": "\"110a-qAwocNch6iZW0iQZY05N9ebzFSY\"",
    "mtime": "2023-07-17T07:44:00.959Z",
    "size": 4362,
    "path": "../public/imgs/header/promotion.png"
  },
  "/imgs/header/pt.png": {
    "type": "image/png",
    "etag": "\"943-nRgEAYatsMhDbXlq5nDm0D8SPPY\"",
    "mtime": "2023-07-17T07:44:00.959Z",
    "size": 2371,
    "path": "../public/imgs/header/pt.png"
  },
  "/imgs/header/pt_large.png": {
    "type": "image/png",
    "etag": "\"1adb-ZjiziSpQNlQFViTMc3kB4U1VoRI\"",
    "mtime": "2023-07-17T07:44:00.960Z",
    "size": 6875,
    "path": "../public/imgs/header/pt_large.png"
  },
  "/imgs/header/search.png": {
    "type": "image/png",
    "etag": "\"18a-fO1UAFCr6yn1z6Qi7hq9X7AgcIs\"",
    "mtime": "2023-07-17T07:44:00.960Z",
    "size": 394,
    "path": "../public/imgs/header/search.png"
  },
  "/imgs/header/sports-icon.png": {
    "type": "image/png",
    "etag": "\"1c45-0WmEJTK0+XTeC7QASZYlvFsuEms\"",
    "mtime": "2023-07-17T07:44:00.960Z",
    "size": 7237,
    "path": "../public/imgs/header/sports-icon.png"
  },
  "/imgs/header/sr.png": {
    "type": "image/png",
    "etag": "\"8d2-riZYZVIjSwqYX3Hb0xEMWGtFPVs\"",
    "mtime": "2023-07-17T07:44:00.960Z",
    "size": 2258,
    "path": "../public/imgs/header/sr.png"
  },
  "/imgs/header/sr_large.png": {
    "type": "image/png",
    "etag": "\"220a-+JSC7dXrUgtsHN/aL4ph/qiN18I\"",
    "mtime": "2023-07-17T07:44:00.960Z",
    "size": 8714,
    "path": "../public/imgs/header/sr_large.png"
  },
  "/imgs/header/user.png": {
    "type": "image/png",
    "etag": "\"1ed-O94GaxoQgbsREVQQ3OrfRckSN7I\"",
    "mtime": "2023-07-17T07:44:00.961Z",
    "size": 493,
    "path": "../public/imgs/header/user.png"
  },
  "/imgs/header/Vector.png": {
    "type": "image/png",
    "etag": "\"4c8-lM6ZEYo6vZbdclNbEriJIYKz0Hk\"",
    "mtime": "2023-07-17T07:44:00.954Z",
    "size": 1224,
    "path": "../public/imgs/header/Vector.png"
  },
  "/imgs/header/wallet-icon.png": {
    "type": "image/png",
    "etag": "\"dc5-LUjdpQMgMwnOflrJ0UNH1xLcC8M\"",
    "mtime": "2023-07-17T07:44:00.961Z",
    "size": 3525,
    "path": "../public/imgs/header/wallet-icon.png"
  },
  "/imgs/payment/astropay.png": {
    "type": "image/png",
    "etag": "\"1193-9HDuiCrucY13lKZMsgT+5/bFo2E\"",
    "mtime": "2023-07-17T07:44:01.024Z",
    "size": 4499,
    "path": "../public/imgs/payment/astropay.png"
  },
  "/imgs/payment/bank.png": {
    "type": "image/png",
    "etag": "\"f11-CMNlDPNDuw+7gLN76MErFh4IYCI\"",
    "mtime": "2023-07-17T07:44:01.024Z",
    "size": 3857,
    "path": "../public/imgs/payment/bank.png"
  },
  "/imgs/payment/binance.png": {
    "type": "image/png",
    "etag": "\"d6d-PehWieDz8u86BX3kD84WSKRS+kQ\"",
    "mtime": "2023-07-17T07:44:01.025Z",
    "size": 3437,
    "path": "../public/imgs/payment/binance.png"
  },
  "/imgs/payment/bitcoin.png": {
    "type": "image/png",
    "etag": "\"11dc-ICRcuzmCFhvILqGbUuQ26nVDq7A\"",
    "mtime": "2023-07-17T07:44:01.025Z",
    "size": 4572,
    "path": "../public/imgs/payment/bitcoin.png"
  },
  "/imgs/payment/bitcoin_cash.png": {
    "type": "image/png",
    "etag": "\"1203-AZx00TuIAdMXt9/W3tevzoYHsco\"",
    "mtime": "2023-07-17T07:44:01.025Z",
    "size": 4611,
    "path": "../public/imgs/payment/bitcoin_cash.png"
  },
  "/imgs/payment/cardano.png": {
    "type": "image/png",
    "etag": "\"152e-Un3bLjb4gzeUE3VNR5pIEE+ohy0\"",
    "mtime": "2023-07-17T07:44:01.025Z",
    "size": 5422,
    "path": "../public/imgs/payment/cardano.png"
  },
  "/imgs/payment/cashtocode.png": {
    "type": "image/png",
    "etag": "\"14de-tf0z/haI+PaMu/V1lDTI9d0CcF0\"",
    "mtime": "2023-07-17T07:44:01.026Z",
    "size": 5342,
    "path": "../public/imgs/payment/cashtocode.png"
  },
  "/imgs/payment/ecopayz.png": {
    "type": "image/png",
    "etag": "\"19b6-fp56jUT91Vn5V8s3lghxC3mk+dI\"",
    "mtime": "2023-07-17T07:44:01.026Z",
    "size": 6582,
    "path": "../public/imgs/payment/ecopayz.png"
  },
  "/imgs/payment/ethereum.png": {
    "type": "image/png",
    "etag": "\"def-UMidRRKnSNCIHD5qe3HMeqcjuWE\"",
    "mtime": "2023-07-17T07:44:01.026Z",
    "size": 3567,
    "path": "../public/imgs/payment/ethereum.png"
  },
  "/imgs/payment/interac.png": {
    "type": "image/png",
    "etag": "\"952-Dgqa2mg3Wfs5UkTeRV/rTu/FUhg\"",
    "mtime": "2023-07-17T07:44:01.026Z",
    "size": 2386,
    "path": "../public/imgs/payment/interac.png"
  },
  "/imgs/payment/jeton.png": {
    "type": "image/png",
    "etag": "\"c57-9nfVgHWpfmCrb+ffVHnsmxgYiCk\"",
    "mtime": "2023-07-17T07:44:01.026Z",
    "size": 3159,
    "path": "../public/imgs/payment/jeton.png"
  },
  "/imgs/payment/litecoin.png": {
    "type": "image/png",
    "etag": "\"eb3-3fbtJJUNRbiKG0Eny+iCQNgkD8Q\"",
    "mtime": "2023-07-17T07:44:01.027Z",
    "size": 3763,
    "path": "../public/imgs/payment/litecoin.png"
  },
  "/imgs/payment/mastercard.png": {
    "type": "image/png",
    "etag": "\"157c-UCTXhy0s1np6KbSiKUGV03YTS3c\"",
    "mtime": "2023-07-17T07:44:01.027Z",
    "size": 5500,
    "path": "../public/imgs/payment/mastercard.png"
  },
  "/imgs/payment/mifinity.png": {
    "type": "image/png",
    "etag": "\"1cef-AP9noD7JIp+arRs4v8ePHymmJf0\"",
    "mtime": "2023-07-17T07:44:01.027Z",
    "size": 7407,
    "path": "../public/imgs/payment/mifinity.png"
  },
  "/imgs/payment/much.png": {
    "type": "image/png",
    "etag": "\"196e-hLT6v675QNqG1qBPByDxgJtOg0A\"",
    "mtime": "2023-07-17T07:44:01.027Z",
    "size": 6510,
    "path": "../public/imgs/payment/much.png"
  },
  "/imgs/payment/neosurf.png": {
    "type": "image/png",
    "etag": "\"eff-2yWOltOlxKRW/VcaH9XX5h5a2NE\"",
    "mtime": "2023-07-17T07:44:01.027Z",
    "size": 3839,
    "path": "../public/imgs/payment/neosurf.png"
  },
  "/imgs/payment/neteuer.png": {
    "type": "image/png",
    "etag": "\"ea5-PYcf7OYRbx0j1HGH89Qlt9gttts\"",
    "mtime": "2023-07-17T07:44:01.028Z",
    "size": 3749,
    "path": "../public/imgs/payment/neteuer.png"
  },
  "/imgs/payment/ripple.png": {
    "type": "image/png",
    "etag": "\"1b2d-MiZ3b9GqozehvlGS7hcYjOtU/wU\"",
    "mtime": "2023-07-17T07:44:01.028Z",
    "size": 6957,
    "path": "../public/imgs/payment/ripple.png"
  },
  "/imgs/payment/skrill.png": {
    "type": "image/png",
    "etag": "\"baa-uHuYkDPQaVjynz8om17lf3eHw3M\"",
    "mtime": "2023-07-17T07:44:01.028Z",
    "size": 2986,
    "path": "../public/imgs/payment/skrill.png"
  },
  "/imgs/payment/sticpay.png": {
    "type": "image/png",
    "etag": "\"106d-eCjwWoNGU0/E6x3Gn2z49l5jFuc\"",
    "mtime": "2023-07-17T07:44:01.028Z",
    "size": 4205,
    "path": "../public/imgs/payment/sticpay.png"
  },
  "/imgs/payment/tron.png": {
    "type": "image/png",
    "etag": "\"131a-+HWiSJLQ1gFugQ8fD6BDN2OHeCM\"",
    "mtime": "2023-07-17T07:44:01.028Z",
    "size": 4890,
    "path": "../public/imgs/payment/tron.png"
  },
  "/imgs/payment/usdt.png": {
    "type": "image/png",
    "etag": "\"1631-mACPmWdnjS9KCRjfSm3jZNiggsQ\"",
    "mtime": "2023-07-17T07:44:01.029Z",
    "size": 5681,
    "path": "../public/imgs/payment/usdt.png"
  },
  "/imgs/payment/visa.png": {
    "type": "image/png",
    "etag": "\"f39-jxv2cWpTtUyw21BBcV16lcs9hEM\"",
    "mtime": "2023-07-17T07:44:01.029Z",
    "size": 3897,
    "path": "../public/imgs/payment/visa.png"
  },
  "/imgs/sidebar/accordion_down.png": {
    "type": "image/png",
    "etag": "\"829-eIb+APG8rnzlanK8WentxtrYWNw\"",
    "mtime": "2023-07-17T07:44:01.031Z",
    "size": 2089,
    "path": "../public/imgs/sidebar/accordion_down.png"
  },
  "/imgs/sidebar/accordion_icon.svg": {
    "type": "image/svg+xml",
    "etag": "\"e6-ZOosLG4EW30v1907AydGuYUMm2U\"",
    "mtime": "2023-07-17T07:44:01.031Z",
    "size": 230,
    "path": "../public/imgs/sidebar/accordion_icon.svg"
  },
  "/imgs/sidebar/accordion_up.png": {
    "type": "image/png",
    "etag": "\"81d-Lbka9gHpVOmUg9IIbK9wIWSQYrI\"",
    "mtime": "2023-07-17T07:44:01.032Z",
    "size": 2077,
    "path": "../public/imgs/sidebar/accordion_up.png"
  },
  "/imgs/sidebar/cash_back.gif": {
    "type": "image/gif",
    "etag": "\"2c6d0a-A3clDoPGPZG3ElQhAo500FeyStE\"",
    "mtime": "2023-07-17T07:44:01.044Z",
    "size": 2911498,
    "path": "../public/imgs/sidebar/cash_back.gif"
  },
  "/imgs/sidebar/cash_back.png": {
    "type": "image/png",
    "etag": "\"26c38-1Z6fkM/2z0tQPbjDMXnFcX5cPRA\"",
    "mtime": "2023-07-17T07:44:01.045Z",
    "size": 158776,
    "path": "../public/imgs/sidebar/cash_back.png"
  },
  "/imgs/sidebar/deposit.png": {
    "type": "image/png",
    "etag": "\"7c9-k2c8KovyrL1g3SXnhJm+MTivj/w\"",
    "mtime": "2023-07-17T07:44:01.045Z",
    "size": 1993,
    "path": "../public/imgs/sidebar/deposit.png"
  },
  "/imgs/sidebar/fav.png": {
    "type": "image/png",
    "etag": "\"6c9-p/KGKpHwqaZtMr2eNz/0qGpzRIw\"",
    "mtime": "2023-07-17T07:44:01.045Z",
    "size": 1737,
    "path": "../public/imgs/sidebar/fav.png"
  },
  "/imgs/sidebar/games.png": {
    "type": "image/png",
    "etag": "\"aa4-3LYBtj3VGJWfo6oFzOCTyg9AI4Q\"",
    "mtime": "2023-07-17T07:44:01.046Z",
    "size": 2724,
    "path": "../public/imgs/sidebar/games.png"
  },
  "/imgs/sidebar/hotGames.png": {
    "type": "image/png",
    "etag": "\"664-6FviFWT3QHU2jpOtitQkc4N48is\"",
    "mtime": "2023-07-17T07:44:01.046Z",
    "size": 1636,
    "path": "../public/imgs/sidebar/hotGames.png"
  },
  "/imgs/sidebar/liveGames.png": {
    "type": "image/png",
    "etag": "\"1233-ADQmQB/rfEyP7jIp7901+IDzUlk\"",
    "mtime": "2023-07-17T07:44:01.046Z",
    "size": 4659,
    "path": "../public/imgs/sidebar/liveGames.png"
  },
  "/imgs/sidebar/promotion.gif": {
    "type": "image/gif",
    "etag": "\"b34f9-BgmWnPrCWO0GDEh3BQ9d/5n6FfU\"",
    "mtime": "2023-07-17T07:44:01.050Z",
    "size": 734457,
    "path": "../public/imgs/sidebar/promotion.gif"
  },
  "/imgs/sidebar/promotion.png": {
    "type": "image/png",
    "etag": "\"32a84-fLJeKzMDNtPnhnKRhDUe/NOoGJA\"",
    "mtime": "2023-07-17T07:44:01.052Z",
    "size": 207492,
    "path": "../public/imgs/sidebar/promotion.png"
  },
  "/imgs/sidebar/promotions.png": {
    "type": "image/png",
    "etag": "\"110a-qAwocNch6iZW0iQZY05N9ebzFSY\"",
    "mtime": "2023-07-17T07:44:01.052Z",
    "size": 4362,
    "path": "../public/imgs/sidebar/promotions.png"
  },
  "/imgs/sidebar/provider.png": {
    "type": "image/png",
    "etag": "\"12df-hZD6BpqmZ4nFsR2mv+5B1WcQeOw\"",
    "mtime": "2023-07-17T07:44:01.052Z",
    "size": 4831,
    "path": "../public/imgs/sidebar/provider.png"
  },
  "/imgs/sidebar/recent.png": {
    "type": "image/png",
    "etag": "\"1f67-57RUG5EEb32GLeWJFh5nnmh2juM\"",
    "mtime": "2023-07-17T07:44:01.052Z",
    "size": 8039,
    "path": "../public/imgs/sidebar/recent.png"
  },
  "/imgs/sidebar/referral.png": {
    "type": "image/png",
    "etag": "\"7e1-b3yEMJmW1VpZPnbw8n5NjGEmLSo\"",
    "mtime": "2023-07-17T07:44:01.053Z",
    "size": 2017,
    "path": "../public/imgs/sidebar/referral.png"
  },
  "/imgs/sidebar/roulette.png": {
    "type": "image/png",
    "etag": "\"1272-wHoK0zGbtLKVg5WwLqc16QpraMk\"",
    "mtime": "2023-07-17T07:44:01.053Z",
    "size": 4722,
    "path": "../public/imgs/sidebar/roulette.png"
  },
  "/imgs/sidebar/side_1.png": {
    "type": "image/png",
    "etag": "\"25d23-08LDBTyqd6oU+6EITqjKFQ7c7Ww\"",
    "mtime": "2023-07-17T07:44:01.054Z",
    "size": 154915,
    "path": "../public/imgs/sidebar/side_1.png"
  },
  "/imgs/sidebar/side_2.png": {
    "type": "image/png",
    "etag": "\"243ee-AFBU/NKWmEK1C3a0Q1LTbf3adbs\"",
    "mtime": "2023-07-17T07:44:01.055Z",
    "size": 148462,
    "path": "../public/imgs/sidebar/side_2.png"
  },
  "/imgs/sidebar/side_3.png": {
    "type": "image/png",
    "etag": "\"39413-0yfGb7Oy5VLrDtxP+7pQI7xeCyQ\"",
    "mtime": "2023-07-17T07:44:01.056Z",
    "size": 234515,
    "path": "../public/imgs/sidebar/side_3.png"
  },
  "/imgs/sidebar/side_4.png": {
    "type": "image/png",
    "etag": "\"352e1-xwRsJTSQQpTL6qForQ8sIoQz5aY\"",
    "mtime": "2023-07-17T07:44:01.057Z",
    "size": 217825,
    "path": "../public/imgs/sidebar/side_4.png"
  },
  "/imgs/sidebar/slot.png": {
    "type": "image/png",
    "etag": "\"1939-Y8TnIsxhVIJjfFA4CHRaTo62SJY\"",
    "mtime": "2023-07-17T07:44:01.057Z",
    "size": 6457,
    "path": "../public/imgs/sidebar/slot.png"
  },
  "/imgs/sidebar/sports.png": {
    "type": "image/png",
    "etag": "\"1857-GrZEfMlhLa/eet2HuDTChmD7bSo\"",
    "mtime": "2023-07-17T07:44:01.057Z",
    "size": 6231,
    "path": "../public/imgs/sidebar/sports.png"
  },
  "/imgs/sidebar/tableGames.png": {
    "type": "image/png",
    "etag": "\"f2a-fOR4DDtEkYYBQZzPLXm0DRFma5w\"",
    "mtime": "2023-07-17T07:44:01.057Z",
    "size": 3882,
    "path": "../public/imgs/sidebar/tableGames.png"
  },
  "/imgs/sidebar/tournament.gif": {
    "type": "image/gif",
    "etag": "\"27aff-tdxyP56HWr+Rlo43JOk738rke3w\"",
    "mtime": "2023-07-17T07:44:01.059Z",
    "size": 162559,
    "path": "../public/imgs/sidebar/tournament.gif"
  },
  "/imgs/sidebar/tournament.png": {
    "type": "image/png",
    "etag": "\"2a1c4-8jgi5YQBW6O7KrYSpPOe8o5sYBw\"",
    "mtime": "2023-07-17T07:44:01.060Z",
    "size": 172484,
    "path": "../public/imgs/sidebar/tournament.png"
  },
  "/imgs/sidebar/vip.png": {
    "type": "image/png",
    "etag": "\"1d63-G3ffncXCApNL/CvtRsqudY1OiLQ\"",
    "mtime": "2023-07-17T07:44:01.060Z",
    "size": 7523,
    "path": "../public/imgs/sidebar/vip.png"
  },
  "/imgs/sidebar/wheel.png": {
    "type": "image/png",
    "etag": "\"2d93b-EgUZwpznRY170zCtgH8Q7sVvmx8\"",
    "mtime": "2023-07-17T07:44:01.061Z",
    "size": 186683,
    "path": "../public/imgs/sidebar/wheel.png"
  },
  "/imgs/wheel/wheel_current.png": {
    "type": "image/png",
    "etag": "\"b1f3f-yPAda0W0j0j6Ux4ANMiQj0zkR10\"",
    "mtime": "2023-07-17T07:44:01.185Z",
    "size": 728895,
    "path": "../public/imgs/wheel/wheel_current.png"
  },
  "/imgs/wheel/wheel_spin.png": {
    "type": "image/png",
    "etag": "\"7d88-iEtIsjgfd35EklbtHGa1svbybxo\"",
    "mtime": "2023-07-17T07:44:01.186Z",
    "size": 32136,
    "path": "../public/imgs/wheel/wheel_spin.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_2l20cW = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_2l20cW, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_2l20cW, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
