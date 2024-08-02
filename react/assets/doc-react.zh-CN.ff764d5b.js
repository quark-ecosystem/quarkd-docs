import{d as a,c as t,a as u,o as n}from"./vue.e24f0ec1.js";const l={class:"markdown-body"},d=u(`<h1>Dialog \u5F39\u7A97</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p><p style="margin:10px 0;line-height:20px;font-size:12px;"> \u4E0D\u540C\u4E8E\u4E3B\u6D41\u7EC4\u4EF6\u5E93\u7684\u505A\u6CD5\uFF0CQuarkd \u6CA1\u6709\u5728\u201C\u524D\u4EBA\u201D\u80FD\u529B\u4E0A\u505A\u4E86\u590D\u5236/\u7C98\u8D34\uFF0C\u6211\u4EEC <span style="color:red;">\u79FB\u9664\u4E86\u51FD\u6570\u5F0F\u8C03\u7528</span> \u7684\u505A\u6CD5\uFF01 </p><p style="margin:10px 0;line-height:20px;font-size:12px;"> \u53C2\u8003\u6D4F\u89C8\u5668\u539F\u751F\u7EC4\u4EF6\uFF0C\u80FD\u901A\u8FC7js\u8C03\u7528\u5524\u8D77\u7684\u6BD4\u5982 alert \u7EC4\u4EF6\uFF0C\u5165\u53C2\u6BD4\u8F83\u5C11\uFF0C\u5B9A\u5236\u6027\u4E0D\u5F3A\uFF0C\u6240\u4EE5\u50CF\u8FD9\u79CD\u7EC4\u4EF6\u662F\u9002\u5408\u51FD\u6570\u5F0F\u8C03\u7528\u7684\uFF1B\u76F8\u6BD4\u4E8E\u5165\u53C2\u8F83\u591A\u7684dialog\u8FD9\u79CD\u91CD\u7EC4\u4EF6(\u5305\u542B\u8F83\u591A\u7684\u4EA4\u4E92\u903B\u8F91\uFF0Ccb\u51FD\u6570\uFF0C\u81EA\u5B9A\u4E49\u6837\u5F0F)\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u4F7F\u7528\u6807\u7B7E\u5F62\u5F0F\u53BB\u4F7F\u7528\u6BD4\u8F83\u201C\u4F18\u96C5/\u5408\u9002\u201D\u3002 </p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u5F39\u7A97</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>\u57FA\u7840\u5F39\u7A97<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u5F39\u7A97&quot;</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002&quot;</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u6B21\u8981\u6309\u94AE</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>\u6B21\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6B21\u8981\u6309\u94AE&quot;</span>
        <span class="hljs-attr">btnvertical</span>=<span class="hljs-string">{true}</span>
        <span class="hljs-attr">oktext</span>=<span class="hljs-string">&quot;\u4E3B\u8981\u6309\u94AE&quot;</span>
        <span class="hljs-attr">canceltext</span>=<span class="hljs-string">&quot;\u6B21\u8981\u6309\u94AE&quot;</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u5F39\u7A97\u7684\u5185\u5BB9\u4E0B\u662F\u4E24\u4E2A\u5177\u4F53\u7684\u64CD\u4F5C\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u4F1A\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u9875\u9762\uFF0C\u6240\u4EE5\u9700\u8981\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\uFF0C\u8BA9\u7528\u6237\u53EF\u4EE5\u5173\u95ED\u5F39\u7A97&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u65E0\u6807\u9898\u5F39\u7A97</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>\u65E0\u6807\u9898\u5F39\u7A97<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C&quot;</span>
      &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49 body | Footer | \u5173\u95ED\u6309\u94AE</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> showDialog = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };

  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{showDialog}</span>&gt;</span>\u81EA\u5B9A\u4E49 body | Footer | \u5173\u95ED\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u81EA\u5B9A\u4E49 body | Footer | \u5173\u95ED\u6309\u94AE&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">img</span>
          <span class="hljs-attr">onclick</span>=<span class="hljs-string">{close}</span>
          <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/JPuH-8dD23.png&quot;</span>
          <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;close&quot;</span>
          <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;close&quot;</span>
        /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6211\u662F\u81EA\u5B9A\u4E49body,\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom-footer&quot;</span>&gt;</span>
          {&quot; &quot;}
          \u81EA\u5B9A\u4E49footer{&quot; &quot;}
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>content</td><td>\u5185\u5BB9</td><td><code class="">string</code></td><td></td></tr><tr><td>oktext</td><td>\u786E\u5B9A\u6309\u94AE</td><td><code class="">string</code></td><td></td></tr><tr><td>canceltext</td><td>\u53D6\u6D88\u6309\u94AE</td><td><code class="">string</code></td><td></td></tr><tr><td>open</td><td>\u5F39\u7A97\u72B6\u6001</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>\u5F39\u7A97\u5C42\u7EA7</td><td><code class="">number</code></td><td><code class="">999</code></td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td><code class="">modal</code>\u3001<code class="">confirm</code></td><td><code class="">modal</code></td></tr><tr><td>btnvertical</td><td>\u6309\u94AE\u662F\u5426\u5782\u76F4\uFF0C\u9ED8\u8BA4\u6C34\u5E73</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>nofooter</td><td>\u662F\u5426\u663E\u793A\u5E95\u90E8</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideclose</td><td>\u662F\u5426\u9690\u85CF\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>maskclosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>autoclose</td><td>\u70B9\u51FB\u4E8B\u4EF6\u662F\u5426\u9ED8\u8BA4\u5173\u95ED</td><td><code class="">boolean</code></td><td><code class="">true</code></td></tr><tr><td>hide</td><td>autoclose \u4E3A false \u65F6\u5019\u51FD\u6570\u5F0F\u8C03\u7528\u624B\u52A8\u8BA9\u5F39\u7A97\u6D88\u5931, \u6EE1\u8DB3\u7075\u6D3B\u5F02\u6B65\u9700\u6C42 dialog.hide()</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onConfirm</td><td>\u786E\u5B9A\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u56DE\u8C03\u51FD\u6570</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>slot</td><td>\u81EA\u5B9A\u4E49\u5F39\u7A97 body</td></tr><tr><td>slot name=close</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\u5305\u62EC\u4F4D\u7F6E\u3001\u5927\u5C0F\u3001\u4EE5\u53CA\u7C7B\u578B</td></tr><tr><td>slot name=footer</td><td>\u81EA\u5B9A\u4E49\u811A\u90E8</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--dialog-width</code></td><td>\u5F39\u6846\u5BBD\u5EA6</td><td><code class="">320px</code></td></tr><tr><td><code class="">--dialog-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td></td></tr><tr><td><code class="">--dialog-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--dialog-title-font-family</code></td><td>\u6807\u9898\u5B57\u4F53</td><td></td></tr><tr><td><code class="">--dialog-title-line-height</code></td><td>\u6807\u9898\u884C\u9AD8</td><td></td></tr><tr><td><code class="">--dialog-title-font-weight</code></td><td>\u6807\u9898\u5B57\u91CD</td><td><code class="">700</code></td></tr><tr><td><code class="">--dialog-content-font-size</code></td><td>\u5185\u5BB9\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-color</code></td><td>\u5185\u5BB9\u5B57\u4F53\u989C\u8272</td><td><code class="">#5A6066</code></td></tr><tr><td><code class="">--dialog-content-font-weight</code></td><td>\u5185\u5BB9\u5B57\u91CD</td><td><code class="">400</code></td></tr><tr><td><code class="">--dialog-content-font-family</code></td><td>\u5185\u5BB9\u5B57\u4F53</td><td><code class="">14px</code></td></tr><tr><td><code class="">--dialog-content-line-height</code></td><td>\u5185\u5BB9\u884C\u9AD8</td><td><code class="">20px</code></td></tr><tr><td><code class="">--dialog-btn-border-radius</code></td><td>\u5E95\u90E8\u6309\u94AE\u5706\u89D2</td><td><code class="">8px</code></td></tr><tr><td><code class="">--dialog-btn-font-size</code></td><td>\u5E95\u90E8\u6309\u94AE\u5B57\u4F53\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td><code class="">--dialog-btn-height</code></td><td>\u5E95\u90E8\u6309\u94AE\u9AD8\u5EA6</td><td><code class="">40px</code></td></tr></tbody></table>`,23),e=[d],h={},F="",i=a({__name:"doc-react.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,o)=>(n(),t("div",l,e))}});export{i as default,F as excerpt,h as frontmatter};
