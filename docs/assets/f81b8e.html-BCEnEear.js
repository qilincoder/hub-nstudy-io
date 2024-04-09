import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-CRfAIpjY.js";const t={},i=e(`<h2 id="操作环境说明-本操作基于proxmox-ve-8-1-0实操" tabindex="-1"><a class="header-anchor" href="#操作环境说明-本操作基于proxmox-ve-8-1-0实操"><span>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># root@:~# pveversion -v</span>
proxmox-ve: <span class="token number">8.1</span>.0 <span class="token punctuation">(</span>running kernel: <span class="token number">6.5</span>.11-7-pve<span class="token punctuation">)</span>
pve-manager: <span class="token number">8.1</span>.3 <span class="token punctuation">(</span>running version: <span class="token number">8.1</span>.3/b46aac3b42da5d15<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>nginx是个很好的代理软件,接管http流量和TCP端口转发必备利器。</p></blockquote><h2 id="命令记录" tabindex="-1"><a class="header-anchor" href="#命令记录"><span>命令记录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> nginx

systemctl status nginx.service
systemctl <span class="token builtin class-name">enable</span> nginx.service

<span class="token comment"># 编辑配置文件,可以做好多事情</span>
<span class="token function">nano</span> /etc/nginx/nginx.conf

root@:~<span class="token comment"># nginx -V</span>
nginx version: nginx/1.22.1
built with OpenSSL <span class="token number">3.0</span>.8 <span class="token number">7</span> Feb <span class="token number">2023</span> <span class="token punctuation">(</span>running with OpenSSL <span class="token number">3.0</span>.11 <span class="token number">19</span> Sep <span class="token number">2023</span><span class="token punctuation">)</span>


<span class="token comment"># 安装stream模块,提供TCP转发</span>
<span class="token function">apt</span> <span class="token function">install</span> libnginx-mod-stream

systemctl restart nginx.service

root@:~<span class="token comment"># nginx -V</span>

nginx version: nginx/1.22.1
built with OpenSSL <span class="token number">3.0</span>.8 <span class="token number">7</span> Feb <span class="token number">2023</span> <span class="token punctuation">(</span>running with OpenSSL <span class="token number">3.0</span>.11 <span class="token number">19</span> Sep <span class="token number">2023</span><span class="token punctuation">)</span>
TLS SNI support enabled
configure arguments: --with-cc-opt<span class="token operator">=</span><span class="token string">&#39;-g -O2 -ffile-prefix-map=/build/nginx-AoTv4W/nginx-1.22.1=. -fstack-protector-strong -Wformat -Werror=format-security -fPIC -Wdate-time -D_FORTIFY_SOURCE=2&#39;</span> --with-ld-opt<span class="token operator">=</span><span class="token string">&#39;-Wl,-z,relro -Wl,-z,now -fPIC&#39;</span> <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/share/nginx --conf-path<span class="token operator">=</span>/etc/nginx/nginx.conf --http-log-path<span class="token operator">=</span>/var/log/nginx/access.log --error-log-path<span class="token operator">=</span>stderr --lock-path<span class="token operator">=</span>/var/lock/nginx.lock --pid-path<span class="token operator">=</span>/run/nginx.pid --modules-path<span class="token operator">=</span>/usr/lib/nginx/modules --http-client-body-temp-path<span class="token operator">=</span>/var/lib/nginx/body --http-fastcgi-temp-path<span class="token operator">=</span>/var/lib/nginx/fastcgi --http-proxy-temp-path<span class="token operator">=</span>/var/lib/nginx/proxy --http-scgi-temp-path<span class="token operator">=</span>/var/lib/nginx/scgi --http-uwsgi-temp-path<span class="token operator">=</span>/var/lib/nginx/uwsgi --with-compat --with-debug --with-pcre-jit --with-http_ssl_module --with-http_stub_status_module --with-http_realip_module --with-http_auth_request_module --with-http_v2_module --with-http_dav_module --with-http_slice_module --with-threads --with-http_addition_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_secure_link_module --with-http_sub_module --with-mail_ssl_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-stream_realip_module --with-http_geoip_module<span class="token operator">=</span>dynamic --with-http_image_filter_module<span class="token operator">=</span>dynamic --with-http_perl_module<span class="token operator">=</span>dynamic --with-http_xslt_module<span class="token operator">=</span>dynamic --with-mail<span class="token operator">=</span>dynamic --with-stream<span class="token operator">=</span>dynamic --with-stream_geoip_module<span class="token operator">=</span>dynamic

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置记录-正常情况下所有nginx通用-不仅限于本系统" tabindex="-1"><a class="header-anchor" href="#配置记录-正常情况下所有nginx通用-不仅限于本系统"><span>配置记录，正常情况下所有nginx通用，不仅限于本系统</span></a></h2><ul><li><h3 id="etc-nginx-nginx-conf-文件" tabindex="-1"><a class="header-anchor" href="#etc-nginx-nginx-conf-文件"><span>/etc/nginx/nginx.conf 文件</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>root@:~<span class="token comment"># cat /etc/nginx/nginx.conf </span>

user www-data<span class="token punctuation">;</span>
worker_processes <span class="token number">2</span><span class="token punctuation">;</span>
pid /run/nginx.pid<span class="token punctuation">;</span>
error_log /var/log/nginx/error.log<span class="token punctuation">;</span>
include /etc/nginx/modules-enabled/*.conf<span class="token punctuation">;</span>

events <span class="token punctuation">{</span>
	worker_connections <span class="token number">768</span><span class="token punctuation">;</span>
	<span class="token comment"># multi_accept on;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>

	<span class="token comment">##</span>
	<span class="token comment"># Basic Settings</span>
	<span class="token comment">##</span>

	sendfile on<span class="token punctuation">;</span>
	tcp_nopush on<span class="token punctuation">;</span>
	types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>
	<span class="token comment"># server_tokens off;</span>

	<span class="token comment"># server_names_hash_bucket_size 64;</span>
	<span class="token comment"># server_name_in_redirect off;</span>

	include /etc/nginx/mime.types<span class="token punctuation">;</span>
	default_type application/octet-stream<span class="token punctuation">;</span>

	<span class="token comment">##</span>
	<span class="token comment"># SSL Settings</span>
	<span class="token comment">##</span>

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3<span class="token punctuation">;</span> <span class="token comment"># Dropping SSLv3, ref: POODLE</span>
	ssl_prefer_server_ciphers on<span class="token punctuation">;</span>

	<span class="token comment">##</span>
	<span class="token comment"># Logging Settings</span>
	<span class="token comment">##</span>

	access_log /var/log/nginx/access.log<span class="token punctuation">;</span>

	<span class="token comment">##</span>
	<span class="token comment"># Gzip Settings</span>
	<span class="token comment">##</span>

	<span class="token function">gzip</span> on<span class="token punctuation">;</span>

	<span class="token comment"># gzip_vary on;</span>
	<span class="token comment"># gzip_proxied any;</span>
	<span class="token comment"># gzip_comp_level 6;</span>
	<span class="token comment"># gzip_buffers 16 8k;</span>
	<span class="token comment"># gzip_http_version 1.1;</span>
	<span class="token comment"># gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;</span>

	<span class="token comment">##</span>
	<span class="token comment"># Virtual Host Configs</span>
	<span class="token comment">##</span>

	include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
	<span class="token comment">#include /etc/nginx/sites-enabled/*;</span>
<span class="token punctuation">}</span>

stream <span class="token punctuation">{</span>
	include /etc/nginx/tcp.conf<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">#mail {</span>
<span class="token comment">#	# See sample authentication script at:</span>
<span class="token comment">#	# http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript</span>
<span class="token comment">#</span>
<span class="token comment">#	# auth_http localhost/auth.php;</span>
<span class="token comment">#	# pop3_capabilities &quot;TOP&quot; &quot;USER&quot;;</span>
<span class="token comment">#	# imap_capabilities &quot;IMAP4rev1&quot; &quot;UIDPLUS&quot;;</span>
<span class="token comment">#</span>
<span class="token comment">#	server {</span>
<span class="token comment">#		listen     localhost:110;</span>
<span class="token comment">#		protocol   pop3;</span>
<span class="token comment">#		proxy      on;</span>
<span class="token comment">#	}</span>
<span class="token comment">#</span>
<span class="token comment">#	server {</span>
<span class="token comment">#		listen     localhost:143;</span>
<span class="token comment">#		protocol   imap;</span>
<span class="token comment">#		proxy      on;</span>
<span class="token comment">#	}</span>
<span class="token comment">#}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="etc-nginx-nginx-conf-文件-注意部分ip用xxx代替" tabindex="-1"><a class="header-anchor" href="#etc-nginx-nginx-conf-文件-注意部分ip用xxx代替"><span>/etc/nginx/nginx.conf 文件 , 注意部分IP用xxx代替</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/nginx/tcp.conf 
upstream tmp <span class="token punctuation">{</span>
	server <span class="token number">192</span>.xxx.xxx.xxx:10086 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
	listen <span class="token number">1448</span><span class="token punctuation">;</span>
	
	proxy_connect_timeout 5s<span class="token punctuation">;</span>
	proxy_timeout 10s<span class="token punctuation">;</span>
	proxy_next_upstream on<span class="token punctuation">;</span>
	proxy_next_upstream_tries <span class="token number">3</span><span class="token punctuation">;</span> 
	proxy_next_upstream_timeout 10s<span class="token punctuation">;</span>
	proxy_socket_keepalive on<span class="token punctuation">;</span>
	
	proxy_pass tmp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="etc-nginx-conf-d-default-conf" tabindex="-1"><a class="header-anchor" href="#etc-nginx-conf-d-default-conf"><span>/etc/nginx/conf.d/default.conf</span></a></h3></li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/nginx/conf.d/default.conf 

server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    server_name _<span class="token punctuation">;</span>

    root /data/www<span class="token punctuation">;</span>
    index index.html<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
       try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ <span class="token operator">=</span><span class="token number">404</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen      <span class="token number">1080</span><span class="token punctuation">;</span>
    server_name jenkins.aip-dev.jianke.com<span class="token punctuation">;</span>
    client_max_body_size <span class="token number">0</span><span class="token punctuation">;</span>

    location /  <span class="token punctuation">{</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header  X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header  X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_set_header X-NginX-Proxy <span class="token boolean">true</span><span class="token punctuation">;</span>
        proxy_pass http://192.xxx.xxx.xxx:11080<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function p(c,o){return s(),a("div",null,l)}const u=n(t,[["render",p],["__file","f81b8e.html.vue"]]),m=JSON.parse(`{"path":"/p2024/Linux/PVE/f81b8e.html","title":"PVE安装nginx并开启stream转发","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/PVE/f81b8e.html","lang":"zh-CN","title":"PVE安装nginx并开启stream转发","description":"PVE安装nginx并开启stream转发","isOriginal":true,"date":"2024-02-05T00:00:00.000Z","category":["PVE","nginx"],"tag":["PVE","nginx","stream"],"head":[["meta",{"name":"keywords","content":"PVE,nginx,stream"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/PVE/f81b8e.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"PVE安装nginx并开启stream转发"}],["meta",{"property":"og:description","content":"PVE安装nginx并开启stream转发"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T03:22:27.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"PVE"}],["meta",{"property":"article:tag","content":"nginx"}],["meta",{"property":"article:tag","content":"stream"}],["meta",{"property":"article:published_time","content":"2024-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T03:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PVE安装nginx并开启stream转发\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-09T03:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"操作环境说明，本操作基于proxmox-ve: 8.1.0实操","slug":"操作环境说明-本操作基于proxmox-ve-8-1-0实操","link":"#操作环境说明-本操作基于proxmox-ve-8-1-0实操","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"命令记录","slug":"命令记录","link":"#命令记录","children":[]},{"level":2,"title":"配置记录，正常情况下所有nginx通用，不仅限于本系统","slug":"配置记录-正常情况下所有nginx通用-不仅限于本系统","link":"#配置记录-正常情况下所有nginx通用-不仅限于本系统","children":[]}],"git":{"createdTime":1712632947000,"updatedTime":1712632947000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"06.Linux/88.PVE/20240205_PVE安装nginx并开启stream转发.md","localizedDate":"2024年2月5日","excerpt":"<h2>操作环境说明，本操作基于proxmox-ve: 8.1.0实操</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># root@:~# pveversion -v</span>\\nproxmox-ve: <span class=\\"token number\\">8.1</span>.0 <span class=\\"token punctuation\\">(</span>running kernel: <span class=\\"token number\\">6.5</span>.11-7-pve<span class=\\"token punctuation\\">)</span>\\npve-manager: <span class=\\"token number\\">8.1</span>.3 <span class=\\"token punctuation\\">(</span>running version: <span class=\\"token number\\">8.1</span>.3/b46aac3b42da5d15<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{u as comp,m as data};
