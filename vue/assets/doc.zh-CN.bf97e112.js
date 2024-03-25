import{d as a,c as t,a as u,o as l}from"./vue.acb82bcc.js";const n={class:"markdown-body"},c=u(`<h1>Circle \u73AF\u5F62\u7684\u8FDB\u5EA6</h1><h3>\u4ECB\u7ECD</h3><p>\u5706\u73AF\u5F62\u7684\u8FDB\u5EA6\u6761\u7EC4\u4EF6\uFF0C\u652F\u6301\u8FDB\u5EA6\u6E10\u53D8\u52A8\u753B\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/circle&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>&gt;</span>{{ rate }}%<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u5927\u5C0F\u5B9A\u5236</h3><p>\u901A\u8FC7 <code class="">size</code> \u5C5E\u6027\u8BBE\u7F6E\u5706\u73AF\u76F4\u5F84\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;80&quot;</span>&gt;</span>\u5927\u5C0F\u5B9A\u5236<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u989C\u8272\u5B9A\u5236</h3><p>\u901A\u8FC7 <code class="">color</code> \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#02b357&quot;</span>&gt;</span>\u989C\u8272\u5B9A\u5236<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</h3><p>\u901A\u8FC7 <code class="">strokewidth</code> \u5C5E\u6027\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u5BBD\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">:strokewidth</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\u5BBD\u5EA6\u5B9A\u5236<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u8F68\u9053\u989C\u8272</h3><p>\u901A\u8FC7 <code class="">layercolor</code> \u5C5E\u6027\u8BBE\u7F6E\u8F68\u9053\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">layercolor</span>=<span class="hljs-string">&quot;#f00&quot;</span>&gt;</span>\u8F68\u9053\u989C\u8272<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u9006\u65F6\u9488</h3><p>\u5C06 <code class="">anticlockwise</code> \u8BBE\u7F6E\u4E3A<code class="">true</code>\uFF0C\u8FDB\u5EA6\u4F1A\u4ECE\u9006\u65F6\u9488\u65B9\u5411\u5F00\u59CB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">anticlockwise</span>&gt;</span>\u9006\u65F6\u9488<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h3>\u6E10\u53D8\u8272</h3><p>\u901A\u8FC7 <code class="">setGradient</code> \u65B9\u6CD5\u8BBE\u7F6E\u6E10\u53D8\u8272\u3002 \u901A\u8FC7 <code class="">--quark-circle-transition</code> \u8BBE\u7F6E\u8FDB\u5EA6\u6761\u52A8\u753B\u6548\u679C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;circleRef&quot;</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>
  <span class="hljs-attr">:strokewidth</span>=<span class="hljs-string">&quot;5&quot;</span>
  <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span>
  <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;100&quot;</span>
&gt;</span>
  \u6E10\u53D8\u8272
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.circleRef.setGradient({
      <span class="hljs-string">&quot;0%&quot;</span>: <span class="hljs-string">&quot;#3fecff&quot;</span>,
      <span class="hljs-string">&quot;100%&quot;</span>: <span class="hljs-string">&quot;#6149f6&quot;</span>,
    });
  },
};
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom</span> {
  --quark-circle-<span class="hljs-attribute">transition</span>: all linear <span class="hljs-number">0.3s</span>;
}
</code></pre><h3>\u8D77\u59CB\u4F4D\u7F6E</h3><p>\u8FDB\u5EA6\u6761\u9ED8\u8BA4\u4ECE\u9876\u90E8\u5F00\u59CB\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code class="">startposition</code> \u5C5E\u6027\u8BBE\u7F6E\u8D77\u59CB\u4F4D\u7F6E\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\u53F3\u4FA7<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\u4E0B\u4FA7<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-circle</span> <span class="hljs-attr">:rate</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\u5DE6\u4FA7<span class="hljs-tag">&lt;/<span class="hljs-name">quark-circle</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>rate</td><td>\u5F53\u524D\u8FDB\u5EA6</td><td><code class="">number</code></td><td><code class="">0</code></td></tr><tr><td>size</td><td>\u5706\u73AF\u76F4\u5F84</td><td><code class="">number</code></td><td><code class="">100</code></td></tr><tr><td>color</td><td>\u8FDB\u5EA6\u6761\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#08f</code></td></tr><tr><td>layercolor</td><td>\u8F68\u9053\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>strokewidth</td><td>\u8FDB\u5EA6\u6761\u5BBD\u5EA6</td><td><code class="">number</code></td><td><code class="">2</code></td></tr><tr><td>fill</td><td>\u586B\u5145\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>strokelinecap</td><td>\u8FDB\u5EA6\u6761\u7AEF\u70B9\u7684\u5F62\u72B6</td><td><code class="">StrokeLinecap</code></td><td><code class="">round</code></td></tr><tr><td>anticlockwise</td><td>\u662F\u5426\u9006\u65F6\u9488\u65F6\u9488\u589E\u52A0</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>startposition</td><td>\u8FDB\u5EA6\u8D77\u59CB\u4F4D\u7F6E</td><td><code class="">CircleStartPosition</code></td><td><code class="">top</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setGradient</td><td>\u8BBE\u7F6E\u8FDB\u5EA6\u6761\u6E10\u53D8\u8272</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>slot</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> StrokeLinecap = <span class="hljs-string">&quot;round&quot;</span> | <span class="hljs-string">&quot;square&quot;</span> | <span class="hljs-string">&quot;butt&quot;</span>;
<span class="hljs-keyword">type</span> CircleStartPosition = <span class="hljs-string">&quot;left&quot;</span> | <span class="hljs-string">&quot;right&quot;</span> | <span class="hljs-string">&quot;top&quot;</span> | <span class="hljs-string">&quot;bottom&quot;</span>;
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--quark-circle-transition</code></td><td>\u8FDB\u5EA6\u6761\u8FD0\u52A8\u52A8\u753B</td><td><code class="">transition: all linear 1s;</code></td></tr><tr><td><code class="">--quark--circle-text-font-size</code></td><td>\u5185\u5BB9\u6587\u5B57\u5927\u5C0F</td><td><code class="">14px</code></td></tr></tbody></table>`,42),e=[c],h={},i="",j=a({__name:"doc.zh-CN",setup(p,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(l(),t("div",n,e))}});export{j as default,i as excerpt,h as frontmatter};
