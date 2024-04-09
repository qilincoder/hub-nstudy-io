import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e as a}from"./app-C6TnbQc3.js";const i={},r=a(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>PVE更新升级都很慢,需要切换一下软件源,来达到加速的目的</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><ul><li><h3 id="查看默认的软件源" tabindex="-1"><a class="header-anchor" href="#查看默认的软件源"><span>查看默认的软件源</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#root@:~# cat /etc/apt/sources.list</span>

deb http://ftp.debian.org/debian bookworm main contrib

deb http://ftp.debian.org/debian bookworm-updates main contrib

<span class="token comment"># security updates</span>
deb http://security.debian.org bookworm-security main contrib

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="下载软件源" tabindex="-1"><a class="header-anchor" href="#下载软件源"><span>下载软件源</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Downlaod and Install debian 12 sourcelist</span>
root@:~<span class="token comment">#curl -fsSL https://mirrors.ustc.edu.cn/repogen/conf/debian-https-4-bookworm -o /etc/apt/sources.list</span>


<span class="token comment"># 查看下载的软件源</span>
root@:~<span class="token comment"># cat /etc/apt/sources.list</span>
deb https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb-src https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

deb https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
deb-src https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="注释源码源" tabindex="-1"><a class="header-anchor" href="#注释源码源"><span>注释源码源</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@:~<span class="token comment"># nano /etc/apt/sources.list</span>

deb https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
<span class="token comment">#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm main contrib non-free non-free-firmware</span>

deb https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
<span class="token comment">#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware</span>

deb https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
<span class="token comment">#deb-src https://mirrors.ustc.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware</span>

deb https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware
<span class="token comment">#deb-src https://mirrors.ustc.edu.cn/debian-security/ bookworm-security main contrib non-free non-free-firmware</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="更改企业源为国内非订阅源" tabindex="-1"><a class="header-anchor" href="#更改企业源为国内非订阅源"><span>更改企业源为国内非订阅源</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#root@:/etc/apt# nano /etc/apt/sources.list.d/pve-enterprise.list</span>

<span class="token comment">#root@:/etc/apt# cat /etc/apt/sources.list.d/pve-enterprise.list</span>

<span class="token comment">#deb https://enterprise.proxmox.com/debian/pve bookworm pve-enterprise</span>
deb https://mirrors.ustc.edu.cn/proxmox/debian bookworm pve-no-subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="更改ceph源为国内非订阅源" tabindex="-1"><a class="header-anchor" href="#更改ceph源为国内非订阅源"><span>更改ceph源为国内非订阅源</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@:/etc/apt<span class="token comment"># nano /etc/apt/sources.list.d/ceph.list </span>
root@:/etc/apt<span class="token comment"># cat /etc/apt/sources.list.d/ceph.list</span>

<span class="token comment">#deb https://enterprise.proxmox.com/debian/ceph-quincy bookworm enterprise</span>
deb https://mirrors.ustc.edu.cn/proxmox/debian/ceph-quincy bookworm no-subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),t=[r];function o(c,d){return n(),s("div",null,t)}const p=e(i,[["render",o],["__file","b6e52a.html.vue"]]),u=JSON.parse(`{"path":"/p2024/Linux/PVE/b6e52a.html","title":"PVE更换源","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/b6e52a.html","lang":"zh-CN","title":"PVE更换源","description":"PVE更换源","isOriginal":true,"date":"2024-02-07T00:00:00.000Z","category":["PVE","PVE更换源"],"tag":["PVE","PVE更换源"],"head":[["meta",{"name":"keywords","content":"PVE,PVE更换源"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/b6e52a.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE更换源"}],["meta",{"property":"og:description","content":"PVE更换源"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T02:23:10.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"PVE更换源"}],["meta",{"property":"article:published_time","content":"2024-02-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T02:23:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE更换源\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-09T02:23:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]}],"git":{"createdTime":1712629390000,"updatedTime":1712629390000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.52,"words":457},"filePathRelative":"06.Linux/88.PVE/20240207_PVE更换源.md","localizedDate":"2024年2月7日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~# pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{p as comp,u as data};
