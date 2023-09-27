import { _ as _sfc_main$2, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { useSSRContext, defineComponent, computed, ref, withCtx, unref, createVNode, toDisplayString, watch, mergeProps } from 'vue';
import { b as useHead, u as useStore } from '../server.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './QImg-55911caf.mjs';
import { _ as __nuxt_component_0$2 } from './QBtn-973e1c12.mjs';
import { s as seperate } from './string-b2c0b29d.mjs';
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
import './QSpinner-efb87a9c.mjs';
import './translation-b8ce396e.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Promotions",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const categories = ref(store.state.promotions);
    watch(() => store.state.promotions, () => {
      categories.value = store.state.promotions;
    });
    const current = ref([]);
    const showPromo = (index) => {
      if (current.value.includes(index))
        current.value.splice(current.value.indexOf(index));
      else
        current.value.push(index);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_img = __nuxt_component_0$1;
      const _component_q_btn = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-7 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative mt-10"><div class="grid md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(unref(categories), (category, index) => {
        _push(`<div class="flex flex-col justify-between"><div class="flex items-center justify-between relative"><img src="/imgs/bonus/1.png" alt="title">`);
        _push(ssrRenderComponent(_component_q_img, {
          class: "w-1/2 absolute right-0 bottom-0",
          src: `/imgs/${category == null ? void 0 : category.image}.png`,
          "spinner-color": "primary",
          alt: "title"
        }, null, _parent));
        _push(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"><p class="flex flex-row pr-5"><!--[-->`);
        ssrRenderList(unref(seperate)(category == null ? void 0 : category.title), (strItem) => {
          _push(`<span style="${ssrRenderStyle((strItem == null ? void 0 : strItem.string) ? {} : { color: "#ffd62f" })}" class="${ssrRenderClass(!(strItem == null ? void 0 : strItem.string) ? [
            "font-black text-sm sm:text-xl xl:text-3xl pr-2",
            unref(store).state.isDrawer ? "lg:text-md" : "lg:text-2xl"
          ] : [
            "font-black text-sm sm:text-lg xl:text-2xl pr-2",
            unref(store).state.isDrawer ? "lg:text-md" : "lg:text-xl"
          ])}">${ssrInterpolate(strItem == null ? void 0 : strItem.content)}</span>`);
        });
        _push(`<!--]--></p></div></div>`);
        if (unref(current).includes(index)) {
          _push(`<p class="text-md md:text-lg text-bold pt-4 px-5">${ssrInterpolate(category == null ? void 0 : category.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(current).includes(index)) {
          _push(`<p class="text-lg text-bold px-5 pt-2 text-center" style="${ssrRenderStyle({ "color": "#e4bb17" })}">Promo_Code : ${ssrInterpolate(category == null ? void 0 : category.promo_code)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-center pb-10 pt-5">`);
        _push(ssrRenderComponent(_component_q_btn, {
          onClick: ($event) => showPromo(index),
          color: "primary",
          label: unref(current).includes(index) ? unref(tran)("SHOW LESS", unref(store).state.lang) : unref(tran)("READ MORE", unref(store).state.lang)
        }, null, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/Promotions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "promotions",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Canada777",
      meta: [
        {
          hid: "Promotion",
          name: "Promotion",
          content: "Take advantage of our enticing promotions and boost your gaming experience. We offer a variety of bonuses, free spins, and special offers to enhance your chances of winning. Stay updated with our latest promotions and maximize your rewards as you enjoy your favorite games."
        }
      ]
    });
    const store = useStore();
    const isDrawer = computed(() => {
      return ref(store.state.isDrawer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}><div class="bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right"${_scopeId}><div class="${ssrRenderClass(["pr-12 md:pr-24 xl:pr-36", isDrawer.value.value ? "lg:pr-6" : "lg:pr-36"])}"${_scopeId}><p${_scopeId}><span style="${ssrRenderStyle({ "color": "rgb(255, 255, 3)" })}" class="text-5xl lg:text-6xl"${_scopeId}>${ssrInterpolate(unref(tran)("Promotions", unref(store).state.lang))}</span></p></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
              }, [
                createVNode("section", { class: "main h-full px-4" }, [
                  createVNode("div", { class: "bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right" }, [
                    createVNode("div", {
                      class: ["pr-12 md:pr-24 xl:pr-36", isDrawer.value.value ? "lg:pr-6" : "lg:pr-36"]
                    }, [
                      createVNode("p", null, [
                        createVNode("span", {
                          style: { "color": "rgb(255, 255, 3)" },
                          class: "text-5xl lg:text-6xl"
                        }, toDisplayString(unref(tran)("Promotions", unref(store).state.lang)), 1)
                      ])
                    ], 2)
                  ]),
                  createVNode(_sfc_main$1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/promotions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=promotions-e3b8301c.mjs.map
