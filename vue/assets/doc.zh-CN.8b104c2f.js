import{d as a,c as n,a as l,o as t}from"./vue.acb82bcc.js";const p={class:"markdown-body"},u=l(`<h1>Form \u8868\u5355</h1><h3>\u4ECB\u7ECD</h3><p>\u8868\u5355</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/form&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><p>\u914D\u5408 prop \u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/form&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/field&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;other.age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.other.age&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span> \u63D0\u4EA4 <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span>&gt;</span>\u91CD\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">other</span>: {
          <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>,
        },
      },
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.formRef.setModel(<span class="hljs-built_in">this</span>.form);
    <span class="hljs-built_in">this</span>.$refs.formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> }],
      <span class="hljs-attr">password</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> },
      <span class="hljs-attr">other</span>: {
        <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> }],
      },
    });
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">submit</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$refs.formRef.validate(<span class="hljs-function">(<span class="hljs-params">valid, res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;submit&quot;</span>, valid, res);
      });
    },
    <span class="hljs-function"><span class="hljs-title">reset</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$refs.formRef.resetFields();
    },
  },
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219</h3><p>\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 <a href="https://github.com/yiminghe/async-validator">async-validator</a>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u6B63\u5219\u6821\u9A8C&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u51FD\u6570\u6821\u9A8C&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u6821\u9A8C&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span> \u63D0\u4EA4 <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-keyword">const</span> validatorPassword = <span class="hljs-function">(<span class="hljs-params">rule, val, callback</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (!val) {
      callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&quot;</span>));
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (val === <span class="hljs-string">&quot;123456&quot;</span>) {
      callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;\u5BC6\u7801\u4E0D\u80FD\u4E3A123456&quot;</span>));
    } <span class="hljs-keyword">else</span> {
      callback();
    }
  };
  <span class="hljs-keyword">const</span> asyncValidator = <span class="hljs-function">(<span class="hljs-params">rule, value</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (value &lt; <span class="hljs-number">18</span>) {
        reject(<span class="hljs-string">&quot;\u4E0D\u80FD\u5C0F\u4E8E18\u5C81&quot;</span>);
      } <span class="hljs-keyword">else</span> {
        resolve();
      }
    });
  };
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;123456&quot;</span>,
        <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
      },
      <span class="hljs-attr">rules</span>: {
        <span class="hljs-attr">name</span>: [
          { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">pattern</span>: <span class="hljs-regexp">/\\w{6}/</span>, message: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&quot;</span> }
        ],
        <span class="hljs-attr">password</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">validator</span>: validatorPassword }],
        <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">asyncValidator</span>: asyncValidator }]
      }
    }
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.formRef.setRules(<span class="hljs-built_in">this</span>.rules);
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-title">submit</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> valid = <span class="hljs-keyword">await</span> <span class="hljs-built_in">this</span>.$refs.formRef.validate();
      <span class="hljs-built_in">console</span>.log(valid)
    },
  }
}
</code></pre><h3>\u8868\u5355\u9879\u7C7B\u578B</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.checkbox&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onCheckboxChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u82F9\u679C<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>\u9999\u8549<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5355\u9009\u6846&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.radio&quot;</span>
      <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onRadioChange&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u65B9\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>\u5706\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5F00\u5173&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;form.switch&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BC4\u5206&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;rate&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6B65\u8FDB\u5668&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;stepper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C\u57DF&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u4EF6\u4E0A\u4F20&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5668&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">islink</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.picker&quot;</span> <span class="hljs-attr">readonly</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;pickerVisible = true&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u57CE\u5E02&quot;</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;pickerVisible&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValues&quot;</span>&gt;</span>
    \u63D0\u4EA4
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">pickerVisible</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">checkbox</span>: [<span class="hljs-string">&quot;apple&quot;</span>],
        <span class="hljs-attr">radio</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">rate</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">stepper</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">textarea</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">uploader</span>: [],
        <span class="hljs-attr">picker</span>: <span class="hljs-string">&quot;&quot;</span>,
      },
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.formRef.setModel(<span class="hljs-built_in">this</span>.form);
    <span class="hljs-built_in">this</span>.$refs.pickerRef.setColumns([
      {
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">0</span>,
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;\u676D\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5609\u5174&quot;</span>, <span class="hljs-string">&quot;\u7ECD\u5174&quot;</span>, <span class="hljs-string">&quot;\u5B81\u6CE2&quot;</span>, <span class="hljs-string">&quot;\u6E56\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5343\u5C9B\u6E56&quot;</span>],
      },
    ]);
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">getValues</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">const</span> values = <span class="hljs-built_in">this</span>.$refs.formRef.getValues();
      <span class="hljs-built_in">console</span>.log(values);
    },
    <span class="hljs-function"><span class="hljs-title">onCheckboxChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.form.checkbox = detail.value;
    },
    <span class="hljs-function"><span class="hljs-title">onRadioChange</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.form.radio = detail.value;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.form.picker = detail.value.map(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> i.value).join(<span class="hljs-string">&quot;&quot;</span>);
      <span class="hljs-built_in">this</span>.pickerVisible = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.pickerVisible = <span class="hljs-literal">false</span>;
    },
  },
};
</code></pre><h3>\u8868\u5355\u5C5E\u6027</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span>
  <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;60px&quot;</span>
  <span class="hljs-attr">labelposition</span>=<span class="hljs-string">&quot;right&quot;</span>
  <span class="hljs-attr">labelsuffix</span>=<span class="hljs-string">&quot;\uFF1A&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
    <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
    <span class="hljs-attr">hideasterisk</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &quot;</span>\u8BF7\u8F93\u5165\u5BC6\u7801&quot; }]&quot;
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> <span class="hljs-attr">hidemessage</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
      },
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.formRef.setModel(<span class="hljs-built_in">this</span>.form);
    <span class="hljs-built_in">this</span>.$refs.formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> },
    });
  },
};
</code></pre><h3>\u4F7F\u7528\u63D2\u69FD</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49label<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;suffix&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>\u641C\u7D22<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><h3>\u52A8\u6001\u589E\u52A0\u8868\u5355\u9879</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dynamicFormRef&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in form.user&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;\`\u59D3\u540D\${index}\`&quot;</span>
      <span class="hljs-attr">:prop</span>=<span class="hljs-string">&quot;\`user.\${index}.name\`&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u8F93\u5165\u59D3\u540D&#39; }]&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;\`\u5E74\u9F84\${index}\`&quot;</span>
      <span class="hljs-attr">:prop</span>=<span class="hljs-string">&quot;\`user.\${index}.age\`&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;\u8BF7\u8F93\u5165\u5E74\u9F84&#39; }]&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;item.age&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span> \u63D0\u4EA4 <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;addUser&quot;</span>&gt;</span>\u6DFB\u52A0<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">user</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span> }],
      },
    };
  },
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.dynamicFormRef.setModel(<span class="hljs-built_in">this</span>.form);
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">submit</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.$refs.dynamicFormRef.validate(<span class="hljs-function">(<span class="hljs-params">valid, res</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;submit&quot;</span>, valid, res);
      });
    },
    <span class="hljs-function"><span class="hljs-title">addUser</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.form.user.push({ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span> });
    },
  },
};
</code></pre><h2>API</h2><h3>Form Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>validatefirst</td><td>\u662F\u5426\u5728\u67D0\u4E00\u9879\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u505C\u6B62\u6821\u9A8C</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidemessage</td><td>\u662F\u5426\u9690\u85CF\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>labelwidth</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019\u3002</td><td><code class="">string</code></td><td></td></tr><tr><td>labelsuffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td><code class="">string</code></td><td></td></tr><tr><td>labelposition</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E label-width</td><td><code class="">letf | right</code></td><td><code class="">left</code></td></tr></tbody></table><h3>Form Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\uFF0C\u82E5\u6821\u9A8C\u901A\u8FC7\u5219\u8FD4\u56DE model\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code class="">Function(callback: Function(boolean, object))</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code class="">Function(props: array | string, callback: Function(errorMessage: string))</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code class="">Function(props: array | string)</code></td></tr><tr><td>setModel</td><td>\u8BBE\u7F6E\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td><code class="">(model: object) =&gt; void</code></td></tr><tr><td>setRules</td><td>\u8BBE\u7F6E\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td><code class="">(rules: Rules) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u524D\u63D0\u9700\u8BBE\u7F6E model</td><td></td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields\u3001getValues \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td><code class="">string</code></td><td></td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td><code class="">string</code></td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td><code class="">object</code></td><td></td></tr><tr><td>labelwidth</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019\u3002</td><td><code class="">string</code></td><td></td></tr><tr><td>hidemessage</td><td>\u662F\u5426\u9690\u85CF\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>islink</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7 label</td></tr><tr><td>suffix</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u540E\u7F00</td></tr></tbody></table>`,34),c=[u],j={},i="",g=a({__name:"doc.zh-CN",setup(r,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,e)=>(t(),n("div",p,c))}});export{g as default,i as excerpt,j as frontmatter};
