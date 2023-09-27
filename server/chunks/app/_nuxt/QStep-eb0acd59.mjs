import { getCurrentInstance, ref, computed, h, withDirectives, provide, Transition, inject, KeepAlive } from 'vue';
import { u as useDarkProps, b as useDark } from './Axios-0124dde3.mjs';
import { u as usePanelProps, a as usePanelEmits, b as usePanel, c as usePanelChildProps, d as useCache } from './use-panel-7f2518e1.mjs';
import { c as createComponent, b as hMergeSlot, h as hSlot, e as hDir } from './translation-9652486b.mjs';
import { s as stepperKey, e as emptyRenderFn } from './symbols-ee15851d.mjs';
import { a as __nuxt_component_3, R as Ripple } from './QBtn-973e1c12.mjs';

const StepHeader = createComponent({
  name: "StepHeader",
  props: {
    stepper: {},
    step: {},
    goToPanel: Function
  },
  setup(props, { attrs }) {
    const { proxy: { $q } } = getCurrentInstance();
    const blurRef = ref(null);
    const isActive = computed(() => props.stepper.modelValue === props.step.name);
    const isDisable = computed(() => {
      const opt = props.step.disable;
      return opt === true || opt === "";
    });
    const isError = computed(() => {
      const opt = props.step.error;
      return opt === true || opt === "";
    });
    const isDone = computed(() => {
      const opt = props.step.done;
      return isDisable.value === false && (opt === true || opt === "");
    });
    const headerNav = computed(() => {
      const opt = props.step.headerNav, nav = opt === true || opt === "" || opt === void 0;
      return isDisable.value === false && props.stepper.headerNav && nav;
    });
    const hasPrefix = computed(() => {
      return props.step.prefix && (isActive.value === false || props.stepper.activeIcon === "none") && (isError.value === false || props.stepper.errorIcon === "none") && (isDone.value === false || props.stepper.doneIcon === "none");
    });
    const icon = computed(() => {
      const defaultIcon = props.step.icon || props.stepper.inactiveIcon;
      if (isActive.value === true) {
        const icon2 = props.step.activeIcon || props.stepper.activeIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.active;
      }
      if (isError.value === true) {
        const icon2 = props.step.errorIcon || props.stepper.errorIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.error;
      }
      if (isDisable.value === false && isDone.value === true) {
        const icon2 = props.step.doneIcon || props.stepper.doneIcon;
        return icon2 === "none" ? defaultIcon : icon2 || $q.iconSet.stepper.done;
      }
      return defaultIcon;
    });
    const color = computed(() => {
      const errorColor = isError.value === true ? props.step.errorColor || props.stepper.errorColor : void 0;
      if (isActive.value === true) {
        const color2 = props.step.activeColor || props.stepper.activeColor || props.step.color;
        return color2 !== void 0 ? color2 : errorColor;
      }
      if (errorColor !== void 0) {
        return errorColor;
      }
      if (isDisable.value === false && isDone.value === true) {
        return props.step.doneColor || props.stepper.doneColor || props.step.color || props.stepper.inactiveColor;
      }
      return props.step.color || props.stepper.inactiveColor;
    });
    const classes = computed(() => {
      return "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (color.value !== void 0 ? ` text-${color.value}` : "") + (isError.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (hasPrefix.value === true ? "prefix" : "icon") : "") + (isActive.value === true ? " q-stepper__tab--active" : "") + (isDone.value === true ? " q-stepper__tab--done" : "") + (headerNav.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (isDisable.value === true ? " q-stepper__tab--disabled" : "");
    });
    const ripple = computed(() => props.stepper.headerNav !== true ? false : headerNav.value);
    function onActivate() {
      blurRef.value !== null && blurRef.value.focus();
      isActive.value === false && props.goToPanel(props.step.name);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 && isActive.value === false) {
        props.goToPanel(props.step.name);
      }
    }
    return () => {
      const data = { class: classes.value };
      if (headerNav.value === true) {
        data.onClick = onActivate;
        data.onKeyup = onKeyup;
        Object.assign(
          data,
          isDisable.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: attrs.tabindex || 0 }
        );
      }
      const child = [
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurRef }),
        h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [
          h("span", { class: "row flex-center" }, [
            hasPrefix.value === true ? props.step.prefix : h(__nuxt_component_3, { name: icon.value })
          ])
        ])
      ];
      if (props.step.title !== void 0 && props.step.title !== null) {
        const content = [
          h("div", { class: "q-stepper__title" }, props.step.title)
        ];
        if (props.step.caption !== void 0 && props.step.caption !== null) {
          content.push(
            h("div", { class: "q-stepper__caption" }, props.step.caption)
          );
        }
        child.push(
          h("div", {
            class: "q-stepper__label q-stepper__line relative-position"
          }, content)
        );
      }
      return withDirectives(
        h("div", data, child),
        [[Ripple, ripple.value]]
      );
    };
  }
});
const camelRE = /(-\w)/g;
function camelizeProps(props) {
  const acc = {};
  for (const key in props) {
    const newKey = key.replace(camelRE, (m) => m[1].toUpperCase());
    acc[newKey] = props[key];
  }
  return acc;
}
const __nuxt_component_4 = createComponent({
  name: "QStepper",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    flat: Boolean,
    bordered: Boolean,
    alternativeLabels: Boolean,
    headerNav: Boolean,
    contracted: Boolean,
    headerClass: String,
    inactiveColor: String,
    inactiveIcon: String,
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const {
      updatePanelsList,
      isValidPanelName,
      updatePanelIndex,
      getPanelContent,
      getPanels,
      panelDirectives,
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper
    } = usePanel();
    provide(stepperKey, computed(() => ({
      goToPanel,
      keepAliveProps,
      needsUniqueKeepAliveWrapper,
      ...props
    })));
    const classes = computed(
      () => `q-stepper q-stepper--${props.vertical === true ? "vertical" : "horizontal"}` + (props.flat === true ? " q-stepper--flat" : "") + (props.bordered === true ? " q-stepper--bordered" : "") + (isDark.value === true ? " q-stepper--dark q-dark" : "")
    );
    const headerClasses = computed(
      () => `q-stepper__header row items-stretch justify-between q-stepper__header--${props.alternativeLabels === true ? "alternative" : "standard"}-labels` + (props.flat === false || props.bordered === true ? " q-stepper__header--border" : "") + (props.contracted === true ? " q-stepper__header--contracted" : "") + (props.headerClass !== void 0 ? ` ${props.headerClass}` : "")
    );
    function getContent() {
      const top = hSlot(slots.message, []);
      if (props.vertical === true) {
        isValidPanelName(props.modelValue) && updatePanelIndex();
        const content = h("div", {
          class: "q-stepper__content"
        }, hSlot(slots.default));
        return top === void 0 ? [content] : top.concat(content);
      }
      return [
        h(
          "div",
          { class: headerClasses.value },
          getPanels().map((panel) => {
            const step = camelizeProps(panel.props);
            return h(StepHeader, {
              key: step.name,
              stepper: props,
              step,
              goToPanel
            });
          })
        ),
        top,
        hDir(
          "div",
          { class: "q-stepper__content q-panel-parent" },
          getPanelContent(),
          "cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ];
    }
    return () => {
      updatePanelsList(slots);
      return h("div", {
        class: classes.value
      }, hMergeSlot(slots.navigation, getContent()));
    };
  }
});
const QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer = null, timerFallback = null, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (timerFallback !== null) {
        clearTimeout(timerFallback);
        timerFallback = null;
      }
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
        el.style.overflowY = "hidden";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        el.style.overflowY = "hidden";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        timer = null;
        el.style.height = 0;
        animListener = (evt) => {
          timerFallback = null;
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
function getStepWrapper(slots) {
  return h("div", {
    class: "q-stepper__step-content"
  }, [
    h("div", {
      class: "q-stepper__step-inner"
    }, hSlot(slots.default))
  ]);
}
const PanelWrapper = {
  setup(_, { slots }) {
    return () => getStepWrapper(slots);
  }
};
const __nuxt_component_5 = createComponent({
  name: "QStep",
  props: {
    ...usePanelChildProps,
    icon: String,
    color: String,
    title: {
      type: String,
      required: true
    },
    caption: String,
    prefix: [String, Number],
    doneIcon: String,
    doneColor: String,
    activeIcon: String,
    activeColor: String,
    errorIcon: String,
    errorColor: String,
    headerNav: {
      type: Boolean,
      default: true
    },
    done: Boolean,
    error: Boolean,
    onScroll: [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $stepper = inject(stepperKey, emptyRenderFn);
    if ($stepper === emptyRenderFn) {
      console.error("QStep needs to be a child of QStepper");
      return emptyRenderFn;
    }
    const { getCacheWithFn } = useCache();
    const rootRef = ref(null);
    const isActive = computed(() => $stepper.value.modelValue === props.name);
    const scrollEvent = computed(() => $q.platform.is.ios !== true && $q.platform.is.chrome === true || isActive.value !== true || $stepper.value.vertical !== true ? {} : {
      onScroll(e) {
        const { target } = e;
        if (target.scrollTop > 0) {
          target.scrollTop = 0;
        }
        props.onScroll !== void 0 && emit("scroll", e);
      }
    });
    const contentKey = computed(() => typeof props.name === "string" || typeof props.name === "number" ? props.name : String(props.name));
    function getStepContent() {
      const vertical = $stepper.value.vertical;
      if (vertical === true && $stepper.value.keepAlive === true) {
        return h(
          KeepAlive,
          $stepper.value.keepAliveProps.value,
          isActive.value === true ? [
            h(
              $stepper.value.needsUniqueKeepAliveWrapper.value === true ? getCacheWithFn(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
              { key: contentKey.value },
              slots.default
            )
          ] : void 0
        );
      }
      return vertical !== true || isActive.value === true ? getStepWrapper(slots) : void 0;
    }
    return () => h(
      "div",
      { ref: rootRef, class: "q-stepper__step", role: "tabpanel", ...scrollEvent.value },
      $stepper.value.vertical === true ? [
        h(StepHeader, {
          stepper: $stepper.value,
          step: props,
          goToPanel: $stepper.value.goToPanel
        }),
        $stepper.value.animated === true ? h(QSlideTransition, getStepContent) : getStepContent()
      ] : [getStepContent()]
    );
  }
});

export { __nuxt_component_4 as _, __nuxt_component_5 as a };
//# sourceMappingURL=QStep-eb0acd59.mjs.map
