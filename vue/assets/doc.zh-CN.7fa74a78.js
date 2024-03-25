import{d as a,c as t,a as n,o as l}from"./vue.acb82bcc.js";const u={class:"markdown-body"},p=n(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u53EF\u4EE5\u5DE6\u53F3\u6ED1\u52A8\u6765\u5C55\u793A\u64CD\u4F5C\u6309\u94AE\u7684\u5355\u5143\u683C\u7EC4\u4EF6\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/swipecell&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><p><code class="">quark-swipe-cell</code> \u7EC4\u4EF6\u63D0\u4F9B\u4E86 left \u548C right \u4E24\u4E2A\u63D2\u69FD\uFF0C\u7528\u4E8E\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> \u9009\u62E9 <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> \u5220\u9664 <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> \u6536\u85CF <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><p><code class="">quark-swipe-cell</code> \u53EF\u4EE5\u5D4C\u5957\u4EFB\u610F\u5185\u5BB9\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6682\u65E0\u6570\u636E&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5FEB\u53BB\u6DFB\u52A0\u6570\u636E\u5427~&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;local&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><h3>\u5F02\u6B65\u5173\u95ED</h3><p>\u901A\u8FC7<code class="">setBeforeClose</code>\u65B9\u6CD5\uFF0C\u8BBE\u7F6E\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E24\u4FA7\u6ED1\u52A8\u5185\u5BB9\u5173\u95ED\u65F6\u7684\u884C\u4E3A\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;asyncSwipeCell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u6807\u9898&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u5220\u9664<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.asyncSwipeCell.setBeforeClose(<span class="hljs-function">(<span class="hljs-params">position: SwipeCellPosition</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (position === <span class="hljs-string">&quot;right&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
          <span class="hljs-keyword">const</span> toast = Toast.loading(<span class="hljs-string">&quot;\u8BF7\u6C42\u4E2D&quot;</span>);
          <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            toast.hide();
            Toast.success(<span class="hljs-string">&quot;\u5220\u9664\u6210\u529F&quot;</span>);
            resolve(<span class="hljs-literal">true</span>);
          }, <span class="hljs-number">1000</span>);
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
      }
    });
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u8BC6\u7B26</td><td><code class="">number | string</code></td><td><code class="">&#39;&#39;</code></td></tr><tr><td>leftwidth</td><td>\u6307\u5B9A\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6</td><td><code class="">number</code></td><td><code class="">auto</code></td></tr><tr><td>rightwidth</td><td>\u6307\u5B9A\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u5BBD\u5EA6</td><td><code class="">number</code></td><td><code class="">auto</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6ED1\u52A8</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u663E\u793A\u7684\u5185\u5BB9</td></tr><tr><td>left</td><td>\u5DE6\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9</td></tr><tr><td>right</td><td>\u53F3\u4FA7\u6ED1\u52A8\u533A\u57DF\u7684\u5185\u5BB9</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code class="">(args: { detail: { positon: SwipeCellPosition } }) =&gt; void</code></td></tr><tr><td>open</td><td>\u6253\u5F00\u65F6\u89E6\u53D1</td><td><code class="">(args: Params) =&gt; void</code></td></tr><tr><td>close</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td><code class="">(args: Params) =&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>open</td><td>\u6253\u5F00\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td><code class="">(args: SwipeCellSide) =&gt; void</code></td></tr><tr><td>close</td><td>\u6536\u8D77\u5355\u5143\u683C\u4FA7\u8FB9\u680F</td><td><code class="">() =&gt; void</code></td></tr><tr><td>setBeforeClose</td><td>\u8BBE\u7F6E\u5173\u95ED\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE false \u53EF\u963B\u6B62\u5173\u95ED\uFF0C\u652F\u6301\u8FD4\u56DE Promise</td><td><code class="">(args: SwipeCellPosition) =&gt; boolean | Promise&lt;boolean&gt;</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> SwipeCellSide = <span class="hljs-string">&quot;left&quot;</span> | <span class="hljs-string">&quot;right&quot;</span>;
<span class="hljs-keyword">type</span> SwipeCellPosition = SwipeCellSide | <span class="hljs-string">&quot;cell&quot;</span> | <span class="hljs-string">&quot;outside&quot;</span>;
<span class="hljs-keyword">type</span> Params = {
  <span class="hljs-attr">detail</span>: {
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span>;
    position: SwipeCellPosition;
  };
};
</code></pre>`,26),e=[p],d={},i="",j=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(l(),t("div",u,e))}});export{j as default,i as excerpt,d as frontmatter};
