import{_ as e,a as t}from"./bplustree-CvKQ8YOv.js";import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as l,d as s}from"./app-CeGilRH-.js";const n={},d=s('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过索引我们可以快速定位到目标数据的位置。</p><p>优点：</p><ul><li>提高查询速度</li><li>降低数据库的 I/O 消耗</li><li>降低 CPU 消耗</li><li>提高数据的唯一性</li><li>保证数据的完整性</li></ul><p>缺点：</p><ul><li>占用磁盘空间</li><li>降低数据的写入和更新速度</li></ul></div><h2 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型"><span>索引类型</span></a></h2><table><thead><tr><th>索引类型</th><th>描述</th></tr></thead><tbody><tr><td><strong>逻辑功能划分</strong></td><td></td></tr><tr><td>普通索引</td><td>这是最基本的索引，它没有任何限制。它的主要任务是加快对数据的访问速度。</td></tr><tr><td>唯一索引</td><td>与普通索引类似，不同的就是：索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。</td></tr><tr><td>主键索引</td><td>主键索引是一种特殊的唯一索引，不允许有空值。</td></tr><tr><td>全文索引</td><td>全文索引用于全文搜索，只有 CHAR、VARCHAR 和 TEXT 列才能被索引。</td></tr><tr><td><strong>物理划分</strong></td><td></td></tr><tr><td>聚簇索引</td><td>聚集索引是按照数据存放的物理位置为顺序的，能提高多行检索的速度。</td></tr><tr><td>非聚簇索引</td><td>非聚簇索引是按照逻辑顺序（索引的顺序）存储的，与数据在磁盘上的存储无关。</td></tr><tr><td><strong>字段个数划分</strong></td><td></td></tr><tr><td>单列索引</td><td>单列索引是基于单个列的值创建的索引。</td></tr><tr><td>组合索引</td><td>组合索引是基于多个列的值创建的索引。</td></tr></tbody></table><h3 id="按逻辑功能划分" tabindex="-1"><a class="header-anchor" href="#按逻辑功能划分"><span>按逻辑功能划分</span></a></h3><h4 id="普通索引" tabindex="-1"><a class="header-anchor" href="#普通索引"><span>普通索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> INDEX</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 索引名</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 (字段名);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引"><span>唯一索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> UNIQUE INDEX</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 索引名</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 (字段名);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引"><span>主键索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">ALTER</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 </span><span style="color:#D73A49;--shiki-dark:#C678DD;">ADD</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> (字段名);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引"><span>全文索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> FULLTEXT</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> INDEX</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 索引名 </span><span style="color:#D73A49;--shiki-dark:#C678DD;">ON</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 (字段名);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="按物理划分" tabindex="-1"><a class="header-anchor" href="#按物理划分"><span>按物理划分</span></a></h3><h4 id="聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引"><span>聚簇索引</span></a></h4><p>聚簇索引的索引和数据存储在一起，索引的顺序和数据的物理存储顺序一致。在 MySQL 中的主键索引就是聚簇索引，索引和数据都存在同一个 <code>.ibd</code> 文件中。</p><div class="hint-container info"><p class="hint-container-title">聚簇索引优缺点</p><p>优点：</p><ul><li>聚簇索引可以减少磁盘 I/O 操作，提高查询效率。查询到索引就找到了数据，不需要再次查询数据。</li><li>聚簇索引可以减少数据碎片，提高数据的存储效率。</li></ul><p>缺点：</p><ul><li>聚簇索引的维护代价较高，插入、删除、更新数据时需要维护索引。</li><li>聚簇索引的数据存储是有序的，如果插入数据是无序的，可能会导致数据存储不连续，增加了数据的存储空间。</li></ul></div><h4 id="非聚簇索引" tabindex="-1"><a class="header-anchor" href="#非聚簇索引"><span>非聚簇索引</span></a></h4><p>非聚簇索引的索引和数据存储在不同的地方，索引的顺序和数据的物理存储顺序不一致。在 MySQL 中的普通索引就是非聚簇索引，索引和数据分别存在两个 <code>.ibd</code> 文件中。</p><div class="hint-container info"><p class="hint-container-title">非聚簇索引优缺点</p><p>优点：</p><ul><li>非聚簇索引的维护代价较低，插入、删除、更新数据时只需要维护索引。</li><li>非聚簇索引的数据存储是无序的，插入数据时不会导致数据存储不连续，减少了数据的存储空间。</li></ul><p>缺点：</p><ul><li>非聚簇索引查询效率较低，查询到索引后还需要再次查询数据。</li><li>非聚簇索引会增加磁盘 I/O 操作，降低查询效率。</li><li>非聚簇索引会增加数据碎片，降低数据的存储效率。</li><li>非聚簇索引的数据存储是无序的，可能会导致数据存储不连续，增加了数据的存储空间。</li></ul></div><div class="hint-container tip"><p class="hint-container-title">覆盖索引</p><p>由于非聚簇索引和数据是分开存储的，意味着在使用索引搜索到数据后还需要回表查询数据，这样会增加一次 I/O 操作。为了减少 I/O 操作，可以使用覆盖索引。覆盖索引是指查询的字段都在索引中，不需要回表查询数据。</p></div><h3 id="按字段个数划分" tabindex="-1"><a class="header-anchor" href="#按字段个数划分"><span>按字段个数划分</span></a></h3><h4 id="单列索引" tabindex="-1"><a class="header-anchor" href="#单列索引"><span>单列索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> INDEX</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 索引名</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 (字段名);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="组合索引" tabindex="-1"><a class="header-anchor" href="#组合索引"><span>组合索引</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> INDEX</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> 索引名</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> ON</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> 表名 (字段名1, 字段名2, ...);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建索引原则" tabindex="-1"><a class="header-anchor" href="#创建索引原则"><span>创建索引原则</span></a></h2><ul><li>最左前缀原则</li></ul><p>MySQL 索引使用最左前缀原则，即在查询时只能使用索引的最左前缀列。例如，如果创建了一个组合索引 <code>(a, b, c)</code>，那么查询时可以使用 <code>(a)</code>、<code>(a, b)</code>、<code>(a, b, c)</code> 三种索引，但不能使用 <code>(b, c)</code>、<code>(c)</code> 等索引。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>最左匹配原则在遇到 <code>&gt;=</code>、<code>&lt;=</code>、<code>between</code>、<code>like 前缀匹配</code> 时可以触发索引，但是如果遇到 <code>&gt;</code> 和 <code>&lt;</code> 则不会触发索引查询。</p></div><ul><li>选择唯一性索引</li></ul><p>在选择索引时，应该优先选择唯一性索引，因为唯一性索引可以保证数据的唯一性，避免数据重复。</p><ul><li>选择区分度高的索引</li></ul><p>在选择索引时，应该选择区分度高的索引，区分度高的索引可以减少扫描的数据量，提高查询效率。</p><ul><li>选择索引列</li></ul><p>在选择索引列时，应该选择查询频繁的列，避免选择不常用的列，提高索引的利用率。</p><div class="hint-container info"><p class="hint-container-title">推荐选择的字段</p><ul><li>频繁查询的字段</li><li>频繁排序的字段</li><li>不为 NULL 的字段</li><li>经常用来 JOIN 的字段</li></ul></div><ul><li>尽量使用前缀索引</li></ul><p>如果索引字段的长度较长，可以使用前缀索引，前缀索引可以减少索引的存储空间，提高索引的查询效率。</p><ul><li>尽量扩展索引而不是新建索引</li></ul><p>如果我们已经有一个 <code>a</code> 索引， 如果我们需要一个 <code>a,b</code> 索引，那么我们可以直接在 <code>a</code>索引上扩展 <code>b</code> 字段，而不是新建一个 <code>a,b</code> 索引。</p><ul><li>索引数量不要太多</li></ul><p>单表的索引数量不要太多，太多索引会增加数据的维护成本，降低数据写入效率。</p><h2 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推"><span>索引下推</span></a></h2><p>索引下推（Index Condition Pushdown）是 MySQL 5.6 引入的一个优化特性，可以减少回表查询数据，提高查询效率，主要用于组合索引。</p><div class="hint-container tip"><p class="hint-container-title">工作原理</p><p>在没有索引下推之前，如果我们有一个组合索引 <code>(a, b)</code>，查询条件是 <code>a = 1 and b = 2</code>，MySQL 会先使用索引 <code>(a, b)</code> 查询出所有 <code>a = 1</code> 的数据，然后再回表查询对应的完整数据行，接着再用 <code>b = 2</code> 的条件判断每一行是否满足条件，将满足条件的数据行返回。</p><p>有了索引下推之后，MySQL 会先使用索引 <code>(a, b)</code> 查询出所有 <code>a = 1 and b = 2</code> 的数据，然后再回表查询对应的完整数据行，减少了回表查询的数据量，提高了查询效率。</p></div><h2 id="索引的数据结构" tabindex="-1"><a class="header-anchor" href="#索引的数据结构"><span>索引的数据结构</span></a></h2><h3 id="b-树" tabindex="-1"><a class="header-anchor" href="#b-树"><span>B 树</span></a></h3><p>B 树是一种多路平衡查找树，是一种常用的索引数据结构。</p><div class="hint-container info"><p class="hint-container-title">B 树的特点：</p><ul><li>每个节点都包含多个子节点，每个节点的子节点个数范围是 <code>[m/2, m]</code>，其中 <code>m</code> 是 B 树的层数。</li><li>所有叶子节点都在同一层。</li><li>根节点至少有两个子节点，除非根节点是叶子节点</li><li>有<code>k</code>个子节点的非叶子节点包含<code>k-1</code>个键值</li><li>每个节点都包含索引和全部数据</li></ul></div><figure><img src="'+e+'" alt="btree" tabindex="0" loading="lazy"><figcaption>btree</figcaption></figure><h3 id="b-树-1" tabindex="-1"><a class="header-anchor" href="#b-树-1"><span>B+ 树</span></a></h3><p>B+ 树是 B 树的一种变种，是一种常用的索引数据结构。和 B 树相比，B+ 树的叶子节点只包含索引，不包含数据，所有叶子节点都在同一层，叶子节点之间通过指针连接。由于节点只包含索引，在同样的块大小下，B+ 树可以存储更多的索引，减少了树的层数，提高了查询效率。由于叶子节点之间通过指针连接，可以支持范围查询，查询速度大大快于 B 树。</p><div class="hint-container info"><p class="hint-container-title">B+ 树的特点：</p><ul><li>所有叶子节点都在同一层。</li><li>非叶子节点只包含索引，不包含数据。</li><li>叶子节点之间通过指针连接。</li><li>叶子节点包含全部数据。</li><li>同样数量的数据，B+ 树的高度比 B 树低。</li></ul></div><figure><img src="'+t+'" alt="b+tree" tabindex="0" loading="lazy"><figcaption>b+tree</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">B树和B+树的区别</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">B-树</th><th style="text-align:center;">B+ 树</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>数据指针和键</strong></td><td style="text-align:center;">所有内部节点和叶节点都包含数据指针和键</td><td style="text-align:center;">只有叶节点包含数据指针和键，内部节点只包含键</td></tr><tr><td style="text-align:center;"><strong>重复键</strong></td><td style="text-align:center;">没有重复的键</td><td style="text-align:center;">存在重复的键，所有内部节点也存在于叶子中</td></tr><tr><td style="text-align:center;"><strong>叶节点链接</strong></td><td style="text-align:center;">叶节点之间没有链接</td><td style="text-align:center;">叶节点之间相互链接</td></tr><tr><td style="text-align:center;"><strong>顺序访问</strong></td><td style="text-align:center;">节点的顺序访问是不可能的, 范围查询需要中序遍历</td><td style="text-align:center;">所有节点都存在于叶子中，因此可以像链表一样进行顺序访问</td></tr><tr><td style="text-align:center;"><strong>搜索速度</strong></td><td style="text-align:center;">搜索键的速度较慢</td><td style="text-align:center;">搜索速度更快</td></tr><tr><td style="text-align:center;"><strong>特定数量条目的高度</strong></td><td style="text-align:center;">对于特定数量的条目，B 树的高度较大</td><td style="text-align:center;">对于相同数量的条目，B+ 树的高度小于 B-树</td></tr></tbody></table></div>',55),r=[d];function c(o,p){return l(),a("div",null,r)}const k=i(n,[["render",c],["__file","3-database-index.html.vue"]]),b=JSON.parse('{"path":"/guide/concepts/database/SQL/3-database-index.html","title":"索引","lang":"zh-CN","frontmatter":{"order":3,"title":"索引","icon":"line-md:star-filled","head":[["meta",{"name":"keywords","content":"索引, 数据库索引, 索引类型, 索引优缺点"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/database/SQL/3-database-index.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/database/SQL/3-database-index.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"索引"}],["meta",{"property":"og:description","content":"相关信息 索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过索引我们可以快速定位到目标数据的位置。 优点： 提高查询速度 降低数据库的 I/O 消耗 降低 CPU 消耗 提高数据的唯一性 保证数据的完整性 缺点： 占用磁盘空间 降低数据的写入和更新速度 索引类型 按逻辑功能划分 普通索引 唯一索引 主键索引 全文索引 按物理划分 聚簇索引..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://goguide.ryansu.tech/assets/image/article/concept/btree.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-05T13:24:21.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-05-05T13:24:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"索引\\",\\"image\\":[\\"https://goguide.ryansu.tech/assets/image/article/concept/btree.png\\",\\"https://goguide.ryansu.tech/assets/image/article/concept/bplustree.png\\"],\\"dateModified\\":\\"2024-05-05T13:24:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]],"description":"相关信息 索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过索引我们可以快速定位到目标数据的位置。 优点： 提高查询速度 降低数据库的 I/O 消耗 降低 CPU 消耗 提高数据的唯一性 保证数据的完整性 缺点： 占用磁盘空间 降低数据的写入和更新速度 索引类型 按逻辑功能划分 普通索引 唯一索引 主键索引 全文索引 按物理划分 聚簇索引..."},"headers":[{"level":2,"title":"索引类型","slug":"索引类型","link":"#索引类型","children":[{"level":3,"title":"按逻辑功能划分","slug":"按逻辑功能划分","link":"#按逻辑功能划分","children":[{"level":4,"title":"普通索引","slug":"普通索引","link":"#普通索引","children":[]},{"level":4,"title":"唯一索引","slug":"唯一索引","link":"#唯一索引","children":[]},{"level":4,"title":"主键索引","slug":"主键索引","link":"#主键索引","children":[]},{"level":4,"title":"全文索引","slug":"全文索引","link":"#全文索引","children":[]}]},{"level":3,"title":"按物理划分","slug":"按物理划分","link":"#按物理划分","children":[{"level":4,"title":"聚簇索引","slug":"聚簇索引","link":"#聚簇索引","children":[]},{"level":4,"title":"非聚簇索引","slug":"非聚簇索引","link":"#非聚簇索引","children":[]}]},{"level":3,"title":"按字段个数划分","slug":"按字段个数划分","link":"#按字段个数划分","children":[{"level":4,"title":"单列索引","slug":"单列索引","link":"#单列索引","children":[]},{"level":4,"title":"组合索引","slug":"组合索引","link":"#组合索引","children":[]}]}]},{"level":2,"title":"创建索引原则","slug":"创建索引原则","link":"#创建索引原则","children":[]},{"level":2,"title":"索引下推","slug":"索引下推","link":"#索引下推","children":[]},{"level":2,"title":"索引的数据结构","slug":"索引的数据结构","link":"#索引的数据结构","children":[{"level":3,"title":"B 树","slug":"b-树","link":"#b-树","children":[]},{"level":3,"title":"B+ 树","slug":"b-树-1","link":"#b-树-1","children":[]}]}],"git":{"createdTime":1714051453000,"updatedTime":1714915461000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":7.79,"words":2338},"filePathRelative":"guide/concepts/database/SQL/3-database-index.md","localizedDate":"2024年4月25日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>索引是关系数据库中对某一列或多个列的值进行预排序的数据结构。通过索引我们可以快速定位到目标数据的位置。</p>\\n<p>优点：</p>\\n<ul>\\n<li>提高查询速度</li>\\n<li>降低数据库的 I/O 消耗</li>\\n<li>降低 CPU 消耗</li>\\n<li>提高数据的唯一性</li>\\n<li>保证数据的完整性</li>\\n</ul>\\n<p>缺点：</p>\\n<ul>\\n<li>占用磁盘空间</li>\\n<li>降低数据的写入和更新速度</li>\\n</ul>\\n</div>"}');export{k as comp,b as data};
