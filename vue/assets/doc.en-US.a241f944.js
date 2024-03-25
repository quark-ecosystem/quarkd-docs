import{d as a,c as n,a as t,o as e}from"./vue.acb82bcc.js";const l={class:"markdown-body"},p=t(`<h1>PickerView Selector View</h1><h3>Introduction</h3><p>The PickerView is the content area of the Picker.</p><h3>Installation and Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/pickerview&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-pickerview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerviewRef&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;change&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js">&lt;script&gt;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-comment">// Simulate asynchronous data fetching</span>
      <span class="hljs-keyword">const</span> pickerView = <span class="hljs-built_in">this</span>.$refs.pickerviewRef;
      pickerView.setColumns(
        [
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Monday&#39;</span>, <span class="hljs-string">&#39;Tuesday&#39;</span>, <span class="hljs-string">&#39;Wednesday&#39;</span>, <span class="hljs-string">&#39;Thursday&#39;</span>, <span class="hljs-string">&#39;Friday&#39;</span>]
          },
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Morning&#39;</span>, <span class="hljs-string">&#39;Afternoon&#39;</span>]
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
&lt;/script&gt;
</code></pre><h3>Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>Custom Style<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>&gt;</span>Custom Header<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
      <span class="hljs-comment">// Simulate asynchronous data fetching</span>
      <span class="hljs-keyword">const</span> picker = <span class="hljs-built_in">this</span>.$refs.customPickerRef;
      picker.setColumns(
        [
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Zhejiang Province&#39;</span>]
          },
          {
            <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
            <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Hangzhou&quot;</span>, <span class="hljs-string">&quot;Jiaxing&quot;</span>, <span class="hljs-string">&quot;Shaoxing&quot;</span>, <span class="hljs-string">&quot;Ningbo&quot;</span>, <span class="hljs-string">&quot;Huzhou&quot;</span>, <span class="hljs-string">&quot;Qiandao Lake&quot;</span>]
          }
        ]
      )
    }, <span class="hljs-number">1000</span>)
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">{detail}</span>)</span> {
      <span class="hljs-built_in">console</span>.log(detail.value, <span class="hljs-number">33333</span>)
    }
  }
};
&lt;/script&gt;
</code></pre><p>It is recommended to set all dimensions to multiples of <code class="">picker-item-height</code>.</p><pre><code class="language-css"><span class="hljs-selector-class">.custom-pickerview</span> {
  --pickerview-item-<span class="hljs-attribute">height</span>: <span class="hljs-number">44px</span>;
  --pickerview-<span class="hljs-attribute">height</span>: <span class="hljs-number">220px</span>;
  --pickerview-row-<span class="hljs-attribute">top</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">88px</span>;
  --pickerview-row-<span class="hljs-attribute">bottom</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">88px</span>;
  --pickerview-current-<span class="hljs-attribute">top</span>: <span class="hljs-number">90px</span>;
}
</code></pre><h2>API</h2><h3>Events</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>change</td><td>Picker change callback</td><td><code class="">(e: {detail: {value: SelectColumn[]}}) =&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Used to set the selector data</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get the selected data from the picker, usually used when customizing the header</td><td><code class="">() =&gt; SelectColumn[]</code></td></tr></tbody></table><h3>Type Definitions</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> PickerColumn = {
  <span class="hljs-attr">values</span>: <span class="hljs-built_in">string</span>[];
  defaultIndex: <span class="hljs-built_in">number</span>; <span class="hljs-comment">// Default selected</span>
};

<span class="hljs-keyword">type</span> SelectColumn = {
  <span class="hljs-attr">value</span>: <span class="hljs-built_in">string</span>;
  index: <span class="hljs-built_in">number</span>;
};
</code></pre><h2>Style Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used for custom styling. Please refer to <a href="#/en-US/guide/theme">Theme Customization</a> for usage.</p><h3>Note</h3><p><strong>When customizing variables, it is recommended to set them to multiples of <code class="">picker-item-height</code>.</strong></p><table><thead><tr><th>Variable Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td>\u2013pickerview-item-height</td><td>Height of each row</td><td><code class="">34px</code></td></tr><tr><td>\u2013pickerview-height</td><td>Container height</td><td><code class="">170px</code></td></tr><tr><td>\u2013pickerview-row-top-mask-height</td><td>Top transparent mask layer height</td><td><code class="">68px</code></td></tr><tr><td>\u2013pickerview-row-bottom-mask-height</td><td>Bottom transparent mask layer height</td><td><code class="">68px</code></td></tr><tr><td>\u2013pickerview-border</td><td>Default selected border</td><td><code class="">1px solid #eee</code></td></tr><tr><td>\u2013pickerview-item-font-size</td><td>Font size for each row</td><td><code class="">16px</code></td></tr><tr><td>\u2013pickerview-item-color</td><td>Font color for each row</td><td><code class="">#242729</code></td></tr><tr><td>\u2013pickerview-current-top</td><td>Position of the current selected row, 2x height + top and bottom borders</td><td><code class="">70px</code></td></tr></tbody></table>`,25),c=[p],d={},u="",j=a({__name:"doc.en-US",setup(h,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,o)=>(e(),n("div",l,c))}});export{j as default,u as excerpt,d as frontmatter};
