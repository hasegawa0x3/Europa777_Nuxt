import { _ as __nuxt_component_0$1, a as __nuxt_component_3 } from './QBtn-973e1c12.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, ref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './QImg-55911caf.mjs';
import { useRouter, useRoute } from 'vue-router';
import { t as tran } from './translation-9652486b.mjs';
import { u as useStore, b as useHead } from '../server.mjs';
import { g as getRecentPlayedGames, b as getFavoriteGames, c as getRouletteGames, d as getTableGames, e as getLiveGames, f as getSlotsGames, h as getAllGamesByType, i as getAllGames, r as removeFavoriteGameById, a as addFavoriteGameById } from './game-690251d6.mjs';
import { a as linkTo } from './link-f9710514.mjs';
import { _ as __nuxt_component_2 } from './QLinearProgress-7723eb23.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CategoryBarItem",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    link: {
      type: String
    }
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const props = __props;
    const store = useStore();
    useRouter();
    const route = useRoute();
    let tab = ((_b = (_a = route.query) == null ? void 0 : _a.tab) == null ? void 0 : _b.toString()) ? (_d = (_c = route.query) == null ? void 0 : _c.tab) == null ? void 0 : _d.toString() : "";
    let active = ref(tab === (props == null ? void 0 : props.link));
    watch(() => route.query.tab, () => {
      var _a2, _b2, _c2, _d2;
      tab = ((_b2 = (_a2 = route.query) == null ? void 0 : _a2.tab) == null ? void 0 : _b2.toString()) ? (_d2 = (_c2 = route.query) == null ? void 0 : _c2.tab) == null ? void 0 : _d2.toString() : "";
      active.value = tab === (props == null ? void 0 : props.link);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      const _component_q_img = __nuxt_component_0;
      if (unref(store).state.isLogin || __props.link != "favorites" && __props.link != "recent") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "flex flex-nowrap items-center justify-center w-26 p-3 cursor-pointer rounded-lg",
          style: { backgroundColor: unref(active) ? "#2283ee" : "" }
        }, _attrs))}>`);
        _push(ssrRenderComponent(_component_q_img, {
          class: "w-4",
          src: `/imgs/sidebar/${__props.icon}.png`,
          alt: "icon"
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList((_a2 = __props.name) == null ? void 0 : _a2.split(" "), (str) => {
          _push(`<p class="pl-1 text-xs flex flex-row flex-nowrap">${ssrInterpolate(unref(tran)(str, unref(store).state.lang))}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/CategoryBarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CategoryBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const store = useStore();
    let routePath = "";
    watch(() => route.query.tab, () => {
      if (store.state.pageNumber == 1 && routePath == route.path)
        getGames(1);
      store.commit("handlePageNumber", 1);
      store.commit("handleCurrentLoaded", 0);
      store.commit("handleGetGamesByType", []);
      store.commit("handleGetGamesAmount", 0);
      routePath = route.path;
    });
    watch(() => store.state.pageNumber, () => {
      getGames(store.state.pageNumber);
    });
    const getGames = (pagenumber) => {
      var _a, _b, _c, _d;
      let tab = ((_b = (_a = route.query) == null ? void 0 : _a.tab) == null ? void 0 : _b.toString()) ? (_d = (_c = route.query) == null ? void 0 : _c.tab) == null ? void 0 : _d.toString() : "";
      let isCasinoPage = route.path.toString().includes("casino");
      let isLandingpage = route.path.toString() == "/";
      switch (tab) {
        case "":
          isCasinoPage && getAllGamesByType(store, pagenumber);
          isLandingpage && getAllGames(store);
          break;
        case "slots":
          getSlotsGames(store, pagenumber);
          break;
        case "live":
          getLiveGames(store, pagenumber);
          break;
        case "table":
          getTableGames(store, pagenumber);
          break;
        case "roulette":
          getRouletteGames(store, pagenumber);
          break;
        case "favorites":
          getFavoriteGames(store, pagenumber);
          break;
        case "recent":
          getRecentPlayedGames(store, pagenumber);
          break;
      }
    };
    const categories = [
      {
        name: "All Games",
        icon: "games",
        link: ""
      },
      {
        name: "Slots",
        icon: "slot",
        link: "slots"
      },
      {
        name: "Live",
        icon: "liveGames",
        link: "live"
      },
      {
        name: "Table",
        icon: "tableGames",
        link: "table"
      },
      {
        name: "Roulette",
        icon: "roulette",
        link: "roulette"
      },
      {
        name: "Favorites",
        icon: "fav",
        link: "favorites"
      },
      {
        name: "Recently Played",
        icon: "recent",
        link: "recent"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_icon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "sm:rounded-lg w-full py-2 px-3",
        style: { "background": "#282b34" }
      }, _attrs))}><div class="flex justify-between items-center"><div class="flex flex-nowrap pb-2 mb-2 md:pb-0 md:mb-0 overflow-x-auto"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(ssrRenderComponent(_sfc_main$4, category, null, _parent));
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([!!unref(store).state.isDrawer ? "xl:!block" : "lg:!block xl:hidden", "md:hidden w-full md:w-fit"])}"><div class="flex items-center flex-nowrap bg-gray-700 rounded-lg h-9 my-1 px-2"><span class="w-[20px]">`);
      _push(ssrRenderComponent(_component_q_icon, {
        class: "mr-1",
        style: { "max-width": "20px" },
        name: "search",
        size: "sm"
      }, null, _parent));
      _push(`</span><p class="text-md rounded-lg w-fit text-center">${ssrInterpolate(unref(tran)("Search for Games", unref(store).state.lang))}</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/CategoryBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Conclusion",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_img = __nuxt_component_0;
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_icon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-10 m-4 gap-2" }, _attrs))}><div class="col-span-10 md:col-span-4 relative">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-full h-full",
        src: "/imgs/back_daily_b.png"
      }, null, _parent));
      _push(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="font-bold text-xl md:text-xl xl:text-2xl text-shadow-lg">${ssrInterpolate(unref(tran)("DAILY", unref(store).state.lang))}<br>${ssrInterpolate(unref(tran)("CASHBACK", unref(store).state.lang))}</p><div class=""><p class="text-sm md:text-xs xl:text-sm pt-1 mb-[-7px]">${ssrInterpolate(unref(tran)("UP TO", unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="text-6xl md:text-5xl xl:text-7xl font-black"> 20% </p></div>`);
      if (unref(store).state.isLogin === true) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "mt-2",
          size: "md",
          color: "primary",
          label: unref(tran)("Deposit", unref(store).state.lang),
          onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wallet/deposit"))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === false) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "mt-2",
          size: "md",
          color: "primary",
          label: unref(tran)("SIGN UP", unref(store).state.lang),
          onClick: ($event) => unref(store).commit("handleOnRegister", true)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-10 md:col-span-6 relative">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-full h-full",
        src: "/imgs/back_bonus_b.png"
      }, null, _parent));
      _push(`<div class="absolute top-4 z-10 left-1/4 sm:ml-7 md:ml-3 xl:ml-0 text-center"><p class="font-bold text-md sm:text-xl text-shadow-lg">${ssrInterpolate(unref(tran)("WELCOME BONUS", unref(store).state.lang))}</p><div class="flex felx-row">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "euro",
        class: "text-[38px] xl:text-[72px] text-bold",
        style: { "color": "#fff004" }
      }, null, _parent));
      _push(`<span class="font-black font-bold text-4xl xl:text-7xl" style="${ssrRenderStyle({ "color": "#fff004" })}">1800</span></div><div class="flex justify-start xl:justify-center items-center"><div><p style="${ssrRenderStyle({ "color": "#fff004" })}" class="text-xl xl:text-3xl font-extrabold"> 200% </p><p class="text-xs xl:text-md xl:font-bold">${ssrInterpolate(unref(tran)("BONUS", unref(store).state.lang))}</p></div><div class="ml-3"><p style="${ssrRenderStyle({ "color": "#fff004" })}" class="text-xl xl:text-3xl font-extrabold"> +100 </p><p class="text-xs xl:text-md xl:font-bold">${ssrInterpolate(unref(tran)("FREE SPINS", unref(store).state.lang))}</p></div></div>`);
      if (unref(store).state.isLogin === true) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "mt-2",
          size: "md",
          color: "primary",
          label: unref(tran)("Deposit", unref(store).state.lang),
          onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wallet/deposit"))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(store).state.isLogin === false) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "mt-2",
          size: "md",
          color: "primary",
          label: unref(tran)("SIGN UP", unref(store).state.lang),
          onClick: ($event) => unref(store).commit("handleOnRegister", true)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/Conclusion.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const imgurl = "/imgs/noGameImg.png";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameListCasinoPage",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const play = (demo, slug) => {
      store.commit("handleGamePlayMode", demo);
      router.push(linkTo(`/play/${slug}`));
    };
    const onFavorite = (id, slug) => {
      var _a;
      if (store.state.favoriteGameSlugList.includes(slug))
        removeFavoriteGameById(store, id, slug, (_a = route.query) == null ? void 0 : _a.tab);
      else
        addFavoriteGameById(store, id, slug);
    };
    let focusgame = ref("");
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
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_icon = __nuxt_component_3;
      const _component_q_linear_progress = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-5 px-2" }, _attrs))}><div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-1"><!--[-->`);
      ssrRenderList(unref(store).state.gameListByType, (gameItem) => {
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
      ssrRenderList(unref(store).state.gameListByType, (gameItem) => {
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
      _push(`<!--]--></div><div class="flex flex-col justify-center items-center py-2">`);
      _push(ssrRenderComponent(_component_q_linear_progress, {
        class: "w-52",
        rounded: "",
        stripe: "",
        size: "7px",
        value: unref(store).state.gameAmountByType > 0 ? unref(store).state.currentLoaded > unref(store).state.gameAmountByType ? 100 : Number(unref(store).state.currentLoaded / unref(store).state.gameAmountByType) : 0
      }, null, _parent));
      _push(`<p class="text-center text-md py-2">Displaying ${ssrInterpolate(unref(store).state.currentLoaded > unref(store).state.gameAmountByType ? unref(store).state.gameAmountByType : unref(store).state.currentLoaded)} of ${ssrInterpolate(unref(store).state.gameAmountByType)}</p>`);
      if (unref(store).state.currentLoaded < unref(store).state.gameAmountByType) {
        _push(ssrRenderComponent(_component_q_btn, {
          class: "w-52",
          "text-color": "white",
          color: "primary",
          onClick: ($event) => unref(store).commit("handlePageNumber", unref(store).state.pageNumber + 1),
          label: unref(tran)("Load More", unref(store).state.lang)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/GameListCasinoPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProviderList",
  __ssrInlineRender: true,
  props: {
    providers: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const providerImage = ref();
    const store = useStore();
    let swiperRef;
    const onSwiper = (swiper) => {
      swiperRef = swiper;
    };
    const onSlideChange = () => {
    };
    const providerSelectd = (provider) => {
      store.commit("handleOnSearchDialog", { a: true, b: provider });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#282b34" })}" class="mx-4 p-4 rounded-lg"><div class="flex items-center justify-between mb-4"><div class="flex items-center"><img class="w-4" src="/imgs/sidebar/provider.png" alt="hot"><p class="font-bold text-lg pl-2">${ssrInterpolate(unref(tran)("Providers", unref(store).state.lang))}</p></div><div>`);
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        ref: "mySwiper",
        "slides-per-view": 2,
        "space-between": 10,
        onSwiper,
        onSlideChange,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        },
        breakpoints: {
          "320": {
            slidesPerView: 3,
            spaceBetween: 5
          },
          "640": {
            slidesPerView: 4,
            spaceBetween: 5
          },
          "768": {
            slidesPerView: 5,
            spaceBetween: 10
          },
          "1024": {
            slidesPerView: 5,
            spaceBetween: 10
          },
          "1444": {
            slidesPerView: 6,
            spaceBetween: 10
          }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.providers, (provider, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${ssrRenderStyle({ "background": "#4d5160" })}" class="h-10 md:h-12 lg:h-14 xl:h-16 w-full flex justify-center text-center rounded-2xl p-2"${_scopeId2}><img class="h-full object-fill object-center"${ssrRenderAttr("alt", provider == null ? void 0 : provider.name)}${ssrRenderAttr("src", provider == null ? void 0 : provider.logo)}${_scopeId2}></div>`);
                  } else {
                    return [
                      createVNode("div", {
                        style: { "background": "#4d5160" },
                        class: "h-10 md:h-12 lg:h-14 xl:h-16 w-full flex justify-center text-center rounded-2xl p-2",
                        onClick: ($event) => providerSelectd(provider == null ? void 0 : provider.name)
                      }, [
                        createVNode("img", {
                          class: "h-full object-fill object-center",
                          alt: provider == null ? void 0 : provider.name,
                          src: provider == null ? void 0 : provider.logo,
                          ref_for: true,
                          ref_key: "providerImage",
                          ref: providerImage
                        }, null, 8, ["alt", "src"])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.providers, (provider, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createVNode("div", {
                      style: { "background": "#4d5160" },
                      class: "h-10 md:h-12 lg:h-14 xl:h-16 w-full flex justify-center text-center rounded-2xl p-2",
                      onClick: ($event) => providerSelectd(provider == null ? void 0 : provider.name)
                    }, [
                      createVNode("img", {
                        class: "h-full object-fill object-center",
                        alt: provider == null ? void 0 : provider.name,
                        src: provider == null ? void 0 : provider.logo,
                        ref_for: true,
                        ref_key: "providerImage",
                        ref: providerImage
                      }, null, 8, ["alt", "src"])
                    ], 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/ProviderList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a, _sfc_main$2 as b, _sfc_main$3 as c };
//# sourceMappingURL=ProviderList-2cc111e0.mjs.map
