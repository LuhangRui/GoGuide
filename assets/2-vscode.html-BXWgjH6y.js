import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as r,a as n,b as s,d as a,e}from"./app-BjCSGUWA.js";const l={},u=e('<h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VsCode</span></a></h2><p>VsCode is an open-source code editor launched by Microsoft. It supports multiple languages and provides a wealth of plugins to help developers improve their efficiency.</p><p>For cloud development, <strong>VsCode</strong> is recommended. Click here to download</p><h2 id="recommended-plugins" tabindex="-1"><a class="header-anchor" href="#recommended-plugins"><span>Recommended Plugins</span></a></h2><ul><li><strong>Go</strong></li></ul><p>Go is a very useful Go language plugin that supports code hints, code formatting, code jumping, and other functions.</p>',6),c={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"Info",-1),m=n("li",null,"Name: Go",-1),k=n("li",null,"Id: golang.go",-1),g=n("li",null,"Description: Rich Go language support for Visual Studio Code",-1),v=n("li",null,"Version: 0.41.4",-1),h=n("li",null,"Publisher: Go Team at Google",-1),q={href:"https://marketplace.visualstudio.com/items?itemName=golang.Go",target:"_blank",rel:"noopener noreferrer"},b=n("ul",null,[n("li",null,[n("strong",null,"indent-rainbow"),s(" A bracket hint plugin that makes it easier for you to see the indentation level of the code.")])],-1),y={class:"hint-container info"},f=n("p",{class:"hint-container-title"},"Info",-1),_=n("li",null,"Name: indent-rainbow",-1),j=n("li",null,"Id: oderwat.indent-rainbow",-1),C=n("li",null,"Description: Makes indentation easier to read",-1),w=n("li",null,"Version: 8.3.1",-1),x=n("li",null,"Publisher: oderwat",-1),V={href:"https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow",target:"_blank",rel:"noopener noreferrer"},G=n("ul",null,[n("li",null,[n("strong",null,"GitLens")])],-1),S=n("p",null,"GitLens is a very useful Git plugin that can help you better manage code versions.",-1),I={class:"hint-container info"},N=n("p",{class:"hint-container-title"},"Info",-1),D=n("li",null,"Name: GitLens — Git supercharged",-1),F=n("li",null,"Id: eamodio.gitlens",-1),E=n("li",null,"Description: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more",-1),L=n("li",null,"Version: 14.9.1",-1),P=n("li",null,"Publisher: GitKraken",-1),T={href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"},M=n("ul",null,[n("li",null,[n("strong",null,"Remote Explorer")])],-1),O=n("p",null,"Remote Explorer is a very useful remote development plugin that can help you better manage remote code.",-1),R={class:"hint-container info"},$=n("p",{class:"hint-container-title"},"Info",-1),A=n("li",null,"Name: Remote Explorer",-1),z=n("li",null,"Id: ms-vscode.remote-explorer",-1),B=n("li",null,"Description: View remote machines for SSH and Tunnels.",-1),J=n("li",null,"Version: 0.4.3",-1),H=n("li",null,"Publisher: Microsoft",-1),U={href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer",target:"_blank",rel:"noopener noreferrer"},Z=e(`<h2 id="launch-json-configuration-guide" tabindex="-1"><a class="header-anchor" href="#launch-json-configuration-guide"><span><code>launch.json</code> Configuration Guide</span></a></h2><p>In Visual Studio Code (VSCode), <code>launch.json</code> is a crucial configuration file that helps you debug your code effectively. Within <code>launch.json</code>, you define the debugger&#39;s settings, such as the debugger type, program entry point, program arguments, and more. This flexibility simplifies the process of debugging your programs.</p><p>Using <code>launch.json</code>, you can achieve the following:</p><table><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>Local and Remote Debugging</td><td>Configure both local and remote debugging for your code.</td></tr><tr><td>Multi-Language Debugging Support</td><td>Configure debugging for various programming languages, such as Java, Python, Go, etc.</td></tr><tr><td>Debugging Parameter Configuration</td><td>Customize debugging parameters, including environment variables, working directories, and target files.</td></tr><tr><td>Setting Breakpoints</td><td>Set breakpoints to pause execution, view code at specific points, and inspect the call stack.</td></tr></tbody></table><h3 id="configuration-fields" tabindex="-1"><a class="header-anchor" href="#configuration-fields"><span>Configuration Fields</span></a></h3><p><strong>Example for Golang in <code>launch.json</code></strong></p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch test function&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;-test.run&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Field Descriptions</strong></p><table><thead><tr><th>Field Name</th><th>Description</th></tr></thead><tbody><tr><td>version</td><td>Configuration file version (currently supports only &quot;0.2.0&quot;).</td></tr><tr><td>configurations</td><td>An array of configurations, each represented as an object.</td></tr><tr><td>name</td><td>Configuration name displayed in the debugger.</td></tr><tr><td>type</td><td>Debugger type (e.g., go, python, java).</td></tr><tr><td>request</td><td>Request type: &quot;launch&quot; starts the debugger, &quot;attach&quot; connects to a running program.</td></tr><tr><td>mode</td><td>Debugging mode (e.g., test, exec, debug).</td></tr><tr><td>program</td><td>Program entry file (can be a file path or directory).</td></tr><tr><td>args</td><td>Program arguments (can be an array or a string).</td></tr><tr><td>cwd</td><td>Working directory where the program runs.</td></tr><tr><td>env</td><td>Environment variables provided as an object.</td></tr><tr><td>stopOnEntry</td><td>If true, stops at the entry point after startup, waiting for debugger connection.</td></tr><tr><td>preLaunchTask</td><td>Specifies a task to run before debugging starts (usually a compilation task).</td></tr><tr><td>postDebugTask</td><td>Specifies a task to run after debugging ends (e.g., cleanup tasks).</td></tr><tr><td>outFiles</td><td>Output file paths for mapping source code to compiled files.</td></tr><tr><td>sourceMaps</td><td>Controls whether to enable source code mapping (&quot;inline,&quot; &quot;both,&quot; or &quot;false&quot;).</td></tr><tr><td>sourceMapPathOverrides</td><td>Adjusts file paths based on source code mappings.</td></tr><tr><td>externalConsole</td><td>If true, runs the program in an external console.</td></tr><tr><td>internalConsoleOptions</td><td>Controls how the internal console is displayed: &quot;neverOpen,&quot; &quot;openOnSessionStart,&quot; or &quot;openOnFirstSessionStart.&quot;</td></tr><tr><td>showAsyncStacks</td><td>If true, displays information about asynchronous calls in stack traces.</td></tr><tr><td>stopOnError</td><td>If true, pauses debugging on errors.</td></tr><tr><td>smartStep</td><td>If true, skips unnecessary code during debugging.</td></tr><tr><td>skipFiles</td><td>Specifies files or folders to exclude from debugging.</td></tr><tr><td>justMyCode</td><td>If true, only debugs your own code.</td></tr></tbody></table><details class="hint-container details"><summary>Example</summary><ul><li>Node.js</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node.js Launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;runtimeExecutable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Python</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python: Current File&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;python&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${file}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integratedTerminal&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    	<span class="token property">&quot;PYTHONPATH&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
		<span class="token property">&quot;args&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Java</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java Debug&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;internalConsole&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stopOnEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mainClass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${file}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Go</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch test function&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;go&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;-test.run&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>C#</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.NET Core Launch (console)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;coreclr&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;preLaunchTask&quot;</span><span class="token operator">:</span> <span class="token string">&quot;build&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;program&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/bin/Debug/&lt;target-framework&gt;/&lt;project-name.dll&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;stopAtEntry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;internalConsole&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function W(K,Y){const t=p("ExternalLinkIcon");return i(),r("div",null,[u,n("div",c,[d,n("ul",null,[m,k,g,v,h,n("li",null,[s("VS Marketplace Link: "),n("a",q,[s("https://marketplace.visualstudio.com/items?itemName=golang.Go"),a(t)])])])]),b,n("div",y,[f,n("ul",null,[_,j,C,w,x,n("li",null,[s("VS Marketplace Link: "),n("a",V,[s("https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow"),a(t)])])])]),G,S,n("div",I,[N,n("ul",null,[D,F,E,L,P,n("li",null,[s("VS Marketplace Link: "),n("a",T,[s("https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"),a(t)])])])]),M,O,n("div",R,[$,n("ul",null,[A,z,B,J,H,n("li",null,[s("VS Marketplace Link: "),n("a",U,[s("https://marketplace.visualstudio.com/items?itemName=ms-vscode.remote-explorer"),a(t)])])])]),Z])}const nn=o(l,[["render",W],["__file","2-vscode.html.vue"]]),sn=JSON.parse('{"path":"/en/guide/devtools/IDE/2-vscode.html","title":"VsCode","lang":"en-US","frontmatter":{"order":2,"title":"VsCode","icon":"akar-icons:vscode-fill","description":"VsCode VsCode is an open-source code editor launched by Microsoft. It supports multiple languages and provides a wealth of plugins to help developers improve their efficiency. F...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goguide.ryansu.tech/guide/devtools/IDE/2-vscode.html"}],["meta",{"property":"og:url","content":"https://goguide.ryansu.tech/en/guide/devtools/IDE/2-vscode.html"}],["meta",{"property":"og:site_name","content":"Go Guide"}],["meta",{"property":"og:title","content":"VsCode"}],["meta",{"property":"og:description","content":"VsCode VsCode is an open-source code editor launched by Microsoft. It supports multiple languages and provides a wealth of plugins to help developers improve their efficiency. F..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T03:48:53.000Z"}],["meta",{"property":"article:author","content":"Go Guide"}],["meta",{"property":"article:modified_time","content":"2024-04-27T03:48:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VsCode\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-27T03:48:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Go Guide\\",\\"url\\":\\"https://github.com/suyuan32\\"}]}"]]},"headers":[{"level":2,"title":"VsCode","slug":"vscode","link":"#vscode","children":[]},{"level":2,"title":"Recommended Plugins","slug":"recommended-plugins","link":"#recommended-plugins","children":[]},{"level":2,"title":"launch.json Configuration Guide","slug":"launch-json-configuration-guide","link":"#launch-json-configuration-guide","children":[{"level":3,"title":"Configuration Fields","slug":"configuration-fields","link":"#configuration-fields","children":[]}]}],"git":{"createdTime":1714109329000,"updatedTime":1714189733000,"contributors":[{"name":"Ryan Su","email":"yuansu.china.work@gmail.com","commits":3}]},"readingTime":{"minutes":2.58,"words":774},"filePathRelative":"en/guide/devtools/IDE/2-vscode.md","localizedDate":"April 26, 2024","autoDesc":true,"excerpt":"<h2>VsCode</h2>\\n<p>VsCode is an open-source code editor launched by Microsoft. It supports multiple languages and provides a wealth of plugins to help developers improve their efficiency.</p>\\n<p>For cloud development, <strong>VsCode</strong> is recommended. Click here to download</p>\\n<h2>Recommended Plugins</h2>"}');export{nn as comp,sn as data};
