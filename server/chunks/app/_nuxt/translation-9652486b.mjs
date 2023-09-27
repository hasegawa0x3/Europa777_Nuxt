import { markRaw, defineComponent, h, withDirectives } from 'vue';
import { t as tran$1 } from './translation-b8ce396e.mjs';

const createComponent = (raw) => markRaw(/* @__PURE__ */ defineComponent(raw));
const createDirective = (raw) => markRaw(raw);
function hSlot(slot, otherwise) {
  return slot !== void 0 ? slot() || otherwise : otherwise;
}
function hUniqueSlot(slot, otherwise) {
  if (slot !== void 0) {
    const vnode = slot();
    if (vnode !== void 0 && vnode !== null) {
      return vnode.slice();
    }
  }
  return otherwise;
}
function hMergeSlot(slot, source) {
  return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
  if (slot === void 0) {
    return source;
  }
  return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
  data.key = key + condition;
  const vnode = h(tag, data, children);
  return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}
const tran = (str, lang) => {
  return tran$1[lang][str];
};

export { hUniqueSlot as a, hMergeSlot as b, createComponent as c, createDirective as d, hDir as e, hMergeSlotSafely as f, hSlot as h, tran as t };
//# sourceMappingURL=translation-9652486b.mjs.map
