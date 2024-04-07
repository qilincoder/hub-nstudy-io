import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e}from"./app-D55Cmw5b.js";const t={},i=e(`<h1 id="本文介绍-在linux环境下用lsof查询端口占用" tabindex="-1"><a class="header-anchor" href="#本文介绍-在linux环境下用lsof查询端口占用"><span>本文介绍，在Linux环境下用lsof查询端口占用</span></a></h1><h2 id="操作环境说明" tabindex="-1"><a class="header-anchor" href="#操作环境说明"><span>操作环境说明</span></a></h2><blockquote><p>操作环境为 Ubuntu 22.04.2 LTS, 原则上只要有lsof命令即可。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@ubuntu:~<span class="token comment"># lsb_release -a</span>

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu <span class="token number">22.04</span>.2 LTS
Release:	<span class="token number">22.04</span>
Codename:	jammy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查询命令" tabindex="-1"><a class="header-anchor" href="#查询命令"><span>查询命令</span></a></h2><blockquote><p>假定查询端口 8091 端口占用情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">lsof</span> <span class="token parameter variable">-i</span> :8091

COMMAND  PID     <span class="token environment constant">USER</span>   FD   TYPE DEVICE SIZE/OFF NODE NAME
nginx    <span class="token number">776</span>     root    6u  IPv4  <span class="token number">28929</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
nginx    <span class="token number">776</span>     root    7u  IPv6  <span class="token number">28930</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
nginx   <span class="token number">1840</span> www-data    6u  IPv4  <span class="token number">28929</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
nginx   <span class="token number">1840</span> www-data    7u  IPv6  <span class="token number">28930</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
nginx   <span class="token number">1841</span> www-data    6u  IPv4  <span class="token number">28929</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>
nginx   <span class="token number">1841</span> www-data    7u  IPv6  <span class="token number">28930</span>      0t0  TCP *:8091 <span class="token punctuation">(</span>LISTEN<span class="token punctuation">)</span>

或
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> net-tools <span class="token parameter variable">-y</span>

<span class="token function">netstat</span> -tunlp<span class="token operator">|</span><span class="token function">grep</span> <span class="token number">8091</span>  
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:8091            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">776</span>/nginx: master p 
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::8091                 :::*                    LISTEN      <span class="token number">776</span>/nginx: master p 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[i];function o(p,c){return a(),s("div",null,l)}const d=n(t,[["render",o],["__file","fda747.html.vue"]]),m=JSON.parse(`{"path":"/p2024/Linux/others/fda747.html","title":"lsof查询端口占用","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/fda747.html","lang":"zh-CN","title":"lsof查询端口占用","description":"lsof查询端口占用","isOriginal":true,"date":"2024-02-29T00:00:00.000Z","category":["Linux"],"tag":["Linux","lsof","端口占用"],"head":[["meta",{"name":"keywords","content":"Linux,lsof,端口占用"}],["meta",{"property":"og:url","content":"https://nstudy.org/p2024/Linux/others/fda747.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"lsof查询端口占用"}],["meta",{"property":"og:description","content":"lsof查询端口占用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T09:07:52.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"lsof"}],["meta",{"property":"article:tag","content":"端口占用"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T09:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"lsof查询端口占用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T09:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明","slug":"操作环境说明","link":"#操作环境说明","children":[]},{"level":2,"title":"查询命令","slug":"查询命令","link":"#查询命令","children":[]}],"git":{"createdTime":1712480872000,"updatedTime":1712480872000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"06.Linux/99.others/20240229_lsof查询端口占用.md","localizedDate":"2024年2月29日","excerpt":"\\n<h2>操作环境说明</h2>\\n<blockquote>\\n<p>操作环境为 Ubuntu 22.04.2 LTS, 原则上只要有lsof命令即可。</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>root@ubuntu:~<span class=\\"token comment\\"># lsb_release -a</span>\\n\\nNo LSB modules are available.\\nDistributor ID:\\tUbuntu\\nDescription:\\tUbuntu <span class=\\"token number\\">22.04</span>.2 LTS\\nRelease:\\t<span class=\\"token number\\">22.04</span>\\nCodename:\\tjammy\\n</code></pre></div>"}`);export{d as comp,m as data};
