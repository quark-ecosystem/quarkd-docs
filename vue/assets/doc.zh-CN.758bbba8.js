import{d as a,c as n,a as l,o as t}from"./vue.9e5985e0.js";const p={class:"markdown-body"},c=l(`<h1>Swipe</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5FAA\u73AF\u64AD\u653E\u4E00\u7EC4\u56FE\u7247\u6216\u5185\u5BB9\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/swipe&quot;</span>;
</code></pre><h3>\u57FA\u672C\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u5706\u5F62\u6307\u793A\u5668</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;round&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u81EA\u52A8\u64AD\u653E</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">autoplay</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u9ED8\u8BA4\u9009\u4E2D\u7684 swipeItem</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">:defaultindex</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6ED1\u5757\u5927\u5C0F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-style&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u8BBE\u7F6E\u6307\u793A\u5668\u989C\u8272</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">activecolor</span>=<span class="hljs-string">&quot;red&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6307\u793A\u5668</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;indicators&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;indicator&quot;</span>&gt;</span>1/4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">e</span>)</span> {
        <span class="hljs-keyword">const</span> indicator = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;indicator&quot;</span>);
        indicator.innerHTML = <span class="hljs-string">\`<span class="hljs-subst">\${e.detail.index + <span class="hljs-number">1</span>}</span> / 4\`</span>;
      },
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.custom-indicator</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h3>\u76D1\u542C change \u4E8B\u4EF6</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;one&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;two&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">e</span>)</span> {
        <span class="hljs-built_in">console</span>.log(e.detail.index, <span class="hljs-number">11111</span>);
      },
    },
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.one</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#66c6f2</span>;
  }
  <span class="hljs-selector-class">.two</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u8F6E\u64AD\u6307\u793A\u5668\u7C7B\u578B,\u53EF\u9009<code class="">round</code></td><td><code class="">string</code></td><td></td></tr><tr><td>duration</td><td>\u52A8\u753B\u6267\u884C\u65F6\u95F4</td><td><code class="">number</code></td><td><code class="">500</code></td></tr><tr><td>interval</td><td>\u81EA\u52A8\u64AD\u653E\u65F6\u95F4\u95F4\u9694</td><td><code class="">number </code></td><td><code class="">3000</code></td></tr><tr><td>defaultindex</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684 index</td><td><code class="">number</code></td><td><code class="">0</code></td></tr><tr><td>autoplay</td><td>\u662F\u5426\u81EA\u52A8\u64AD\u653E</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr><tr><td>activecolor</td><td>\u6307\u793A\u5668\u9009\u4E2D\u72B6\u6001\u7684\u989C\u8272</td><td><code class=""> string</code></td><td><code class="">#0088ff</code></td></tr><tr><td>inactivecolor</td><td>\u6307\u793A\u5668\u975E\u9009\u4E2D\u72B6\u6001\u7684\u989C\u8272</td><td><code class="">string</code></td><td><code class="">#d3dae0</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>change</td><td>\u6BCF\u4E00\u9875\u8F6E\u64AD\u7ED3\u675F\u540E\u89E6\u53D1</td><td><code class="">\uFF08e: {detail:{index\uFF1A number}}\uFF09=&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--swipe-width</code></td><td>\u8F6E\u64AD\u5361\u7247\u5BBD\u5EA6</td><td><code class="">100%</code></td></tr><tr><td><code class="">--swipe-height</code></td><td>\u8F6E\u64AD\u5361\u7247\u9AD8\u5EA6</td><td><code class="">100%</code></td></tr><tr><td><code class="">--swipe-border-radius</code></td><td>\u8F6E\u64AD\u5361\u7247\u5706\u89D2</td><td><code class="">0</code></td></tr><tr><td><code class="">--swipe-indicator-activecolor</code></td><td>\u8F6E\u64AD\u5361\u6307\u793A\u5668\u989C\u8272</td><td><code class="">#0088ff</code></td></tr><tr><td><code class="">--swipe-indicator-margin</code></td><td>\u8F6E\u64AD\u6307\u793A\u5668\u95F4\u8DDD</td><td><code class="">2px</code></td></tr></tbody></table>`,29),e=[c],i={},r="",d=a({__name:"doc.zh-CN",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(u,j)=>(t(),n("div",p,e))}});export{d as default,r as excerpt,i as frontmatter};
