import{d as a,c as n,a as t,o as l}from"./vue.693860de.js";const e={class:"markdown-body"},p=t(`<h1>Picker Selector</h1><h3>Introduction</h3><p>The PickerView is the content area of the Picker.</p><h3>Installation and Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Picker, PickerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRef, useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; PickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> values = detail.value
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;, &quot;</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`Current selection: <span class="hljs-subst">\${values}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// Simulate asynchronous data fetching</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Monday&quot;</span>, <span class="hljs-string">&quot;Tuesday&quot;</span>, <span class="hljs-string">&quot;Wednesday&quot;</span>, <span class="hljs-string">&quot;Thursday&quot;</span>, <span class="hljs-string">&quot;Friday&quot;</span>],
        },
        {
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Morning&quot;</span>, <span class="hljs-string">&quot;Afternoon&quot;</span>],
        },
      ]);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
        <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Time&quot;</span>
        <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span>
        <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
        <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>
        <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{handleConfirm}</span>
      /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Header</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useRef, useState, useEffect } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> pickerRef = useRef &lt; PickerRef &gt; <span class="hljs-literal">null</span>;

  <span class="hljs-keyword">const</span> handleClose = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> handleConfirm = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> { current } = pickerRef;
    <span class="hljs-keyword">const</span> values = current
      .getValues()
      .map(<span class="hljs-function">(<span class="hljs-params">column</span>) =&gt;</span> {
        <span class="hljs-keyword">return</span> column.value;
      })
      .join(<span class="hljs-string">&quot;, &quot;</span>);
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\`Current selection: <span class="hljs-subst">\${values}</span>\`</span>);
    setOpen(<span class="hljs-literal">false</span>);
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-comment">// Simulate asynchronous data fetching</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">const</span> { <span class="hljs-attr">current</span>: pickerCurrent } = pickerRef;
      pickerCurrent.setColumns([
        {
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Monday&quot;</span>, <span class="hljs-string">&quot;Tuesday&quot;</span>, <span class="hljs-string">&quot;Wednesday&quot;</span>, <span class="hljs-string">&quot;Thursday&quot;</span>, <span class="hljs-string">&quot;Friday&quot;</span>],
        },
        {
          <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
          <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;Morning&quot;</span>, <span class="hljs-string">&quot;Afternoon&quot;</span>],
        },
      ]);
    }, <span class="hljs-number">1000</span>);
  }, []);

  <span class="hljs-keyword">const</span> handleClick = <span class="hljs-function">() =&gt;</span> setOpen(<span class="hljs-literal">true</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>&gt;</span>Custom Header<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{pickerRef}</span> <span class="hljs-attr">bottomhidden</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;header&quot;</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;head-container&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;cancel&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClose}</span>&gt;</span>
            Cancel
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;picker-title&quot;</span>&gt;</span>Select City<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;ensure&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleConfirm}</span>&gt;</span>
            Confirm
          <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Picker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether the picker is displayed</td><td><code class="">boolean</code></td><td><code class="">require</code></td></tr><tr><td>title</td><td>Title</td><td><code class="">string</code></td><td></td></tr><tr><td>confirmtext</td><td>Text for the confirm button</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>bottomhidden</td><td>Whether to hide the bottom button (usually used with custom header)</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>Whether to prevent mask click</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>onClose</td><td>Called when clicking on the mask or cancel button</td><td><code class="">() =&gt; void</code></td><td><code class="">require</code></td></tr><tr><td>onConfirm</td><td>Confirm button click callback</td><td><code class="">(e: { detail: { value: SelectColumn[] }}) =&gt; void</code></td><td><code class="">require</code></td></tr><tr><td>onChange</td><td>Picker change callback</td><td><code class="">(e: { detail: { value: SelectColumn[] }}) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=header</td><td>Custom Header</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setColumns</td><td>Used to set the picker data</td><td><code class="">(columns: PickerColumn[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get the currently selected data, usually used with custom header</td><td><code class="">() =&gt; SelectColumn[]</code></td></tr></tbody></table><h3>Type Definitions</h3><pre><code class="language-js">type PickerColumn = {
  <span class="hljs-attr">values</span>: string[],
  <span class="hljs-attr">defaultIndex</span>: number,
};

type SelectColumn = {
  <span class="hljs-attr">value</span>: string,
  <span class="hljs-attr">index</span>: number,
};
</code></pre><h2>Style Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used for custom styling. Please refer to <a href="#/en-US/guide/theme">Theme Customization</a> for usage.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--picker-title-font-size</code></td><td>Title font size</td><td><code class="">18px</code></td></tr><tr><td><code class="">--picker-title-color</code></td><td>Title color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--picker-title-font-weight</code></td><td>Title font weight</td><td><code class="">500</code></td></tr><tr><td><code class="">--picker-title-font-family</code></td><td>Title font family</td><td><code class="">PingFangSC-Medium, PingFang SC</code></td></tr></tbody></table><hr>`,22),c=[p],i={},u="",j=a({__name:"doc-react.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,d)=>(l(),n("div",e,c))}});export{j as default,u as excerpt,i as frontmatter};
