import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e}from"./app-D55Cmw5b.js";const i={},t=e(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>我的硬件上有一个无线WIFI6网卡，无线网卡的好处是硬件设备可以放在弱电箱，电视后面等位置而无需有线网卡连接。甚至可以手机共享WIFI使用。</p></blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2><ul><li><h3 id="识别网卡" tabindex="-1"><a class="header-anchor" href="#识别网卡"><span>识别网卡</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>lspci <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> wi-fi
<span class="token number">81</span>:00.0 Network controller: Intel Corporation Wi-Fi <span class="token number">6</span> AX200 <span class="token punctuation">(</span>rev 1a<span class="token punctuation">)</span>

lspci <span class="token parameter variable">-vvv</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-A</span> <span class="token number">50</span> wi-fi

<span class="token number">81</span>:00.0 Network controller: Intel Corporation Wi-Fi <span class="token number">6</span> AX200 <span class="token punctuation">(</span>rev 1a<span class="token punctuation">)</span>
	Subsystem: Intel Corporation Wi-Fi <span class="token number">6</span> AX200
	Control: I/O- Mem+ BusMaster- SpecCycle- MemWINV- VGASnoop- ParErr- Stepping- SERR+ FastB2B- DisINTx-
	Status: Cap+ 66MHz- UDF- FastB2B- ParErr- <span class="token assign-left variable">DEVSEL</span><span class="token operator">=</span>fast <span class="token operator">&gt;</span>TAbort- <span class="token operator">&lt;</span>TAbort- <span class="token operator">&lt;</span>MAbort- <span class="token operator">&gt;</span>SERR- <span class="token operator">&lt;</span>PERR- INTx-
	Interrupt: pin A routed to IRQ <span class="token number">16</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="安装驱动" tabindex="-1"><a class="header-anchor" href="#安装驱动"><span>安装驱动</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> firmware-iwlwifi <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="加载驱动" tabindex="-1"><a class="header-anchor" href="#加载驱动"><span>加载驱动</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>modprobe iwlwifi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h3 id="查看网卡驱动" tabindex="-1"><a class="header-anchor" href="#查看网卡驱动"><span>查看网卡驱动</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ethtool</span> <span class="token parameter variable">-i</span> wlp1xxs0

driver: iwlwifi
version: <span class="token number">6.2</span>.16-3-pve
firmware-version: <span class="token number">72</span>.daa05125.0 cc-a0-72.ucode
expansion-rom-version: 
bus-info: 0000:81:00.0
supports-statistics: <span class="token function">yes</span>
supports-test: no
supports-eeprom-access: no
supports-register-dump: no
supports-priv-flags: no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="配置wifi账户和密码" tabindex="-1"><a class="header-anchor" href="#配置wifi账户和密码"><span>配置WIFI账户和密码</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ip</span> <span class="token function">link</span> show
<span class="token comment">## 第一步骤</span>
<span class="token function">apt</span> update
<span class="token function">apt</span> <span class="token function">install</span> wpasupplicant iw wireless-tools <span class="token parameter variable">-y</span>

<span class="token comment">## 配置配置文件 </span>
<span class="token comment">#nano /etc/wpa_supplicant/config</span>
<span class="token comment">#wpa_passphrase &quot;&lt;wifi_ssid&gt;&quot; &quot;&lt;password&gt;&quot; &gt;&gt; /etc/wpa_supplicant/config</span>

如果遇到特殊字符 可以用 <span class="token string">&quot;&quot;</span> <span class="token string">&#39;&#39;</span> <span class="token string">&#39;\\@&#39;</span> 进行处理

<span class="token assign-left variable">ctrl_interface</span><span class="token operator">=</span>/run/wpa_supplicant
<span class="token assign-left variable">update_config</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token assign-left variable">ssid</span><span class="token operator">=</span><span class="token string">&quot;GUEST&quot;</span>
  <span class="token assign-left variable">psk</span><span class="token operator">=</span><span class="token string">&quot;xxxx&quot;</span>
  <span class="token assign-left variable">priority</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token punctuation">}</span>
<span class="token assign-left variable">network</span><span class="token operator">=</span><span class="token punctuation">{</span>
        <span class="token assign-left variable">ssid</span><span class="token operator">=</span><span class="token string">&quot;&lt;wifi_ssid&gt;&quot;</span>
        <span class="token comment">#psk=&quot;&lt;password&gt;&quot;</span>
        <span class="token assign-left variable">psk</span><span class="token operator">=</span>b21a97a3f83a3437c1230f0d92675dd82217b32bd8ffcdb422c0659f42d99569
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="配置-interface" tabindex="-1"><a class="header-anchor" href="#配置-interface"><span>配置 interface</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/network/interfaces

auto wlp1xxs0
iface wlp1xxs0 inet dhcp
  wpa-conf /etc/wpa_supplicant/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="重启网卡" tabindex="-1"><a class="header-anchor" href="#重启网卡"><span>重启网卡</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">ifup</span> wlp1xxs0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><h3 id="扫描可用ssid无线网路" tabindex="-1"><a class="header-anchor" href="#扫描可用ssid无线网路"><span>扫描可用ssid无线网路</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iwlist wlp129s0 scan <span class="token operator">|</span> <span class="token function">grep</span> ESSID

<span class="token comment">#主动连接wifi</span>
wpa_supplicant <span class="token parameter variable">-B</span> <span class="token parameter variable">-i</span> wlp1xxs0 <span class="token parameter variable">-c</span> /etc/wpa_supplicant/config
 
iwconfig
iwlist wlp1xxs0 channel

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="查看wifi情况" tabindex="-1"><a class="header-anchor" href="#查看wifi情况"><span>查看WIFI情况</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>iw dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),l=[t];function p(r,o){return n(),s("div",null,l)}const u=a(i,[["render",p],["__file","7322ca.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Linux/PVE/7322ca.html","title":"PVE配置WIFI网卡","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/7322ca.html","lang":"zh-CN","title":"PVE配置WIFI网卡","description":"PVE配置WIFI网卡","isOriginal":true,"date":"2024-02-03T00:00:00.000Z","category":["PVE","PVE配置WIFI网卡"],"tag":["PVE","PVE配置WIFI网卡"],"head":[["meta",{"name":"keywords","content":"PVE,PVE配置WIFI网卡"}],["meta",{"property":"og:url","content":"https://nstudy.org/p2024/Linux/PVE/7322ca.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE配置WIFI网卡"}],["meta",{"property":"og:description","content":"PVE配置WIFI网卡"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T09:07:52.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"PVE配置WIFI网卡"}],["meta",{"property":"article:published_time","content":"2024-02-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T09:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE配置WIFI网卡\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T09:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]}],"git":{"createdTime":1712480872000,"updatedTime":1712480872000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"06.Linux/88.PVE/20240203_PVE配置WIFI网卡.md","localizedDate":"2024年2月3日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~# pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{u as comp,v as data};
