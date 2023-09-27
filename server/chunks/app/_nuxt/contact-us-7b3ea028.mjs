import { _ as __nuxt_component_6 } from './QInput-1d875957.mjs';
import { _ as __nuxt_component_0 } from './QBtn-973e1c12.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';
import { t as tran } from './translation-9652486b.mjs';
import { c as changeTitle } from './string-b2c0b29d.mjs';
import { a as Axios } from './Axios-0124dde3.mjs';
import './use-key-composition-a9d6306d.mjs';
import './use-form-f3deae03.mjs';
import './QSpinner-efb87a9c.mjs';
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
import './translation-b8ce396e.mjs';
import 'axios';

const contactus = (data, store) => {
  Axios("post", "/api/contactUs", data).then((res) => {
    store.commit("handleNotification", { type: "info", message: "Message Sent Successfully!" });
  }).catch((err) => {
    if (err.response)
      store.commit("handleNotification", { type: "Error", message: err.response.data.message });
    else
      store.commit("handleNotification", { type: "Error", message: "Network Connection Error." });
  });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact-us",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const content = {
      name: ref(""),
      email: ref(""),
      phone: ref(""),
      department: ref(""),
      message: ref("")
    };
    const validation = {
      name: ref(""),
      email: ref(""),
      phone: ref(""),
      department: ref(""),
      message: ref("")
    };
    const valid = () => {
      let sendFlag = true;
      Object.keys(validation).map((item) => validation[item].value = "");
      Object.keys(content).map((item) => {
        if (item == "email") {
          if (!validateEmail(content[item].value)) {
            validation.email.value = "Invalid Mail Address";
            sendFlag = false;
          }
        }
        if (item != "phone" && content[item].value == "") {
          validation[item].value = `Input ${changeTitle(item)}`;
          sendFlag = false;
        }
      });
      if (sendFlag) {
        sendMessage();
        Object.keys(validation).map((item) => validation[item].value = "");
      }
    };
    const validateEmail = (email) => {
      let regex = new RegExp("[a-z0-9]+@+[a-z0-9]+.com");
      return regex.test(email);
    };
    const sendMessage = () => {
      let data = {};
      Object.keys(content).map((item) => {
        data = { ...data, [item]: content[item].value };
      });
      contactus(data, store);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_input = __nuxt_component_6;
      const _component_q_btn = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-5/6 mx-auto p-10" }, _attrs))}><div class="flex justify-center"><p class="text-xl lg:text-2xl font-bold py-3 mt-3 px-7 lg:px-12 bg-gray-800 rounded-xl">${ssrInterpolate(unref(tran)("CONTACT US", unref(store).state.lang))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3"><div><p class="text-lg py-2 lg:py-4 font-semibold">${ssrInterpolate(unref(tran)("Name", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: content.name.value,
        "onUpdate:modelValue": ($event) => content.name.value = $event,
        class: "w-full text-lg"
      }, null, _parent));
      if (validation.name.value != "") {
        _push(`<p class="text-red-400 text-md pt-1 pl-2">${ssrInterpolate(unref(tran)(validation.name.value, unref(store).state.lang))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><p class="text-lg py-2 lg:py-4 font-semibold">${ssrInterpolate(unref(tran)("Email", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: content.email.value,
        "onUpdate:modelValue": ($event) => content.email.value = $event,
        class: "w-full text-lg"
      }, null, _parent));
      if (validation.email.value != "") {
        _push(`<p class="text-red-400 text-md pt-1 pl-2">${ssrInterpolate(unref(tran)(validation.email.value, unref(store).state.lang))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3"><div><p class="text-lg py-2 lg:py-4 font-semibold">${ssrInterpolate(unref(tran)("Phone", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: content.phone.value,
        "onUpdate:modelValue": ($event) => content.phone.value = $event,
        class: "w-full text-lg"
      }, null, _parent));
      if (validation.phone.value != "") {
        _push(`<p class="text-red-400 text-md pt-1 pl-2">${ssrInterpolate(unref(tran)(validation.phone.value, unref(store).state.lang))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><p class="text-lg py-2 lg:py-4 font-semibold">${ssrInterpolate(unref(tran)("Department", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        modelValue: content.department.value,
        "onUpdate:modelValue": ($event) => content.department.value = $event,
        class: "w-full text-lg",
        placeholder: unref(tran)("Deposit, Withdraw, kyc, Technical, Others", unref(store).state.lang)
      }, null, _parent));
      if (validation.department.value != "") {
        _push(`<p class="text-red-400 text-md pt-1 pl-2">${ssrInterpolate(unref(tran)(validation.department.value, unref(store).state.lang))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div><p class="text-lg py-2 lg:py-4 font-semibold">${ssrInterpolate(unref(tran)("Message", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_input, {
        outlined: "",
        class: "text-lg",
        modelValue: content.message.value,
        "onUpdate:modelValue": ($event) => content.message.value = $event,
        type: "textarea"
      }, null, _parent));
      if (validation.message.value != "") {
        _push(`<p class="text-red-400 text-md pt-1 pl-2">${ssrInterpolate(unref(tran)(validation.message.value, unref(store).state.lang))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_q_btn, {
        onClick: valid,
        label: unref(tran)("SEND MESSAGE", unref(store).state.lang),
        color: "gray-800",
        class: "font-bold text-lg px-5 mt-4"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact-us.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-us-7b3ea028.mjs.map
