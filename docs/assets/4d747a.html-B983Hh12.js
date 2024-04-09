import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,e as s}from"./app-C6TnbQc3.js";const t={},i=s(`<h1 id="本文介绍-mc实现目录同步并封装成linux服务形式" tabindex="-1"><a class="header-anchor" href="#本文介绍-mc实现目录同步并封装成linux服务形式"><span>本文介绍，mc实现目录同步并封装成Linux服务形式</span></a></h1><blockquote><p>本实践将在Ubuntu 20.04 LTS 系统上进行安装测试，目标是以Linux服务形式实现minio远端目录和本地目录同步。</p></blockquote><h2 id="操作服务器说明" tabindex="-1"><a class="header-anchor" href="#操作服务器说明"><span>操作服务器说明</span></a></h2><blockquote><p>以下命令在 Ubuntu 20.04 LTS 系统上测试</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu@:~$ lsb_release <span class="token parameter variable">-a</span>

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu <span class="token number">20.04</span> LTS
Release:	<span class="token number">20.04</span>
Codename:	focal

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2><blockquote><p>条件假设 , 你已经安装了minio服务端，且已经启动服务端。</p></blockquote><blockquote><p>条件假设 , 你已经安装并配置了mionio客户端mc,并配置别名minio。</p></blockquote><blockquote><p>实现目标是本地目录 <span style="color:red;">/data/aip-tpl</span> 与 minio远端目录 <span style="color:red;">/envs/aip-tpl</span> 之间进行同步。</p></blockquote><h2 id="编写linux服务文件" tabindex="-1"><a class="header-anchor" href="#编写linux服务文件"><span>编写Linux服务文件</span></a></h2><blockquote><p>vim /lib/systemd/system/tplmc.service</p></blockquote><blockquote><p>条件假设 , 文件存储目录为 <span style="color:red;"> /data/minio </span></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">##vim /lib/systemd/system/tplmc.service</span>
<span class="token comment">##systemctl daemon-reload</span>
<span class="token comment">##systemctl enable tplmc  # 开机自启</span>
<span class="token comment">##systemctl start tplmc   # 启动</span>

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>tplmc
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>mc mirror <span class="token parameter variable">--watch</span> <span class="token parameter variable">--overwrite</span> <span class="token parameter variable">--remove</span> <span class="token parameter variable">--exclude</span> <span class="token string">&quot;*-checkpoint.*&quot;</span> /data/aip-tpl minio/envs/aip-tpl

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>常用服务命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重新加载服务</span>
systemctl daemon-reload

<span class="token comment"># 重启命令</span>
systemctl restart tplmc

<span class="token comment"># 停止服务</span>
systemctl stop tplmc

<span class="token comment"># 查看服务状态</span>
systemctl status tplmc

<span class="token comment"># 启动服务</span>
systemctl start tplmc

<span class="token comment"># 查看日志</span>
journalctl <span class="token parameter variable">-u</span> tplmc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[i];function c(o,r){return n(),a("div",null,l)}const d=e(t,[["render",c],["__file","4d747a.html.vue"]]),u=JSON.parse(`{"path":"/p2024/Linux/minio/4d747a.html","title":"mc实现目录同步并封装成Linux服务形式","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/minio/4d747a.html","lang":"zh-CN","title":"mc实现目录同步并封装成Linux服务形式","description":"mc实现目录同步并封装成Linux服务形式","isOriginal":true,"date":"2024-02-29T00:00:00.000Z","category":["minio"],"tag":["minio","目录同步","mc","Linux服务"],"head":[["meta",{"name":"keywords","content":"minio,目录同步,mc,Linux服务"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/minio/4d747a.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"mc实现目录同步并封装成Linux服务形式"}],["meta",{"property":"og:description","content":"mc实现目录同步并封装成Linux服务形式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T02:23:10.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"minio"}],["meta",{"property":"article:tag","content":"目录同步"}],["meta",{"property":"article:tag","content":"mc"}],["meta",{"property":"article:tag","content":"Linux服务"}],["meta",{"property":"article:published_time","content":"2024-02-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T02:23:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mc实现目录同步并封装成Linux服务形式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-09T02:23:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作服务器说明","slug":"操作服务器说明","link":"#操作服务器说明","children":[]},{"level":2,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":2,"title":"编写Linux服务文件","slug":"编写linux服务文件","link":"#编写linux服务文件","children":[]}],"git":{"createdTime":1712629390000,"updatedTime":1712629390000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.28,"words":384},"filePathRelative":"06.Linux/89.minio/20240229_mc实现目录同步并封装成Linux服务形式.md","localizedDate":"2024年2月29日","excerpt":"\\n<blockquote>\\n<p>本实践将在Ubuntu 20.04 LTS 系统上进行安装测试，目标是以Linux服务形式实现minio远端目录和本地目录同步。</p>\\n</blockquote>\\n<h2>操作服务器说明</h2>\\n<blockquote>\\n<p>以下命令在  Ubuntu 20.04 LTS 系统上测试</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ubuntu@:~$ lsb_release <span class=\\"token parameter variable\\">-a</span>\\n\\nNo LSB modules are available.\\nDistributor ID:\\tUbuntu\\nDescription:\\tUbuntu <span class=\\"token number\\">20.04</span> LTS\\nRelease:\\t<span class=\\"token number\\">20.04</span>\\nCodename:\\tfocal\\n\\n</code></pre></div>"}`);export{d as comp,u as data};
