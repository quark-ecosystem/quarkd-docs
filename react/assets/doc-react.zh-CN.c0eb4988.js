import{d as a,c as n,a as t,o as l}from"./vue.35c7b340.js";const p={class:"markdown-body"},e=t(`<h1>DropdownMenu</h1><h3>\u4ECB\u7ECD</h3><p>\u5411\u4E0B\u5F39\u51FA\u7684\u83DC\u5355\u5217\u8868\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> {
  DropdownMenu,
  DropdownItem,
  DropdownItemInstance,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [value1, setValue1] = useState(<span class="hljs-string">&quot;0&quot;</span>);
  <span class="hljs-keyword">const</span> [value2, setValue2] = useState(<span class="hljs-string">&quot;a&quot;</span>);
  <span class="hljs-keyword">const</span> item1 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;
  <span class="hljs-keyword">const</span> item2 = useRef &lt; DropdownItemInstance &gt; <span class="hljs-literal">null</span>;

  useEffect(<span class="hljs-function">() =&gt;</span> {
    item1.current.setOptions([
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;0&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u65B0\u6B3E\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;1&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D3B\u52A8\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;2&quot;</span> },
    ]);

    item2.current.setOptions([
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9ED8\u8BA4\u6392\u5E8F&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;a&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u597D\u8BC4\u6392\u5E8F&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;b&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u9500\u91CF\u6392\u5E8F&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;c&quot;</span> },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item1}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value1}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item2}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value2}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u5168\u90E8\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;0&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u65B0\u6B3E\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;1&quot;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&quot;\u6D3B\u52A8\u5546\u54C1&quot;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&quot;2&quot;</span> },
    ]);
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item1}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{value1}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{item2}</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7B5B\u9009&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5305\u90AE&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{switch1}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onSwitch1Change}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">quark-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u56E2\u8D2D&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{switch2}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{onSwitch2Change}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">quark-cell</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;padding: 5px 16px&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{onConfirm}</span>&gt;</span>
            \u786E\u5B9A
          <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u9009\u4E2D\u72B6\u6001\u989C\u8272</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#f00&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>\u7981\u7528\u83DC\u5355</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>\u5411\u4E0A\u5C55\u5F00</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">DropdownMenu</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;up&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DropdownItem</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">DropdownItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">DropdownMenu</span>&gt;</span></span>
  );
};
</code></pre><h3>\u6A2A\u5411\u6EDA\u52A8</h3><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
</code></pre><h2>API</h2><h3>DropdownMenu Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>active-color</td><td>\u83DC\u5355\u6807\u9898\u548C\u9009\u9879\u7684\u9009\u4E2D\u6001\u989C\u8272</td><td><code class="">string</code></td><td><code class="">08f</code></td></tr><tr><td>direction</td><td>\u83DC\u5355\u5C55\u5F00\u65B9\u5411</td><td><code class="">up</code>\u3001<code class="">down</code></td><td><code class="">down</code></td></tr><tr><td>z-index</td><td>\u83DC\u5355\u680F z-index \u5C42\u7EA7</td><td><code class="">number</code></td><td><code class="">10</code></td></tr><tr><td>hide-overlay</td><td>\u662F\u5426\u9690\u85CF\u906E\u7F69\u5C42</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>swipe-threshold</td><td>\u6EDA\u52A8\u9608\u503C\uFF0C\u9009\u9879\u6570\u91CF\u8D85\u8FC7\u9608\u503C\u4E14\u603B\u5BBD\u5EA6\u8D85\u8FC7\u83DC\u5355\u680F\u5BBD\u5EA6\u65F6\uFF0C\u53EF\u4EE5\u6A2A\u5411\u6EDA\u52A8</td><td><code class="">number</code></td><td><code class="">0</code></td></tr></tbody></table><h3>DropdownMenuItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u5BF9\u5E94\u7684 value</td><td><code class="">string</code></td><td></td></tr><tr><td>title</td><td>\u83DC\u5355\u9879\u6807\u9898</td><td><code class="">string</code></td><td>\u5F53\u524D\u9009\u4E2D\u9879\u6587\u5B57</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u83DC\u5355</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>change</td><td>\u70B9\u51FB\u9009\u9879\u5BFC\u81F4 <code class="">value</code> \u53D8\u5316\u65F6\u89E6\u53D1</td><td><code class="">e: ({ detail: { value: string } }) =&gt; void</code></td><td></td></tr><tr><td>open</td><td>\u6253\u5F00\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr><tr><td>close</td><td>\u5173\u95ED\u83DC\u5355\u680F\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void</code></td><td></td></tr></tbody></table><h3>DropdownItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u83DC\u5355\u5185\u5BB9</td></tr></tbody></table><h3>DropdownItem Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>toggle</td><td>\u5207\u6362\u83DC\u5355\u5C55\u793A\u72B6\u6001\uFF0C\u4F20 <code class="">true</code> \u4E3A\u663E\u793A\uFF0C<code class="">false</code> \u4E3A\u9690\u85CF\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td><td><code class="">show?: boolean</code></td><td>-</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code class="">--quark-dropdown-menu-height</code></td><td><code class="">48px</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-background-color</code></td><td><code class="">#fff</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-color</code></td><td><code class="">#242729</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-font-size</code></td><td><code class="">14px</code></td><td>-</td></tr><tr><td><code class="">--quark-dropdown-menu-title-padding</code></td><td><code class="">8px</code></td><td>-</td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> DropdownMenuDirection = <span class="hljs-string">&quot;down&quot;</span> | <span class="hljs-string">&quot;up&quot;</span>;

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
</code></pre>`,31),u=[e],r={},j="",g=a({__name:"doc-react.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,d)=>(l(),n("div",p,u))}});export{g as default,j as excerpt,r as frontmatter};
