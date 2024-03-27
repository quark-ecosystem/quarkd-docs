import{d as a,c as t,a as n,o as u}from"./vue.7efb9dc0.js";const l={class:"markdown-body"},e=n(`<h1>Picker \u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u548C\u591A\u5217\u9009\u62E9\uFF0C\u7EA7\u8054\u9009\u62E9\u8BF7\u4F7F\u7528 CascadePicker</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u5F15\u5165 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;module&quot;</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/picker&quot;</span>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-comment">&lt;!-- \u4F7F\u7528 --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
  <span class="hljs-attr">open</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">onclose</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">onconfirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
  <span class="hljs-attr">onchange</span>=<span class="hljs-string">&quot;change&quot;</span>
/&gt;</span>
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>open<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u65F6\u95F4&quot;</span>
  <span class="hljs-attr">open</span>
  <span class="hljs-attr">onclose</span>=<span class="hljs-string">&quot;close&quot;</span>
  <span class="hljs-attr">onconfirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
  <span class="hljs-attr">onchange</span>=<span class="hljs-string">&quot;change&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js">picker.open = <span class="hljs-literal">true</span>;
picker.open = flase;
<span class="hljs-comment">// \u539F\u751F\u5C5E\u6027\u64CD\u4F5C</span>
picker.setAttribute(<span class="hljs-string">&#39;open&#39;</span>, <span class="hljs-string">&#39;&#39;</span>)
picker.removeAttribute(<span class="hljs-string">&#39;open&#39;</span>)
</code></pre><h3>\u81EA\u5B9A\u4E49\u5934\u90E8</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span> <span class="hljs-attr">open</span> <span class="hljs-attr">bottomhidden</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;cancel&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;close&quot;</span>&gt;</span>\u53D6\u6D88<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>\u8BF7\u9009\u62E9\u57CE\u5E02<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;ensure&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;confirm&quot;</span>&gt;</span>\u786E\u5B9A<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-picker</span>&gt;</span>
</code></pre><pre><code class="language-js">picker.setColumns([
  {
    <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u661F\u671F\u4E00&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E09&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u56DB&#39;</span>, <span class="hljs-string">&#39;\u661F\u671F\u4E94&#39;</span>]
  },
  {
    <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>]
  }
])

picker.getValues()

picker.onchange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">{ detail }</span>) </span>{
  <span class="hljs-comment">// detail.value</span>
}

picker.addEventListener(<span class="hljs-string">&#39;change&#39;</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">ev</span>)</span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">this</span>.open);
  <span class="hljs-built_in">console</span>.log(ev.target.checked);
})
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>picker \u662F\u5426\u663E\u793A</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>\u6807\u9898</td><td><code class="">string </code></td><td></td></tr><tr><td>confirmtext</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u786E\u8BA4</code></td></tr><tr><td>bottomhidden</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\uFF08\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u4F7F\u7528\uFF09</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u6216\u8005\u53D6\u6D88\u6309\u94AE</td><td><code class="">() =&gt; void</code></td></tr><tr><td>confirm</td><td>\u786E\u5B9A\u6309\u94AE\u70B9\u51FB\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: SelectColumn[]}}\uFF09=&gt; void</code></td></tr><tr><td>change</td><td>picker \u6539\u53D8\u56DE\u8C03</td><td><code class="">\uFF08e: {detail:{value: SelectColumn[]}}\uFF09=&gt; void</code></td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name=header</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setColumns</td><td>\u7528\u4E8E\u8BBE\u7F6E\u9009\u62E9\u5668\u6570\u636E</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u9009\u62E9\u5668\u9009\u4E2D\u7684\u6570\u636E\uFF0C\u901A\u5E38\u914D\u5408\u81EA\u5B9A\u4E49\u5934\u90E8\u65F6\u4F7F\u7528</td><td><code class="">\uFF08\uFF09=&gt; SelectColumn[]</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">values</span>: string[];
  defaultIndex: number;
};

type SelectColumn = {
  <span class="hljs-attr">value</span>: string
  <span class="hljs-attr">index</span>: number
};
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--picker-title-font-size</code></td><td>\u6807\u9898\u5B57\u53F7</td><td><code class="">18px</code></td></tr><tr><td><code class="">--picker-title-color</code></td><td>\u6807\u9898\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--picker-title-font-weight</code></td><td>\u6807\u9898\u5B57\u91CD</td><td><code class="">500</code></td></tr><tr><td><code class="">--picker-title-font-family</code></td><td>\u6807\u9898\u5B57\u4F53</td><td><code class="">PingFangSC-Medium, PingFang SC </code></td></tr></tbody></table>`,25),p=[e],r={},i="",j=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,o)=>(u(),t("div",l,p))}});export{j as default,i as excerpt,r as frontmatter};
