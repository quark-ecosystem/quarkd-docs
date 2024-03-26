import{d as a,c as n,a as t,o as l}from"./vue.f7776e09.js";const p={class:"markdown-body"},e=t(`<h1>DropdownMenu</h1><h3>Intro</h3><p>The menu list that pops down downwards.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> {
  DropdownMenu,
  DropdownItem,
  DropdownItemInstance,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value1, setValue1] = useState(<span class="hljs-string">&quot;0&quot;</span>);
  <span class="hljs-keyword">const</span> [value2, setValue2] = useState(<span class="hljs-string">&quot;a&quot;</span>);
  <span class="hljs-keyword">const</span> item1 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> item2 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;

  useEffect(<span class="hljs-function">() =&gt;</span> {
    item1.current.setOptions([
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;0&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option2&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;1&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option3&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;2&quot;</span> },
      ,
    ]);

    item2.current.setOptions([
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option A&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;a&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option B&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;b&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option C&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;c&quot;</span> },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item1}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value1}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item2}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value2}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Content</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value1, setValue1] = useState(<span class="hljs-string">&quot;0&quot;</span>);
  <span class="hljs-keyword">const</span> item1 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> item2 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> [switch1, setSwitch1] = useState(<span class="hljs-literal">true</span>);
  <span class="hljs-keyword">const</span> [switch2, setSwitch2] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">const</span> onSwitch1Change = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    setSwitch1(<span class="hljs-function">() =&gt;</span> e.detail.value);
  };

  <span class="hljs-keyword">const</span> onSwitch2Change = <span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> {
    setSwitch2(<span class="hljs-function">() =&gt;</span> e.detail.value);
  };

  <span class="hljs-keyword">const</span> onConfirm = <span class="hljs-function">() =&gt;</span> {
    item2.current.toggle();
  };

  useEffect(<span class="hljs-function">() =&gt;</span> {
    item1.current.setOptions([
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;0&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option2&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;1&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;Option3&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;2&quot;</span> },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item1}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value1}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item2}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{switch1}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onSwitch1Change}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">quark-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{switch2}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onSwitch2Change}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">quark-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onConfirm}</span>&gt;</span>
            Confirm
          <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>Custom Active Color</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#f00&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>Disabled</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>Expand Direction</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>Swipe Items</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span> <span class="hljs-attr">swipe-threshold</span>=<span class="hljs-string">{4}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>DropdownMenu Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>active-color</td><td>Active color of title and option</td><td><code class="">string</code></td><td><code class="">#08f</code></td></tr><tr><td>direction</td><td>Expand direction</td><td><code class="">up</code>\u3001<code class="">down</code></td><td><code class="">down</code></td></tr><tr><td>z-index</td><td>z-index of menu item</td><td><code class="">number</code></td><td><code class="">10</code></td></tr><tr><td>hide-overlay</td><td>Whether to hide overlay</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>swipe-threshold</td><td>Horizontal scrolling is allowed when the number of items exceeds the threshold and the total width exceeds the width of the menu.</td><td><code class="">number</code></td><td><code class="">0</code></td></tr></tbody></table><h3>DropdownMenuItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>value</td><td>Value of current option</td><td><code class="">string</code></td><td></td></tr><tr><td>title</td><td>Item title</td><td><code class="">string</code></td><td>Text of selected option</td></tr><tr><td>disabled</td><td>Whether to disable dropdown item</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>change</td><td>Emitted select option and value changed</td><td><code class="">e: ({ detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>open</td><td>Emitted when opening menu</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>close</td><td>Emitted when closing menu</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>DropdownItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Content</td></tr></tbody></table><h3>DropdownItem Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggle</td><td>Toggle display</td><td><code class="">show?: boolean</code></td><td>-</td></tr></tbody></table><h3>CSS Variables</h3><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">theme customization</a>.</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code class="">--quark-dropdown-menu-height</code></td><td><code class="">48px</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-background-color</code></td><td><code class="">#fff</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-color</code></td><td><code class="">#242729</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-font-size</code></td><td><code class="">14px</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-padding</code></td><td><code class="">8px</code></td><td>-</td></tr></tbody></table><h3>Type Definition</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> DropdownMenuDirection = <span class="hljs-string">&quot;down&quot;</span> | <span class="hljs-string">&quot;up&quot;</span>;

<span class="hljs-keyword">type</span> DropdownMenuProps = {
  zIndex?: <span class="hljs-built_in">number</span>;
  hideOverlay?: <span class="hljs-built_in">boolean</span>;
  activeColor?: <span class="hljs-built_in">string</span>;
  direction?: DropdownMenuDirection;
  swipeThreshold?: <span class="hljs-built_in">number</span>;
};

<span class="hljs-keyword">type</span> DropdownItemProps = {
  value?: <span class="hljs-built_in">string</span>;
  title?: <span class="hljs-built_in">string</span>;
  disabled?: <span class="hljs-built_in">boolean</span>;
};

<span class="hljs-keyword">type</span> DropdownItemOption = {
  <span class="hljs-attr">text</span>: <span class="hljs-built_in">string</span>;
  value: <span class="hljs-built_in">string</span>;
};
</code></pre>`,31),o=[e],j={},i="",u=a({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(d,r)=>(l(),n("div",p,o))}});export{u as default,i as excerpt,j as frontmatter};
