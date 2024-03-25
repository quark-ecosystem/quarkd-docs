import{d as a,c as t,a as n,o as e}from"./vue.acb82bcc.js";const l={class:"markdown-body"},o=n(`<h1>Quick Start</h1><h2>Preview</h2><blockquote><p>Scan the QR code below to experience the Quark component library example</p></blockquote><img src="https://m.hellobike.com/resource/helloyun/16682/76s6X_quark.demo.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png"><h2>CDN</h2><p>The easiest way to use quark is to directly introduce the CDN link in the HTML file, and then you can use it anywhere in the world. Since quark has achieved CSS-IN-JS, you only need to load the link below.</p><pre><code class="">&lt;!-- Introduce CDN files, only 80kb --&gt;
&lt;script src=&quot;https://fastly.jsdelivr.net/npm/quarkd@latest/umd/index.mini.js&quot; /&gt;
</code></pre><h2>NPM Install</h2><pre><code class="language-shell">npm i quarkd
</code></pre><h2>Usage</h2><pre><code class="language-tsx">&lt;template&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;handleClick&quot;</span>&gt;</span>\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>;
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code></pre><h2>Polyfill</h2><blockquote><p>Use Quarkd(Web components) today and have them work in all major browsers. <a href="https://www.webcomponents.org/polyfills">Polyfill</a>.</p></blockquote><p>Install polyfills</p><pre><code class="">npm install @webcomponents/webcomponentsjs
</code></pre><p>You can also load the code from a CDN such as unpkg: <a href="https://unpkg.com/@webcomponents/webcomponentsjs@%5E2/">https://unpkg.com/@webcomponents/webcomponentsjs@^2/</a></p>`,16),p=[o],u={},m="",d=a({__name:"quickstart.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(e(),t("div",l,p))}});export{d as default,m as excerpt,u as frontmatter};
