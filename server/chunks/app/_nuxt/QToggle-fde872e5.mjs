import { computed, h } from 'vue';
import { a as __nuxt_component_3$1 } from './QBtn-973e1c12.mjs';
import { u as useCheckboxProps, a as useCheckboxEmits, b as useCheckbox } from './use-checkbox-4a396aff.mjs';
import { c as createComponent } from './translation-9652486b.mjs';

const __nuxt_component_3 = createComponent({
  name: "QToggle",
  props: {
    ...useCheckboxProps,
    icon: String,
    iconColor: String
  },
  emits: useCheckboxEmits,
  setup(props) {
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || props.icon
      );
      const color = computed(() => isTrue.value === true ? props.iconColor : null);
      return () => [
        h("div", { class: "q-toggle__track" }),
        h(
          "div",
          {
            class: "q-toggle__thumb absolute flex flex-center no-wrap"
          },
          icon.value !== void 0 ? [
            h(__nuxt_component_3$1, {
              name: icon.value,
              color: color.value
            })
          ] : void 0
        )
      ];
    }
    return useCheckbox("toggle", getInner);
  }
});

export { __nuxt_component_3 as _ };
//# sourceMappingURL=QToggle-fde872e5.mjs.map
