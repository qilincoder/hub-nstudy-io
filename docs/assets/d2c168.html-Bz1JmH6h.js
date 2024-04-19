import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-CcdNUK7S.js";const i={},l=a(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>PVE提示有新版本可用，经过评估新版本已经发布了一段时间，可以进行升级。</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><ul><li><h3 id="升级命令" tabindex="-1"><a class="header-anchor" href="#升级命令"><span>升级命令</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> dist-upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="升级后的系统信息" tabindex="-1"><a class="header-anchor" href="#升级后的系统信息"><span>升级后的系统信息</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Debian GNU/Linux 12 (bookworm)</span>
<span class="token comment"># proxmox-ve: 8.1.0 (running kernel: 6.5.11-7-pve)</span>

<span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
proxmox-kernel-helper: <span class="token number">8.1</span>.0
pve-kernel-6.2: <span class="token number">8.0</span>.5
proxmox-kernel-6.5: <span class="token number">6.5</span>.11-7
proxmox-kernel-6.5.11-7-pve-signed: <span class="token number">6.5</span>.11-7
proxmox-kernel-6.2.16-20-pve: <span class="token number">6.2</span>.16-20
proxmox-kernel-6.2: <span class="token number">6.2</span>.16-20
pve-kernel-6.2.16-3-pve: <span class="token number">6.2</span>.16-3
ceph-fuse: <span class="token number">17.2</span>.7-pve1
corosync: <span class="token number">3.1</span>.7-pve3
criu: <span class="token number">3.17</span>.1-2
glusterfs-client: <span class="token number">10.3</span>-5
ifupdown2: <span class="token number">3.2</span>.0-1+pmx7
ksm-control-daemon: <span class="token number">1.4</span>-1
libjs-extjs: <span class="token number">7.0</span>.0-4
libknet1: <span class="token number">1.28</span>-pve1
libproxmox-acme-perl: <span class="token number">1.5</span>.0
libproxmox-backup-qemu0: <span class="token number">1.4</span>.1
libproxmox-rs-perl: <span class="token number">0.3</span>.1
libpve-access-control: <span class="token number">8.0</span>.7
libpve-apiclient-perl: <span class="token number">3.3</span>.1
libpve-common-perl: <span class="token number">8.1</span>.0
libpve-guest-common-perl: <span class="token number">5.0</span>.6
libpve-http-server-perl: <span class="token number">5.0</span>.5
libpve-network-perl: <span class="token number">0.9</span>.5
libpve-rs-perl: <span class="token number">0.8</span>.7
libpve-storage-perl: <span class="token number">8.0</span>.5
libspice-server1: <span class="token number">0.15</span>.1-1
lvm2: <span class="token number">2.03</span>.16-2
lxc-pve: <span class="token number">5.0</span>.2-4
lxcfs: <span class="token number">5.0</span>.3-pve4
novnc-pve: <span class="token number">1.4</span>.0-3
proxmox-backup-client: <span class="token number">3.1</span>.2-1
proxmox-backup-file-restore: <span class="token number">3.1</span>.2-1
proxmox-kernel-helper: <span class="token number">8.1</span>.0
proxmox-mail-forward: <span class="token number">0.2</span>.2
proxmox-mini-journalreader: <span class="token number">1.4</span>.0
proxmox-widget-toolkit: <span class="token number">4.1</span>.3
pve-cluster: <span class="token number">8.0</span>.5
pve-container: <span class="token number">5.0</span>.8
pve-docs: <span class="token number">8.1</span>.3
pve-edk2-firmware: <span class="token number">4.2023</span>.08-2
pve-firewall: <span class="token number">5.0</span>.3
pve-firmware: <span class="token number">3.9</span>-1
pve-ha-manager: <span class="token number">4.0</span>.3
pve-i18n: <span class="token number">3.1</span>.4
pve-qemu-kvm: <span class="token number">8.1</span>.2-4
pve-xtermjs: <span class="token number">5.3</span>.0-2
qemu-server: <span class="token number">8.0</span>.10
smartmontools: <span class="token number">7.3</span>-pve1
spiceterm: <span class="token number">3.3</span>.0
swtpm: <span class="token number">0.8</span>.0+pve1
vncterm: <span class="token number">1.8</span>.0
zfsutils-linux: <span class="token number">2.2</span>.2-pve1

<span class="token comment"># root@:~# cat /proc/version</span>

Linux version <span class="token number">6.5</span>.11-7-pve <span class="token punctuation">(</span>build@proxmox<span class="token punctuation">)</span> <span class="token punctuation">(</span>gcc <span class="token punctuation">(</span>Debian <span class="token number">12.2</span>.0-14<span class="token punctuation">)</span> <span class="token number">12.2</span>.0, GNU ld <span class="token punctuation">(</span>GNU Binutils <span class="token keyword">for</span> Debian<span class="token punctuation">)</span> <span class="token number">2.40</span><span class="token punctuation">)</span> <span class="token comment">#1 SMP PREEMPT_DYNAMIC PMX 6.5.11-7 (2023-12-05T09:44Z)</span>

<span class="token comment"># root@:~# uname -a</span>
Linux  <span class="token number">6.5</span>.11-7-pve <span class="token comment">#1 SMP PREEMPT_DYNAMIC PMX 6.5.11-7 (2023-12-05T09:44Z) x86_64 GNU/Linux</span>
<span class="token comment"># root@:~# lsb_release -a</span>
-bash: lsb_release: <span class="token builtin class-name">command</span> not found
<span class="token comment"># root@:~# cat /etc/issue</span>

------------------------------------------------------------------------------

Welcome to the Proxmox Virtual Environment. Please use your web browser to 
configure this server - connect to:

  https://0.0.0.0:8006/

------------------------------------------------------------------------------

<span class="token comment"># root@:~# cat /etc/lsb-release</span>
cat: /etc/lsb-release: No such <span class="token function">file</span> or directory
<span class="token comment"># root@:~# cat /etc/os-release </span>
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">&quot;Debian GNU/Linux 12 (bookworm)&quot;</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">&quot;Debian GNU/Linux&quot;</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">&quot;12&quot;</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">&quot;12 (bookworm)&quot;</span>
<span class="token assign-left variable">VERSION_CODENAME</span><span class="token operator">=</span>bookworm
<span class="token assign-left variable">ID</span><span class="token operator">=</span>debian
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.debian.org/&quot;</span>
<span class="token assign-left variable">SUPPORT_URL</span><span class="token operator">=</span><span class="token string">&quot;https://www.debian.org/support&quot;</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span>&quot;https://bugs.debian.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function p(r,o){return s(),e("div",null,t)}const d=n(i,[["render",p],["__file","d2c168.html.vue"]]),m=JSON.parse(`{"path":"/p2024/Linux/PVE/d2c168.html","title":"PVE升级","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/d2c168.html","lang":"zh-CN","title":"PVE升级","description":"PVE升级","isOriginal":true,"date":"2024-02-09T00:00:00.000Z","category":["PVE","PVE升级"],"tag":["PVE","PVE升级"],"head":[["meta",{"name":"keywords","content":"PVE,PVE升级"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/d2c168.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE升级"}],["meta",{"property":"og:description","content":"PVE升级"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:50:23.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"PVE升级"}],["meta",{"property":"article:published_time","content":"2024-02-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE升级\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-19T07:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]}],"git":{"createdTime":1713513023000,"updatedTime":1713513023000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"06.Linux/88.PVE/20240210_PVE升级.md","localizedDate":"2024年2月9日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~# pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{d as comp,m as data};
