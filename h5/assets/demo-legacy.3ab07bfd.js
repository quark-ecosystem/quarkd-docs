;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="\nquark-icon[data-v-a092b524] {\n  margin-right: 0;\n}\n.custom[data-v-a092b524] {\n}\nspan[data-v-a092b524] {\n  margin: 0;\n}\n";document.head.appendChild(__vite_style__);System.register(['./component-legacy.6f748aff.js','./mobile-legacy.03becb2e.js','./index-legacy.9f8a9fd1.js','./index-legacy.faa0f8ff.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;pushScopeId=module.p;popScopeId=module.q;},function(){},function(){}],execute:function(){var demo_vue_vue_type_style_index_0_scoped_true_lang='';const{createDemo,translate}=createComponent("tabbar");const _sfc_main=createDemo({setup(){const data=ref({activeIndex:0,img1:"https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",img2:"https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png"});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",noicon:"不带图标",name:"默认激活菜单",badge:"徽标提示",color:"自定义颜色",event:"自定义切换事件(可制定路由切换)",fixed:"固定底部"},tabbar:{home:"首页",user:"我的",tel:"联系"}},"en-US":{title:{basic:"Basic Usage",noicon:"No Icon",name:"Default Active menu",badge:"Badge Tips",color:"Custom Color",event:"Custom Change Event",fixed:"Fixed"},tabbar:{home:"Home",user:"User",tel:"Tel"}}});});const onChange=({detail})=>{Toast.text(`当前选中：${detail.value}`);};return{data,onChange,translate};}});const _withScopeId=n=>(pushScopeId("data-v-a092b524"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo no-padding"};const _hoisted_2=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-home",{size:"20"},null,-1));const _hoisted_3=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-user",{size:"20"},null,-1));const _hoisted_4=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-tel",{size:"20"},null,-1));const _hoisted_5={active:"2"};const _hoisted_6={name:"home"};const _hoisted_7=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-home",{size:"20"},null,-1));const _hoisted_8={name:"user"};const _hoisted_9=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-user",{size:"20"},null,-1));const _hoisted_10={name:"tel"};const _hoisted_11=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-tel",{size:"20"},null,-1));const _hoisted_12=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-home",{size:"20"},null,-1));const _hoisted_13=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-user",{size:"20"},null,-1));const _hoisted_14=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-icon-tel",{size:"20"},null,-1));function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("quark-tabbar",{onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.onChange&&_ctx.onChange(...args))},[createBaseVNode("quark-tabbar-item",null,[_hoisted_2,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.home")),1)]),createBaseVNode("quark-tabbar-item",null,[_hoisted_3,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.user")),1)]),createBaseVNode("quark-tabbar-item",null,[_hoisted_4,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.tel")),1)])],32),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.noicon")),1),createBaseVNode("quark-tabbar",null,[createBaseVNode("quark-tabbar-item",null,toDisplayString(_ctx.translate("tabbar.home")),1),createBaseVNode("quark-tabbar-item",null,toDisplayString(_ctx.translate("tabbar.user")),1),createBaseVNode("quark-tabbar-item",null,toDisplayString(_ctx.translate("tabbar.tel")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.name")),1),createBaseVNode("quark-tabbar",_hoisted_5,[createBaseVNode("quark-tabbar-item",_hoisted_6,[_hoisted_7,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.home")),1)]),createBaseVNode("quark-tabbar-item",_hoisted_8,[_hoisted_9,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.user")),1)]),createBaseVNode("quark-tabbar-item",_hoisted_10,[_hoisted_11,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.tel")),1)])]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.fixed")),1),createBaseVNode("quark-tabbar",{onChange:_cache[1]||(_cache[1]=(...args)=>_ctx.onChange&&_ctx.onChange(...args)),fixed:""},[createBaseVNode("quark-tabbar-item",null,[_hoisted_12,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.home")),1)]),createBaseVNode("quark-tabbar-item",null,[_hoisted_13,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.user")),1)]),createBaseVNode("quark-tabbar-item",null,[_hoisted_14,createBaseVNode("div",null,toDisplayString(_ctx.translate("tabbar.tel")),1)])],32)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-a092b524"]]));}};});})();
