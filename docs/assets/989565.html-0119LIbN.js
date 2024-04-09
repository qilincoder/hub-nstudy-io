import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as o,a as n,b as e,d as a,e as t}from"./app-BnHKSE1F.js";const c={},d=n("h2",{id:"背景介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#背景介绍"},[n("span",null,"背景介绍")])],-1),p=n("blockquote",null,[n("p",null,"我的需求是创建一个免费的泛域名，然后无限续期，可以满足子域名的随机使用。")],-1),u=n("h2",{id:"环境介绍以及依赖版本介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境介绍以及依赖版本介绍"},[n("span",null,"环境介绍以及依赖版本介绍")])],-1),v=n("br",null,null,-1),b=n("br",null,null,-1),m={href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),g={href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://letsencrypt.org/zh-cn/getting-started/",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),y={href:"http://cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},x=n("h2",{id:"实践步骤",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实践步骤"},[n("span",null,"实践步骤")])],-1),w=n("blockquote",null,[n("p",null,[e("假设我有域名："),n("code",null,"example.com"),e("，现在需要创建一个免费的泛域名："),n("code",null,"*.example.com"),e("，然后无限续期。")])],-1),q=n("h3",{id:"_1-安装snapd",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-安装snapd"},[n("span",null,"1.安装snapd")])],-1),C={href:"https://snapcraft.io/docs/installing-snap-on-ubuntu",target:"_blank",rel:"noopener noreferrer"},N=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sudo apt update</span>

<span class="token comment"># sudo apt install snapd</span>

Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree       
Reading state information<span class="token punctuation">..</span>. Done
Suggested packages:
  <span class="token function">zenity</span> <span class="token operator">|</span> kdialog
The following packages will be upgraded:
  snapd
<span class="token number">1</span> upgraded, <span class="token number">0</span> newly installed, <span class="token number">0</span> to remove and <span class="token number">354</span> not upgraded.
Need to get <span class="token number">37.9</span> MB of archives.

<span class="token comment"># snap --version</span>

snap    <span class="token number">2.61</span>.2
snapd   <span class="token number">2.61</span>.2
series  <span class="token number">16</span>
ubuntu  <span class="token number">20.04</span>
kernel  <span class="token number">5.4</span>.0-48-generic

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-卸载原有的certbot" tabindex="-1"><a class="header-anchor" href="#_2-卸载原有的certbot"><span>2.卸载原有的certbot</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sudo apt-get remove certbot</span>

Reading package lists<span class="token punctuation">..</span>. Done
Building dependency tree       
Reading state information<span class="token punctuation">..</span>. Done
Package <span class="token string">&#39;certbot&#39;</span> is not installed, so not removed
<span class="token number">0</span> upgraded, <span class="token number">0</span> newly installed, <span class="token number">0</span> to remove and <span class="token number">354</span> not upgraded.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-安装certbot" tabindex="-1"><a class="header-anchor" href="#_3-安装certbot"><span>3.安装certbot</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sudo snap install --classic certbot</span>

certbot <span class="token number">2.9</span>.0 from Certbot Project <span class="token punctuation">(</span>certbot-eff✓<span class="token punctuation">)</span> installed

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-创建certbot软连接" tabindex="-1"><a class="header-anchor" href="#_4-创建certbot软连接"><span>4.创建certbot软连接</span></a></h3><blockquote><p><span style="color:red;">注意：如果是root用户，可以省略这一步</span></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /snap/bin/certbot /usr/bin/certbot

<span class="token comment"># certbot --version</span>

certbot <span class="token number">2.9</span>.0

<span class="token comment"># certbot -h</span>

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  certbot <span class="token punctuation">[</span>SUBCOMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d DOMAIN<span class="token punctuation">]</span> <span class="token punctuation">[</span>-d DOMAIN<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

Certbot can obtain and <span class="token function">install</span> HTTPS/TLS/SSL certificates.  By default,
it will attempt to use a webserver both <span class="token keyword">for</span> obtaining and installing the
certificate. The <span class="token function">most</span> common SUBCOMMANDS and flags are:

obtain, install, and renew certificates:
    <span class="token punctuation">(</span>default<span class="token punctuation">)</span> run   Obtain <span class="token operator">&amp;</span> <span class="token function">install</span> a certificate <span class="token keyword">in</span> your current webserver
    certonly        Obtain or renew a certificate, but <span class="token keyword">do</span> not <span class="token function">install</span> it
    renew           Renew all previously obtained certificates that are near
expiry
    enhance         Add security enhancements to your existing configuration
   <span class="token parameter variable">-d</span> DOMAINS       Comma-separated list of domains to obtain a certificate <span class="token keyword">for</span>

  <span class="token parameter variable">--apache</span>          Use the Apache plugin <span class="token keyword">for</span> authentication <span class="token operator">&amp;</span> installation
  <span class="token parameter variable">--standalone</span>      Run a standalone webserver <span class="token keyword">for</span> authentication
  <span class="token parameter variable">--nginx</span>           Use the Nginx plugin <span class="token keyword">for</span> authentication <span class="token operator">&amp;</span> installation
  <span class="token parameter variable">--webroot</span>         Place files <span class="token keyword">in</span> a server<span class="token string">&#39;s webroot folder for authentication
  --manual          Obtain certificates interactively, or using shell script
hooks

   -n               Run non-interactively
  --test-cert       Obtain a test certificate from a staging server
  --dry-run         Test &quot;renew&quot; or &quot;certonly&quot; without saving any certificates
to disk

manage certificates:
    certificates    Display information about certificates you have from Certbot
    revoke          Revoke a certificate (supply --cert-name or --cert-path)
    delete          Delete a certificate (supply --cert-name)
    reconfigure     Update a certificate&#39;</span>s configuration <span class="token punctuation">(</span>supply --cert-name<span class="token punctuation">)</span>

manage your account:
    register        Create an ACME account
    unregister      Deactivate an ACME account
    update_account  Update an ACME account
    show_account    Display account details
  --agree-tos       Agree to the ACME server&#39;s Subscriber Agreement
   <span class="token parameter variable">-m</span> EMAIL         Email address <span class="token keyword">for</span> important account notifications

More detailed help:

  -h, <span class="token parameter variable">--help</span> <span class="token punctuation">[</span>TOPIC<span class="token punctuation">]</span>    print this message, or detailed <span class="token builtin class-name">help</span> on a topic<span class="token punctuation">;</span>
                        the available TOPICS are:

   all, automation, commands, paths, security, testing, or any of the
   subcommands or plugins <span class="token punctuation">(</span>certonly, renew, install, register, nginx,
   apache, standalone, webroot, etc.<span class="token punctuation">)</span>
  <span class="token parameter variable">-h</span> all                print a detailed <span class="token builtin class-name">help</span> page including all topics
  <span class="token parameter variable">--version</span>             print the version number
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-安装插件控制级别" tabindex="-1"><a class="header-anchor" href="#_5-安装插件控制级别"><span>5.安装插件控制级别</span></a></h3><blockquote><p>在机器的命令行上运行此命令，以确认安装的插件将具有与 Certbot snap 相同的经典容器。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token builtin class-name">set</span> certbot trust-plugin-with-root<span class="token operator">=</span>ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-安装dns插件" tabindex="-1"><a class="header-anchor" href="#_6-安装dns插件"><span>6.安装DNS插件</span></a></h3>`,12),T={href:"https://eff-certbot.readthedocs.io/en/latest/using.html#dns-plugins",target:"_blank",rel:"noopener noreferrer"},S={href:"https://certbot-dns-cloudflare.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> certbot-dns-cloudflare
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-配置插件访问token" tabindex="-1"><a class="header-anchor" href="#_7-配置插件访问token"><span>7.配置插件访问token</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ~/.certbot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>vim ~/.certbot/cloudflare.ini</p></blockquote><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code># Cloudflare API token used by Certbot
dns_cloudflare_api_token = 0123456789abcdef0123456789abcdef01234567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-获取证书" tabindex="-1"><a class="header-anchor" href="#_8-获取证书"><span>8.获取证书</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># certbot certonly \\</span>
  --dns-cloudflare <span class="token punctuation">\\</span>
  --dns-cloudflare-credentials ~/.certbot/cloudflare.ini <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token string">&quot;example.com&quot;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token string">&quot;*.example.com&quot;</span> <span class="token punctuation">\\</span>
  --agree-tos <span class="token punctuation">\\</span>
  <span class="token parameter variable">--email</span> admin@example.com <span class="token punctuation">\\</span>
  <span class="token parameter variable">--server</span> https://acme-v02.api.letsencrypt.org/directory 


Saving debug log to /var/log/letsencrypt/letsencrypt.log
Requesting a certificate <span class="token keyword">for</span> <span class="token variable"><span class="token variable">\`</span>example.com<span class="token variable">\`</span></span> and <span class="token variable"><span class="token variable">\`</span>*.example.com<span class="token variable">\`</span></span>
Unsafe permissions on credentials configuration file: ~/.certbot/cloudflare.ini
Waiting <span class="token number">10</span> seconds <span class="token keyword">for</span> DNS changes to propagate

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/<span class="token variable"><span class="token variable">\`</span>example.com<span class="token variable">\`</span></span>/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/<span class="token variable"><span class="token variable">\`</span>example.com<span class="token variable">\`</span></span>/privkey.pem
This certificate expires on <span class="token number">2024</span>-06-18.
These files will be updated when the certificate renews.
Certbot has <span class="token builtin class-name">set</span> up a scheduled task to automatically renew this certificate <span class="token keyword">in</span> the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let&#39;s Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-强制重新更新证书" tabindex="-1"><a class="header-anchor" href="#_9-强制重新更新证书"><span>9.强制重新更新证书</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># sudo certbot renew --force-renew</span>

<span class="token comment"># sudo certbot renew --force-renew --dry-run</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-测试自动续期" tabindex="-1"><a class="header-anchor" href="#_10-测试自动续期"><span>10.测试自动续期</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> certbot renew --dry-run

The <span class="token builtin class-name">command</span> to renew certbot is installed <span class="token keyword">in</span> one of the following locations:

/etc/crontab/
/etc/cron.*/*
systemctl list-timers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-安装证书到nginx" tabindex="-1"><a class="header-anchor" href="#_11-安装证书到nginx"><span>11.安装证书到nginx</span></a></h3><blockquote><p>您可以修改配置文件，将证书安装到nginx中</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> README 
This directory contains your keys and certificates.

<span class="token variable"><span class="token variable">\`</span>privkey.pem<span class="token variable">\`</span></span>  <span class="token builtin class-name">:</span> the private key <span class="token keyword">for</span> your certificate.
<span class="token variable"><span class="token variable">\`</span>fullchain.pem<span class="token variable">\`</span></span><span class="token builtin class-name">:</span> the certificate <span class="token function">file</span> used <span class="token keyword">in</span> <span class="token function">most</span> server software.
<span class="token variable"><span class="token variable">\`</span>chain.pem<span class="token variable">\`</span></span>    <span class="token builtin class-name">:</span> used <span class="token keyword">for</span> OCSP stapling <span class="token keyword">in</span> Nginx <span class="token operator">&gt;=</span><span class="token number">1.3</span>.7.
<span class="token variable"><span class="token variable">\`</span>cert.pem<span class="token variable">\`</span></span>     <span class="token builtin class-name">:</span> will <span class="token builtin class-name">break</span> many server configurations, and should not be used
                 without reading further documentation <span class="token punctuation">(</span>see <span class="token function">link</span> below<span class="token punctuation">)</span>.

WARNING: DO NOT MOVE OR RENAME THESE FILES<span class="token operator">!</span>
         Certbot expects these files to remain <span class="token keyword">in</span> this location <span class="token keyword">in</span> order
         to <span class="token keyword">function</span> properly<span class="token operator">!</span>

We recommend not moving these files. For <span class="token function">more</span> information, see the Certbot
User Guide at https://certbot.eff.org/docs/using.html<span class="token comment">#where-are-my-certificates</span>


<span class="token comment">###########</span>
<span class="token comment"># 需要用到  fullchain.pem  和  privkey.pem</span>

nginx <span class="token parameter variable">-t</span>

nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-验证" tabindex="-1"><a class="header-anchor" href="#_12-验证"><span>12.验证</span></a></h3><blockquote><p>访问您的域名查看证书是否可用<br> 访问您的子域名查看证书是否可用</p></blockquote><h2 id="_13-自动续期后重启nginx" tabindex="-1"><a class="header-anchor" href="#_13-自动续期后重启nginx"><span>13.自动续期后重启nginx</span></a></h2>`,17),E={href:"https://eff-certbot.readthedocs.io/en/latest/using.html#pre-and-post-validation-hooks",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">sudo</span> <span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">&#39;printf &quot;#!/bin/sh\\nnginx -s reload\\n&quot; &gt; /etc/letsencrypt/renewal-hooks/post/nginx.sh&#39;</span>

<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">755</span> /etc/letsencrypt/renewal-hooks/post/nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="疑难问题" tabindex="-1"><a class="header-anchor" href="#疑难问题"><span>- 疑难问题</span></a></h3><blockquote><p>实践过程中遇到失败情况，可以多试几次<br> 仍旧失败考虑增加 dns-cloudflare-propagation-seconds = 60 参数</p></blockquote>`,3);function M(O,R){const s=l("ExternalLinkIcon");return r(),o("div",null,[d,p,u,n("blockquote",null,[n("p",null,[e("服务器系统：Ubuntu 20.04"),v,e(" web服务器：nginx version: nginx/1.18.0 (Ubuntu)"),b,e(" 使用的主要工具：certbot , "),n("a",m,[e("官方网站"),a(s)]),e(),n("a",h,[e("帮助文档"),a(s)]),k,e(" 颁发证书机构：Let's Encrypt "),n("a",g,[e("官方网站"),a(s)]),e(),n("a",f,[e("帮助文档"),a(s)]),_,e(" 我的域名管理者是：cloudflare "),n("a",y,[e("官方网站"),a(s)])])]),x,w,q,n("blockquote",null,[n("p",null,[e("参考官方文档，安装snapd，其他系统安装方法可以参考官方文档。"),n("a",C,[e("installing-snap-on-ubuntu"),a(s)])])]),N,n("blockquote",null,[n("p",null,[e("所有支持的DNS插件："),n("a",T,[e("dns-plugins"),a(s)])])]),n("blockquote",null,[n("p",null,[e("certbot-dns-cloudflare 插件说明 "),n("a",S,[e("certbot-dns-cloudflare"),a(s)])])]),D,n("blockquote",null,[n("p",null,[e("参见文档 "),n("a",E,[e("pre-and-post-validation-hooks"),a(s)])])]),A])}const U=i(c,[["render",M],["__file","989565.html.vue"]]),P=JSON.parse(`{"path":"/p2024/Linux/cert/989565.html","title":"免费泛域名申请以及无限续期","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/cert/989565.html","lang":"zh-CN","title":"免费泛域名申请以及无限续期","description":"免费泛域名申请以及无限续期","isOriginal":true,"date":"2024-03-20T00:00:00.000Z","category":["免费泛域名","无限续期"],"tag":["免费泛域名","无限续期"],"head":[["meta",{"name":"keywords","content":"免费泛域名,无限续期,Let's Encrypt,certbot"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/cert/989565.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"免费泛域名申请以及无限续期"}],["meta",{"property":"og:description","content":"免费泛域名申请以及无限续期"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T03:43:15.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"免费泛域名"}],["meta",{"property":"article:tag","content":"无限续期"}],["meta",{"property":"article:published_time","content":"2024-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T03:43:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"免费泛域名申请以及无限续期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-09T03:43:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"环境介绍以及依赖版本介绍","slug":"环境介绍以及依赖版本介绍","link":"#环境介绍以及依赖版本介绍","children":[]},{"level":2,"title":"实践步骤","slug":"实践步骤","link":"#实践步骤","children":[{"level":3,"title":"1.安装snapd","slug":"_1-安装snapd","link":"#_1-安装snapd","children":[]},{"level":3,"title":"2.卸载原有的certbot","slug":"_2-卸载原有的certbot","link":"#_2-卸载原有的certbot","children":[]},{"level":3,"title":"3.安装certbot","slug":"_3-安装certbot","link":"#_3-安装certbot","children":[]},{"level":3,"title":"4.创建certbot软连接","slug":"_4-创建certbot软连接","link":"#_4-创建certbot软连接","children":[]},{"level":3,"title":"5.安装插件控制级别","slug":"_5-安装插件控制级别","link":"#_5-安装插件控制级别","children":[]},{"level":3,"title":"6.安装DNS插件","slug":"_6-安装dns插件","link":"#_6-安装dns插件","children":[]},{"level":3,"title":"7.配置插件访问token","slug":"_7-配置插件访问token","link":"#_7-配置插件访问token","children":[]},{"level":3,"title":"8.获取证书","slug":"_8-获取证书","link":"#_8-获取证书","children":[]},{"level":3,"title":"9.强制重新更新证书","slug":"_9-强制重新更新证书","link":"#_9-强制重新更新证书","children":[]},{"level":3,"title":"10.测试自动续期","slug":"_10-测试自动续期","link":"#_10-测试自动续期","children":[]},{"level":3,"title":"11.安装证书到nginx","slug":"_11-安装证书到nginx","link":"#_11-安装证书到nginx","children":[]},{"level":3,"title":"12.验证","slug":"_12-验证","link":"#_12-验证","children":[]}]},{"level":2,"title":"13.自动续期后重启nginx","slug":"_13-自动续期后重启nginx","link":"#_13-自动续期后重启nginx","children":[{"level":3,"title":"- 疑难问题","slug":"疑难问题","link":"#疑难问题","children":[]}]}],"git":{"createdTime":1712634195000,"updatedTime":1712634195000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":4.25,"words":1275},"filePathRelative":"06.Linux/01.cert/20240320_免费泛域名申请以及无限续期.md","localizedDate":"2024年3月20日","excerpt":"<h2>背景介绍</h2>\\n<blockquote>\\n<p>我的需求是创建一个免费的泛域名，然后无限续期，可以满足子域名的随机使用。</p>\\n</blockquote>\\n<h2>环境介绍以及依赖版本介绍</h2>\\n<blockquote>\\n<p>服务器系统：Ubuntu 20.04<br>\\nweb服务器：nginx version: nginx/1.18.0 (Ubuntu)<br>\\n使用的主要工具：certbot , <a href=\\"https://certbot.eff.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方网站</a>    <a href=\\"https://certbot.eff.org/instructions?ws=nginx&amp;os=ubuntufocal\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">帮助文档</a><br>\\n颁发证书机构：Let's Encrypt <a href=\\"https://letsencrypt.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方网站</a>  <a href=\\"https://letsencrypt.org/zh-cn/getting-started/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">帮助文档</a><br>\\n我的域名管理者是：cloudflare  <a href=\\"http://cloudflare.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方网站</a></p>\\n</blockquote>"}`);export{U as comp,P as data};
