import { c as createComponent } from "./component.e828bf96.js";
import { _ as _export_sfc, o as onBeforeMount, u as useTranslate, r as ref, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.1a1d4cd5.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("slider");
const _sfc_main = createDemo({
  setup() {
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          text: "\u5F53\u524D\u503C\uFF1A",
          title1: "\u57FA\u7840\u7528\u6CD5",
          title2: "\u53CC\u6ED1\u5757",
          title3: "\u6307\u5B9A\u9009\u62E9\u8303\u56F4",
          title4: "\u7981\u7528",
          title5: "\u6307\u5B9A\u6B65\u957F",
          vertical: "\u5782\u76F4\u65B9\u5411",
          customStyle: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
          customButton: "\u81EA\u5B9A\u4E49\u6309\u94AE"
        },
        "en-US": {
          text: "Current value: ",
          title1: "Basic Usage",
          title2: "Dual thumb mode",
          title3: "Range",
          title4: "Disabled",
          title5: "Step size",
          vertical: "Vertical",
          customStyle: "Custom Style",
          customButton: "Custom Button"
        }
      });
    });
    const value1 = ref(50);
    const value2 = ref([20, 60]);
    const value3 = ref(0);
    const value4 = ref(50);
    const value5 = ref(50);
    const value6 = ref(50);
    const value7 = ref(50);
    const value8 = ref(50);
    const value9 = ref([20, 60]);
    const onValue8Change = (e) => {
      value8.value = e.detail.value;
    };
    return {
      translate,
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      onValue8Change
    };
  }
});
const _hoisted_1 = { class: "demo slider-demo" };
const _hoisted_2 = ["value"];
const _hoisted_3 = ["value"];
const _hoisted_4 = ["value"];
const _hoisted_5 = ["value"];
const _hoisted_6 = ["value"];
const _hoisted_7 = { class: "vertical-container" };
const _hoisted_8 = ["value"];
const _hoisted_9 = ["value"];
const _hoisted_10 = ["value"];
const _hoisted_11 = {
  slot: "button",
  class: "custom-button"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title1")), 1),
    createBaseVNode("quark-slider", { value: _ctx.value1 }, null, 8, _hoisted_2),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title2")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value2,
      range: ""
    }, null, 8, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title3")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value3,
      min: "-50",
      max: "50"
    }, null, 8, _hoisted_4),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title4")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value4,
      disabled: ""
    }, null, 8, _hoisted_5),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("title5")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value5,
      step: "10"
    }, null, 8, _hoisted_6),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("vertical")), 1),
    createBaseVNode("div", _hoisted_7, [
      createBaseVNode("quark-slider", {
        value: _ctx.value6,
        vertical: ""
      }, null, 8, _hoisted_8)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customStyle")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value7,
      barHeight: "4px",
      activeColor: "#ee0a24"
    }, null, 8, _hoisted_9),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customButton")), 1),
    createBaseVNode("quark-slider", {
      value: _ctx.value8,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.onValue8Change && _ctx.onValue8Change(...args))
    }, [
      createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.value8), 1)
    ], 40, _hoisted_10)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
