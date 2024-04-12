import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,a as n,b as s,d as t,e}from"./app-r-0ZWJuU.js";const i={},r=e('<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><blockquote><p>原则上linux操作系统都支持、windows等系统操作系统类似</p></blockquote><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><blockquote><p>由于一些原因，需要访问家里或者其他组织局域网内的机器服务，但是公网IP4资源有限，IPV6也属于内部网络。那么，如何通过内网穿透的方式，将局域网内的机器服务暴露到公网IP？那么本实践教程就是解决这个问题</p></blockquote><h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件"><span>前置条件</span></a></h2>',5),u=n("code",null,"1.1.1.1",-1),d=n("br",null,null,-1),k=n("br",null,null,-1),m={href:"https://github.com/fatedier/frp",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),b=n("code",null,"http://127.0.0.1:1000",-1),g=n("code",null,"v0.57.0",-1),h=n("br",null,null,-1),f=n("code",null,"完整文档已经迁移至",-1),y={href:"https://gofrp.org",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"操作步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#操作步骤"},[n("span",null,"操作步骤")])],-1),_=n("h2",{id:"服务端配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#服务端配置"},[n("span",null,"服务端配置")])],-1),x=n("code",null,"frps.toml",-1),P={href:"https://github.com/fatedier/frp/blob/dev/conf/frps.toml",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token key property">bindAddr</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.0.0.0&quot;</span>
<span class="token key property">bindPort</span> <span class="token punctuation">=</span> <span class="token number">7000</span>

<span class="token key property">log.to</span> <span class="token punctuation">=</span> <span class="token string">&quot;./frps.log&quot;</span>
<span class="token key property">log.level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token key property">log.maxDays</span> <span class="token punctuation">=</span> <span class="token number">30</span>
<span class="token key property">log.disablePrintColor</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>

<span class="token comment"># 认证方式</span>
<span class="token key property">auth.method</span> <span class="token punctuation">=</span> <span class="token string">&quot;token&quot;</span>
<span class="token key property">auth.token</span> <span class="token punctuation">=</span> <span class="token string">&quot;123456&quot;</span>

<span class="token comment"># 允许访问的端口</span>
<span class="token key property">allowPorts</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token key property">start</span> <span class="token punctuation">=</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token key property">end</span> <span class="token punctuation">=</span> <span class="token number">9000</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动服务端</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./frps <span class="token parameter variable">-c</span> ./frps.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>我的服务端采用windows,配置成了windows服务的形式,参考配置文件如下<br><code>frp-service.xml</code></p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>service</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ID of the service. It should be unique across the Windows system--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>frp-service<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Display name of the service --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>frp-service<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Service description --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>frp-service<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token comment">&lt;!-- Path to the executable, which should be started --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executable</span><span class="token punctuation">&gt;</span></span>%BASE%\\frps.exe -c frps.toml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executable</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>workingdirectory</span><span class="token punctuation">&gt;</span></span>%BASE%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>workingdirectory</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>priority</span><span class="token punctuation">&gt;</span></span>High<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>priority</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>startmode</span><span class="token punctuation">&gt;</span></span>Automatic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>startmode</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logpath</span><span class="token punctuation">&gt;</span></span>%BASE%\\logs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>logpath</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stoptimeout</span><span class="token punctuation">&gt;</span></span>5 sec<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stoptimeout</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>onfailure</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>restart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10 sec<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>onfailure</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>restart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20 sec<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>onfailure</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>restart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">delay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30 sec<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resetfailure</span><span class="token punctuation">&gt;</span></span>24 hour<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resetfailure</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>service</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置"><span>客户端配置</span></a></h2>`,6),E=n("code",null,"frpc.toml",-1),I={href:"https://github.com/fatedier/frp/blob/dev/conf/frps.toml",target:"_blank",rel:"noopener noreferrer"},V=e(`<div class="language-toml line-numbers-mode" data-ext="toml" data-title="toml"><pre class="language-toml"><code><span class="token key property">serverAddr</span> <span class="token punctuation">=</span> <span class="token string">&quot;1.1.1.1&quot;</span>
<span class="token key property">serverPort</span> <span class="token punctuation">=</span> <span class="token number">7000</span>
<span class="token comment"># 认证方式</span>
<span class="token key property">auth.method</span> <span class="token punctuation">=</span> <span class="token string">&quot;token&quot;</span>
<span class="token key property">auth.token</span> <span class="token punctuation">=</span> <span class="token string">&quot;123456&quot;</span>

<span class="token key property">log.to</span> <span class="token punctuation">=</span> <span class="token string">&quot;./frpc.log&quot;</span>
<span class="token key property">log.level</span> <span class="token punctuation">=</span> <span class="token string">&quot;info&quot;</span>
<span class="token key property">log.maxDays</span> <span class="token punctuation">=</span> <span class="token number">180</span>
<span class="token key property">log.disablePrintColor</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>

<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token table class-name">proxies</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token key property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;test-tcp&quot;</span>
<span class="token key property">type</span> <span class="token punctuation">=</span> <span class="token string">&quot;tcp&quot;</span>
<span class="token key property">localIP</span> <span class="token punctuation">=</span> <span class="token string">&quot;127.0.0.1&quot;</span>
<span class="token key property">localPort</span> <span class="token punctuation">=</span> <span class="token number">80</span>
<span class="token key property">remotePort</span> <span class="token punctuation">=</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动客户端</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token comment"># tar -zxvf frp_0.57.0_linux_amd64.tar.gz</span>

./frpc <span class="token parameter variable">-c</span> ./frpc.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试效果" tabindex="-1"><a class="header-anchor" href="#测试效果"><span>测试效果</span></a></h2><blockquote><p>访问 <code>http://1.1.1.1:1000</code> , 访问成功即为成功</p></blockquote><h2 id="客户端配置成服务" tabindex="-1"><a class="header-anchor" href="#客户端配置成服务"><span>客户端配置成服务</span></a></h2><blockquote><p>我这里是PVE服务,用linux配置方法</p></blockquote><blockquote><p>vim /lib/systemd/system/frpc.service</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>##vim /lib/systemd/system/frpc.service
##systemctl daemon-reload
##systemctl enable frpc  # 开机自启
##systemctl start frpc   # 启动

[Unit]
Description=frpc
After=network.target

[Service]
Type=simple
Restart=on-failure
RestartSec=5
ExecStart=/usr/local/frp/frpc -c /usr/local/frp/frpc.toml

[Install]
WantedBy=multi-user.target

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload

systemctl start frpc
systemctl status frpc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,12),T={href:"https://github.com/fatedier/frp/blob/dev/README.md",target:"_blank",rel:"noopener noreferrer"},z=n("br",null,null,-1),A={href:"https://gofrp.org/zh-cn/docs/examples/",target:"_blank",rel:"noopener noreferrer"};function S(N,B){const a=l("ExternalLinkIcon");return o(),c("div",null,[r,n("blockquote",null,[n("p",null,[s("你需要有一个固定的公网IP , 假如IP地址为 "),u,d,s(" 请保障您使用或者开放的端口, 防火墙策略已经允许访问, 且windows或linux的防火墙也已经放行需要端口"),k,s(" 你已经大致了解并熟悉frp的原理和配置 , "),n("a",m,[s("frp开源地址"),t(a)]),v,s(" 客户端内容您有一个服务可以访问测试,这里为 "),b])]),n("blockquote",null,[n("p",null,[s("当前frp使用的版本为 "),g,s(" ,"),h,f,s(),n("a",y,[s("https://gofrp.org"),t(a)])])]),q,_,n("blockquote",null,[n("p",null,[x,s(" 配置文件, "),n("a",P,[s("完整配置参考"),t(a)])])]),w,n("blockquote",null,[n("p",null,[E,s(" 配置文件, "),n("a",I,[s("完整配置参考"),t(a)])])]),V,n("blockquote",null,[n("p",null,[n("a",T,[s("frp最佳实践-zh"),t(a)]),z,n("a",A,[s("frp最佳实践-en"),t(a)])])])])}const L=p(i,[["render",S],["__file","768612.html.vue"]]),Z=JSON.parse(`{"path":"/p2024/Linux/PVE/768612.html","title":"frp内网穿透","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/768612.html","lang":"zh-CN","title":"frp内网穿透","description":"frp内网穿透","isOriginal":true,"date":"2024-04-01T00:00:00.000Z","category":["PVE","frp内网穿透"],"tag":["PVE","frp内网穿透"],"head":[["meta",{"name":"keywords","content":"PVE,frp内网穿透"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/768612.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"frp内网穿透"}],["meta",{"property":"og:description","content":"frp内网穿透"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T10:30:28.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"frp内网穿透"}],["meta",{"property":"article:published_time","content":"2024-04-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T10:30:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"frp内网穿透\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T10:30:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"前置条件","slug":"前置条件","link":"#前置条件","children":[]},{"level":2,"title":"操作步骤","slug":"操作步骤","link":"#操作步骤","children":[]},{"level":2,"title":"服务端配置","slug":"服务端配置","link":"#服务端配置","children":[]},{"level":2,"title":"客户端配置","slug":"客户端配置","link":"#客户端配置","children":[]},{"level":2,"title":"测试效果","slug":"测试效果","link":"#测试效果","children":[]},{"level":2,"title":"客户端配置成服务","slug":"客户端配置成服务","link":"#客户端配置成服务","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1712917828000,"updatedTime":1712917828000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.23,"words":669},"filePathRelative":"06.Linux/88.PVE/20240401_frp内网穿透.md","localizedDate":"2024年4月1日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<blockquote>\\n<p>原则上linux操作系统都支持、windows等系统操作系统类似</p>\\n</blockquote>\\n<h2>背景</h2>\\n<blockquote>\\n<p>由于一些原因，需要访问家里或者其他组织局域网内的机器服务，但是公网IP4资源有限，IPV6也属于内部网络。那么，如何通过内网穿透的方式，将局域网内的机器服务暴露到公网IP？那么本实践教程就是解决这个问题</p>\\n</blockquote>\\n<h2>前置条件</h2>\\n<blockquote>\\n<p>你需要有一个固定的公网IP , 假如IP地址为 <code>1.1.1.1</code><br>\\n请保障您使用或者开放的端口, 防火墙策略已经允许访问, 且windows或linux的防火墙也已经放行需要端口<br>\\n你已经大致了解并熟悉frp的原理和配置 , <a href=\\"https://github.com/fatedier/frp\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">frp开源地址</a><br>\\n客户端内容您有一个服务可以访问测试,这里为 <code>http://127.0.0.1:1000</code></p>\\n</blockquote>"}`);export{L as comp,Z as data};
