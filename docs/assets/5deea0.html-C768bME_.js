import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,e as a}from"./app-r-0ZWJuU.js";const i={},t=a(`<h1 id="本文介绍-minio服务端以linux服务形式安装" tabindex="-1"><a class="header-anchor" href="#本文介绍-minio服务端以linux服务形式安装"><span>本文介绍，minio服务端以Linux服务形式安装</span></a></h1><blockquote><p>本实践将在Ubuntu 20.04 LTS 系统上进行安装测试，目标是以Linux服务形式安装minio服务端，实现一个简洁的单节点MinIO服务。</p></blockquote><h2 id="操作服务器说明" tabindex="-1"><a class="header-anchor" href="#操作服务器说明"><span>操作服务器说明</span></a></h2><blockquote><p>以下命令在 Ubuntu 20.04 LTS 系统上测试</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu@:~$ lsb_release <span class="token parameter variable">-a</span>

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu <span class="token number">20.04</span> LTS
Release:	<span class="token number">20.04</span>
Codename:	focal

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><blockquote><p>假定你以 root 用户登录，也即下面命令都以root用户执行</p></blockquote><blockquote><p>命令行验证</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt

<span class="token comment"># 下载minio服务端</span>
<span class="token function">wget</span> https://dl.minio.io/server/minio/release/linux-amd64/minio

<span class="token comment"># 设置minio服务端的首次访问密钥和密码部署完成后，可以登录后台修改密码，此版本要求必须修改密码</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_ACCESS_KEY</span><span class="token operator">=</span>minioRoot
<span class="token builtin class-name">export</span> <span class="token assign-left variable">MINIO_SECRET_KEY</span><span class="token operator">=</span>minioRootPassword
/opt/minio server /data/minio --console-address :9001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装成linux服务形式" tabindex="-1"><a class="header-anchor" href="#封装成linux服务形式"><span>封装成Linux服务形式</span></a></h2><blockquote><p>/lib/systemd/system/minio.service 文件内容</p></blockquote><blockquote><p>条件假设 , 文件存储目录为 <span style="color:red;"> /data/minio </span></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### vim /lib/systemd/system/minio.service</span>
<span class="token comment">### systemctl daemon-reload</span>
<span class="token comment">### systemctl enable minio  # 开机自启</span>
<span class="token comment">### systemctl start minio   # 启动</span>
<span class="token comment">###</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>minio
<span class="token assign-left variable">After</span><span class="token operator">=</span>systemd-networkd.service systemd-resolved.service
<span class="token comment">#Requires=</span>
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://home.min.io/

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/opt/minio server /data/minio --console-address :9001
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>kill <span class="token parameter variable">-9</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> minio <span class="token operator">|</span><span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span><span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">\`</span></span>

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>常用服务命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重新加载服务</span>
systemctl daemon-reload

<span class="token comment"># 重启命令</span>
systemctl restart minio

<span class="token comment"># 停止服务</span>
systemctl stop minio

<span class="token comment"># 查看服务状态</span>
systemctl status minio

<span class="token comment"># 启动服务</span>
systemctl start minio

<span class="token comment"># 查看日志</span>
journalctl <span class="token parameter variable">-u</span>  minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[t];function o(c,r){return e(),s("div",null,l)}const m=n(i,[["render",o],["__file","5deea0.html.vue"]]),u=JSON.parse(`{"path":"/p2024/Linux/minio/5deea0.html","title":"minio服务端以Linux服务形式安装","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/minio/5deea0.html","lang":"zh-CN","title":"minio服务端以Linux服务形式安装","description":"minio服务端以Linux服务形式安装","isOriginal":true,"date":"2024-02-27T00:00:00.000Z","category":["minio"],"tag":["minio","minio服务端安装","mc","Linux服务"],"head":[["meta",{"name":"keywords","content":"minio,minio服务端安装,mc,Linux服务"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/minio/5deea0.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"minio服务端以Linux服务形式安装"}],["meta",{"property":"og:description","content":"minio服务端以Linux服务形式安装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T10:30:28.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"minio"}],["meta",{"property":"article:tag","content":"minio服务端安装"}],["meta",{"property":"article:tag","content":"mc"}],["meta",{"property":"article:tag","content":"Linux服务"}],["meta",{"property":"article:published_time","content":"2024-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T10:30:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"minio服务端以Linux服务形式安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T10:30:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作服务器说明","slug":"操作服务器说明","link":"#操作服务器说明","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]},{"level":2,"title":"封装成Linux服务形式","slug":"封装成linux服务形式","link":"#封装成linux服务形式","children":[]}],"git":{"createdTime":1712917828000,"updatedTime":1712917828000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.38,"words":413},"filePathRelative":"06.Linux/89.minio/20240227_minio服务端以Linux服务形式安装.md","localizedDate":"2024年2月27日","excerpt":"\\n<blockquote>\\n<p>本实践将在Ubuntu 20.04 LTS 系统上进行安装测试，目标是以Linux服务形式安装minio服务端，实现一个简洁的单节点MinIO服务。</p>\\n</blockquote>\\n<h2>操作服务器说明</h2>\\n<blockquote>\\n<p>以下命令在  Ubuntu 20.04 LTS 系统上测试</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ubuntu@:~$ lsb_release <span class=\\"token parameter variable\\">-a</span>\\n\\nNo LSB modules are available.\\nDistributor ID:\\tUbuntu\\nDescription:\\tUbuntu <span class=\\"token number\\">20.04</span> LTS\\nRelease:\\t<span class=\\"token number\\">20.04</span>\\nCodename:\\tfocal\\n\\n</code></pre></div>"}`);export{m as comp,u as data};
