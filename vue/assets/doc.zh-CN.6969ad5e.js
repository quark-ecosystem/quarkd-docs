import{d as a,c as n,a as t,o as u}from"./vue.acb82bcc.js";const l={class:"markdown-body"},p=t(`<h1>PickerView \u9009\u62E9\u5668\u89C6\u56FE</h1><h3>\u4ECB\u7ECD</h3><p>PickerView \u662F Picker \u7684\u5185\u5BB9\u533A\u57DF</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/pickerview&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-pickerview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickervieRef&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//\u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
      <span class="hljs-keyword">const</span> pickerView = <span class="hljs-built_in">this</span>.$refs.pickervieRef;
      pickerView.setColumns(
        [
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u661F\u671F\u4E00&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E09&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u56DB&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E94&#39;</span>]
          },
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>]
          }
        ]
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value)
    }
  }
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>\u81EA\u5B9A\u4E49\u6837\u5F0F<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5934\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-pickerview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;customPickerRef&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-pickerview&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">//\u6A21\u62DF\u5F02\u6B65\u83B7\u53D6\u6570\u636E</span>
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.pickerRef;
      picker.setColumns(
        [
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u6D59\u6C5F\u7701&#39;</span>]
          },
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
            <span class="hljs-attr">values</span>:  values: [<span class="hljs-string">&quot;\u676D\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5609\u5174&quot;</span>, <span class="hljs-string">&quot;\u7ECD\u5174&quot;</span>, <span class="hljs-string">&quot;\u5B81\u6CE2&quot;</span>, <span class="hljs-string">&quot;\u6E56\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5343\u5C9B\u6E56&quot;</span>],
          }
        ]
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value,   <span class="hljs-number">33333</span>)
    }
  }
};
</code></pre><p>\u5EFA\u8BAE\u90FD\u8BBE\u7F6E\u6210 <code class="">picker-item-hieght</code> \u7684 <code class="">n</code> \u500D</p><pre><code class="language-css"><span class="hljs-selector-class">.custom-pickerview</span> {
  --pickerview-item-<span class="hljs-attribute">height</span>: <span class="hljs-number">44px</span>;
  --pickerview-<span class="hljs-attribute">height</span>: <span class="hljs-number">220px</span>;
  --pickerview-row-<span class="hljs-attribute">top</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">88px</span>;
  --pickerview-row-<span class="hljs-attribute">bottom</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">88px</span>;
  --pickerview-current-<span class="hljs-attribute">top</span>: <span class="hljs-number">90px</span>;
}
</code></pre><h2>API</h2><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>picker \u6539\u53D8\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: SelectColumn[]}}\uFF09=&gt; void</code></td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setColumns</td><td>\u7528\u4E8E\u8BBE\u7F6E\u9009\u62E9\u5668\u6570\u636E</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u9009\u62E9\u5668\u9009\u4E2D\u7684\u6570\u636E\uFF0C\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u65F6\u4F7F\u7528</td><td><code class="">\uFF08\uFF09=&gt; SelectColumn[]</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> PickerColumn = {
  <span class="hljs-attr">values</span>: <span class="hljs-built_in">string</span>[];
  defaultIndex: <span class="hljs-built_in">number</span>; <span class="hljs-comment">// \u9ED8\u8BA4\u9009\u4E2D</span>
};

<span class="hljs-keyword">type</span> SelectColumn = {
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span>;
  index: <span class="hljs-built_in">number</span>;
};
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><h3>\u6CE8\u610F</h3><p><strong>\u81EA\u5B9A\u4E49\u53D8\u91CF\u7684\u65F6\u5019\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A pickerview-item-height \u7684 n \u500D</strong></p><table><thead><tr><th>\u53D8\u91CF\u540D</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>\u2013pickerview-item-height</td><td>\u6BCF\u884C\u7684\u9AD8\u5EA6\u7684</td><td><code class="">34px</code></td></tr><tr><td>\u2013pickerview-height</td><td>\u5BB9\u5668\u9AD8\u5EA6</td><td><code class="">170px</code></td></tr><tr><td>\u2013pickerview-row-top-mask-height</td><td>\u9876\u90E8\u900F\u660E\u906E\u7F69\u5C42\u9AD8\u5EA6</td><td><code class="">68px</code></td></tr><tr><td>\u2013pickerview-row-bottom-mask-height</td><td>\u5E95\u90E8\u900F\u660E\u906E\u7F69\u5C42\u9AD8\u5EA6</td><td><code class="">68px</code></td></tr><tr><td>\u2013pickerview-border</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u8FB9\u6846</td><td><code class="">1px solid #eee</code></td></tr><tr><td>\u2013pickerview-item-font-size</td><td>\u6BCF\u884C\u7684\u5B57\u4F53\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td>\u2013pickerview-item-color</td><td>\u6BCF\u884C\u7684\u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td>\u2013pickerview-current-top</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u884C\u7684\u4F4D\u7F6E, 2 \u500D\u9AD8\u5EA6 + \u4E0A\u4E0B\u8FB9\u6846</td><td><code class="">70px</code></td></tr></tbody></table>`,25),e=[p],i={},o="",j=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(u(),n("div",l,e))}});export{j as default,o as excerpt,i as frontmatter};
