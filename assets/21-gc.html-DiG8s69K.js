import{_ as e,a as t,b as i,c as n,d as l}from"./three-color-delete-barrier-DLZb_O7W.js";import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as c,d as r}from"./app-Y7_biv0n.js";const s={},p=r('<h2 id="常见的垃圾回收策略" tabindex="-1"><a class="header-anchor" href="#常见的垃圾回收策略"><span>常见的垃圾回收策略</span></a></h2><h3 id="引用计数算法-reference-counting" tabindex="-1"><a class="header-anchor" href="#引用计数算法-reference-counting"><span>引用计数算法 （Reference Counting）</span></a></h3><p>引用计数算法是一种最简单的垃圾回收算法，它的基本思想是：给对象中添加一个引用计数字段，每当有一个地方引用它时，计数加 1；当引用失效时，计数减 1；当计数为 0 时，表示对象不再被使用，可以被回收。</p><div class="hint-container tip"><p class="hint-container-title">优缺点</p><p><strong>优点:</strong></p><ul><li><p>无需遍历</p><ul><li>不需要从根节点遍历，相对容易查找</li></ul></li><li><p>立即回收垃圾</p><ul><li>每个对象始终知道自己的被引用次数，一旦引用计数为 0，就会立即将自身连接到空闲链表上，等待回收</li></ul></li><li><p>最大限度地减少程序暂停时间</p><ul><li>在 mutator 更新引用计数时，就会触发垃圾回收，不需要等到内存耗尽时才触发，因此不会出现程序暂停时间过长的情况</li></ul></li></ul><p><strong>缺点:</strong></p><ul><li>无法解决循环引用问题</li><li>每次引用计数发生变化时都需要修改计数器，引起额外的开销</li><li>需要额外的空间存储计数器</li></ul></div><h3 id="追踪回收算法-tracing-garbage-collection" tabindex="-1"><a class="header-anchor" href="#追踪回收算法-tracing-garbage-collection"><span>追踪回收算法 （Tracing Garbage Collection）</span></a></h3><p>追踪回收算法有三种策略:</p><ul><li>标记-清除算法（Mark-Sweep）</li><li>标记-整理算法（Mark-Compact）</li><li>标记-复制算法（Mark-Copying）</li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>三种策略在执行时都需要 STW （stop the world）, 暂停程序运行</p></div><h4 id="标记-清除算法-mark-sweep" tabindex="-1"><a class="header-anchor" href="#标记-清除算法-mark-sweep"><span>标记-清除算法（Mark-Sweep）</span></a></h4><p><strong>工作原理：</strong></p><ol><li><strong>从根对象出发，递归遍历所有可达对象，将可达对象标记为存活对象</strong></li><li><strong>遍历堆中所有对象，将未标记的对象回收</strong></li></ol><div class="hint-container tip"><p class="hint-container-title">优缺点</p><p><strong>优点:</strong></p><ul><li>可以解决循环引用问题</li><li>不需要额外的空间存储计数器</li></ul><p><strong>缺点:</strong></p><ul><li>在清除阶段会产生大量的碎片，导致内存碎片化，可能会导致程序运行分配对象时找不到连续的内存空间而再次触发垃圾回收</li><li>执行效率不稳定</li></ul></div><h4 id="标记-复制算法-mark-copying" tabindex="-1"><a class="header-anchor" href="#标记-复制算法-mark-copying"><span>标记-复制算法（Mark-Copying）</span></a></h4><p><strong>工作原理：</strong></p><ol><li><strong>从根对象出发，递归遍历所有可达对象，将可达对象标记为存活对象</strong></li><li><strong>将堆划分成两个相等的区域：使用区和未使用区</strong></li><li><strong>在程序运行时只将对象放到使用区，当使用区满时，执行垃圾回收，遍历使用区的所有对象，判断存活对象并将存活对象移动至未使用区，然后清空使用区。最后将本两块区域的角色进行交换，即未使用区变成使用区，使用区变成未使用区</strong></li></ol><div class="hint-container tip"><p class="hint-container-title">优缺点</p><p><strong>优点:</strong></p><ul><li>可以解决内存碎片化问题 <ul><li>每次执行垃圾回收都会将存活对象移动至未使用区，对象都是连续存放的</li></ul></li><li>执行效率相对较高 <ul><li>由于只需要复制存活对象，清除未存活对象是批量操作，因此需要的时间相对较短，吞吐率更高</li></ul></li><li>快速分配内存 <ul><li>由于内存是连续的，因此分配内存时只需要移动指针即可，相比其他算法使用的是空闲链表，连续内存分配效率更高</li></ul></li></ul><p><strong>缺点:</strong></p><ul><li>空间利用率低 <ul><li>相同的内存空间下，只有一半的空间可以用来存放对象</li></ul></li><li>递归效率低 <ul><li>由于需要递归遍历并复制所有可达对象，相比于迭代效率较低，且需要额外的栈开销，可能导致内存溢出</li></ul></li></ul></div><h4 id="标记-整理算法-mark-compact" tabindex="-1"><a class="header-anchor" href="#标记-整理算法-mark-compact"><span>标记-整理算法（Mark-Compact）</span></a></h4><p><strong>工作原理：</strong></p><ol><li><strong>从根对象出发，递归遍历所有可达对象，将可达对象标记为存活对象</strong></li><li><strong>将存活对象移动至堆的一端，然后清除未存活对象</strong></li></ol><div class="hint-container tip"><p class="hint-container-title">优缺点</p><p><strong>优点:</strong></p><ul><li>空间利用率高</li><li>相对于标记-复制算法来说空间利用率更高，不会浪费一半的空间</li></ul><p><strong>缺点:</strong></p><ul><li>执行效率较低 <ul><li>在将存活对象移动至堆的一端时，需要进行3次遍历操作，需要更多的时间, 当对象非常多时，暂停时间会比其他两种策略还要长</li></ul></li></ul></div><h4 id="三种策略的比较" tabindex="-1"><a class="header-anchor" href="#三种策略的比较"><span>三种策略的比较</span></a></h4><p>吞吐率: 标记-复制算法 &gt; 标记-整理算法 &gt; 标记-清除算法 内存利用率: 标记-整理算法 &gt; 标记-清除算法 &gt; 标记-复制算法 内存整齐度: 标记-整理算法 = 标记-复制算法 &gt; 标记-清除算法</p><h2 id="golang-的垃圾回收" tabindex="-1"><a class="header-anchor" href="#golang-的垃圾回收"><span>Golang 的垃圾回收</span></a></h2><h3 id="三色标记算法" tabindex="-1"><a class="header-anchor" href="#三色标记算法"><span>三色标记算法</span></a></h3><p>三色标记算法改进了标记-清除算法，将标记-清除算法的两个阶段（标记和清除）分解为三个阶段（标记、标记终止和清除），减少了 <code>STW</code> 的时间。</p><div class="hint-container tip"><p class="hint-container-title">三种对象</p><table><thead><tr><th>颜色</th><th>对象状态</th><th>描述</th></tr></thead><tbody><tr><td>白色</td><td>未访问</td><td>对象未被访问, 可能是需要回收的对象</td></tr><tr><td>灰色</td><td>访问中</td><td>对象已被访问，但其子对象未被访问</td></tr><tr><td>黑色</td><td>访问完成</td><td>对象已被访问，且其子对象已被访问</td></tr></tbody></table><p><strong>最终回收的是白色的对象。</strong></p></div><div class="hint-container important"><p class="hint-container-title">工作原理</p><ol><li><strong>在垃圾回收开始时将根对象标记为灰色</strong></li><li><strong>在灰色对象中选择一个对象标记为黑色，然后将其子对象标记为灰色</strong></li><li><strong>将黑色对象指向的所有白色对象标记为灰色</strong></li><li><strong>重复步骤2和3，直到没有灰色对象</strong></li><li><strong>清除所有白色对象</strong></li></ol></div><figure><img src="'+e+'" alt="三色标记法过程" tabindex="0" loading="lazy"><figcaption>三色标记法过程</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">假如不 STW 会怎样？</p><p>实际上，如果正常按照三色标记法进行 <code>STW</code> 的话， <code>STW</code> 的时间仍旧比较长。但是如果不 <code>STW</code>，那么在标记和清除的过程中，程序可能会继续运行，这样可能会导致对象的状态发生变化，从而导致垃圾回收器无法正确标记对象的状态，最终导致回收错误。</p><figure><img src="'+t+'" alt="GC Error" tabindex="0" loading="lazy"><figcaption>GC Error</figcaption></figure><p>如上图所示，假如遍历完 <code>A</code> 和 <code>D</code> 之后，在遍历到达 <code>B</code> 之前，若 <code>D</code> 添加了对 <code>C</code> 的引用， <code>B</code> 移除了 <code>C</code> 的引用， 则 <code>C</code> 将会在 GC 之后变为白色，会被垃圾回收。</p></div><h4 id="屏障技术" tabindex="-1"><a class="header-anchor" href="#屏障技术"><span>屏障技术</span></a></h4><p>为了解决上述问题， <code>Golang</code> 引入了屏障技术，通过屏障技术可以在对象状态发生变化时，通知垃圾回收器。</p><div class="hint-container important"><p class="hint-container-title">重要</p><p>若我们希望在并发或增量标记算法中保证标记的正确性，我们需要达成以下其中一种三色不变性：</p><ul><li>强三色不变性：在标记阶段中，黑色对象不会指向白色对象</li><li>弱三色不变性：在标记阶段中，黑色对象指向的白色对象（G）必须包含一条灰色对象经过一个或多个白色对象后到达白色对象（G）的路径</li></ul></div><figure><img src="'+i+'" alt="弱三色不变性" tabindex="0" loading="lazy"><figcaption>弱三色不变性</figcaption></figure><p>如上图所示，假如 <code>A</code> 添加了对 <code>D</code> 的引用，则需要再 <code>E</code> 添加指向 <code>D</code> 的引用，这样才能保证弱三色不变性。</p><div class="hint-container tip"><p class="hint-container-title">Golang 用到的屏障技术</p><ul><li>插入屏障</li><li>删除屏障</li></ul></div><div class="hint-container info"><p class="hint-container-title">插入屏障</p><p>在 <code>Golang</code> 中，当一个对象 <code>A</code> 添加了对另一个对象 <code>B</code> 的引用时，会在 <code>A</code> 的引用列表中插入一个 <code>B</code> 的引用，并且将 <code>B</code> 标记为灰色。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>插入屏障只会在堆内生效，不会在栈内生效，主要考虑到性能问题</p></div><figure><img src="'+n+'" alt="插入屏障" tabindex="0" loading="lazy"><figcaption>插入屏障</figcaption></figure><p>如上图所示，在初始条件下（图1）， <code>A</code> 属于栈内数据，<code>F</code> 属于堆内数据，在图2 中同时往 <code>A</code> 添加 <code>D</code> 的引用， 往 <code>F</code> 添加 <code>H</code> 的引用。 <code>H</code> 由于插入屏障会变成灰色，而 <code>D</code> 由于不在堆内，不会变成灰色。当扫描完毕时，如图4 所示，<code>H</code> 会被标记为黑色，而 <code>D</code> 会被标记为白色。这时候会启动 <code>STW</code> 将栈内对象重新扫描一遍，将 <code>D</code> 标记为黑色。</p></div><div class="hint-container info"><p class="hint-container-title">删除屏障</p><p>在 <code>Golang</code> 中，当一个对象 <code>A</code> 删除了对另一个对象 <code>B</code> 的引用时，会在 <code>A</code> 的引用列表中删除一个 <code>B</code> 的引用，如果 <code>B</code> 是白色的，则将 <code>B</code> 标记为灰色。</p><figure><img src="'+l+'" alt="删除屏障" tabindex="0" loading="lazy"><figcaption>删除屏障</figcaption></figure><p>之所以将白色的对象标记为灰色，是因为白色的对象后面可能还有其他对象引用，如果不标记为灰色，可能会导致后续的对象无法被扫描到。</p></div><div class="hint-container important"><p class="hint-container-title">混合写屏障</p><p>插入屏障和删除屏障有以下缺点：</p><ul><li>插入屏障在扫描结束后还需要 <code>STW</code> 一次，将栈内对象重新扫描一遍</li><li>删除屏障回收精度较低，在回收开始时需要 <code>STW</code> 一次，将栈内对象重新扫描一遍, 记录初始快照，保护初始时刻所有存活的对象</li></ul><p>为了解决上述问题， <code>Golang</code> 引入了混合写屏障，混合写屏障是插入屏障和删除屏障的结合，可以在对象状态发生变化时，通知垃圾回收器。</p><p><strong>工作原理</strong></p><ol><li>在垃圾回收开始时将栈上的对象全部扫描并标记为黑色（不进行二次扫描）</li><li>在垃圾回收期间任何栈上创建的对象都会标记为黑色，避免了二次扫描</li><li>在垃圾回收期间删除任何的对象都会标记为灰色</li><li>在垃圾回收期间创建的任何对象都会标记为灰色</li></ol></div>',38),d=[p];function g(h,u){return c(),a("div",null,d)}const y=o(s,[["render",g],["__file","21-gc.html.vue"]]),k=JSON.parse('{"path":"/guide/concepts/golang/21-gc.html","title":"垃圾回收","lang":"zh-CN","frontmatter":{"order":21,"title":"垃圾回收","icon":"line-md:sunny-filled-loop-to-moon-filled-loop-transition","head":[["meta",{"name":"keywords","content":"Go, Golang, 垃圾回收, GC, 三色标记算法, 标记清除算法, 标记整理算法, 标记复制算法"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/golang/21-gc.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/golang/21-gc.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"垃圾回收"}],["meta",{"property":"og:description","content":"常见的垃圾回收策略 引用计数算法 （Reference Counting） 引用计数算法是一种最简单的垃圾回收算法，它的基本思想是：给对象中添加一个引用计数字段，每当有一个地方引用它时，计数加 1；当引用失效时，计数减 1；当计数为 0 时，表示对象不再被使用，可以被回收。 优缺点 优点: 无需遍历 不需要从根节点遍历，相对容易查找 立即回收垃圾 每个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://goguide.ryansu.tech/assets/image/article/concept/three-color-gc.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-03T14:09:00.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-03T14:09:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾回收\\",\\"image\\":[\\"https://goguide.ryansu.tech/assets/image/article/concept/three-color-gc.png\\",\\"https://goguide.ryansu.tech/assets/image/article/concept/three-color-gc-error.png\\",\\"https://goguide.ryansu.tech/assets/image/article/concept/three-color-gc-error-prevent.png\\",\\"https://goguide.ryansu.tech/assets/image/article/concept/three-color-write-prevent.png\\",\\"https://goguide.ryansu.tech/assets/image/article/concept/three-color-delete-barrier.png\\"],\\"dateModified\\":\\"2024-05-03T14:09:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"常见的垃圾回收策略 引用计数算法 （Reference Counting） 引用计数算法是一种最简单的垃圾回收算法，它的基本思想是：给对象中添加一个引用计数字段，每当有一个地方引用它时，计数加 1；当引用失效时，计数减 1；当计数为 0 时，表示对象不再被使用，可以被回收。 优缺点 优点: 无需遍历 不需要从根节点遍历，相对容易查找 立即回收垃圾 每个..."},"headers":[{"level":2,"title":"常见的垃圾回收策略","slug":"常见的垃圾回收策略","link":"#常见的垃圾回收策略","children":[{"level":3,"title":"引用计数算法 （Reference Counting）","slug":"引用计数算法-reference-counting","link":"#引用计数算法-reference-counting","children":[]},{"level":3,"title":"追踪回收算法 （Tracing Garbage Collection）","slug":"追踪回收算法-tracing-garbage-collection","link":"#追踪回收算法-tracing-garbage-collection","children":[{"level":4,"title":"标记-清除算法（Mark-Sweep）","slug":"标记-清除算法-mark-sweep","link":"#标记-清除算法-mark-sweep","children":[]},{"level":4,"title":"标记-复制算法（Mark-Copying）","slug":"标记-复制算法-mark-copying","link":"#标记-复制算法-mark-copying","children":[]},{"level":4,"title":"标记-整理算法（Mark-Compact）","slug":"标记-整理算法-mark-compact","link":"#标记-整理算法-mark-compact","children":[]},{"level":4,"title":"三种策略的比较","slug":"三种策略的比较","link":"#三种策略的比较","children":[]}]}]},{"level":2,"title":"Golang 的垃圾回收","slug":"golang-的垃圾回收","link":"#golang-的垃圾回收","children":[{"level":3,"title":"三色标记算法","slug":"三色标记算法","link":"#三色标记算法","children":[{"level":4,"title":"屏障技术","slug":"屏障技术","link":"#屏障技术","children":[]}]}]}],"git":{"createdTime":1714745340000,"updatedTime":1714745340000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":8.19,"words":2457},"filePathRelative":"guide/concepts/golang/21-gc.md","localizedDate":"2024年5月3日","autoDesc":true,"excerpt":"<h2>常见的垃圾回收策略</h2>\\n<h3>引用计数算法 （Reference Counting）</h3>\\n<p>引用计数算法是一种最简单的垃圾回收算法，它的基本思想是：给对象中添加一个引用计数字段，每当有一个地方引用它时，计数加 1；当引用失效时，计数减 1；当计数为 0 时，表示对象不再被使用，可以被回收。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">优缺点</p>\\n<p><strong>优点:</strong></p>\\n<ul>\\n<li>\\n<p>无需遍历</p>\\n<ul>\\n<li>不需要从根节点遍历，相对容易查找</li>\\n</ul>\\n</li>\\n<li>\\n<p>立即回收垃圾</p>\\n<ul>\\n<li>每个对象始终知道自己的被引用次数，一旦引用计数为 0，就会立即将自身连接到空闲链表上，等待回收</li>\\n</ul>\\n</li>\\n<li>\\n<p>最大限度地减少程序暂停时间</p>\\n<ul>\\n<li>在 mutator 更新引用计数时，就会触发垃圾回收，不需要等到内存耗尽时才触发，因此不会出现程序暂停时间过长的情况</li>\\n</ul>\\n</li>\\n</ul>\\n<p><strong>缺点:</strong></p>\\n<ul>\\n<li>无法解决循环引用问题</li>\\n<li>每次引用计数发生变化时都需要修改计数器，引起额外的开销</li>\\n<li>需要额外的空间存储计数器</li>\\n</ul>\\n</div>"}');export{y as comp,k as data};
