import { A as AxiosWithAuth, a as Axios } from './Axios-0124dde3.mjs';
import { g as getBalances } from './use-panel-7f2518e1.mjs';
import Cookies from 'js-cookie';
import { computed, h } from 'vue';
import { c as createComponent, h as hSlot } from './translation-9652486b.mjs';

const getProfile = (store, router) => {
  AxiosWithAuth("get", "/api/player/getProfile", store, router).then((res) => {
    store.commit("handleGetUser", res.data.Player);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const getGameHistory = (pagenum, store, router) => {
  AxiosWithAuth("get", `/api/player/getGamePlayHistory?page=${pagenum}`, store, router).then((res) => {
    let result = res.data.gamePlayHistory.data;
    if (pagenum > 1) {
      result = [...store.state.history, ...result];
    }
    store.commit("handleGetHistoryAccount", res.data.gamePlayHistory.total);
    store.commit("handleGetHistory", result);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const updateAvatar = (data, store, router) => {
  AxiosWithAuth("Post", `/api/player/updateAvatar`, store, router, { "avatar": data }).then((res) => {
    getProfile(store, router);
    store.commit("handleNotification", { type: "Success", message: "Profile Image Updated Successfully!" });
    store.commit("handleUpdateAvatar", data);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const logIn = (data, store, router) => {
  Axios("post", "/api/login", data).then((res) => {
    const tokenStr = res.data["token"];
    Cookies.set("token", tokenStr.split("|")[1]);
    store.commit("handleLogin", true);
    if (store.state.isDepositNow) {
      router.push("/wallet/deposit");
      store.commit("handleDepositeNow", true);
    }
    getBalances(store);
    getProfile(store, router);
    store.commit("handleNotification", { type: "Success", message: "Login Successed!" });
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const logOut = (store, router) => {
  store.commit("handleLogin", false);
  Cookies.remove("token");
  router.push("/");
};
const SignUp = (data, store) => {
  Axios("post", "/api/register", data).then((res) => {
    Cookies.remove("click_id");
    Cookies.remove("promo");
    store.commit("handleOnRegister", false);
    store.commit("handleVerifyEmail", 2);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const ResetPassword = (data, store) => {
  AxiosWithAuth("post", "/api/player/updatePassword", store, null, data).then((res) => {
    store.commit("handleNotification", { type: "Success", message: "Password Updated Successfully!" });
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const forgotPassword = (email, store) => {
  Axios("post", `/api/forgotPassword/${email}`).then((res) => {
    store.commit("handleVerifyEmail", 1);
    store.commit("handleResetCode", true);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const setNewPassword = (data, store, router) => {
  Axios("post", "/api/setPassword", data).then((res) => {
    const tokenStr = res.data["token"];
    Cookies.set("token", tokenStr.split("|")[1]);
    store.commit("handleLogin", true);
    getBalances(store);
    getProfile(store, router);
    store.commit("handleNotification", { type: "Success", message: "New Password Set" });
    store.commit("handleResetCode", false);
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const __nuxt_component_0 = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});

export { ResetPassword as R, SignUp as S, __nuxt_component_0 as _, logIn as a, forgotPassword as f, getGameHistory as g, logOut as l, setNewPassword as s, updateAvatar as u };
//# sourceMappingURL=QBtnGroup-922e74e8.mjs.map
