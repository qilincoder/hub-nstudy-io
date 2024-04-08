import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as o,a as n,b as s,d as e,e as t}from"./app-DKHkdyNf.js";const c={},r=t(`<h2 id="部署环境" tabindex="-1"><a class="header-anchor" href="#部署环境"><span>部署环境</span></a></h2><blockquote><p>Ubuntu 22.04 LTS<br> 已经安装了docker <strong>原则上跟docker版本关系不大</strong></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token function">docker</span> version
Client: Docker Engine - Community
 Version:           <span class="token number">24.0</span>.6
 API version:       <span class="token number">1.43</span>
 Go version:        go1.20.7
 Git commit:        ed223bc
 Built:             Mon Sep  <span class="token number">4</span> <span class="token number">12</span>:31:44 <span class="token number">2023</span>
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Engine - Community
 Engine:
  Version:          <span class="token number">24.0</span>.6
  API version:      <span class="token number">1.43</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  Go version:       go1.20.7
  Git commit:       1a79695
  Built:            Mon Sep  <span class="token number">4</span> <span class="token number">12</span>:31:44 <span class="token number">2023</span>
  OS/Arch:          linux/amd64
  Experimental:     <span class="token boolean">false</span>
 containerd:
  Version:          <span class="token number">1.6</span>.24
  GitCommit:        61f9fd88f79f081d64d6fa3bb1a0dc71ec870523
 runc:
  Version:          <span class="token number">1.1</span>.9
  GitCommit:        v1.1.9-0-gccaecfc
 docker-init:
  Version:          <span class="token number">0.19</span>.0
  GitCommit:        de40ad0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料-踩坑指南" tabindex="-1"><a class="header-anchor" href="#参考资料-踩坑指南"><span>参考资料&amp;踩坑指南</span></a></h2>`,4),u={href:"https://goharbor.io/docs/2.5.0/install-config/configure-https/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),v={href:"https://github.com/goharbor/harbor/releases/tag/v2.5.3",target:"_blank",rel:"noopener noreferrer"},k=t(`<blockquote><p><span style="color:red;">注意（踩坑） : 当存储在 nfs4 挂在的盘上 core 服务会不断的寻找(找不到)postgresql , postgresql 因为磁盘的问题无法创建 </span></p></blockquote><h2 id="部署脚本" tabindex="-1"><a class="header-anchor" href="#部署脚本"><span>部署脚本</span></a></h2><blockquote><p>本假设harbor访问域名是 <code>https://registry.example.com</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#Generate a Certificate Authority Certificate</span>
openssl genrsa <span class="token parameter variable">-out</span> ca.key <span class="token number">4096</span>
openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=registry.example.com&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-key</span> ca.key <span class="token punctuation">\\</span>
 <span class="token parameter variable">-out</span> ca.crt
 
<span class="token comment">#Generate a Server Certificate</span>
openssl genrsa <span class="token parameter variable">-out</span> registry.example.com.key <span class="token number">4096</span>
openssl req <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-new</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=registry.example.com&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-key</span> registry.example.com.key <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> registry.example.com.csr

<span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=registry.example.com
DNS.2=wwww.example.com
DNS.3=example.com
EOF</span>

openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-extfile</span> v3.ext <span class="token punctuation">\\</span>
    <span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-CAcreateserial</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-in</span> registry.example.com.csr <span class="token punctuation">\\</span>
    <span class="token parameter variable">-out</span> registry.example.com.crt
    

<span class="token function">cp</span> registry.example.com.crt /data/harbor/cert
<span class="token function">cp</span> registry.example.com.key /data/harbor/cert

openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> registry.example.com.crt <span class="token parameter variable">-out</span> registry.example.com.cert

<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/certs.d/registry.example.com/
<span class="token function">cp</span> registry.example.com.cert /etc/docker/certs.d/registry.example.com/
<span class="token function">cp</span> registry.example.com.key /etc/docker/certs.d/registry.example.com/
<span class="token function">cp</span> ca.crt /etc/docker/certs.d/registry.example.com/

<span class="token comment"># 重新启动dokcer</span>
systemctl restart <span class="token function">docker</span>

<span class="token builtin class-name">cd</span> /usr/local/harbor/
<span class="token function">tar</span> zxvf harbor-offline-installer-v2.5.3.tgz
<span class="token function">rm</span> harbor-offline-installer-v2.5.3.tgz
<span class="token function">mv</span> harbor/* <span class="token punctuation">..</span>/harbor

<span class="token function">cp</span> harbor.yml.tmpl harbor.yml
<span class="token comment">#修改配置文件 --配置域名,存储</span>
harbor.yml
./prepare
<span class="token comment">#修改yml文件-配置网络</span>

./install.sh
<span class="token function">docker</span> compose down <span class="token parameter variable">-v</span>
<span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>

<span class="token comment"># 测试,验证</span>
<span class="token function">docker</span> login registry.example.com
<span class="token function">docker</span> tag nginx:1.23.0 registry.example.com/aip/nginx:1.23.0
<span class="token function">docker</span> push registry.example.com/aip/nginx:1.23.0
<span class="token function">docker</span> pull registry.example.com/aip/nginx:1.23.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置成服务" tabindex="-1"><a class="header-anchor" href="#配置成服务"><span>配置成服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">### vim /lib/systemd/system/harbor.service</span>
<span class="token comment">### systemctl daemon-reload</span>
<span class="token comment">### systemctl enable harbor  # 开机自启</span>
<span class="token comment">### systemctl start harbor   # 启动</span>
<span class="token comment">###</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Harbor
<span class="token assign-left variable">After</span><span class="token operator">=</span>docker.service systemd-networkd.service systemd-resolved.service
<span class="token assign-left variable">Requires</span><span class="token operator">=</span>docker.service
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://github.com/goharbor/harbor

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>simple
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>on-failure
<span class="token assign-left variable">RestartSec</span><span class="token operator">=</span><span class="token number">5</span>

<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/docker compose <span class="token parameter variable">-f</span> /usr/local/harbor/docker-compose.yml up
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/bin/docker compose <span class="token parameter variable">-f</span> /usr/local/harbor/docker-compose.yml stop

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他修改的文件" tabindex="-1"><a class="header-anchor" href="#其他修改的文件"><span>其他修改的文件</span></a></h2>`,7),m={href:"http://install.sh",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
<span class="token builtin class-name">shopt</span> <span class="token parameter variable">-s</span> expand_aliases
<span class="token builtin class-name">alias</span> docker-compose<span class="token operator">=</span><span class="token string">&#39;docker compose&#39;</span>

<span class="token assign-left variable">DIR</span><span class="token operator">=</span><span class="token string">&quot;$(cd &quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span><span class="token punctuation">)</span><span class="token string">&quot;
source <span class="token variable">$DIR</span>/common.sh

set +o noglob

usage=$&#39;Please set hostname and other necessary attributes in harbor.yml first. DO NOT use localhost or 127.0.0.1 for hostname, because Harbor needs to be accessed by external clients.
Please set --with-notary if needs enable Notary in Harbor, and set ui_url_protocol/ssl_cert/ssl_cert_key in harbor.yml bacause notary must run under https. 
Please set --with-trivy if needs enable Trivy in Harbor
Please set --with-chartmuseum if needs enable Chartmuseum in Harbor&#39;
item=0

# notary is not enabled by default
with_notary=<span class="token variable">$false</span>
# clair is deprecated
with_clair=<span class="token variable">$false</span>
# trivy is not enabled by default
with_trivy=<span class="token variable">$false</span>
# chartmuseum is not enabled by default
with_chartmuseum=<span class="token variable">$false</span>

while [ <span class="token variable">$#</span> -gt 0 ]; do
        case <span class="token variable">$1</span> in
            --help)
            note &quot;</span><span class="token variable">$usage</span><span class="token string">&quot;
            exit 0;;
            --with-notary)
            with_notary=true;;
            --with-clair)
            with_clair=true;;
            --with-trivy)
            with_trivy=true;;
            --with-chartmuseum)
            with_chartmuseum=true;;
            *)
            note &quot;</span><span class="token variable">$usage</span><span class="token string">&quot;
            exit 1;;
        esac
        shift || true
done

if [ <span class="token variable">$with_clair</span> ]
then
    error &quot;</span>Clair is deprecated please remove it from installation arguments <span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span><span class="token string">&quot;
    exit 1
fi

workdir=&quot;</span><span class="token variable"><span class="token variable">$(</span> <span class="token builtin class-name">cd</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span> <span class="token function">dirname</span> <span class="token string">&quot;<span class="token variable">\${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token variable">)</span></span>&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">pwd</span> <span class="token variable">)</span></span><span class="token string">&quot;
cd <span class="token variable">$workdir</span>

h2 &quot;</span><span class="token punctuation">[</span>Step <span class="token variable">$item</span><span class="token punctuation">]</span>: checking <span class="token keyword">if</span> <span class="token function">docker</span> is installed <span class="token punctuation">..</span>.<span class="token string">&quot;; let item+=1
check_docker

h2 &quot;</span><span class="token punctuation">[</span>Step <span class="token variable">$item</span><span class="token punctuation">]</span>: checking <span class="token function">docker-compose</span> is installed <span class="token punctuation">..</span>.<span class="token string">&quot;; let item+=1
check_dockercompose

if [ -f harbor*.tar.gz ]
then
    h2 &quot;</span><span class="token punctuation">[</span>Step <span class="token variable">$item</span><span class="token punctuation">]</span>: loading Harbor images <span class="token punctuation">..</span>.<span class="token string">&quot;; let item+=1
    docker load -i ./harbor*.tar.gz
fi
echo &quot;</span>&quot;

h2 <span class="token string">&quot;[Step <span class="token variable">$item</span>]: preparing environment ...&quot;</span><span class="token punctuation">;</span>  <span class="token builtin class-name">let</span> <span class="token assign-left variable">item</span><span class="token operator">+=</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$host</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token function">sed</span> <span class="token string">&quot;s/^hostname: .*/hostname: <span class="token variable">$host</span>/g&quot;</span> <span class="token parameter variable">-i</span> ./harbor.yml
<span class="token keyword">fi</span>

h2 <span class="token string">&quot;[Step <span class="token variable">$item</span>]: preparing harbor configs ...&quot;</span><span class="token punctuation">;</span>  <span class="token builtin class-name">let</span> <span class="token assign-left variable">item</span><span class="token operator">+=</span><span class="token number">1</span>
<span class="token assign-left variable">prepare_para</span><span class="token operator">=</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$with_notary</span> <span class="token punctuation">]</span> 
<span class="token keyword">then</span>
    <span class="token assign-left variable">prepare_para</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${prepare_para}</span> --with-notary&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$with_trivy</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token assign-left variable">prepare_para</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${prepare_para}</span> --with-trivy&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$with_chartmuseum</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    <span class="token assign-left variable">prepare_para</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${prepare_para}</span> --with-chartmuseum&quot;</span>
<span class="token keyword">fi</span>

./prepare <span class="token variable">$prepare_para</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">docker-compose</span> <span class="token function">ps</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>&quot;</span>  <span class="token punctuation">]</span>
<span class="token keyword">then</span>
    note <span class="token string">&quot;stopping existing Harbor instance ...&quot;</span> 
    <span class="token function">docker-compose</span> down <span class="token parameter variable">-v</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span>

h2 <span class="token string">&quot;[Step <span class="token variable">$item</span>]: starting Harbor ...&quot;</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

success $<span class="token string">&quot;----Harbor has been installed and started successfully.----&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g={href:"http://common.sh",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#docker version: 17.06.0+</span>
<span class="token comment">#docker-compose version: 1.18.0+</span>
<span class="token comment">#golang version: 1.12.0+</span>

<span class="token builtin class-name">set</span> +e
<span class="token builtin class-name">set</span> <span class="token parameter variable">-o</span> noglob

<span class="token comment">#</span>
<span class="token comment"># Set Colors</span>
<span class="token comment">#</span>

<span class="token assign-left variable">bold</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput bold<span class="token variable">)</span></span>
<span class="token assign-left variable">underline</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput sgr <span class="token number">0</span> <span class="token number">1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">reset</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput sgr0<span class="token variable">)</span></span>

<span class="token assign-left variable">red</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">green</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">76</span><span class="token variable">)</span></span>
<span class="token assign-left variable">white</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">7</span><span class="token variable">)</span></span>
<span class="token assign-left variable">tan</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">202</span><span class="token variable">)</span></span>
<span class="token assign-left variable">blue</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>tput setaf <span class="token number">25</span><span class="token variable">)</span></span>

<span class="token comment">#</span>
<span class="token comment"># Headers and Logging</span>
<span class="token comment">#</span>

<span class="token function-name function">underline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${underline}</span><span class="token variable">\${bold}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">h1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable">\${underline}</span><span class="token variable">\${bold}</span><span class="token variable">\${blue}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">h2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable">\${underline}</span><span class="token variable">\${bold}</span><span class="token variable">\${white}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">debug</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${white}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${white}</span>➜ %s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${green}</span>✔ %s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">error</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${red}</span>✖ %s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">warn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${tan}</span>➜ %s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token variable">\${bold}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token function-name function">note</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token builtin class-name">printf</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span><span class="token variable">\${underline}</span><span class="token variable">\${bold}</span><span class="token variable">\${blue}</span>Note:<span class="token variable">\${reset}</span> <span class="token variable">\${blue}</span>%s<span class="token variable">\${reset}</span><span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token keyword">function</span> <span class="token function-name function">check_golang</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token operator">!</span> go version <span class="token operator">&amp;&gt;</span> /dev/null
	<span class="token keyword">then</span>
		warn <span class="token string">&quot;No golang package in your enviroment. You should use golang docker image build binary.&quot;</span>
		<span class="token builtin class-name">return</span>
	<span class="token keyword">fi</span>

	<span class="token comment"># docker has been installed and check its version</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span>go version<span class="token variable">)</span></span> <span class="token operator">=~</span> <span class="token variable"><span class="token punctuation">((</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span>\\.<span class="token punctuation">(</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">(</span>[\\<span class="token number">.0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">*</span><span class="token punctuation">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token keyword">then</span>
		<span class="token assign-left variable">golang_version</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">golang_version_part1</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">golang_version_part2</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>3<span class="token punctuation">]</span>}</span>

		<span class="token comment"># the version of golang does not meet the requirement</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$golang_version_part1</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$golang_version_part1</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$golang_version_part2</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">12</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">then</span>
			warn <span class="token string">&quot;Better to upgrade golang package to 1.12.0+ or use golang docker image build binary.&quot;</span>
			<span class="token builtin class-name">return</span>
		<span class="token keyword">else</span>
			note <span class="token string">&quot;golang version: <span class="token variable">$golang_version</span>&quot;</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		warn <span class="token string">&quot;Failed to parse golang version.&quot;</span>
		<span class="token builtin class-name">return</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">check_docker</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">docker</span> <span class="token parameter variable">--version</span> <span class="token operator">&amp;&gt;</span> /dev/null
	<span class="token keyword">then</span>
		error <span class="token string">&quot;Need to install docker(17.06.0+) first and run this script again.&quot;</span>
		<span class="token builtin class-name">exit</span> <span class="token number">1</span>
	<span class="token keyword">fi</span>

	<span class="token comment"># docker has been installed and check its version</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token parameter variable">--version</span><span class="token variable">)</span></span> <span class="token operator">=~</span> <span class="token variable"><span class="token punctuation">((</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span>\\.<span class="token punctuation">(</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">(</span>[\\<span class="token number">.0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">*</span><span class="token punctuation">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token keyword">then</span>
		<span class="token assign-left variable">docker_version</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">docker_version_part1</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">docker_version_part2</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>3<span class="token punctuation">]</span>}</span>

		note <span class="token string">&quot;docker version: <span class="token variable">$docker_version</span>&quot;</span>
		<span class="token comment"># the version of docker does not meet the requirement</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_version_part1</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">17</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_version_part1</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">17</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_version_part2</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">then</span>
			error <span class="token string">&quot;Need to upgrade docker package to 17.06.0+.&quot;</span>
			<span class="token builtin class-name">exit</span> <span class="token number">1</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		error <span class="token string">&quot;Failed to parse docker version.&quot;</span>
		<span class="token builtin class-name">exit</span> <span class="token number">1</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">check_dockercompose</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">docker-compose</span> version <span class="token operator">&amp;&gt;</span> /dev/null
	<span class="token keyword">then</span>
		error <span class="token string">&quot;Need to install docker-compose(1.18.0+) by yourself first and run this script again.&quot;</span>
		<span class="token builtin class-name">exit</span> <span class="token number">1</span>
	<span class="token keyword">fi</span>

	<span class="token comment"># docker-compose has been installed, check its version</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker-compose</span> version<span class="token variable">)</span></span> <span class="token operator">=~</span> <span class="token variable"><span class="token punctuation">((</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span>\\.<span class="token punctuation">(</span>[<span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">+</span><span class="token punctuation">)</span><span class="token punctuation">(</span>[\\<span class="token number">.0</span><span class="token operator">-</span><span class="token number">9</span>]<span class="token operator">*</span><span class="token punctuation">))</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
	<span class="token keyword">then</span>
		<span class="token assign-left variable">docker_compose_version</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">docker_compose_version_part1</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>
		<span class="token assign-left variable">docker_compose_version_part2</span><span class="token operator">=</span><span class="token variable">\${<span class="token environment constant">BASH_REMATCH</span><span class="token punctuation">[</span>3<span class="token punctuation">]</span>}</span>

		note <span class="token string">&quot;docker-compose version: <span class="token variable">$docker_compose_version</span>&quot;</span>
		<span class="token comment"># the version of docker-compose does not meet the requirement</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_compose_version_part1</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_compose_version_part1</span>&quot;</span> <span class="token parameter variable">-eq</span> <span class="token number">1</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$docker_compose_version_part2</span>&quot;</span> <span class="token parameter variable">-lt</span> <span class="token number">18</span> <span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token keyword">then</span>
			error <span class="token string">&quot;Need to upgrade docker-compose package to 1.18.0+.&quot;</span>
			<span class="token builtin class-name">exit</span> <span class="token number">1</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		error <span class="token string">&quot;Failed to parse docker-compose version.&quot;</span>
		<span class="token builtin class-name">exit</span> <span class="token number">1</span>
	<span class="token keyword">fi</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>docker-compose.yml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;2.3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">log</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>log<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> harbor<span class="token punctuation">-</span>log
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> DAC_OVERRIDE
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/log/harbor/<span class="token punctuation">:</span>/var/log/docker/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/log/logrotate.conf
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/logrotate.d/logrotate.conf
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/log/rsyslog_docker.conf
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/rsyslog.d/rsyslog_docker.conf
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>1514<span class="token punctuation">:</span><span class="token number">10514</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/registry<span class="token punctuation">-</span>photon<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> registry
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/registry<span class="token punctuation">:</span>/storage<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> ./common/config/registry/<span class="token punctuation">:</span>/etc/registry/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /data/harbor/data/secret/registry/root.crt
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/registry/root.crt
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/shared/trust<span class="token punctuation">-</span>certificates
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /harbor_cust_cert
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;registry&quot;</span>
  <span class="token key atrule">registryctl</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>registryctl<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> registryctl
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./common/config/registryctl/env
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/registry<span class="token punctuation">:</span>/storage<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> ./common/config/registry/<span class="token punctuation">:</span>/etc/registry/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/registryctl/config.yml
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/registryctl/config.yml
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/shared/trust<span class="token punctuation">-</span>certificates
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /harbor_cust_cert
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;registryctl&quot;</span>
  <span class="token key atrule">postgresql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>db<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> harbor<span class="token punctuation">-</span>db
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> DAC_OVERRIDE
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/database<span class="token punctuation">:</span>/var/lib/postgresql/data<span class="token punctuation">:</span>z
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">harbor</span><span class="token punctuation">:</span>
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./common/config/db/env
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;postgresql&quot;</span>
    <span class="token key atrule">shm_size</span><span class="token punctuation">:</span> <span class="token string">&#39;1gb&#39;</span>
  <span class="token key atrule">core</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>core<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> harbor<span class="token punctuation">-</span>core
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./common/config/core/env
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/ca_download/<span class="token punctuation">:</span>/etc/core/ca/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> /data/harbor/data/<span class="token punctuation">:</span>/data/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> ./common/config/core/certificates/<span class="token punctuation">:</span>/etc/core/certificates/<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/core/app.conf
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/core/app.conf
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /data/harbor/data/secret/core/private_key.pem
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/core/private_key.pem
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> /data/harbor/data/secret/keys/secretkey
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/core/key
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/shared/trust<span class="token punctuation">-</span>certificates
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /harbor_cust_cert
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">harbor</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
      <span class="token punctuation">-</span> registry
      <span class="token punctuation">-</span> redis
      <span class="token punctuation">-</span> postgresql
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;core&quot;</span>
  <span class="token key atrule">portal</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>portal<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> harbor<span class="token punctuation">-</span>portal
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
      <span class="token punctuation">-</span> NET_BIND_SERVICE
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/portal/nginx.conf
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/nginx/nginx.conf
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;portal&quot;</span>

  <span class="token key atrule">jobservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/harbor<span class="token punctuation">-</span>jobservice<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> harbor<span class="token punctuation">-</span>jobservice
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./common/config/jobservice/env
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/job_logs<span class="token punctuation">:</span>/var/log/jobs<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/jobservice/config.yml
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /etc/jobservice/config.yml
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/shared/trust<span class="token punctuation">-</span>certificates
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /harbor_cust_cert
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> core
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;jobservice&quot;</span>
  <span class="token key atrule">redis</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/redis<span class="token punctuation">-</span>photon<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> redis
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /data/harbor/data/redis<span class="token punctuation">:</span>/var/lib/redis
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">harbor</span><span class="token punctuation">:</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;redis&quot;</span>
  <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> goharbor/nginx<span class="token punctuation">-</span>photon<span class="token punctuation">:</span>v2.5.3
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">cap_drop</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ALL
    <span class="token key atrule">cap_add</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> CHOWN
      <span class="token punctuation">-</span> SETGID
      <span class="token punctuation">-</span> SETUID
      <span class="token punctuation">-</span> NET_BIND_SERVICE
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./common/config/nginx<span class="token punctuation">:</span>/etc/nginx<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> /data/harbor/data/secret/cert<span class="token punctuation">:</span>/etc/cert<span class="token punctuation">:</span>z
      <span class="token punctuation">-</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> bind
        <span class="token key atrule">source</span><span class="token punctuation">:</span> ./common/config/shared/trust<span class="token punctuation">-</span>certificates
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /harbor_cust_cert
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> harbor
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 10080<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token punctuation">-</span> 10443<span class="token punctuation">:</span><span class="token number">8443</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> registry
      <span class="token punctuation">-</span> core
      <span class="token punctuation">-</span> portal
      <span class="token punctuation">-</span> log
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;syslog&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">syslog-address</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp://localhost:1514&quot;</span>
        <span class="token key atrule">tag</span><span class="token punctuation">:</span> <span class="token string">&quot;proxy&quot;</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">harbor</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ipam</span><span class="token punctuation">:</span>
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> default
        <span class="token key atrule">config</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">subnet</span><span class="token punctuation">:</span> <span class="token string">&quot;192.168.70.0/24&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>harbor.yml</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># Configuration file of Harbor</span>

<span class="token comment"># The IP address or hostname to access admin UI and registry service.</span>
<span class="token comment"># DO NOT use localhost or 127.0.0.1, because Harbor needs to be accessed by external clients.</span>
<span class="token key atrule">hostname</span><span class="token punctuation">:</span> registry.example.com

<span class="token comment"># http related config</span>
<span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token comment"># port for http, default is 80. If https enabled, this port will redirect to https port</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token comment"># https related config</span>
<span class="token key atrule">https</span><span class="token punctuation">:</span>
  <span class="token comment"># https port for harbor, default is 443</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
  <span class="token comment"># The path of cert and key files for nginx</span>
  <span class="token key atrule">certificate</span><span class="token punctuation">:</span> /data/harbor/cert/registry.example.com.crt
  <span class="token key atrule">private_key</span><span class="token punctuation">:</span> /data/harbor/cert/registry.example.com.key

<span class="token comment"># # Uncomment following will enable tls communication between all harbor components</span>
<span class="token comment"># internal_tls:</span>
<span class="token comment">#   # set enabled to true means internal tls is enabled</span>
<span class="token comment">#   enabled: true</span>
<span class="token comment">#   # put your cert and key files on dir</span>
<span class="token comment">#   dir: /etc/harbor/tls/internal</span>

<span class="token comment"># Uncomment external_url if you want to enable external proxy</span>
<span class="token comment"># And when it enabled the hostname will no longer used</span>
<span class="token comment"># external_url: https://reg.mydomain.com:8433</span>

<span class="token comment"># The initial password of Harbor admin</span>
<span class="token comment"># It only works in first time to install harbor</span>
<span class="token comment"># Remember Change the admin password from UI after launching Harbor.</span>
<span class="token key atrule">harbor_admin_password</span><span class="token punctuation">:</span> Harbor12345

<span class="token comment"># Harbor DB configuration</span>
<span class="token key atrule">database</span><span class="token punctuation">:</span>
  <span class="token comment"># The password for the root user of Harbor DB. Change this before any production use.</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> root123
  <span class="token comment"># The maximum number of connections in the idle connection pool. If it &lt;=0, no idle connections are retained.</span>
  <span class="token key atrule">max_idle_conns</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token comment"># The maximum number of open connections to the database. If it &lt;= 0, then there is no limit on the number of open connections.</span>
  <span class="token comment"># Note: the default number of connections is 1024 for postgres of harbor.</span>
  <span class="token key atrule">max_open_conns</span><span class="token punctuation">:</span> <span class="token number">900</span>

<span class="token comment"># The default data volume</span>
<span class="token key atrule">data_volume</span><span class="token punctuation">:</span> /data/harbor/data

<span class="token comment"># Harbor Storage settings by default is using /data dir on local filesystem</span>
<span class="token comment"># Uncomment storage_service setting If you want to using external storage</span>
<span class="token comment"># storage_service:</span>
<span class="token comment">#   # ca_bundle is the path to the custom root ca certificate, which will be injected into the truststore</span>
<span class="token comment">#   # of registry&#39;s and chart repository&#39;s containers.  This is usually needed when the user hosts a internal storage with self signed certificate.</span>
<span class="token comment">#   ca_bundle:</span>

<span class="token comment">#   # storage backend, default is filesystem, options include filesystem, azure, gcs, s3, swift and oss</span>
<span class="token comment">#   # for more info about this configuration please refer https://docs.docker.com/registry/configuration/</span>
<span class="token comment">#   filesystem:</span>
<span class="token comment">#     maxthreads: 100</span>
<span class="token comment">#   # set disable to true when you want to disable registry redirect</span>
<span class="token comment">#   redirect:</span>
<span class="token comment">#     disabled: false</span>

<span class="token comment"># Trivy configuration</span>
<span class="token comment">#</span>
<span class="token comment"># Trivy DB contains vulnerability information from NVD, Red Hat, and many other upstream vulnerability databases.</span>
<span class="token comment"># It is downloaded by Trivy from the GitHub release page https://github.com/aquasecurity/trivy-db/releases and cached</span>
<span class="token comment"># in the local file system. In addition, the database contains the update timestamp so Trivy can detect whether it</span>
<span class="token comment"># should download a newer version from the Internet or use the cached one. Currently, the database is updated every</span>
<span class="token comment"># 12 hours and published as a new release to GitHub.</span>
<span class="token key atrule">trivy</span><span class="token punctuation">:</span>
  <span class="token comment"># ignoreUnfixed The flag to display only fixed vulnerabilities</span>
  <span class="token key atrule">ignore_unfixed</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># skipUpdate The flag to enable or disable Trivy DB downloads from GitHub</span>
  <span class="token comment">#</span>
  <span class="token comment"># You might want to enable this flag in test or CI/CD environments to avoid GitHub rate limiting issues.</span>
  <span class="token comment"># If the flag is enabled you have to download the \`trivy-offline.tar.gz\` archive manually, extract \`trivy.db\` and</span>
  <span class="token comment"># \`metadata.json\` files and mount them in the \`/home/scanner/.cache/trivy/db\` path.</span>
  <span class="token key atrule">skip_update</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment">#</span>
  <span class="token comment"># The offline_scan option prevents Trivy from sending API requests to identify dependencies.</span>
  <span class="token comment"># Scanning JAR files and pom.xml may require Internet access for better detection, but this option tries to avoid it.</span>
  <span class="token comment"># For example, the offline mode will not try to resolve transitive dependencies in pom.xml when the dependency doesn&#39;t</span>
  <span class="token comment"># exist in the local repositories. It means a number of detected vulnerabilities might be fewer in offline mode.</span>
  <span class="token comment"># It would work if all the dependencies are in local.</span>
  <span class="token comment"># This option doesn’t affect DB download. You need to specify &quot;skip-update&quot; as well as &quot;offline-scan&quot; in an air-gapped environment.</span>
  <span class="token key atrule">offline_scan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment">#</span>
  <span class="token comment"># insecure The flag to skip verifying registry certificate</span>
  <span class="token key atrule">insecure</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># github_token The GitHub access token to download Trivy DB</span>
  <span class="token comment">#</span>
  <span class="token comment"># Anonymous downloads from GitHub are subject to the limit of 60 requests per hour. Normally such rate limit is enough</span>
  <span class="token comment"># for production operations. If, for any reason, it&#39;s not enough, you could increase the rate limit to 5000</span>
  <span class="token comment"># requests per hour by specifying the GitHub access token. For more details on GitHub rate limiting please consult</span>
  <span class="token comment"># https://developer.github.com/v3/#rate-limiting</span>
  <span class="token comment">#</span>
  <span class="token comment"># You can create a GitHub token by following the instructions in</span>
  <span class="token comment"># https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line</span>
  <span class="token comment">#</span>
  <span class="token comment"># github_token: xxx</span>

<span class="token key atrule">jobservice</span><span class="token punctuation">:</span>
  <span class="token comment"># Maximum number of job workers in job service</span>
  <span class="token key atrule">max_job_workers</span><span class="token punctuation">:</span> <span class="token number">10</span>

<span class="token key atrule">notification</span><span class="token punctuation">:</span>
  <span class="token comment"># Maximum retry count for webhook job</span>
  <span class="token key atrule">webhook_job_max_retry</span><span class="token punctuation">:</span> <span class="token number">10</span>

<span class="token key atrule">chart</span><span class="token punctuation">:</span>
  <span class="token comment"># Change the value of absolute_url to enabled can enable absolute url in chart</span>
  <span class="token key atrule">absolute_url</span><span class="token punctuation">:</span> disabled

<span class="token comment"># Log configurations</span>
<span class="token key atrule">log</span><span class="token punctuation">:</span>
  <span class="token comment"># options are debug, info, warning, error, fatal</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token comment"># configs for logs in local storage</span>
  <span class="token key atrule">local</span><span class="token punctuation">:</span>
    <span class="token comment"># Log files are rotated log_rotate_count times before being removed. If count is 0, old versions are removed rather than rotated.</span>
    <span class="token key atrule">rotate_count</span><span class="token punctuation">:</span> <span class="token number">50</span>
    <span class="token comment"># Log files are rotated only if they grow bigger than log_rotate_size bytes. If size is followed by k, the size is assumed to be in kilobytes.</span>
    <span class="token comment"># If the M is used, the size is in megabytes, and if G is used, the size is in gigabytes. So size 100, size 100k, size 100M and size 100G</span>
    <span class="token comment"># are all valid.</span>
    <span class="token key atrule">rotate_size</span><span class="token punctuation">:</span> 200M
    <span class="token comment"># The directory on your host that store log</span>
    <span class="token key atrule">location</span><span class="token punctuation">:</span> /var/log/harbor

  <span class="token comment"># Uncomment following lines to enable external syslog endpoint.</span>
  <span class="token comment"># external_endpoint:</span>
  <span class="token comment">#   # protocol used to transmit log to external endpoint, options is tcp or udp</span>
  <span class="token comment">#   protocol: tcp</span>
  <span class="token comment">#   # The host of external endpoint</span>
  <span class="token comment">#   host: localhost</span>
  <span class="token comment">#   # Port of external endpoint</span>
  <span class="token comment">#   port: 5140</span>

<span class="token comment">#This attribute is for migrator to detect the version of the .cfg file, DO NOT MODIFY!</span>
<span class="token key atrule">_version</span><span class="token punctuation">:</span> 2.5.0

<span class="token comment"># Uncomment external_database if using external database.</span>
<span class="token comment"># external_database:</span>
<span class="token comment">#   harbor:</span>
<span class="token comment">#     host: harbor_db_host</span>
<span class="token comment">#     port: harbor_db_port</span>
<span class="token comment">#     db_name: harbor_db_name</span>
<span class="token comment">#     username: harbor_db_username</span>
<span class="token comment">#     password: harbor_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>
<span class="token comment">#     max_idle_conns: 2</span>
<span class="token comment">#     max_open_conns: 0</span>
<span class="token comment">#   notary_signer:</span>
<span class="token comment">#     host: notary_signer_db_host</span>
<span class="token comment">#     port: notary_signer_db_port</span>
<span class="token comment">#     db_name: notary_signer_db_name</span>
<span class="token comment">#     username: notary_signer_db_username</span>
<span class="token comment">#     password: notary_signer_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>
<span class="token comment">#   notary_server:</span>
<span class="token comment">#     host: notary_server_db_host</span>
<span class="token comment">#     port: notary_server_db_port</span>
<span class="token comment">#     db_name: notary_server_db_name</span>
<span class="token comment">#     username: notary_server_db_username</span>
<span class="token comment">#     password: notary_server_db_password</span>
<span class="token comment">#     ssl_mode: disable</span>

<span class="token comment"># Uncomment external_redis if using external Redis server</span>
<span class="token comment"># external_redis:</span>
<span class="token comment">#   # support redis, redis+sentinel</span>
<span class="token comment">#   # host for redis: &lt;host_redis&gt;:&lt;port_redis&gt;</span>
<span class="token comment">#   # host for redis+sentinel:</span>
<span class="token comment">#   #  &lt;host_sentinel1&gt;:&lt;port_sentinel1&gt;,&lt;host_sentinel2&gt;:&lt;port_sentinel2&gt;,&lt;host_sentinel3&gt;:&lt;port_sentinel3&gt;</span>
<span class="token comment">#   host: redis:6379</span>
<span class="token comment">#   password: </span>
<span class="token comment">#   # sentinel_master_set must be set to support redis+sentinel</span>
<span class="token comment">#   #sentinel_master_set:</span>
<span class="token comment">#   # db_index 0 is for core, it&#39;s unchangeable</span>
<span class="token comment">#   registry_db_index: 1</span>
<span class="token comment">#   jobservice_db_index: 2</span>
<span class="token comment">#   chartmuseum_db_index: 3</span>
<span class="token comment">#   trivy_db_index: 5</span>
<span class="token comment">#   idle_timeout_seconds: 30</span>

<span class="token comment"># Uncomment uaa for trusting the certificate of uaa instance that is hosted via self-signed cert.</span>
<span class="token comment"># uaa:</span>
<span class="token comment">#   ca_file: /path/to/ca</span>

<span class="token comment"># Global proxy</span>
<span class="token comment"># Config http proxy for components, e.g. http://my.proxy.com:3128</span>
<span class="token comment"># Components doesn&#39;t need to connect to each others via http proxy.</span>
<span class="token comment"># Remove component from \`components\` array if want disable proxy</span>
<span class="token comment"># for it. If you want use proxy for replication, MUST enable proxy</span>
<span class="token comment"># for core and jobservice, and set \`http_proxy\` and \`https_proxy\`.</span>
<span class="token comment"># Add domain to the \`no_proxy\` field, when you want disable proxy</span>
<span class="token comment"># for some special registry.</span>
<span class="token key atrule">proxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">http_proxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">https_proxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">no_proxy</span><span class="token punctuation">:</span>
  <span class="token key atrule">components</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> core
    <span class="token punctuation">-</span> jobservice
    <span class="token punctuation">-</span> trivy

<span class="token comment"># metric:</span>
<span class="token comment">#   enabled: false</span>
<span class="token comment">#   port: 9090</span>
<span class="token comment">#   path: /metrics</span>

<span class="token comment"># Trace related config</span>
<span class="token comment"># only can enable one trace provider(jaeger or otel) at the same time,</span>
<span class="token comment"># and when using jaeger as provider, can only enable it with agent mode or collector mode.</span>
<span class="token comment"># if using jaeger collector mode, uncomment endpoint and uncomment username, password if needed</span>
<span class="token comment"># if using jaeger agetn mode uncomment agent_host and agent_port</span>
<span class="token comment"># trace:</span>
<span class="token comment">#   enabled: true</span>
<span class="token comment">#   # set sample_rate to 1 if you wanna sampling 100% of trace data; set 0.5 if you wanna sampling 50% of trace data, and so forth</span>
<span class="token comment">#   sample_rate: 1</span>
<span class="token comment">#   # # namespace used to differenciate different harbor services</span>
<span class="token comment">#   # namespace:</span>
<span class="token comment">#   # # attributes is a key value dict contains user defined attributes used to initialize trace provider</span>
<span class="token comment">#   # attributes:</span>
<span class="token comment">#   #   application: harbor</span>
<span class="token comment">#   # # jaeger should be 1.26 or newer.</span>
<span class="token comment">#   # jaeger:</span>
<span class="token comment">#   #   endpoint: http://hostname:14268/api/traces</span>
<span class="token comment">#   #   username:</span>
<span class="token comment">#   #   password:</span>
<span class="token comment">#   #   agent_host: hostname</span>
<span class="token comment">#   #   # export trace data by jaeger.thrift in compact mode</span>
<span class="token comment">#   #   agent_port: 6831</span>
<span class="token comment">#   # otel:</span>
<span class="token comment">#   #   endpoint: hostname:4318</span>
<span class="token comment">#   #   url_path: /v1/traces</span>
<span class="token comment">#   #   compression: false</span>
<span class="token comment">#   #   insecure: true</span>
<span class="token comment">#   #   timeout: 10s</span>

<span class="token comment"># enable purge _upload directories</span>
<span class="token key atrule">upload_purging</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># remove files in _upload directories which exist for a period of time, default is one week.</span>
  <span class="token key atrule">age</span><span class="token punctuation">:</span> 168h
  <span class="token comment"># the interval of the purge operations</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> 24h
  <span class="token key atrule">dryrun</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function h(f,_){const a=l("ExternalLinkIcon");return p(),o("div",null,[r,n("blockquote",null,[n("p",null,[s("参考资料 "),n("a",u,[s("安装指南"),e(a)]),d,s(" 安装版本 v2.5.3 , 部署包下载地址 "),n("a",v,[s("v2.5.3"),e(a)])])]),k,n("blockquote",null,[n("p",null,[n("a",m,[s("install.sh"),e(a)])])]),b,n("blockquote",null,[n("p",null,[n("a",g,[s("common.sh"),e(a)])])]),y])}const x=i(c,[["render",h],["__file","307123.html.vue"]]),$=JSON.parse(`{"path":"/p2024/Linux/harbor/307123.html","title":"部署harbor","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/harbor/307123.html","lang":"zh-CN","title":"部署harbor","description":"部署harbor","isOriginal":true,"date":"2024-03-02T00:00:00.000Z","category":["harbor"],"tag":["harbor"],"head":[["meta",{"name":"keywords","content":"部署harbor,harbor"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/harbor/307123.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"部署harbor"}],["meta",{"property":"og:description","content":"部署harbor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"harbor"}],["meta",{"property":"article:published_time","content":"2024-03-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署harbor\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"部署环境","slug":"部署环境","link":"#部署环境","children":[]},{"level":2,"title":"参考资料&踩坑指南","slug":"参考资料-踩坑指南","link":"#参考资料-踩坑指南","children":[]},{"level":2,"title":"部署脚本","slug":"部署脚本","link":"#部署脚本","children":[]},{"level":2,"title":"配置成服务","slug":"配置成服务","link":"#配置成服务","children":[]},{"level":2,"title":"其他修改的文件","slug":"其他修改的文件","link":"#其他修改的文件","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":10.09,"words":3028},"filePathRelative":"06.Linux/05.harbor/20240302_部署harbor.md","localizedDate":"2024年3月2日","excerpt":"<h2>部署环境</h2>\\n<blockquote>\\n<p>Ubuntu 22.04 LTS<br>\\n已经安装了docker <strong>原则上跟docker版本关系不大</strong></p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code> <span class=\\"token function\\">docker</span> version\\nClient: Docker Engine - Community\\n Version:           <span class=\\"token number\\">24.0</span>.6\\n API version:       <span class=\\"token number\\">1.43</span>\\n Go version:        go1.20.7\\n Git commit:        ed223bc\\n Built:             Mon Sep  <span class=\\"token number\\">4</span> <span class=\\"token number\\">12</span>:31:44 <span class=\\"token number\\">2023</span>\\n OS/Arch:           linux/amd64\\n Context:           default\\n\\nServer: Docker Engine - Community\\n Engine:\\n  Version:          <span class=\\"token number\\">24.0</span>.6\\n  API version:      <span class=\\"token number\\">1.43</span> <span class=\\"token punctuation\\">(</span>minimum version <span class=\\"token number\\">1.12</span><span class=\\"token punctuation\\">)</span>\\n  Go version:       go1.20.7\\n  Git commit:       1a79695\\n  Built:            Mon Sep  <span class=\\"token number\\">4</span> <span class=\\"token number\\">12</span>:31:44 <span class=\\"token number\\">2023</span>\\n  OS/Arch:          linux/amd64\\n  Experimental:     <span class=\\"token boolean\\">false</span>\\n containerd:\\n  Version:          <span class=\\"token number\\">1.6</span>.24\\n  GitCommit:        61f9fd88f79f081d64d6fa3bb1a0dc71ec870523\\n runc:\\n  Version:          <span class=\\"token number\\">1.1</span>.9\\n  GitCommit:        v1.1.9-0-gccaecfc\\n docker-init:\\n  Version:          <span class=\\"token number\\">0.19</span>.0\\n  GitCommit:        de40ad0\\n\\n</code></pre></div>"}`);export{x as comp,$ as data};
