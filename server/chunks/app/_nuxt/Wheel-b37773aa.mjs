import { _ as _sfc_main$2, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { defineComponent, ref, withCtx, unref, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { b as useHead, u as useStore } from '../server.mjs';
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

const _sfc_main$1 = {
  __name: "LuckyWheel",
  __ssrInlineRender: true,
  props: ["time"],
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="ruleta relative mx-auto w-72 h-72 sm:w-96 sm:h-96"><div class="center"></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/LuckyWheel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Wheel",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Canada777",
      meta: [
        {
          hid: "Wheel Bonus",
          name: "Wheel Bonus",
          content: "Spin the wheel and unlock incredible rewards! Our Wheel Bonus feature offers a chance to win exciting prizes, such as free spins, cashback, bonus funds, and more. Test your luck and see what fortune has in store for you on the spinning wheel."
        }
      ]
    });
    const store = useStore();
    let h = ref(0);
    let m = ref(0);
    let s = ref(0);
    let time = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_BonusLuckyWheel = __nuxt_component_1;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="h-full py-12 px-4 flex justify-center flex-col"${_scopeId}><div class="relative"${_scopeId}><img class="w-12 absolute top-0 left-1/2 transform -translate-x-1/2 z-10" src="/imgs/wheel/wheel_spin.png" alt="spin"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BonusLuckyWheel, { time: unref(time) }, null, _parent2, _scopeId));
            if (unref(time) > 0) {
              _push2(`<div class="flex flex-row justify-center mt-7"${_scopeId}><p class="text-xl font-bold mr-2"${_scopeId}>${ssrInterpolate(unref(tran)("Next Spin Available in :", unref(store).state.lang))}</p><p class="text-xl font-bold"${_scopeId}>${ssrInterpolate(unref(h))} h ${ssrInterpolate(unref(m))} m ${ssrInterpolate(unref(s))} s</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(time) == 0) {
              _push2(`<div class="flex flex-row justify-center mt-7"${_scopeId}><p class="text-xl font-bold"${_scopeId}>${ssrInterpolate(unref(tran)("Free Spin Is Available Now", unref(store).state.lang))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
              }, [
                createVNode("section", { class: "h-full py-12 px-4 flex justify-center flex-col" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("img", {
                      class: "w-12 absolute top-0 left-1/2 transform -translate-x-1/2 z-10",
                      src: "/imgs/wheel/wheel_spin.png",
                      alt: "spin"
                    }),
                    createVNode(_component_BonusLuckyWheel, { time: unref(time) }, null, 8, ["time"]),
                    unref(time) > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex flex-row justify-center mt-7"
                    }, [
                      createVNode("p", { class: "text-xl font-bold mr-2" }, toDisplayString(unref(tran)("Next Spin Available in :", unref(store).state.lang)), 1),
                      createVNode("p", { class: "text-xl font-bold" }, toDisplayString(unref(h)) + " h " + toDisplayString(unref(m)) + " m " + toDisplayString(unref(s)) + " s", 1)
                    ])) : createCommentVNode("", true),
                    unref(time) == 0 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "flex flex-row justify-center mt-7"
                    }, [
                      createVNode("p", { class: "text-xl font-bold" }, toDisplayString(unref(tran)("Free Spin Is Available Now", unref(store).state.lang)), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("section", { class: "pt-8" }, [
                  createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Wheel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Wheel-b37773aa.mjs.map
