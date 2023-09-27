import { u as useAlignProps, b as useAlign, a as __nuxt_component_3, _ as __nuxt_component_0$1 } from './QBtn-973e1c12.mjs';
import { _ as __nuxt_component_3$1 } from './QToggle-fde872e5.mjs';
import { _ as __nuxt_component_0 } from './use-checkbox-4a396aff.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './QCardSection-838ce6ec.mjs';
import { defineComponent, ref, onUnmounted, watch, unref, isRef, withCtx, createVNode, toDisplayString, mergeProps, withDirectives, useSSRContext, computed, h } from 'vue';
import { c as createComponent, t as tran, h as hSlot } from './translation-9652486b.mjs';
import { _ as __q_directive_0 } from './ClosePopup-38e6363a.mjs';
import { ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps } from 'vue/server-renderer';
import { j as gamePlay } from './game-690251d6.mjs';
import { u as useStore } from '../server.mjs';
import { useRouter, useRoute } from 'vue-router';
import './QSpinner-efb87a9c.mjs';
import './use-form-f3deae03.mjs';
import './Axios-0124dde3.mjs';
import 'axios';
import 'js-cookie';
import './translation-b8ce396e.mjs';
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

const __nuxt_component_5 = createComponent({
  name: "QCardActions",
  props: {
    ...useAlignProps,
    vertical: Boolean
  },
  setup(props, { slots }) {
    const alignClass = useAlign(props);
    const classes = computed(
      () => `q-card__actions ${alignClass.value} q-card__actions--${props.vertical === true ? "vert column" : "horiz row"}`
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const route = useRoute();
    const slug = route.params.slug.toString();
    const store = useStore();
    let modal = ref(false);
    onUnmounted(() => {
      store.commit("handleGamePlayMode", 2);
    });
    let playtoggle = ref(Boolean(store.state.gamePlayMode));
    watch(() => store.state.gamePlayMode, () => {
      playtoggle.value = Boolean(store.state.gamePlayMode);
      gamePlay(store.state.gamePlayMode, slug, store, router);
    });
    const isValidUrl = (urlString) => {
      var urlPattern = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
      return !!urlPattern.test(urlString);
    };
    let fullScreenState = ref(false);
    watch(() => playtoggle.value, () => {
      store.commit("handleGamePlayMode", Number(playtoggle.value));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_icon = __nuxt_component_3;
      const _component_q_toggle = __nuxt_component_3$1;
      const _component_q_dialog = __nuxt_component_0;
      const _component_q_card = __nuxt_component_1;
      const _component_q_card_section = __nuxt_component_2;
      const _component_q_card_actions = __nuxt_component_5;
      const _component_q_btn = __nuxt_component_0$1;
      const _directive_close_popup = __q_directive_0;
      _push(`<!--[--><div class="${ssrRenderClass([!unref(fullScreenState) && "xl:relative xl:w-11/12 xl:pt-2 xl:pb-32 mx-auto xl:z-[1000]", "absolute top-0 left-0 w-screen h-screen z-[2000]"])}"><div class="${ssrRenderClass(unref(fullScreenState) ? "hidden xl:!block absolute top-4 right-4 z-[2001]" : "hidden")}"><div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "close",
        color: "red",
        size: "sm"
      }, null, _parent));
      _push(`</div></div><div class="block absolute top-4 right-4 z-[2001] xl:!hidden"><div class="bg-gray-700 p-3 ml-1 rounded-full hover:cursor-pointer hover:bg-gray-800">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "close",
        color: "red",
        size: "sm"
      }, null, _parent));
      _push(`</div></div><div class="${ssrRenderClass([!unref(fullScreenState) && "xl:!block", "hidden"])}"><div class="flex flex-row justify-between pt-2"><div class="flex flex-row items-center"><p class="${ssrRenderClass([!unref(playtoggle) && "text-white", "text-sm font-semibold text-gray-500"])}">${ssrInterpolate(unref(tran)("Real Play", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_toggle, {
        modelValue: unref(playtoggle),
        "onUpdate:modelValue": ($event) => isRef(playtoggle) ? playtoggle.value = $event : playtoggle = $event
      }, null, _parent));
      _push(`<p class="${ssrRenderClass([!!unref(playtoggle) && "text-white", "text-sm font-semibold text-gray-500"])}">${ssrInterpolate(unref(tran)("Fun Play", unref(store).state.lang))}</p></div><div class="flex flex-row">`);
      if (!!unref(store).state.favoriteGameSlugList.includes(unref(slug))) {
        _push(`<div class="bg-gray-700 p-2 mr-1 rounded-xl hover:cursor-pointer hover:bg-gray-800">`);
        _push(ssrRenderComponent(_component_q_icon, {
          name: "favorite",
          size: "sm"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(store).state.favoriteGameSlugList.includes(unref(slug))) {
        _push(`<div class="bg-gray-700 p-2 mr-1 rounded-xl hover:cursor-pointer hover:bg-gray-800">`);
        _push(ssrRenderComponent(_component_q_icon, {
          name: "favorite_border",
          size: "sm"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-gray-700 p-2 mx-2 rounded-xl hover:cursor-pointer hover:bg-gray-800">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "fullscreen",
        size: "sm"
      }, null, _parent));
      _push(`</div><div class="bg-gray-700 p-2 rounded-xl hover:cursor-pointer hover:bg-gray-800">`);
      _push(ssrRenderComponent(_component_q_icon, {
        name: "close",
        size: "sm"
      }, null, _parent));
      _push(`</div></div></div></div><div class="${ssrRenderClass([!unref(fullScreenState) && "xl:my-2 xl:border-gray-400 xl:border-2 xl:border-solid xl:rounded-2xl", "relative w-full h-full bg-gray-700"])}">`);
      if (isValidUrl(unref(store).state.gameData)) {
        _push(`<iframe class="${ssrRenderClass([!unref(fullScreenState) && "xl:rounded-2xl", "w-full h-full text-white"])}"${ssrRenderAttr("src", unref(store).state.gameData)} frameborder="0" allowfullscreen></iframe>`);
      } else {
        _push(`<!---->`);
      }
      if (!isValidUrl(unref(store).state.gameData)) {
        _push(`<iframe class="${ssrRenderClass([!unref(fullScreenState) && "xl:rounded-2xl", "w-full h-full text-white"])}"${ssrRenderAttr("srcdoc", unref(store).state.gameData)} frameborder="0" allowfullscreen></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_q_dialog, {
        modelValue: unref(modal),
        "onUpdate:modelValue": ($event) => isRef(modal) ? modal.value = $event : modal = $event,
        persistent: "",
        "transition-show": "scale",
        "transition-hide": "scale"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_card, {
              class: "bg-gray-700 text-white xl:ml-[270px]",
              style: { "width": "500px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_card_section, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_section, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-center text-3xl pb-5"${_scopeId3}>${ssrInterpolate(unref(tran)("Select Game Play Mode", unref(store).state.lang))}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-center text-3xl pb-5" }, toDisplayString(unref(tran)("Select Game Play Mode", unref(store).state.lang)), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_card_actions, { class: "flex flex-row justify-center content-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_btn, mergeProps({
                          color: "primary",
                          class: "w-1/3",
                          label: unref(tran)("Real", unref(store).state.lang),
                          onClick: ($event) => unref(store).commit("handleGamePlayMode", 0)
                        }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_btn, mergeProps({
                          color: "secondary",
                          class: "w-1/3",
                          label: unref(tran)("Demo", unref(store).state.lang),
                          onClick: ($event) => unref(store).commit("handleGamePlayMode", 1)
                        }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent4, _scopeId3));
                      } else {
                        return [
                          withDirectives(createVNode(_component_q_btn, {
                            color: "primary",
                            class: "w-1/3",
                            label: unref(tran)("Real", unref(store).state.lang),
                            onClick: ($event) => unref(store).commit("handleGamePlayMode", 0)
                          }, null, 8, ["label", "onClick"]), [
                            [_directive_close_popup]
                          ]),
                          withDirectives(createVNode(_component_q_btn, {
                            color: "secondary",
                            class: "w-1/3",
                            label: unref(tran)("Demo", unref(store).state.lang),
                            onClick: ($event) => unref(store).commit("handleGamePlayMode", 1)
                          }, null, 8, ["label", "onClick"]), [
                            [_directive_close_popup]
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_card_section),
                    createVNode(_component_q_card_section, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-center text-3xl pb-5" }, toDisplayString(unref(tran)("Select Game Play Mode", unref(store).state.lang)), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_q_card_actions, { class: "flex flex-row justify-center content-center" }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_q_btn, {
                          color: "primary",
                          class: "w-1/3",
                          label: unref(tran)("Real", unref(store).state.lang),
                          onClick: ($event) => unref(store).commit("handleGamePlayMode", 0)
                        }, null, 8, ["label", "onClick"]), [
                          [_directive_close_popup]
                        ]),
                        withDirectives(createVNode(_component_q_btn, {
                          color: "secondary",
                          class: "w-1/3",
                          label: unref(tran)("Demo", unref(store).state.lang),
                          onClick: ($event) => unref(store).commit("handleGamePlayMode", 1)
                        }, null, 8, ["label", "onClick"]), [
                          [_directive_close_popup]
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_card, {
                class: "bg-gray-700 text-white xl:ml-[270px]",
                style: { "width": "500px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_q_card_section),
                  createVNode(_component_q_card_section, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center text-3xl pb-5" }, toDisplayString(unref(tran)("Select Game Play Mode", unref(store).state.lang)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_q_card_actions, { class: "flex flex-row justify-center content-center" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(_component_q_btn, {
                        color: "primary",
                        class: "w-1/3",
                        label: unref(tran)("Real", unref(store).state.lang),
                        onClick: ($event) => unref(store).commit("handleGamePlayMode", 0)
                      }, null, 8, ["label", "onClick"]), [
                        [_directive_close_popup]
                      ]),
                      withDirectives(createVNode(_component_q_btn, {
                        color: "secondary",
                        class: "w-1/3",
                        label: unref(tran)("Demo", unref(store).state.lang),
                        onClick: ($event) => unref(store).commit("handleGamePlayMode", 1)
                      }, null, 8, ["label", "onClick"]), [
                        [_directive_close_popup]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/play/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-204f8da7.mjs.map
