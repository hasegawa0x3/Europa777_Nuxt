import { _ as _sfc_main$1, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as __nuxt_component_0$1 } from './QImg-55911caf.mjs';
import { defineComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import './symbols-ee15851d.mjs';
import './QSpinner-efb87a9c.mjs';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const faqList = [
      {
        question: "What is Europa777?",
        answer: ["We are a licensed online casino where gambling activities are hosted by numbers renowned gaming providers in the industry with over 3100 games to play."]
      },
      {
        question: "What currencies does Europa777 accept?",
        answer: ["We accept CAD, USD, GBP, and EUR. However, you can deposit in certain cryptocurrencies that will be converted to your choice of the aformentioned currencies to play in."]
      },
      {
        question: "Who can play at Europa777?",
        answer: ["Canada777 is available to most players from around the world, unfortunately however, players from the following the following countries are restricted from registering: Afghanistan, Aruba, Bonaire, Burma, Congo, Curacao, Eritrea, Ethiopia, France, Iran, Iraq, Libya, Malaysia, Myanmar, The Netherlands, North Korea, Palestine, Saba, Singapore, Somalia, Statia, St. Maarten, Sudan, Syria, Singapore, United Kingdom, United State of America, Yemen, and Zimbabwe."]
      },
      {
        question: "Are there any bonus restrictions?",
        answer: ["Our amazing bonuses will have different terms and conditions, so read them carefully before accepting. If you have any further questions, please contact our brilliant Support Team."]
      },
      {
        question: "How do I claim a bonus?",
        answer: ["All bonuses will have a coupon code for you to redeem, once you have chosen the bonus you will like to use.", "Go to the Dashboard section in the from left side menu.", "Select the Deposit Tab.", "Choose Bonus Package.", "Make your deposit and the bonus will be added automatically."]
      },
      {
        question: "What are wagering requirements?",
        answer: ["All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages."]
      },
      {
        question: "What is a welcome bonus?",
        answer: ["Welcome bonuses provide new players with bonus monies equal to a percentage of their initial deposit to welcome them to the casino and give them a taste of whats on offer."]
      },
      {
        question: "What if I have a problem or complaint?",
        answer: ["That is why our excellent Support Team are there for you 24/7 to assist you with anything you may need via our live chat function or email at support@europa777.com"]
      },
      {
        question: "Is there a minimum or maximum deposit or withdrawal limit?",
        answer: ["There is a minimum accepted deposit of US$ 20 or currency equivalent to make your way to winning.", "The minimum withdrawal is US$ 50 or currency equivalent with a maximum daily (24 hour period) withdrawal limit of $10,000."]
      },
      {
        question: "Can I win real money?",
        answer: ["Absolutely, all games allow you to play for real cash prizes and luck jackpots along the way. If you feel the need to practice a bit first, you can play the games in Demo."]
      },
      {
        question: "How can I deposit or withdraw?",
        answer: ["The following deposit and withdrawal methods are available at Europa777: Interac, Flexepin, Visa, MasterCard, Crypto Wallet: BTC, LTC, ETH, TRX (Tron), BNB (Binance coin), BUSB (Binance USD)."]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_img = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}><p class="font-bold text-base pb-4 p-2"${_scopeId}>${ssrInterpolate(unref(tran)("FAQs", unref(store).state.lang))}</p><div class="flex flex-col"${_scopeId}><!--[-->`);
            ssrRenderList(faqList, (faq) => {
              _push2(`<button${ssrRenderAttr("faq", faq)} class="group focus:outline-none p-1 rounded-sm relative"${_scopeId}><div class="flex items-center justify-between h-12 font-semibold relative px-2"${_scopeId}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="w-full h-full absolute left-0 top-0 opacity-80 rounded-sm"${_scopeId}></div><div class="relative flex justify-start items-center"${_scopeId}><p class="font-medium text-base p-3"${_scopeId}>${ssrInterpolate(unref(tran)(faq == null ? void 0 : faq.question, unref(store).state.lang))}</p></div>`);
              _push2(ssrRenderComponent(_component_q_img, {
                class: "w-2 relative",
                src: "/imgs/sidebar/accordion_icon.svg"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="relative max-h-0 overflow-hidden duration-300 group-focus:max-h-52"${_scopeId}><!--[-->`);
              ssrRenderList(faq.answer, (answer) => {
                _push2(`<p class="py-2 px-6 text-s text-left" style="${ssrRenderStyle({ "background": "#383d4741" })}"${_scopeId}>${ssrInterpolate(unref(tran)(answer, unref(store).state.lang))}</p>`);
              });
              _push2(`<!--]--></div></button>`);
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
                createVNode("section", { class: "main h-full px-4" }, [
                  createVNode("p", { class: "font-bold text-base pb-4 p-2" }, toDisplayString(unref(tran)("FAQs", unref(store).state.lang)), 1),
                  createVNode("div", { class: "flex flex-col" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(faqList, (faq) => {
                      return createVNode("button", {
                        faq,
                        class: "group focus:outline-none p-1 rounded-sm relative"
                      }, [
                        createVNode("div", { class: "flex items-center justify-between h-12 font-semibold relative px-2" }, [
                          createVNode("div", {
                            style: { "background": "#383d47" },
                            class: "w-full h-full absolute left-0 top-0 opacity-80 rounded-sm"
                          }),
                          createVNode("div", { class: "relative flex justify-start items-center" }, [
                            createVNode("p", { class: "font-medium text-base p-3" }, toDisplayString(unref(tran)(faq == null ? void 0 : faq.question, unref(store).state.lang)), 1)
                          ]),
                          createVNode(_component_q_img, {
                            class: "w-2 relative",
                            src: "/imgs/sidebar/accordion_icon.svg"
                          })
                        ]),
                        createVNode("div", { class: "relative max-h-0 overflow-hidden duration-300 group-focus:max-h-52" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(faq.answer, (answer) => {
                            return openBlock(), createBlock("p", {
                              class: "py-2 px-6 text-s text-left",
                              style: { "background": "#383d4741" }
                            }, toDisplayString(unref(tran)(answer, unref(store).state.lang)), 1);
                          }), 256))
                        ])
                      ], 8, ["faq"]);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-54f0f965.mjs.map
