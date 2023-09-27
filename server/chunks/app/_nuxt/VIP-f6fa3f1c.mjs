import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { defineComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { b as useHead } from '../server.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import './translation-9652486b.mjs';
import './translation-b8ce396e.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VIP",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Canada777",
      meta: [
        {
          hid: "VIP",
          name: "VIP",
          content: `Elevate your gaming experience by joining our VIP program. As a valued member, you'll receive exclusive benefits, personalized rewards, and dedicated customer support. Enjoy special privileges and take your gameplay to the next level with our VIP club.`
        }
      ]
    });
    const torunamentList = [
      {
        img: "gold.png",
        title: "BRONZE",
        compoint: "500",
        weeklycashback: "5",
        wager: "45",
        back_color: "background: linear-gradient(to right, #6A2407 0%, #984F37 50%, #52160C 100%)"
      },
      {
        img: "silver.png",
        title: "SILVER",
        compoint: "1000",
        weeklycashback: "6",
        wager: "40",
        back_color: "background: linear-gradient(to right, #878787, #CBCBCB);"
      },
      {
        img: "gold.png",
        title: "GOLD",
        compoint: "2000",
        weeklycashback: "7",
        wager: "35",
        back_color: "background: linear-gradient(to right, #906924 0%, #F5D54Edd 65%, #906924 100%);"
      },
      {
        img: "silver.png",
        title: "PLATINUM",
        compoint: "4000",
        weeklycashback: "8",
        wager: "30",
        back_color: "background: linear-gradient(to right, #2c6262 0%,  #142b2b 100%);"
      },
      {
        img: "silver.png",
        title: "DIAMOND",
        compoint: "5000",
        weeklycashback: "10",
        wager: "25",
        back_color: "background: linear-gradient(to right, #29173c 0%, #4c266e 100%);"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="px-4 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="h-full px-3 sm:px-4"${_scopeId}><div class="text-center pb-8"${_scopeId}><p class="font-semibold text-3xl lg:text-4xl 2xl:text-5xl py-5 mb-5"${_scopeId}>EUROPA 777 VIP</p><p class="font-medium text-md md:text-lg lg:text-xl 2xl:text-2xl w-full md:w-5/6 mx-auto"${_scopeId}> Join our Europa777 VIP Team and become a member of the VIP Program! Play at our casino and have an opportunity to get our weekly cashback VIP package! </p></div><div class="grid grid-cols-1 gap-5"${_scopeId}><!--[-->`);
            ssrRenderList(torunamentList, (torunament) => {
              _push2(`<div class="text-center mx-auto flex flex-col justify-center"${_scopeId}><div style="${ssrRenderStyle(torunament.back_color)}" class="rounded-xl mx-auto w-full md:w-4/5 2xl:w-3/4 text-shadow-lg grid grid-cols-3"${_scopeId}><img class="col-span-1 my-auto"${ssrRenderAttr("src", `/imgs/${torunament == null ? void 0 : torunament.img}`)} alt="turnaments"${_scopeId}><div class="col-span-2 w-5/6 md:w-4/5 mx-auto flex flex-col justify-between"${_scopeId}><p class="text-2xl md:text-3xl xl:text-4xl font-bold py-2 md:py-4 xl:py-6" style="${ssrRenderStyle({ "background": "linear-gradient(to right, #44444400 0%, #44444466 20%, #444444aa 50%, #44444466 80%, #44444400 100%)" })}"${_scopeId}>${ssrInterpolate(torunament == null ? void 0 : torunament.title)}</p><div class="flex items-center justify-around" style="${ssrRenderStyle({ "border-bottom": "1px solid white" })}"${_scopeId}><div class="flex flex-col justify-center py-2 md:py-4"${_scopeId}><p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3"${_scopeId}>${ssrInterpolate(torunament == null ? void 0 : torunament.compoint)}</p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold"${_scopeId}>Comp</p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold"${_scopeId}>Points</p></div><div class="flex flex-col justify-center py-2 md:py-4"${_scopeId}><p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3"${_scopeId}>${ssrInterpolate(torunament == null ? void 0 : torunament.weeklycashback)}% </p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold"${_scopeId}>WEEKLY</p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold"${_scopeId}>CASHBACK</p></div><div class="flex flex-col justify-center py-2 md:py-4"${_scopeId}><p class="text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3"${_scopeId}> X${ssrInterpolate(torunament == null ? void 0 : torunament.wager)}</p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold"${_scopeId}>WAGER</p><p class="text-xs md:text-sm xl:text-lg font-semibold md:font-bold opacity-0"${_scopeId}>k</p></div></div><div class="flex items-center justify-center my-2 md:my-5 lg:my-7 xl:my-9"${_scopeId}><p class="text-xxs md:text-sm xl:text-lg font-semibold md:font-bold mr-3 md:mr-5 lg:mr-7 xl:mr-10"${_scopeId}>Special Event</p><div class="h-3 md:h-5 xl:h-7" style="${ssrRenderStyle({ "width": "2px", "background": "#ffffff" })}"${_scopeId}></div><p class="text-xxs md:text-sm xl:text-lg font-semibold md:font-bold ml-3 md:ml-5 lg:ml-7 xl:ml-10"${_scopeId}>VIP Tournament</p></div><div${_scopeId}></div></div></div></div>`);
            });
            _push2(`<!--]--></div></section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "px-4 md:px-6 lg:px-14 py-8 m-auto"
              }, [
                createVNode("section", { class: "h-full px-3 sm:px-4" }, [
                  createVNode("div", { class: "text-center pb-8" }, [
                    createVNode("p", { class: "font-semibold text-3xl lg:text-4xl 2xl:text-5xl py-5 mb-5" }, "EUROPA 777 VIP"),
                    createVNode("p", { class: "font-medium text-md md:text-lg lg:text-xl 2xl:text-2xl w-full md:w-5/6 mx-auto" }, " Join our Europa777 VIP Team and become a member of the VIP Program! Play at our casino and have an opportunity to get our weekly cashback VIP package! ")
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 gap-5" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(torunamentList, (torunament) => {
                      return createVNode("div", { class: "text-center mx-auto flex flex-col justify-center" }, [
                        createVNode("div", {
                          style: torunament.back_color,
                          class: "rounded-xl mx-auto w-full md:w-4/5 2xl:w-3/4 text-shadow-lg grid grid-cols-3"
                        }, [
                          createVNode("img", {
                            class: "col-span-1 my-auto",
                            src: `/imgs/${torunament == null ? void 0 : torunament.img}`,
                            alt: "turnaments"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "col-span-2 w-5/6 md:w-4/5 mx-auto flex flex-col justify-between" }, [
                            createVNode("p", {
                              class: "text-2xl md:text-3xl xl:text-4xl font-bold py-2 md:py-4 xl:py-6",
                              style: { "background": "linear-gradient(to right, #44444400 0%, #44444466 20%, #444444aa 50%, #44444466 80%, #44444400 100%)" }
                            }, toDisplayString(torunament == null ? void 0 : torunament.title), 1),
                            createVNode("div", {
                              class: "flex items-center justify-around",
                              style: { "border-bottom": "1px solid white" }
                            }, [
                              createVNode("div", { class: "flex flex-col justify-center py-2 md:py-4" }, [
                                createVNode("p", { class: "text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3" }, toDisplayString(torunament == null ? void 0 : torunament.compoint), 1),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold" }, "Comp"),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold" }, "Points")
                              ]),
                              createVNode("div", { class: "flex flex-col justify-center py-2 md:py-4" }, [
                                createVNode("p", { class: "text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3" }, toDisplayString(torunament == null ? void 0 : torunament.weeklycashback) + "% ", 1),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold" }, "WEEKLY"),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold" }, "CASHBACK")
                              ]),
                              createVNode("div", { class: "flex flex-col justify-center py-2 md:py-4" }, [
                                createVNode("p", { class: "text-2xl md:text-3xl xl:text-4xl font-bold py-0 md:py-1 lg:py-2 xl:py-3" }, " X" + toDisplayString(torunament == null ? void 0 : torunament.wager), 1),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold" }, "WAGER"),
                                createVNode("p", { class: "text-xs md:text-sm xl:text-lg font-semibold md:font-bold opacity-0" }, "k")
                              ])
                            ]),
                            createVNode("div", { class: "flex items-center justify-center my-2 md:my-5 lg:my-7 xl:my-9" }, [
                              createVNode("p", { class: "text-xxs md:text-sm xl:text-lg font-semibold md:font-bold mr-3 md:mr-5 lg:mr-7 xl:mr-10" }, "Special Event"),
                              createVNode("div", {
                                class: "h-3 md:h-5 xl:h-7",
                                style: { "width": "2px", "background": "#ffffff" }
                              }),
                              createVNode("p", { class: "text-xxs md:text-sm xl:text-lg font-semibold md:font-bold ml-3 md:ml-5 lg:ml-7 xl:ml-10" }, "VIP Tournament")
                            ]),
                            createVNode("div")
                          ])
                        ], 4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/VIP.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=VIP-f6fa3f1c.mjs.map
