import { _ as _sfc_main$5, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { a as __nuxt_component_3, _ as __nuxt_component_0$1 } from './QBtn-973e1c12.mjs';
import { _ as __nuxt_component_0$2 } from './QImg-55911caf.mjs';
import { a as linkTo } from './link-f9710514.mjs';
import { useSSRContext, defineComponent, ref, watch, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, mergeProps, computed, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { u as useStore, b as useHead } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$4, b as _sfc_main$2$1, c as _sfc_main$3$1 } from './ProviderList-2cc111e0.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRoute, useRouter } from 'vue-router';
import { c as changeTitle } from './string-b2c0b29d.mjs';
import { r as removeFavoriteGameById, a as addFavoriteGameById } from './game-690251d6.mjs';
import './symbols-ee15851d.mjs';
import './QSpinner-efb87a9c.mjs';
import 'js-cookie';
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
import './translation-b8ce396e.mjs';
import './QLinearProgress-7723eb23.mjs';
import './Axios-0124dde3.mjs';
import 'axios';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Overview",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_icon = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_img = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative pb-0 sm:pb-16 w-full" }, _attrs))}><div class="z-[2000]"><div class="sm:hidden"><div class="relative flex flex-col items-end"><div class="absolute left-0 top-2">`);
      if (unref(store).state.isLogin === true) {
        _push(`<p class="font-bold text-3xl pl-3 hidden md:!block">${ssrInterpolate(unref(tran)("Welcome", unref(store).state.lang))} ${ssrInterpolate(unref(store).state.User.first_name)} ${ssrInterpolate(unref(store).state.User.last_name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto" src="/imgs/logo_full.png" alt="logo"><p class="font-bold md:text-3xl text-2xl pl-3">${ssrInterpolate(unref(tran)("# 1 Online casino", unref(store).state.lang))}</p><p class="font-bold text-2xl pl-3 pt-3">${ssrInterpolate(unref(tran)("welcome bonus", unref(store).state.lang))}</p><div class="flex felx-row pl-3">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "euro",
        class: "text-[48px] md:text-[72px] text-bold",
        style: { "color": "#fff004" }
      }, null, _parent));
      _push(`<span class="font-black font-bold text-5xl md:text-7xl" style="${ssrRenderStyle({ "color": "#fff004" })}">1800</span></div>`);
      if (unref(store).state.isLogin === false) {
        _push(`<p style="${ssrRenderStyle({ "color": "#fff004" })}" class="font-bold text-3xl pl-3"> 200% <span class="font-bold text-lg text-white">${ssrInterpolate(unref(tran)("Bouns", unref(store).state.lang))}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === false) {
        _push(`<span class="font-bold text-xl text-white pl-3">+100 ${ssrInterpolate(unref(tran)("Free Spins", unref(store).state.lang))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><img class="sm:hidden w-64 -mr-3" src="/imgs/new.png" alt="new"></div><div class="flex items-center justify-between pt-5">`);
      if (unref(store).state.isLogin === false) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "sm:mt-1 font-bold text-lg md:text-xl lg:text-2xl sm:px-6 !py-0 z-[10]",
          unelevated: "",
          color: "primary",
          label: unref(tran)("SIGN UP", unref(store).state.lang),
          onClick: ($event) => unref(store).commit("handleOnRegister", true)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === true) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: [
            "sm:mt-1 font-bold text-lg md:text-xl lg:text-2xl lg:px-6 md:ml-4",
            unref(store).state.isDrawer ? "lg:hidden" : ""
          ],
          unelevated: "",
          color: "primary",
          label: unref(tran)("Deposit", unref(store).state.lang),
          onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wallet/deposit"))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center flex-col justify-between"><p class="font-bold text-xl pl-3">2ND/3RD ${ssrInterpolate(unref(tran)("DEPOSIT", unref(store).state.lang))}</p><p class="gradiant text-3xl font-black pl-3"> 100% ${ssrInterpolate(unref(tran)("bonus", unref(store).state.lang))}</p></div></div></div><div class="hidden sm:!block md:ml-3 lg:ml-8 xl:ml-16 2xl:ml-24 pt-3">`);
      if (unref(store).state.isLogin === true) {
        _push(`<p class="font-bold text-3xl pl-5 hidden md:!block">${ssrInterpolate(unref(tran)("Welcome", unref(store).state.lang))} ${ssrInterpolate(unref(store).state.User.first_name)} ${ssrInterpolate(unref(store).state.User.last_name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<img class="md:max-w-sm sm:max-w-xs w-48 sm:w-auto" src="/imgs/logo_full.png" alt="logo"><p class="font-bold md:text-3xl text-2xl pl-5">${ssrInterpolate(unref(tran)("# 1 Online casino", unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "font-family": "'Roboto Condensed',sans-serif" })}" class="${ssrRenderClass([
        "font-medium text-lg xl:block pl-5 pt-1",
        unref(store).state.isDrawer ? "lg:hidden" : ""
      ])}">${ssrInterpolate(unref(tran)("enjoy", unref(store).state.lang))}</p><p class="text-2xl font-bold mb-[-7px] pl-5 mt-5">${ssrInterpolate(unref(tran)("welcome bonus", unref(store).state.lang))}</p><div class="flex felx-row pl-2">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "euro",
        class: "text-[60px] md:text-[72px] text-bold",
        style: { "color": "#fff004" }
      }, null, _parent));
      _push(`<span class="font-black font-bold text-6xl md:text-7xl" style="${ssrRenderStyle({ "color": "#fff004" })}">1800</span></div>`);
      if (unref(store).state.isLogin === false) {
        _push(`<p><span style="${ssrRenderStyle({ "color": "#fff004" })}" class="text-3xl xl:text-4xl font-bold pl-3 pr-2">200%</span><span class="text-bold">${ssrInterpolate(unref(tran)("BONUS", unref(store).state.lang))}</span><span style="${ssrRenderStyle({ "color": "#fff004" })}" class="text-3xl xl:text-4xl font-bold p-2">+100</span><span class="text-bold">${ssrInterpolate(unref(tran)("FREE SPINS", unref(store).state.lang))}</span></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="pt-3 pl-5 flex items-center justify-start">`);
      if (unref(store).state.isDrawer === false) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mr-4",
          outline: "",
          color: "white",
          label: unref(tran)("play slots", unref(store).state.lang),
          onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/casino?tab=slots"))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === true) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 mr-2",
          unelevated: "",
          color: "primary",
          label: unref(tran)("Deposit", unref(store).state.lang),
          onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wallet/deposit"))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === false) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: [
            "font-bold text-lg md:text-xl lg:text-2xl !leading-loose lg:px-6 z-[10]"
          ],
          unelevated: "",
          color: "primary",
          label: unref(tran)("SIGN UP", unref(store).state.lang),
          onClick: ($event) => unref(store).commit("handleOnRegister", true)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="items-center justify-start pt-3 pl-5 hidden md:!block md:ml-3 lg:ml-8 xl:ml-16 2xl:ml-24">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-9 md:w-10 lg:w-12",
        src: "/imgs/visa.png",
        alt: "visa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-9 md:w-10 lg:w-12 ml-1",
        src: "/imgs/master_card.png",
        alt: "master_card"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-9 md:w-10 lg:w-12 ml-1",
        src: "/imgs/bitcoin.png",
        alt: "bitcoin"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-9 md:w-10 lg:w-12 ml-1",
        src: "/imgs/etirum.png",
        alt: "etirum"
      }, null, _parent));
      _push(`</div></div><img class="md:mr-3 lg:mr-8 xl:mr-16 2xl:mr-24 z-[1000] hidden sm:!block absolute -right-3 -bottom-24 z-0 w-64 top-3 sm:top-8 sm:w-72 md:w-96 md:!block sm:max-w-sm md:max-w-lg xl:max-w-md xl:w-auto sm_hidden" src="/imgs/new.png" alt="new"></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/Overview.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IntroCards",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isDrawer = computed(() => {
      return ref(store.state.isDrawer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_img = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="relative mt-4"><div class="grid grid-cols-2 gap-1 sm:gap-3 md:gap-4 lg:gap-6"><div class="flex items-center justify-between relative h-24 sm:h-auto"><div class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-2 sm:left-8"><p class="${ssrRenderClass([
        "font-bold text-sm leading-4 sm:text-sm md:text-xl xl:text-2xl text-shadow-lg",
        unref(isDrawer).value ? "lg:text-xs" : "lg:text-xl"
      ])}">${ssrInterpolate(unref(tran)("BONUS WHEEL", unref(store).state.lang))}</p><p class="${ssrRenderClass([
        "text-xxs sm:text-xxs md:text-xs xl:text-sm pb-0 sm:pb-2",
        unref(isDrawer).value ? "lg:text-xxs" : "lg:pb-4"
      ])}">${ssrInterpolate(unref(tran)("Get free spin every 2 hours!", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_btn, {
        size: "xs",
        label: unref(tran)("Free Spin", unref(store).state.lang),
        onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wheel"))
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "h-full rounded-md",
        src: "/imgs/back_bonus.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 sm:-bottom-3 rotate",
        src: "/imgs/sidebar/wheel.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between relative h-24 sm:h-auto"><div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-2 sm:left-8"><p class="${ssrRenderClass([
        "font-bold text-sm leading-4 md:text-xl  xl:text-2xl text-shadow-lg",
        unref(isDrawer).value ? "lg:text-xs" : "lg:text-xl"
      ])}">${ssrInterpolate(unref(tran)("DAILY CASHBACK", unref(store).state.lang))}</p><div class="flex items-center justify-start"><p class="${ssrRenderClass([
        "text-xxs md:text-xs  xl:text-sm pb-2",
        unref(isDrawer).value ? "lg:text-xxs" : "pb-4 text-xs"
      ])}">${ssrInterpolate(unref(tran)("UP TO", unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
        "text-3xl md:text-5xl xl:text-6xl font-black pl-1",
        unref(isDrawer).value ? "lg:text-3xl" : "lg:text-5xl"
      ])}"> 20% </p></div></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "h-full rounded-md",
        src: "/imgs/back_daily.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 sm:-bottom-3",
        src: "/imgs/cash_back.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(`</div></div><div class="hidden md:!grid grid-cols-3 gap-10 lg:gap-6 pt-6"><div class="flex items-center justify-between relative"><div class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p style="${ssrRenderStyle({ "line-height": "19px" })}" class="${ssrRenderClass([
        "font-bold text-base xl:text-base text-shadow-lg",
        unref(isDrawer).value ? "lg:text-xs" : ""
      ])}"> 2nd/3rd </p><p style="${ssrRenderStyle({ "line-height": "19px" })}" class="${ssrRenderClass([
        "font-bold text-base xl:text-base text-shadow-lg",
        unref(isDrawer).value ? "lg:text-md" : ""
      ])}">${ssrInterpolate(unref(tran)("deposit", unref(store).state.lang))}</p><p class="${ssrRenderClass([
        "gradiant text-2xl xl:text-2xl font-black",
        unref(isDrawer).value ? "lg:text-base" : ""
      ])}"> 100% </p><p class="${ssrRenderClass([
        "gradiant text-2xl xl:text-2xl font-black",
        unref(isDrawer).value ? "lg:text-base" : ""
      ])}">${ssrInterpolate(unref(tran)("bonus", unref(store).state.lang))}</p></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_dark.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0",
        src: "/imgs/promotion.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-around relative"><div class="w-full absolute left-8 top-8 md:top-3 md:left-3 lg:left-3 lg:top-3 z-10"><p class="${ssrRenderClass([
        "gradiant text-2xl md:text-lg xl:text-2xl font-black",
        unref(isDrawer).value ? "lg:text-base" : "lg:text-2xl"
      ])}">${ssrInterpolate(unref(tran)("WELCOME BONUS", unref(store).state.lang))}</p></div><div class="absolute z-10 right-8 lg:right-3"><p class="${ssrRenderClass([
        "gradiant text-2xl md:text-lg  xl:text-2xl font-black",
        unref(isDrawer).value ? "lg:text-base lg:pt-2" : "lg:text-2xl"
      ])}"> 200% </p><div class="flex items-center"><p style="${ssrRenderStyle({ "line-height": "19px" })}" class="${ssrRenderClass([
        "gradiant text-2xl md:text-lg xl:text-2xl font-black",
        unref(isDrawer).value ? "lg:text-base" : "lg:text-2xl"
      ])}"> +100 </p><p class="${ssrRenderClass([unref(isDrawer).value ? "lg:text-xs" : ""])}">${ssrInterpolate(unref(tran)("Free Spins", unref(store).state.lang))}</p></div></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_dark.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute left-0 bottom-0",
        src: "/imgs/pack.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between relative"><div class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="text-xs">${ssrInterpolate(unref(tran)("Take Advantage", unref(store).state.lang))}</p><p class="font-bold text-base text-shadow-lg">${ssrInterpolate(unref(tran)("Exclusif bonus", unref(store).state.lang))}</p><p class="gradiant text-lg font-black">${ssrInterpolate(unref(tran)("VIP Program", unref(store).state.lang))}</p></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_dark.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0",
        src: "/imgs/sportbook.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div></div></div><div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/IntroCards.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const imgurl = "/imgs/noGameImg.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameListIndex",
  __ssrInlineRender: true,
  props: {
    game: {
      type: Object
    }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const play = (demo, slug) => {
      store.commit("handleGamePlayMode", demo);
      router.push(linkTo(`/play/${slug}`));
    };
    let focusgame = ref("");
    const handleFocusGame = (id) => {
      focusgame.value = id;
    };
    ref(1);
    ref((_a = props.game) == null ? void 0 : _a.list.filter((item, index) => index < 2));
    const onFavorite = (id, slug) => {
      var _a2;
      if (store.state.favoriteGameSlugList.includes(slug))
        removeFavoriteGameById(store, id, slug, (_a2 = route.query) == null ? void 0 : _a2.tab);
      else
        addFavoriteGameById(store, id, slug);
    };
    const seeAll = () => {
      var _a2, _b, _c, _d;
      if (((_a2 = props.game) == null ? void 0 : _a2.title) == "newGames" || ((_b = props.game) == null ? void 0 : _b.title) == "hotGames")
        router.push(linkTo("/casino?tab=slots"));
      if (((_c = props.game) == null ? void 0 : _c.title) == "tableGames")
        router.push(linkTo("/casino?tab=table"));
      if (((_d = props.game) == null ? void 0 : _d.title) == "liveGames")
        router.push(linkTo("/casino?tab=live"));
    };
    let swiperRef;
    const onSwiper = (swiper) => {
      swiperRef = swiper;
    };
    useHead({
      title: "Games",
      meta: [
        {
          hid: "Games",
          name: "Games",
          content: "Discover a diverse collection of captivating games at our platform. From thrilling slot games that offer immersive experiences to live games that bring the casino atmosphere to your screen, we have something for everyone. Get ready to embark on an unforgettable gaming journey filled with excitement and big wins."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_icon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4" }, _attrs))}>`);
      if (!((_a2 = __props.game) == null ? void 0 : _a2.title.includes("In"))) {
        _push(`<div class="px-2 sm:px-4"><div class="flex items-center justify-between pb-2 mb-2 border-gray-400 border-b-2 border-solid border-none"><div class="flex items-center"><img class="w-4"${ssrRenderAttr("src", `/imgs/sidebar/${(_b = __props.game) == null ? void 0 : _b.title}.png`)} alt="hot"><p class="font-bold text-lg pl-2">${ssrInterpolate(unref(tran)(unref(changeTitle)((_c = __props.game) == null ? void 0 : _c.title), unref(store).state.lang))}</p></div><div class="">`);
        _push(ssrRenderComponent(_component_q_btn, {
          onClick: ($event) => unref(swiperRef).slidePrev(),
          ref: "prevBtn",
          size: "sm",
          style: { "background": "#3f4655" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-2" src="/imgs/left.png" alt="left"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-2",
                  src: "/imgs/left.png",
                  alt: "left"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_q_btn, {
          onClick: ($event) => unref(swiperRef).slideNext(),
          ref: "nextBtn",
          class: "mx-2",
          size: "sm",
          style: { "background": "#3f4655" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-2" src="/imgs/right.png" alt="right"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-2",
                  src: "/imgs/right.png",
                  alt: "right"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_q_btn, {
          size: "sm",
          style: { "background": "#3f4655" },
          label: unref(tran)("See all", unref(store).state.lang),
          onClick: seeAll
        }, null, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(unref(Swiper), {
          "slides-per-view": 1.2,
          "space-between": 10,
          onSwiper,
          breakpoints: {
            "320": {
              slidesPerView: 2.2,
              spaceBetween: 5
            },
            "640": {
              slidesPerView: 3.2,
              spaceBetween: 5
            },
            "820": {
              slidesPerView: 4.2,
              spaceBetween: 10
            },
            "1035": {
              slidesPerView: 3.2,
              spaceBetween: 10
            },
            "1240": {
              slidesPerView: 4.2,
              spaceBetween: 10
            },
            "1440": {
              slidesPerView: 5.2,
              spaceBetween: 10
            }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a3, _b2, _c2, _d2;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a3 = __props.game) == null ? void 0 : _a3.list, (gameItem) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { class: "hidden md:!block" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="group"${_scopeId2}><div class="relative rounded-lg"${_scopeId2}><img${ssrRenderAttr("src", (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl)} class="relative rounded-lg z-[1]"${_scopeId2}><div class="absolute opacity-0 group-hover:opacity-100 w-full h-full z-[2] top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300"${_scopeId2}><div class="absolute w-full h-full" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" })}"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_q_btn, {
                        "text-color": "white",
                        style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                        onClick: ($event) => play(0, gameItem.slug)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_q_icon, {
                              name: "play_arrow",
                              size: "lg"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_q_icon, {
                                name: "play_arrow",
                                size: "lg"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if ((gameItem == null ? void 0 : gameItem.demo) == 1) {
                        _push3(ssrRenderComponent(_component_q_btn, {
                          "text-color": "white",
                          padding: "1px 10px",
                          label: unref(tran)("Demo", unref(store).state.lang),
                          style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                          onClick: ($event) => play(1, gameItem.slug)
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_q_btn, {
                        "text-color": "yellow",
                        padding: "0px",
                        class: "absolute top-2 right-2",
                        style: { "background-color": "transparent" },
                        onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug)) {
                              _push4(ssrRenderComponent(_component_q_icon, {
                                name: "favorite",
                                size: "xs"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (!unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug)) {
                              _push4(ssrRenderComponent(_component_q_icon, {
                                name: "favorite_border",
                                size: "xs"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                key: 0,
                                name: "favorite",
                                size: "xs"
                              })) : createCommentVNode("", true),
                              !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                key: 1,
                                name: "favorite_border",
                                size: "xs"
                              })) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div><p class="text-center text-white text-[11px] group-hover:text-[12px] p-2"${_scopeId2}>${ssrInterpolate(gameItem == null ? void 0 : gameItem.name)}</p></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "group" }, [
                          createVNode("div", { class: "relative rounded-lg" }, [
                            createVNode("img", {
                              src: (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl,
                              class: "relative rounded-lg z-[1]"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute opacity-0 group-hover:opacity-100 w-full h-full z-[2] top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300" }, [
                              createVNode("div", {
                                class: "absolute w-full h-full",
                                style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" }
                              }, [
                                createVNode(_component_q_btn, {
                                  "text-color": "white",
                                  style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                                  onClick: ($event) => play(0, gameItem.slug)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_q_icon, {
                                      name: "play_arrow",
                                      size: "lg"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                (gameItem == null ? void 0 : gameItem.demo) == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  "text-color": "white",
                                  padding: "1px 10px",
                                  label: unref(tran)("Demo", unref(store).state.lang),
                                  style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                                  onClick: ($event) => play(1, gameItem.slug)
                                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_q_btn, {
                                "text-color": "yellow",
                                padding: "0px",
                                class: "absolute top-2 right-2",
                                style: { "background-color": "transparent" },
                                onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                              }, {
                                default: withCtx(() => [
                                  unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                    key: 0,
                                    name: "favorite",
                                    size: "xs"
                                  })) : createCommentVNode("", true),
                                  !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                    key: 1,
                                    name: "favorite_border",
                                    size: "xs"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ]),
                          createVNode("p", { class: "text-center text-white text-[11px] group-hover:text-[12px] p-2" }, toDisplayString(gameItem == null ? void 0 : gameItem.name), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--><!--[-->`);
              ssrRenderList((_b2 = __props.game) == null ? void 0 : _b2.list, (gameItem) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), { class: "md:!hidden" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}><div class="group relative rounded-lg"${_scopeId2}><img${ssrRenderAttr("src", (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl)} class="relative rounded-lg z-[1]"${_scopeId2}><div class="${ssrRenderClass([unref(focusgame) == gameItem.id && "opacity-100", "absolute z-[2] w-full h-full top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300"])}"${_scopeId2}><div class="absolute w-full h-full flex flex-col justify-center items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_q_btn, {
                        "text-color": "white",
                        style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                        onClick: ($event) => play(0, gameItem.slug)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_q_icon, {
                              name: "play_arrow",
                              size: "lg"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_q_icon, {
                                name: "play_arrow",
                                size: "lg"
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      if ((gameItem == null ? void 0 : gameItem.demo) == 1) {
                        _push3(ssrRenderComponent(_component_q_btn, {
                          "text-color": "white",
                          padding: "1px 10px",
                          label: "Demo",
                          style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                          onClick: ($event) => play(1, gameItem.slug)
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                      _push3(ssrRenderComponent(_component_q_btn, {
                        "text-color": "yellow",
                        padding: "0px",
                        class: "absolute top-2 right-2",
                        style: { "background-color": "transparent" },
                        onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug)) {
                              _push4(ssrRenderComponent(_component_q_icon, {
                                name: "favorite",
                                size: "xs"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            if (!unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug)) {
                              _push4(ssrRenderComponent(_component_q_icon, {
                                name: "favorite_border",
                                size: "xs"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                key: 0,
                                name: "favorite",
                                size: "xs"
                              })) : createCommentVNode("", true),
                              !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                key: 1,
                                name: "favorite_border",
                                size: "xs"
                              })) : createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                      if (unref(focusgame) != gameItem.id) {
                        _push3(`<div class="absolute z-[3] w-full h-full top-0 left-0 rounded-lg"${_scopeId2}></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><p class="text-center gametext p-1"${_scopeId2}>${ssrInterpolate(gameItem == null ? void 0 : gameItem.name)}</p></div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode("div", {
                            class: "group relative rounded-lg",
                            onClick: ($event) => handleFocusGame(gameItem.id)
                          }, [
                            createVNode("img", {
                              src: (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl,
                              class: "relative rounded-lg z-[1]"
                            }, null, 8, ["src"]),
                            createVNode("div", {
                              class: ["absolute z-[2] w-full h-full top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300", unref(focusgame) == gameItem.id && "opacity-100"]
                            }, [
                              createVNode("div", { class: "absolute w-full h-full flex flex-col justify-center items-center" }, [
                                createVNode(_component_q_btn, {
                                  "text-color": "white",
                                  style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                                  onClick: ($event) => play(0, gameItem.slug)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_q_icon, {
                                      name: "play_arrow",
                                      size: "lg"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                (gameItem == null ? void 0 : gameItem.demo) == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  "text-color": "white",
                                  padding: "1px 10px",
                                  label: "Demo",
                                  style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                                  onClick: ($event) => play(1, gameItem.slug)
                                }, null, 8, ["onClick"])) : createCommentVNode("", true)
                              ]),
                              createVNode(_component_q_btn, {
                                "text-color": "yellow",
                                padding: "0px",
                                class: "absolute top-2 right-2",
                                style: { "background-color": "transparent" },
                                onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                              }, {
                                default: withCtx(() => [
                                  unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                    key: 0,
                                    name: "favorite",
                                    size: "xs"
                                  })) : createCommentVNode("", true),
                                  !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                    key: 1,
                                    name: "favorite_border",
                                    size: "xs"
                                  })) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ], 2),
                            unref(focusgame) != gameItem.id ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute z-[3] w-full h-full top-0 left-0 rounded-lg"
                            })) : createCommentVNode("", true)
                          ], 8, ["onClick"]),
                          createVNode("p", { class: "text-center gametext p-1" }, toDisplayString(gameItem == null ? void 0 : gameItem.name), 1)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList((_c2 = __props.game) == null ? void 0 : _c2.list, (gameItem) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { class: "hidden md:!block" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "group" }, [
                        createVNode("div", { class: "relative rounded-lg" }, [
                          createVNode("img", {
                            src: (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl,
                            class: "relative rounded-lg z-[1]"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "absolute opacity-0 group-hover:opacity-100 w-full h-full z-[2] top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300" }, [
                            createVNode("div", {
                              class: "absolute w-full h-full",
                              style: { "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center" }
                            }, [
                              createVNode(_component_q_btn, {
                                "text-color": "white",
                                style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                                onClick: ($event) => play(0, gameItem.slug)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_icon, {
                                    name: "play_arrow",
                                    size: "lg"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              (gameItem == null ? void 0 : gameItem.demo) == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                "text-color": "white",
                                padding: "1px 10px",
                                label: unref(tran)("Demo", unref(store).state.lang),
                                style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                                onClick: ($event) => play(1, gameItem.slug)
                              }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_q_btn, {
                              "text-color": "yellow",
                              padding: "0px",
                              class: "absolute top-2 right-2",
                              style: { "background-color": "transparent" },
                              onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                            }, {
                              default: withCtx(() => [
                                unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                  key: 0,
                                  name: "favorite",
                                  size: "xs"
                                })) : createCommentVNode("", true),
                                !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                  key: 1,
                                  name: "favorite_border",
                                  size: "xs"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ])
                        ]),
                        createVNode("p", { class: "text-center text-white text-[11px] group-hover:text-[12px] p-2" }, toDisplayString(gameItem == null ? void 0 : gameItem.name), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 256)),
                (openBlock(true), createBlock(Fragment, null, renderList((_d2 = __props.game) == null ? void 0 : _d2.list, (gameItem) => {
                  return openBlock(), createBlock(unref(SwiperSlide), { class: "md:!hidden" }, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", {
                          class: "group relative rounded-lg",
                          onClick: ($event) => handleFocusGame(gameItem.id)
                        }, [
                          createVNode("img", {
                            src: (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl,
                            class: "relative rounded-lg z-[1]"
                          }, null, 8, ["src"]),
                          createVNode("div", {
                            class: ["absolute z-[2] w-full h-full top-0 left-0 rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300", unref(focusgame) == gameItem.id && "opacity-100"]
                          }, [
                            createVNode("div", { class: "absolute w-full h-full flex flex-col justify-center items-center" }, [
                              createVNode(_component_q_btn, {
                                "text-color": "white",
                                style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
                                onClick: ($event) => play(0, gameItem.slug)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_q_icon, {
                                    name: "play_arrow",
                                    size: "lg"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              (gameItem == null ? void 0 : gameItem.demo) == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                "text-color": "white",
                                padding: "1px 10px",
                                label: "Demo",
                                style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
                                onClick: ($event) => play(1, gameItem.slug)
                              }, null, 8, ["onClick"])) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_q_btn, {
                              "text-color": "yellow",
                              padding: "0px",
                              class: "absolute top-2 right-2",
                              style: { "background-color": "transparent" },
                              onClick: ($event) => onFavorite(gameItem == null ? void 0 : gameItem.id, gameItem.slug)
                            }, {
                              default: withCtx(() => [
                                unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                  key: 0,
                                  name: "favorite",
                                  size: "xs"
                                })) : createCommentVNode("", true),
                                !unref(store).state.favoriteGameSlugList.includes(gameItem == null ? void 0 : gameItem.slug) ? (openBlock(), createBlock(_component_q_icon, {
                                  key: 1,
                                  name: "favorite_border",
                                  size: "xs"
                                })) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ], 2),
                          unref(focusgame) != gameItem.id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "absolute z-[3] w-full h-full top-0 left-0 rounded-lg"
                          })) : createCommentVNode("", true)
                        ], 8, ["onClick"]),
                        createVNode("p", { class: "text-center gametext p-1" }, toDisplayString(gameItem == null ? void 0 : gameItem.name), 1)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_d = __props.game) == null ? void 0 : _d.title.includes("In")) {
        _push(`<div class="px-2"><div class="flex items-center"><img class="w-4"${ssrRenderAttr("src", `/imgs/sidebar/${(_e = __props.game) == null ? void 0 : _e.title}.png`)} alt="hot"><!--[-->`);
        ssrRenderList((_f = __props.game) == null ? void 0 : _f.title.split(" "), (word, index) => {
          _push(`<p class="font-bold text-lg pl-2">${ssrInterpolate(index < 3 ? unref(tran)(word, unref(store).state.lang) : word)}</p>`);
        });
        _push(`<!--]--></div><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-1 py-2"><!--[-->`);
        ssrRenderList((_g = __props.game) == null ? void 0 : _g.list, (gameItem) => {
          _push(`<div class="group hidden md:!block h-full p-1 w-full"><div class="relative w-full rounded-lg"><img${ssrRenderAttr("src", (gameItem == null ? void 0 : gameItem.image) ? gameItem == null ? void 0 : gameItem.image : imgurl)} class="relative h-full w-full rounded-lg z-[1] bg-cover"><div class="opacity-0 group-hover:opacity-100 absolute w-full h-full top-0 left-0 z-[2] rounded-lg bg-gray-900 bg-opacity-80 transition ease-in-out duration-300"><div class="absolute w-full h-full flex flex-col justify-center items-center">`);
          _push(ssrRenderComponent(_component_q_btn, {
            "text-color": "white",
            style: { "border-radius": "50%", "background-color": "red", "padding": "5px", "margin-bottom": "5px" },
            onClick: ($event) => play(0, gameItem.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_q_icon, {
                  name: "play_arrow",
                  size: "lg"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_q_icon, {
                    name: "play_arrow",
                    size: "lg"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          if ((gameItem == null ? void 0 : gameItem.demo) == 1) {
            _push(ssrRenderComponent(_component_q_btn, {
              "text-color": "white",
              padding: "1px 10px",
              label: unref(tran)("Demo", unref(store).state.lang),
              style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
              onClick: ($event) => play(1, gameItem.slug)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_q_btn, {
            "text-color": "yellow",
            padding: "0px",
            class: "absolute top-2 right-2",
            style: { "background-color": "transparent" },
            onClick: ($event) => onFavorite(gameItem.id, gameItem.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(store).state.favoriteGameSlugList.includes(
                  gameItem == null ? void 0 : gameItem.slug
                )) {
                  _push2(ssrRenderComponent(_component_q_icon, {
                    name: "favorite",
                    size: "xs"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (!unref(store).state.favoriteGameSlugList.includes(
                  gameItem == null ? void 0 : gameItem.slug
                )) {
                  _push2(ssrRenderComponent(_component_q_icon, {
                    name: "favorite_border",
                    size: "xs"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(store).state.favoriteGameSlugList.includes(
                    gameItem == null ? void 0 : gameItem.slug
                  ) ? (openBlock(), createBlock(_component_q_icon, {
                    key: 0,
                    name: "favorite",
                    size: "xs"
                  })) : createCommentVNode("", true),
                  !unref(store).state.favoriteGameSlugList.includes(
                    gameItem == null ? void 0 : gameItem.slug
                  ) ? (openBlock(), createBlock(_component_q_icon, {
                    key: 1,
                    name: "favorite_border",
                    size: "xs"
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><p class="text-center text-white text-[11px] group-hover:text-[12px] p-1">${ssrInterpolate(gameItem == null ? void 0 : gameItem.name)}</p></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList((_h = __props.game) == null ? void 0 : _h.list, (gameItem) => {
          _push(`<div class="md:hidden h-full w-full p-1"><div class="relative w-full rounded-lg"><img${ssrRenderAttr("src", gameItem.image ? gameItem.image : imgurl)} class="relative h-full w-full rounded-lg z-[1] bg-cover"><div class="${ssrRenderClass([unref(focusgame) == gameItem.id && "opacity-100", "absolute w-full h-full top-0 left-0 z-[2] rounded-lg bg-gray-900 bg-opacity-80 opacity-0 duration-300"])}"><div class="absolute w-full h-full flex flex-col justify-center items-center">`);
          _push(ssrRenderComponent(_component_q_btn, {
            "text-color": "white",
            style: { "border-radius": "50%", "background-color": "red", "padding": "2px", "margin-bottom": "7px" },
            onClick: ($event) => play(0, gameItem.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_q_icon, {
                  name: "play_arrow",
                  size: "lg"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_q_icon, {
                    name: "play_arrow",
                    size: "lg"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          if ((gameItem == null ? void 0 : gameItem.demo) == 1) {
            _push(ssrRenderComponent(_component_q_btn, {
              "text-color": "white",
              padding: "1px 5px",
              label: unref(tran)("Demo", unref(store).state.lang),
              style: { "font-size": "x-small", "border-radius": "10%", "background-color": "transparent", "border": "white 2px solid" },
              onClick: ($event) => play(1, gameItem.slug)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_q_btn, {
            "text-color": "yellow",
            padding: "0px",
            class: "absolute top-2 right-2",
            style: { "background-color": "transparent" },
            onClick: ($event) => onFavorite(gameItem.id, gameItem.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(store).state.favoriteGameSlugList.includes(
                  gameItem == null ? void 0 : gameItem.slug
                )) {
                  _push2(ssrRenderComponent(_component_q_icon, {
                    name: "favorite",
                    size: "xs"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (!unref(store).state.favoriteGameSlugList.includes(
                  gameItem == null ? void 0 : gameItem.slug
                )) {
                  _push2(ssrRenderComponent(_component_q_icon, {
                    name: "favorite_border",
                    size: "xs"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(store).state.favoriteGameSlugList.includes(
                    gameItem == null ? void 0 : gameItem.slug
                  ) ? (openBlock(), createBlock(_component_q_icon, {
                    key: 0,
                    name: "favorite",
                    size: "xs"
                  })) : createCommentVNode("", true),
                  !unref(store).state.favoriteGameSlugList.includes(
                    gameItem == null ? void 0 : gameItem.slug
                  ) ? (openBlock(), createBlock(_component_q_icon, {
                    key: 1,
                    name: "favorite_border",
                    size: "xs"
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
          if (unref(focusgame) != gameItem.id) {
            _push(`<div class="absolute z-[3] w-full h-full top-0 left-0 rounded-lg"></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><p class="text-center text-white text-[11px] group-hover:text-[12px] p-1">${ssrInterpolate(gameItem == null ? void 0 : gameItem.name)}</p></div>`);
        });
        _push(`<!--]--></div><div class="flex justify-center">`);
        _push(ssrRenderComponent(_component_q_btn, {
          class: "w-52",
          "text-color": "white",
          color: "primary",
          onClick: ($event) => unref(router).push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/casino?tab=slots")),
          label: unref(tran)("Load More", unref(store).state.lang)
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/GameListIndex.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      const _component_landing_page_overview = _sfc_main$3;
      const _component_landing_page_intro_cards = _sfc_main$2;
      const _component_landing_page_category_bar = _sfc_main$3$1;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 sm:px-3 md:px-6 lg:px-9 py-9 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_landing_page_overview, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_landing_page_intro_cards, null, null, _parent2, _scopeId));
            _push2(`</section><section class="pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_landing_page_category_bar, null, null, _parent2, _scopeId));
            if (unref(tab) != "") {
              _push2(ssrRenderComponent(_sfc_main$1$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(tab) == "") {
              _push2(`<!--[-->`);
              ssrRenderList(unref(store).state.allGameList, (game) => {
                _push2(ssrRenderComponent(_sfc_main$1, { game }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, {
              providers: unref(store).state.providers
            }, null, _parent2, _scopeId));
            _push2(`</section><section${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2$1, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 sm:px-3 md:px-6 lg:px-9 py-9 m-auto"
              }, [
                createVNode("section", { class: "main h-full px-4" }, [
                  createVNode(_component_landing_page_overview),
                  createVNode(_component_landing_page_intro_cards)
                ]),
                createVNode("section", { class: "pt-4" }, [
                  createVNode(_component_landing_page_category_bar),
                  unref(tab) != "" ? (openBlock(), createBlock(_sfc_main$1$1, { key: 0 })) : createCommentVNode("", true),
                  unref(tab) == "" ? (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(store).state.allGameList, (game) => {
                    return openBlock(), createBlock(_sfc_main$1, { game }, null, 8, ["game"]);
                  }), 256)) : createCommentVNode("", true),
                  createVNode(_sfc_main$4, {
                    providers: unref(store).state.providers
                  }, null, 8, ["providers"])
                ]),
                createVNode("section", null, [
                  createVNode(_sfc_main$2$1),
                  createVNode(_sfc_main$5)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eb61fd6f.mjs.map
