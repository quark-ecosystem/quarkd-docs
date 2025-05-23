import{d as a,c as n,a as t,o as l}from"./vue.35c7b340.js";const u={class:"markdown-body"},p=t(`<h1>CascadePicker \u7EA7\u8054\u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u7528\u4E8E\u591A\u7EA7\u8054\u52A8\u9009\u62E9\uFF0C\u5217\u5982\u5730\u533A\u9009\u62E9\u3002\u7EA7\u8054\u9009\u62E9\u7684\u6570\u636E\u5D4C\u5957\u6DF1\u5EA6\u9700\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u5982\u679C\u90E8\u5206\u9009\u9879\u6CA1\u6709\u5B50\u9009\u9879\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7A7A\u5B57\u7B26\u4E32\u8FDB\u884C\u5360\u4F4D\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { CascadePicker, CascadePickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D59\u6C5F&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u676D\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u897F\u6E56\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u4F59\u676D\u533A&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6E29\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9E7F\u57CE\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u74EF\u6D77\u533A&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u798F\u5EFA&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u798F\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9F13\u697C\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u53F0\u6C5F\u533A&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u53A6\u95E8&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u601D\u660E\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D77\u6CA7\u533A&quot;</span> }],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; CascadePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> values = detail.value
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;\uFF0C&quot;</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`\u5F53\u524D\u9009\u4E2D\uFF1A<span class="hljs-subst">\${values}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CascadePicker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u533A&quot;</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u5934\u90E8</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> DATA = [
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D59\u6C5F&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u676D\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u897F\u6E56\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u4F59\u676D\u533A&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6E29\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9E7F\u57CE\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u74EF\u6D77\u533A&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u798F\u5EFA&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u798F\u5DDE&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9F13\u697C\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u53F0\u6C5F\u533A&quot;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u53A6\u95E8&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u601D\u660E\u533A&quot;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D77\u6CA7\u533A&quot;</span> }],
      },
    ],
  },
  {
    <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5317\u4EAC&quot;</span>,
    <span class="hljs-attr">children</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;&quot;</span> }],
      },
    ],
  },
];
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; CascadePickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { current } = pickerRef;
    <span class="hljs-keyword">const</span> values = current
      .getValues()
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;\uFF0C&quot;</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`\u5F53\u524D\u9009\u4E2D\uFF1A<span class="hljs-subst">\${values}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// \u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns(DATA);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CascadePicker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u533A&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;head-container&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cancel&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
            \u53D6\u6D88
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>\u8BF7\u9009\u62E9\u5730\u533A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ensure&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleConfirm}</span>&gt;</span>
            \u786E\u5B9A
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">CascadePicker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>picker \u662F\u5426\u663E\u793A</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string</code></td><td></td></tr><tr><td>bottomhidden</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\uFF08\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u4F7F\u7528\uFF09</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>\u662F\u5426\u7981\u6B62\u906E\u7F69\u5C42\u70B9\u51FB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u906E\u7F69\u6216\u8005\u53D6\u6D88\u6309\u94AE</td><td><code class="">() =&gt; void </code></td><td><code class="">require</code></td></tr><tr><td>onConfirm</td><td>\u786E\u5B9A\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void </code></td><td><code class="">require</code></td></tr><tr><td>onChange</td><td>picker \u6539\u53D8\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: SelectedColumn[]}}\uFF09=&gt; void</code></td><td></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name=header</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setColumns</td><td>\u7528\u4E8E\u8BBE\u7F6E\u9009\u62E9\u5668\u6570\u636E</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u9009\u62E9\u5668\u9009\u4E2D\u7684\u6570\u636E\uFF0C\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u65F6\u4F7F\u7528</td><td><code class="">\uFF08\uFF09=&gt; SelectedColumn[] </code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">text</span>: string;
  children: PickerColumn[];
};

type SelectedColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};

</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--cascadepicker-title-font-size</code></td><td>\u6807\u9898\u5B57\u53F7</td><td><code class="">18px</code></td></tr><tr><td><code class="">--cascadepicker-title-color</code></td><td>\u6807\u9898\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--cascadepicker-title-font-weight</code></td><td>\u6807\u9898\u5B57\u91CD</td><td><code class="">500</code></td></tr><tr><td><code class="">--cascadepicker-title-font-family</code></td><td>\u6807\u9898\u5B57\u4F53</td><td><code class="">PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table>`,21),c=[p],d={},j="",i=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(l(),n("div",u,c))}});export{i as default,j as excerpt,d as frontmatter};
