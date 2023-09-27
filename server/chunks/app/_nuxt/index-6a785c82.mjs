import { _ as _sfc_main$3, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$2$1, c as _sfc_main$3$1 } from './ProviderList-2cc111e0.mjs';
import { defineComponent, ref, watch, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { u as useStore, b as useHead } from '../server.mjs';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import './translation-9652486b.mjs';
import './translation-b8ce396e.mjs';
import './symbols-ee15851d.mjs';
import './QBtn-973e1c12.mjs';
import './QSpinner-efb87a9c.mjs';
import './QImg-55911caf.mjs';
import './game-690251d6.mjs';
import './Axios-0124dde3.mjs';
import 'axios';
import 'js-cookie';
import './link-f9710514.mjs';
import './QLinearProgress-7723eb23.mjs';
import 'swiper/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d;
    const store = useStore();
    const route = useRoute();
    let tab = ref(((_b = (_a = route.query) == null ? void 0 : _a.tab) == null ? void 0 : _b.toString()) ? (_d = (_c = route.query) == null ? void 0 : _c.tab) == null ? void 0 : _d.toString() : "");
    watch(() => {
      var _a2;
      return (_a2 = route.query) == null ? void 0 : _a2.tab;
    }, () => {
      var _a2, _b2, _c2, _d2;
      tab.value = ((_b2 = (_a2 = route.query) == null ? void 0 : _a2.tab) == null ? void 0 : _b2.toString()) ? (_d2 = (_c2 = route.query) == null ? void 0 : _c2.tab) == null ? void 0 : _d2.toString() : "";
    });
    useHead({
      title: "Canada777",
      meta: [
        {
          hid: "Home",
          name: "Home",
          content: "Welcome to our website! Explore a wide range of exciting games, thrilling promotions, and exclusive VIP rewards. Start your gaming adventure now and experience the best online entertainment. Play, win, and have a great time at our platform."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_landing_page_category_bar = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full p-0 sm:p-3 md:p-6 lg:p-9 m-auto"${_scopeId}><section${_scopeId}>`);
            _push2(ssrRenderComponent(_component_landing_page_category_bar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              providers: unref(store).state.providers
            }, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full p-0 sm:p-3 md:p-6 lg:p-9 m-auto"
              }, [
                createVNode("section", null, [
                  createVNode(_component_landing_page_category_bar),
                  createVNode(_sfc_main$1),
                  createVNode(_sfc_main$2, {
                    providers: unref(store).state.providers
                  }, null, 8, ["providers"])
                ]),
                createVNode("section", null, [
                  createVNode(_sfc_main$2$1),
                  createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/casino/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6a785c82.mjs.map
