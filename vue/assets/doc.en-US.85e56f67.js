import{d as a,c as n,a as l,o as t}from"./vue.acb82bcc.js";const p={class:"markdown-body"},e=l(`<h1>Form</h1><h3>Intro</h3><p>Form</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/form&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Set value of form items, used with <code class="">prop</code> prop.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/form&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/field&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/button&quot;</span>;
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.password&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Password&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;other.age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Age&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.other.age&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
    Submit
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
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
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Name is required&quot;</span> }],
      <span class="hljs-attr">password</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Password is required&quot;</span> },
      <span class="hljs-attr">other</span>: {
        <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Age is required&quot;</span> }],
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
</code></pre><h3>Validate Rules</h3><p>Custom validate callback function must be called. See more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use pattern&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use validator&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Age&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use async validator&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
    Submit
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-keyword">const</span> validatorPassword = <span class="hljs-function">(<span class="hljs-params">rule, val, callback</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (!val) {
      callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;Error message&quot;</span>));
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (val === <span class="hljs-string">&quot;123456&quot;</span>) {
      callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&quot;Password can not be 123456&quot;</span>));
    } <span class="hljs-keyword">else</span> {
      callback();
    }
  };
  <span class="hljs-keyword">const</span> asyncValidator = <span class="hljs-function">(<span class="hljs-params">rule, value</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
      <span class="hljs-keyword">if</span> (value &lt; <span class="hljs-number">18</span>) {
        reject(<span class="hljs-string">&quot;Must not be younger than 18&quot;</span>);
      } <span class="hljs-keyword">else</span> {
        resolve();
      }
    });
  };
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">form</span>: {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
        <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
      },
      <span class="hljs-attr">rules</span>: {
        <span class="hljs-attr">name</span>: [
          { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">pattern</span>: <span class="hljs-regexp">/\\w{6}/</span>, message: <span class="hljs-string">&quot;Error message&quot;</span> }
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
</code></pre><h3>Form Items</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Checkbox&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox-group</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.checkbox&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onCheckboxChange&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Radio&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio-group</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.radio&quot;</span>
      <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onRadioChange&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>circle<span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Switch&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;switch&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-switch</span> <span class="hljs-attr">:checked</span>=<span class="hljs-string">&quot;form.switch&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rate&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;rate&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-rate</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-rate</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stepper&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;stepper&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Textarea&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Uploader&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Picker&quot;</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">islink</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;form.picker&quot;</span> <span class="hljs-attr">readonly</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;pickerVisible = true&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-picker</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose city&quot;</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;pickerRef&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;pickerVisible&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;getValues&quot;</span>&gt;</span>
    Submit
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
        <span class="hljs-attr">values</span>: [
          <span class="hljs-string">&quot;Hangzhou&quot;</span>,
          <span class="hljs-string">&quot;Jiaxing&quot;</span>,
          <span class="hljs-string">&quot;Shaoxing&quot;</span>,
          <span class="hljs-string">&quot;Ningbo&quot;</span>,
          <span class="hljs-string">&quot;Huzhou&quot;</span>,
          <span class="hljs-string">&quot;Qiandaohu&quot;</span>,
        ],
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
</code></pre><h3>Form Attributes</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;formRef&quot;</span>
  <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;60px&quot;</span>
  <span class="hljs-attr">labelposition</span>=<span class="hljs-string">&quot;right&quot;</span>
  <span class="hljs-attr">labelsuffix</span>=<span class="hljs-string">&quot;\uFF1A&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;form.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
    <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>
    <span class="hljs-attr">hideasterisk</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &quot;</span><span class="hljs-attr">Password</span> <span class="hljs-attr">is</span> <span class="hljs-attr">required</span>&quot; }]&quot;
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Password&quot;</span>/&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Age&quot;</span> <span class="hljs-attr">hidemessage</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
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
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Name is required&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Age is required&quot;</span> },
    });
  },
};
</code></pre><h3>Use slots</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>Custom Label<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;suffix&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>Search<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
</code></pre><h3>Add form items dynamically</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;dynamicFormRef&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in form.user&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;\`Name\${index}\`&quot;</span>
      <span class="hljs-attr">:prop</span>=<span class="hljs-string">&quot;\`user.\${index}.name\`&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;Name is required&#39; }]&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;item.name&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-form-item</span>
      <span class="hljs-attr">:label</span>=<span class="hljs-string">&quot;\`Age\${index}\`&quot;</span>
      <span class="hljs-attr">:prop</span>=<span class="hljs-string">&quot;\`user.\${index}.age\`&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;Age is required&#39; }]&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">quark-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;item.age&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">quark-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
    Submit
  <span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">quark-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;addUser&quot;</span>&gt;</span>Add<span class="hljs-tag">&lt;/<span class="hljs-name">quark-button</span>&gt;</span>
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
</code></pre><h2>API</h2><h3>Form Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>validatefirst</td><td>whether to stop the validation when a rule fails</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidemessage</td><td>whether to hide the error message</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>whether to hide a red asterisk (star) next to the required field label.</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>labelwidth</td><td>width of label, e.g. \u201850px\u2019.</td><td><code class="">string</code></td><td></td></tr><tr><td>labelsuffix</td><td>suffix of the label</td><td><code class="">string</code></td><td></td></tr><tr><td>labelposition</td><td>position of label. <code class="">label-width</code> prop is required</td><td><code class="">letf/right</code></td><td><code class="">left</code></td></tr></tbody></table><h3>Form Method</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation, if the validation has passed, return the model. Returns a promise if callback is omitted</td><td><code class="">Function(callback: Function(boolean, object))</code></td></tr><tr><td>validateField</td><td>validate one or several form items</td><td><code class="">Function(props: array | string, callback: Function(errorMessage: string))</code></td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td></td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields\u2019 validation messages will be cleared</td><td><code class="">Function(props: array | string)</code></td></tr><tr><td>setModel</td><td>set data of form component.</td><td><code class="">(model: object) =&gt; void</code></td></tr><tr><td>setRules</td><td>set validation rules of form</td><td><code class="">(rules: Rules) =&gt; void</code></td></tr><tr><td>getValues</td><td>get the form data, the premise must be set to set the model</td><td></td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>prop</td><td>a key of <code class="">model</code>. In the use of validate and resetFields method, the attribute is required</td><td><code class="">string</code></td><td></td></tr><tr><td>label</td><td>label</td><td><code class="">string</code></td><td></td></tr><tr><td>rules</td><td>validation rules of form</td><td><code class="">object</code></td><td></td></tr><tr><td>labelwidth</td><td>width of label, e.g. \u201850px\u2019.</td><td><code class="">string</code></td><td></td></tr><tr><td>hidemessage</td><td>whether to hide the error message</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>whether to hide a red asterisk (star) next to the required field label.</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>islink</td><td>whether to show right arrow</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>custom label</td></tr><tr><td>suffix</td><td>custom suffix</td></tr></tbody></table>`,34),r=[e],i={},u="",d=a({__name:"doc.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(h,o)=>(t(),n("div",p,r))}});export{d as default,u as excerpt,i as frontmatter};
