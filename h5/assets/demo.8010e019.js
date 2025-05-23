import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as openBlock } from "./mobile.16a252f1.js";
import { c as createComponent } from "./component.fc3b00f7.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("overlay");
const _sfc_main = createDemo({
  setup() {
    const open = ref(false);
    const customOpen = ref(false);
    const click = () => {
      open.value = true;
    };
    const customClick = () => {
      customOpen.value = true;
    };
    const closed = () => {
      open.value = false;
    };
    const customClosed = () => {
      customOpen.value = false;
    };
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basicUsage: "\u57FA\u7840\u7528\u6CD5",
          context: "\u5D4C\u5165\u5185\u5BB9"
        },
        "en-US": {
          basicUsage: "Basic Usage",
          context: "Embedded Content"
        }
      });
    });
    return {
      open,
      customOpen,
      click,
      customClick,
      closed,
      customClosed,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["open"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["open"];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "content" }, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basicUsage")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("basicUsage"),
        islink: "",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.click && _ctx.click(...args))
      }, null, 8, _hoisted_2)
    ]),
    createBaseVNode("quark-overlay", {
      open: _ctx.open,
      onClose: _cache[1] || (_cache[1] = (...args) => _ctx.closed && _ctx.closed(...args))
    }, null, 40, _hoisted_3),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("context")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        type: "primary",
        title: _ctx.translate("context"),
        islink: "",
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.customClick && _ctx.customClick(...args))
      }, null, 8, _hoisted_4)
    ]),
    createBaseVNode("quark-overlay", {
      open: _ctx.customOpen,
      onClose: _cache[3] || (_cache[3] = (...args) => _ctx.customClosed && _ctx.customClosed(...args))
    }, _hoisted_7, 40, _hoisted_5)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
