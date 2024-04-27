import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,b as s}from"./app-BSiqoa40.js";const e={},i=s(`<h2 id="整数-int" tabindex="-1"><a class="header-anchor" href="#整数-int"><span>整数 (int)</span></a></h2><p>整数有两种类型：</p><table><thead><tr><th>类型</th><th>范围</th><th>介绍</th></tr></thead><tbody><tr><td>有符号数 (signed integers)</td><td><code>-∞</code> ~ <code>+∞</code></td><td>有符号数包含正数和负数</td></tr><tr><td>无符号数 (unsigned integers)</td><td><code>0</code> ~ <code>+∞</code></td><td>无符号数包含 0 和所有正数</td></tr></tbody></table><blockquote><p>golang 中 <code>int</code> 开头为有符号数， <code>uint</code> 开头为无符号数</p></blockquote><p>Golang 中的整数类型：</p><table><thead><tr><th>位</th><th>类型</th></tr></thead><tbody><tr><td>8</td><td><code>int8</code> <code>uint8</code></td></tr><tr><td>16</td><td><code>int16</code> <code>uint16</code></td></tr><tr><td>32</td><td><code>int32</code> <code>uint32</code></td></tr><tr><td>64</td><td><code>int64</code> <code>uint64</code></td></tr><tr><td>32 或 64 (基于系统架构)</td><td><code>int</code> <code>uint</code></td></tr></tbody></table><p>同时还有两个等价类型</p><ul><li><code>rune</code> : 等价于 <code>int32</code> , 用于存储 <code>Unicode</code> 字符</li><li><code>byte</code> ：等价于 <code>uint8</code> , 用于存储 <code>ASCII</code> 字符</li></ul><h2 id="浮点数-float" tabindex="-1"><a class="header-anchor" href="#浮点数-float"><span>浮点数 (float)</span></a></h2><p>浮点数就是包含小数点的数字</p><table><thead><tr><th>位</th><th>类型</th></tr></thead><tbody><tr><td>32</td><td><code>float32</code></td></tr><tr><td>64</td><td><code>float64</code></td></tr></tbody></table><h2 id="复数-complex" tabindex="-1"><a class="header-anchor" href="#复数-complex"><span>复数 (complex)</span></a></h2><p>复数包含虚数和实数，实数为浮点数</p><table><thead><tr><th>位</th><th>类型</th></tr></thead><tbody><tr><td>32 位浮点数 + 虚数</td><td><code>complex64</code></td></tr><tr><td>64 位浮点数 + 虚数</td><td><code>complex128</code></td></tr></tbody></table><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 初始化一个复数</span>
<span class="token keyword">var</span> complexData <span class="token builtin">complex64</span> <span class="token operator">=</span> <span class="token function">complex</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 等于： 5 + 3i</span>

<span class="token comment">// 另一种初始化方式</span>
complexData2 <span class="token operator">:=</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">3i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string"><span>字符串 (string)</span></a></h2><p>字符串由一连串的字符组成，类型名称为 <code>string</code></p><p><strong>字符串一旦创建，无法修改</strong></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> str <span class="token builtin">string</span> <span class="token operator">:=</span> <span class="token string">&quot;Hi! Jack&quot;</span>
  
  <span class="token comment">// 不能修改，以下注释的代码会报错</span>
  <span class="token comment">// str[2] = &#39;c&#39;</span>

  fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="布尔类型-bool" tabindex="-1"><a class="header-anchor" href="#布尔类型-bool"><span>布尔类型 (bool)</span></a></h2><p>布尔类型的值为 <code>true</code> 或 <code>false</code>, 类型名称为 <code>bool</code></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> isNumber <span class="token builtin">bool</span>

isNumber <span class="token operator">=</span> <span class="token boolean">true</span>
isNumber <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="数组-array" tabindex="-1"><a class="header-anchor" href="#数组-array"><span>数组 (array)</span></a></h2><p>数组由一系列数据组成，可通过下标获取数据</p><p><strong>数组的容量一经创建就无法修改</strong></p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>data <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><h2 id="切片-slices" tabindex="-1"><a class="header-anchor" href="#切片-slices"><span>切片 (slices)</span></a></h2><p>切片是动态的数组，可根据数据自动调整容量大小</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> data <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">++</span> <span class="token punctuation">{</span>
		data <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> i<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 结果</span>
<span class="token comment">// [0 1 2 3 4 5 6 7 8 9]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="map-map" tabindex="-1"><a class="header-anchor" href="#map-map"><span>Map (map)</span></a></h2><p><code>map</code> 是一种键值映射表，通过 <code>key</code> 获取对应的 <code>value</code></p><p><code>map</code> 的声明方式</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>map[KeyType]ValueType
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>KeyType</code> 为 key 的数据类型 , <code>ValueType</code> 为 <code>value</code> 的数据类型</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 声明 map</span>
<span class="token keyword">var</span> m <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>

<span class="token comment">// 使用 make 初始化 map</span>
m <span class="token operator">=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

<span class="token comment">// 设置值</span>
m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">66</span>

<span class="token comment">// 输出值</span>
fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>m<span class="token punctuation">[</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="结构体-struct" tabindex="-1"><a class="header-anchor" href="#结构体-struct"><span>结构体 (struct)</span></a></h2><p>结构体由一系列自定义的字段组成，可通过 <code>.</code> 获取字段内容</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> Animal <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

a <span class="token operator">:=</span> Animal<span class="token punctuation">{</span>
    Name<span class="token punctuation">:</span> <span class="token string">&quot;Lucky&quot;</span>
<span class="token punctuation">}</span>

fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="指针-pointer" tabindex="-1"><a class="header-anchor" href="#指针-pointer"><span>指针 (pointer)</span></a></h2><p>指针存储的是变量的内存地址，在变量前使用 <code>*</code> 定义为指针，使用 <code>&amp;</code> 获取变量地址，通过指针可以在函数中修改函数外的数据</p><details class="hint-container details"><summary>例子</summary><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> num <span class="token operator">*</span><span class="token builtin">int</span>

n <span class="token operator">:=</span> <span class="token number">10</span>

num <span class="token operator">=</span> <span class="token operator">&amp;</span>n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="零值表" tabindex="-1"><a class="header-anchor" href="#零值表"><span>零值表</span></a></h2><table><thead><tr><th><strong>类型</strong></th><th><strong>零值</strong></th></tr></thead><tbody><tr><td>uint/uint8/uint16/uint32/uint64</td><td>0</td></tr><tr><td>int/int8/int16/int32/int64</td><td>0</td></tr><tr><td>float32/float64</td><td>0</td></tr><tr><td>complex64/complex128</td><td>0+0i</td></tr><tr><td>bool</td><td>false</td></tr><tr><td>uintptr</td><td>0</td></tr><tr><td>byte</td><td>0</td></tr><tr><td>rune</td><td>0</td></tr><tr><td>string</td><td>&quot;&quot;</td></tr><tr><td>struct</td><td>内部属性全部是其对应0值</td></tr><tr><td>interface</td><td>nil</td></tr><tr><td>slice</td><td>nil</td></tr><tr><td>map</td><td>nil</td></tr><tr><td>chan</td><td>nil</td></tr><tr><td>func</td><td>nil</td></tr><tr><td>pointer</td><td>nil</td></tr></tbody></table>`,43),o=[i];function d(l,c){return a(),t("div",null,o)}const u=n(e,[["render",d],["__file","2-datatype.html.vue"]]),m=JSON.parse('{"path":"/guide/concepts/golang/2-datatype.html","title":"数据类型","lang":"zh-CN","frontmatter":{"order":2,"title":"数据类型","description":"整数 (int) 整数有两种类型： golang 中 int 开头为有符号数， uint 开头为无符号数 Golang 中的整数类型： 同时还有两个等价类型 rune : 等价于 int32 , 用于存储 Unicode 字符 byte ：等价于 uint8 , 用于存储 ASCII 字符 浮点数 (float) 浮点数就是包含小数点的数字 复数 (c...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/2-datatype.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/2-datatype.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"数据类型"}],["meta",{"property":"og:description","content":"整数 (int) 整数有两种类型： golang 中 int 开头为有符号数， uint 开头为无符号数 Golang 中的整数类型： 同时还有两个等价类型 rune : 等价于 int32 , 用于存储 Unicode 字符 byte ：等价于 uint8 , 用于存储 ASCII 字符 浮点数 (float) 浮点数就是包含小数点的数字 复数 (c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-28T05:09:46.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-01-28T05:09:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-28T05:09:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"整数 (int)","slug":"整数-int","link":"#整数-int","children":[]},{"level":2,"title":"浮点数 (float)","slug":"浮点数-float","link":"#浮点数-float","children":[]},{"level":2,"title":"复数 (complex)","slug":"复数-complex","link":"#复数-complex","children":[]},{"level":2,"title":"字符串 (string)","slug":"字符串-string","link":"#字符串-string","children":[]},{"level":2,"title":"布尔类型 (bool)","slug":"布尔类型-bool","link":"#布尔类型-bool","children":[]},{"level":2,"title":"数组 (array)","slug":"数组-array","link":"#数组-array","children":[]},{"level":2,"title":"切片 (slices)","slug":"切片-slices","link":"#切片-slices","children":[]},{"level":2,"title":"Map (map)","slug":"map-map","link":"#map-map","children":[]},{"level":2,"title":"结构体 (struct)","slug":"结构体-struct","link":"#结构体-struct","children":[]},{"level":2,"title":"指针 (pointer)","slug":"指针-pointer","link":"#指针-pointer","children":[]},{"level":2,"title":"零值表","slug":"零值表","link":"#零值表","children":[]}],"git":{"createdTime":1705461319000,"updatedTime":1706418586000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":4}]},"readingTime":{"minutes":2.32,"words":696},"filePathRelative":"guide/concepts/golang/2-datatype.md","localizedDate":"2024年1月17日","autoDesc":true,"excerpt":"<h2>整数 (int)</h2>\\n<p>整数有两种类型：</p>\\n<table>\\n<thead>\\n<tr>\\n<th>类型</th>\\n<th>范围</th>\\n<th>介绍</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>有符号数 (signed integers)</td>\\n<td><code>-∞</code> ~ <code>+∞</code></td>\\n<td>有符号数包含正数和负数</td>\\n</tr>\\n<tr>\\n<td>无符号数 (unsigned integers)</td>\\n<td><code>0</code> ~ <code>+∞</code></td>\\n<td>无符号数包含 0 和所有正数</td>\\n</tr>\\n</tbody>\\n</table>"}');export{u as comp,m as data};