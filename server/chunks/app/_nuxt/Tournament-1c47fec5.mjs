import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as __nuxt_component_0$1 } from './QBtn-973e1c12.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './translation-9652486b.mjs';
import './translation-b8ce396e.mjs';
import './symbols-ee15851d.mjs';
import '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tournament",
  __ssrInlineRender: true,
  setup(__props) {
    const torunamentList = [
      {
        img: "tournaments1.png",
        title: "Drops & Wins",
        content: "It\u2019s a gift shower at Europa777! Drops & Wins Tournament Campaign is here from March 2 to April 6! Lose yourself in crazy winnings! Enjoy generous daily prize drops and weekly and daily tournaments with real cash prizes! In total, 40,000 prizes will be awarded every month! This is your time to get lucky! Join now!"
      },
      {
        img: "tournaments2.png",
        title: "TOURNAMENT",
        content: "Let the LOVE be your secret weapon and guide you through these sweet seven days of the tournament! An incredible lineup of games and an alluring prize pool will make you fall in love and win like an Ace!"
      },
      {
        img: "tournaments3.png",
        title: "WEEKLY TOURNAMENT",
        content: "Do you like surprises? You are on the right site! Meet our new slots tournament and make your week full of unbelievable moments, emotions ... and prizes!"
      },
      {
        img: "tournaments4.png",
        title: "TOURNAMENT",
        content: "We can surprize anyone! Even our VIP players :) Take part in our weekly tournament and get such winnings you`ve never seen before!"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_btn = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="h-full px-4"${_scopeId}><div class="text-center pb-8"${_scopeId}><p class="font-bold text-3xl"${_scopeId}>Europa777 TOURNAMENTS</p><p class="font-medium text-base"${_scopeId}> Exciting Slot Competitions with Canada777. Get more Points and Win! </p></div><div class="grid md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(torunamentList, (torunament) => {
              _push2(`<div class="text-center max-w-md mx-auto"${_scopeId}><div class="tournament_card rounded-xl"${_scopeId}><div class="text-shadow-lg"${_scopeId}><p class="text-3xl font-bold pt-4"${_scopeId}>${ssrInterpolate(torunament == null ? void 0 : torunament.title)}</p><p class="text-3xl font-bold" style="${ssrRenderStyle({ "color": "#ffff03" })}"${_scopeId}> 1,000,000 \u20AC/$ </p><p class="text-xs font-medium pt-3"${_scopeId}> Completed in </p><div class="flex items-center justify-center pb-4"${_scopeId}><div style="${ssrRenderStyle({ "color": "#ffff03", "border-right": "1px solid white" })}" class="flex flex-col justify-center px-3"${_scopeId}><p class="text-3xl font-bold"${_scopeId}>13</p><p class="text-xs"${_scopeId}>Days</p></div><div style="${ssrRenderStyle({ "border-right": "1px solid white" })}" class="flex flex-col justify-center px-3"${_scopeId}><p class="text-3xl font-bold"${_scopeId}>15</p><p class="text-xs"${_scopeId}>Hours</p></div><div style="${ssrRenderStyle({ "border-right": "1px solid white" })}" class="flex flex-col justify-center px-3"${_scopeId}><p class="text-3xl font-bold"${_scopeId}>24</p><p class="text-xs"${_scopeId}>Minutes</p></div><div class="flex flex-col justify-center px-3"${_scopeId}><p class="text-3xl font-bold"${_scopeId}>16</p><p class="text-xs"${_scopeId}>Seconds</p></div></div><div class="w-full"${_scopeId}><img class="w-full"${ssrRenderAttr("src", `/imgs/${torunament == null ? void 0 : torunament.img}`)} alt="turnaments"${_scopeId}></div><p style="${ssrRenderStyle({ "min-height": "124px" })}" class="text-xs pt-6 pb-3 px-3"${_scopeId}>${ssrInterpolate(torunament == null ? void 0 : torunament.content)}</p></div></div>`);
              _push2(ssrRenderComponent(_component_q_btn, {
                class: "px-4 mt-4",
                color: "primary",
                label: "Read More"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
              }, [
                createVNode("section", { class: "h-full px-4" }, [
                  createVNode("div", { class: "text-center pb-8" }, [
                    createVNode("p", { class: "font-bold text-3xl" }, "Europa777 TOURNAMENTS"),
                    createVNode("p", { class: "font-medium text-base" }, " Exciting Slot Competitions with Canada777. Get more Points and Win! ")
                  ]),
                  createVNode("div", { class: "grid md:grid-cols-2 gap-4" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(torunamentList, (torunament) => {
                      return createVNode("div", { class: "text-center max-w-md mx-auto" }, [
                        createVNode("div", { class: "tournament_card rounded-xl" }, [
                          createVNode("div", { class: "text-shadow-lg" }, [
                            createVNode("p", { class: "text-3xl font-bold pt-4" }, toDisplayString(torunament == null ? void 0 : torunament.title), 1),
                            createVNode("p", {
                              class: "text-3xl font-bold",
                              style: { "color": "#ffff03" }
                            }, " 1,000,000 \u20AC/$ "),
                            createVNode("p", { class: "text-xs font-medium pt-3" }, " Completed in "),
                            createVNode("div", { class: "flex items-center justify-center pb-4" }, [
                              createVNode("div", {
                                style: { "color": "#ffff03", "border-right": "1px solid white" },
                                class: "flex flex-col justify-center px-3"
                              }, [
                                createVNode("p", { class: "text-3xl font-bold" }, "13"),
                                createVNode("p", { class: "text-xs" }, "Days")
                              ]),
                              createVNode("div", {
                                style: { "border-right": "1px solid white" },
                                class: "flex flex-col justify-center px-3"
                              }, [
                                createVNode("p", { class: "text-3xl font-bold" }, "15"),
                                createVNode("p", { class: "text-xs" }, "Hours")
                              ]),
                              createVNode("div", {
                                style: { "border-right": "1px solid white" },
                                class: "flex flex-col justify-center px-3"
                              }, [
                                createVNode("p", { class: "text-3xl font-bold" }, "24"),
                                createVNode("p", { class: "text-xs" }, "Minutes")
                              ]),
                              createVNode("div", { class: "flex flex-col justify-center px-3" }, [
                                createVNode("p", { class: "text-3xl font-bold" }, "16"),
                                createVNode("p", { class: "text-xs" }, "Seconds")
                              ])
                            ]),
                            createVNode("div", { class: "w-full" }, [
                              createVNode("img", {
                                class: "w-full",
                                src: `/imgs/${torunament == null ? void 0 : torunament.img}`,
                                alt: "turnaments"
                              }, null, 8, ["src"])
                            ]),
                            createVNode("p", {
                              style: { "min-height": "124px" },
                              class: "text-xs pt-6 pb-3 px-3"
                            }, toDisplayString(torunament == null ? void 0 : torunament.content), 1)
                          ])
                        ]),
                        createVNode(_component_q_btn, {
                          class: "px-4 mt-4",
                          color: "primary",
                          label: "Read More"
                        })
                      ]);
                    }), 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Tournament.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Tournament-1c47fec5.mjs.map
