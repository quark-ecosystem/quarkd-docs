import{d as a,c as n,a as l,o as t}from"./vue.35c7b340.js";const p={class:"markdown-body"},u=l(`<h1>Form \u8868\u5355</h1><h3>\u4ECB\u7ECD</h3><p>\u8868\u5355</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef, FormItem } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u672C\u7528\u6CD5</h3><p>\u914D\u5408 prop \u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u8868\u5355\u9879\u7684\u503C</p><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Form, FormRef, FormItem, Field, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
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
      name: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> }],
      <span class="hljs-attr">password</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot;</span> },
      <span class="hljs-attr">other</span>: {
        <span class="hljs-attr">age</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> }],
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
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;other.age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.other.age}</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>
        &gt;</span>
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{reset}</span>&gt;</span>\u91CD\u7F6E<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span></span>
  );
};
</code></pre><h3>\u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219</h3><p>\u81EA\u5B9A\u4E49\u6821\u9A8C callback \u5FC5\u987B\u88AB\u8C03\u7528\u3002 \u66F4\u591A\u9AD8\u7EA7\u7528\u6CD5\u53EF\u53C2\u8003 <a href="https://github.com/yiminghe/async-validator">async-validator</a>\u3002</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;&#39;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;123456&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-number">18</span>
  });
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;(<span class="hljs-literal">null</span>);

  useEffect(<span class="hljs-function">() =&gt;</span> {
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
    formRef.current.setRules({
      <span class="hljs-attr">name</span>: [
        { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">pattern</span>: <span class="hljs-regexp">/\\w{6}/</span>, message: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9&quot;</span> }
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
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u6B63\u5219\u6821\u9A8C&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{form.password}</span>
            <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
            <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u51FD\u6570\u6821\u9A8C&quot;</span>
          /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span>  <span class="hljs-attr">placoholder</span>=<span class="hljs-string">&quot;\u5F02\u6B65\u6821\u9A8C&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span>
          <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>
        &gt;</span>
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>/&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
  );
};
</span></code></pre><h3>\u8868\u5355\u9879\u5927\u5168</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&quot;\u676D\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5609\u5174&quot;</span>, <span class="hljs-string">&quot;\u7ECD\u5174&quot;</span>, <span class="hljs-string">&quot;\u5B81\u6CE2&quot;</span>, <span class="hljs-string">&quot;\u6E56\u5DDE&quot;</span>, <span class="hljs-string">&quot;\u5343\u5C9B\u6E56&quot;</span>],
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
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u590D\u9009\u6846&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">CheckboxGroup</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.checkbox}</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;onCheckboxChange&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;apple&quot;</span>&gt;</span>\u82F9\u679C<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;banana&quot;</span>&gt;</span>\u9999\u8549<span class="hljs-tag">&lt;/<span class="hljs-name">Checkbox</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">CheckboxGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5355\u9009\u6846&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">RadioGroup</span>
            <span class="hljs-attr">value</span>=<span class="hljs-string">{form.radio}</span>
            <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>
            <span class="hljs-attr">onChange</span>=<span class="hljs-string">&quot;onRadioChange&quot;</span>
          &gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u65B9\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;circle&quot;</span>&gt;</span>\u5706\u5F62<span class="hljs-tag">&lt;/<span class="hljs-name">Radio</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">RadioGroup</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5F00\u5173&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{form.switch}</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u8BC4\u5206&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Rate</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6B65\u8FDB\u5668&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Stepper</span> <span class="hljs-attr">min</span>=<span class="hljs-string">&quot;0&quot;</span> <span class="hljs-attr">max</span>=<span class="hljs-string">&quot;99&quot;</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;textarea&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u672C\u57DF&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Textarea</span> <span class="hljs-attr">autosize</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u6587\u4EF6\u4E0A\u4F20&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Uploader</span> <span class="hljs-attr">preview</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5668&quot;</span> <span class="hljs-attr">islink</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{form.picker}</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{openPicker}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
            <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u57CE\u5E02&quot;</span>
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
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
  );
};
</span></code></pre><h3>\u8868\u5355\u5C5E\u6027</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
  });

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
    formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> },
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Form</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">{formRef}</span>
      <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;60px&quot;</span>
      <span class="hljs-attr">labelposition</span>=<span class="hljs-string">&quot;right&quot;</span>
      <span class="hljs-attr">labelsuffix</span>=<span class="hljs-string">&quot;\uFF1A&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;name&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> <span class="hljs-attr">labelwidth</span>=<span class="hljs-string">&quot;70px&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;password&quot;</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span>
        <span class="hljs-attr">hideasterisk</span>
        <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;\u8BF7\u8F93\u5165\u5BC6\u7801&quot; }]}
      &gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5BC6\u7801&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">&quot;age&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> <span class="hljs-attr">hidemessage</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>\u4F7F\u7528\u63D2\u69FD</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> formRef = useRef&lt;FormRef&gt;();
  <span class="hljs-keyword">const</span> [form, setForm] = useState({
    <span class="hljs-attr">name</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">password</span>: <span class="hljs-string">&quot;&quot;</span>,
    <span class="hljs-attr">age</span>: <span class="hljs-string">&quot;&quot;</span>,
  });

  useEffect(<span class="hljs-function">() =&gt;</span> {
    formRef.setModel(form);
    formRef.setRules({
      <span class="hljs-attr">name</span>: [{ <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot;</span> }],
      <span class="hljs-attr">age</span>: { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">&quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot;</span> },
    });
  }, []);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;label&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49label<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;suffix&quot;</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span>&gt;</span>
            \u641C\u7D22
          <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span></span>
  );
};
</code></pre><h3>\u52A8\u6001\u589E\u52A0\u8868\u5355\u9879</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
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
                <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>\`\u59D3\u540D\${<span class="hljs-attr">index</span>}\`}
                <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;\u8BF7\u8F93\u5165\u59D3\u540D&quot; }]}
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u59D3\u540D&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>

              <span class="hljs-tag">&lt;<span class="hljs-name">FormItem</span>
                <span class="hljs-attr">prop</span>=<span class="hljs-string">{</span>\`<span class="hljs-attr">user.</span>\${<span class="hljs-attr">index</span>}<span class="hljs-attr">.age</span>\`}
                <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>\`\u5E74\u9F84\${<span class="hljs-attr">index</span>}\`}
                <span class="hljs-attr">rules</span>=<span class="hljs-string">{[{</span> <span class="hljs-attr">required:</span> <span class="hljs-attr">true</span>, <span class="hljs-attr">message:</span> &quot;\u8BF7\u8F93\u5165\u5E74\u9F84&quot; }]}
              &gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">Field</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u5E74\u9F84&quot;</span> /&gt;</span>
              <span class="hljs-tag">&lt;/<span class="hljs-name">FormItem</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span>
          );
        })}
      <span class="hljs-tag">&lt;/<span class="hljs-name">Form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;flex-box&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{submit}</span>&gt;</span>
          \u63D0\u4EA4
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;big&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{addUser}</span>&gt;</span>
          \u6DFB\u52A0
        <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Fragment</span>&gt;</span></span>
  );
};
</code></pre><h2>API</h2><h3>Form Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>validatefirst</td><td>\u662F\u5426\u5728\u67D0\u4E00\u9879\u6821\u9A8C\u4E0D\u901A\u8FC7\u65F6\u505C\u6B62\u6821\u9A8C</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidemessage</td><td>\u662F\u5426\u9690\u85CF\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>labelwidth</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019\u3002</td><td><code class="">string</code></td><td></td></tr><tr><td>labelsuffix</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u540E\u7F00</td><td><code class="">string</code></td><td></td></tr><tr><td>labelposition</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u4F4D\u7F6E\uFF0C\u5219\u9700\u8981\u8BBE\u7F6E label-width</td><td><code class="">letf | right</code></td><td><code class="">left</code></td></tr></tbody></table><h3>Form Methods</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>validate</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002\u8BE5\u56DE\u8C03\u51FD\u6570\u4F1A\u5728\u6821\u9A8C\u7ED3\u675F\u540E\u88AB\u8C03\u7528\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF1A\u662F\u5426\u6821\u9A8C\u6210\u529F\u548C\u672A\u901A\u8FC7\u6821\u9A8C\u7684\u5B57\u6BB5\uFF0C\u82E5\u6821\u9A8C\u901A\u8FC7\u5219\u8FD4\u56DE model\u3002\u82E5\u4E0D\u4F20\u5165\u56DE\u8C03\u51FD\u6570\uFF0C\u5219\u4F1A\u8FD4\u56DE\u4E00\u4E2A promise</td><td><code class="">Function(callback: Function(boolean, object))</code></td></tr><tr><td>validateField</td><td>\u5BF9\u90E8\u5206\u8868\u5355\u5B57\u6BB5\u8FDB\u884C\u6821\u9A8C\u7684\u65B9\u6CD5</td><td><code class="">Function(props: array | string, callback: Function(errorMessage: string))</code></td></tr><tr><td>resetFields</td><td>\u5BF9\u6574\u4E2A\u8868\u5355\u8FDB\u884C\u91CD\u7F6E\uFF0C\u5C06\u6240\u6709\u5B57\u6BB5\u503C\u91CD\u7F6E\u4E3A\u521D\u59CB\u503C\u5E76\u79FB\u9664\u6821\u9A8C\u7ED3\u679C</td><td></td></tr><tr><td>clearValidate</td><td>\u79FB\u9664\u8868\u5355\u9879\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u4F20\u5165\u5F85\u79FB\u9664\u7684\u8868\u5355\u9879\u7684 prop \u5C5E\u6027\u6216\u8005 prop \u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5982\u4E0D\u4F20\u5219\u79FB\u9664\u6574\u4E2A\u8868\u5355\u7684\u6821\u9A8C\u7ED3\u679C</td><td><code class="">Function(props: array | string)</code></td></tr><tr><td>setModel</td><td>\u8BBE\u7F6E\u8868\u5355\u6570\u636E\u5BF9\u8C61</td><td><code class="">(model: object) =&gt; void</code></td></tr><tr><td>setRules</td><td>\u8BBE\u7F6E\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td><code class="">(rules: Rules) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u8868\u5355\u6570\u636E\uFF0C\u524D\u63D0\u9700\u8BBE\u7F6E model</td><td></td></tr></tbody></table><h3>FormItem Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u8868\u5355\u57DF model \u5B57\u6BB5\uFF0C\u5728\u4F7F\u7528 validate\u3001resetFields\u3001getValues \u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u5C5E\u6027\u662F\u5FC5\u586B\u7684</td><td><code class="">string</code></td><td></td></tr><tr><td>label</td><td>\u6807\u7B7E\u6587\u672C</td><td><code class="">string</code></td><td></td></tr><tr><td>rules</td><td>\u8868\u5355\u9A8C\u8BC1\u89C4\u5219</td><td><code class="">object</code></td><td></td></tr><tr><td>labelwidth</td><td>\u8868\u5355\u57DF\u6807\u7B7E\u7684\u7684\u5BBD\u5EA6\uFF0C\u4F8B\u5982 \u201850px\u2019\u3002</td><td><code class="">string</code></td><td></td></tr><tr><td>hidemessage</td><td>\u662F\u5426\u9690\u85CF\u6821\u9A8C\u9519\u8BEF\u4FE1\u606F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideasterisk</td><td>\u662F\u5426\u9690\u85CF\u5FC5\u586B\u5B57\u6BB5\u7684\u6807\u7B7E\u65C1\u8FB9\u7684\u7EA2\u8272\u661F\u53F7</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>islink</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>FormItem Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>label</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7 label</td></tr><tr><td>suffix</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u540E\u7F00</td></tr></tbody></table>`,29),c=[u],j={},g="",d=a({__name:"doc-react.zh-CN",setup(e,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(r,h)=>(t(),n("div",p,c))}});export{d as default,g as excerpt,j as frontmatter};
