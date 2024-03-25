import{d as a,c as t,a as n,o as l}from"./vue.acb82bcc.js";const e={class:"markdown-body"},p=n(`<h1>Cell</h1><h3>Intro</h3><p>Used for cell components that can slide left and right to display operation buttons.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/swipecell&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>The component provides two slots, left and right, to define the contents of the sliding area on both sides</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell Title&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> Select <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> Delete <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> Collect <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><h3>Custom Content</h3><p><code class="">quark-swipe-cell</code> can nest anything you want.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;No Data&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Go to add data.&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;local&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> Add <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><h3>Async Close</h3><p>You can customize the behavior when the two sides sliding content is closed by using <code class="">setBeforeClose</code> to set the callback function.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-swipe-cell</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;asyncSwipeCell&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell Title&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span> Delete <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-swipe-cell</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.asyncSwipeCell.setBeforeClose(<span class="hljs-function">(<span class="hljs-params">position: SwipeCellPosition</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (position === <span class="hljs-string">&quot;right&quot;</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
          <span class="hljs-keyword">const</span> toast = Toast.loading(<span class="hljs-string">&quot;loading...&quot;</span>);
          <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            toast.hide();
            Toast.success(<span class="hljs-string">&quot;successfully deleted&quot;</span>);
            resolve(<span class="hljs-literal">true</span>);
          }, <span class="hljs-number">1000</span>);
        });
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
      }
    });
  },
};
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Unique identifiers</td><td><code class="">number | string</code></td><td><code class="">&#39;&#39;</code></td></tr><tr><td>leftwidth</td><td>Width of the left swipe area</td><td><code class="">number</code></td><td><code class="">auto</code></td></tr><tr><td>rightwidth</td><td>Width of the right swipe area</td><td><code class="">number</code></td><td><code class="">auto</code></td></tr><tr><td>disabled</td><td>Whether to disabled swipe</td><td><code class="">boolean </code></td><td><code class="">false</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom content</td></tr><tr><td>left</td><td>Content of left scrollable area</td></tr><tr><td>right</td><td>Content of right scrollable area</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>click</td><td>Emitted when SwipeCell is clicked</td><td><code class="">(args: { detail: { positon: SwipeCellPosition } }) =&gt; void</code></td></tr><tr><td>open</td><td>Emitted when SwipeCell is opened</td><td><code class="">(args: Params) =&gt; void</code></td></tr><tr><td>close</td><td>Emitted when SwipeCell is closed</td><td><code class="">(args: Params) =&gt; void</code></td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>open</td><td>open SwipeCell</td><td><code class="">(args: SwipeCellSide) =&gt; void</code></td></tr><tr><td>close</td><td>close SwipeCell</td><td><code class="">() =&gt; void</code></td></tr><tr><td>setBeforeClose</td><td>set callback function before close</td><td><code class="">(args: SwipeCellPosition) =&gt; boolean | Promise&lt;boolean&gt;</code></td></tr></tbody></table><h3>Data Structure of Action</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> SwipeCellSide = <span class="hljs-string">&quot;left&quot;</span> | <span class="hljs-string">&quot;right&quot;</span>;
<span class="hljs-keyword">type</span> SwipeCellPosition = SwipeCellSide | <span class="hljs-string">&quot;cell&quot;</span> | <span class="hljs-string">&quot;outside&quot;</span>;
<span class="hljs-keyword">type</span> Params = {
  <span class="hljs-attr">detail</span>: {
    <span class="hljs-attr">name</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">number</span>;
    position: SwipeCellPosition;
  };
};
</code></pre>`,26),o=[p],i={},u="",j=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,r)=>(l(),t("div",e,o))}});export{j as default,u as excerpt,i as frontmatter};
