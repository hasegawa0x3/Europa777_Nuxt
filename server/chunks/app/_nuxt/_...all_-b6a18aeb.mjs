import { _ as __nuxt_component_0 } from './QBtn-973e1c12.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { a as linkTo } from './link-f9710514.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import './QSpinner-efb87a9c.mjs';
import 'js-cookie';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'quasar/lang/en-US.mjs';
import 'quasar/icon-set/material-icons.mjs';
import 'vue-devtools-stub';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './translation-b8ce396e.mjs';

const _sfc_main = {
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" }, _attrs))}><div><div style="${ssrRenderStyle({ "font-size": "30vh" })}">404</div><div class="text-h2" style="${ssrRenderStyle({ "opacity": "0.4" })}">${ssrInterpolate(unref(tran)("Oops. Nothing here...", unref(store).state.lang))}</div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        class: "q-mt-xl",
        color: "white",
        "text-color": "blue",
        unelevated: "",
        onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/")),
        label: "Go Home",
        "no-caps": ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...all_-b6a18aeb.mjs.map
