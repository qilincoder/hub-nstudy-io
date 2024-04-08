import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DKHkdyNf.js";const t={},l=e(`<h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>本故事发生在 2017年12月14号的笔记记录，系统环境大概是CentOS 7，但是系统是线上环境，没有互联网，安装软件繁琐。</p></blockquote><blockquote><p>当时需要用httpd2 来搭建一个简单的web服务器，但是系统没有安装httpd2，要求版本是 httpd2.4.29</p></blockquote><blockquote><p>当然现在通用的选择是 Nginx，所以本记录只对那些特殊情况下，特殊要求才适用。</p></blockquote><h2 id="操作记录" tabindex="-1"><a class="header-anchor" href="#操作记录"><span>操作记录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 卸载系统原有的httpd</span>
<span class="token function">rpm</span> -qa<span class="token operator">|</span><span class="token function">grep</span> httpd
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> httpd-2.2.15-29.el6_4.x86_64
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> <span class="token parameter variable">--nodeps</span> httpd-tools-2.2.15-29.el6_4.x86_64
<span class="token comment">############################################################################</span>
<span class="token comment"># 安装gcc，系统有跳过</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ libstdc++-devel
gcc <span class="token parameter variable">-v</span>
<span class="token comment"># gcc version 4.4.7 20120313 (Red Hat 4.4.7-18) (GCC)</span>
<span class="token comment">############################################################################</span>
<span class="token builtin class-name">cd</span> /data/tools/httpd

ll
<span class="token comment">#解压： 这些包都要提前下好</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apr-1.6.3.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apr-util-1.6.1.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> pcre-8.41.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> httpd-2.4.29.tar.gz
<span class="token comment">######################################</span>
<span class="token function">mkdir</span> /local/httpd
<span class="token function">mkdir</span> /local/apr
<span class="token function">mkdir</span> /local/apr-util
<span class="token function">mkdir</span> /local/pcre

<span class="token builtin class-name">cd</span> apr-1.6.3
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/local/apr
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment">###############################</span>
yum <span class="token function">install</span> expat-devel
<span class="token comment">###############################</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/apr-util-1.6.1
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/local/apr-util --with-apr<span class="token operator">=</span>/local/apr/bin/apr-1-config
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment">###############################</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/pcre-8.41/
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/local/pcre --with-apr<span class="token operator">=</span>/local/apr/bin/apr-1-config
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment">###############################</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/httpd-2.4.29/
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/local/httpd --with-pcre<span class="token operator">=</span>/local/pcre --with-apr<span class="token operator">=</span>/local/apr --with-apr-util<span class="token operator">=</span>/local/apr-util
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
<span class="token comment">############################################################################</span>
<span class="token function">cp</span> /local/httpd/bin/apachectl /etc/init.d/httpd
<span class="token comment">############################################################################</span>

<span class="token function">service</span> httpd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目-主要-配置" tabindex="-1"><a class="header-anchor" href="#项目-主要-配置"><span>项目（主要）配置</span></a></h2><h3 id="项目1配置" tabindex="-1"><a class="header-anchor" href="#项目1配置"><span>项目1配置</span></a></h3><blockquote><p>/etc/httpd/conf/httpd.conf</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Listen <span class="token number">80</span>
Listen <span class="token number">8080</span>

ServerName <span class="token number">172</span>.xx.xxx.xx

<span class="token operator">&lt;</span>Directory /<span class="token operator">&gt;</span>
    AllowOverride none
    Require all denied
<span class="token operator">&lt;</span>/Directory<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>Proxy balancer://inproxy<span class="token operator">&gt;</span>
    BalancerMember ajp://172.xxx.xxx.xx0:8009 <span class="token assign-left variable">loadfactor</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">route</span><span class="token operator">=</span>jvmRoute1
    BalancerMember ajp://172.xxx.xxx.xx1:8009 <span class="token assign-left variable">loadfactor</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">route</span><span class="token operator">=</span>jvmRoute2
	ProxySet <span class="token assign-left variable">stickysession</span><span class="token operator">=</span>ROUTEID1
<span class="token operator">&lt;</span>/Proxy<span class="token operator">&gt;</span>

 
<span class="token operator">&lt;</span>Proxy balancer://outproxy<span class="token operator">&gt;</span>
    BalancerMember ajp://172.xxx.xxx.xx0:8009 <span class="token assign-left variable">loadfactor</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">route</span><span class="token operator">=</span>jvmRoute3
    BalancerMember ajp://172.xxx.xxx.xx1:8009 <span class="token assign-left variable">loadfactor</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">route</span><span class="token operator">=</span>jvmRoute4
	ProxySet <span class="token assign-left variable">stickysession</span><span class="token operator">=</span>ROUTEID2
<span class="token operator">&lt;</span>/Proxy<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目2配置" tabindex="-1"><a class="header-anchor" href="#项目2配置"><span>项目2配置</span></a></h3><blockquote><p>/etc/httpd/conf.d/httpd_vhosts.conf</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Virtual Hosts</span>
<span class="token comment">#</span>
<span class="token comment"># Required modules: mod_log_config</span>

<span class="token comment"># If you want to maintain multiple domains/hostnames on your</span>
<span class="token comment"># machine you can setup VirtualHost containers for them. Most configurations</span>
<span class="token comment"># use only name-based virtual hosts so the server doesn&#39;t need to worry about</span>
<span class="token comment"># IP addresses. This is indicated by the asterisks in the directives below.</span>
<span class="token comment">#</span>
<span class="token comment"># Please see the documentation at </span>
<span class="token comment"># &lt;URL:http://httpd.apache.org/docs/2.4/vhosts/&gt;</span>
<span class="token comment"># for further details before you try to setup virtual hosts.</span>
<span class="token comment">#</span>
<span class="token comment"># You may use the command line option &#39;-S&#39; to verify your virtual host</span>
<span class="token comment"># configuration.</span>

<span class="token comment">#</span>
<span class="token comment"># VirtualHost example:</span>
<span class="token comment"># Almost any Apache directive may go into a VirtualHost container.</span>
<span class="token comment"># The first VirtualHost section is used for all requests that do not</span>
<span class="token comment"># match a ServerName or ServerAlias in any &lt;VirtualHost&gt; block.</span>
<span class="token comment">#</span>
<span class="token operator">&lt;</span>VirtualHost *:8<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot <span class="token string">&quot;/local/httpd/docs/default&quot;</span>
    ServerName xxx.xxx.xx0
    ServerAlias <span class="token keyword">in</span>
    ErrorLog <span class="token string">&quot;logs/inproxy-error_log&quot;</span>
    CustomLog <span class="token string">&quot;logs/inproxy-access_log&quot;</span> common
	
	Header <span class="token function">add</span> Set-Cookie <span class="token string">&quot;ROUTEID1=.%{BALANCER_WORKER_ROUTE}e; path=/&quot;</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>BALANCER_ROUTE_CHANGED
	ProxyPass /  balancer://inproxy/ <span class="token assign-left variable">stickysession</span><span class="token operator">=</span>ROUTEID1 <span class="token assign-left variable">nofailover</span><span class="token operator">=</span>On <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token number">5</span> <span class="token assign-left variable">maxattempts</span><span class="token operator">=</span><span class="token number">3</span>
	ProxyPassReverse / balancer://inproxy/ 
<span class="token operator">&lt;</span>/VirtualHost<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>VirtualHost *:808<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>
   ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot <span class="token string">&quot;/local/httpd/docs/default&quot;</span>
    ServerName xxx.xxx.xx1
    ServerAlias out
    ErrorLog <span class="token string">&quot;logs/outproxy-error_log&quot;</span>
    CustomLog <span class="token string">&quot;logs/outproxy-access_log&quot;</span> common
	
	Header <span class="token function">add</span> Set-Cookie <span class="token string">&quot;ROUTEID2=.%{BALANCER_WORKER_ROUTE}e; path=/&quot;</span> <span class="token assign-left variable">env</span><span class="token operator">=</span>BALANCER_ROUTE_CHANGED
	ProxyPass /  balancer://outproxy/ <span class="token assign-left variable">stickysession</span><span class="token operator">=</span>ROUTEID2 <span class="token assign-left variable">nofailover</span><span class="token operator">=</span>On <span class="token assign-left variable">timeout</span><span class="token operator">=</span><span class="token number">1500</span> <span class="token assign-left variable">maxattempts</span><span class="token operator">=</span><span class="token number">3</span>
	ProxyPassReverse / balancer://outproxy/ 
<span class="token operator">&lt;</span>/VirtualHost<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目3配置" tabindex="-1"><a class="header-anchor" href="#项目3配置"><span>项目3配置</span></a></h3><blockquote><p>/etc/httpd/conf.d/project_other.conf</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Listen <span class="token number">80</span>
Listen <span class="token number">81</span>

<span class="token operator">&lt;</span>Directory <span class="token string">&quot;/var/www&quot;</span><span class="token operator">&gt;</span>
    AllowOverride None
    <span class="token comment"># Allow open access:</span>
    Require all granted
<span class="token operator">&lt;</span>/Directory<span class="token operator">&gt;</span>

NameVirtualHost *:81
<span class="token operator">&lt;</span>VirtualHost *:8<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> 
DocumentRoot /var/www/manage
ServerName localhost:81
<span class="token operator">&lt;</span>/VirtualHost<span class="token operator">&gt;</span>

NameVirtualHost *:80
<span class="token operator">&lt;</span>VirtualHost *:8<span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span> 
DocumentRoot /var/www/contract
ServerName localhost:80
<span class="token operator">&lt;</span>/VirtualHost<span class="token operator">&gt;</span>


IncludeOptional conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="有网络情况安装" tabindex="-1"><a class="header-anchor" href="#有网络情况安装"><span>有网络情况安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum list httpd
yum <span class="token function">install</span> httpd.x86_64

<span class="token function">service</span> httpd start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增加服务-开机自动运行" tabindex="-1"><a class="header-anchor" href="#增加服务-开机自动运行"><span>增加服务,开机自动运行</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 服务所在位置</span>
ll /etc/init.d/

<span class="token comment"># 增加httpd服务</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--add</span> httpd
<span class="token comment"># 设置httpd在运行级别为2、3、4、5的情况下都是on（开启）的状态</span>
<span class="token function">chkconfig</span> <span class="token parameter variable">--level</span> <span class="token number">2345</span> httpd  on 
<span class="token function">chkconfig</span> <span class="token parameter variable">--list</span> httpd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[l];function o(p,c){return s(),a("div",null,i)}const m=n(t,[["render",o],["__file","2a47f0.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Linux/others/2a47f0.html","title":"CentOS7无网络情况下安装httpd","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/2a47f0.html","lang":"zh-CN","title":"CentOS7无网络情况下安装httpd","description":"CentOS7无网络情况下安装httpd","isOriginal":true,"date":"2024-03-02T00:00:00.000Z","category":["CentOS7","安装httpd"],"tag":["CentOS7","安装httpd"],"head":[["meta",{"name":"keywords","content":"CentOS7,无网络情况下安装httpd"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/others/2a47f0.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"CentOS7无网络情况下安装httpd"}],["meta",{"property":"og:description","content":"CentOS7无网络情况下安装httpd"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"CentOS7"}],["meta",{"property":"article:tag","content":"安装httpd"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS7无网络情况下安装httpd\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":false,"sticky":false},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"操作记录","slug":"操作记录","link":"#操作记录","children":[]},{"level":2,"title":"项目（主要）配置","slug":"项目-主要-配置","link":"#项目-主要-配置","children":[{"level":3,"title":"项目1配置","slug":"项目1配置","link":"#项目1配置","children":[]},{"level":3,"title":"项目2配置","slug":"项目2配置","link":"#项目2配置","children":[]},{"level":3,"title":"项目3配置","slug":"项目3配置","link":"#项目3配置","children":[]}]},{"level":2,"title":"有网络情况安装","slug":"有网络情况安装","link":"#有网络情况安装","children":[]},{"level":2,"title":"增加服务,开机自动运行","slug":"增加服务-开机自动运行","link":"#增加服务-开机自动运行","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"06.Linux/99.others/20240302_CentOS7无网络情况下安装httpd.md","localizedDate":"2024年3月2日","excerpt":"<h2>背景介绍</h2>\\n<blockquote>\\n<p>本故事发生在 2017年12月14号的笔记记录，系统环境大概是CentOS 7，但是系统是线上环境，没有互联网，安装软件繁琐。</p>\\n</blockquote>\\n<blockquote>\\n<p>当时需要用httpd2 来搭建一个简单的web服务器，但是系统没有安装httpd2，要求版本是 httpd2.4.29</p>\\n</blockquote>\\n<blockquote>\\n<p>当然现在通用的选择是 Nginx，所以本记录只对那些特殊情况下，特殊要求才适用。</p>\\n</blockquote>\\n<h2>操作记录</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># 卸载系统原有的httpd</span>\\n<span class=\\"token function\\">rpm</span> -qa<span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span> httpd\\n<span class=\\"token function\\">rpm</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token parameter variable\\">--nodeps</span> httpd-2.2.15-29.el6_4.x86_64\\n<span class=\\"token function\\">rpm</span> <span class=\\"token parameter variable\\">-e</span> <span class=\\"token parameter variable\\">--nodeps</span> httpd-tools-2.2.15-29.el6_4.x86_64\\n<span class=\\"token comment\\">############################################################################</span>\\n<span class=\\"token comment\\"># 安装gcc，系统有跳过</span>\\nyum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> gcc gcc-c++ libstdc++-devel\\ngcc <span class=\\"token parameter variable\\">-v</span>\\n<span class=\\"token comment\\"># gcc version 4.4.7 20120313 (Red Hat 4.4.7-18) (GCC)</span>\\n<span class=\\"token comment\\">############################################################################</span>\\n<span class=\\"token builtin class-name\\">cd</span> /data/tools/httpd\\n\\nll\\n<span class=\\"token comment\\">#解压： 这些包都要提前下好</span>\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> apr-1.6.3.tar.gz\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> apr-util-1.6.1.tar.gz\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> pcre-8.41.tar.gz\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> httpd-2.4.29.tar.gz\\n<span class=\\"token comment\\">######################################</span>\\n<span class=\\"token function\\">mkdir</span> /local/httpd\\n<span class=\\"token function\\">mkdir</span> /local/apr\\n<span class=\\"token function\\">mkdir</span> /local/apr-util\\n<span class=\\"token function\\">mkdir</span> /local/pcre\\n\\n<span class=\\"token builtin class-name\\">cd</span> apr-1.6.3\\n./configure <span class=\\"token parameter variable\\">--prefix</span><span class=\\"token operator\\">=</span>/local/apr\\n<span class=\\"token function\\">make</span>\\n<span class=\\"token function\\">make</span> <span class=\\"token function\\">install</span>\\n<span class=\\"token comment\\">###############################</span>\\nyum <span class=\\"token function\\">install</span> expat-devel\\n<span class=\\"token comment\\">###############################</span>\\n<span class=\\"token builtin class-name\\">cd</span> <span class=\\"token punctuation\\">..</span>/apr-util-1.6.1\\n./configure <span class=\\"token parameter variable\\">--prefix</span><span class=\\"token operator\\">=</span>/local/apr-util --with-apr<span class=\\"token operator\\">=</span>/local/apr/bin/apr-1-config\\n<span class=\\"token function\\">make</span>\\n<span class=\\"token function\\">make</span> <span class=\\"token function\\">install</span>\\n<span class=\\"token comment\\">###############################</span>\\n<span class=\\"token builtin class-name\\">cd</span> <span class=\\"token punctuation\\">..</span>/pcre-8.41/\\n./configure <span class=\\"token parameter variable\\">--prefix</span><span class=\\"token operator\\">=</span>/local/pcre --with-apr<span class=\\"token operator\\">=</span>/local/apr/bin/apr-1-config\\n<span class=\\"token function\\">make</span>\\n<span class=\\"token function\\">make</span> <span class=\\"token function\\">install</span>\\n<span class=\\"token comment\\">###############################</span>\\n<span class=\\"token builtin class-name\\">cd</span> <span class=\\"token punctuation\\">..</span>/httpd-2.4.29/\\n./configure <span class=\\"token parameter variable\\">--prefix</span><span class=\\"token operator\\">=</span>/local/httpd --with-pcre<span class=\\"token operator\\">=</span>/local/pcre --with-apr<span class=\\"token operator\\">=</span>/local/apr --with-apr-util<span class=\\"token operator\\">=</span>/local/apr-util\\n<span class=\\"token function\\">make</span>\\n<span class=\\"token function\\">make</span> <span class=\\"token function\\">install</span>\\n<span class=\\"token comment\\">############################################################################</span>\\n<span class=\\"token function\\">cp</span> /local/httpd/bin/apachectl /etc/init.d/httpd\\n<span class=\\"token comment\\">############################################################################</span>\\n\\n<span class=\\"token function\\">service</span> httpd start\\n</code></pre></div>"}`);export{m as comp,v as data};
