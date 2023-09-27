import { getCurrentInstance, inject, computed, h, defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { c as createComponent, h as hSlot, t as tran } from './translation-9652486b.mjs';
import { l as layoutKey, e as emptyRenderFn, p as pageContainerKey } from './symbols-ee15851d.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useStore } from '../server.mjs';

const __nuxt_component_0 = createComponent({
  name: "QPage",
  props: {
    padding: Boolean,
    styleFn: Function
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPage needs to be a deep child of QLayout");
      return emptyRenderFn;
    }
    const $pageContainer = inject(pageContainerKey, emptyRenderFn);
    if ($pageContainer === emptyRenderFn) {
      console.error("QPage needs to be child of QPageContainer");
      return emptyRenderFn;
    }
    const style = computed(() => {
      const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
      if (typeof props.styleFn === "function") {
        const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
        return props.styleFn(offset, height);
      }
      return {
        minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px"
      };
    });
    const classes = computed(
      () => `q-page${props.padding === true ? " q-layout-padding" : ""}`
    );
    return () => h("main", {
      class: classes.value,
      style: style.value
    }, hSlot(slots.default));
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Activity",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:flex justify-center items-center px-3 pt-4 md:pt-0" }, _attrs))}><img class="w-44" src="/imgs/crypto_acceptable.png"><div class="flex flex-row flex-nowrap items-center justify-start md:pl-2 pt-4 md:pt-0"><img class="w-8" src="/imgs/18.png"><p class="pl-2" style="${ssrRenderStyle({ "font-size": "10px", "color": "#7D8396", "max-width": "420px" })}">${ssrInterpolate(unref(tran)("activity", unref(store).state.lang))}</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landingPage/Activity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, __nuxt_component_0 as a };
//# sourceMappingURL=Activity-d52ebfd7.mjs.map
