import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-DKHkdyNf.js";const i={},l=a(`<h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>本故事发生在 2018年07月23号的笔记记录，系统环境确定是CentOS 7。</p></blockquote><h2 id="haproxy介绍" tabindex="-1"><a class="header-anchor" href="#haproxy介绍"><span>HAproxy介绍</span></a></h2><blockquote><p>HAProxy（High Availability Proxy）是一个高性能的开源负载均衡器和代理服务器软件，它用于将传入的流量分发到多个后端服务器，以提高应用程序的可用性、可伸缩性和性能。</p></blockquote><blockquote><p>以下是 HAProxy 的一些主要特点和功能：</p></blockquote><ol><li><p><strong>负载均衡</strong>：HAProxy 可以根据不同的负载均衡算法（如轮询、加权轮询、最少连接、源IP哈希等）将流量分发到多个后端服务器，以实现负载均衡和高可用性。</p></li><li><p><strong>SSL终止</strong>：HAProxy 可以作为 SSL 终止点，负责接收加密的 HTTPS 请求并解密，然后将请求转发给后端的非加密服务，从而减轻后端服务器的负担。</p></li><li><p><strong>健康检查</strong>：HAProxy 可以定期检查后端服务器的健康状态，以确保只将流量分发到正常运行的服务器上，从而提高应用程序的可靠性和稳定性。</p></li><li><p><strong>高性能</strong>：HAProxy 是一个高性能的负载均衡器，能够处理大量的并发连接和数据流量，支持多核处理器和零拷贝技术，以提供高吞吐量和低延迟。</p></li><li><p><strong>动态配置</strong>：HAProxy 支持动态配置，可以在运行时通过命令行或 API 来添加、移除或修改后端服务器，并且配置更改不会影响正在处理的连接。</p></li><li><p><strong>日志和统计</strong>：HAProxy 提供详细的日志记录和统计信息，可以实时监控流量、连接、吞吐量、延迟等指标，以便进行性能调优和故障排除。</p></li></ol><blockquote><p>总的来说，HAProxy 是一个功能强大、灵活且高性能的负载均衡器和代理服务器，广泛用于构建高可用、高性能的网络架构和应用程序部署。</p></blockquote><h2 id="haproxy安装" tabindex="-1"><a class="header-anchor" href="#haproxy安装"><span>HAproxy安装</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 安装包 haproxy-1.5.18-7.el7.x86_64.rpm</span>

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> haproxy-1.5.18-7.el7.x86_64.rpm

haproxy <span class="token parameter variable">-v</span>

<span class="token comment"># 停止服务</span>
<span class="token function">service</span> haproxy stop

<span class="token comment"># 查看服务状态</span>
systemctl status haproxy
<span class="token comment"># 启动服务</span>
systemctl start haproxy
<span class="token comment"># 停止服务</span>
systemctl stop haproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真实项目配置记录" tabindex="-1"><a class="header-anchor" href="#真实项目配置记录"><span>真实项目配置记录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># Example configuration for a possible web application.  See the</span>
<span class="token comment"># full configuration options online.</span>
<span class="token comment">#</span>
<span class="token comment">#   http://haproxy.1wt.eu/download/1.4/doc/configuration.txt</span>
<span class="token comment">#</span>
<span class="token comment">#---------------------------------------------------------------------</span>

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># Global settings</span>
<span class="token comment">#---------------------------------------------------------------------</span>
global
    <span class="token comment"># to have these messages end up in /var/log/haproxy.log you will</span>
    <span class="token comment"># need to:</span>
    <span class="token comment">#</span>
    <span class="token comment"># 1) configure syslog to accept network log events.  This is done</span>
    <span class="token comment">#    by adding the &#39;-r&#39; option to the SYSLOGD_OPTIONS in</span>
    <span class="token comment">#    /etc/sysconfig/syslog</span>
    <span class="token comment">#</span>
    <span class="token comment"># 2) configure local2 events to go to the /var/log/haproxy.log</span>
    <span class="token comment">#   file. A line like the following can be added to</span>
    <span class="token comment">#   /etc/sysconfig/syslog</span>
    <span class="token comment">#</span>
    <span class="token comment">#    local2.*                       /var/log/haproxy.log</span>
    <span class="token comment">#</span>
    log         <span class="token number">127.0</span>.0.1 local2

    <span class="token function">chroot</span>      /etc/haproxy
    pidfile     /var/run/haproxy.pid
    maxconn     <span class="token number">4096</span>
    user        haproxy
    group       haproxy
    daemon
    nbproc <span class="token number">1</span>       
    ulimit-n <span class="token number">231097</span> 
    tune.ssl.default-dh-param <span class="token number">4096</span>

    <span class="token comment"># turn on stats unix socket</span>
    stats socket /var/lib/haproxy/stats

<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># common defaults that all the &#39;listen&#39; and &#39;backend&#39; sections will</span>
<span class="token comment"># use if not designated in their block</span>
<span class="token comment">#---------------------------------------------------------------------</span>
defaults
        log     global
        option  httplog
        option  dontlognull
        <span class="token comment">#option  forwardfor </span>
        retries <span class="token number">3</span>
        option  redispatch
        maxconn <span class="token number">65535</span>         
        <span class="token function">timeout</span> connect <span class="token number">50000</span>
        <span class="token function">timeout</span> server <span class="token number">900000</span>
        <span class="token function">timeout</span> client <span class="token number">900000</span>

listen stats :80
        mode http
        option dontlognull
        stats <span class="token builtin class-name">enable</span>
        stats uri /hstats
        stats hide-version
        stats refresh 10s
        stats realm Haproxy<span class="token punctuation">\\</span> Statistics
        <span class="token comment">#stats uri /</span>
        stats auth xxxx:xxxx
<span class="token comment">#---------------------------------------------------------------------</span>
<span class="token comment"># main frontend which proxys to the backends</span>
<span class="token comment">#---------------------------------------------------------------------</span>

frontend 8081_front
        <span class="token builtin class-name">bind</span> *:8081
        mode tcp
        option tcplog
        use_backend 8081_backend

backend 8081_backend
        mode tcp
        balance <span class="token builtin class-name">source</span>
        server SOURCE-192.xxx.xxx.xx0 <span class="token number">192</span>.xxx.xxx.xx0:8081 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">10</span>
        server SOURCE-192.xxx.xxx.xx1 <span class="token number">192</span>.xxx.xxx.xx1:8081 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">10</span>

frontend 8082_front
        <span class="token builtin class-name">bind</span> *:8082
        mode tcp
        option tcplog
        use_backend 8082_backend

backend 8082_backend
        mode tcp
        balance <span class="token builtin class-name">source</span>
        server SOURCE-192.xxx.xxx.xx0 <span class="token number">192</span>.xxx.xxx.xx0:8082 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">10</span>
        server SOURCE-192.xxx.xxx.xx1 <span class="token number">192</span>.xxx.xxx.xx2:8082 check inter <span class="token number">2000</span> rise <span class="token number">3</span> fall <span class="token number">3</span> weight <span class="token number">10</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),t=[l];function o(c,r){return s(),e("div",null,t)}const m=n(i,[["render",o],["__file","60d286.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Linux/others/60d286.html","title":"CentOS7安装HAproxy并配置","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/60d286.html","lang":"zh-CN","title":"CentOS7安装HAproxy并配置","description":"CentOS7安装HAproxy并配置","isOriginal":true,"date":"2024-03-05T00:00:00.000Z","category":["CentOS7","HAproxy"],"tag":["CentOS7","HAproxy"],"head":[["meta",{"name":"keywords","content":"CentOS7,HAproxy"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/others/60d286.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"CentOS7安装HAproxy并配置"}],["meta",{"property":"og:description","content":"CentOS7安装HAproxy并配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"CentOS7"}],["meta",{"property":"article:tag","content":"HAproxy"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CentOS7安装HAproxy并配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":false,"sticky":false},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"HAproxy介绍","slug":"haproxy介绍","link":"#haproxy介绍","children":[]},{"level":2,"title":"HAproxy安装","slug":"haproxy安装","link":"#haproxy安装","children":[]},{"level":2,"title":"真实项目配置记录","slug":"真实项目配置记录","link":"#真实项目配置记录","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.89,"words":866},"filePathRelative":"06.Linux/99.others/20240305_CentOS7安装HAproxy并配置.md","localizedDate":"2024年3月5日","excerpt":"<h2>背景介绍</h2>\\n<blockquote>\\n<p>本故事发生在 2018年07月23号的笔记记录，系统环境确定是CentOS 7。</p>\\n</blockquote>\\n<h2>HAproxy介绍</h2>\\n<blockquote>\\n<p>HAProxy（High Availability Proxy）是一个高性能的开源负载均衡器和代理服务器软件，它用于将传入的流量分发到多个后端服务器，以提高应用程序的可用性、可伸缩性和性能。</p>\\n</blockquote>\\n<blockquote>\\n<p>以下是 HAProxy 的一些主要特点和功能：</p>\\n</blockquote>\\n<ol>\\n<li>\\n<p><strong>负载均衡</strong>：HAProxy 可以根据不同的负载均衡算法（如轮询、加权轮询、最少连接、源IP哈希等）将流量分发到多个后端服务器，以实现负载均衡和高可用性。</p>\\n</li>\\n<li>\\n<p><strong>SSL终止</strong>：HAProxy 可以作为 SSL 终止点，负责接收加密的 HTTPS 请求并解密，然后将请求转发给后端的非加密服务，从而减轻后端服务器的负担。</p>\\n</li>\\n<li>\\n<p><strong>健康检查</strong>：HAProxy 可以定期检查后端服务器的健康状态，以确保只将流量分发到正常运行的服务器上，从而提高应用程序的可靠性和稳定性。</p>\\n</li>\\n<li>\\n<p><strong>高性能</strong>：HAProxy 是一个高性能的负载均衡器，能够处理大量的并发连接和数据流量，支持多核处理器和零拷贝技术，以提供高吞吐量和低延迟。</p>\\n</li>\\n<li>\\n<p><strong>动态配置</strong>：HAProxy 支持动态配置，可以在运行时通过命令行或 API 来添加、移除或修改后端服务器，并且配置更改不会影响正在处理的连接。</p>\\n</li>\\n<li>\\n<p><strong>日志和统计</strong>：HAProxy 提供详细的日志记录和统计信息，可以实时监控流量、连接、吞吐量、延迟等指标，以便进行性能调优和故障排除。</p>\\n</li>\\n</ol>"}`);export{m as comp,v as data};
