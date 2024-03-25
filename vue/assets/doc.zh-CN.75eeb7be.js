import{d as a,c as u,a as t,o as n}from"./vue.acb82bcc.js";const l={class:"markdown-body"},e=t(`<h1>Calendar \u65E5\u5386</h1><h3>\u4ECB\u7ECD</h3><p>\u65E5\u5386\u7EC4\u4EF6\u7528\u4E8E\u9009\u62E9\u65E5\u671F\u6216\u65E5\u671F\u533A\u95F4\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/calendar&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><h4>\u9009\u62E9\u5355\u4E2A\u65E5\u671F</h4><p>\u4E0B\u9762\u6F14\u793A\u4E86\u7ED3\u5408\u5355\u5143\u683C\u6765\u4F7F\u7528\u65E5\u5386\u7EC4\u4EF6\u7684\u7528\u6CD5\uFF0C\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u89E6\u53D1 <code class="">confirm</code> \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5355\u4E2A\u65E5\u671F&quot;</span>
      <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;formatFullDate(date)&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span> @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.date = detail.value;
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">formatFullDate</span>(<span class="hljs-params">date</span>)</span> {
      <span class="hljs-keyword">if</span> (date) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${date.getFullYear()}</span>/<span class="hljs-subst">\${formatDate(date)}</span>\`</span>;
      }
    },
  },
};
</code></pre><h4>\u9009\u62E9\u591A\u4E2A\u65E5\u671F</h4><p>\u8BBE\u7F6E <code class="">type</code> \u4E3A <code class="">multiple</code> \u540E\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C\u6B64\u65F6 <code class="">confirm</code> \u4E8B\u4EF6\u8FD4\u56DE\u7684 date \u4E3A\u6570\u7EC4\u7ED3\u6784\uFF0C\u6570\u7EC4\u5305\u542B\u82E5\u5E72\u4E2A\u9009\u4E2D\u7684\u65E5\u671F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u591A\u4E2A\u65E5\u671F&quot;</span>
      <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;formatMultiple(date)&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;multiple&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.date = detail.value;
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">formatMultiple</span>(<span class="hljs-params">dates</span>)</span> {
      <span class="hljs-keyword">if</span> (dates.length) {
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${dates.length}</span>\u4E2A\u65E5\u671F\`</span>;
      }
    },
  },
};
</code></pre><h4>\u9009\u62E9\u65E5\u671F\u533A\u95F4</h4><p>\u8BBE\u7F6E <code class="">type</code> \u4E3A <code class="">range</code> \u540E\u53EF\u4EE5\u9009\u62E9\u591A\u4E2A\u65E5\u671F\uFF0C\u6B64\u65F6 <code class="">confirm</code> \u4E8B\u4EF6\u8FD4\u56DE\u7684 date \u4E3A\u6570\u7EC4\u7ED3\u6784\uFF0C\u6570\u7EC4\u7B2C\u4E00\u9879\u4E3A\u5F00\u59CB\u65F6\u95F4\uFF0C\u7B2C\u4E8C\u9879\u4E3A\u7ED3\u675F\u65F6\u95F4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u65E5\u671F\u533A\u95F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E0D\u80FD\u4E3A\u540C\u4E00\u5929\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code class="">allowsameday</code> \u5C5E\u6027\u6765\u5141\u8BB8\u9009\u62E9\u540C\u4E00\u5929\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u9009\u62E9\u65E5\u671F\u533A\u95F4&quot;</span> <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;formatRange(date)&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span>
      <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
      @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;close&quot;</span>
      @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">open</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">date</span>: <span class="hljs-literal">null</span>,
    };
  },
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">true</span>;
    },
    <span class="hljs-function"><span class="hljs-title">close</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">confirm</span>(<span class="hljs-params">{ detail }</span>)</span> {
      <span class="hljs-built_in">this</span>.date = detail.value;
      <span class="hljs-built_in">this</span>.open = <span class="hljs-literal">false</span>;
    },
    <span class="hljs-function"><span class="hljs-title">formatRange</span>(<span class="hljs-params">dateRange</span>)</span> {
      <span class="hljs-keyword">if</span> (dateRange.length) {
        <span class="hljs-keyword">const</span> [start, end] = dateRange;
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${formatDate(start)}</span> - <span class="hljs-subst">\${formatDate(end)}</span>\`</span>;
      }
    },
  },
};
</code></pre><h4>\u5FEB\u6377\u9009\u62E9</h4><p>\u5C06 <code class="">hideconfirm</code> \u8BBE\u7F6E\u4E3A <code class="">true</code> \u53EF\u4EE5\u9690\u85CF\u786E\u8BA4\u6309\u94AE\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\u9009\u62E9\u5B8C\u6210\u540E\u4F1A\u7ACB\u5373\u89E6\u53D1 <code class="">confirm</code> \u4E8B\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">:hideconfirm</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
</code></pre><h4>\u81EA\u5B9A\u4E49\u9009\u4E2D\u503C</h4><p>\u901A\u8FC7 <code class="">setValue</code> \u65B9\u6CD5\uFF0C\u53EF\u5B9A\u4E49\u6216\u91CD\u7F6E\u65E5\u5386\u7684\u9009\u4E2D\u503C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;calendarRef&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.calendarRef.setValue(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>());
  },
};
</code></pre><h4>\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4</h4><p>\u901A\u8FC7 <code class="">mindate</code> \u548C <code class="">maxdate</code> \u5B9A\u4E49\u65E5\u5386\u7684\u8303\u56F4\u3002\u53EF\u4EE5\u662F<code class="">yyyy-MM-dd</code>\u5B57\u7B26\u4E32\u7C7B\u578B\u6216\u6BEB\u79D2\u65F6\u95F4\u6233\u6570\u503C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">mindate</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:maxdate</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-string">&quot;2022-1-1&quot;</span>,
      <span class="hljs-attr">maxDate</span>: <span class="hljs-string">&quot;2022-1-31&quot;</span>,
    };
  },
};
</code></pre><p>\u6216</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime(),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime() + <span class="hljs-number">15552000000</span>,
    };
  },
};
</code></pre><h4>\u81EA\u5B9A\u4E49\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4</h4><p>\u9009\u62E9\u65E5\u671F\u533A\u95F4\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code class="">maxrange</code> \u5C5E\u6027\u6765\u6307\u5B9A\u6700\u591A\u53EF\u9009\u5929\u6570\uFF0C\u9009\u62E9\u7684\u8303\u56F4\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u4F1A\u5F39\u51FA\u76F8\u5E94\u7684\u63D0\u793A\u6587\u6848\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:maxrange</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre><h4>\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57</h4><p>\u901A\u8FC7 <code class="">confirmtext</code> \u8BBE\u7F6E\u6309\u94AE\u6587\u5B57\uFF0C\u901A\u8FC7 <code class="">confirmdisabledtext</code> \u8BBE\u7F6E\u6309\u94AE\u7981\u7528\u65F6\u7684\u6587\u5B57\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">confirmtext</span>=<span class="hljs-string">&quot;\u5B8C\u6210&quot;</span> <span class="hljs-attr">confirmdisabledtext</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9&quot;</span> /&gt;</span>
</code></pre><h4>\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848</h4><p>\u901A\u8FC7\u4F20\u5165 <code class="">formatter</code> \u51FD\u6570\u6765\u5BF9\u65E5\u5386\u4E0A\u6BCF\u4E00\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;calendarRef&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.calendarRef.setFormatter(<span class="hljs-built_in">this</span>.dayFormatter);
  }
  <span class="hljs-attr">methods</span>: {
    <span class="hljs-function"><span class="hljs-title">dayFormatter</span>(<span class="hljs-params">day</span>)</span> {
      <span class="hljs-keyword">if</span> (!day.date) {
        <span class="hljs-keyword">return</span> day;
      }

      <span class="hljs-keyword">const</span> month = day.date.getMonth() + <span class="hljs-number">1</span>;
      <span class="hljs-keyword">const</span> date = day.date.getDate();

      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">9</span>) {
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">29</span>) {
          day.topInfo = <span class="hljs-string">&#39;\u4E2D\u79CB\u8282&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">10</span>) {
          day.topInfo = <span class="hljs-string">&#39;\u4ECA\u5929&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date &gt; <span class="hljs-number">28</span>) {
          day.bottomInfo = <span class="hljs-string">&#39;\u4F11&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">10</span>) {
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">1</span>) {
          day.topInfo = <span class="hljs-string">&#39;\u56FD\u5E86\u8282&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date &lt; <span class="hljs-number">7</span>) {
          day.bottomInfo = <span class="hljs-string">&#39;\u4F11&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (day.type === <span class="hljs-string">&quot;start&quot;</span>) {
        day.bottomInfo = <span class="hljs-string">&#39;\u5165\u5E97&#39;</span>;
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (day.type === <span class="hljs-string">&quot;end&quot;</span>) {
        day.bottomInfo = <span class="hljs-string">&#39;\u79BB\u5E97&#39;</span>;
      }

      <span class="hljs-keyword">return</span> day;
    }
  },
}
</code></pre><h4>\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5</h4><p>\u901A\u8FC7 <code class="">weekfirstday</code> \u5C5E\u6027\u8BBE\u7F6E\u4E00\u5468\u4ECE\u54EA\u5929\u5F00\u59CB\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">weekfirstday</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre><h4>\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E</h4><p>\u901A\u8FC7 <code class="">position</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u5F39\u51FA\u5C42\u7684\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A<code class="">bottom</code>\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">top</code>\u3001<code class="">left</code>\u3001<code class="">right</code>\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
</code></pre><h4>\u81EA\u5B9A\u4E49\u6837\u5F0F</h4><p>\u53EF\u901A\u8FC7\u7EC4\u4EF6\u63D0\u4F9B\u7684 CSS \u53D8\u91CF\u6765\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6837\u5F0F\u3002\u5982\u5B9A\u4E49\u7EC4\u4EF6\u80CC\u666F\u8272\u3001\u4E3B\u9898\u8272\u7B49\u3002\u4E3B\u9898\u8272\u5BF9\u9009\u4E2D\u65E5\u671F\u548C\u5E95\u90E8\u6309\u94AE\u751F\u6548\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;css&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.css</span> {
  --calendar-<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fce8e8</span>;
  --calendar-theme-<span class="hljs-attribute">color</span>: red;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">single</code>\u3001<code class="">multiple</code>\u3001<code class="">range</code></td><td><code class="">string</code></td><td><code class="">single</code></td></tr><tr><td>title</td><td>\u65E5\u5386\u6807\u9898</td><td><code class="">string</code></td><td><code class="">\u65E5\u671F\u9009\u62E9</code></td></tr><tr><td>readonly</td><td>\u65E5\u5386\u662F\u5426\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u53EA\u8BFB\u72B6\u6001\u4E0B\u4E0D\u80FD\u9009\u62E9\u65E5\u671F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>tiled</td><td>\u65E5\u5386\u662F\u5426\u5E73\u94FA</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>mindate</td><td>\u53EF\u9009\u62E9\u7684\u6700\u5C0F\u65E5\u671F</td><td><code class="">yyyy-MM-dd</code> \u6216 \u6BEB\u79D2\u65F6\u95F4\u6233\u6570\u503C</td><td>\u5F53\u524D\u65E5\u671F</td></tr><tr><td>maxdate</td><td>\u53EF\u9009\u62E9\u7684\u6700\u5927\u65E5\u671F</td><td><code class="">yyyy-MM-dd</code> \u6216 \u6BEB\u79D2\u65F6\u95F4\u6233\u6570\u503C</td><td>\u5F53\u524D\u65E5\u671F\u7684\u516D\u4E2A\u6708\u540E</td></tr><tr><td>hidemark</td><td>\u662F\u5426\u9690\u85CF\u6708\u4EFD\u80CC\u666F\u6C34\u5370</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidetitle</td><td>\u662F\u5426\u9690\u85CF\u6807\u9898</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidesubtitle</td><td>\u662F\u5426\u9690\u85CF\u526F\u6807\u9898</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideconfirm</td><td>\u662F\u5426\u9690\u85CF\u786E\u8BA4\u6309\u94AE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>eagerrender</td><td>\u662F\u5426\u6E34\u671B\u52A0\u8F7D\uFF0C\u82E5\u4E3A<code class="">true</code>\u5219\u5173\u95ED\u61D2\u52A0\u8F7D\u529F\u80FD</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>confirmtext</td><td>\u786E\u8BA4\u6309\u94AE\u7684\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u786E\u5B9A</code></td></tr><tr><td>confirmdisabledtext</td><td>\u786E\u8BA4\u6309\u94AE\u5904\u4E8E\u7981\u7528\u72B6\u6001\u65F6\u7684\u6587\u5B57</td><td><code class="">string</code></td><td><code class="">\u786E\u5B9A</code></td></tr><tr><td>weekfirstday</td><td>\u8BBE\u7F6E\u5468\u8D77\u59CB\u65E5</td><td><code class="">0-6</code></td><td><code class="">0</code></td></tr></tbody></table><h3>Calendar tiled false Props</h3><p>\u5F53 Calendar \u7684 <code class="">tiled</code> \u4E3A <code class="">false</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>open</td><td>\u65E5\u5386\u662F\u5426\u5F39\u51FA</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">top</code> <code class="">right</code> <code class="">left</code></td><td><code class="">string</code></td><td><code class="">bottom</code></td></tr><tr><td>square</td><td>\u662F\u5426\u663E\u793A\u65B9\u89D2\u5F39\u7A97</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>\u662F\u5426\u7981\u6B62\u906E\u7F69\u5C42\u70B9\u51FB</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Calendar Range Props</h3><p>\u5F53 Calendar \u7684 <code class="">type</code> \u4E3A <code class="">range</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>maxrange</td><td>\u65E5\u671F\u533A\u95F4\u6700\u591A\u53EF\u9009\u5929\u6570</td><td><code class="">number</code></td><td>\u65E0\u9650\u5236</td></tr><tr><td>rangeprompt</td><td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u6700\u591A\u9009\u62E9 xx \u5929</code></td></tr><tr><td>hiderangeprompt</td><td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\uFF0C\u662F\u5426\u9690\u85CF\u63D0\u793A\u6587\u6848</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>allowsameday</td><td>\u662F\u5426\u5141\u8BB8\u65E5\u671F\u8303\u56F4\u7684\u8D77\u6B62\u65F6\u95F4\u4E3A\u540C\u4E00\u5929</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Calendar Multiple Props</h3><p>\u5F53 Calendar \u7684 <code class="">type</code> \u4E3A <code class="">multiple</code> \u65F6\uFF0C\u652F\u6301\u4EE5\u4E0B props:</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>maxrange</td><td>\u65E5\u671F\u533A\u95F4\u6700\u591A\u53EF\u9009\u5929\u6570</td><td><code class="">number</code></td><td>\u65E0\u9650\u5236</td></tr><tr><td>rangeprompt</td><td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u7684\u63D0\u793A\u6587\u6848</td><td><code class="">string</code></td><td><code class="">\u6700\u591A\u9009\u62E9 xx \u5929</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u6216\u8005\u53D6\u6D88\u6309\u94AE</td><td><code class="">() =&gt; void </code></td></tr><tr><td>confirm</td><td>\u65E5\u671F\u9009\u62E9\u5B8C\u6210\u540E\u89E6\u53D1\uFF0C\u82E5 <code class="">hide-confirm</code> \u4E3A <code class="">false</code>\uFF0C\u5219\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u540E\u89E6\u53D1</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void </code></td></tr><tr><td>select</td><td>\u70B9\u51FB\u5E76\u9009\u4E2D\u4EFB\u610F\u65E5\u671F\u65F6\u89E6\u53D1</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void</code></td></tr><tr><td>unselect</td><td>\u5F53\u65E5\u5386\u7EC4\u4EF6\u7684 <code class="">type</code> \u4E3A <code class="">multiple</code> \u65F6\uFF0C\u53D6\u6D88\u9009\u4E2D\u65E5\u671F\u65F6\u89E6\u53D1</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void</code></td></tr><tr><td>overrange</td><td>\u8303\u56F4\u9009\u62E9\u8D85\u8FC7\u6700\u591A\u53EF\u9009\u5929\u6570\u65F6\u89E6\u53D1</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>subtitle</td><td>\u81EA\u5B9A\u4E49\u65E5\u5386\u526F\u6807\u9898</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF\u5185\u5BB9</td></tr></tbody></table><h3>\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>setValue</td><td>\u7528\u4E8E\u8BBE\u7F6E\u65E5\u5386\u9009\u4E2D\u7684\u65E5\u671F, <code class="">type</code>\u4E3A<code class="">single</code>\u65F6\uFF0C\u53C2\u6570\u7C7B\u578B\u4E3A<code class="">Date</code>\uFF0C\u5176\u4ED6\u4E3A<code class="">Date[]</code></td><td><code class="">(value?: Date | Date[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>\u83B7\u53D6\u65E5\u5386\u9009\u4E2D\u7684\u65E5\u671F</td><td><code class="">() =&gt; Date | Date[]</code></td></tr><tr><td>setFormatter</td><td>\u8BBE\u7F6E\u9009\u9879\u683C\u5F0F\u5316\u51FD\u6570</td><td><code class="">(formatter: (item: CalendarDayItem) =&gt; CalendarDayItem) =&gt; CalendarDayItem</code></td></tr></tbody></table><h3>\u7C7B\u578B\u5B9A\u4E49</h3><pre><code class="language-js">type CalendarDayType =
  | <span class="hljs-string">&quot;&quot;</span>
  | <span class="hljs-string">&quot;start&quot;</span>
  | <span class="hljs-string">&quot;start-end&quot;</span>
  | <span class="hljs-string">&quot;middle&quot;</span>
  | <span class="hljs-string">&quot;end&quot;</span>
  | <span class="hljs-string">&quot;selected&quot;</span>
  | <span class="hljs-string">&quot;multiple-middle&quot;</span>
  | <span class="hljs-string">&quot;multiple-selected&quot;</span>
  | <span class="hljs-string">&quot;disabled&quot;</span>
  | <span class="hljs-string">&quot;placeholder&quot;</span>;

type CalendarDayItem = {
  date?: <span class="hljs-built_in">Date</span>,
  text?: number | string,
  type?: CalendarDayType,
  topInfo?: string,
  className?: unknown,
  bottomInfo?: string,
};
</code></pre><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--calendar-background-color</code></td><td>\u65E5\u5386\u80CC\u666F\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--calendar-theme-color</code></td><td>\u65E5\u5386\u4E3B\u9898\u8272</td><td><code class="">#0088ff</code></td></tr><tr><td><code class="">--calendar-font-family</code></td><td>\u65E5\u5386\u5B57\u4F53</td><td><code class="">PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code class="">--calendar-height</code></td><td>\u65E5\u5386\u9AD8\u5EA6</td><td>-</td></tr><tr><td><code class="">--calendar-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-title-row-height</code></td><td>\u6807\u9898\u884C\u9AD8</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td><code class="">--calendar-subtitle-color</code></td><td>\u526F\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-subtitle-row-height</code></td><td>\u526F\u6807\u9898\u884C\u9AD8</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-subtitle-font-size</code></td><td>\u526F\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--calendar-month-title-color</code></td><td>\u6708\u4EFD\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-month-title-row-height</code></td><td>\u6708\u4EFD\u6807\u9898\u884C\u9AD8</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-month-title-font-size</code></td><td>\u6708\u4EFD\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code class="">14px</code></td></tr><tr><td><code class="">--calendar-weekday-font-size</code></td><td>\u661F\u671F\u680F\u5B57\u4F53\u5927\u5C0F</td><td><code class="">12px</code></td></tr><tr><td><code class="">--calendar-day-row-height</code></td><td>\u65E5\u671F\u90E8\u5206\u884C\u9AD8</td><td><code class="">64px</code></td></tr><tr><td><code class="">--calendar-day-font-size</code></td><td>\u65E5\u671F\u90E8\u5206\u5B57\u4F53\u5927\u5C0F</td><td><code class="">16px</code></td></tr><tr><td><code class="">--calendar-day-selected-color</code></td><td>\u9009\u4E2D\u65E5\u671F\u90E8\u5206\u7684\u5B57\u4F53\u989C\u8272</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--calendar-day-border-radius</code></td><td>\u9009\u4E2D\u65E5\u671F\u90E8\u5206\u7684\u5706\u89D2\u503C</td><td><code class="">6px</code></td></tr><tr><td><code class="">--calendar-day-disabled-color</code></td><td>\u65E5\u671F\u4E3A<code class="">disabled</code>\u72B6\u6001\u65F6\u5B57\u4F53\u989C\u8272</td><td><code class="">#bbbbbb</code></td></tr><tr><td><code class="">--calendar-footer-padding</code></td><td>footer \u5DE6\u53F3\u95F4\u8DDD</td><td><code class="">16px</code></td></tr></tbody></table>`,74),d=[e],h={},E="",F=a({__name:"doc.zh-CN",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,o)=>(n(),u("div",l,d))}});export{F as default,E as excerpt,h as frontmatter};
