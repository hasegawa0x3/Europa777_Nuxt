import { _ as _sfc_main$7, a as __nuxt_component_0 } from './Activity-d52ebfd7.mjs';
import { _ as __nuxt_component_0$1 } from './QImg-55911caf.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_3 } from './QBtn-973e1c12.mjs';
import { t as tran } from './translation-9652486b.mjs';
import { markRaw, defineComponent, computed, getCurrentInstance, h, inject, watch, onMounted, onBeforeUnmount, ref, onBeforeUpdate, nextTick, onDeactivated, onActivated, Transition, useSSRContext, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, mergeProps, createTextVNode, onUnmounted, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { f as formKey, s as stopAndPrevent, i as isRuntimeSsrPreHydration, p as prevent, c as client, a as stop, u as useStore } from '../server.mjs';
import { useRoute, useRouter } from 'vue-router';
import { l as logOut, R as ResetPassword, _ as __nuxt_component_0$3, g as getGameHistory } from './QBtnGroup-922e74e8.mjs';
import { _ as _sfc_main$8, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3$1 } from './QTd-dca61d2f.mjs';
import { _ as __nuxt_component_4, a as __nuxt_component_5 } from './QStep-eb0acd59.mjs';
import { _ as __nuxt_component_15 } from './QSelect-2dfaad86.mjs';
import { _ as __nuxt_component_3$2 } from './QToggle-fde872e5.mjs';
import { _ as __nuxt_component_6 } from './QInput-1d875957.mjs';
import { l as linkToTab, a as linkTo, t as tabToLink } from './link-f9710514.mjs';
import './symbols-ee15851d.mjs';
import './QSpinner-efb87a9c.mjs';
import './translation-b8ce396e.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
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
import './Axios-0124dde3.mjs';
import 'axios';
import './use-panel-7f2518e1.mjs';
import './use-checkbox-4a396aff.mjs';
import './use-form-f3deae03.mjs';
import './QLinearProgress-7723eb23.mjs';
import './use-key-composition-a9d6306d.mjs';

function injectProp (target, propName, get, set) {
  Object.defineProperty(target, propName, {
    get,
    set,
    enumerable: true
  });
  return target
}

function debounce (fn, wait = 250, immediate) {
  let timer = null;

  function debounced (/* ...args */) {
    const args = arguments;

    const later = () => {
      timer = null;
      if (immediate !== true) {
        fn.apply(this, args);
      }
    };

    if (timer !== null) {
      clearTimeout(timer);
    }
    else if (immediate === true) {
      fn.apply(this, args);
    }

    timer = setTimeout(later, wait);
  }

  debounced.cancel = () => {
    timer !== null && clearTimeout(timer);
  };

  return debounced
}

let lastKeyCompositionStatus = false;

function shouldIgnoreKey (evt) {
  return lastKeyCompositionStatus === true
    || evt !== Object(evt)
    || evt.isComposing === true
    || evt.qKeyEvent === true
}

let queue = [];
let waitFlags = [];

function addFocusFn (fn) {
  if (waitFlags.length === 0) {
    fn();
  }
  else {
    queue.push(fn);
  }
}

function removeFocusFn (fn) {
  queue = queue.filter(entry => entry !== fn);
}

const createComponent = raw => markRaw(defineComponent(raw));

function hSlot (slot, otherwise) {
  return slot !== void 0
    ? slot() || otherwise
    : otherwise
}

/**
 * Source definitely exists,
 * so it's merged with the possible slot
 */
function hMergeSlot (slot, source) {
  return slot !== void 0
    ? source.concat(slot())
    : source
}

const useSizeDefaults = {
  xs: 18,
  sm: 24,
  md: 32,
  lg: 38,
  xl: 46
};

const useSizeProps = {
  size: String
};

function useSize (props, sizes = useSizeDefaults) {
  // return sizeStyle
  return computed(() => (
    props.size !== void 0
      ? { fontSize: props.size in sizes ? `${ sizes[ props.size ] }px` : props.size }
      : null
  ))
}

const defaultViewBox = '0 0 24 24';

const sameFn = i => i;
const ionFn = i => `ionicons ${ i }`;

const libMap = {
  'mdi-': i => `mdi ${ i }`,
  'icon-': sameFn, // fontawesome equiv
  'bt-': i => `bt ${ i }`,
  'eva-': i => `eva ${ i }`,
  'ion-md': ionFn,
  'ion-ios': ionFn,
  'ion-logo': ionFn,
  'iconfont ': sameFn,
  'ti-': i => `themify-icon ${ i }`,
  'bi-': i => `bootstrap-icons ${ i }`
};

const matMap = {
  o_: '-outlined',
  r_: '-round',
  s_: '-sharp'
};

const symMap = {
  sym_o_: '-outlined',
  sym_r_: '-rounded',
  sym_s_: '-sharp'
};

const libRE = new RegExp('^(' + Object.keys(libMap).join('|') + ')');
const matRE = new RegExp('^(' + Object.keys(matMap).join('|') + ')');
const symRE = new RegExp('^(' + Object.keys(symMap).join('|') + ')');
const mRE = /^[Mm]\s?[-+]?\.?\d/;
const imgRE = /^img:/;
const svgUseRE = /^svguse:/;
const ionRE = /^ion-/;
const faRE = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;

const QIcon = createComponent({
  name: 'QIcon',

  props: {
    ...useSizeProps,

    tag: {
      type: String,
      default: 'i'
    },

    name: String,
    color: String,
    left: Boolean,
    right: Boolean
  },

  setup (props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const sizeStyle = useSize(props);

    const classes = computed(() =>
      'q-icon'
      + (props.left === true ? ' on-left' : '') // TODO Qv3: drop this
      + (props.right === true ? ' on-right' : '')
      + (props.color !== void 0 ? ` text-${ props.color }` : '')
    );

    const type = computed(() => {
      let cls;
      let icon = props.name;

      if (icon === 'none' || !icon) {
        return { none: true }
      }

      if ($q.iconMapFn !== null) {
        const res = $q.iconMapFn(icon);
        if (res !== void 0) {
          if (res.icon !== void 0) {
            icon = res.icon;
            if (icon === 'none' || !icon) {
              return { none: true }
            }
          }
          else {
            return {
              cls: res.cls,
              content: res.content !== void 0
                ? res.content
                : ' '
            }
          }
        }
      }

      if (mRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svg: true,
          viewBox,
          nodes: def.split('&&').map(path => {
            const [ d, style, transform ] = path.split('@@');
            return h('path', { style, d, transform })
          })
        }
      }

      if (imgRE.test(icon) === true) {
        return {
          img: true,
          src: icon.substring(4)
        }
      }

      if (svgUseRE.test(icon) === true) {
        const [ def, viewBox = defaultViewBox ] = icon.split('|');

        return {
          svguse: true,
          src: def.substring(7),
          viewBox
        }
      }

      let content = ' ';
      const matches = icon.match(libRE);

      if (matches !== null) {
        cls = libMap[ matches[ 1 ] ](icon);
      }
      else if (faRE.test(icon) === true) {
        cls = icon;
      }
      else if (ionRE.test(icon) === true) {
        cls = `ionicons ion-${ $q.platform.is.ios === true ? 'ios' : 'md' }${ icon.substring(3) }`;
      }
      else if (symRE.test(icon) === true) {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Symbols ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-symbols' at the end of the string.
        cls = 'notranslate material-symbols';

        const matches = icon.match(symRE);
        if (matches !== null) {
          icon = icon.substring(6);
          cls += symMap[ matches[ 1 ] ];
        }

        content = icon;
      }
      else {
        // "notranslate" class is for Google Translate
        // to avoid tampering with Material Icons ligature font
        //
        // Caution: To be able to add suffix to the class name,
        // keep the 'material-icons' at the end of the string.
        cls = 'notranslate material-icons';

        const matches = icon.match(matRE);
        if (matches !== null) {
          icon = icon.substring(2);
          cls += matMap[ matches[ 1 ] ];
        }

        content = icon;
      }

      return {
        cls,
        content
      }
    });

    return () => {
      const data = {
        class: classes.value,
        style: sizeStyle.value,
        'aria-hidden': 'true',
        role: 'presentation'
      };

      if (type.value.none === true) {
        return h(props.tag, data, hSlot(slots.default))
      }

      if (type.value.img === true) {
        return h('span', data, hMergeSlot(slots.default, [
          h('img', { src: type.value.src })
        ]))
      }

      if (type.value.svg === true) {
        return h('span', data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox || '0 0 24 24'
          }, type.value.nodes)
        ]))
      }

      if (type.value.svguse === true) {
        return h('span', data, hMergeSlot(slots.default, [
          h('svg', {
            viewBox: type.value.viewBox
          }, [
            h('use', { 'xlink:href': type.value.src })
          ])
        ]))
      }

      if (type.value.cls !== void 0) {
        data.class += ' ' + type.value.cls;
      }

      return h(props.tag, data, hMergeSlot(slots.default, [
        type.value.content
      ]))
    }
  }
});

const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};

function useDark (props, $q) {
  // return isDark
  return computed(() => (
    props.dark === null
      ? $q.dark.isActive
      : props.dark
  ))
}

const useSpinnerProps = {
  size: {
    type: [ Number, String ],
    default: '1em'
  },
  color: String
};

function useSpinner (props) {
  return {
    cSize: computed(() => (
      props.size in useSizeDefaults
        ? `${ useSizeDefaults[ props.size ] }px`
        : props.size
    )),

    classes: computed(() =>
      'q-spinner' + (props.color ? ` text-${ props.color }` : '')
    )
  }
}

const QSpinner = createComponent({
  name: 'QSpinner',

  props: {
    ...useSpinnerProps,

    thickness: {
      type: Number,
      default: 5
    }
  },

  setup (props) {
    const { cSize, classes } = useSpinner(props);

    return () => h('svg', {
      class: classes.value + ' q-spinner-mat',
      width: cSize.value,
      height: cSize.value,
      viewBox: '25 25 50 50'
    }, [
      h('circle', {
        class: 'path',
        cx: '50',
        cy: '50',
        r: '20',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': props.thickness,
        'stroke-miterlimit': '10'
      })
    ])
  }
});

function useFormChild ({ validate, resetValidation, requiresQForm }) {
  const $form = inject(formKey, false);

  if ($form !== false) {
    const { props, proxy } = getCurrentInstance();

    // export public method (so it can be used in QForm)
    Object.assign(proxy, { validate, resetValidation });

    watch(() => props.disable, val => {
      if (val === true) {
        typeof resetValidation === 'function' && resetValidation();
        $form.unbindComponent(proxy);
      }
      else {
        $form.bindComponent(proxy);
      }
    });

    onMounted(() => {
      // register to parent QForm
      props.disable !== true && $form.bindComponent(proxy);
    });

    onBeforeUnmount(() => {
      // un-register from parent QForm
      props.disable !== true && $form.unbindComponent(proxy);
    });
  }
  else if (requiresQForm === true) {
    console.error('Parent QForm not found on useFormChild()!');
  }
}

// file referenced from docs

const
  hex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,
  hexa = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,
  hexOrHexa = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
  rgb = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,
  rgba = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;

// Keep in sync with ui/types/api/validation.d.ts
const testPattern = {
  date: v => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v),
  time: v => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(v),
  fulltime: v => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(v),
  timeOrFulltime: v => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(v),

  // -- RFC 5322 --
  // -- Added in v2.6.6 --
  // This is a basic helper validation.
  // For something more complex (like RFC 822) you should write and use your own rule.
  // We won't be accepting PRs to enhance the one below because of the reason above.
  // eslint-disable-next-line
  email: v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),

  hexColor: v => hex.test(v),
  hexaColor: v => hexa.test(v),
  hexOrHexaColor: v => hexOrHexa.test(v),

  rgbColor: v => rgb.test(v),
  rgbaColor: v => rgba.test(v),
  rgbOrRgbaColor: v => rgb.test(v) || rgba.test(v),

  hexOrRgbColor: v => hex.test(v) || rgb.test(v),
  hexaOrRgbaColor: v => hexa.test(v) || rgba.test(v),
  anyColor: v => hexOrHexa.test(v) || rgb.test(v) || rgba.test(v)
};

const lazyRulesValues = [ true, false, 'ondemand' ];

const useValidateProps = {
  modelValue: {},

  error: {
    type: Boolean,
    default: null
  },
  errorMessage: String,
  noErrorIcon: Boolean,

  rules: Array,
  reactiveRules: Boolean,
  lazyRules: {
    type: [ Boolean, String ],
    validator: v => lazyRulesValues.includes(v)
  }
};

function useValidate (focused, innerLoading) {
  const { props, proxy } = getCurrentInstance();

  const innerError = ref(false);
  const innerErrorMessage = ref(null);
  const isDirtyModel = ref(null);

  useFormChild({ validate, resetValidation });

  let validateIndex = 0, unwatchRules;

  const hasRules = computed(() =>
    props.rules !== void 0
    && props.rules !== null
    && props.rules.length !== 0
  );

  const hasActiveRules = computed(() =>
    props.disable !== true
    && hasRules.value === true
  );

  const hasError = computed(() =>
    props.error === true || innerError.value === true
  );

  const errorMessage = computed(() => (
    typeof props.errorMessage === 'string' && props.errorMessage.length !== 0
      ? props.errorMessage
      : innerErrorMessage.value
  ));

  watch(() => props.modelValue, () => {
    validateIfNeeded();
  });

  watch(() => props.reactiveRules, val => {
    if (val === true) {
      if (unwatchRules === void 0) {
        unwatchRules = watch(() => props.rules, () => {
          validateIfNeeded(true);
        });
      }
    }
    else if (unwatchRules !== void 0) {
      unwatchRules();
      unwatchRules = void 0;
    }
  }, { immediate: true });

  watch(focused, val => {
    if (val === true) {
      if (isDirtyModel.value === null) {
        isDirtyModel.value = false;
      }
    }
    else if (isDirtyModel.value === false) {
      isDirtyModel.value = true;

      if (
        hasActiveRules.value === true
        && props.lazyRules !== 'ondemand'
        // Don't re-trigger if it's already in progress;
        // It might mean that focus switched to submit btn and
        // QForm's submit() has been called already (ENTER key)
        && innerLoading.value === false
      ) {
        debouncedValidate();
      }
    }
  });

  function resetValidation () {
    validateIndex++;
    innerLoading.value = false;
    isDirtyModel.value = null;
    innerError.value = false;
    innerErrorMessage.value = null;
    debouncedValidate.cancel();
  }

  /*
   * Return value
   *   - true (validation succeeded)
   *   - false (validation failed)
   *   - Promise (pending async validation)
   */
  function validate (val = props.modelValue) {
    if (hasActiveRules.value !== true) {
      return true
    }

    const index = ++validateIndex;

    const setDirty = innerLoading.value !== true
      ? () => { isDirtyModel.value = true; }
      : () => {};

    const update = (err, msg) => {
      err === true && setDirty();

      innerError.value = err;
      innerErrorMessage.value = msg || null;
      innerLoading.value = false;
    };

    const promises = [];

    for (let i = 0; i < props.rules.length; i++) {
      const rule = props.rules[ i ];
      let res;

      if (typeof rule === 'function') {
        res = rule(val, testPattern);
      }
      else if (typeof rule === 'string' && testPattern[ rule ] !== void 0) {
        res = testPattern[ rule ](val);
      }

      if (res === false || typeof res === 'string') {
        update(true, res);
        return false
      }
      else if (res !== true && res !== void 0) {
        promises.push(res);
      }
    }

    if (promises.length === 0) {
      update(false);
      return true
    }

    innerLoading.value = true;

    return Promise.all(promises).then(
      res => {
        if (res === void 0 || Array.isArray(res) === false || res.length === 0) {
          index === validateIndex && update(false);
          return true
        }

        const msg = res.find(r => r === false || typeof r === 'string');
        index === validateIndex && update(msg !== void 0, msg);
        return msg === void 0
      },
      e => {
        if (index === validateIndex) {
          console.error(e);
          update(true);
        }

        return false
      }
    )
  }

  function validateIfNeeded (changedRules) {
    if (
      hasActiveRules.value === true
      && props.lazyRules !== 'ondemand'
      && (isDirtyModel.value === true || (props.lazyRules !== true && changedRules !== true))
    ) {
      debouncedValidate();
    }
  }

  const debouncedValidate = debounce(validate, 0);

  onBeforeUnmount(() => {
    unwatchRules !== void 0 && unwatchRules();
    debouncedValidate.cancel();
  });

  // expose public methods & props
  Object.assign(proxy, { resetValidation, validate });
  injectProp(proxy, 'hasError', () => hasError.value);

  return {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,

    validate,
    resetValidation
  }
}

const listenerRE = /^on[A-Z]/;

function useSplitAttrs (attrs, vnode) {
  const acc = {
    listeners: ref({}),
    attributes: ref({})
  };

  function update () {
    const attributes = {};
    const listeners = {};

    for (const key in attrs) {
      if (key !== 'class' && key !== 'style' && listenerRE.test(key) === false) {
        attributes[ key ] = attrs[ key ];
      }
    }

    for (const key in vnode.props) {
      if (listenerRE.test(key) === true) {
        listeners[ key ] = vnode.props[ key ];
      }
    }

    acc.attributes.value = attributes;
    acc.listeners.value = listeners;
  }

  onBeforeUpdate(update);

  update();

  return acc
}

/**
 * Based on the work of https://github.com/jchook/uuid-random
 */

let
  buf,
  bufIdx = 0;
const hexBytes = new Array(256);

// Pre-calculate toString(16) for speed
for (let i = 0; i < 256; i++) {
  hexBytes[ i ] = (i + 0x100).toString(16).substring(1);
}

// Use best available PRNG
const randomBytes = (() => {
  // Node & Browser support
  const lib = typeof crypto !== 'undefined'
    ? crypto
    : (
        void 0
      );

  if (lib !== void 0) {
    if (lib.randomBytes !== void 0) {
      return lib.randomBytes
    }
    if (lib.getRandomValues !== void 0) {
      return n => {
        const bytes = new Uint8Array(n);
        lib.getRandomValues(bytes);
        return bytes
      }
    }
  }

  return n => {
    const r = [];
    for (let i = n; i > 0; i--) {
      r.push(Math.floor(Math.random() * 256));
    }
    return r
  }
})();

// Buffer random numbers for speed
// Reduce memory usage by decreasing this number (min 16)
// or improve speed by increasing this number (try 16384)
const BUFFER_SIZE = 4096;

function uid () {
  // Buffer some random bytes for speed
  if (buf === void 0 || (bufIdx + 16 > BUFFER_SIZE)) {
    bufIdx = 0;
    buf = randomBytes(BUFFER_SIZE);
  }

  const b = Array.prototype.slice.call(buf, bufIdx, (bufIdx += 16));
  b[ 6 ] = (b[ 6 ] & 0x0f) | 0x40;
  b[ 8 ] = (b[ 8 ] & 0x3f) | 0x80;

  return hexBytes[ b[ 0 ] ] + hexBytes[ b[ 1 ] ]
    + hexBytes[ b[ 2 ] ] + hexBytes[ b[ 3 ] ] + '-'
    + hexBytes[ b[ 4 ] ] + hexBytes[ b[ 5 ] ] + '-'
    + hexBytes[ b[ 6 ] ] + hexBytes[ b[ 7 ] ] + '-'
    + hexBytes[ b[ 8 ] ] + hexBytes[ b[ 9 ] ] + '-'
    + hexBytes[ b[ 10 ] ] + hexBytes[ b[ 11 ] ]
    + hexBytes[ b[ 12 ] ] + hexBytes[ b[ 13 ] ]
    + hexBytes[ b[ 14 ] ] + hexBytes[ b[ 15 ] ]
}

function getTargetUid (val) {
  return val === void 0 ? `f_${ uid() }` : val
}

function fieldValueIsFilled (val) {
  return val !== void 0
    && val !== null
    && ('' + val).length !== 0
}

const useFieldProps = {
  ...useDarkProps,
  ...useValidateProps,

  label: String,
  stackLabel: Boolean,
  hint: String,
  hideHint: Boolean,
  prefix: String,
  suffix: String,

  labelColor: String,
  color: String,
  bgColor: String,

  filled: Boolean,
  outlined: Boolean,
  borderless: Boolean,
  standout: [ Boolean, String ],

  square: Boolean,

  loading: Boolean,

  labelSlot: Boolean,

  bottomSlots: Boolean,
  hideBottomSpace: Boolean,

  rounded: Boolean,
  dense: Boolean,
  itemAligned: Boolean,

  counter: Boolean,

  clearable: Boolean,
  clearIcon: String,

  disable: Boolean,
  readonly: Boolean,

  autofocus: Boolean,

  for: String,

  maxlength: [ Number, String ]
};

const useFieldEmits = [ 'update:modelValue', 'clear', 'focus', 'blur', 'popupShow', 'popupHide' ];

function useFieldState () {
  const { props, attrs, proxy, vnode } = getCurrentInstance();

  const isDark = useDark(props, proxy.$q);

  return {
    isDark,

    editable: computed(() =>
      props.disable !== true && props.readonly !== true
    ),

    innerLoading: ref(false),
    focused: ref(false),
    hasPopupOpen: false,

    splitAttrs: useSplitAttrs(attrs, vnode),
    targetUid: ref(getTargetUid(props.for)),

    rootRef: ref(null),
    targetRef: ref(null),
    controlRef: ref(null)

    /**
     * user supplied additionals:

     * innerValue - computed
     * floatingLabel - computed
     * inputRef - computed

     * fieldClass - computed
     * hasShadow - computed

     * controlEvents - Object with fn(e)

     * getControl - fn
     * getInnerAppend - fn
     * getControlChild - fn
     * getShadowControl - fn
     * showPopup - fn
     */
  }
}

function useField (state) {
  const { props, emit, slots, attrs, proxy } = getCurrentInstance();
  const { $q } = proxy;

  let focusoutTimer = null;

  if (state.hasValue === void 0) {
    state.hasValue = computed(() => fieldValueIsFilled(props.modelValue));
  }

  if (state.emitValue === void 0) {
    state.emitValue = value => {
      emit('update:modelValue', value);
    };
  }

  if (state.controlEvents === void 0) {
    state.controlEvents = {
      onFocusin: onControlFocusin,
      onFocusout: onControlFocusout
    };
  }

  Object.assign(state, {
    clearValue,
    onControlFocusin,
    onControlFocusout,
    focus
  });

  if (state.computedCounter === void 0) {
    state.computedCounter = computed(() => {
      if (props.counter !== false) {
        const len = typeof props.modelValue === 'string' || typeof props.modelValue === 'number'
          ? ('' + props.modelValue).length
          : (Array.isArray(props.modelValue) === true ? props.modelValue.length : 0);

        const max = props.maxlength !== void 0
          ? props.maxlength
          : props.maxValues;

        return len + (max !== void 0 ? ' / ' + max : '')
      }
    });
  }

  const {
    isDirtyModel,
    hasRules,
    hasError,
    errorMessage,
    resetValidation
  } = useValidate(state.focused, state.innerLoading);

  const floatingLabel = state.floatingLabel !== void 0
    ? computed(() => props.stackLabel === true || state.focused.value === true || state.floatingLabel.value === true)
    : computed(() => props.stackLabel === true || state.focused.value === true || state.hasValue.value === true);

  const shouldRenderBottom = computed(() =>
    props.bottomSlots === true
    || props.hint !== void 0
    || hasRules.value === true
    || props.counter === true
    || props.error !== null
  );

  const styleType = computed(() => {
    if (props.filled === true) { return 'filled' }
    if (props.outlined === true) { return 'outlined' }
    if (props.borderless === true) { return 'borderless' }
    if (props.standout) { return 'standout' }
    return 'standard'
  });

  const classes = computed(() =>
    `q-field row no-wrap items-start q-field--${ styleType.value }`
    + (state.fieldClass !== void 0 ? ` ${ state.fieldClass.value }` : '')
    + (props.rounded === true ? ' q-field--rounded' : '')
    + (props.square === true ? ' q-field--square' : '')
    + (floatingLabel.value === true ? ' q-field--float' : '')
    + (hasLabel.value === true ? ' q-field--labeled' : '')
    + (props.dense === true ? ' q-field--dense' : '')
    + (props.itemAligned === true ? ' q-field--item-aligned q-item-type' : '')
    + (state.isDark.value === true ? ' q-field--dark' : '')
    + (state.getControl === void 0 ? ' q-field--auto-height' : '')
    + (state.focused.value === true ? ' q-field--focused' : '')
    + (hasError.value === true ? ' q-field--error' : '')
    + (hasError.value === true || state.focused.value === true ? ' q-field--highlighted' : '')
    + (props.hideBottomSpace !== true && shouldRenderBottom.value === true ? ' q-field--with-bottom' : '')
    + (props.disable === true ? ' q-field--disabled' : (props.readonly === true ? ' q-field--readonly' : ''))
  );

  const contentClass = computed(() =>
    'q-field__control relative-position row no-wrap'
    + (props.bgColor !== void 0 ? ` bg-${ props.bgColor }` : '')
    + (
      hasError.value === true
        ? ' text-negative'
        : (
            typeof props.standout === 'string' && props.standout.length !== 0 && state.focused.value === true
              ? ` ${ props.standout }`
              : (props.color !== void 0 ? ` text-${ props.color }` : '')
          )
    )
  );

  const hasLabel = computed(() =>
    props.labelSlot === true || props.label !== void 0
  );

  const labelClass = computed(() =>
    'q-field__label no-pointer-events absolute ellipsis'
    + (props.labelColor !== void 0 && hasError.value !== true ? ` text-${ props.labelColor }` : '')
  );

  const controlSlotScope = computed(() => ({
    id: state.targetUid.value,
    editable: state.editable.value,
    focused: state.focused.value,
    floatingLabel: floatingLabel.value,
    modelValue: props.modelValue,
    emitValue: state.emitValue
  }));

  const attributes = computed(() => {
    const acc = {
      for: state.targetUid.value
    };

    if (props.disable === true) {
      acc[ 'aria-disabled' ] = 'true';
    }
    else if (props.readonly === true) {
      acc[ 'aria-readonly' ] = 'true';
    }

    return acc
  });

  watch(() => props.for, val => {
    // don't transform targetUid into a computed
    // prop as it will break SSR
    state.targetUid.value = getTargetUid(val);
  });

  function focusHandler () {
    const el = document.activeElement;
    let target = state.targetRef !== void 0 && state.targetRef.value;

    if (target && (el === null || el.id !== state.targetUid.value)) {
      target.hasAttribute('tabindex') === true || (target = target.querySelector('[tabindex]'));
      if (target && target !== el) {
        target.focus({ preventScroll: true });
      }
    }
  }

  function focus () {
    addFocusFn(focusHandler);
  }

  function blur () {
    removeFocusFn(focusHandler);
    const el = document.activeElement;
    if (el !== null && state.rootRef.value.contains(el)) {
      el.blur();
    }
  }

  function onControlFocusin (e) {
    if (focusoutTimer !== null) {
      clearTimeout(focusoutTimer);
      focusoutTimer = null;
    }

    if (state.editable.value === true && state.focused.value === false) {
      state.focused.value = true;
      emit('focus', e);
    }
  }

  function onControlFocusout (e, then) {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
    focusoutTimer = setTimeout(() => {
      focusoutTimer = null;

      if (
        document.hasFocus() === true && (
          state.hasPopupOpen === true
          || state.controlRef === void 0
          || state.controlRef.value === null
          || state.controlRef.value.contains(document.activeElement) !== false
        )
      ) {
        return
      }

      if (state.focused.value === true) {
        state.focused.value = false;
        emit('blur', e);
      }

      then !== void 0 && then();
    });
  }

  function clearValue (e) {
    // prevent activating the field but keep focus on desktop
    stopAndPrevent(e);

    if ($q.platform.is.mobile !== true) {
      const el = (state.targetRef !== void 0 && state.targetRef.value) || state.rootRef.value;
      el.focus();
    }
    else if (state.rootRef.value.contains(document.activeElement) === true) {
      document.activeElement.blur();
    }

    if (props.type === 'file') { // TODO vue3
      // do not let focus be triggered
      // as it will make the native file dialog
      // appear for another selection
      state.inputRef.value.value = null;
    }

    emit('update:modelValue', null);
    emit('clear', props.modelValue);

    nextTick(() => {
      resetValidation();

      if ($q.platform.is.mobile !== true) {
        isDirtyModel.value = false;
      }
    });
  }

  function getContent () {
    const node = [];

    slots.prepend !== void 0 && node.push(
      h('div', {
        class: 'q-field__prepend q-field__marginal row no-wrap items-center',
        key: 'prepend',
        onClick: prevent
      }, slots.prepend())
    );

    node.push(
      h('div', {
        class: 'q-field__control-container col relative-position row no-wrap q-anchor--skip'
      }, getControlContainer())
    );

    hasError.value === true && props.noErrorIcon === false && node.push(
      getInnerAppendNode('error', [
        h(QIcon, { name: $q.iconSet.field.error, color: 'negative' })
      ])
    );

    if (props.loading === true || state.innerLoading.value === true) {
      node.push(
        getInnerAppendNode(
          'inner-loading-append',
          slots.loading !== void 0
            ? slots.loading()
            : [ h(QSpinner, { color: props.color }) ]
        )
      );
    }
    else if (props.clearable === true && state.hasValue.value === true && state.editable.value === true) {
      node.push(
        getInnerAppendNode('inner-clearable-append', [
          h(QIcon, {
            class: 'q-field__focusable-action',
            tag: 'button',
            name: props.clearIcon || $q.iconSet.field.clear,
            tabindex: 0,
            type: 'button',
            'aria-hidden': null,
            role: null,
            onClick: clearValue
          })
        ])
      );
    }

    slots.append !== void 0 && node.push(
      h('div', {
        class: 'q-field__append q-field__marginal row no-wrap items-center',
        key: 'append',
        onClick: prevent
      }, slots.append())
    );

    state.getInnerAppend !== void 0 && node.push(
      getInnerAppendNode('inner-append', state.getInnerAppend())
    );

    state.getControlChild !== void 0 && node.push(
      state.getControlChild()
    );

    return node
  }

  function getControlContainer () {
    const node = [];

    props.prefix !== void 0 && props.prefix !== null && node.push(
      h('div', {
        class: 'q-field__prefix no-pointer-events row items-center'
      }, props.prefix)
    );

    if (state.getShadowControl !== void 0 && state.hasShadow.value === true) {
      node.push(
        state.getShadowControl()
      );
    }

    if (state.getControl !== void 0) {
      node.push(state.getControl());
    }
    // internal usage only:
    else if (slots.rawControl !== void 0) {
      node.push(slots.rawControl());
    }
    else if (slots.control !== void 0) {
      node.push(
        h('div', {
          ref: state.targetRef,
          class: 'q-field__native row',
          tabindex: -1,
          ...state.splitAttrs.attributes.value,
          'data-autofocus': props.autofocus === true || void 0
        }, slots.control(controlSlotScope.value))
      );
    }

    hasLabel.value === true && node.push(
      h('div', {
        class: labelClass.value
      }, hSlot(slots.label, props.label))
    );

    props.suffix !== void 0 && props.suffix !== null && node.push(
      h('div', {
        class: 'q-field__suffix no-pointer-events row items-center'
      }, props.suffix)
    );

    return node.concat(hSlot(slots.default))
  }

  function getBottom () {
    let msg, key;

    if (hasError.value === true) {
      if (errorMessage.value !== null) {
        msg = [ h('div', { role: 'alert' }, errorMessage.value) ];
        key = `q--slot-error-${ errorMessage.value }`;
      }
      else {
        msg = hSlot(slots.error);
        key = 'q--slot-error';
      }
    }
    else if (props.hideHint !== true || state.focused.value === true) {
      if (props.hint !== void 0) {
        msg = [ h('div', props.hint) ];
        key = `q--slot-hint-${ props.hint }`;
      }
      else {
        msg = hSlot(slots.hint);
        key = 'q--slot-hint';
      }
    }

    const hasCounter = props.counter === true || slots.counter !== void 0;

    if (props.hideBottomSpace === true && hasCounter === false && msg === void 0) {
      return
    }

    const main = h('div', {
      key,
      class: 'q-field__messages col'
    }, msg);

    return h('div', {
      class: 'q-field__bottom row items-start q-field__bottom--'
        + (props.hideBottomSpace !== true ? 'animated' : 'stale'),
      onClick: prevent
    }, [
      props.hideBottomSpace === true
        ? main
        : h(Transition, { name: 'q-transition--field-message' }, () => main),

      hasCounter === true
        ? h('div', {
          class: 'q-field__counter'
        }, slots.counter !== void 0 ? slots.counter() : state.computedCounter.value)
        : null
    ])
  }

  function getInnerAppendNode (key, content) {
    return content === null
      ? null
      : h('div', {
        key,
        class: 'q-field__append q-field__marginal row no-wrap items-center q-anchor--skip'
      }, content)
  }

  let shouldActivate = false;

  onDeactivated(() => {
    shouldActivate = true;
  });

  onActivated(() => {
    shouldActivate === true && props.autofocus === true && proxy.focus();
  });

  onMounted(() => {
    if (isRuntimeSsrPreHydration.value === true && props.for === void 0) {
      state.targetUid.value = getTargetUid();
    }

    props.autofocus === true && proxy.focus();
  });

  onBeforeUnmount(() => {
    focusoutTimer !== null && clearTimeout(focusoutTimer);
  });

  // expose public methods
  Object.assign(proxy, { focus, blur });

  return function renderField () {
    const labelAttrs = state.getControl === void 0 && slots.control === void 0
      ? {
          ...state.splitAttrs.attributes.value,
          'data-autofocus': props.autofocus === true || void 0,
          ...attributes.value
        }
      : attributes.value;

    return h('label', {
      ref: state.rootRef,
      class: [
        classes.value,
        attrs.class
      ],
      style: attrs.style,
      ...labelAttrs
    }, [
      slots.before !== void 0
        ? h('div', {
          class: 'q-field__before q-field__marginal row no-wrap items-center',
          onClick: prevent
        }, slots.before())
        : null,

      h('div', {
        class: 'q-field__inner relative-position col self-stretch'
      }, [
        h('div', {
          ref: state.controlRef,
          class: contentClass.value,
          tabindex: -1,
          ...state.controlEvents
        }, getContent()),

        shouldRenderBottom.value === true
          ? getBottom()
          : null
      ]),

      slots.after !== void 0
        ? h('div', {
          class: 'q-field__after q-field__marginal row no-wrap items-center',
          onClick: prevent
        }, slots.after())
        : null
    ])
  }
}

// leave NAMED_MASKS at top of file (code referenced from docs)
const NAMED_MASKS = {
  date: '####/##/##',
  datetime: '####/##/## ##:##',
  time: '##:##',
  fulltime: '##:##:##',
  phone: '(###) ### - ####',
  card: '#### #### #### ####'
};

const TOKENS = {
  '#': { pattern: '[\\d]', negate: '[^\\d]' },

  S: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]' },
  N: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]' },

  A: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]', transform: v => v.toLocaleUpperCase() },
  a: { pattern: '[a-zA-Z]', negate: '[^a-zA-Z]', transform: v => v.toLocaleLowerCase() },

  X: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]', transform: v => v.toLocaleUpperCase() },
  x: { pattern: '[0-9a-zA-Z]', negate: '[^0-9a-zA-Z]', transform: v => v.toLocaleLowerCase() }
};

const KEYS = Object.keys(TOKENS);
KEYS.forEach(key => {
  TOKENS[ key ].regex = new RegExp(TOKENS[ key ].pattern);
});

const
  tokenRegexMask = new RegExp('\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([' + KEYS.join('') + '])|(.)', 'g'),
  escRegex = /[.*+?^${}()|[\]\\]/g;

const MARKER = String.fromCharCode(1);

const useMaskProps = {
  mask: String,
  reverseFillMask: Boolean,
  fillMask: [ Boolean, String ],
  unmaskedValue: Boolean
};

function useMask (props, emit, emitValue, inputRef) {
  let maskMarked, maskReplaced, computedMask, computedUnmask, pastedTextStart, selectionAnchor;

  const hasMask = ref(null);
  const innerValue = ref(getInitialMaskedValue());

  function getIsTypeText () {
    return props.autogrow === true
      || [ 'textarea', 'text', 'search', 'url', 'tel', 'password' ].includes(props.type)
  }

  watch(() => props.type + props.autogrow, updateMaskInternals);

  watch(() => props.mask, v => {
    if (v !== void 0) {
      updateMaskValue(innerValue.value, true);
    }
    else {
      const val = unmaskValue(innerValue.value);
      updateMaskInternals();
      props.modelValue !== val && emit('update:modelValue', val);
    }
  });

  watch(() => props.fillMask + props.reverseFillMask, () => {
    hasMask.value === true && updateMaskValue(innerValue.value, true);
  });

  watch(() => props.unmaskedValue, () => {
    hasMask.value === true && updateMaskValue(innerValue.value);
  });

  function getInitialMaskedValue () {
    updateMaskInternals();

    if (hasMask.value === true) {
      const masked = maskValue(unmaskValue(props.modelValue));

      return props.fillMask !== false
        ? fillWithMask(masked)
        : masked
    }

    return props.modelValue
  }

  function getPaddedMaskMarked (size) {
    if (size < maskMarked.length) {
      return maskMarked.slice(-size)
    }

    let pad = '', localMaskMarked = maskMarked;
    const padPos = localMaskMarked.indexOf(MARKER);

    if (padPos > -1) {
      for (let i = size - localMaskMarked.length; i > 0; i--) {
        pad += MARKER;
      }

      localMaskMarked = localMaskMarked.slice(0, padPos) + pad + localMaskMarked.slice(padPos);
    }

    return localMaskMarked
  }

  function updateMaskInternals () {
    hasMask.value = props.mask !== void 0
      && props.mask.length !== 0
      && getIsTypeText();

    if (hasMask.value === false) {
      computedUnmask = void 0;
      maskMarked = '';
      maskReplaced = '';
      return
    }

    const
      localComputedMask = NAMED_MASKS[ props.mask ] === void 0
        ? props.mask
        : NAMED_MASKS[ props.mask ],
      fillChar = typeof props.fillMask === 'string' && props.fillMask.length !== 0
        ? props.fillMask.slice(0, 1)
        : '_',
      fillCharEscaped = fillChar.replace(escRegex, '\\$&'),
      unmask = [],
      extract = [],
      mask = [];

    let
      firstMatch = props.reverseFillMask === true,
      unmaskChar = '',
      negateChar = '';

    localComputedMask.replace(tokenRegexMask, (_, char1, esc, token, char2) => {
      if (token !== void 0) {
        const c = TOKENS[ token ];
        mask.push(c);
        negateChar = c.negate;
        if (firstMatch === true) {
          extract.push('(?:' + negateChar + '+)?(' + c.pattern + '+)?(?:' + negateChar + '+)?(' + c.pattern + '+)?');
          firstMatch = false;
        }
        extract.push('(?:' + negateChar + '+)?(' + c.pattern + ')?');
      }
      else if (esc !== void 0) {
        unmaskChar = '\\' + (esc === '\\' ? '' : esc);
        mask.push(esc);
        unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
      }
      else {
        const c = char1 !== void 0 ? char1 : char2;
        unmaskChar = c === '\\' ? '\\\\\\\\' : c.replace(escRegex, '\\\\$&');
        mask.push(c);
        unmask.push('([^' + unmaskChar + ']+)?' + unmaskChar + '?');
      }
    });

    const
      unmaskMatcher = new RegExp(
        '^'
        + unmask.join('')
        + '(' + (unmaskChar === '' ? '.' : '[^' + unmaskChar + ']') + '+)?'
        + (unmaskChar === '' ? '' : '[' + unmaskChar + ']*') + '$'
      ),
      extractLast = extract.length - 1,
      extractMatcher = extract.map((re, index) => {
        if (index === 0 && props.reverseFillMask === true) {
          return new RegExp('^' + fillCharEscaped + '*' + re)
        }
        else if (index === extractLast) {
          return new RegExp(
            '^' + re
            + '(' + (negateChar === '' ? '.' : negateChar) + '+)?'
            + (props.reverseFillMask === true ? '$' : fillCharEscaped + '*')
          )
        }

        return new RegExp('^' + re)
      });

    computedMask = mask;
    computedUnmask = val => {
      const unmaskMatch = unmaskMatcher.exec(props.reverseFillMask === true ? val : val.slice(0, mask.length + 1));
      if (unmaskMatch !== null) {
        val = unmaskMatch.slice(1).join('');
      }

      const
        extractMatch = [],
        extractMatcherLength = extractMatcher.length;

      for (let i = 0, str = val; i < extractMatcherLength; i++) {
        const m = extractMatcher[ i ].exec(str);

        if (m === null) {
          break
        }

        str = str.slice(m.shift().length);
        extractMatch.push(...m);
      }
      if (extractMatch.length !== 0) {
        return extractMatch.join('')
      }

      return val
    };
    maskMarked = mask.map(v => (typeof v === 'string' ? v : MARKER)).join('');
    maskReplaced = maskMarked.split(MARKER).join(fillChar);
  }

  function updateMaskValue (rawVal, updateMaskInternalsFlag, inputType) {
    const
      inp = inputRef.value,
      end = inp.selectionEnd,
      endReverse = inp.value.length - end,
      unmasked = unmaskValue(rawVal);

    // Update here so unmask uses the original fillChar
    updateMaskInternalsFlag === true && updateMaskInternals();

    const
      preMasked = maskValue(unmasked),
      masked = props.fillMask !== false
        ? fillWithMask(preMasked)
        : preMasked,
      changed = innerValue.value !== masked;

    // We want to avoid "flickering" so we set value immediately
    inp.value !== masked && (inp.value = masked);

    changed === true && (innerValue.value = masked);

    document.activeElement === inp && nextTick(() => {
      if (masked === maskReplaced) {
        const cursor = props.reverseFillMask === true ? maskReplaced.length : 0;
        inp.setSelectionRange(cursor, cursor, 'forward');

        return
      }

      if (inputType === 'insertFromPaste' && props.reverseFillMask !== true) {
        const maxEnd = inp.selectionEnd;
        let cursor = end - 1;
        // each non-marker char means we move once to right
        for (let i = pastedTextStart; i <= cursor && i < maxEnd; i++) {
          if (maskMarked[ i ] !== MARKER) {
            cursor++;
          }
        }
        moveCursor.right(inp, cursor);

        return
      }

      if ([ 'deleteContentBackward', 'deleteContentForward' ].indexOf(inputType) > -1) {
        const cursor = props.reverseFillMask === true
          ? (
              end === 0
                ? (masked.length > preMasked.length ? 1 : 0)
                : Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse) + 1)) + 1
            )
          : end;

        inp.setSelectionRange(cursor, cursor, 'forward');
        return
      }

      if (props.reverseFillMask === true) {
        if (changed === true) {
          const cursor = Math.max(0, masked.length - (masked === maskReplaced ? 0 : Math.min(preMasked.length, endReverse + 1)));

          if (cursor === 1 && end === 1) {
            inp.setSelectionRange(cursor, cursor, 'forward');
          }
          else {
            moveCursor.rightReverse(inp, cursor);
          }
        }
        else {
          const cursor = masked.length - endReverse;
          inp.setSelectionRange(cursor, cursor, 'backward');
        }
      }
      else {
        if (changed === true) {
          const cursor = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, end) - 1);
          moveCursor.right(inp, cursor);
        }
        else {
          const cursor = end - 1;
          moveCursor.right(inp, cursor);
        }
      }
    });

    const val = props.unmaskedValue === true
      ? unmaskValue(masked)
      : masked;

    String(props.modelValue) !== val && emitValue(val, true);
  }

  function moveCursorForPaste (inp, start, end) {
    const preMasked = maskValue(unmaskValue(inp.value));

    start = Math.max(0, maskMarked.indexOf(MARKER), Math.min(preMasked.length, start));
    pastedTextStart = start;

    inp.setSelectionRange(start, end, 'forward');
  }

  const moveCursor = {
    left (inp, cursor) {
      const noMarkBefore = maskMarked.slice(cursor - 1).indexOf(MARKER) === -1;
      let i = Math.max(0, cursor - 1);

      for (; i >= 0; i--) {
        if (maskMarked[ i ] === MARKER) {
          cursor = i;
          noMarkBefore === true && cursor++;
          break
        }
      }

      if (
        i < 0
        && maskMarked[ cursor ] !== void 0
        && maskMarked[ cursor ] !== MARKER
      ) {
        return moveCursor.right(inp, 0)
      }

      cursor >= 0 && inp.setSelectionRange(cursor, cursor, 'backward');
    },

    right (inp, cursor) {
      const limit = inp.value.length;
      let i = Math.min(limit, cursor + 1);

      for (; i <= limit; i++) {
        if (maskMarked[ i ] === MARKER) {
          cursor = i;
          break
        }
        else if (maskMarked[ i - 1 ] === MARKER) {
          cursor = i;
        }
      }

      if (
        i > limit
        && maskMarked[ cursor - 1 ] !== void 0
        && maskMarked[ cursor - 1 ] !== MARKER
      ) {
        return moveCursor.left(inp, limit)
      }

      inp.setSelectionRange(cursor, cursor, 'forward');
    },

    leftReverse (inp, cursor) {
      const
        localMaskMarked = getPaddedMaskMarked(inp.value.length);
      let i = Math.max(0, cursor - 1);

      for (; i >= 0; i--) {
        if (localMaskMarked[ i - 1 ] === MARKER) {
          cursor = i;
          break
        }
        else if (localMaskMarked[ i ] === MARKER) {
          cursor = i;
          if (i === 0) {
            break
          }
        }
      }

      if (
        i < 0
        && localMaskMarked[ cursor ] !== void 0
        && localMaskMarked[ cursor ] !== MARKER
      ) {
        return moveCursor.rightReverse(inp, 0)
      }

      cursor >= 0 && inp.setSelectionRange(cursor, cursor, 'backward');
    },

    rightReverse (inp, cursor) {
      const
        limit = inp.value.length,
        localMaskMarked = getPaddedMaskMarked(limit),
        noMarkBefore = localMaskMarked.slice(0, cursor + 1).indexOf(MARKER) === -1;
      let i = Math.min(limit, cursor + 1);

      for (; i <= limit; i++) {
        if (localMaskMarked[ i - 1 ] === MARKER) {
          cursor = i;
          cursor > 0 && noMarkBefore === true && cursor--;
          break
        }
      }

      if (
        i > limit
        && localMaskMarked[ cursor - 1 ] !== void 0
        && localMaskMarked[ cursor - 1 ] !== MARKER
      ) {
        return moveCursor.leftReverse(inp, limit)
      }

      inp.setSelectionRange(cursor, cursor, 'forward');
    }
  };

  function onMaskedClick (e) {
    emit('click', e);

    selectionAnchor = void 0;
  }

  function onMaskedKeydown (e) {
    emit('keydown', e);

    if (shouldIgnoreKey(e) === true) {
      return
    }

    const
      inp = inputRef.value,
      start = inp.selectionStart,
      end = inp.selectionEnd;

    if (!e.shiftKey) {
      selectionAnchor = void 0;
    }

    if (e.keyCode === 37 || e.keyCode === 39) { // Left / Right
      if (e.shiftKey && selectionAnchor === void 0) {
        selectionAnchor = inp.selectionDirection === 'forward' ? start : end;
      }

      const fn = moveCursor[ (e.keyCode === 39 ? 'right' : 'left') + (props.reverseFillMask === true ? 'Reverse' : '') ];

      e.preventDefault();
      fn(inp, selectionAnchor === start ? end : start);

      if (e.shiftKey) {
        const cursor = inp.selectionStart;
        inp.setSelectionRange(Math.min(selectionAnchor, cursor), Math.max(selectionAnchor, cursor), 'forward');
      }
    }
    else if (
      e.keyCode === 8 // Backspace
      && props.reverseFillMask !== true
      && start === end
    ) {
      moveCursor.left(inp, start);
      inp.setSelectionRange(inp.selectionStart, end, 'backward');
    }
    else if (
      e.keyCode === 46 // Delete
      && props.reverseFillMask === true
      && start === end
    ) {
      moveCursor.rightReverse(inp, end);
      inp.setSelectionRange(start, inp.selectionEnd, 'forward');
    }
  }

  function maskValue (val) {
    if (val === void 0 || val === null || val === '') { return '' }

    if (props.reverseFillMask === true) {
      return maskValueReverse(val)
    }

    const mask = computedMask;

    let valIndex = 0, output = '';

    for (let maskIndex = 0; maskIndex < mask.length; maskIndex++) {
      const
        valChar = val[ valIndex ],
        maskDef = mask[ maskIndex ];

      if (typeof maskDef === 'string') {
        output += maskDef;
        valChar === maskDef && valIndex++;
      }
      else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        output += maskDef.transform !== void 0
          ? maskDef.transform(valChar)
          : valChar;
        valIndex++;
      }
      else {
        return output
      }
    }

    return output
  }

  function maskValueReverse (val) {
    const
      mask = computedMask,
      firstTokenIndex = maskMarked.indexOf(MARKER);

    let valIndex = val.length - 1, output = '';

    for (let maskIndex = mask.length - 1; maskIndex >= 0 && valIndex > -1; maskIndex--) {
      const maskDef = mask[ maskIndex ];

      let valChar = val[ valIndex ];

      if (typeof maskDef === 'string') {
        output = maskDef + output;
        valChar === maskDef && valIndex--;
      }
      else if (valChar !== void 0 && maskDef.regex.test(valChar)) {
        do {
          output = (maskDef.transform !== void 0 ? maskDef.transform(valChar) : valChar) + output;
          valIndex--;
          valChar = val[ valIndex ];
        // eslint-disable-next-line no-unmodified-loop-condition
        } while (firstTokenIndex === maskIndex && valChar !== void 0 && maskDef.regex.test(valChar))
      }
      else {
        return output
      }
    }

    return output
  }

  function unmaskValue (val) {
    return typeof val !== 'string' || computedUnmask === void 0
      ? (typeof val === 'number' ? computedUnmask('' + val) : val)
      : computedUnmask(val)
  }

  function fillWithMask (val) {
    if (maskReplaced.length - val.length <= 0) {
      return val
    }

    return props.reverseFillMask === true && val.length !== 0
      ? maskReplaced.slice(0, -val.length) + val
      : val + maskReplaced.slice(val.length)
  }

  return {
    innerValue,
    hasMask,
    moveCursorForPaste,
    updateMaskValue,
    onMaskedKeydown,
    onMaskedClick
  }
}

const useFormProps = {
  name: String
};

function useFormInputNameAttr (props) {
  return computed(() => props.name || props.for)
}

function useFileFormDomProps (props, typeGuard) {
  function getFormDomProps () {
    const model = props.modelValue;

    try {
      const dt = 'DataTransfer' in window
        ? new DataTransfer()
        : ('ClipboardEvent' in window
            ? new ClipboardEvent('').clipboardData
            : void 0
          );

      if (Object(model) === model) {
        ('length' in model
          ? Array.from(model)
          : [ model ]
        ).forEach(file => {
          dt.items.add(file);
        });
      }

      return {
        files: dt.files
      }
    }
    catch (e) {
      return {
        files: void 0
      }
    }
  }

  return typeGuard === true
    ? computed(() => {
      if (props.type !== 'file') {
        return
      }

      return getFormDomProps()
    })
    : computed(getFormDomProps)
}

const isJapanese = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
const isChinese = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
const isKorean = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
const isPlainText = /[a-z0-9_ -]$/i;

function useKeyComposition (onInput) {
  return function onComposition (e) {
    if (e.type === 'compositionend' || e.type === 'change') {
      if (e.target.qComposing !== true) { return }
      e.target.qComposing = false;
      onInput(e);
    }
    else if (
      e.type === 'compositionupdate'
      && e.target.qComposing !== true
      && typeof e.data === 'string'
    ) {
      const isComposing = client.is.firefox === true
        ? isPlainText.test(e.data) === false
        : isJapanese.test(e.data) === true || isChinese.test(e.data) === true || isKorean.test(e.data) === true;

      if (isComposing === true) {
        e.target.qComposing = true;
      }
    }
  }
}

const QInput = createComponent({
  name: 'QInput',

  inheritAttrs: false,

  props: {
    ...useFieldProps,
    ...useMaskProps,
    ...useFormProps,

    modelValue: { required: false },

    shadowText: String,

    type: {
      type: String,
      default: 'text'
    },

    debounce: [ String, Number ],

    autogrow: Boolean, // makes a textarea

    inputClass: [ Array, String, Object ],
    inputStyle: [ Array, String, Object ]
  },

  emits: [
    ...useFieldEmits,
    'paste', 'change',
    'keydown', 'click', 'animationend'
  ],

  setup (props, { emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;

    const temp = {};
    let emitCachedValue = NaN, typedNumber, stopValueWatcher, emitTimer = null, emitValueFn;

    const inputRef = ref(null);
    const nameProp = useFormInputNameAttr(props);

    const {
      innerValue,
      hasMask,
      moveCursorForPaste,
      updateMaskValue,
      onMaskedKeydown,
      onMaskedClick
    } = useMask(props, emit, emitValue, inputRef);

    const formDomProps = useFileFormDomProps(props, /* type guard */ true);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));

    const onComposition = useKeyComposition(onInput);

    const state = useFieldState();

    const isTextarea = computed(() =>
      props.type === 'textarea' || props.autogrow === true
    );

    const isTypeText = computed(() =>
      isTextarea.value === true
      || [ 'text', 'search', 'url', 'tel', 'password' ].includes(props.type)
    );

    const onEvents = computed(() => {
      const evt = {
        ...state.splitAttrs.listeners.value,
        onInput,
        onPaste,
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        onChange,
        onBlur: onFinishEditing,
        onFocus: stop
      };

      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;

      if (hasMask.value === true) {
        evt.onKeydown = onMaskedKeydown;
        // reset selection anchor on pointer selection
        evt.onClick = onMaskedClick;
      }

      if (props.autogrow === true) {
        evt.onAnimationend = onAnimationend;
      }

      return evt
    });

    const inputAttrs = computed(() => {
      const attrs = {
        tabindex: 0,
        'data-autofocus': props.autofocus === true || void 0,
        rows: props.type === 'textarea' ? 6 : void 0,
        'aria-label': props.label,
        name: nameProp.value,
        ...state.splitAttrs.attributes.value,
        id: state.targetUid.value,
        maxlength: props.maxlength,
        disabled: props.disable === true,
        readonly: props.readonly === true
      };

      if (isTextarea.value === false) {
        attrs.type = props.type;
      }

      if (props.autogrow === true) {
        attrs.rows = 1;
      }

      return attrs
    });

    // some browsers lose the native input value
    // so we need to reattach it dynamically
    // (like type="password" <-> type="text"; see #12078)
    watch(() => props.type, () => {
      if (inputRef.value) {
        inputRef.value.value = props.modelValue;
      }
    });

    watch(() => props.modelValue, v => {
      if (hasMask.value === true) {
        if (stopValueWatcher === true) {
          stopValueWatcher = false;

          if (String(v) === emitCachedValue) {
            return
          }
        }

        updateMaskValue(v);
      }
      else if (innerValue.value !== v) {
        innerValue.value = v;

        if (
          props.type === 'number'
          && temp.hasOwnProperty('value') === true
        ) {
          if (typedNumber === true) {
            typedNumber = false;
          }
          else {
            delete temp.value;
          }
        }
      }

      // textarea only
      props.autogrow === true && nextTick(adjustHeight);
    });

    watch(() => props.autogrow, val => {
      // textarea only
      if (val === true) {
        nextTick(adjustHeight);
      }
      // if it has a number of rows set respect it
      else if (inputRef.value !== null && attrs.rows > 0) {
        inputRef.value.style.height = 'auto';
      }
    });

    watch(() => props.dense, () => {
      props.autogrow === true && nextTick(adjustHeight);
    });

    function focus () {
      addFocusFn(() => {
        const el = document.activeElement;
        if (
          inputRef.value !== null
          && inputRef.value !== el
          && (el === null || el.id !== state.targetUid.value)
        ) {
          inputRef.value.focus({ preventScroll: true });
        }
      });
    }

    function select () {
      inputRef.value !== null && inputRef.value.select();
    }

    function onPaste (e) {
      if (hasMask.value === true && props.reverseFillMask !== true) {
        const inp = e.target;
        moveCursorForPaste(inp, inp.selectionStart, inp.selectionEnd);
      }

      emit('paste', e);
    }

    function onInput (e) {
      if (!e || !e.target) {
        return
      }

      if (props.type === 'file') {
        emit('update:modelValue', e.target.files);
        return
      }

      const val = e.target.value;

      if (e.target.qComposing === true) {
        temp.value = val;

        return
      }

      if (hasMask.value === true) {
        updateMaskValue(val, false, e.inputType);
      }
      else {
        emitValue(val);

        if (isTypeText.value === true && e.target === document.activeElement) {
          const { selectionStart, selectionEnd } = e.target;

          if (selectionStart !== void 0 && selectionEnd !== void 0) {
            nextTick(() => {
              if (e.target === document.activeElement && val.indexOf(e.target.value) === 0) {
                e.target.setSelectionRange(selectionStart, selectionEnd);
              }
            });
          }
        }
      }

      // we need to trigger it immediately too,
      // to avoid "flickering"
      props.autogrow === true && adjustHeight();
    }

    function onAnimationend (e) {
      emit('animationend', e);
      adjustHeight();
    }

    function emitValue (val, stopWatcher) {
      emitValueFn = () => {
        emitTimer = null;

        if (
          props.type !== 'number'
          && temp.hasOwnProperty('value') === true
        ) {
          delete temp.value;
        }

        if (props.modelValue !== val && emitCachedValue !== val) {
          emitCachedValue = val;

          stopWatcher === true && (stopValueWatcher = true);
          emit('update:modelValue', val);

          nextTick(() => {
            emitCachedValue === val && (emitCachedValue = NaN);
          });
        }

        emitValueFn = void 0;
      };

      if (props.type === 'number') {
        typedNumber = true;
        temp.value = val;
      }

      if (props.debounce !== void 0) {
        emitTimer !== null && clearTimeout(emitTimer);
        temp.value = val;
        emitTimer = setTimeout(emitValueFn, props.debounce);
      }
      else {
        emitValueFn();
      }
    }

    // textarea only
    function adjustHeight () {
      requestAnimationFrame(() => {
        const inp = inputRef.value;
        if (inp !== null) {
          const parentStyle = inp.parentNode.style;
          // chrome does not keep scroll #15498
          const { scrollTop } = inp;
          // chrome calculates a smaller scrollHeight when in a .column container
          const { overflowY, maxHeight } = $q.platform.is.firefox === true
            ? {}
            : window.getComputedStyle(inp);
          // on firefox or if overflowY is specified as scroll #14263, #14344
          // we don't touch overflow
          // firefox is not so bad in the end
          const changeOverflow = overflowY !== void 0 && overflowY !== 'scroll';

          // reset height of textarea to a small size to detect the real height
          // but keep the total control size the same
          changeOverflow === true && (inp.style.overflowY = 'hidden');
          parentStyle.marginBottom = (inp.scrollHeight - 1) + 'px';
          inp.style.height = '1px';

          inp.style.height = inp.scrollHeight + 'px';
          // we should allow scrollbars only
          // if there is maxHeight and content is taller than maxHeight
          changeOverflow === true && (inp.style.overflowY = parseInt(maxHeight, 10) < inp.scrollHeight ? 'auto' : 'hidden');
          parentStyle.marginBottom = '';
          inp.scrollTop = scrollTop;
        }
      });
    }

    function onChange (e) {
      onComposition(e);

      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }

      emitValueFn !== void 0 && emitValueFn();

      emit('change', e.target.value);
    }

    function onFinishEditing (e) {
      e !== void 0 && stop(e);

      if (emitTimer !== null) {
        clearTimeout(emitTimer);
        emitTimer = null;
      }

      emitValueFn !== void 0 && emitValueFn();

      typedNumber = false;
      stopValueWatcher = false;
      delete temp.value;

      // we need to use setTimeout instead of this.$nextTick
      // to avoid a bug where focusout is not emitted for type date/time/week/...
      props.type !== 'file' && setTimeout(() => {
        if (inputRef.value !== null) {
          inputRef.value.value = innerValue.value !== void 0 ? innerValue.value : '';
        }
      });
    }

    function getCurValue () {
      return temp.hasOwnProperty('value') === true
        ? temp.value
        : (innerValue.value !== void 0 ? innerValue.value : '')
    }

    onBeforeUnmount(() => {
      onFinishEditing();
    });

    onMounted(() => {
      // textarea only
      props.autogrow === true && adjustHeight();
    });

    Object.assign(state, {
      innerValue,

      fieldClass: computed(() =>
        `q-${ isTextarea.value === true ? 'textarea' : 'input' }`
        + (props.autogrow === true ? ' q-textarea--autogrow' : '')
      ),

      hasShadow: computed(() =>
        props.type !== 'file'
        && typeof props.shadowText === 'string'
        && props.shadowText.length !== 0
      ),

      inputRef,

      emitValue,

      hasValue,

      floatingLabel: computed(() =>
        (
          hasValue.value === true
          && (props.type !== 'number' || isNaN(innerValue.value) === false)
        )
        || fieldValueIsFilled(props.displayValue)
      ),

      getControl: () => {
        return h(isTextarea.value === true ? 'textarea' : 'input', {
          ref: inputRef,
          class: [
            'q-field__native q-placeholder',
            props.inputClass
          ],
          style: props.inputStyle,
          ...inputAttrs.value,
          ...onEvents.value,
          ...(
            props.type !== 'file'
              ? { value: getCurValue() }
              : formDomProps.value
          )
        })
      },

      getShadowControl: () => {
        return h('div', {
          class: 'q-field__native q-field__shadow absolute-bottom no-pointer-events'
            + (isTextarea.value === true ? '' : ' text-no-wrap')
        }, [
          h('span', { class: 'invisible' }, getCurValue()),
          h('span', props.shadowText)
        ])
      }
    });

    const renderFn = useField(state);

    // expose public methods
    Object.assign(proxy, {
      focus,
      select,
      getNativeElement: () => inputRef.value // deprecated
    });

    injectProp(proxy, 'nativeEl', () => inputRef.value);

    return renderFn
  }
});

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ProfileUser",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_img = __nuxt_component_0$1;
      const _component_q_btn = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="inset-0 rounded-md w-full"><div style="${ssrRenderStyle({ "background": "#3f4655" })}" class="!w-1/3 square transform rotate-45 left-1/2 -translate-x-1/2 top-12 sm:top-28 md:top-10 lg:top-8 rounded-lg overflow-hidden text-center">`);
      _push(ssrRenderComponent(_component_q_img, {
        class: ["w-full transform -rotate-45", unref(store).state.User.avatar != null && "scale-[1.35]"],
        alt: "avatar",
        src: unref(store).state.User.avatar == null ? `/imgs/header/avatar${unref(store).state.User.gender}.png` : unref(store).state.User.avatar
      }, null, _parent));
      _push(`</div><div class="w-full text-center mt-24 sm:mt-40 md:mt-16 lg:mt-16"><div class="flex justify-center pb-2">`);
      _push(ssrRenderComponent(_component_q_btn, {
        size: "sm",
        color: "primary",
        "no-caps": "",
        label: ("tran" in _ctx ? _ctx.tran : unref(tran))("Update Profile Image", unref(store).state.lang),
        onClick: ($event) => {
          unref(store).commit("handleOnAvatarDialog", true);
        }
      }, null, _parent));
      _push(`</div><p class="font-bold text-xl pb-3">${ssrInterpolate(unref(store).state.User.username)}</p><p style="${ssrRenderStyle({ "color": "#ffffff8c" })}" class="text-sm pb-1">${ssrInterpolate(unref(store).state.User.email)}</p>`);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-7 mb-4 cursor-pointer",
        src: "/imgs/logout.png",
        onClick: ($event) => unref(logOut)(unref(store), unref(router))
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ProfileUser.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "gambling",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contentSection p-5" }, _attrs))}><div class="container text-white"><div class="text-base font-normal pl-5"><p class="pb-3">${ssrInterpolate(unref(tran)("rg1", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg2", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg3", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg4", unref(store).state.lang))}</p></div><h5 class="mt-4 text-3xl font-bold pb-3">${ssrInterpolate(unref(tran)("rg5", unref(store).state.lang))}</h5><div class="text-base font-normal pl-5"><p class="pb-3">${ssrInterpolate(unref(tran)("rg6", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg7", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg8", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg9", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg10", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg11", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg12", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg13", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg14", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg15", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg16", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg17", unref(store).state.lang))}</p><p class="pb-3">${ssrInterpolate(unref(tran)("rg18", unref(store).state.lang))}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/gambling.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PersonalInfo",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const old_password = ref("");
    const new_password = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_QIcon = __nuxt_component_3;
      const _component_QBtn = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "background": "#383d47" },
        class: "inset-0 rounded-md w-full px-7 py-6"
      }, _attrs))}><p class="text-base font-bold pb-2">${ssrInterpolate(unref(tran)("Personal", unref(store).state.lang))}</p><div class="grid grid-cols-1 lg:grid-cols-2 gap-4">`);
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("First Name", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.first_name,
        "onUpdate:modelValue": ($event) => unref(store).state.User.first_name = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "person" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "person" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("Last Name", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.last_name,
        "onUpdate:modelValue": ($event) => unref(store).state.User.last_name = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "person" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "person" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "email",
        placeholder: unref(tran)("Email", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.email,
        "onUpdate:modelValue": ($event) => unref(store).state.User.email = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` @ `);
          } else {
            return [
              createTextVNode(" @ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "tel",
        mask: "phone",
        placeholder: unref(tran)("Phone Number", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.phone,
        "onUpdate:modelValue": ($event) => unref(store).state.User.phone = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "phone" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "phone" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("Gender", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.gender,
        "onUpdate:modelValue": ($event) => unref(store).state.User.gender = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "person" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "person" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "date",
        placeholder: unref(tran)("Date of birth", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.dob,
        "onUpdate:modelValue": ($event) => unref(store).state.User.dob = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "event" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "event" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("Street Address", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.street_1_address,
        "onUpdate:modelValue": ($event) => unref(store).state.User.street_1_address = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "home" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "home" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("State", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.state,
        "onUpdate:modelValue": ($event) => unref(store).state.User.state = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "state" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "state" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("City", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.city,
        "onUpdate:modelValue": ($event) => unref(store).state.User.city = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "position" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "position" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full",
        type: "text",
        placeholder: unref(tran)("Country", unref(store).state.lang),
        standout: "",
        readonly: "",
        modelValue: unref(store).state.User.country,
        "onUpdate:modelValue": ($event) => unref(store).state.User.country = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "global" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "global" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><p class="text-base font-bold pb-2">${ssrInterpolate(unref(tran)("Credential", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full pt-4",
        type: "password",
        placeholder: unref(tran)("Old Password", unref(store).state.lang),
        standout: "",
        modelValue: old_password.value,
        "onUpdate:modelValue": ($event) => old_password.value = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "lock" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "lock" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(QInput), {
        class: "w-full pt-4",
        type: "password",
        placeholder: unref(tran)("New Password", unref(store).state.lang),
        standout: "",
        modelValue: new_password.value,
        "onUpdate:modelValue": ($event) => new_password.value = $event,
        dense: true
      }, {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_QIcon, { name: "lock" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_QIcon, { name: "lock" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="pt-4 text-sm">${ssrInterpolate(unref(tran)("Forgot your password? Reset the password", unref(store).state.lang))}</p></div></div>`);
      _push(ssrRenderComponent(_component_QBtn, {
        class: "mt-4 px-8",
        color: "primary",
        label: unref(tran)("Save", unref(store).state.lang),
        onClick: () => {
          unref(ResetPassword)({ "old_password": old_password.value, "new_password": new_password.value }, unref(store));
        }
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/PersonalInfo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Verification",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const options = ["Doc1", "Doc2", "Doc3", "Doc4", "Doc5"];
    const model = ref(null);
    const step = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_img = __nuxt_component_0$1;
      const _component_q_stepper = __nuxt_component_4;
      const _component_q_step = __nuxt_component_5;
      const _component_q_select = __nuxt_component_15;
      const _component_q_btn_group = __nuxt_component_0$3;
      const _component_q_icon = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "background": "#383d47" },
        class: "inset-0 rounded-md w-full px-7 py-6"
      }, _attrs))}><div style="${ssrRenderStyle({ "color": "rgba(152, 154, 159, 0.5)" })}" class="flex items-center justify-start pb-3"><span class="font-medium text-xs cursor-pointer">STEP 1 `);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-2 mx-3",
        src: "/imgs/right.png"
      }, null, _parent));
      _push(`</span><span class="font-medium text-xs cursor-pointer">STEP 2 `);
      _push(ssrRenderComponent(_component_q_img, {
        class: "w-2 mx-3",
        src: "/imgs/right.png"
      }, null, _parent));
      _push(`</span><span class="font-medium text-xs cursor-pointer">STEP 3</span></div>`);
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
                  _push3(`<div${_scopeId2}><p class="text-base font-bold pb-2"${_scopeId2}>${ssrInterpolate(unref(tran)("Identity", unref(store).state.lang))}</p><p class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(unref(tran)("identity", unref(store).state.lang))}</p><br${_scopeId2}><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#11a449" })}"${_scopeId2}>${ssrInterpolate(unref(tran)("iden1", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("iden2", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("iden3", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("iden4", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("iden5", unref(store).state.lang))}<br${_scopeId2}></p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Identity", unref(store).state.lang)), 1),
                      createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("identity", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createVNode("p", {
                        class: "text-sm font-medium",
                        style: { "color": "#11a449" }
                      }, [
                        createTextVNode(toDisplayString(unref(tran)("iden1", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("iden2", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("iden3", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("iden4", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("iden5", unref(store).state.lang)), 1),
                        createVNode("br")
                      ])
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
              done: step.value > 2
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p class="text-base font-bold pb-2"${_scopeId2}>${ssrInterpolate(unref(tran)("Address", unref(store).state.lang))}</p><p class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(unref(tran)("address", unref(store).state.lang))}</p><br${_scopeId2}><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#11a449" })}"${_scopeId2}>${ssrInterpolate(unref(tran)("add1", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("add2", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("add3", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("add4", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("add5", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("add6", unref(store).state.lang))}<br${_scopeId2}></p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Address", unref(store).state.lang)), 1),
                      createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("address", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createVNode("p", {
                        class: "text-sm font-medium",
                        style: { "color": "#11a449" }
                      }, [
                        createTextVNode(toDisplayString(unref(tran)("add1", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("add2", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("add3", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("add4", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("add5", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("add6", unref(store).state.lang)), 1),
                        createVNode("br")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_step, {
              name: 3,
              title: "STEP 3",
              done: step.value > 3
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><p class="text-base font-bold pb-2"${_scopeId2}>${ssrInterpolate(unref(tran)("Payment", unref(store).state.lang))}</p><p class="text-sm font-medium"${_scopeId2}>${ssrInterpolate(unref(tran)("payment", unref(store).state.lang))}</p><br${_scopeId2}><p class="text-sm font-medium" style="${ssrRenderStyle({ "color": "#11a449" })}"${_scopeId2}>${ssrInterpolate(unref(tran)("pay1", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("pay2", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("pay3", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("pay4", unref(store).state.lang))}<br${_scopeId2}> ${ssrInterpolate(unref(tran)("pay5", unref(store).state.lang))}<br${_scopeId2}></p></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Payment", unref(store).state.lang)), 1),
                      createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("payment", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createVNode("p", {
                        class: "text-sm font-medium",
                        style: { "color": "#11a449" }
                      }, [
                        createTextVNode(toDisplayString(unref(tran)("pay1", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("pay2", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("pay3", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("pay4", unref(store).state.lang)), 1),
                        createVNode("br"),
                        createTextVNode(" " + toDisplayString(unref(tran)("pay5", unref(store).state.lang)), 1),
                        createVNode("br")
                      ])
                    ])
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
                  createVNode("div", null, [
                    createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Identity", unref(store).state.lang)), 1),
                    createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("identity", unref(store).state.lang)), 1),
                    createVNode("br"),
                    createVNode("p", {
                      class: "text-sm font-medium",
                      style: { "color": "#11a449" }
                    }, [
                      createTextVNode(toDisplayString(unref(tran)("iden1", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("iden2", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("iden3", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("iden4", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("iden5", unref(store).state.lang)), 1),
                      createVNode("br")
                    ])
                  ])
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
                  createVNode("div", null, [
                    createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Address", unref(store).state.lang)), 1),
                    createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("address", unref(store).state.lang)), 1),
                    createVNode("br"),
                    createVNode("p", {
                      class: "text-sm font-medium",
                      style: { "color": "#11a449" }
                    }, [
                      createTextVNode(toDisplayString(unref(tran)("add1", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("add2", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("add3", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("add4", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("add5", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("add6", unref(store).state.lang)), 1),
                      createVNode("br")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["done"]),
              createVNode(_component_q_step, {
                name: 3,
                title: "STEP 3",
                done: step.value > 3
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("p", { class: "text-base font-bold pb-2" }, toDisplayString(unref(tran)("Payment", unref(store).state.lang)), 1),
                    createVNode("p", { class: "text-sm font-medium" }, toDisplayString(unref(tran)("payment", unref(store).state.lang)), 1),
                    createVNode("br"),
                    createVNode("p", {
                      class: "text-sm font-medium",
                      style: { "color": "#11a449" }
                    }, [
                      createTextVNode(toDisplayString(unref(tran)("pay1", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("pay2", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("pay3", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("pay4", unref(store).state.lang)), 1),
                      createVNode("br"),
                      createTextVNode(" " + toDisplayString(unref(tran)("pay5", unref(store).state.lang)), 1),
                      createVNode("br")
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["done"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_q_select, {
        class: "w-1/2 mt-4",
        standout: "text-white",
        modelValue: model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        options,
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn_group, {
        rounded: "",
        class: "mt-4",
        style: { "background-color": "#2b303c" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="q-pl-md q-pt-sm q-pb-sm q-pr-md rounded-3xl flex justify-start items-center cursor-pointer" style="${ssrRenderStyle({ "background-color": "#383d47" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_q_icon, {
              name: "upload",
              class: "pr-1"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(unref(tran)("Choose File", unref(store).state.lang))}</div><div class="q-pl-md q-pt-sm q-pb-sm q-pr-md flex justify-start items-center cursor-pointer"${_scopeId}>${ssrInterpolate(unref(tran)("No file chosen", unref(store).state.lang))}</div>`);
          } else {
            return [
              createVNode("div", {
                class: "q-pl-md q-pt-sm q-pb-sm q-pr-md rounded-3xl flex justify-start items-center cursor-pointer",
                style: { "background-color": "#383d47" }
              }, [
                createVNode(_component_q_icon, {
                  name: "upload",
                  class: "pr-1"
                }),
                createTextVNode(" " + toDisplayString(unref(tran)("Choose File", unref(store).state.lang)), 1)
              ]),
              createVNode("div", { class: "q-pl-md q-pt-sm q-pb-sm q-pr-md flex justify-start items-center cursor-pointer" }, toDisplayString(unref(tran)("No file chosen", unref(store).state.lang)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Verification.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "History",
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
            getGameHistory(store.state.pageNumber + 1, store, router);
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
        name: "game",
        label: tran("Game", store.state.lang),
        align: "left",
        field: "game"
      },
      {
        name: "type",
        align: "left",
        label: tran("Type", store.state.lang),
        field: "type"
      },
      {
        name: "bet_amount",
        align: "left",
        label: tran("BetSum", store.state.lang),
        field: "bet_amount"
      },
      {
        name: "win_amount",
        align: "left",
        label: tran("WinSum", store.state.lang),
        field: "win_amount"
      },
      {
        name: "player_balance",
        align: "left",
        label: tran("Balance", store.state.lang),
        field: "player_balance"
      },
      {
        name: "currency",
        align: "left",
        label: tran("Currency", store.state.lang),
        field: "currency"
      },
      {
        name: "created_at",
        align: "left",
        label: tran("Time", store.state.lang),
        field: "created_at"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_table = __nuxt_component_1;
      const _component_q_tr = __nuxt_component_2;
      const _component_q_td = __nuxt_component_3$1;
      const _component_q_btn = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_q_table, mergeProps({
        rows: unref(rows),
        columns: cols,
        pagination: pagination.value,
        "onUpdate:pagination": ($event) => pagination.value = $event
      }, _attrs), {
        body: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_tr, { props }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "index",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.rowIndex + 1)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "game",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.game)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.game), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "type",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.type)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.type), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "bet_amount",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.bet_amount)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.bet_amount), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "win_amount",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.win_amount)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.win_amount), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "player_balance",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.player_balance)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.player_balance), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "currency",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.currency)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.currency), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_q_td, {
                    key: "created_at",
                    props
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.row.created_at)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.row.created_at), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
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
                      key: "game",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.game), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(_component_q_td, {
                      key: "type",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.type), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(_component_q_td, {
                      key: "bet_amount",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.bet_amount), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(_component_q_td, {
                      key: "win_amount",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.win_amount), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(_component_q_td, {
                      key: "player_balance",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.player_balance), 1)
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
                      key: "created_at",
                      props
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.row.created_at), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
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
                    key: "game",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.game), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"]),
                  createVNode(_component_q_td, {
                    key: "type",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.type), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"]),
                  createVNode(_component_q_td, {
                    key: "bet_amount",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.bet_amount), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"]),
                  createVNode(_component_q_td, {
                    key: "win_amount",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.win_amount), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"]),
                  createVNode(_component_q_td, {
                    key: "player_balance",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.player_balance), 1)
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
                    key: "created_at",
                    props
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.row.created_at), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 2
              }, 1032, ["props"])
            ];
          }
        }),
        pagination: withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_q_btn, {
              icon: "chevron_left",
              color: "grey-8",
              round: "",
              dense: "",
              flat: "",
              disable: scope.isFirstPage,
              onClick: ($event) => prevPage(scope.prevPage)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_q_btn, {
              icon: "chevron_right",
              color: "grey-8",
              round: "",
              dense: "",
              flat: "",
              onClick: ($event) => nextPage(scope.nextPage)
            }, null, _parent2, _scopeId));
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/History.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResponsibleGambling",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const shape = ref([""]);
    const number = ref(0);
    const limits = [
      {
        title: "Deposit Limits",
        content: "Your account can be set with deposit limits. This setting limits the amount you can deposit per day, week or month."
      },
      {
        title: "Loss Limits",
        content: "Your account can be set with loss limits. This setting limits the amount you can lose per  day, week or month."
      },
      {
        title: "Wager Limits",
        content: "Your account can be set with wager limits. This setting controls the amount of  money you can wager per day, week or month."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_toggle = __nuxt_component_3$2;
      const _component_q_btn = __nuxt_component_0$2;
      const _component_q_input = __nuxt_component_6;
      const _component_q_select = __nuxt_component_15;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inset-0 rounded-md w-full px-7 pt-6 pb-10 relative" }, _attrs))}><div style="${ssrRenderStyle({ "background": "#383d47" })}" class="absolute w-full h-full opacity-50 top-0 left-0 rounded-md"></div><div class="relative"><div class="flex items-center justify-between pb-4"><p class="text-base font-bold">${ssrInterpolate(unref(tran)("Responsible Gambling", unref(store).state.lang))}</p>`);
      _push(ssrRenderComponent(_component_q_toggle, {
        size: "xs",
        modelValue: unref(shape),
        "onUpdate:modelValue": ($event) => isRef(shape) ? shape.value = $event : null,
        val: "xs",
        leftLabel: "",
        label: unref(tran)("Advanced Mode", unref(store).state.lang)
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(limits, (limit) => {
        _push(`<div${ssrRenderAttr("limit", limit)} style="${ssrRenderStyle({ "background": "#494e5d" })}" class="py-4 px-2 text-center rounded-md"><p class="text-base pb-3 font-bold">${ssrInterpolate(unref(tran)(limit == null ? void 0 : limit.title, unref(store).state.lang))}</p><p style="${ssrRenderStyle({ "min-height": "86px" })}" class="text-xs font-medium pb-3">${ssrInterpolate(unref(tran)(limit == null ? void 0 : limit.content, unref(store).state.lang))}</p>`);
        _push(ssrRenderComponent(_component_q_btn, {
          class: "!text-base",
          color: "primary",
          label: unref(tran)("Add New", unref(store).state.lang)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="grid grid-cols-1 gap-4 pt-4"><div style="${ssrRenderStyle({ "background": "#494e5d" })}" class="py-4 px-2 rounded-md"><p class="text-base pb-3 font-bold">${ssrInterpolate(unref(tran)("Session Limit", unref(store).state.lang))}</p><p class="text-xs font-medium pb-3">${ssrInterpolate(unref(tran)("sessionlimit", unref(store).state.lang))}</p><div class="flex items-center justify-start">`);
      _push(ssrRenderComponent(_component_q_input, {
        class: "w-1/2 pr-2",
        filled: "",
        modelValue: unref(number),
        "onUpdate:modelValue": ($event) => isRef(number) ? number.value = $event : null,
        type: "number",
        suffix: unref(tran)("Min", unref(store).state.lang),
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: unref(tran)("SET", unref(store).state.lang)
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "background": "#494e5d" })}" class="py-4 px-2 rounded-md"><p class="text-base pb-3 font-bold">${ssrInterpolate(unref(tran)("Cooling Off", unref(store).state.lang))}</p><p class="text-xs font-medium pb-3">${ssrInterpolate(unref(tran)("coolingoff", unref(store).state.lang))}</p><div class="flex items-center justify-start">`);
      _push(ssrRenderComponent(_component_q_select, {
        class: "w-1/2 pr-2",
        standout: "text-white",
        placeholder: unref(tran)("Document Type", unref(store).state.lang),
        modelValue: unref(shape),
        "onUpdate:modelValue": ($event) => isRef(shape) ? shape.value = $event : null,
        options: [],
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: unref(tran)("SET", unref(store).state.lang)
      }, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "background": "#494e5d" })}" class="py-4 px-2 rounded-md"><p class="text-base pb-3 font-bold">${ssrInterpolate(unref(tran)("Self Exclusion", unref(store).state.lang))}</p><p class="text-xs font-medium pb-3">${ssrInterpolate(unref(tran)("selfexclusion", unref(store).state.lang))}</p><div class="flex items-center justify-start">`);
      _push(ssrRenderComponent(_component_q_select, {
        class: "w-1/2 pr-2",
        standout: "text-white",
        placeholder: unref(tran)("Document Type", unref(store).state.lang),
        modelValue: unref(shape),
        "onUpdate:modelValue": ($event) => isRef(shape) ? shape.value = $event : null,
        options: [],
        dense: true
      }, null, _parent));
      _push(ssrRenderComponent(_component_q_btn, {
        color: "primary",
        label: unref(tran)("SET", unref(store).state.lang)
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/ResponsibleGambling.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[tab]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const selectedItem = ref(linkToTab(route.params.tab.toString()));
    const categories = computed(() => [
      {
        name: "General Information",
        icon: "info",
        active: selectedItem.value === "General Information"
      },
      {
        name: "Verification",
        icon: "check",
        active: selectedItem.value === "Verification"
      },
      {
        name: "Game History",
        icon: "game",
        active: selectedItem.value === "Game History"
      },
      {
        name: "Responsible Gambling",
        icon: "hands",
        active: selectedItem.value === "Responsible Gambling"
      }
    ]);
    function selectCategory(val) {
      selectedItem.value = val;
      router.push(linkTo(`/profile/${tabToLink(val)}`));
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_q_page = __nuxt_component_0;
      const _component_ProfileUser = _sfc_main$6;
      const _component_CategoryBar = _sfc_main$8;
      const _component_profile_gambling = _sfc_main$5;
      _push(ssrRenderComponent(_component_q_page, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "max-width": "1450px" })}" class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto"${_scopeId}><section class="main h-full px-4"${_scopeId}><div class="grid grid-cols-12 gap-6"${_scopeId}><div class="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-3"${_scopeId}><p class="text-base font-bold py-3 text-center"${_scopeId}>${ssrInterpolate(unref(tran)("Profile", unref(store).state.lang))}</p>`);
            _push2(ssrRenderComponent(_component_ProfileUser, null, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-9"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CategoryBar, {
              selectCategory,
              categories: categories.value
            }, null, _parent2, _scopeId));
            _push2(`<div class="p-1"${_scopeId}></div>`);
            if (unref(selectedItem) === "Responsible Gambling") {
              _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Game History") {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "General Information") {
              _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(selectedItem) === "Verification") {
              _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (unref(selectedItem) === "Responsible Gambling") {
              _push2(`<div class="w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_profile_gambling, null, null, _parent2, _scopeId));
              _push2(`</div>`);
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
                  createVNode("div", { class: "grid grid-cols-12 gap-6" }, [
                    createVNode("div", { class: "col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-3" }, [
                      createVNode("p", { class: "text-base font-bold py-3 text-center" }, toDisplayString(unref(tran)("Profile", unref(store).state.lang)), 1),
                      createVNode(_component_ProfileUser)
                    ]),
                    createVNode("div", { class: "col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-9" }, [
                      createVNode(_component_CategoryBar, {
                        selectCategory,
                        categories: categories.value
                      }, null, 8, ["categories"]),
                      createVNode("div", { class: "p-1" }),
                      unref(selectedItem) === "Responsible Gambling" ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
                      unref(selectedItem) === "Game History" ? (openBlock(), createBlock(_sfc_main$2, { key: 1 })) : createCommentVNode("", true),
                      unref(selectedItem) === "General Information" ? (openBlock(), createBlock(_sfc_main$4, { key: 2 })) : createCommentVNode("", true),
                      unref(selectedItem) === "Verification" ? (openBlock(), createBlock(_sfc_main$3, { key: 3 })) : createCommentVNode("", true)
                    ])
                  ]),
                  unref(selectedItem) === "Responsible Gambling" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "w-full px-0 md:px-6 lg:px-14 py-8 m-auto font-sans font-medium"
                  }, [
                    createVNode(_component_profile_gambling)
                  ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Profile/[tab].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tab_-a08b2727.mjs.map
