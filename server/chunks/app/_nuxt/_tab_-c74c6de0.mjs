import { _ as _sfc_main$6, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as _sfc_main$7, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3$1 } from './QTd-dca61d2f.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, watch, mergeProps, isRef, withDirectives, Fragment, renderList, onUnmounted, createTextVNode } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_15 } from './QSelect-2dfaad86.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_3 } from './QBtn-973e1c12.mjs';
import { _ as __nuxt_component_6 } from './QInput-1d875957.mjs';
import { _ as __nuxt_component_12, a as __nuxt_component_13 } from './QDate-da464b8a.mjs';
import { _ as __nuxt_component_0$2 } from './QImg-55911caf.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './QStep-eb0acd59.mjs';
import { _ as __q_directive_0 } from './ClosePopup-38e6363a.mjs';
import { u as useStore } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import { e as getDepositHistory, f as getWithdrawHistory } from './use-panel-7f2518e1.mjs';
import { l as linkToTab, a as linkTo, t as tabToLink } from './link-f9710514.mjs';
import './symbols-ee15851d.mjs';
import './Axios-0124dde3.mjs';
import 'axios';
import 'js-cookie';
import './use-checkbox-4a396aff.mjs';
import './use-form-f3deae03.mjs';
import './QSpinner-efb87a9c.mjs';
import './QLinearProgress-7723eb23.mjs';
import './use-key-composition-a9d6306d.mjs';
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

const currency$1 = "CAD";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Deposit",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    ref([""]);
    const number2 = ref("");
    const options = ["CAD", "USD"];
    const selectedPayment = ref();
    watch(() => store.state.paymentGateway, () => {
      selectedPayment.value = store.state.paymentGateway[1];
    });
    const selectPayment = (payment) => {
      selectedPayment.value = payment;
    };
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_q_select = __nuxt_component_15;
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_input = __nuxt_component_6;
      const _component_q_icon = __nuxt_component_3;
      const _component_q_popup_proxy = __nuxt_component_12;
      const _component_q_date = __nuxt_component_13;
      const _component_q_img = __nuxt_component_0$2;
      const _component_q_stepper = __nuxt_component_4;
      const _component_q_step = __nuxt_component_5;
      const _directive_close_popup = __q_directive_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-6 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative"><div class="hidden sm:!grid grid-cols-10 gap-5"><div class="col-span-4"><div class="flex items-center justify-between w-full"><p class="font-bold text-base">${ssrInterpolate(unref(tran)("Balance", unref(store).state.lang))}</p><div class="flex items-center justify-around"><span class="font-bold text-base pr-2">0.00</span>`);
      _push(ssrRenderComponent(_component_q_select, {
        style: { "color": "rgba(255, 255, 255, 0.35)" },
        class: "text-xs",
        modelValue: currency$1,
        "onUpdate:modelValue": ($event) => currency$1 = $event,
        options,
        borderless: "",
        dense: true
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(unref(store).state.paymentGateway, (payment) => {
        _push(`<div class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col cursor-pointer"><img style="${ssrRenderStyle({ "max-height": "50%" })}"${ssrRenderAttr("src", `/imgs/payment/${payment == null ? void 0 : payment.name}.png`)} spinner-color="primary"><p class="text-xs" style="${ssrRenderStyle({ "color": "#535559" })}">${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))} C$30 </p></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-6"><p class="font-bold text-lg py-2">${ssrInterpolate((_a = unref(selectedPayment)) == null ? void 0 : _a.name.toUpperCase())}</p><p class="font-semibold text-base">${ssrInterpolate(unref(tran)("Deposit Sum", unref(store).state.lang))}</p><div class="grid grid-cols-4 gap-1 mb-3">`);
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: "50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#120f0f 95%" },
        label: "200"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: "50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#120f0f 95%" },
        label: "500"
      }, null, _parent));
      _push(`</div><div class="flex flex-row no-wrap w-full mb-1">`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "w-full",
        filled: "",
        modelValue: unref(number2),
        "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
        type: "number",
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_select, {
        class: "ml-2",
        color: "primary",
        modelValue: currency$1,
        "onUpdate:modelValue": ($event) => currency$1 = $event,
        options,
        borderless: "",
        dense: true
      }, null, _parent));
      _push(`</div><!--[-->`);
      ssrRenderList((_b = unref(selectedPayment)) == null ? void 0 : _b.field, (itemField) => {
        _push(`<div class="mb-1">`);
        _push(ssrRenderComponent(_component_q_input, {
          class: "w-full",
          filled: "",
          placeholder: itemField == null ? void 0 : itemField.placeholder,
          type: (itemField == null ? void 0 : itemField.type) == "date" ? "text" : itemField == null ? void 0 : itemField.type,
          modelValue: unref(number2),
          "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
          dense: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if ((itemField == null ? void 0 : itemField.type) == "date") {
                _push2(ssrRenderComponent(_component_q_icon, {
                  name: "event",
                  class: "cursor-pointer mt-2",
                  color: "white",
                  size: "sm"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_q_popup_proxy, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_q_date, {
                              modelValue: unref(number2),
                              "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                              mask: "MM/YYYY",
                              minimal: ""
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="row items-center justify-end"${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_q_btn, mergeProps({
                                    label: unref(tran)("Close", unref(store).state.lang),
                                    color: "white",
                                    flat: ""
                                  }, ssrGetDirectiveProps(_ctx, _directive_close_popup)), null, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "row items-center justify-end" }, [
                                      withDirectives(createVNode(_component_q_btn, {
                                        label: unref(tran)("Close", unref(store).state.lang),
                                        color: "white",
                                        flat: ""
                                      }, null, 8, ["label"]), [
                                        [_directive_close_popup]
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_q_date, {
                                modelValue: unref(number2),
                                "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                                mask: "MM/YYYY",
                                minimal: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "row items-center justify-end" }, [
                                    withDirectives(createVNode(_component_q_btn, {
                                      label: unref(tran)("Close", unref(store).state.lang),
                                      color: "white",
                                      flat: ""
                                    }, null, 8, ["label"]), [
                                      [_directive_close_popup]
                                    ])
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_q_popup_proxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_q_date, {
                              modelValue: unref(number2),
                              "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                              mask: "MM/YYYY",
                              minimal: ""
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "row items-center justify-end" }, [
                                  withDirectives(createVNode(_component_q_btn, {
                                    label: unref(tran)("Close", unref(store).state.lang),
                                    color: "white",
                                    flat: ""
                                  }, null, 8, ["label"]), [
                                    [_directive_close_popup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                (itemField == null ? void 0 : itemField.type) == "date" ? (openBlock(), createBlock(_component_q_icon, {
                  key: 0,
                  name: "event",
                  class: "cursor-pointer mt-2",
                  color: "white",
                  size: "sm"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_q_popup_proxy, {
                      cover: "",
                      "transition-show": "scale",
                      "transition-hide": "scale"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_q_date, {
                          modelValue: unref(number2),
                          "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                          mask: "MM/YYYY",
                          minimal: ""
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "row items-center justify-end" }, [
                              withDirectives(createVNode(_component_q_btn, {
                                label: unref(tran)("Close", unref(store).state.lang),
                                color: "white",
                                flat: ""
                              }, null, 8, ["label"]), [
                                [_directive_close_popup]
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><div class="flex items-center justify-between pt-4"><p class="text-base font-bold">${ssrInterpolate(unref(tran)("Do you have a bonus code?", unref(store).state.lang))}</p></div><div class="w-full flex flex-row no-wrap items-center justify-start">`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "w-36 mr-2 w-full",
        filled: "",
        modelValue: unref(number2),
        "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
        type: "number",
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        class: "w-36 h-10",
        color: "primary",
        label: unref(tran)("Add", unref(store).state.lang)
      }, null, _parent));
      _push(`</div><p style="${ssrRenderStyle({ "color": "#d0d0d8" })}" class="text-xs py-4">${ssrInterpolate(unref(tran)("No Bonuses Available", unref(store).state.lang))}</p></div></div><div class="sm:hidden"><div style="${ssrRenderStyle({ "color": "rgba(152, 154, 159, 0.5)" })}" class="flex items-center justify-between pb-3"><span class="${ssrRenderClass(["font-medium text-base cursor-pointer", unref(step) > 1 ? "text-green-700" : ""])}">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-6 mr-1",
        src: "/imgs/method.svg"
      }, null, _parent));
      _push(`${ssrInterpolate(unref(tran)("Method", unref(store).state.lang))}</span><span class="${ssrRenderClass(["font-medium text-base cursor-pointer", unref(step) > 2 ? "text-green-700" : ""])}">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-6 mr-1",
        src: "/imgs/data.svg"
      }, null, _parent));
      _push(`${ssrInterpolate(unref(tran)("Data", unref(store).state.lang))}</span><span class="font-medium text-base cursor-pointer">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-6 mr-1",
        src: "/imgs/submit.svg"
      }, null, _parent));
      _push(`${ssrInterpolate(unref(tran)("Submit", unref(store).state.lang))}</span></div>`);
      _push(ssrRenderComponent(_component_q_stepper, {
        modelValue: unref(step),
        "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : null,
        ref: "stepper",
        color: "primary",
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_step, {
              name: 1,
              title: "STEP 1",
              done: unref(step) > 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between w-full"${_scopeId2}><p class="font-bold text-base"${_scopeId2}>${ssrInterpolate(unref(tran)("Balance", unref(store).state.lang))}</p><div class="flex items-center justify-around"${_scopeId2}><span class="font-bold text-base pr-2"${_scopeId2}>0.00</span>`);
                  _push3(ssrRenderComponent(_component_q_select, {
                    style: { "color": "rgba(255, 255, 255, 0.35)" },
                    class: "text-xs",
                    modelValue: currency$1,
                    "onUpdate:modelValue": ($event) => currency$1 = $event,
                    options,
                    borderless: "",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(store).state.paymentGateway, (payment) => {
                    _push3(`<div class="${ssrRenderClass([unref(selectedPayment) == payment ? "bg-blue-200 bg-opacity-30" : "bg-white", "cursor-pointer rounded-md w-full h-10 text-center flex items-center justify-center flex-col"])}"${_scopeId2}><img style="${ssrRenderStyle({ "max-height": "50%" })}"${ssrRenderAttr("src", `/imgs/payment/${payment == null ? void 0 : payment.name}.png`)} spinner-color="primary"${_scopeId2}><p class="text-xs" style="${ssrRenderStyle(unref(selectedPayment) == payment ? "color: #ffffff" : "color: #535559")}"${_scopeId2}>${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))} $30 </p></div>`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    style: { "background": "#11a449" },
                    class: "w-full mt-2",
                    label: unref(tran)("Deposit", unref(store).state.lang),
                    onClick: () => {
                      step.value = 2;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between w-full" }, [
                      createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Balance", unref(store).state.lang)), 1),
                      createVNode("div", { class: "flex items-center justify-around" }, [
                        createVNode("span", { class: "font-bold text-base pr-2" }, "0.00"),
                        createVNode(_component_q_select, {
                          style: { "color": "rgba(255, 255, 255, 0.35)" },
                          class: "text-xs",
                          modelValue: currency$1,
                          "onUpdate:modelValue": ($event) => currency$1 = $event,
                          options,
                          borderless: "",
                          dense: true
                        })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(store).state.paymentGateway, (payment) => {
                        return openBlock(), createBlock("div", {
                          onClick: ($event) => selectPayment(payment),
                          class: [unref(selectedPayment) == payment ? "bg-blue-200 bg-opacity-30" : "bg-white", "cursor-pointer rounded-md w-full h-10 text-center flex items-center justify-center flex-col"]
                        }, [
                          createVNode("img", {
                            style: { "max-height": "50%" },
                            src: `/imgs/payment/${payment == null ? void 0 : payment.name}.png`,
                            "spinner-color": "primary"
                          }, null, 8, ["src"]),
                          createVNode("p", {
                            class: "text-xs",
                            style: unref(selectedPayment) == payment ? "color: #ffffff" : "color: #535559"
                          }, toDisplayString(unref(tran)("Min", unref(store).state.lang)) + " $30 ", 5)
                        ], 10, ["onClick"]);
                      }), 256)),
                      createVNode(_component_q_btn, {
                        style: { "background": "#11a449" },
                        class: "w-full mt-2",
                        label: unref(tran)("Deposit", unref(store).state.lang),
                        onClick: () => {
                          step.value = 2;
                        }
                      }, null, 8, ["label", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_step, {
              name: 2,
              title: "STEP 2",
              icon: "left",
              done: unref(step) > 2
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d;
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><p class="font-bold text-base py-2"${_scopeId2}>${ssrInterpolate(unref(tran)("Credit Card", unref(store).state.lang))}</p><div class="bg-white rounded-md w-1/2 p-3"${_scopeId2}><img alt="card"${ssrRenderAttr("src", `/imgs/${(_a2 = unref(selectedPayment)) == null ? void 0 : _a2.name}/visa.png`)}${_scopeId2}></div></div><p class="font-bold text-base"${_scopeId2}>${ssrInterpolate(unref(tran)("Deposit Sum", unref(store).state.lang))}</p><div class="grid grid-cols-4 gap-1 pb-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    color: "primary",
                    label: "50"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    style: { "background": "#120f0f 95%" },
                    label: "100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    color: "primary",
                    label: "200"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    style: { "background": "#120f0f 95%" },
                    label: "500"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-row no-wrap w-full mb-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    class: "w-full",
                    filled: "",
                    modelValue: unref(number2),
                    "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                    type: "number",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_select, {
                    class: "ml-2",
                    color: "primary",
                    modelValue: currency$1,
                    "onUpdate:modelValue": ($event) => currency$1 = $event,
                    options,
                    borderless: "",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList((_b2 = unref(selectedPayment)) == null ? void 0 : _b2.field, (itemField) => {
                    _push3(`<div class="mb-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_q_input, {
                      class: "w-full",
                      filled: "",
                      placeholder: itemField == null ? void 0 : itemField.placeholder,
                      type: itemField == null ? void 0 : itemField.type,
                      modelValue: unref(number2),
                      "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                      dense: true
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="grid grid-cols-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    class: "w-full mt-2 mr-1",
                    color: "primary",
                    label: unref(tran)("Back", unref(store).state.lang),
                    onClick: () => {
                      step.value = 1;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    style: { "background": "#11a449" },
                    class: "w-full mt-2 ml-1",
                    label: unref(tran)("Next", unref(store).state.lang),
                    onClick: () => {
                      step.value = 3;
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", { class: "font-bold text-base py-2" }, toDisplayString(unref(tran)("Credit Card", unref(store).state.lang)), 1),
                      createVNode("div", { class: "bg-white rounded-md w-1/2 p-3" }, [
                        createVNode("img", {
                          alt: "card",
                          src: `/imgs/${(_c = unref(selectedPayment)) == null ? void 0 : _c.name}/visa.png`
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Deposit Sum", unref(store).state.lang)), 1),
                    createVNode("div", { class: "grid grid-cols-4 gap-1 pb-2" }, [
                      createVNode(_component_q_btn, {
                        color: "primary",
                        label: "50"
                      }),
                      createVNode(_component_q_btn, {
                        style: { "background": "#120f0f 95%" },
                        label: "100"
                      }),
                      createVNode(_component_q_btn, {
                        color: "primary",
                        label: "200"
                      }),
                      createVNode(_component_q_btn, {
                        style: { "background": "#120f0f 95%" },
                        label: "500"
                      })
                    ]),
                    createVNode("div", { class: "flex flex-row no-wrap w-full mb-1" }, [
                      createVNode(_component_q_input, {
                        class: "w-full",
                        filled: "",
                        modelValue: unref(number2),
                        "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                        type: "number",
                        dense: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_select, {
                        class: "ml-2",
                        color: "primary",
                        modelValue: currency$1,
                        "onUpdate:modelValue": ($event) => currency$1 = $event,
                        options,
                        borderless: "",
                        dense: true
                      })
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList((_d = unref(selectedPayment)) == null ? void 0 : _d.field, (itemField) => {
                      return openBlock(), createBlock("div", { class: "mb-1" }, [
                        createVNode(_component_q_input, {
                          class: "w-full",
                          filled: "",
                          placeholder: itemField == null ? void 0 : itemField.placeholder,
                          type: itemField == null ? void 0 : itemField.type,
                          modelValue: unref(number2),
                          "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                          dense: true
                        }, null, 8, ["placeholder", "type", "modelValue", "onUpdate:modelValue"])
                      ]);
                    }), 256)),
                    createVNode("div", { class: "grid grid-cols-2" }, [
                      createVNode(_component_q_btn, {
                        class: "w-full mt-2 mr-1",
                        color: "primary",
                        label: unref(tran)("Back", unref(store).state.lang),
                        onClick: () => {
                          step.value = 1;
                        }
                      }, null, 8, ["label", "onClick"]),
                      createVNode(_component_q_btn, {
                        style: { "background": "#11a449" },
                        class: "w-full mt-2 ml-1",
                        label: unref(tran)("Next", unref(store).state.lang),
                        onClick: () => {
                          step.value = 3;
                        }
                      }, null, 8, ["label", "onClick"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_step, {
              name: 3,
              title: "STEP 3",
              done: unref(step) > 3
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between py-4"${_scopeId2}><p class="text-base font-bold"${_scopeId2}>${ssrInterpolate(unref(tran)("Do you have a bonus code?", unref(store).state.lang))}</p></div><div class="grid grid-cols-2 gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    class: "w-full",
                    filled: "",
                    modelValue: unref(number2),
                    "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                    type: "number",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    class: "w-full",
                    color: "primary",
                    label: unref(tran)("Add", unref(store).state.lang)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><p style="${ssrRenderStyle({ "color": "#d0d0d8" })}" class="text-xxs py-4"${_scopeId2}>${ssrInterpolate(unref(tran)("No Bonuses Available", unref(store).state.lang))}</p>`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    class: "w-full",
                    color: "primary",
                    label: unref(tran)("Deposit", unref(store).state.lang)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between py-4" }, [
                      createVNode("p", { class: "text-base font-bold" }, toDisplayString(unref(tran)("Do you have a bonus code?", unref(store).state.lang)), 1)
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                      createVNode(_component_q_input, {
                        class: "w-full",
                        filled: "",
                        modelValue: unref(number2),
                        "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                        type: "number",
                        dense: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_btn, {
                        class: "w-full",
                        color: "primary",
                        label: unref(tran)("Add", unref(store).state.lang)
                      }, null, 8, ["label"])
                    ]),
                    createVNode("p", {
                      style: { "color": "#d0d0d8" },
                      class: "text-xxs py-4"
                    }, toDisplayString(unref(tran)("No Bonuses Available", unref(store).state.lang)), 1),
                    createVNode(_component_q_btn, {
                      class: "w-full",
                      color: "primary",
                      label: unref(tran)("Deposit", unref(store).state.lang)
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_step, {
                name: 1,
                title: "STEP 1",
                done: unref(step) > 1
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between w-full" }, [
                    createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Balance", unref(store).state.lang)), 1),
                    createVNode("div", { class: "flex items-center justify-around" }, [
                      createVNode("span", { class: "font-bold text-base pr-2" }, "0.00"),
                      createVNode(_component_q_select, {
                        style: { "color": "rgba(255, 255, 255, 0.35)" },
                        class: "text-xs",
                        modelValue: currency$1,
                        "onUpdate:modelValue": ($event) => currency$1 = $event,
                        options,
                        borderless: "",
                        dense: true
                      })
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(store).state.paymentGateway, (payment) => {
                      return openBlock(), createBlock("div", {
                        onClick: ($event) => selectPayment(payment),
                        class: [unref(selectedPayment) == payment ? "bg-blue-200 bg-opacity-30" : "bg-white", "cursor-pointer rounded-md w-full h-10 text-center flex items-center justify-center flex-col"]
                      }, [
                        createVNode("img", {
                          style: { "max-height": "50%" },
                          src: `/imgs/payment/${payment == null ? void 0 : payment.name}.png`,
                          "spinner-color": "primary"
                        }, null, 8, ["src"]),
                        createVNode("p", {
                          class: "text-xs",
                          style: unref(selectedPayment) == payment ? "color: #ffffff" : "color: #535559"
                        }, toDisplayString(unref(tran)("Min", unref(store).state.lang)) + " $30 ", 5)
                      ], 10, ["onClick"]);
                    }), 256)),
                    createVNode(_component_q_btn, {
                      style: { "background": "#11a449" },
                      class: "w-full mt-2",
                      label: unref(tran)("Deposit", unref(store).state.lang),
                      onClick: () => {
                        step.value = 2;
                      }
                    }, null, 8, ["label", "onClick"])
                  ])
                ]),
                _: 1
              }, 8, ["done"]),
              createVNode(_component_q_step, {
                name: 2,
                title: "STEP 2",
                icon: "left",
                done: unref(step) > 2
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", { class: "font-bold text-base py-2" }, toDisplayString(unref(tran)("Credit Card", unref(store).state.lang)), 1),
                      createVNode("div", { class: "bg-white rounded-md w-1/2 p-3" }, [
                        createVNode("img", {
                          alt: "card",
                          src: `/imgs/${(_a2 = unref(selectedPayment)) == null ? void 0 : _a2.name}/visa.png`
                        }, null, 8, ["src"])
                      ])
                    ]),
                    createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Deposit Sum", unref(store).state.lang)), 1),
                    createVNode("div", { class: "grid grid-cols-4 gap-1 pb-2" }, [
                      createVNode(_component_q_btn, {
                        color: "primary",
                        label: "50"
                      }),
                      createVNode(_component_q_btn, {
                        style: { "background": "#120f0f 95%" },
                        label: "100"
                      }),
                      createVNode(_component_q_btn, {
                        color: "primary",
                        label: "200"
                      }),
                      createVNode(_component_q_btn, {
                        style: { "background": "#120f0f 95%" },
                        label: "500"
                      })
                    ]),
                    createVNode("div", { class: "flex flex-row no-wrap w-full mb-1" }, [
                      createVNode(_component_q_input, {
                        class: "w-full",
                        filled: "",
                        modelValue: unref(number2),
                        "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                        type: "number",
                        dense: true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_q_select, {
                        class: "ml-2",
                        color: "primary",
                        modelValue: currency$1,
                        "onUpdate:modelValue": ($event) => currency$1 = $event,
                        options,
                        borderless: "",
                        dense: true
                      })
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(selectedPayment)) == null ? void 0 : _b2.field, (itemField) => {
                      return openBlock(), createBlock("div", { class: "mb-1" }, [
                        createVNode(_component_q_input, {
                          class: "w-full",
                          filled: "",
                          placeholder: itemField == null ? void 0 : itemField.placeholder,
                          type: itemField == null ? void 0 : itemField.type,
                          modelValue: unref(number2),
                          "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                          dense: true
                        }, null, 8, ["placeholder", "type", "modelValue", "onUpdate:modelValue"])
                      ]);
                    }), 256)),
                    createVNode("div", { class: "grid grid-cols-2" }, [
                      createVNode(_component_q_btn, {
                        class: "w-full mt-2 mr-1",
                        color: "primary",
                        label: unref(tran)("Back", unref(store).state.lang),
                        onClick: () => {
                          step.value = 1;
                        }
                      }, null, 8, ["label", "onClick"]),
                      createVNode(_component_q_btn, {
                        style: { "background": "#11a449" },
                        class: "w-full mt-2 ml-1",
                        label: unref(tran)("Next", unref(store).state.lang),
                        onClick: () => {
                          step.value = 3;
                        }
                      }, null, 8, ["label", "onClick"])
                    ])
                  ];
                }),
                _: 1
              }, 8, ["done"]),
              createVNode(_component_q_step, {
                name: 3,
                title: "STEP 3",
                done: unref(step) > 3
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between py-4" }, [
                    createVNode("p", { class: "text-base font-bold" }, toDisplayString(unref(tran)("Do you have a bonus code?", unref(store).state.lang)), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                    createVNode(_component_q_input, {
                      class: "w-full",
                      filled: "",
                      modelValue: unref(number2),
                      "onUpdate:modelValue": ($event) => isRef(number2) ? number2.value = $event : null,
                      type: "number",
                      dense: true
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_q_btn, {
                      class: "w-full",
                      color: "primary",
                      label: unref(tran)("Add", unref(store).state.lang)
                    }, null, 8, ["label"])
                  ]),
                  createVNode("p", {
                    style: { "color": "#d0d0d8" },
                    class: "text-xxs py-4"
                  }, toDisplayString(unref(tran)("No Bonuses Available", unref(store).state.lang)), 1),
                  createVNode(_component_q_btn, {
                    class: "w-full",
                    color: "primary",
                    label: unref(tran)("Deposit", unref(store).state.lang)
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["done"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet/Deposit.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DepositHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const store = useStore();
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 5
    });
    onUnmounted(() => {
      store.commit("handleGetHistory", []);
      store.commit("handleGetHistoryAccount", 0);
      store.commit("handlePageNumber", 1);
    });
    const prevPage = (prev) => {
      pagination.value.page -= 1;
    };
    const nextPage = (next) => {
      if (store.state.historyAmount > pagination.value.page * pagination.value.rowsPerPage) {
        if (store.state.history.length < (pagination.value.page + 1) * pagination.value.rowsPerPage) {
          let cnt = Math.ceil(((pagination.value.page + 1) * pagination.value.rowsPerPage - store.state.history.length) / 10);
          for (var i = 0; i < cnt; i++) {
            getDepositHistory(store.state.pageNumber + 1, store, router);
            store.commit("handlePageNumber", store.state.pageNumber + 1);
          }
        }
        pagination.value.page += 1;
      }
    };
    let rows = ref(store.state.history);
    watch(() => store.state.history, () => {
      rows.value = store.state.history;
    });
    const cols = [
      {
        name: "index",
        align: "left",
        label: tran("No", store.state.lang),
        field: "id"
      },
      {
        name: "amount",
        required: true,
        label: tran("Amount", store.state.lang),
        align: "left",
        field: "amount"
      },
      {
        name: "currency",
        align: "left",
        label: tran("Currency", store.state.lang),
        field: "currency"
      },
      {
        name: "payment_method",
        align: "left",
        label: tran("Payment Method", store.state.lang),
        field: "payment_method"
      },
      {
        name: "transaction_id",
        align: "left",
        label: tran("Transaction Id", store.state.lang),
        field: "transaction_id"
      },
      {
        name: "created_at",
        align: "left",
        label: tran("Created At", store.state.lang),
        field: "created_at"
      },
      {
        name: "status",
        align: "center",
        label: tran("Status", store.state.lang),
        field: "status"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3$1;
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-2 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative">`);
      _push(ssrRenderComponent(_component_q_page, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_table, {
              rows: unref(rows),
              columns: cols
            }, {
              body: withCtx((props, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_tr, { props }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "index",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.rowIndex + 1)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "amount",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.amount)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.amount), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "currency",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.currency)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.currency), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "payment_method",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.payment_method)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.payment_method), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "transaction_id",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.transaction_id)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.transaction_id), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "created_at",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.created_at)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.created_at), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "status",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (props.row.status == "waiting") {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("pending", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == "completed") {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Completed", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.status == "waiting" ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("pending", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.status == "completed" ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Completed", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_td, {
                            key: "index",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "amount",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.amount), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "currency",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.currency), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "payment_method",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.payment_method), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "transaction_id",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.transaction_id), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "created_at",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.created_at), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "status",
                            props
                          }, {
                            default: withCtx(() => [
                              props.row.status == "waiting" ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                class: "w-20",
                                color: "primary",
                                size: "xs",
                                label: unref(tran)("pending", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.status == "completed" ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-20",
                                color: "positive",
                                size: "xs",
                                label: unref(tran)("Completed", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["props"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_tr, { props }, {
                      default: withCtx(() => [
                        createVNode(_component_q_td, {
                          key: "index",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "amount",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.amount), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "currency",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.currency), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "payment_method",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.payment_method), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "transaction_id",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.transaction_id), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "created_at",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.created_at), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "status",
                          props
                        }, {
                          default: withCtx(() => [
                            props.row.status == "waiting" ? (openBlock(), createBlock(_component_q_btn, {
                              key: 0,
                              class: "w-20",
                              color: "primary",
                              size: "xs",
                              label: unref(tran)("pending", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.status == "completed" ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-20",
                              color: "positive",
                              size: "xs",
                              label: unref(tran)("Completed", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ];
                }
              }),
              pagination: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_btn, {
                    icon: "chevron_left",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    disable: scope.isFirstPage,
                    onClick: ($event) => prevPage(scope.prevPage)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    icon: "chevron_right",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    onClick: ($event) => nextPage(scope.nextPage)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_btn, {
                      icon: "chevron_left",
                      color: "grey-8",
                      round: "",
                      dense: "",
                      flat: "",
                      disable: scope.isFirstPage,
                      onClick: ($event) => prevPage(scope.prevPage)
                    }, null, 8, ["disable", "onClick"]),
                    createVNode(_component_q_btn, {
                      icon: "chevron_right",
                      color: "grey-8",
                      round: "",
                      dense: "",
                      flat: "",
                      onClick: ($event) => nextPage(scope.nextPage)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_table, {
                rows: unref(rows),
                columns: cols
              }, {
                body: withCtx((props) => [
                  createVNode(_component_q_tr, { props }, {
                    default: withCtx(() => [
                      createVNode(_component_q_td, {
                        key: "index",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "amount",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.amount), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "currency",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.currency), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "payment_method",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.payment_method), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "transaction_id",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.transaction_id), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "created_at",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.created_at), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "status",
                        props
                      }, {
                        default: withCtx(() => [
                          props.row.status == "waiting" ? (openBlock(), createBlock(_component_q_btn, {
                            key: 0,
                            class: "w-20",
                            color: "primary",
                            size: "xs",
                            label: unref(tran)("pending", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.status == "completed" ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-20",
                            color: "positive",
                            size: "xs",
                            label: unref(tran)("Completed", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                pagination: withCtx((scope) => [
                  createVNode(_component_q_btn, {
                    icon: "chevron_left",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    disable: scope.isFirstPage,
                    onClick: ($event) => prevPage(scope.prevPage)
                  }, null, 8, ["disable", "onClick"]),
                  createVNode(_component_q_btn, {
                    icon: "chevron_right",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    onClick: ($event) => nextPage(scope.nextPage)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["rows"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet/DepositHistory.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "WithdrawHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const store = useStore();
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 5
    });
    onUnmounted(() => {
      store.commit("handleGetHistory", []);
      store.commit("handleGetHistoryAccount", 0);
      store.commit("handlePageNumber", 1);
    });
    const prevPage = (prev) => {
      pagination.value.page -= 1;
    };
    const nextPage = (next) => {
      if (store.state.historyAmount > pagination.value.page * pagination.value.rowsPerPage) {
        if (store.state.history.length < (pagination.value.page + 1) * pagination.value.rowsPerPage) {
          let cnt = Math.ceil(((pagination.value.page + 1) * pagination.value.rowsPerPage - store.state.history.length) / 10);
          for (var i = 0; i < cnt; i++) {
            getWithdrawHistory(store.state.pageNumber + 1, store, router);
            store.commit("handlePageNumber", store.state.pageNumber + 1);
          }
        }
        pagination.value.page += 1;
      }
    };
    let rows = ref(store.state.history);
    watch(() => store.state.history, () => {
      rows.value = store.state.history;
    });
    const cols = [
      {
        name: "index",
        align: "left",
        label: tran("No", store.state.lang),
        field: "id"
      },
      {
        name: "amount",
        required: true,
        label: tran("Amount", store.state.lang),
        align: "left",
        field: "amount"
      },
      {
        name: "currency",
        align: "left",
        label: tran("Currency", store.state.lang),
        field: "currency"
      },
      {
        name: "requested",
        align: "left",
        label: tran("Requested", store.state.lang),
        field: "requested"
      },
      {
        name: "updatedAt",
        align: "left",
        label: tran("Updated At", store.state.lang),
        field: "updatedAt"
      },
      {
        name: "message",
        align: "left",
        label: tran("Message (from Admin)", store.state.lang),
        field: "message"
      },
      {
        name: "method",
        align: "center",
        label: tran("Method", store.state.lang),
        field: "method"
      },
      {
        name: "status",
        align: "center",
        label: tran("Status", store.state.lang),
        field: "status"
      },
      {
        name: "detail",
        align: "center",
        label: tran("Details", store.state.lang),
        field: "detail"
      },
      {
        name: "action",
        align: "center",
        label: tran("Action", store.state.lang),
        field: "action"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3$1;
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-2 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative">`);
      _push(ssrRenderComponent(_component_q_page, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_table, {
              class: "my-sticky-header-table",
              rows: unref(rows),
              columns: cols
            }, {
              body: withCtx((props, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_tr, { props }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "index",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.rowIndex + 1)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "amount",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.amount)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.amount), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "currency",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.currency)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.currency), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "requested",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.requested)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.requested), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "updatedAt",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.updatedAt)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.updatedAt), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "message",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.message)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.message), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          class: "text-center",
                          key: "method",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<img class="w-5 h-5"${ssrRenderAttr("src", `/tmp/${props.row.method}.png`)} spinner-color="primary"${_scopeId4}>`);
                            } else {
                              return [
                                createVNode("img", {
                                  class: "w-5 h-5",
                                  src: `/tmp/${props.row.method}.png`,
                                  "spinner-color": "primary"
                                }, null, 8, ["src"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "status",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (props.row.status == 0) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("pending", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == 1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Completed", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("pending", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Completed", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "detail",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.detail)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.detail), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "action",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(tran)("INSTANT", unref(store).state.lang))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(tran)("INSTANT", unref(store).state.lang)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_q_td, {
                            key: "index",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "amount",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.amount), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "currency",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.currency), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "requested",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.requested), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "updatedAt",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.updatedAt), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "message",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.message), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            class: "text-center",
                            key: "method",
                            props
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "w-5 h-5",
                                src: `/tmp/${props.row.method}.png`,
                                "spinner-color": "primary"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "status",
                            props
                          }, {
                            default: withCtx(() => [
                              props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                class: "w-20",
                                color: "primary",
                                size: "xs",
                                label: unref(tran)("pending", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-20",
                                color: "positive",
                                size: "xs",
                                label: unref(tran)("Completed", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "detail",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.detail), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "action",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(tran)("INSTANT", unref(store).state.lang)), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_tr, { props }, {
                      default: withCtx(() => [
                        createVNode(_component_q_td, {
                          key: "index",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "amount",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.amount), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "currency",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.currency), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "requested",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.requested), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "updatedAt",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.updatedAt), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "message",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.message), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          class: "text-center",
                          key: "method",
                          props
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "w-5 h-5",
                              src: `/tmp/${props.row.method}.png`,
                              "spinner-color": "primary"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "status",
                          props
                        }, {
                          default: withCtx(() => [
                            props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 0,
                              class: "w-20",
                              color: "primary",
                              size: "xs",
                              label: unref(tran)("pending", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-20",
                              color: "positive",
                              size: "xs",
                              label: unref(tran)("Completed", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "detail",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.detail), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "action",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(tran)("INSTANT", unref(store).state.lang)), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ];
                }
              }),
              pagination: withCtx((scope, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_btn, {
                    icon: "chevron_left",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    disable: scope.isFirstPage,
                    onClick: ($event) => prevPage(scope.prevPage)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_btn, {
                    icon: "chevron_right",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    onClick: ($event) => nextPage(scope.nextPage)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_q_btn, {
                      icon: "chevron_left",
                      color: "grey-8",
                      round: "",
                      dense: "",
                      flat: "",
                      disable: scope.isFirstPage,
                      onClick: ($event) => prevPage(scope.prevPage)
                    }, null, 8, ["disable", "onClick"]),
                    createVNode(_component_q_btn, {
                      icon: "chevron_right",
                      color: "grey-8",
                      round: "",
                      dense: "",
                      flat: "",
                      onClick: ($event) => nextPage(scope.nextPage)
                    }, null, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_table, {
                class: "my-sticky-header-table",
                rows: unref(rows),
                columns: cols
              }, {
                body: withCtx((props) => [
                  createVNode(_component_q_tr, { props }, {
                    default: withCtx(() => [
                      createVNode(_component_q_td, {
                        key: "index",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "amount",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.amount), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "currency",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.currency), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "requested",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.requested), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "updatedAt",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.updatedAt), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "message",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.message), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        class: "text-center",
                        key: "method",
                        props
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "w-5 h-5",
                            src: `/tmp/${props.row.method}.png`,
                            "spinner-color": "primary"
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "status",
                        props
                      }, {
                        default: withCtx(() => [
                          props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 0,
                            class: "w-20",
                            color: "primary",
                            size: "xs",
                            label: unref(tran)("pending", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-20",
                            color: "positive",
                            size: "xs",
                            label: unref(tran)("Completed", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "detail",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.detail), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "action",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(tran)("INSTANT", unref(store).state.lang)), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                pagination: withCtx((scope) => [
                  createVNode(_component_q_btn, {
                    icon: "chevron_left",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    disable: scope.isFirstPage,
                    onClick: ($event) => prevPage(scope.prevPage)
                  }, null, 8, ["disable", "onClick"]),
                  createVNode(_component_q_btn, {
                    icon: "chevron_right",
                    color: "grey-8",
                    round: "",
                    dense: "",
                    flat: "",
                    onClick: ($event) => nextPage(scope.nextPage)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["rows"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet/WithdrawHistory.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const number = 0;
const currency = "CAD";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Withdraw",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const step = ref(1);
    ref([""]);
    const options = ["CAD", "USD"];
    const paymentList = [
      {
        icon: "tron",
        balance: ""
      },
      {
        icon: "ethereum",
        balance: ""
      },
      {
        icon: "bitcoin",
        balance: ""
      },
      {
        icon: "ripple",
        balance: ""
      },
      {
        icon: "usdt",
        balance: ""
      },
      {
        icon: "bank",
        balance: ""
      },
      {
        icon: "mifinity",
        balance: ""
      },
      {
        icon: "astropay",
        balance: ""
      },
      {
        icon: "ecopayz",
        balance: ""
      },
      {
        icon: "interac",
        balance: ""
      },
      {
        icon: "binance",
        balance: ""
      },
      {
        icon: "litecoin",
        balance: ""
      },
      {
        icon: "cardano",
        balance: ""
      },
      {
        icon: "bitcoin_cash",
        balance: ""
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_select = __nuxt_component_15;
      const _component_q_input = __nuxt_component_6;
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_img = __nuxt_component_0$2;
      const _component_q_stepper = __nuxt_component_4;
      const _component_q_step = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-6 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative"><div class="hidden sm:!grid grid-cols-10 gap-4"><div class="col-span-4"><div class="flex items-center justify-between w-full"><p class="font-bold text-base">${ssrInterpolate(unref(tran)("Balance", unref(store).state.lang))}</p><div class="flex items-center justify-around"><span class="font-bold text-base pr-2">0.00</span>`);
      _push(ssrRenderComponent(_component_q_select, {
        style: { "color": "rgba(255, 255, 255, 0.35)" },
        class: "text-xs",
        modelValue: currency,
        "onUpdate:modelValue": ($event) => currency = $event,
        options,
        borderless: "",
        dense: true
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-2"><!--[-->`);
      ssrRenderList(paymentList, (payment) => {
        _push(`<div class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col"><img style="${ssrRenderStyle({ "max-height": "50%" })}"${ssrRenderAttr("src", `/imgs/payment/${payment == null ? void 0 : payment.icon}.png`)} spinner-color="primary"><p class="text-xs" style="${ssrRenderStyle({ "color": "#535559" })}">${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))} $30 </p></div>`);
      });
      _push(`<!--]--></div></div><div class="col-span-6"><p class="font-bold text-base py-2">${ssrInterpolate(unref(tran)("Interac R eTransfer", unref(store).state.lang))}</p><div class="pb-4"><div class="py-2"><span class="font-bold text-base">${ssrInterpolate(unref(tran)("Withdrawal Sum", unref(store).state.lang))}</span><span class="px-12"></span><span style="${ssrRenderStyle({ "color": "#949497" })}" class="text-xs py-4">${ssrInterpolate(unref(tran)("Instant", unref(store).state.lang))} ${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))}: 30 ${ssrInterpolate(unref(tran)("Max", unref(store).state.lang))}: 3,000 </span></div>`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "w-full pr-2",
        filled: "",
        modelValue: number,
        "onUpdate:modelValue": ($event) => number = $event,
        type: "number",
        suffix: "CAD",
        dense: true
      }, null, _parent));
      _push(`</div><div class="pb-4"><div class="py-2"><span class="font-bold text-base">${ssrInterpolate(unref(tran)("R Trade-Mark of Interac Corp.", unref(store).state.lang))}</span><span class="px-12"></span><span style="${ssrRenderStyle({ "color": "#949497" })}" class="text-xs py-4">${ssrInterpolate(unref(tran)("User Under License", unref(store).state.lang))}</span></div>`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "w-full pr-2",
        filled: "",
        modelValue: number,
        "onUpdate:modelValue": ($event) => number = $event,
        type: "number",
        suffix: "CAD",
        dense: true
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        class: "px-10 h-10 mt-1",
        color: "primary",
        label: unref(tran)("Withdraw", unref(store).state.lang) + " 30 CAD"
      }, null, _parent));
      _push(`</div></div><div class="sm:hidden"><div style="${ssrRenderStyle({ "color": "rgba(152, 154, 159, 0.5)" })}" class="flex items-center justify-between pb-3"><span class="${ssrRenderClass([
        "font-medium text-base cursor-pointer",
        step.value > 1 ? "text-green-700" : ""
      ])}">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-6",
        src: "/imgs/method.svg"
      }, null, _parent));
      _push(`${ssrInterpolate(unref(tran)("Method", unref(store).state.lang))}</span><span class="${ssrRenderClass([
        "font-medium text-base cursor-pointer",
        step.value > 2 ? "text-green-700" : ""
      ])}">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-6",
        src: "/imgs/submit.svg"
      }, null, _parent));
      _push(`${ssrInterpolate(unref(tran)("Submit", unref(store).state.lang))}</span></div>`);
      _push(ssrRenderComponent(_component_q_stepper, {
        modelValue: step.value,
        "onUpdate:modelValue": ($event) => step.value = $event,
        ref: "stepper",
        color: "primary",
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_step, {
              name: 1,
              title: "STEP 1",
              done: step.value > 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between w-full"${_scopeId2}><p class="font-bold text-base"${_scopeId2}>${ssrInterpolate(unref(tran)("Balance", unref(store).state.lang))}</p><div class="flex items-center justify-around"${_scopeId2}><span class="font-bold text-base pr-2"${_scopeId2}>0.00</span>`);
                  _push3(ssrRenderComponent(_component_q_select, {
                    style: { "color": "rgba(255, 255, 255, 0.35)" },
                    class: "text-xs",
                    modelValue: currency,
                    "onUpdate:modelValue": ($event) => currency = $event,
                    options,
                    borderless: "",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(paymentList, (payment) => {
                    _push3(`<div class="rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col"${_scopeId2}><img style="${ssrRenderStyle({ "max-height": "50%" })}"${ssrRenderAttr("src", `/imgs/payment/${payment == null ? void 0 : payment.icon}.png`)} spinner-color="primary"${_scopeId2}><p class="text-xs" style="${ssrRenderStyle({ "color": "#535559" })}"${_scopeId2}>${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))} $30 </p></div>`);
                  });
                  _push3(`<!--]--></div>`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    style: { "background": "#11a449" },
                    class: "w-full mt-2",
                    label: unref(tran)("Next", unref(store).state.lang),
                    onClick: () => {
                      step.value = 2;
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between w-full" }, [
                      createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Balance", unref(store).state.lang)), 1),
                      createVNode("div", { class: "flex items-center justify-around" }, [
                        createVNode("span", { class: "font-bold text-base pr-2" }, "0.00"),
                        createVNode(_component_q_select, {
                          style: { "color": "rgba(255, 255, 255, 0.35)" },
                          class: "text-xs",
                          modelValue: currency,
                          "onUpdate:modelValue": ($event) => currency = $event,
                          options,
                          borderless: "",
                          dense: true
                        })
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(paymentList, (payment) => {
                        return createVNode("div", { class: "rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col" }, [
                          createVNode("img", {
                            style: { "max-height": "50%" },
                            src: `/imgs/payment/${payment == null ? void 0 : payment.icon}.png`,
                            "spinner-color": "primary"
                          }, null, 8, ["src"]),
                          createVNode("p", {
                            class: "text-xs",
                            style: { "color": "#535559" }
                          }, toDisplayString(unref(tran)("Min", unref(store).state.lang)) + " $30 ", 1)
                        ]);
                      }), 64))
                    ]),
                    createVNode(_component_q_btn, {
                      style: { "background": "#11a449" },
                      class: "w-full mt-2",
                      label: unref(tran)("Next", unref(store).state.lang),
                      onClick: () => {
                        step.value = 2;
                      }
                    }, null, 8, ["label", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_step, {
              name: 2,
              title: "STEP 2",
              icon: "left",
              done: step.value > 2
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="font-bold text-base py-2"${_scopeId2}>${ssrInterpolate(unref(tran)("Interac R eTransfer", unref(store).state.lang))}</p><div class="pb-4"${_scopeId2}><div class="py-2"${_scopeId2}><span class="font-bold text-base"${_scopeId2}>${ssrInterpolate(unref(tran)("Withdrawal Sum", unref(store).state.lang))}</span><span class="px-12"${_scopeId2}></span><span style="${ssrRenderStyle({ "color": "#949497" })}" class="text-xs py-4"${_scopeId2}>${ssrInterpolate(unref(tran)("Instant", unref(store).state.lang))} ${ssrInterpolate(unref(tran)("Min", unref(store).state.lang))}: 30 ${ssrInterpolate(unref(tran)("Max", unref(store).state.lang))}: 3,000 </span></div>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    class: "w-full pr-2",
                    filled: "",
                    modelValue: number,
                    "onUpdate:modelValue": ($event) => number = $event,
                    type: "number",
                    suffix: "CAD",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="pb-4"${_scopeId2}><div class="py-2"${_scopeId2}><span class="font-bold text-base"${_scopeId2}>${ssrInterpolate(unref(tran)("R Trade-Mark of Interac Corp.", unref(store).state.lang))}</span><span class="px-12"${_scopeId2}></span><span style="${ssrRenderStyle({ "color": "#949497" })}" class="text-xs py-4"${_scopeId2}>${ssrInterpolate(unref(tran)("User Under License", unref(store).state.lang))}</span></div>`);
                  _push3(ssrRenderComponent(_component_q_input, {
                    class: "w-full pr-2",
                    filled: "",
                    modelValue: number,
                    "onUpdate:modelValue": ($event) => number = $event,
                    type: "number",
                    suffix: "CAD",
                    dense: true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_q_btn, {
                    class: "px-10 h-10 mt-1",
                    color: "primary",
                    label: unref(tran)("Withdraw", unref(store).state.lang) + " 30 CAD"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("p", { class: "font-bold text-base py-2" }, toDisplayString(unref(tran)("Interac R eTransfer", unref(store).state.lang)), 1),
                    createVNode("div", { class: "pb-4" }, [
                      createVNode("div", { class: "py-2" }, [
                        createVNode("span", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Withdrawal Sum", unref(store).state.lang)), 1),
                        createVNode("span", { class: "px-12" }),
                        createVNode("span", {
                          style: { "color": "#949497" },
                          class: "text-xs py-4"
                        }, toDisplayString(unref(tran)("Instant", unref(store).state.lang)) + " " + toDisplayString(unref(tran)("Min", unref(store).state.lang)) + ": 30 " + toDisplayString(unref(tran)("Max", unref(store).state.lang)) + ": 3,000 ", 1)
                      ]),
                      createVNode(_component_q_input, {
                        class: "w-full pr-2",
                        filled: "",
                        modelValue: number,
                        "onUpdate:modelValue": ($event) => number = $event,
                        type: "number",
                        suffix: "CAD",
                        dense: true
                      })
                    ]),
                    createVNode("div", { class: "pb-4" }, [
                      createVNode("div", { class: "py-2" }, [
                        createVNode("span", { class: "font-bold text-base" }, toDisplayString(unref(tran)("R Trade-Mark of Interac Corp.", unref(store).state.lang)), 1),
                        createVNode("span", { class: "px-12" }),
                        createVNode("span", {
                          style: { "color": "#949497" },
                          class: "text-xs py-4"
                        }, toDisplayString(unref(tran)("User Under License", unref(store).state.lang)), 1)
                      ]),
                      createVNode(_component_q_input, {
                        class: "w-full pr-2",
                        filled: "",
                        modelValue: number,
                        "onUpdate:modelValue": ($event) => number = $event,
                        type: "number",
                        suffix: "CAD",
                        dense: true
                      })
                    ]),
                    createVNode(_component_q_btn, {
                      class: "px-10 h-10 mt-1",
                      color: "primary",
                      label: unref(tran)("Withdraw", unref(store).state.lang) + " 30 CAD"
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_step, {
                name: 1,
                title: "STEP 1",
                done: step.value > 1
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between w-full" }, [
                    createVNode("p", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Balance", unref(store).state.lang)), 1),
                    createVNode("div", { class: "flex items-center justify-around" }, [
                      createVNode("span", { class: "font-bold text-base pr-2" }, "0.00"),
                      createVNode(_component_q_select, {
                        style: { "color": "rgba(255, 255, 255, 0.35)" },
                        class: "text-xs",
                        modelValue: currency,
                        "onUpdate:modelValue": ($event) => currency = $event,
                        options,
                        borderless: "",
                        dense: true
                      })
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                    (openBlock(), createBlock(Fragment, null, renderList(paymentList, (payment) => {
                      return createVNode("div", { class: "rounded-md bg-white w-full h-10 text-center flex items-center justify-center flex-col" }, [
                        createVNode("img", {
                          style: { "max-height": "50%" },
                          src: `/imgs/payment/${payment == null ? void 0 : payment.icon}.png`,
                          "spinner-color": "primary"
                        }, null, 8, ["src"]),
                        createVNode("p", {
                          class: "text-xs",
                          style: { "color": "#535559" }
                        }, toDisplayString(unref(tran)("Min", unref(store).state.lang)) + " $30 ", 1)
                      ]);
                    }), 64))
                  ]),
                  createVNode(_component_q_btn, {
                    style: { "background": "#11a449" },
                    class: "w-full mt-2",
                    label: unref(tran)("Next", unref(store).state.lang),
                    onClick: () => {
                      step.value = 2;
                    }
                  }, null, 8, ["label", "onClick"])
                ]),
                _: 1
              }, 8, ["done"]),
              createVNode(_component_q_step, {
                name: 2,
                title: "STEP 2",
                icon: "left",
                done: step.value > 2
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "font-bold text-base py-2" }, toDisplayString(unref(tran)("Interac R eTransfer", unref(store).state.lang)), 1),
                  createVNode("div", { class: "pb-4" }, [
                    createVNode("div", { class: "py-2" }, [
                      createVNode("span", { class: "font-bold text-base" }, toDisplayString(unref(tran)("Withdrawal Sum", unref(store).state.lang)), 1),
                      createVNode("span", { class: "px-12" }),
                      createVNode("span", {
                        style: { "color": "#949497" },
                        class: "text-xs py-4"
                      }, toDisplayString(unref(tran)("Instant", unref(store).state.lang)) + " " + toDisplayString(unref(tran)("Min", unref(store).state.lang)) + ": 30 " + toDisplayString(unref(tran)("Max", unref(store).state.lang)) + ": 3,000 ", 1)
                    ]),
                    createVNode(_component_q_input, {
                      class: "w-full pr-2",
                      filled: "",
                      modelValue: number,
                      "onUpdate:modelValue": ($event) => number = $event,
                      type: "number",
                      suffix: "CAD",
                      dense: true
                    })
                  ]),
                  createVNode("div", { class: "pb-4" }, [
                    createVNode("div", { class: "py-2" }, [
                      createVNode("span", { class: "font-bold text-base" }, toDisplayString(unref(tran)("R Trade-Mark of Interac Corp.", unref(store).state.lang)), 1),
                      createVNode("span", { class: "px-12" }),
                      createVNode("span", {
                        style: { "color": "#949497" },
                        class: "text-xs py-4"
                      }, toDisplayString(unref(tran)("User Under License", unref(store).state.lang)), 1)
                    ]),
                    createVNode(_component_q_input, {
                      class: "w-full pr-2",
                      filled: "",
                      modelValue: number,
                      "onUpdate:modelValue": ($event) => number = $event,
                      type: "number",
                      suffix: "CAD",
                      dense: true
                    })
                  ]),
                  createVNode(_component_q_btn, {
                    class: "px-10 h-10 mt-1",
                    color: "primary",
                    label: unref(tran)("Withdraw", unref(store).state.lang) + " 30 CAD"
                  }, null, 8, ["label"])
                ]),
                _: 1
              }, 8, ["done"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet/Withdraw.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Balances",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isDrawer = computed(() => {
      return ref(store.state.isDrawer);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-6 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative p-7 text-center">`);
      _push(ssrRenderComponent(_component_q_btn, {
        class: "mt-1 h-24 px-16",
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><img class="w-7 m-auto" src="/imgs/add_currency.png" alt="asdasd"${_scopeId}><p${_scopeId}>${ssrInterpolate(unref(tran)("Add Currency", unref(store).state.lang))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, [
                createVNode("img", {
                  class: "w-7 m-auto",
                  src: "/imgs/add_currency.png",
                  alt: "asdasd"
                }),
                createVNode("p", null, toDisplayString(unref(tran)("Add Currency", unref(store).state.lang)), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([
        "grid grid-cols-1 md:grid-cols-2  gap-6 mt-8",
        unref(isDrawer).value ? "lg:grid-cols-2" : "lg:grid-cols-4"
      ])}"><div style="${ssrRenderStyle({ "background": "#1e1b1b" })}" class="rounded p-4"><p class="text-base font-bold">22.50 CAD</p><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Withdrawable", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Lock by Bonus", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Cash Back", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Total", unref(store).state.lang))}</p><p>0.00</p></div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#11a449" },
        class: "w-full mt-2",
        label: unref(tran)("Deposit", unref(store).state.lang)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        class: "w-full mt-2",
        color: "primary",
        label: unref(tran)("Withdrawl", unref(store).state.lang),
        disable: ""
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "background": "#1e1b1b" })}" class="rounded p-4"><p class="text-base font-bold">22.50 CAD</p><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Withdrawable", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Lock by Bonus", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Cash Back", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Total", unref(store).state.lang))}</p><p>0.00</p></div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#11a449" },
        class: "w-full mt-2",
        label: unref(tran)("Deposit", unref(store).state.lang)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        class: "w-full mt-2",
        color: "primary",
        label: unref(tran)("Withdrawl", unref(store).state.lang),
        disable: ""
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "background": "#1e1b1b" })}" class="rounded p-4"><p class="text-base font-bold">22.50 CAD</p><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Withdrawable", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Lock by Bonus", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Cash Back", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Total", unref(store).state.lang))}</p><p>0.00</p></div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#11a449" },
        class: "w-full mt-2",
        label: unref(tran)("Deposit", unref(store).state.lang)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        class: "w-full mt-2",
        color: "primary",
        label: unref(tran)("Withdrawl", unref(store).state.lang),
        disable: ""
      }, null, _parent));
      _push(`</div><div style="${ssrRenderStyle({ "background": "#1e1b1b" })}" class="rounded p-4"><p class="text-base font-bold">22.50 CAD</p><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Withdrawable", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Lock by Bonus", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Cash Back", unref(store).state.lang))}</p><p>0.00</p></div><div class="flex items-center justify-between text-xs font-medium"><p>${ssrInterpolate(unref(tran)("Total", unref(store).state.lang))}</p><p>0.00</p></div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        style: { "background": "#11a449" },
        class: "w-full mt-2",
        label: unref(tran)("Deposit", unref(store).state.lang)
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        class: "w-full mt-2",
        color: "primary",
        label: unref(tran)("Withdrawl", unref(store).state.lang),
        disable: ""
      }, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/wallet/Balances.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tab]",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const selectedItem = ref(linkToTab(route.params.tab.toString()));
    const categories = computed(() => [
      {
        name: "Balances",
        icon: "balance",
        active: selectedItem.value === "Balances"
      },
      {
        name: "Deposit",
        icon: "deposit",
        active: selectedItem.value === "Deposit"
      },
      {
        name: "Withdraw",
        icon: "deposit",
        active: selectedItem.value === "Withdraw"
      },
      {
        name: "Deposit History",
        icon: "history",
        active: selectedItem.value === "Deposit History"
      },
      {
        name: "Withdraw History",
        icon: "history",
        active: selectedItem.value === "Withdraw History"
      }
    ]);
    function selectCategory(val) {
      selectedItem.value = val;
      router.push(linkTo(`/wallet/${tabToLink(val)}`));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_CategoryBar = _sfc_main$7;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}><div class="wallet_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-center"${_scopeId}><div${_scopeId}><img class="w-40 m-auto" src="/imgs/logo_full.png" alt="logo"${_scopeId}><p style="${ssrRenderStyle({ "color": "#ffff03" })}" class="font-black text-5xl"${_scopeId}>${ssrInterpolate(unref(tran)("Europe #1", unref(store).state.lang))}</p><p${_scopeId}>${ssrInterpolate(unref(tran)("Online casino", unref(store).state.lang))}</p></div></div><div class="w-full py-4 flex items-center justify-center"${_scopeId}><p class="font-bold text-base hidden lg:!block"${_scopeId}>${ssrInterpolate(unref(tran)("WALLET", unref(store).state.lang))}</p><div class="mx-2 hidden lg:!block" style="${ssrRenderStyle({ "width": "1px", "height": "20px", "background": "#383d47" })}"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CategoryBar, {
              selectCategory,
              categories: categories.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(selectedItem) === "Deposit History") {
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Withdraw History") {
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Deposit") {
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Withdraw") {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Balances") {
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", {
                style: { "max-width": "1450px" },
                class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto"
              }, [
                createVNode("section", { class: "main h-full px-4" }, [
                  createVNode("div", { class: "wallet_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-center" }, [
                    createVNode("div", null, [
                      createVNode("img", {
                        class: "w-40 m-auto",
                        src: "/imgs/logo_full.png",
                        alt: "logo"
                      }),
                      createVNode("p", {
                        style: { "color": "#ffff03" },
                        class: "font-black text-5xl"
                      }, toDisplayString(unref(tran)("Europe #1", unref(store).state.lang)), 1),
                      createVNode("p", null, toDisplayString(unref(tran)("Online casino", unref(store).state.lang)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "w-full py-4 flex items-center justify-center" }, [
                    createVNode("p", { class: "font-bold text-base hidden lg:!block" }, toDisplayString(unref(tran)("WALLET", unref(store).state.lang)), 1),
                    createVNode("div", {
                      class: "mx-2 hidden lg:!block",
                      style: { "width": "1px", "height": "20px", "background": "#383d47" }
                    }),
                    createVNode("div", null, [
                      createVNode(_component_CategoryBar, {
                        selectCategory,
                        categories: categories.value
                      }, null, 8, ["categories"])
                    ])
                  ]),
                  unref(selectedItem) === "Deposit History" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Withdraw History" ? (openBlock(), createBlock(_sfc_main$3, { key: 1 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Deposit" ? (openBlock(), createBlock(_sfc_main$5, { key: 2 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Withdraw" ? (openBlock(), createBlock(_sfc_main$2, { key: 3 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Balances" ? (openBlock(), createBlock(_sfc_main$1, { key: 4 })) : createCommentVNode("", true)
                ]),
                createVNode("section", { class: "pt-8" }, [
                  createVNode(_sfc_main$6)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/wallet/[tab].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tab_-c74c6de0.mjs.map
