;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".tab-demo.demo {\n  padding: 70px 0 18px !important;\n  height: 3000px !important;\n}\n.tab-demo h2 {\n  margin-top: 0 !important;\n}\n.tab-demo .demo-item {\n  margin-bottom: 25px;\n}\n.tab-demo quark-tab-content {\n  padding: 30px;\n  min-height: 90px;\n}\n.tab-demo p {\n  padding: 0 8px;\n  font-size: 14px;\n}\n.tab-demo .height {\n  height: 700px;\n}\n:root {\n  --tab-item-shrink-width: 60px;\n  --tab-item-shrink-padding: 4px;\n}";document.head.appendChild(__vite_style__);System.register(['./mobile-legacy.df386207.js','./component-legacy.2ffeb8d2.js'],function(exports){'use strict';var _export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,createComponent;return{setters:[function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;},function(module){createComponent=module.c;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("tab");const _sfc_main=createDemo({setup(){const data=ref({active:1,activeName:"d",activeName1:"d",disabled:"true"});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",dark:"深色模式",name:"通过名称匹配",scroll:"横向滚动",click:"切换事件",sticky:"吸顶效果",shrink:"收缩布局"},selected:"当前选择：",tab:["标签1","标签2","标签3","标签4","标签5","标签6","标签7","标签8","标签9","标签10"],tabs:["标签1内容","标签2内容","标签3内容","标签4内容","标签5内容","标签6内容","标签7内容","标签8内容","标签9内容","标签10内容"]},"en-US":{title:{basic:"Basic Usage",dark:"Dark",name:"Match by Name",scroll:"Horizontal Scrolling",click:"Click Event",sticky:"Sticky Effect",shrink:"Shrink"},selected:"Currently Selected: ",tab:["Tab1","Tab2","Tab3","Tab4","Tab5","Tab6","Tab7","Tab8","Tab9","Tab10"],tabs:["Tab1 Content","Tab2 Content","Tab3 Content","Tab4 Content","Tab5 Content","Tab6 Content","Tab7 Content","Tab8 Content","Tab9 Content","Tab10 Content"]}});});const onChange=({detail})=>{data.value.activeName1=detail.name;data.value.disabled=!data.value.disabled;Toast.text(`${translate("selected")}`+detail.label);};return{data,onChange,translate};}});const _hoisted_1={class:"demo tab-demo"};const _hoisted_2={class:"demo-item"};const _hoisted_3=["activekey"];const _hoisted_4=["label"];const _hoisted_5=["label"];const _hoisted_6=["label"];const _hoisted_7=["label"];const _hoisted_8={class:"demo-item"};const _hoisted_9=["activekey"];const _hoisted_10=["label"];const _hoisted_11=["label"];const _hoisted_12=["label"];const _hoisted_13=["label"];const _hoisted_14={class:"demo-item"};const _hoisted_15=["activekey"];const _hoisted_16=["label"];const _hoisted_17=["label"];const _hoisted_18=["label"];const _hoisted_19=["label"];const _hoisted_20={class:"demo-item"};const _hoisted_21=["label"];const _hoisted_22=["label"];const _hoisted_23=["label"];const _hoisted_24=["label"];const _hoisted_25=["label"];const _hoisted_26=["label"];const _hoisted_27=["label"];const _hoisted_28=["label"];const _hoisted_29=["label"];const _hoisted_30=["label"];const _hoisted_31={class:"demo-item"};const _hoisted_32=["activekey"];const _hoisted_33=["label"];const _hoisted_34=["label"];const _hoisted_35=["label","disabled"];const _hoisted_36=["label"];const _hoisted_37={class:"demo-item"};const _hoisted_38={shrink:""};const _hoisted_39=["label"];const _hoisted_40=["label"];const _hoisted_41=["label"];const _hoisted_42=["label"];const _hoisted_43={class:"demo-item"};const _hoisted_44={sticky:"",offsettop:"17vw"};const _hoisted_45=["label"];const _hoisted_46=["label"];const _hoisted_47=["label"];const _hoisted_48=["label"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-tabs",{activekey:_ctx.data.active},[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0]},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_4),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1]},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_5),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2],disabled:""},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_6),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3]},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_7)],8,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.dark")),1),createBaseVNode("div",_hoisted_8,[createBaseVNode("quark-tabs",{dark:"",activekey:_ctx.data.active},[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0]},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_10),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1]},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_11),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2],disabled:""},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_12),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3]},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_13)],8,_hoisted_9)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.name")),1),createBaseVNode("div",_hoisted_14,[createBaseVNode("quark-tabs",{activekey:_ctx.data.activeName},[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0],name:"a"},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_16),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1],name:"b"},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_17),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2],disabled:"",name:"c"},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_18),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3],name:"d"},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_19)],8,_hoisted_15)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.scroll")),1),createBaseVNode("div",_hoisted_20,[createBaseVNode("quark-tabs",null,[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0]},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_21),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1]},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_22),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2]},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_23),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3]},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_24),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[4]},toDisplayString(_ctx.translate("tabs")[4]),9,_hoisted_25),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[5]},toDisplayString(_ctx.translate("tabs")[5]),9,_hoisted_26),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[6]},toDisplayString(_ctx.translate("tabs")[6]),9,_hoisted_27),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[7]},toDisplayString(_ctx.translate("tabs")[7]),9,_hoisted_28),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[8]},toDisplayString(_ctx.translate("tabs")[8]),9,_hoisted_29),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[9]},toDisplayString(_ctx.translate("tabs")[9]),9,_hoisted_30)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.click")),1),createBaseVNode("div",_hoisted_31,[createBaseVNode("quark-tabs",{activekey:_ctx.data.activeName1,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.onChange&&_ctx.onChange(...args))},[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0],name:"a"},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_33),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1],name:"b"},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_34),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2],disabled:_ctx.data.disabled,name:"c"},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_35),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3],name:"d"},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_36)],40,_hoisted_32)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.shrink")),1),createBaseVNode("div",_hoisted_37,[createBaseVNode("quark-tabs",_hoisted_38,[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0]},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_39),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1]},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_40),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2]},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_41),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3]},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_42)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.sticky")),1),createBaseVNode("div",_hoisted_43,[createBaseVNode("quark-tabs",_hoisted_44,[createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[0]},toDisplayString(_ctx.translate("tabs")[0]),9,_hoisted_45),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[1]},toDisplayString(_ctx.translate("tabs")[1]),9,_hoisted_46),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[2]},toDisplayString(_ctx.translate("tabs")[2]),9,_hoisted_47),createBaseVNode("quark-tab-content",{label:_ctx.translate('tab')[3]},toDisplayString(_ctx.translate("tabs")[3]),9,_hoisted_48)])])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
