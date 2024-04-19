import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-D9W4Cu8K.js";const i={},l=a(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本设备有三个网卡 enp1x0s0 enp1x1s0 wlp1x9s0 , 前两个是千兆物理网卡,后一个是WiFi-6</p></blockquote><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>安装PVE后，需要配置网络容器、虚拟机才能畅享互联网，否则无法联网。本教程通过物理网线连接enp1x0s0接口上网, enp1x1s0 wlp1x9s0 暂时没有用到，暂时不考虑。优先解决容器、虚拟机可以上网。</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><h3 id="主要是修改-etc-network-interfaces-配置文件-修改完后重启电脑即可。" tabindex="-1"><a class="header-anchor" href="#主要是修改-etc-network-interfaces-配置文件-修改完后重启电脑即可。"><span>主要是修改 /etc/network/interfaces 配置文件,修改完后重启电脑即可。</span></a></h3><blockquote><p>部分IP地址用 xxx 代替</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>root@:~# cat /etc/network/interfaces

auto lo
iface lo inet loopback

auto enp1x0s0
iface enp1x0s0 inet static
    address 192.xxx.xxx.xxx/24
    gateway 192.xxx.xxx.1

auto vmbr0
iface vmbr0 inet static
    address 10.10.xx.2/24
    bridge-ports none
    bridge-stp off
    bridge-fd 0
    post-up iptables -t nat -A POSTROUTING -s 10.10.xx.0/24 -o enp1x0s0 -j MASQUERADE
    post-down iptables -t nat -D POSTROUTING -s 10.10.xx.0/24 -o enp1x0s0 -j MASQUERADE
 
iface enp131s0 inet manual
iface wlp129s0 inet manual
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上述配置解释" tabindex="-1"><a class="header-anchor" href="#上述配置解释"><span>上述配置解释</span></a></h3><blockquote><p>iface enp1x0s0 inet static 主网卡(有线网卡)enp1x0s0 连接了有线网卡,开启自动启动,配置了静态IP地址<br> 上层路由器可以上网,这里给一个合法的IP地址即可保证主机可以上网</p></blockquote><blockquote><p>iface vmbr0 inet static 桥接一个虚拟网桥, 分配网段 10.10.xx.2/24 , 在开启或者关闭网卡的时候，在iptables配置网络流量转发给主网卡enp1x0s0以达到上网的目的</p></blockquote><h3 id="其他必要操作" tabindex="-1"><a class="header-anchor" href="#其他必要操作"><span>其他必要操作</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 开启 IPv4 转发功能（一定要开启,否则虚拟机、容器无法上网）</span>
root@:~<span class="token comment"># vim /etc/sysctl.conf </span>
root@:~<span class="token comment"># sysctl -p</span>

net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>

root@:~<span class="token comment"># cat /proc/sys/net/ipv4/ip_forward</span>
<span class="token number">1</span>

<span class="token comment"># 开启arp代理功能，可以加速网络</span>
root@:/etc/network<span class="token comment"># sysctl -p</span>

net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.wlp129s0.proxy_arp <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.conf.enp130s0.proxy_arp <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在启用wifi6的时候的网络配置" tabindex="-1"><a class="header-anchor" href="#在启用wifi6的时候的网络配置"><span>在启用WIFI6的时候的网络配置</span></a></h3><blockquote><p>此种情况,主机可以通过网口1 和 WIFI网络上网<br> 虚拟机和docker容器通过WIFI网络上网<br> WIFI网络配置请参照下一篇教程</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
auto lo
iface lo inet loopback

<span class="token comment"># Wifi</span>
auto wlp1x9s0
iface wlp1x9s0 inet dhcp
    wpa_conf /etc/wpa_supplicant/config

<span class="token comment"># 网口1</span>
auto enp1x0s0
iface enp1x0s0 inet static
    address <span class="token number">172.17</span>.30.150/24
    gateway <span class="token number">172.17</span>.30.1

<span class="token comment"># 网口2</span>
iface wlp12xs0 inet manual

auto vmbr0
iface vmbr0 inet static
    address <span class="token number">10.10</span>.xx.2
    netmask <span class="token number">255.255</span>.255.0
    bridge-ports none
    bridge-stp off
    bridge-fd <span class="token number">0</span>
    post-up iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">10.10</span>.xx.0/24 <span class="token parameter variable">-o</span> wlp1x9s0 <span class="token parameter variable">-j</span> MASQUERADE
    post-down iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-D</span> POSTROUTING <span class="token parameter variable">-s</span> <span class="token number">10.10</span>.xx.0/24 <span class="token parameter variable">-o</span> wlp1x9s0 <span class="token parameter variable">-j</span> MASQUERADE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些常用的网络命令-用来排查问题" tabindex="-1"><a class="header-anchor" href="#一些常用的网络命令-用来排查问题"><span>一些常用的网络命令，用来排查问题</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 维护路由表</span>
root@:~<span class="token comment"># iptables -t nat -L --line-numbers</span>
Chain PREROUTING <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
num  target     prot opt <span class="token builtin class-name">source</span>               destination         

Chain INPUT <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
num  target     prot opt <span class="token builtin class-name">source</span>               destination         

Chain OUTPUT <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
num  target     prot opt <span class="token builtin class-name">source</span>               destination         

Chain POSTROUTING <span class="token punctuation">(</span>policy ACCEPT<span class="token punctuation">)</span>
num  target     prot opt <span class="token builtin class-name">source</span>               destination         
<span class="token number">1</span>    MASQUERADE  all  --  <span class="token number">10.10</span>.xxx.0/24        anywhere            
<span class="token number">2</span>    MASQUERADE  all  --  <span class="token number">10.10</span>.xxx.0/24        anywhere

<span class="token comment"># 删除</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-D</span> POSTROUTING <span class="token number">2</span>

 
<span class="token comment"># 各种网络排查命令</span>
iptables <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-L</span>
route <span class="token parameter variable">-v</span>
route <span class="token parameter variable">-n</span>
<span class="token function">ip</span> route
<span class="token function">netstat</span> <span class="token parameter variable">-nr</span>

<span class="token comment"># 说明</span>
<span class="token comment"># 重新加载,可能造成路由表错乱,网络转换失联</span>
ifreload <span class="token parameter variable">-a</span>

<span class="token comment"># 采用 ifdown xx &amp; if up  不会造成失联</span>

<span class="token comment"># 重启网络服务</span>
systemctl restart networking.service 
systemctl status networking.service

<span class="token function">apt</span> <span class="token function">install</span> net-tools

<span class="token comment"># 查看路由表</span>
root@:~<span class="token comment"># route -n</span>

Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
<span class="token number">0.0</span>.0.0         <span class="token number">192</span>.xxx.1.1     <span class="token number">0.0</span>.0.0         UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> enp1x0s0
<span class="token number">10.10</span>.xxx.0      <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> vmbr0
<span class="token number">192</span>.xxx.1.0     <span class="token number">0.0</span>.0.0         <span class="token number">255.255</span>.255.0   U     <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> enp1x0s0

<span class="token comment">###以下是以前排查的做参考</span>
<span class="token comment">#多网卡不能上网 -- 下面的网关有问题</span>
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
<span class="token number">0.0</span>.0.0         <span class="token number">172</span>.xxx.8.1      <span class="token number">0.0</span>.0.0         UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> wlp1xxs0
<span class="token number">0.0</span>.0.0         <span class="token number">172</span>.xxx.30.1     <span class="token number">0.0</span>.0.0         UG    <span class="token number">0</span>      <span class="token number">0</span>        <span class="token number">0</span> wlp1xxs0

<span class="token comment">#添加网关</span>
route <span class="token function">add</span> default gw <span class="token number">172</span>.xxx.8.1 
<span class="token comment">#删除网关</span>
route del default gw <span class="token number">172</span>.xxx.8.1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[l];function r(c,p){return s(),e("div",null,t)}const m=n(i,[["render",r],["__file","7e9636.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Linux/PVE/7e9636.html","title":"PVE网络配置","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/7e9636.html","lang":"zh-CN","title":"PVE网络配置","description":"PVE网络配置","isOriginal":true,"date":"2024-02-02T00:00:00.000Z","category":["PVE","PVE网络配置"],"tag":["PVE","PVE网络配置"],"head":[["meta",{"name":"keywords","content":"PVE,网络配置,PVE网络配置"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/7e9636.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE网络配置"}],["meta",{"property":"og:description","content":"PVE网络配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T08:21:32.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"PVE网络配置"}],["meta",{"property":"article:published_time","content":"2024-02-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-19T08:21:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE网络配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-19T08:21:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[{"level":3,"title":"主要是修改 /etc/network/interfaces 配置文件,修改完后重启电脑即可。","slug":"主要是修改-etc-network-interfaces-配置文件-修改完后重启电脑即可。","link":"#主要是修改-etc-network-interfaces-配置文件-修改完后重启电脑即可。","children":[]},{"level":3,"title":"上述配置解释","slug":"上述配置解释","link":"#上述配置解释","children":[]},{"level":3,"title":"其他必要操作","slug":"其他必要操作","link":"#其他必要操作","children":[]},{"level":3,"title":"在启用WIFI6的时候的网络配置","slug":"在启用wifi6的时候的网络配置","link":"#在启用wifi6的时候的网络配置","children":[]},{"level":3,"title":"一些常用的网络命令，用来排查问题","slug":"一些常用的网络命令-用来排查问题","link":"#一些常用的网络命令-用来排查问题","children":[]}]}],"git":{"createdTime":1713514892000,"updatedTime":1713514892000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.97,"words":890},"filePathRelative":"06.Linux/88.PVE/20240202_PVE网络配置.md","localizedDate":"2024年2月2日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~# pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{m as comp,v as data};
