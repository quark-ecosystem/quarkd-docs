import{d as t,c as a,a as n,o as p}from"./vue.4e236986.js";const e={class:"markdown-body"},o=n(`<h1>Popup</h1><h3>Intro</h3><p>Pop-up windows</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/popup&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleClose&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>First Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Second Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Third Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Forth Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Fifth Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Six Line<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-popup</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPopup&quot;</span>&gt;</span>Show Popup<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">showPopup</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">handleClose</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    }
  }
}
&lt;/script&gt;
</code></pre><h3>Position</h3><p>Use position prop to set popup display position.By default, the popup is centered and can be set to top, bottom, left, right.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> /&gt;</span>
</code></pre><h3>Close Icon</h3><p>After setting the closeable property, the close icon will be displayed in the upper right corner of the popup layer.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">closeable</span> /&gt;</span>
</code></pre><h3>Forbid mask click</h3><p>forbid mask click</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">forbidmaskclick</span> /&gt;</span>
</code></pre><h3>Round Corner</h3><p>After setting the round property, the popup window will add different rounded corner styles according to the popup position.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> <span class="hljs-attr">round</span> /&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Popup status</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>position</td><td>Popup position</td><td><code class="">top</code> <code class="">bottom</code> <code class="">left</code> <code class="">right</code></td><td><code class="">bottom</code></td></tr><tr><td>round</td><td>Whether to show round corner</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>Whether forbid mask click</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>safearea</td><td>Whether to enable bottom safe area adaptation</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>zindex</td><td>Popup z-index</td><td><code class="">number\u3001string </code></td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>clickoverlay</td><td>Emitted when overlay click</td><td><code class="">() =&gt; void</code></td></tr><tr><td>close</td><td>Emitted when Popup will close</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr><tr><td>closed</td><td>Emitted after Popup closed</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr><tr><td>opened</td><td>Emitted after Popup opened</td><td><code class="">\uFF08\uFF09=&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to<a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--popup-mask-color</code></td><td>Mask background</td><td><code class="">rgba(0, 0, 0, 0.7)</code></td></tr><tr><td><code class="">--popup-z-index</code></td><td>z-index</td><td><code class="">999</code></td></tr><tr><td><code class="">--popup-bg</code></td><td>popup content area background</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--popup-width</code></td><td>popup content area width</td><td><code class="">auto</code></td></tr><tr><td><code class="">--popup-height</code></td><td>popup content area height</td><td><code class="">auto</code></td></tr><tr><td><code class="">--popup-max-width</code></td><td>Popup content area max width</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-min-width</code></td><td>Popup content area min width</td><td>-</td></tr><tr><td><code class="">--popup-max-height</code></td><td>Popup content area max height</td><td><code class="">90%</code></td></tr><tr><td><code class="">--popup-min-height</code></td><td>Popup content area min height</td><td><code class="">200px</code></td></tr><tr><td><code class="">--popup-border-radius</code></td><td>Popup border radius size(Only when the position is bottom and the props setting round takes effect)</td><td><code class="">200px</code></td></tr></tbody></table>`,28),l=[o],i={},u="",g=t({__name:"doc.en-US",setup(d,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(c,r)=>(p(),a("div",e,l))}});export{g as default,u as excerpt,i as frontmatter};