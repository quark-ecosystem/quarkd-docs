import{d as a,c as n,a as l,o as t}from"./vue.b5cdab5e.js";const p={class:"markdown-body"},e=l(`<h1>Form</h1><h3>Intro</h3><p>Form</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef, FormItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>Basic Usage</h3><p>Set value of form items, used with <code class="">prop</code> prop.</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef, FormItem, Field, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">other</span>: {
      <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>
    }
  });
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
    formRef.current.setRules([
      name: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Name is required&quot;</span> }],
      <span class="hljs-attr">password</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Password is required&quot;</span> },
      <span class="hljs-attr">other</span>: {
        <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Age is required&quot;</span> }],
      },
    ]);
  }, []);

  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formRef.current.validate(<span class="hljs-function">(<span class="hljs-params">valid. res</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;submit&quot;</span>, valid, res);
    })
  };

  <span class="hljs-keyword">const</span> reset = <span class="hljs-function">() =&gt;</span> {
    formRef.current.resetFields();
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fragment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formRef}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;other.age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Age&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.other.age}</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>
        &gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{reset}</span>&gt;</span>Reset<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span></span>
  );
};
</code></pre><h3>Validate Rules</h3><p>Custom validate callback function must be called. See more advanced usage at <a href="https://github.com/yiminghe/async-validator">async-validator</a>.</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;123456&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>
  });
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
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
    formRef.current.setRules({
      <span class="hljs-attr">name</span>: [
        { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">pattern</span>: <span class="hljs-regexp">/\\w{6}/</span>, message: <span class="hljs-string">&quot;Error message&quot;</span> }
      ],
      <span class="hljs-attr">password</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">validator</span>: validatorPassword }],
      <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">asyncValidator</span>: asyncValidator }]
    });
  }, []);

  <span class="hljs-keyword">const</span> submit = <span class="hljs-keyword">async</span> () =&gt; {
    <span class="hljs-keyword">const</span> valid = <span class="hljs-keyword">await</span> formRef.current.validate();
    <span class="hljs-built_in">console</span>.log(valid);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fragment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formRef}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Use pattern&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{form.password}</span>
            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
            <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Use validator&quot;</span>
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Age&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span>  <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;Use async validator&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>
        &gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
  );
};
</span></code></pre><h3>Form Items</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> picker = useRef();

  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">checkbox</span>: [<span class="hljs-string">&quot;apple&quot;</span>],
    <span class="hljs-attr">radio</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">rate</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">stepper</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">switch</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">textarea</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">uploader</span>: [],
    <span class="hljs-attr">picker</span>: <span class="hljs-string">&quot;&quot;</span>,
  });
  <span class="hljs-keyword">const</span> openPicker = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">true</span>);
  };
  <span class="hljs-keyword">const</span> closePicker = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>);
  };
  <span class="hljs-keyword">const</span> confirm = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> pickerValue = detail.value.map(<span class="hljs-function">(<span class="hljs-params">i</span>) =&gt;</span> i.value).join(<span class="hljs-string">&quot;&quot;</span>);
    setOpen(<span class="hljs-literal">false</span>);
    setForm({
      ...form,
      <span class="hljs-attr">picker</span>: pickerValue
    });
  };
  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form)
    picker.current.setColumns([
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
  }, []);
  <span class="hljs-keyword">const</span> onCheckboxChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setForm({
      ...form,
      <span class="hljs-attr">checkbox</span>: detail.value
    })
  };
  <span class="hljs-keyword">const</span> onRadioChange = <span class="hljs-function">(<span class="hljs-params">{ detail }</span>) =&gt;</span> {
    setForm({
      ...form,
      <span class="hljs-attr">radio</span>: detail.value
    })
  };
  <span class="hljs-keyword">const</span> getValues = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> values = formRef.getValues();
    <span class="hljs-built_in">console</span>.log(values);
  };
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fragment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{formRef}</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Checkbox&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.checkbox}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;onCheckboxChange&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>apple<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>banana<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Radio&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{form.radio}</span>
            <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;onRadioChange&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>square<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>circle<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Switch&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{form.switch}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rate&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Rate</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stepper&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Textarea&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Uploader&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span> <span class="hljs-attr">preview</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Picker&quot;</span> <span class="hljs-attr">islink</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.picker}</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{openPicker}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Please choose city&quot;</span>
            <span class="hljs-attr">ref</span>=<span class="hljs-string">{picker}</span>
            <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span>
            <span class="hljs-attr">onClose</span>=<span class="hljs-string">{closePicker}</span>
            <span class="hljs-attr">onConfirm</span>=<span class="hljs-string">{confirm}</span>
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{getValues}</span>
        &gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
  );
};
</span></code></pre><h3>Form Attributes</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
  });

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
    formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Name is required&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Age is required&quot;</span> },
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Form</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">{formRef}</span>
      <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;60px&quot;</span>
      <span class="hljs-attr">labelposition</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">labelsuffix</span>=<span class="hljs-string">&quot;\uFF1A&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Name&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>
        <span class="hljs-attr">hideasterisk</span>
        <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;<span class="hljs-attr">Password</span> <span class="hljs-attr">is</span> <span class="hljs-attr">required</span>&quot; }]}
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Password&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Age&quot;</span> <span class="hljs-attr">hidemessage</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>Use slots</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
  });

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
    formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Name is required&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;Age is required&quot;</span> },
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>Custom Label<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;suffix&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>
            Search
          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>Add form items dynamically</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">user</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span> }],
  });

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
  }, []);

  <span class="hljs-keyword">const</span> submit = <span class="hljs-function">() =&gt;</span> {
    formRef.validate(<span class="hljs-function">(<span class="hljs-params">valid, res</span>) =&gt;</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;submit&quot;</span>, valid, res);
    });
  };

  <span class="hljs-keyword">const</span> addUser = <span class="hljs-function">() =&gt;</span> {
    form.user.push({ <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span> });
    setForm(form);
  };

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fragment</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Form</span>&gt;</span>
        {form.user.map((item, index) =&gt; {
          return (
            <span class="hljs-tag">&lt;<span class="hljs-name">Fragment</span>&gt;</span>
              <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">user.</span>\${<span class="hljs-attr">index</span>}<span class="hljs-attr">.name</span>\`}
                <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">Name</span>\${<span class="hljs-attr">index</span>}\`}
                <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;<span class="hljs-attr">Name</span> <span class="hljs-attr">is</span> <span class="hljs-attr">required</span>&quot; }]}
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Name&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>

              <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">user.</span>\${<span class="hljs-attr">index</span>}<span class="hljs-attr">.age</span>\`}
                <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">Age</span>\${<span class="hljs-attr">index</span>}\`}
                <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;<span class="hljs-attr">Age</span> <span class="hljs-attr">is</span> <span class="hljs-attr">required</span>&quot; }]}
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Age&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
          );
        })}
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>&gt;</span>
          Submit
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{addUser}</span>&gt;</span>
          Add
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Form Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>validatefirst</td><td>whether to stop the validation when a rule fails</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidemessage</td><td>whether to hide the error message</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>whether to hide a red asterisk (star) next to the required field label.</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>labelwidth</td><td>width of label, e.g. \u201850px\u2019.</td><td><code class="">string</code></td><td></td></tr><tr><td>labelsuffix</td><td>suffix of the label</td><td><code class="">string</code></td><td></td></tr><tr><td>labelposition</td><td>position of label. <code class="">label-width</code> prop is required</td><td><code class="">letf/right</code></td><td><code class="">left</code></td></tr></tbody></table><h3>Form Method</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation, if the validation has passed, return the model. Returns a promise if callback is omitted</td><td><code class="">Function(callback: Function(boolean, object))</code></td></tr><tr><td>validateField</td><td>validate one or several form items</td><td><code class="">Function(props: array | string, callback: Function(errorMessage: string))</code></td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td></td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields\u2019 validation messages will be cleared</td><td><code class="">Function(props: array | string)</code></td></tr><tr><td>setModel</td><td>set data of form component.</td><td><code class="">(model: object) =&gt; void</code></td></tr><tr><td>setRules</td><td>set validation rules of form</td><td><code class="">(rules: Rules) =&gt; void</code></td></tr><tr><td>getValues</td><td>get the form data, the premise must be set to set the model</td><td></td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>prop</td><td>a key of <code class="">model</code>. In the use of validate and resetFields method, the attribute is required</td><td><code class="">string</code></td><td></td></tr><tr><td>label</td><td>label</td><td><code class="">string</code></td><td></td></tr><tr><td>rules</td><td>validation rules of form</td><td><code class="">object</code></td><td></td></tr><tr><td>labelwidth</td><td>width of label, e.g. \u201850px\u2019.</td><td><code class="">string</code></td><td></td></tr><tr><td>hidemessage</td><td>whether to hide the error message</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>whether to hide a red asterisk (star) next to the required field label.</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>islink</td><td>whether to show right arrow</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>label</td><td>custom label</td></tr><tr><td>suffix</td><td>custom suffix</td></tr></tbody></table>`,29),r=[e],d={},i="",g=a({__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,h)=>(t(),n("div",p,r))}});export{g as default,i as excerpt,d as frontmatter};
