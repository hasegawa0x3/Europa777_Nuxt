import { _ as _sfc_main$7, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as _sfc_main$8, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3 } from './QTd-dca61d2f.mjs';
import { _ as __nuxt_component_0$1 } from './QBtn-973e1c12.mjs';
import { _ as __nuxt_component_0$2 } from './QImg-55911caf.mjs';
import { useSSRContext, defineComponent, computed, ref, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, onUnmounted, watch, mergeProps } from 'vue';
import { l as linkToTab, a as linkTo, t as tabToLink } from './link-f9710514.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderList } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';
import { useRoute, useRouter } from 'vue-router';
import { t as tran } from './translation-9652486b.mjs';
import { A as AxiosWithAuth } from './Axios-0124dde3.mjs';
import './symbols-ee15851d.mjs';
import './QSelect-2dfaad86.mjs';
import './use-key-composition-a9d6306d.mjs';
import './use-form-f3deae03.mjs';
import './QSpinner-efb87a9c.mjs';
import './use-checkbox-4a396aff.mjs';
import './QLinearProgress-7723eb23.mjs';
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
import 'axios';

const getBonusHistory = (pagenum, store, router) => {
  AxiosWithAuth("get", `/api/player/getBonusHistory?page=${pagenum}`, store, router).then((res) => {
    let result = res.data.bonusHistory.data;
    if (pagenum > 1) {
      result = [...store.state.history, ...result];
    }
    store.commit("handleGetHistoryAccount", res.data.bonusHistory.total);
    store.commit("handleGetHistory", result);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const getFreespinHistory = (pagenum, store, router) => {
  AxiosWithAuth("get", `/api/player/getFreeSpinsHistory?page=${pagenum}`, store, router).then((res) => {
    let result = res.data.freeSpins.data;
    if (pagenum > 1) {
      result = [...store.state.history, ...result];
    }
    store.commit("handleGetHistoryAccount", res.data.freeSpins.total);
    store.commit("handleGetHistory", result);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const getCashbackHistory = (pagenum, store, router) => {
  AxiosWithAuth("get", `/api/player/getCashbackHistory?page=${pagenum}`, store, router).then((res) => {
    let result = res.data.cashbackHistory.data;
    if (pagenum > 1) {
      result = [...store.state.history, ...result];
    }
    store.commit("handleGetHistoryAccount", res.data.cashbackHistory.total);
    store.commit("handleGetHistory", result);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CashBack",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const store = useStore();
    const isDrawer = computed(() => store.state.isDrawer);
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
            getCashbackHistory(store.state.pageNumber + 1, store, router);
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
        label: tran("No", store.state.lang),
        align: "left",
        field: "id"
      },
      {
        name: "totalDeposit",
        required: true,
        label: tran("Total Deposit", store.state.lang),
        align: "left",
        field: "totalDeposit"
      },
      {
        name: "cashBackAmount",
        align: "left",
        label: tran("Cash Back Amount", store.state.lang),
        field: "cashBackAmount"
      },
      {
        name: "wager",
        align: "left",
        label: tran("Wager Required", store.state.lang),
        field: "wager"
      },
      {
        name: "isComplete",
        align: "left",
        label: tran("Completed", store.state.lang),
        field: "isComplete"
      },
      {
        name: "expireOn",
        align: "left",
        label: tran("Expire on", store.state.lang),
        field: "expireOn"
      }
    ];
    [
      {
        name: "cashback",
        label: tran("Cashback", store.state.lang),
        align: "left",
        field: "cashback"
      },
      {
        name: "depositAmount",
        label: tran("Deposit Amount", store.state.lang),
        align: "left",
        field: "depositAmount"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_img = __nuxt_component_0$2;
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-2 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative mt-10"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4"><div class="flex items-center justify-between relative"><div class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="${ssrRenderClass([
        "font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg",
        unref(isDrawer) ? "lg:text-sm" : "lg:text-2xl"
      ])}">${ssrInterpolate(unref(tran)("BONUS WHEEL", unref(store).state.lang))}</p><p class="${ssrRenderClass([
        "text-xs lg:text-xs",
        unref(isDrawer) ? "lg:text-xxs" : "lg:text-xs"
      ])}">${ssrInterpolate(unref(tran)("Get free spin every 2 hours!", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_btn, {
        class: [
          "mt-2 xl:mt-4",
          unref(isDrawer) ? "lg:mt-2" : "lg:mt-4"
        ],
        size: "xs",
        label: unref(tran)("Free Spin", unref(store).state.lang),
        onClick: ($event) => _ctx.$router.push(("linkTo" in _ctx ? _ctx.linkTo : unref(linkTo))("/wheel"))
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_bonus.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 -bottom-3",
        src: "/imgs/wheel.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between relative"><div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="${ssrRenderClass([
        "font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg",
        unref(isDrawer) ? "lg:text-sm" : "lg:text-2xl"
      ])}">${ssrInterpolate(unref(tran)("DAILY CASHBACK", unref(store).state.lang))}</p><div class="flex items-center justify-start"><p class="${ssrRenderClass([
        "text-xs lg:text-xs",
        unref(isDrawer) ? "lg:text-xxs" : "lg:text-xs"
      ])}">${ssrInterpolate(unref(tran)("UP TO", unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
        "text-xl xl:text-5xl font-black pl-1",
        unref(isDrawer) ? "lg:text-xl" : "lg:text-5xl"
      ])}"> 20% </p></div></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_daily.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 -bottom-3",
        src: "/imgs/cash_back.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(`</div></div>`);
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
                          key: "totalDeposit",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.totalDeposit)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.totalDeposit), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "cashBackAmount",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.cashBackAmount)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.cashBackAmount), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "wager",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.wager)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.wager), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "isComplete",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (props.row.isComplete == 0) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("expired", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.isComplete == 1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("completed", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.isComplete == -1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-20",
                                  color: "grey",
                                  size: "xs",
                                  label: unref(tran)("claim", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-20",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("expired", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-20",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("completed", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 2,
                                  class: "w-20",
                                  color: "grey",
                                  size: "xs",
                                  label: unref(tran)("claim", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "expireOn",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.expireOn)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.expireOn), 1)
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
                            key: "totalDeposit",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.totalDeposit), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "cashBackAmount",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.cashBackAmount), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "wager",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.wager), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "isComplete",
                            props
                          }, {
                            default: withCtx(() => [
                              props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                class: "w-20",
                                color: "primary",
                                size: "xs",
                                label: unref(tran)("expired", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-20",
                                color: "positive",
                                size: "xs",
                                label: unref(tran)("completed", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 2,
                                class: "w-20",
                                color: "grey",
                                size: "xs",
                                label: unref(tran)("claim", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "expireOn",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.expireOn), 1)
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
                          key: "totalDeposit",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.totalDeposit), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "cashBackAmount",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.cashBackAmount), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "wager",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.wager), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "isComplete",
                          props
                        }, {
                          default: withCtx(() => [
                            props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 0,
                              class: "w-20",
                              color: "primary",
                              size: "xs",
                              label: unref(tran)("expired", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-20",
                              color: "positive",
                              size: "xs",
                              label: unref(tran)("completed", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 2,
                              class: "w-20",
                              color: "grey",
                              size: "xs",
                              label: unref(tran)("claim", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "expireOn",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.expireOn), 1)
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
                        key: "totalDeposit",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.totalDeposit), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "cashBackAmount",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.cashBackAmount), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "wager",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.wager), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "isComplete",
                        props
                      }, {
                        default: withCtx(() => [
                          props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 0,
                            class: "w-20",
                            color: "primary",
                            size: "xs",
                            label: unref(tran)("expired", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-20",
                            color: "positive",
                            size: "xs",
                            label: unref(tran)("completed", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 2,
                            class: "w-20",
                            color: "grey",
                            size: "xs",
                            label: unref(tran)("claim", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "expireOn",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.expireOn), 1)
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/CashBack.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BonusHistory",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const router = useRouter();
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
            getBonusHistory(store.state.pageNumber + 1, store, router);
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
        name: "title",
        required: true,
        label: tran("Title", store.state.lang),
        align: "left",
        field: "title"
      },
      {
        name: "amount",
        align: "left",
        label: tran("Amount", store.state.lang),
        field: "amount"
      },
      {
        name: "currency",
        align: "left",
        label: tran("Currency", store.state.lang),
        field: "currency"
      },
      {
        name: "wager",
        align: "left",
        label: tran("Wager", store.state.lang),
        field: "wager"
      },
      {
        name: "wagered",
        align: "left",
        label: tran("Wagered", store.state.lang),
        field: "wagered"
      },
      {
        name: "status",
        align: "center",
        label: tran("Status", store.state.lang),
        field: "status"
      },
      {
        name: "created_at",
        align: "left",
        label: tran("Created At", store.state.lang),
        field: "created_at"
      },
      {
        name: "expired_at",
        align: "left",
        label: tran("Expired At", store.state.lang),
        field: "expired_at"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3;
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
                          key: "title",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.title), 1)
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
                          key: "wager",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.wager)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.wager), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "wagered",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.wagered)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.wagered), 1)
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
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: "Cancel"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == 1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: "Yes"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == -1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: "No"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: "Cancel"
                                })) : createCommentVNode("", true),
                                props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: "Yes"
                                })) : createCommentVNode("", true),
                                props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 2,
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: "No"
                                })) : createCommentVNode("", true)
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
                          key: "expired_at",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.expired_at)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                            key: "title",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.title), 1)
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
                            key: "wager",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.wager), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "wagered",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.wagered), 1)
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
                                class: "w-14",
                                color: "primary",
                                size: "xs",
                                label: "Cancel"
                              })) : createCommentVNode("", true),
                              props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-14",
                                color: "positive",
                                size: "xs",
                                label: "Yes"
                              })) : createCommentVNode("", true),
                              props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 2,
                                class: "w-14",
                                color: "grey",
                                size: "xs",
                                label: "No"
                              })) : createCommentVNode("", true)
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
                            key: "expired_at",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                          key: "title",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.title), 1)
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
                          key: "wager",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.wager), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "wagered",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.wagered), 1)
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
                              class: "w-14",
                              color: "primary",
                              size: "xs",
                              label: "Cancel"
                            })) : createCommentVNode("", true),
                            props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-14",
                              color: "positive",
                              size: "xs",
                              label: "Yes"
                            })) : createCommentVNode("", true),
                            props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 2,
                              class: "w-14",
                              color: "grey",
                              size: "xs",
                              label: "No"
                            })) : createCommentVNode("", true)
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
                          key: "expired_at",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                        key: "title",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.title), 1)
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
                        key: "wager",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.wager), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "wagered",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.wagered), 1)
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
                            class: "w-14",
                            color: "primary",
                            size: "xs",
                            label: "Cancel"
                          })) : createCommentVNode("", true),
                          props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-14",
                            color: "positive",
                            size: "xs",
                            label: "Yes"
                          })) : createCommentVNode("", true),
                          props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 2,
                            class: "w-14",
                            color: "grey",
                            size: "xs",
                            label: "No"
                          })) : createCommentVNode("", true)
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
                        key: "expired_at",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.expired_at), 1)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/BonusHistory.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ActiveBonus",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const rows = [];
    const cols = [
      {
        name: "index",
        label: tran("No", store.state.lang),
        align: "left",
        field: "id"
      },
      {
        name: "title",
        required: true,
        label: tran("Title", store.state.lang),
        align: "left",
        field: "title"
      },
      {
        name: "freeSpin",
        align: "left",
        label: tran("Free Spin", store.state.lang),
        field: "freeSpin"
      },
      {
        name: "game",
        align: "left",
        label: tran("Game (Click on Game)", store.state.lang),
        field: "game"
      },
      {
        name: "bonus",
        align: "left",
        label: tran("Bonus", store.state.lang),
        field: "bonus"
      },
      {
        name: "wager",
        align: "left",
        label: tran("Wager Required", store.state.lang),
        field: "wager"
      },
      {
        name: "isComplete",
        align: "center",
        label: tran("Completed", store.state.lang),
        field: "isComplete"
      },
      {
        name: "expireOn",
        align: "left",
        label: tran("Expire on", store.state.lang),
        field: "expireOn"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3;
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-2 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative">`);
      _push(ssrRenderComponent(_component_q_page, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_table, {
              rows,
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
                          key: "title",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "freeSpin",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.freeSpin)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.freeSpin), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "game",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.game)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.game), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "bonus",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.bonus)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.bonus), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "wager",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.wager)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.wager), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "isComplete",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (props.row.isComplete == 0) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: "Cancel"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.isComplete == 1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: "Yes"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.isComplete == -1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: "No"
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: "Cancel"
                                })) : createCommentVNode("", true),
                                props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: "Yes"
                                })) : createCommentVNode("", true),
                                props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 2,
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: "No"
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "expireOn",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.expireOn)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.expireOn), 1)
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
                            key: "title",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "freeSpin",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.freeSpin), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "game",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.game), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "bonus",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.bonus), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "wager",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.wager), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "isComplete",
                            props
                          }, {
                            default: withCtx(() => [
                              props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 0,
                                class: "w-14",
                                color: "primary",
                                size: "xs",
                                label: "Cancel"
                              })) : createCommentVNode("", true),
                              props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-14",
                                color: "positive",
                                size: "xs",
                                label: "Yes"
                              })) : createCommentVNode("", true),
                              props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 2,
                                class: "w-14",
                                color: "grey",
                                size: "xs",
                                label: "No"
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "expireOn",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.expireOn), 1)
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
                          key: "title",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "freeSpin",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.freeSpin), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "game",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.game), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "bonus",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.bonus), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "wager",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.wager), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "isComplete",
                          props
                        }, {
                          default: withCtx(() => [
                            props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 0,
                              class: "w-14",
                              color: "primary",
                              size: "xs",
                              label: "Cancel"
                            })) : createCommentVNode("", true),
                            props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-14",
                              color: "positive",
                              size: "xs",
                              label: "Yes"
                            })) : createCommentVNode("", true),
                            props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 2,
                              class: "w-14",
                              color: "grey",
                              size: "xs",
                              label: "No"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "expireOn",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.expireOn), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"])
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_q_table, {
                rows,
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
                        key: "title",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "freeSpin",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.freeSpin), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "game",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.game), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "bonus",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.bonus), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "wager",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.wager), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "isComplete",
                        props
                      }, {
                        default: withCtx(() => [
                          props.row.isComplete == 0 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 0,
                            class: "w-14",
                            color: "primary",
                            size: "xs",
                            label: "Cancel"
                          })) : createCommentVNode("", true),
                          props.row.isComplete == 1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-14",
                            color: "positive",
                            size: "xs",
                            label: "Yes"
                          })) : createCommentVNode("", true),
                          props.row.isComplete == -1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 2,
                            class: "w-14",
                            color: "grey",
                            size: "xs",
                            label: "No"
                          })) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "expireOn",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.expireOn), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/ActiveBonus.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BonusCard",
  __ssrInlineRender: true,
  props: {
    background: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    slotName: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_img = __nuxt_component_0$2;
      const _component_q_btn = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between" }, _attrs))}><div><div class="flex items-center justify-between relative">`);
      ssrRenderSlot(_ctx.$slots, props == null ? void 0 : props.slotName, {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_q_img, {
        src: `/imgs/bonus/${__props.background}.png`,
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 bottom-0",
        src: `/imgs/${__props.img}.png`,
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(`</div><p class="text-xs p-4">${ssrInterpolate(__props.comment)}</p></div><div class="text-center pb-10">`);
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: unref(tran)("READ MORE", unref(store).state.lang)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/BonusCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AvailableBonus",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const isDrawer = computed(() => {
      return ref(store.state.isDrawer);
    });
    const categories = [
      {
        background: "1",
        img: "pack",
        comment: "The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...",
        slotName: "1"
      },
      {
        background: "2",
        img: "cash_back",
        comment: "Our cashback bonus has a very simple rule: the more you deposit, the more you get back! Enjoy up to 20% cashback that is credited...",
        slotName: "2"
      },
      {
        background: "3",
        img: "promotion",
        comment: "The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...",
        slotName: "3"
      },
      {
        background: "4",
        img: "sportbook",
        comment: "Our cashback bonus has a very simple rule: the more you deposit, the more you get back! Enjoy up to 20% cashback that is credited...",
        slotName: "4"
      },
      {
        background: "5",
        img: "happy",
        comment: "The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...",
        slotName: "5"
      },
      {
        background: "6",
        img: "up",
        comment: "The Player is responsible for checking and understanding bonus terms before engaging in any bonus promotional offers...",
        slotName: "6"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-7 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative mt-10"><div class="grid md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(ssrRenderComponent(_sfc_main$3, mergeProps({
          key: category.slotName
        }, category), {
          "1": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"${_scopeId}><p class="${ssrRenderClass([
                "font-bold text-sm sm:text-xl xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> WELCOME </p><p${_scopeId}><span style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
                "font-black text-sm sm:text-2xl xl:text-3xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
              ])}"${_scopeId}>200%</span>\xA0 <span class="${ssrRenderClass([
                "font-black text-sm sm:text-lg xl:text-xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-xl"
              ])}"${_scopeId}>BONUS</span></p><p${_scopeId}><span style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
                "font-black text-sm sm:text-2xl xl:text-3xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
              ])}"${_scopeId}>+100</span>\xA0 <span class="${ssrRenderClass([
                "font-black text-sm sm:text-lg xl:text-xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-xl"
              ])}"${_scopeId}>FREE SPINS</span></p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg" }, [
                  createVNode("p", {
                    class: [
                      "font-bold text-sm sm:text-xl xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " WELCOME ", 2),
                  createVNode("p", null, [
                    createVNode("span", {
                      style: { "color": "#ffd62f" },
                      class: [
                        "font-black text-sm sm:text-2xl xl:text-3xl",
                        unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
                      ]
                    }, "200%", 2),
                    createTextVNode("\xA0 "),
                    createVNode("span", {
                      class: [
                        "font-black text-sm sm:text-lg xl:text-xl",
                        unref(isDrawer).value ? "lg:text-sm" : "lg:text-xl"
                      ]
                    }, "BONUS", 2)
                  ]),
                  createVNode("p", null, [
                    createVNode("span", {
                      style: { "color": "#ffd62f" },
                      class: [
                        "font-black text-sm sm:text-2xl xl:text-3xl",
                        unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
                      ]
                    }, "+100", 2),
                    createTextVNode("\xA0 "),
                    createVNode("span", {
                      class: [
                        "font-black text-sm sm:text-lg xl:text-xl",
                        unref(isDrawer).value ? "lg:text-sm" : "lg:text-xl"
                      ]
                    }, "FREE SPINS", 2)
                  ])
                ])
              ];
            }
          }),
          "2": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"${_scopeId}><p class="${ssrRenderClass([
                "font-medium text-sm md:text-xl xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> DAILY CASHBACK </p><div class="flex items-center justify-start"${_scopeId}><p class="${ssrRenderClass([
                "font-medium text-sm md:text-xl xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> UP TO </p><p style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
                "text-3xl md:text-4xl xl:text-5xl font-black pl-1",
                unref(isDrawer).value ? "lg:text-xl" : "lg:text-5xl"
              ])}"${_scopeId}> 20% </p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8" }, [
                  createVNode("p", {
                    class: [
                      "font-medium text-sm md:text-xl xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " DAILY CASHBACK ", 2),
                  createVNode("div", { class: "flex items-center justify-start" }, [
                    createVNode("p", {
                      class: [
                        "font-medium text-sm md:text-xl xl:text-2xl",
                        unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                      ]
                    }, " UP TO ", 2),
                    createVNode("p", {
                      style: { "color": "#ffd62f" },
                      class: [
                        "text-3xl md:text-4xl xl:text-5xl font-black pl-1",
                        unref(isDrawer).value ? "lg:text-xl" : "lg:text-5xl"
                      ]
                    }, " 20% ", 2)
                  ])
                ])
              ];
            }
          }),
          "3": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"${_scopeId}><p class="${ssrRenderClass([
                "font-medium text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> 2ND/3RD DEPOSIT </p><p class="${ssrRenderClass([
                "font-black text-sm md:text-lg xl:text-3xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
              ])}" style="${ssrRenderStyle({ "color": "#ffd62f" })}"${_scopeId}><span${_scopeId}>100%</span>\xA0 <span${_scopeId}>BONUS</span></p><p class="${ssrRenderClass([
                "font-medium text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> UP TO $600 </p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg" }, [
                  createVNode("p", {
                    class: [
                      "font-medium text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " 2ND/3RD DEPOSIT ", 2),
                  createVNode("p", {
                    class: [
                      "font-black text-sm md:text-lg xl:text-3xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
                    ],
                    style: { "color": "#ffd62f" }
                  }, [
                    createVNode("span", null, "100%"),
                    createTextVNode("\xA0 "),
                    createVNode("span", null, "BONUS")
                  ], 2),
                  createVNode("p", {
                    class: [
                      "font-medium text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " UP TO $600 ", 2)
                ])
              ];
            }
          }),
          "4": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"${_scopeId}><p class="text-xs"${_scopeId}>Get a special</p><p class="${ssrRenderClass([
                "font-bold text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> BONUS ON </p><p class="${ssrRenderClass([
                "font-black text-md md:text-lg xl:text-3xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
              ])}" style="${ssrRenderStyle({ "color": "#ffd62f" })}"${_scopeId}> SPORTBOOK </p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg" }, [
                  createVNode("p", { class: "text-xs" }, "Get a special"),
                  createVNode("p", {
                    class: [
                      "font-bold text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " BONUS ON ", 2),
                  createVNode("p", {
                    class: [
                      "font-black text-md md:text-lg xl:text-3xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-3xl"
                    ],
                    style: { "color": "#ffd62f" }
                  }, " SPORTBOOK ", 2)
                ])
              ];
            }
          }),
          "5": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"${_scopeId}><p class="${ssrRenderClass([
                "font-bold text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> HAPPY MONDAY </p><p class="${ssrRenderClass([
                "font-black text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}" style="${ssrRenderStyle({ "color": "#ffd62f" })}"${_scopeId}> 100 FREE SPINS </p><p class="text-xxs sm:text-xs"${_scopeId}> WHEN YOU MAKE A DEPOSIT </p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg" }, [
                  createVNode("p", {
                    class: [
                      "font-bold text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " HAPPY MONDAY ", 2),
                  createVNode("p", {
                    class: [
                      "font-black text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ],
                    style: { "color": "#ffd62f" }
                  }, " 100 FREE SPINS ", 2),
                  createVNode("p", { class: "text-xxs sm:text-xs" }, " WHEN YOU MAKE A DEPOSIT ")
                ])
              ];
            }
          }),
          "6": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg"${_scopeId}><p class="sm:text-xxs text-xs"${_scopeId}>FRIDAY</p><p class="${ssrRenderClass([
                "font-bold text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}"${_scopeId}> 50% UP TO 250.00 </p><p class="${ssrRenderClass([
                "font-black text-sm md:text-lg xl:text-2xl",
                unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
              ])}" style="${ssrRenderStyle({ "color": "#ffd62f" })}"${_scopeId}> +50 FREE SPINS </p></div>`);
            } else {
              return [
                createVNode("div", { class: "w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8 text-shadow-lg" }, [
                  createVNode("p", { class: "sm:text-xxs text-xs" }, "FRIDAY"),
                  createVNode("p", {
                    class: [
                      "font-bold text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ]
                  }, " 50% UP TO 250.00 ", 2),
                  createVNode("p", {
                    class: [
                      "font-black text-sm md:text-lg xl:text-2xl",
                      unref(isDrawer).value ? "lg:text-sm" : "lg:text-2xl"
                    ],
                    style: { "color": "#ffd62f" }
                  }, " +50 FREE SPINS ", 2)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/AvailableBonus.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FreeSpins",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const store = useStore();
    const isDrawer = computed(() => store.state.isDrawer);
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
            getFreespinHistory(store.state.pageNumber + 1, store, router);
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
        name: "title",
        required: true,
        label: tran("Title", store.state.lang),
        align: "left",
        field: "title"
      },
      {
        name: "freespins_used",
        align: "left",
        label: tran("Free Spins", store.state.lang),
        field: "freespins_used"
      },
      {
        name: "status",
        align: "left",
        label: tran("Status", store.state.lang),
        field: "status"
      },
      {
        name: "created_at",
        align: "left",
        label: tran("Created At", store.state.lang),
        field: "created_at"
      },
      {
        name: "expired_at",
        align: "center",
        label: tran("Expired At", store.state.lang),
        field: "expired_at"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_btn = __nuxt_component_0$1;
      const _component_q_img = __nuxt_component_0$2;
      const _component_q_page = __nuxt_component_0;
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-2 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative mt-10"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4"><div class="flex items-center justify-between relative"><div class="w-1/2 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="${ssrRenderClass([
        "font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg",
        unref(isDrawer) ? "lg:text-sm" : "lg:text-2xl"
      ])}">${ssrInterpolate(unref(tran)("BONUS WHEEL", unref(store).state.lang))}</p><p class="${ssrRenderClass([
        "text-xs lg:text-xs",
        unref(isDrawer) ? "lg:text-xxs" : "lg:text-xs"
      ])}">${ssrInterpolate(unref(tran)("Get free spin every 2 hours!", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_btn, {
        class: [
          "mt-2 xl:mt-4",
          unref(isDrawer) ? "lg:mt-2" : "lg:mt-4"
        ],
        size: "xs",
        label: unref(tran)("Free Spin", unref(store).state.lang)
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_bonus.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 -bottom-3",
        src: "/imgs/wheel.png",
        "spinner-color": "primary",
        "spinner-size": "24px",
        alt: "title"
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between relative"><div class="w-2/3 absolute top-1/2 -translate-y-1/2 z-10 left-8"><p class="${ssrRenderClass([
        "font-bold text-sm sm:text-sm md:text-xl xl:text-2xl text-shadow-lg",
        unref(isDrawer) ? "lg:text-sm" : "lg:text-2xl"
      ])}">${ssrInterpolate(unref(tran)("DAILY CASHBACK", unref(store).state.lang))}</p><div class="flex items-center justify-start"><p class="${ssrRenderClass([
        "text-xs lg:text-xs",
        unref(isDrawer) ? "lg:text-xxs" : "lg:text-xs"
      ])}">${ssrInterpolate(unref(tran)("UP TO", unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "color": "#ffd62f" })}" class="${ssrRenderClass([
        "text-xl xl:text-5xl font-black pl-1",
        unref(isDrawer) ? "lg:text-xl" : "lg:text-5xl"
      ])}"> 20% </p></div></div>`);
      _push(ssrRenderComponent(_component_q_img, {
        src: "/imgs/back_daily.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-1/2 absolute right-0 -bottom-3",
        src: "/imgs/cash_back.png",
        "spinner-color": "primary",
        alt: "title"
      }, null, _parent));
      _push(`</div></div>`);
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
                          key: "title",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.title), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_q_td, {
                          key: "freespins_used",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.freespins_used)}/${ssrInterpolate(props.row.freespins_available)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.freespins_used) + "/" + toDisplayString(props.row.freespins_available), 1)
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
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("Cancel", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == 1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Yes", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              if (props.row.status == -1) {
                                _push5(ssrRenderComponent(_component_q_btn, {
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: unref(tran)("Nope", unref(store).state.lang)
                                }, null, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                props.row.status == 0 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 0,
                                  class: "w-14",
                                  color: "primary",
                                  size: "xs",
                                  label: unref(tran)("Cancel", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 1,
                                  class: "w-14",
                                  color: "positive",
                                  size: "xs",
                                  label: unref(tran)("Yes", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true),
                                props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                  key: 2,
                                  class: "w-14",
                                  color: "grey",
                                  size: "xs",
                                  label: unref(tran)("Nope", unref(store).state.lang)
                                }, null, 8, ["label"])) : createCommentVNode("", true)
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
                          key: "expired_at",
                          props
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.row.expired_at)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                            key: "title",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(_component_q_td, {
                            key: "freespins_used",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.freespins_used) + "/" + toDisplayString(props.row.freespins_available), 1)
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
                                class: "w-14",
                                color: "primary",
                                size: "xs",
                                label: unref(tran)("Cancel", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 1,
                                class: "w-14",
                                color: "positive",
                                size: "xs",
                                label: unref(tran)("Yes", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true),
                              props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                                key: 2,
                                class: "w-14",
                                color: "grey",
                                size: "xs",
                                label: unref(tran)("Nope", unref(store).state.lang)
                              }, null, 8, ["label"])) : createCommentVNode("", true)
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
                            key: "expired_at",
                            props
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                          key: "title",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["props"]),
                        createVNode(_component_q_td, {
                          key: "freespins_used",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.freespins_used) + "/" + toDisplayString(props.row.freespins_available), 1)
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
                              class: "w-14",
                              color: "primary",
                              size: "xs",
                              label: unref(tran)("Cancel", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 1,
                              class: "w-14",
                              color: "positive",
                              size: "xs",
                              label: unref(tran)("Yes", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true),
                            props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                              key: 2,
                              class: "w-14",
                              color: "grey",
                              size: "xs",
                              label: unref(tran)("Nope", unref(store).state.lang)
                            }, null, 8, ["label"])) : createCommentVNode("", true)
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
                          key: "expired_at",
                          props
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.row.expired_at), 1)
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
                        key: "title",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(_component_q_td, {
                        key: "freespins_used",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.freespins_used) + "/" + toDisplayString(props.row.freespins_available), 1)
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
                            class: "w-14",
                            color: "primary",
                            size: "xs",
                            label: unref(tran)("Cancel", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.status == 1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 1,
                            class: "w-14",
                            color: "positive",
                            size: "xs",
                            label: unref(tran)("Yes", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true),
                          props.row.status == -1 ? (openBlock(), createBlock(_component_q_btn, {
                            key: 2,
                            class: "w-14",
                            color: "grey",
                            size: "xs",
                            label: unref(tran)("Nope", unref(store).state.lang)
                          }, null, 8, ["label"])) : createCommentVNode("", true)
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
                        key: "expired_at",
                        props
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.expired_at), 1)
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bonus/FreeSpins.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tab]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const isDrawer = computed(() => {
      return ref(store.state.isDrawer);
    });
    const selectedItem = ref(linkToTab(route.params.tab.toString()));
    const categories = computed(() => [
      {
        name: "Available Bonus",
        icon: "available_icon",
        active: selectedItem.value === "Available Bonus"
      },
      {
        name: "Active Bonus",
        icon: "active_icon",
        active: selectedItem.value === "Active Bonus"
      },
      {
        name: "Free Spins",
        icon: "free_spin_icon",
        active: selectedItem.value === "Free Spins"
      },
      {
        name: "Cash Back",
        icon: "cashback_icon",
        active: selectedItem.value === "Cash Back"
      },
      {
        name: "Bonus History",
        icon: "history_icon",
        active: selectedItem.value === "Bonus History"
      }
    ]);
    function selectCategory(val) {
      selectedItem.value = val;
      router.push(linkTo(`/bonus/${tabToLink(val)}`));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_CategoryBar = _sfc_main$8;
      const _component_BonusCashBack = _sfc_main$6;
      const _component_BonusHistory = _sfc_main$5;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}><div class="bonus_baner w-full h-40 font-bold text-xl flex justify-center flex-col text-right"${_scopeId}><div class="${ssrRenderClass(["pr-12 md:pr-24 xl:pr-36", isDrawer.value.value ? "lg:pr-6" : "lg:pr-36"])}"${_scopeId}><p${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(tran)("DAILY CASHBACK OF UP TO", unref(store).state.lang))}</span>\xA0<span style="${ssrRenderStyle({ "color": "#ffff03" })}" class="font-black text-5xl"${_scopeId}>20%</span></p><p${_scopeId}>${ssrInterpolate(unref(tran)("ONLY ON", unref(store).state.lang))} <span style="${ssrRenderStyle({ "color": "#ffff03" })}"${_scopeId}>${ssrInterpolate(unref(tran)("EURPOE #1", unref(store).state.lang))}</span> ${ssrInterpolate(unref(tran)("ONLINE", unref(store).state.lang))} ${ssrInterpolate(unref(tran)("CASINO", unref(store).state.lang))}</p></div></div><div class="w-full py-7 flex items-center justify-center"${_scopeId}><p class="font-bold text-base hidden lg:!block"${_scopeId}>${ssrInterpolate(unref(tran)("Bonus", unref(store).state.lang))}</p><div class="mx-2 hidden lg:!block" style="${ssrRenderStyle({ "width": "1px", "height": "20px", "background": "#383d47" })}"${_scopeId}></div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CategoryBar, {
              selectCategory,
              categories: categories.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(selectedItem) === "Cash Back") {
              _push2(ssrRenderComponent(_component_BonusCashBack, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Bonus History") {
              _push2(ssrRenderComponent(_component_BonusHistory, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Active Bonus") {
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Available Bonus") {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Free Spins") {
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section><section class="pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, null, null, _parent2, _scopeId));
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
                        createVNode("span", null, toDisplayString(unref(tran)("DAILY CASHBACK OF UP TO", unref(store).state.lang)), 1),
                        createTextVNode("\xA0"),
                        createVNode("span", {
                          style: { "color": "#ffff03" },
                          class: "font-black text-5xl"
                        }, "20%")
                      ]),
                      createVNode("p", null, [
                        createTextVNode(toDisplayString(unref(tran)("ONLY ON", unref(store).state.lang)) + " ", 1),
                        createVNode("span", { style: { "color": "#ffff03" } }, toDisplayString(unref(tran)("EURPOE #1", unref(store).state.lang)), 1),
                        createTextVNode(" " + toDisplayString(unref(tran)("ONLINE", unref(store).state.lang)) + " " + toDisplayString(unref(tran)("CASINO", unref(store).state.lang)), 1)
                      ])
                    ], 2)
                  ]),
                  createVNode("div", { class: "w-full py-7 flex items-center justify-center" }, [
                    createVNode("p", { class: "font-bold text-base hidden lg:!block" }, toDisplayString(unref(tran)("Bonus", unref(store).state.lang)), 1),
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
                  unref(selectedItem) === "Cash Back" ? (openBlock(), createBlock(_component_BonusCashBack, { key: 0 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Bonus History" ? (openBlock(), createBlock(_component_BonusHistory, { key: 1 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Active Bonus" ? (openBlock(), createBlock(_sfc_main$4, { key: 2 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Available Bonus" ? (openBlock(), createBlock(_sfc_main$2, { key: 3 })) : createCommentVNode("", true),
                  unref(selectedItem) === "Free Spins" ? (openBlock(), createBlock(_sfc_main$1, { key: 4 })) : createCommentVNode("", true)
                ]),
                createVNode("section", { class: "pt-8" }, [
                  createVNode(_sfc_main$7)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Bonus/[tab].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tab_-3a533471.mjs.map
