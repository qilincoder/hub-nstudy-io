import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as t,c as o,a as e,b as n,d,e as s}from"./app-D9W4Cu8K.js";const c={},r=s(`<h2 id="操作环境" tabindex="-1"><a class="header-anchor" href="#操作环境"><span>操作环境</span></a></h2><blockquote><p>其他环境请酌情转换处理</p></blockquote><blockquote><p>系统环境: Ubuntu 22.04.3 LTS</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># lsb_release -a</span>

No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu <span class="token number">22.04</span>.3 LTS
Release:        <span class="token number">22.04</span>
Codename:       jammy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>磁盘情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># lsblk -e 7</span>
<span class="token comment"># -e 排除 loop设备类型</span>

NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           <span class="token number">8</span>:0    <span class="token number">0</span>   <span class="token number">7</span>.3T  <span class="token number">0</span> disk
sdb           <span class="token number">8</span>:16   <span class="token number">0</span>   <span class="token number">7</span>.3T  <span class="token number">0</span> disk
sdc           <span class="token number">8</span>:32   <span class="token number">0</span>   <span class="token number">7</span>.3T  <span class="token number">0</span> disk
sdd           <span class="token number">8</span>:48   <span class="token number">0</span>   <span class="token number">7</span>.3T  <span class="token number">0</span> disk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openzfs-中常见的容错功能" tabindex="-1"><a class="header-anchor" href="#openzfs-中常见的容错功能"><span>OpenZFS 中常见的容错功能</span></a></h2><blockquote><p>OpenZFS 是一个强大的文件系统和逻辑卷管理器，它提供了多种容错功能，可以保护数据免受硬件故障和数据损坏的影响。下面是一些 OpenZFS 中常见的容错功能：</p></blockquote><ol><li><p><strong>RAID-Z</strong>：</p><ul><li>RAID-Z1 是 RAID-Z 的别名。<code>The raidz vdev type is an alias for raidz1</code></li><li>RAID-Z 是一种 ZFS 特有的软件 RAID 方案，类似于传统 RAID 5，但提供更强大的功能和更好的性能。</li><li>RAID-Z 通过在数据块中存储校验信息来提供数据完整性保护。在磁盘故障时，它可以使用校验信息恢复丢失的数据。</li></ul></li><li><p><strong>Mirror</strong>：</p><ul><li>Mirror 是 OpenZFS 中的镜像功能，类似于传统 RAID 1。</li><li>在 Mirror 中，数据被复制到至少两个磁盘上，如果一个磁盘失败，数据仍然可以从其他镜像中恢复。</li></ul></li><li><p><strong>RAID-Z2 和 RAID-Z3</strong>：</p><ul><li>类似于 RAID-Z，但提供了更高级别的容错保护。</li><li>RAID-Z2 允许在两个磁盘故障的情况下继续运行，而 RAID-Z3 允许在三个磁盘故障的情况下继续运行。</li></ul></li><li><p><strong>Hot Spare</strong>：</p><ul><li>Hot Spare 是一种备用磁盘，当检测到磁盘故障时，它会自动替换故障磁盘。</li><li>这可以减少故障对系统的影响，并在故障发生时自动恢复数据。</li></ul></li><li><p><strong>Scrubbing</strong>：</p><ul><li>Scubbing 是一种定期检查和修复数据完整性的过程。</li><li>它会定期扫描存储池中的所有数据，并检查它们与校验信息是否匹配，以及是否存在任何损坏的数据。</li></ul></li></ol><h2 id="选择容错的方案" tabindex="-1"><a class="header-anchor" href="#选择容错的方案"><span>选择容错的方案</span></a></h2><blockquote><p>选择<code>RAID-Z1</code>, 如果有N个相等的磁盘 , 则容量为 (N-1)* 磁盘容量，读取、写入性能均为:<code>N-1</code>, 适用追求最大容量、最小预算的情况。</p></blockquote><blockquote><p>RAIDZ官网介绍: <code>https://openzfs.github.io/openzfs-docs/Basic%20Concepts/RAIDZ.html</code></p></blockquote><h2 id="主要操作步骤" tabindex="-1"><a class="header-anchor" href="#主要操作步骤"><span>主要操作步骤</span></a></h2><blockquote><p>参考资料: <code>https://openzfs.github.io/openzfs-docs/</code></p></blockquote><ol><li>安装 OpenZFS</li></ol><p>On Ubuntu, ZFS is included in the default Linux kernel packages. To install the ZFS utilities, first make sure universe is enabled in /etc/apt/sources.list</p>`,16),p={href:"http://archive.ubuntu.com/ubuntu",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"CODENAME",-1),m=s(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> zfsutils-linux

<span class="token comment"># zpool version</span>
zfs-2.1.5-1ubuntu6~22.04.4
zfs-kmod-2.2.0-0ubuntu1~23.10.2

<span class="token comment"># zfs --version</span>
zfs-2.1.5-1ubuntu6~22.04.4
zfs-kmod-2.2.0-0ubuntu1~23.10.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>创建 ZFS 存储池</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 下面两条命令效果相同</span>
<span class="token function">sudo</span> zpool create mdata <span class="token parameter variable">-m</span> /mdata raidz1 /dev/sda /dev/sdb /dev/sdc /dev/sdd
<span class="token comment"># sudo zpool create mdata -m /mdata raidz /dev/sda /dev/sdb /dev/sdc /dev/sdd</span>

zpool list
<span class="token comment"># zpool status</span>
  pool: mdata
 state: ONLINE
config:

        NAME        STATE     READ WRITE CKSUM
        mdata       ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>
          raidz1-0  ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>
            sda     ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>
            sdb     ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>
            sdc     ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>
            sdd     ONLINE       <span class="token number">0</span>     <span class="token number">0</span>     <span class="token number">0</span>

errors: No known data errors

<span class="token comment"># zpool --help</span>

<span class="token comment"># 销毁存储池</span>
<span class="token function">sudo</span> zpool destroy mdata

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建 ZFS 文件系统</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 创建文件系统</span>
<span class="token function">sudo</span> zfs create <span class="token parameter variable">-o</span> <span class="token assign-left variable">mountpoint</span><span class="token operator">=</span>/mdata/zfs mdata/zfs

<span class="token builtin class-name">cd</span> /mdata/
<span class="token function">chown</span> <span class="token parameter variable">-R</span> user:user admin-user zfs

zfs list

<span class="token comment"># 移除文件系统</span>
<span class="token function">sudo</span> zfs unmount mdata/zfs
<span class="token function">sudo</span> zfs destroy <span class="token parameter variable">-r</span> mdata/zfs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span>其他命令</span></a></h2><blockquote><p>nfs共享</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>zfs <span class="token builtin class-name">set</span> <span class="token assign-left variable">sharenfs</span><span class="token operator">=</span><span class="token string">&quot;rw,root=192.168.xxx.xxx,root=172.10.xxx.xxx&quot;</span> /mata/share
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function b(v,k){const a=i("ExternalLinkIcon");return t(),o("div",null,[r,e("blockquote",null,[e("p",null,[n("deb "),e("a",p,[n("http://archive.ubuntu.com/ubuntu"),d(a)]),n(),u,n(" main universe")])]),m])}const f=l(c,[["render",b],["__file","ce084d.html.vue"]]),Z=JSON.parse(`{"path":"/p2024/Linux/tools/ce084d.html","title":"OpenZFS安装和使用","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/tools/ce084d.html","lang":"zh-CN","title":"OpenZFS安装和使用","description":"OpenZFS安装和使用","isOriginal":true,"date":"2024-04-15T00:00:00.000Z","category":["OpenZFS"],"tag":["OpenZFS"],"head":[["meta",{"name":"keywords","content":"OpenZFS,OpenZFS安装和使用,ZFS"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/tools/ce084d.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"OpenZFS安装和使用"}],["meta",{"property":"og:description","content":"OpenZFS安装和使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T08:21:32.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"OpenZFS"}],["meta",{"property":"article:published_time","content":"2024-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-19T08:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OpenZFS安装和使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-19T08:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境","slug":"操作环境","link":"#操作环境","children":[]},{"level":2,"title":"OpenZFS 中常见的容错功能","slug":"openzfs-中常见的容错功能","link":"#openzfs-中常见的容错功能","children":[]},{"level":2,"title":"选择容错的方案","slug":"选择容错的方案","link":"#选择容错的方案","children":[]},{"level":2,"title":"主要操作步骤","slug":"主要操作步骤","link":"#主要操作步骤","children":[]},{"level":2,"title":"其他命令","slug":"其他命令","link":"#其他命令","children":[]}],"git":{"createdTime":1713514892000,"updatedTime":1713514892000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.86,"words":857},"filePathRelative":"06.Linux/03.tools/20240415_OpenZFS安装和使用.md","localizedDate":"2024年4月15日","excerpt":"<h2>操作环境</h2>\\n<blockquote>\\n<p>其他环境请酌情转换处理</p>\\n</blockquote>\\n<blockquote>\\n<p>系统环境: Ubuntu 22.04.3 LTS</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># lsb_release -a</span>\\n\\nNo LSB modules are available.\\nDistributor ID: Ubuntu\\nDescription:    Ubuntu <span class=\\"token number\\">22.04</span>.3 LTS\\nRelease:        <span class=\\"token number\\">22.04</span>\\nCodename:       jammy\\n</code></pre></div>"}`);export{f as comp,Z as data};
