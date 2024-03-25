import{d as a,c as t,a as e,o as n}from"./vue.acb82bcc.js";const l={class:"markdown-body"},d=e(`<h1>Calendar</h1><h3>Intro</h3><p>Calendar component for selecting dates or date ranges.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/calendar&quot;</span>;
</code></pre><h3>Basic Usage</h3><h4>Select Single Date</h4><p>The <code class="">confirm</code> event will be emitted after the date selection is completed.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Single Date&quot;</span>
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
</code></pre><h4>Select Multiple Date</h4><p>You can select multiple date after setting <code class="">type</code> to <code class="">multiple</code>. In multiple mode, the date returned by the <code class="">confirm</code> event is an array, it contains several selected dates.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Multiple Date&quot;</span>
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
        <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${dates.length}</span> days\`</span>;
      }
    },
  },
};
</code></pre><h4>Select Date Range</h4><p>You can select a date range after setting <code class="">type</code> to<code class="">range</code>. In range mode, the date returned by the <code class="">confirm</code> event is an array, the first item in the array is the start time and the second item is the end time.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">quark-cell</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Date Range&quot;</span>
      <span class="hljs-attr">:desc</span>=<span class="hljs-string">&quot;formatRange(date)&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;click&quot;</span>
    /&gt;</span>
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
</code></pre><h4>Quick Select</h4><p>Set <code class="">hide-confirm</code> to <code class="">true</code> to hide the confirm button. In this case, the <code class="">confirm</code> event will be emitted immediately after the selection is completed.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">:hideconfirm</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>
</code></pre><h4>Custom Selected Value</h4><p>The selected value of the calendar can be defined or reset through the <code class="">setValue</code> method.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;calendarRef&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-built_in">this</span>.$refs.calendarRef.setValue(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>());
  },
};
</code></pre><h4>Custom Date Range</h4><p>Use <code class="">mindate</code> and <code class="">maxdate</code> to custom date range. It can be a <code class="">yyyy-MM-dd</code> string type or a timestamp value.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">mindate</span>=<span class="hljs-string">&quot;minDate&quot;</span> <span class="hljs-attr">:maxdate</span>=<span class="hljs-string">&quot;maxDate&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-string">&quot;2022-1-1&quot;</span>,
      <span class="hljs-attr">maxDate</span>: <span class="hljs-string">&quot;2022-1-31&quot;</span>,
    };
  },
};
</code></pre><p>Or</p><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">minDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime(),
      <span class="hljs-attr">maxDate</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime() + <span class="hljs-number">15552000000</span>,
    };
  },
};
</code></pre><h4>Custom Max Range</h4><p>When selecting a date range, you can use the <code class="">maxrange</code> prop to specify the maximum number of selectable days.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">:maxrange</span>=<span class="hljs-string">&quot;3&quot;</span> /&gt;</span>
</code></pre><h4>Custom Confirm Text</h4><p>Use <code class="">confirmtext</code> and <code class="">confirmdisabledtext</code> to custom confirm text.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">confirmtext</span>=<span class="hljs-string">&quot;OK&quot;</span> <span class="hljs-attr">confirmdisabledtext</span>=<span class="hljs-string">&quot;Please Select&quot;</span> /&gt;</span>
</code></pre><h4>Custom Day Text</h4><p>Use <code class="">formatter</code> to custom day text.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;range&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;calendarRef&quot;</span> /&gt;</span>
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
          day.topInfo = <span class="hljs-string">&#39;Mid-Autumn&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">10</span>) {
          day.topInfo = <span class="hljs-string">&#39;Today&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date &gt; <span class="hljs-number">28</span>) {
          day.bottomInfo = <span class="hljs-string">&#39;Rest&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (month === <span class="hljs-number">10</span>) {
        <span class="hljs-keyword">if</span> (date === <span class="hljs-number">1</span>) {
          day.topInfo = <span class="hljs-string">&#39;National Dday&#39;</span>;
        }
        <span class="hljs-keyword">if</span> (date &lt; <span class="hljs-number">7</span>) {
          day.bottomInfo = <span class="hljs-string">&#39;Rest&#39;</span>;
        }
      }

      <span class="hljs-keyword">if</span> (day.type === <span class="hljs-string">&quot;start&quot;</span>) {
        day.bottomInfo = <span class="hljs-string">&#39;In&#39;</span>;
      } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (day.type === <span class="hljs-string">&quot;end&quot;</span>) {
        day.bottomInfo = <span class="hljs-string">&#39;Out&#39;</span>;
      }

      <span class="hljs-keyword">return</span> day;
    }
  },
}
</code></pre><h4>Custom First Day Of Week</h4><p>Use <code class="">weekfirstday</code> to custom the start day of week</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">weekfirstday</span>=<span class="hljs-string">&quot;1&quot;</span> /&gt;</span>
</code></pre><h4>Custom Position</h4><p>Use <code class="">position</code> to custom popup position, default is <code class="">bottom</code>. can be set to <code class="">top</code>\u3001<code class="">left</code>\u3001<code class="">right</code>.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> /&gt;</span>
</code></pre><h4>Custom CSS</h4><p>Component styles can be customized through CSS variables provided by the component.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-calendar</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;css&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-css"><span class="hljs-selector-class">.css</span> {
  --calendar-<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#fce8e8</span>;
  --calendar-theme-<span class="hljs-attribute">color</span>: red;
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Type, can be set to <code class="">multiple</code>\u3001<code class="">range</code></td><td><code class="">string</code></td><td><code class="">single</code></td></tr><tr><td>title</td><td>Title of calendar</td><td><code class="">string</code></td><td><code class="">Calendar</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>tiled</td><td>Whether to show the calendar tiled</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>mindate</td><td>Min date</td><td><code class="">yyyy-MM-dd</code> or timestamp value</td><td>Today</td></tr><tr><td>maxdate</td><td>Max date</td><td><code class="">yyyy-MM-dd</code> or timestamp value</td><td>Six months after the today</td></tr><tr><td>hidemark</td><td>Whether to hide background month mark</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidetitle</td><td>Whether to hide title</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hidesubtitle</td><td>Whether to hide subtitle</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>hideconfirm</td><td>Whether to hide confirm button</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>eagerrender</td><td>Whether to disabled lazy render</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>confirmtext</td><td>Confirm button text</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>confirmdisabledtext</td><td>Confirm button text when disabled</td><td><code class="">string</code></td><td><code class="">Confirm</code></td></tr><tr><td>weekfirstday</td><td>Set the start day of week</td><td><code class="">0-6</code></td><td><code class="">0</code></td></tr></tbody></table><h3>Calendar tiled false Props</h3><p>Following props are supported when the <code class="">tiled</code> is <code class="">false</code></p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Whether to show calendar</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>position</td><td>Popup position, can be set to <code class="">top</code> <code class="">right</code> <code class="">left</code></td><td><code class="">string</code></td><td><code class="">bottom</code></td></tr><tr><td>square</td><td>Whether to show square corner</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>forbidmaskclick</td><td>Whether to forbid the mask click</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Calendar Range Props</h3><p>Following props are supported when the <code class="">type</code> is <code class="">range</code></p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>maxrange</td><td>Number of selectable days</td><td><code class="">number</code></td><td>Unlimited</td></tr><tr><td>rangeprompt</td><td>Error message when exceeded max range</td><td><code class="">string</code></td><td><code class="">Choose no more than xx days</code></td></tr><tr><td>hiderangeprompt</td><td>Whether prompt error message when exceeded max range</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>allowsameday</td><td>Whether the start and end time of the range is allowed on the same day</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h3>Calendar Multiple Props</h3><p>Following props are supported when the <code class="">type</code> is <code class="">multiple</code></p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>maxrange</td><td>Max count of selectable days</td><td><code class="">number</code></td><td>Unlimited</td></tr><tr><td>rangeprompt</td><td>Error message when exceeded max count</td><td><code class="">string</code></td><td><code class="">Choose no more than xx days</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>close</td><td>Emitted when closing Popup</td><td><code class="">() =&gt; void </code></td></tr><tr><td>confirm</td><td>Emitted after date selection is complete</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void </code></td></tr><tr><td>select</td><td>Emitted when date is selected</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void</code></td></tr><tr><td>unselect</td><td>Emitted when unselect date when type is multiple</td><td><code class="">\uFF08e: {detail:{value: Date | Date[] }}\uFF09=&gt; void</code></td></tr><tr><td>overrange</td><td>Emitted when exceeded max range</td><td><code class="">() =&gt; void </code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td></tr><tr><td>subtitle</td><td>Custom subtitle</td></tr><tr><td>footer</td><td>Custom footer</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>setValue</td><td>To set the date selected by the calendar, when <code class="">type</code> is <code class="">single</code>, the parameter type is <code class="">Date</code>, otherwise it is <code class="">Date[]</code></td><td><code class="">(value?: Date | Date[]) =&gt; void</code></td></tr><tr><td>getValues</td><td>Get the date selected in the calendar</td><td><code class="">() =&gt; Date | Date[]</code></td></tr><tr><td>setFormatter</td><td>Set option format function</td><td><code class="">(formatter: (item: CalendarDayItem) =&gt; CalendarDayItem) =&gt; CalendarDayItem</code></td></tr></tbody></table><h3>Types</h3><pre><code class="language-js">type CalendarDayType =
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
</code></pre><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code class="">--calendar-background-color</code></td><td>Calendar background color</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--calendar-theme-color</code></td><td>Calendar theme color</td><td><code class="">#0088ff</code></td></tr><tr><td><code class="">--calendar-font-family</code></td><td>Calendar font family</td><td><code class="">PingFangSC-Regular, PingFang SC</code></td></tr><tr><td><code class="">--calendar-height</code></td><td>Calendar height</td><td>-</td></tr><tr><td><code class="">--calendar-title-color</code></td><td>Calendar title color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-title-row-height</code></td><td>Calendar title row height</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-title-font-size</code></td><td>Calendar title font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--calendar-subtitle-color</code></td><td>Calendar subtitle color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-subtitle-row-height</code></td><td>Calendar subtitle row height</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-subtitle-font-size</code></td><td>Calendar subtitle font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--calendar-month-title-color</code></td><td>Calendar month title color</td><td><code class="">#242729</code></td></tr><tr><td><code class="">--calendar-month-title-row-height</code></td><td>Calendar month title row height</td><td><code class="">44px</code></td></tr><tr><td><code class="">--calendar-month-title-font-size</code></td><td>Calendar month title font size</td><td><code class="">14px</code></td></tr><tr><td><code class="">--calendar-weekday-font-size</code></td><td>Weekday row font size</td><td><code class="">12px</code></td></tr><tr><td><code class="">--calendar-day-row-height</code></td><td>Date row height</td><td><code class="">64px</code></td></tr><tr><td><code class="">--calendar-day-font-size</code></td><td>Date font size</td><td><code class="">16px</code></td></tr><tr><td><code class="">--calendar-day-selected-color</code></td><td>The font color of the selected date</td><td><code class="">#fff</code></td></tr><tr><td><code class="">--calendar-day-border-radius</code></td><td>The border radius of the selected date</td><td><code class="">6px</code></td></tr><tr><td><code class="">--calendar-day-disabled-color</code></td><td>Font color when the date is in <code class="">disabled</code> state</td><td><code class="">#bbbbbb</code></td></tr><tr><td><code class="">--calendar-footer-padding</code></td><td>Left and right spacing in footer</td><td><code class="">16px</code></td></tr></tbody></table>`,74),c=[d],i={},u="",j=a({__name:"doc.en-US",setup(o,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(p,r)=>(n(),t("div",l,c))}});export{j as default,u as excerpt,i as frontmatter};
