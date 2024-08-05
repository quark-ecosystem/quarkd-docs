import{d as a,c as t,a as n,o as l}from"./vue.bc89177c.js";const e={class:"markdown-body"},p=n(`<h1>Circle</h1><h3>Intro</h3><p>Circular progress bar component, and supports gradient color animation.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Circle } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span>&gt;</span>{rate}%<span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>;
};
</code></pre><h3>Custom Size</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;80&quot;</span>&gt;</span>
      Size
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Color</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#02b357&quot;</span>&gt;</span>
      Color
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Strokewidth</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">strokewidth</span>=<span class="hljs-string">{5}</span>&gt;</span>
      Strokewidth
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Layercolor</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">layercolor</span>=<span class="hljs-string">&quot;#f00&quot;</span>&gt;</span>
      Layercolor
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><h3>Anticlockwise</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">anticlockwise</span>&gt;</span>
      Anticlockwise
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><h3>Gradient</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> circleRef = useRef&lt;CircleRef&gt;();
  useEffect(<span class="hljs-function">() =&gt;</span> {
    circleRef.setGradientt({
      <span class="hljs-string">&quot;0%&quot;</span>: <span class="hljs-string">&quot;#3fecff&quot;</span>,
      <span class="hljs-string">&quot;100%&quot;</span>: <span class="hljs-string">&quot;#6149f6&quot;</span>,
    });
  }, []);
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">{circleRef}</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>
      <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span>
      <span class="hljs-attr">strokewidth</span>=<span class="hljs-string">{5}</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;100&quot;</span>
    &gt;</span>
      Gradient
    <span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  );
};
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.custom</span> {
  --quark-circle-<span class="hljs-attribute">transition</span>: all linear <span class="hljs-number">0.3s</span>;
}
</code></pre><h3>Start Position</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>Right<span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>Bottom<span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Circle</span> <span class="hljs-attr">rate</span>=<span class="hljs-string">{rate}</span> <span class="hljs-attr">startposition</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>Left<span class="hljs-tag">&lt;/<span class="hljs-name">Circle</span>&gt;</span></span>
  )
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>rate</td><td>Target rate</td><td><code class="">number</code></td><td><code class="">0</code></td></tr><tr><td>size</td><td>Circle size</td><td><code class="">number</code></td><td><code class="">100</code></td></tr><tr><td>color</td><td>Progress color</td><td><code class="">string</code></td><td><code class="">#08f</code></td></tr><tr><td>layercolor</td><td>Layer color</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>strokewidth</td><td>Stroke width</td><td><code class="">number</code></td><td><code class="">2</code></td></tr><tr><td>fill</td><td>Fill color</td><td><code class="">string</code></td><td><code class="">#fff</code></td></tr><tr><td>strokelinecap</td><td>Stroke linecap</td><td><code class="">StrokeLinecap</code></td><td><code class="">round</code></td></tr><tr><td>anticlockwise</td><td>Whether to be anticlockwise</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>startposition</td><td>Progress start position</td><td><code class="">CircleStartPosition</code></td><td><code class="">top</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setGradient</td><td>set progress gradient</td><td><code class="">() =&gt; void</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>slot</td><td>Custom content</td></tr></tbody></table><h3>Data Structure of Action</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> StrokeLinecap = <span class="hljs-string">&quot;round&quot;</span> | <span class="hljs-string">&quot;square&quot;</span> | <span class="hljs-string">&quot;butt&quot;</span>;
<span class="hljs-keyword">type</span> CircleStartPosition = <span class="hljs-string">&quot;left&quot;</span> | <span class="hljs-string">&quot;right&quot;</span> | <span class="hljs-string">&quot;top&quot;</span> | <span class="hljs-string">&quot;bottom&quot;</span>;
</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code class="">--quark-circle-transition</code></td><td>progress transition</td><td><code class="">transition: all linear 1s;</code></td></tr><tr><td><code class="">--quark--circle-text-font-size</code></td><td>text font size</td><td><code class="">14px</code></td></tr></tbody></table>`,34),c=[p],i={},j="",g=a({__name:"doc-react.en-US",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),t("div",e,c))}});export{g as default,j as excerpt,i as frontmatter};
