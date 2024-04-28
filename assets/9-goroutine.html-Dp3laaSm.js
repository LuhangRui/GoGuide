import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-C8dy3SpT.js";const t={},o=e(`<h2 id="goroutine-coroutine" tabindex="-1"><a class="header-anchor" href="#goroutine-coroutine"><span>Goroutine | Coroutine</span></a></h2><p>Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a coroutine.</p><div class="hint-container tip"><p class="hint-container-title">Advantages</p><ul><li><strong>Lightweight</strong>: The initial stack size of a Goroutine is only 2KB, but it can dynamically grow up to 1GB.</li><li><strong>Fast Startup</strong>: Goroutines start quickly, typically within 1 to 2 microseconds.</li><li><strong>Efficient Scheduling</strong>: The Goroutine scheduler uses an M:N model, mapping M Goroutines to N OS threads for efficient scheduling.</li><li><strong>Simple Communication</strong>: Goroutines communicate with each other using channels, enabling data sharing.</li><li><strong>Lock-Free</strong>: Goroutines communicate via channels without the need for locks.</li><li><strong>High Concurrency</strong>: You can easily create hundreds of thousands of Goroutines, achieving high concurrency.</li><li><strong>High Performance</strong>: The Goroutine scheduler uses preemptive scheduling, resulting in high performance.</li></ul></div><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Goroutine is a crucial feature in Go and forms the core of Go&#39;s concurrency programming. Understanding how to use and reason about Goroutines is essential for learning Go. For writing high-performance concurrent programs, Goroutines are an excellent choice.</p></div><h3 id="creating-goroutines" tabindex="-1"><a class="header-anchor" href="#creating-goroutines"><span>Creating Goroutines</span></a></h3><p>Creating asynchronous Goroutines in Go is straightforward due to its emphasis on this fundamental feature. You only need to prefix a function call with the <code>go</code> keyword, which is simpler than in most other programming languages.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

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

    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">1e9</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">sendData</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;BiliBili&quot;</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;Youtube&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">getData</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> input <span class="token builtin">string</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        input <span class="token operator">=</span> <span class="token operator">&lt;-</span>ch
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s &quot;</span><span class="token punctuation">,</span> input<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Output: BiliBili Youtube</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),i=[o];function c(l,p){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","9-goroutine.html.vue"]]),m=JSON.parse('{"path":"/en/guide/concepts/golang/9-goroutine.html","title":"Goroutine","lang":"en-US","frontmatter":{"order":9,"title":"Goroutine","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"golang, goroutine, 协程, 并发编程, 并发模型"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/concepts/golang/9-goroutine.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/concepts/golang/9-goroutine.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"Goroutine"}],["meta",{"property":"og:description","content":"Goroutine | Coroutine Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T04:51:47.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-28T04:51:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Goroutine\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T04:51:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"Goroutine | Coroutine Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a c..."},"headers":[{"level":2,"title":"Goroutine | Coroutine","slug":"goroutine-coroutine","link":"#goroutine-coroutine","children":[{"level":3,"title":"Creating Goroutines","slug":"creating-goroutines","link":"#creating-goroutines","children":[]},{"level":3,"title":"Goroutines and Channels","slug":"goroutines-and-channels","link":"#goroutines-and-channels","children":[]}]}],"git":{"createdTime":1714279907000,"updatedTime":1714279907000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.57,"words":471},"filePathRelative":"en/guide/concepts/golang/9-goroutine.md","localizedDate":"April 28, 2024","autoDesc":true,"excerpt":"<h2>Goroutine | Coroutine</h2>\\n<p>Goroutine is the concurrency model in the Go programming language. It is a lightweight thread managed by the Go runtime, and we can also refer to it as a coroutine.</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">Advantages</p>\\n<ul>\\n<li><strong>Lightweight</strong>: The initial stack size of a Goroutine is only 2KB, but it can dynamically grow up to 1GB.</li>\\n<li><strong>Fast Startup</strong>: Goroutines start quickly, typically within 1 to 2 microseconds.</li>\\n<li><strong>Efficient Scheduling</strong>: The Goroutine scheduler uses an M:N model, mapping M Goroutines to N OS threads for efficient scheduling.</li>\\n<li><strong>Simple Communication</strong>: Goroutines communicate with each other using channels, enabling data sharing.</li>\\n<li><strong>Lock-Free</strong>: Goroutines communicate via channels without the need for locks.</li>\\n<li><strong>High Concurrency</strong>: You can easily create hundreds of thousands of Goroutines, achieving high concurrency.</li>\\n<li><strong>High Performance</strong>: The Goroutine scheduler uses preemptive scheduling, resulting in high performance.</li>\\n</ul>\\n</div>"}');export{d as comp,m as data};