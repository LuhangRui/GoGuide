import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as e,b as r}from"./app-C5O2l-lo.js";const n={},o=r('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p><strong>地址解析协议(Address Resolution Protocol, ARP)</strong> 是 IPV4 中重要的协议，主要用于通过 IP 地址确定目标设备的 MAC 地址，以保证数据的正确送达。</p><div class="hint-container tip"><p class="hint-container-title">MAC 地址</p><p>媒体访问控制地址 (Media Access Control Address, MAC) 又称为硬件地址，用来<strong>唯一</strong>标识网络设备，如网卡、路由器等。MAC 地址长度为 48 位，3 - 24 位由 IEEE 管理，后 24 位由硬件厂商管理。和 IP 的动态分配不同， MAC 地址一般会写入固件或硬件中，是不可修改的。</p><blockquote><p>MAC: <code>FF-FF-FF-FF-FF-FF</code> 是预留的广播地址</p></blockquote><details class="hint-container details"><summary>MAC 地址的构成</summary><table><thead><tr><th>位数</th><th>含义</th></tr></thead><tbody><tr><td>第1位</td><td>单播地址(0)/多播地址(1)</td></tr><tr><td>第2位</td><td>全局地址(0)/本地地址(1)</td></tr><tr><td>第3-24位</td><td>由 IEEE 管理并保证不重复</td></tr><tr><td>第25-48位</td><td>由厂商管理并保证不重复</td></tr></tbody></table></details></div><h2 id="arp-报文" tabindex="-1"><a class="header-anchor" href="#arp-报文"><span>ARP 报文</span></a></h2><h3 id="报文格式" tabindex="-1"><a class="header-anchor" href="#报文格式"><span>报文格式</span></a></h3><table style="text-align:center;"><tbody><tr><th>长度(位)</th><th>48</th><th>48</th><th>16</th><th>16</th><th>16</th><th>8</th><th>8</th><th>16</th><th>48</th><th>32</th><th>48</th><th>32</th></tr><tr><td><b>数据类型</b></td><td>目标以太网地址</td><td>源以太网地址</td><td>帧类型</td><td>硬件类型</td><td>协议类型</td><td>硬件地址长度</td><td>协议地址长度</td><td>操作码</td><td>源硬件地址</td><td>源协议地址</td><td>目标硬件地址</td><td>目标协议地址</td></tr><tr><td><b>组成</b></td><td colspan="3">14字节 以太网首部</td><td colspan="9">28字节 ARP请求/应答</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><table><thead><tr><th>字段</th><th>长度</th><th>描述</th></tr></thead><tbody><tr><td>以太网目标 MAC 地址</td><td>48 位</td><td>以太网目标 MAC 地址。在 ARP 请求报文中，该字段为广播地址 <code>0xffff-ffff-ffff</code></td></tr><tr><td>以太网源 MAC 地址</td><td>48 位</td><td>以太网源 MAC 地址</td></tr><tr><td>帧类型</td><td>16 位</td><td>数据类型。该字段的值在 ARP 请求或应答报文中为 <code>0x0806</code></td></tr><tr><td>硬件类型</td><td>16 位</td><td>硬件地址类型。该字段的值在以太网中为 1</td></tr><tr><td>协议类型</td><td>16 位</td><td>要映射到发送方的协议地址类型。该字段的值为 IP 地址时为 <code>0x0800</code></td></tr><tr><td>硬件地址长度</td><td>8 位</td><td>硬件地址长度。该字段的值在 ARP 请求或应答报文中为 <code>6</code></td></tr><tr><td>协议地址长度</td><td>8 位</td><td>协议地址长度。该字段的值在 ARP 请求或应答报文中为 <code>4</code></td></tr><tr><td>操作码</td><td>16 位</td><td>操作类型。值如下：1: ARP 请求报文 2: ARP 应答报文</td></tr><tr><td>源 MAC 地址</td><td>48 位</td><td>源 MAC 地址。该字段的值与以太网帧头中的以太网源 MAC 地址相同</td></tr><tr><td>源 IP 地址</td><td>32 位</td><td>源 IP 地址</td></tr><tr><td>目标 MAC 地址</td><td>48 位</td><td>目标 MAC 地址。在 ARP 请求报文中，该字段为 <code>0x0000-0000-0000</code></td></tr><tr><td>目标 IP 地址</td><td>32 位</td><td>目标 IP 地址</td></tr></tbody></table></div>',7),a=[o];function s(c,i){return d(),e("div",null,a)}const p=t(n,[["render",s],["__file","5-arp.html.vue"]]),A=JSON.parse('{"path":"/guide/concepts/network/5-arp.html","title":"ARP","lang":"zh-CN","frontmatter":{"order":5,"title":"ARP","description":"介绍 地址解析协议(Address Resolution Protocol, ARP) 是 IPV4 中重要的协议，主要用于通过 IP 地址确定目标设备的 MAC 地址，以保证数据的正确送达。 MAC 地址 媒体访问控制地址 (Media Access Control Address, MAC) 又称为硬件地址，用来唯一标识网络设备，如网卡、路由器等。...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goguide.ryansu.tech/en/guide/concepts/network/5-arp.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/guide/concepts/network/5-arp.html"}],["meta",{"property":"og:site_name","content":"Go 面试宝典"}],["meta",{"property":"og:title","content":"ARP"}],["meta",{"property":"og:description","content":"介绍 地址解析协议(Address Resolution Protocol, ARP) 是 IPV4 中重要的协议，主要用于通过 IP 地址确定目标设备的 MAC 地址，以保证数据的正确送达。 MAC 地址 媒体访问控制地址 (Media Access Control Address, MAC) 又称为硬件地址，用来唯一标识网络设备，如网卡、路由器等。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-18T02:52:34.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-02-18T02:52:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ARP\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-18T02:52:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"ARP 报文","slug":"arp-报文","link":"#arp-报文","children":[{"level":3,"title":"报文格式","slug":"报文格式","link":"#报文格式","children":[]}]}],"git":{"createdTime":1708165156000,"updatedTime":1708224754000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":2.41,"words":724},"filePathRelative":"guide/concepts/network/5-arp.md","localizedDate":"2024年2月17日","autoDesc":true,"excerpt":"<h2>介绍</h2>\\n<p><strong>地址解析协议(Address Resolution Protocol, ARP)</strong> 是 IPV4 中重要的协议，主要用于通过 IP 地址确定目标设备的 MAC 地址，以保证数据的正确送达。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">MAC 地址</p>\\n<p>媒体访问控制地址 (Media Access Control Address, MAC) 又称为硬件地址，用来<strong>唯一</strong>标识网络设备，如网卡、路由器等。MAC 地址长度为 48 位，3 - 24 位由 IEEE 管理，后 24 位由硬件厂商管理。和 IP 的动态分配不同， MAC 地址一般会写入固件或硬件中，是不可修改的。</p>\\n<blockquote>\\n<p>MAC: <code>FF-FF-FF-FF-FF-FF</code> 是预留的广播地址</p>\\n</blockquote>\\n<details class=\\"hint-container details\\"><summary>MAC 地址的构成</summary>\\n<table>\\n<thead>\\n<tr>\\n<th>位数</th>\\n<th>含义</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>第1位</td>\\n<td>单播地址(0)/多播地址(1)</td>\\n</tr>\\n<tr>\\n<td>第2位</td>\\n<td>全局地址(0)/本地地址(1)</td>\\n</tr>\\n<tr>\\n<td>第3-24位</td>\\n<td>由 IEEE 管理并保证不重复</td>\\n</tr>\\n<tr>\\n<td>第25-48位</td>\\n<td>由厂商管理并保证不重复</td>\\n</tr>\\n</tbody>\\n</table>\\n</details>\\n</div>"}');export{p as comp,A as data};
