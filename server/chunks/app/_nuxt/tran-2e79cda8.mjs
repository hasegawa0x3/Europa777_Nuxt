import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { t as tran } from './translation-b8ce396e.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tran",
  __ssrInlineRender: true,
  setup(__props) {
    const ddd = Object.keys(tran.en).map((item) => tran.en[item]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(unref(ddd), (item) => {
        _push(`<p>${ssrInterpolate(item)}</p>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tran.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tran-2e79cda8.mjs.map
