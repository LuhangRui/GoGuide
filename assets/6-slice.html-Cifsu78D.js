import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,b as t}from"./app-BSiqoa40.js";const e={},p=t(`<h2 id="创建切片" tabindex="-1"><a class="header-anchor" href="#创建切片"><span>创建切片</span></a></h2><p>有三种方式可以创建切片</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 第一种方式： 直接声明</span>
	<span class="token keyword">var</span> dataSlice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span>

	<span class="token comment">// 第二种方式： 直接初始化</span>
	dataSlice1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// 第三种方式： 使用 make</span>
	dataSlice2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>dataSlice<span class="token punctuation">,</span> dataSlice1<span class="token punctuation">,</span> dataSlice2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在创建时直接将数据初始化</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>dataSlice1 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Jack&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Mike&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="切片截取" tabindex="-1"><a class="header-anchor" href="#切片截取"><span>切片截取</span></a></h2><p><code>arr[beginIndex:endIndex]</code> 可以截取切片，包含 beginIndex， 不包含 endIndex 下标的数据。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 结果</span>
<span class="token comment">// [2 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="长度及容量" tabindex="-1"><a class="header-anchor" href="#长度及容量"><span>长度及容量</span></a></h2><p>使用 <code>len()</code> 获取切片长度， 使用 <code>cap()</code> 获取切片容量</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建长度为 5 ， 容量为 9 的切片</span>
	data <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// [0 0 0 0 0] 5 9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="追加数据" tabindex="-1"><a class="header-anchor" href="#追加数据"><span>追加数据</span></a></h2><p>使用 <code>append()</code> 函数追加数据</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>

	<span class="token comment">// 追加一条数据</span>
	data1 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

	<span class="token comment">// 追加多条数据</span>
	data2 <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// [0 1 2]</span>
<span class="token comment">// [0 1 2 3]</span>
<span class="token comment">// [0 1 2 4 5 6]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="克隆切片" tabindex="-1"><a class="header-anchor" href="#克隆切片"><span>克隆切片</span></a></h2><p>我们知道切片属于引用类型，如果将一个切片赋值给另一个变量，实际上共用一个内存地址的数据，如果想创建两个相同数据的切片，可以使用 <code>copy()</code> 方法</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">}</span>

	<span class="token comment">// 创建一个长度相同的切片</span>
	data1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// 复制 data 的数据到 data1</span>
	<span class="token function">copy</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> data<span class="token punctuation">)</span>

	<span class="token comment">// 给 data1 添加数据</span>
	data1 <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data1<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data1<span class="token punctuation">)</span>
	
	<span class="token comment">// 会发现 data 没被改变</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果：</span>
<span class="token comment">// [0 1 2]</span>
<span class="token comment">// [0 1 2 3 4 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,17),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(e,[["render",i],["__file","6-slice.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/golang/6-slice.html","title":"切片","lang":"zh-CN","frontmatter":{"order":6,"title":"切片","description":"创建切片 有三种方式可以创建切片 可以在创建时直接将数据初始化 切片截取 arr[beginIndex:endIndex] 可以截取切片，包含 beginIndex， 不包含 endIndex 下标的数据。 长度及容量 使用 len() 获取切片长度， 使用 cap() 获取切片容量 例子 追加数据 使用 append() 函数追加数据 例子 克隆切片...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/6-slice.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/6-slice.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"切片"}],["meta",{"property":"og:description","content":"创建切片 有三种方式可以创建切片 可以在创建时直接将数据初始化 切片截取 arr[beginIndex:endIndex] 可以截取切片，包含 beginIndex， 不包含 endIndex 下标的数据。 长度及容量 使用 len() 获取切片长度， 使用 cap() 获取切片容量 例子 追加数据 使用 append() 函数追加数据 例子 克隆切片..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-28T05:09:46.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-01-28T05:09:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"切片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-28T05:09:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"创建切片","slug":"创建切片","link":"#创建切片","children":[]},{"level":2,"title":"切片截取","slug":"切片截取","link":"#切片截取","children":[]},{"level":2,"title":"长度及容量","slug":"长度及容量","link":"#长度及容量","children":[]},{"level":2,"title":"追加数据","slug":"追加数据","link":"#追加数据","children":[]},{"level":2,"title":"克隆切片","slug":"克隆切片","link":"#克隆切片","children":[]}],"git":{"createdTime":1705568553000,"updatedTime":1706418586000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.43,"words":429},"filePathRelative":"guide/concepts/golang/6-slice.md","localizedDate":"2024年1月18日","autoDesc":true,"excerpt":"<h2>创建切片</h2>\\n<p>有三种方式可以创建切片</p>\\n<div class=\\"language-go\\" data-ext=\\"go\\" data-title=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token string\\">\\"fmt\\"</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n\\t<span class=\\"token comment\\">// 第一种方式： 直接声明</span>\\n\\t<span class=\\"token keyword\\">var</span> dataSlice <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span>\\n\\n\\t<span class=\\"token comment\\">// 第二种方式： 直接初始化</span>\\n\\tdataSlice1 <span class=\\"token operator\\">:=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n\\t<span class=\\"token comment\\">// 第三种方式： 使用 make</span>\\n\\tdataSlice2 <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">make</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token builtin\\">string</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span>\\n\\n\\tfmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>dataSlice<span class=\\"token punctuation\\">,</span> dataSlice1<span class=\\"token punctuation\\">,</span> dataSlice2<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{r as comp,k as data};