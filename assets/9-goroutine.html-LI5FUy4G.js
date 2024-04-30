import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as i,a as n,b as c,d as r,e as t}from"./app-BWtWhRKo.js";const u={},l=t(`<h2 id="goroutine-coroutine" tabindex="-1"><a class="header-anchor" href="#goroutine-coroutine"><span>Goroutine | Coroutine</span></a></h2><p>Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a coroutine.</p><div class="hint-container tip"><p class="hint-container-title">Advantages</p><ul><li><strong>Lightweight</strong>: The initial stack size of a Goroutine is only 2KB, but it can dynamically grow up to 1GB.</li><li><strong>Fast Startup</strong>: Goroutines start quickly, typically within 1 to 2 microseconds.</li><li><strong>Efficient Scheduling</strong>: The Goroutine scheduler uses an M:N model, mapping M Goroutines to N OS threads for efficient scheduling.</li><li><strong>Simple Communication</strong>: Goroutines communicate with each other using channels, enabling data sharing.</li><li><strong>Lock-Free</strong>: Goroutines communicate via channels without the need for locks.</li><li><strong>High Concurrency</strong>: You can easily create hundreds of thousands of Goroutines, achieving high concurrency.</li><li><strong>High Performance</strong>: The Goroutine scheduler uses preemptive scheduling, resulting in high performance.</li></ul></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Goroutine is a crucial feature in Go and forms the core of Go&#39;s concurrency programming. Understanding how to use and reason about Goroutines is essential for learning Go. For writing high-performance concurrent programs, Goroutines are an excellent choice.</p></div><h3 id="creating-goroutines" tabindex="-1"><a class="header-anchor" href="#creating-goroutines"><span>Creating Goroutines</span></a></h3><p>Creating asynchronous Goroutines in Go is straightforward due to its emphasis on this fundamental feature. You only need to prefix a function call with the <code>go</code> keyword, which is simpler than in most other programming languages.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;running...&quot;</span><span class="token punctuation">)</span>
            time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By using <code>go</code> before any function call, you create a Goroutine that runs in the background without blocking the main thread.</p><div class="hint-container tip"><p class="hint-container-title">Stopping Goroutines</p><ul><li><strong>Natural Termination</strong>: Goroutines automatically end when the function execution completes.</li><li><strong>Timeout Termination</strong>: You can set a timeout for a Goroutine using <code>context.WithTimeout()</code> or <code>context.WithDeadline()</code>.</li><li><strong>Manual Termination</strong>: Manually terminate a Goroutine using <code>context.WithCancel()</code>.</li><li><strong>Channel Termination</strong>: Use channels for communication between Goroutines to signal termination.</li></ul></div><h3 id="goroutines-and-channels" tabindex="-1"><a class="header-anchor" href="#goroutines-and-channels"><span>Goroutines and Channels</span></a></h3><p>In Go, communication between Goroutines often involves sharing data. Channels provide a way for Goroutines to communicate with each other.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>

    <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">{</span>
            <span class="token keyword">select</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token operator">&lt;-</span>ch<span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exit&quot;</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span>
            <span class="token keyword">default</span><span class="token punctuation">:</span>
                fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;running...&quot;</span><span class="token punctuation">)</span>
                time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the example above, we create a channel <code>ch</code>. The main thread sends data to <code>ch</code>, and the Goroutine listens to <code>ch</code> using a <code>select</code> statement. When data arrives in <code>ch</code>, the Goroutine exits.</p><p>Here&#39;s another example of communication between Goroutines using channels:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>

	<span class="token keyword">go</span> <span class="token function">sendData</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">getData</span><span class="token punctuation">(</span>ch<span class="token punctuation">)</span>

	time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sendData</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ch <span class="token operator">&lt;-</span> <span class="token string">&quot;Bilibili&quot;</span>
	ch <span class="token operator">&lt;-</span> <span class="token string">&quot;Youtube&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getData</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> input <span class="token builtin">string</span>
	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		input <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s &quot;</span><span class="token punctuation">,</span> input<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output: Bilibili Youtube</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="goroutine-field-descriptions" tabindex="-1"><a class="header-anchor" href="#goroutine-field-descriptions"><span>Goroutine Field Descriptions</span></a></h2>`,16),p={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"Info",-1),h={href:"https://github.com/golang/go/blob/16ce8b3925deaeb72541ee96b6ee23a08fc21dea/src/runtime/runtime2.go#L422",target:"_blank",rel:"noopener noreferrer"},g=t(`<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>goid</td><td>Goroutine ID, a unique identifier</td></tr><tr><td>status</td><td>Goroutine status, such as running or blocked</td></tr><tr><td>stack</td><td>Goroutine stack space</td></tr><tr><td>gopc</td><td>Goroutine PC register</td></tr><tr><td>m</td><td>The M where the Goroutine resides</td></tr><tr><td>locked</td><td>Whether the Goroutine is locked</td></tr><tr><td>sched</td><td>Goroutine scheduler</td></tr><tr><td>atomicstatus</td><td>Goroutine atomic status</td></tr></tbody></table><details class="hint-container details"><summary>Example</summary><p>You can use the <code>runtime</code> package to obtain the current Goroutine ID:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>goroutineID <span class="token operator">:=</span> runtime<span class="token punctuation">.</span><span class="token function">GoID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="_9-goroutine-status-types" tabindex="-1"><a class="header-anchor" href="#_9-goroutine-status-types"><span>9 Goroutine Status Types</span></a></h2><table><thead><tr><th><strong>Field</strong></th><th><strong>Number</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>_Gidle</td><td>0</td><td>Indicates that this Goroutine was just allocated and has not yet been initialized.</td></tr><tr><td>_Grunnable</td><td>1</td><td>Represents a Goroutine on a run queue. It is not currently executing user code. The stack is not owned.</td></tr><tr><td>_Grunning</td><td>2</td><td>Indicates that this Goroutine may execute user code. The stack is owned by this Goroutine. It is not on a run queue. It is assigned an M and a P.</td></tr><tr><td>_Gsyscall</td><td>3</td><td>Represents a Goroutine executing a system call. It is not executing user code. The stack is owned by this Goroutine. It is not on a run queue. It is assigned an M.</td></tr><tr><td>_Gwaiting</td><td>4</td><td>Represents a Goroutine blocked in the runtime. It is not executing user code. It is not on a run queue, but should be recorded somewhere (e.g., a channel wait queue) so it can be ready()d when necessary. The stack is not owned, except that a channel operation may read or write parts of the stack under the appropriate channel lock. Otherwise, it is not safe to access the stack after a Goroutine enters _Gwaiting (e.g., it may get moved).</td></tr><tr><td>_Gmoribund_unused</td><td>5</td><td>Currently unused, but hardcoded in gdb scripts.</td></tr><tr><td>_Gdead</td><td>6</td><td>Indicates that this Goroutine is currently unused. It may have just exited, be on a free list, or be just being initialized. It is not executing user code. It may or may not have a stack allocated. The G and its stack (if any) are owned by the M that is exiting the G or that obtained the G from the free list.</td></tr><tr><td>_Genqueue_unused</td><td>7</td><td>Currently unused.</td></tr><tr><td>_Gcopystack</td><td>8</td><td>Indicates that this Goroutine&#39;s stack is being moved. It is not executing user code and is not on a run queue. The stack is owned by the Goroutine that put it in _Gcopystack.</td></tr><tr><td>_Gscan</td><td>0x1000</td><td>When combined with any of the above states other than _Grunning, it indicates that GC is scanning the stack. The Goroutine is not executing user code, and the stack is owned by the Goroutine that set the _Gscan bit.</td></tr></tbody></table>`,4);function m(k,v){const s=a("ExternalLinkIcon");return o(),i("div",null,[l,n("div",p,[d,n("p",null,[n("a",h,[c("Source Code"),r(s)])])]),g])}const f=e(u,[["render",m],["__file","9-goroutine.html.vue"]]),G=JSON.parse('{"path":"/en/guide/concepts/golang/9-goroutine.html","title":"Goroutine","lang":"en-US","frontmatter":{"order":9,"title":"Goroutine","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"golang, goroutine, 协程, 并发编程, 并发模型"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/9-goroutine.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/9-goroutine.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Goroutine"}],["meta",{"property":"og:description","content":"Goroutine | Coroutine Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-30T09:12:31.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-30T09:12:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Goroutine\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-30T09:12:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Goroutine | Coroutine Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a c..."},"headers":[{"level":2,"title":"Goroutine | Coroutine","slug":"goroutine-coroutine","link":"#goroutine-coroutine","children":[{"level":3,"title":"Creating Goroutines","slug":"creating-goroutines","link":"#creating-goroutines","children":[]},{"level":3,"title":"Goroutines and Channels","slug":"goroutines-and-channels","link":"#goroutines-and-channels","children":[]}]},{"level":2,"title":"Goroutine Field Descriptions","slug":"goroutine-field-descriptions","link":"#goroutine-field-descriptions","children":[]},{"level":2,"title":"9 Goroutine Status Types","slug":"_9-goroutine-status-types","link":"#_9-goroutine-status-types","children":[]}],"git":{"createdTime":1714279907000,"updatedTime":1714468351000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":2.96,"words":888},"filePathRelative":"en/guide/concepts/golang/9-goroutine.md","localizedDate":"April 28, 2024","autoDesc":true,"excerpt":"<h2>Goroutine | Coroutine</h2>\\n<p>Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a coroutine.</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Advantages</p>\\n<ul>\\n<li><strong>Lightweight</strong>: The initial stack size of a Goroutine is only 2KB, but it can dynamically grow up to 1GB.</li>\\n<li><strong>Fast Startup</strong>: Goroutines start quickly, typically within 1 to 2 microseconds.</li>\\n<li><strong>Efficient Scheduling</strong>: The Goroutine scheduler uses an M:N model, mapping M Goroutines to N OS threads for efficient scheduling.</li>\\n<li><strong>Simple Communication</strong>: Goroutines communicate with each other using channels, enabling data sharing.</li>\\n<li><strong>Lock-Free</strong>: Goroutines communicate via channels without the need for locks.</li>\\n<li><strong>High Concurrency</strong>: You can easily create hundreds of thousands of Goroutines, achieving high concurrency.</li>\\n<li><strong>High Performance</strong>: The Goroutine scheduler uses preemptive scheduling, resulting in high performance.</li>\\n</ul>\\n</div>"}');export{f as comp,G as data};
