import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { defineComponent, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import './symbols-ee15851d.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import 'js-cookie';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Deposit-Policy",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"${_scopeId}><div class="flex items-center justify-center"${_scopeId}><div class="bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-10 p-4 7"${_scopeId}>${ssrInterpolate(unref(tran)("dp0", unref(store).state.lang))}</div></div><div class="contentSection p-5"${_scopeId}><div class="container text-white"${_scopeId}><div class="text-base font-normal pl-2"${_scopeId}><p class="pb-1"${_scopeId}>${ssrInterpolate(unref(tran)("dp1", unref(store).state.lang))}</p></div><h5 class="mt-4 text-xl font-bold pb-4"${_scopeId}>${ssrInterpolate(unref(tran)("dp2", unref(store).state.lang))}</h5><div class="text-base font-normal pl-2"${_scopeId}><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp3", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp4", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp5", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp6", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp7", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp8", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp9", unref(store).state.lang))}</p><p class="pb-3"${_scopeId}>${ssrInterpolate(unref(tran)("dp10", unref(store).state.lang))}</p></div></div></div><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"
              }, [
                createVNode("div", { class: "flex items-center justify-center" }, [
                  createVNode("div", { class: "bg-gray-300 bg-opacity-5 rounded-xl text-2xl font-extrabold uppercase mb-10 p-4 7" }, toDisplayString(unref(tran)("dp0", unref(store).state.lang)), 1)
                ]),
                createVNode("div", { class: "contentSection p-5" }, [
                  createVNode("div", { class: "container text-white" }, [
                    createVNode("div", { class: "text-base font-normal pl-2" }, [
                      createVNode("p", { class: "pb-1" }, toDisplayString(unref(tran)("dp1", unref(store).state.lang)), 1)
                    ]),
                    createVNode("h5", { class: "mt-4 text-xl font-bold pb-4" }, toDisplayString(unref(tran)("dp2", unref(store).state.lang)), 1),
                    createVNode("div", { class: "text-base font-normal pl-2" }, [
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp3", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp4", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp5", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp6", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp7", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp8", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp9", unref(store).state.lang)), 1),
                      createVNode("p", { class: "pb-3" }, toDisplayString(unref(tran)("dp10", unref(store).state.lang)), 1)
                    ])
                  ])
                ]),
                createVNode("section", { class: "pt-8" }, [
                  createVNode(_sfc_main$1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Deposit-Policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Deposit-Policy-6242cfc2.mjs.map
