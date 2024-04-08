import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,e as s}from"./app-DKHkdyNf.js";const t={},i=s(`<h1 id="本文介绍-在linux环境下生成自签名泛域名" tabindex="-1"><a class="header-anchor" href="#本文介绍-在linux环境下生成自签名泛域名"><span>本文介绍，在Linux环境下生成自签名泛域名</span></a></h1><h2 id="生成环境说明" tabindex="-1"><a class="header-anchor" href="#生成环境说明"><span>生成环境说明</span></a></h2><blockquote><p>以下命令在 Ubuntu 20.04 LTS 系统上测试</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu@:~$ lsb_release <span class="token parameter variable">-a</span>

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu <span class="token number">20.04</span> LTS
Release:	<span class="token number">20.04</span>
Codename:	focal

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛域名介绍" tabindex="-1"><a class="header-anchor" href="#泛域名介绍"><span>泛域名介绍</span></a></h2><blockquote><p>泛域名（Wildcard Domain）是一种在域名系统（DNS）中使用的特殊类型的域名。通常，域名系统中的域名是指定了特定子域的，例如 <code>example.com</code> 或 <code>www.example.com</code>。但是，泛域名允许将所有子域名都指向同一个位置，而无需为每个子域名都配置单独的 DNS 记录。</p></blockquote><blockquote><p>泛域名的常见语法是使用星号（*）作为通配符，例如 <code>*.example.com</code>。这意味着任何子域名，如 <code>foo.example.com</code>、<code>bar.example.com</code>、<code>xyz.example.com</code> 等，都将指向相同的位置。</p></blockquote><blockquote><p>泛域名通常用于以下几种情况：</p></blockquote><ol><li><p><strong>统一的网站访问</strong>：如果您希望所有子域名都指向同一个网站或服务，而不必为每个子域名都配置 DNS 记录，泛域名就非常有用。这样可以简化管理并节省时间。</p></li><li><p><strong>动态子域名分配</strong>：某些应用程序可能会动态创建子域名，例如个人博客平台或多租户 SaaS 应用程序。使用泛域名可以让这些动态创建的子域名立即生效，而无需手动配置 DNS 记录。</p></li><li><p><strong>测试和开发环境</strong>：在测试和开发过程中，可能需要创建多个临时子域名。使用泛域名可以简化测试环境的设置，例如 <code>*.test.example.com</code>。</p></li></ol><blockquote><p>虽然泛域名提供了灵活性和便利性，但在使用时需要谨慎考虑安全性和隐私性问题。由于泛域名会匹配任何子域名，因此可能存在滥用的风险，例如恶意用户创建子域名来冒充您的网站或服务。因此，建议在使用泛域名时采取适当的安全措施，如限制子域名的使用范围、监控域名注册情况等。</p></blockquote><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><blockquote><p>本实践由于要搭建K8S集群，系统众多，并且以https形式访问，所以需要生成泛域名证书</p></blockquote><h2 id="自签名生成泛域名证书操作步骤" tabindex="-1"><a class="header-anchor" href="#自签名生成泛域名证书操作步骤"><span>自签名生成泛域名证书操作步骤</span></a></h2><blockquote><p>假设主域名为 <code>aip-dev.xxxx.com</code>，泛域名为 <code>*.aip-dev.xxxx.com</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#Generate a Certificate Authority Certificate</span>
openssl genrsa <span class="token parameter variable">-out</span> ca.key <span class="token number">4096</span>

openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-new</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> 
<span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=*.aip-dev.xxxx.com&quot;</span> 
<span class="token parameter variable">-key</span> ca.key 
<span class="token parameter variable">-out</span> ca.crt

<span class="token comment">#Generate a Server Certificate</span>
openssl genrsa <span class="token parameter variable">-out</span> aip-dev.xxxx.com.key <span class="token number">4096</span>

openssl req <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-new</span> 
<span class="token parameter variable">-subj</span> <span class="token string">&quot;/C=CN/ST=Beijing/L=Beijing/O=example/OU=Personal/CN=*.aip-dev.xxxx.com&quot;</span> 
<span class="token parameter variable">-key</span> aip-dev.xxxx.com.key 
<span class="token parameter variable">-out</span> aip-dev.xxxx.com.csr
<span class="token function">cat</span> <span class="token operator">&gt;</span> v3.ext <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[alt_names]
DNS.1=aip-dev.xxxx.com
DNS.2=www.aip-dev.xxxx.com
DNS.3=*.aip-dev.xxxx.com
EOF</span>

openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-sha512</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> 
<span class="token parameter variable">-extfile</span> v3.ext 
<span class="token parameter variable">-CA</span> ca.crt <span class="token parameter variable">-CAkey</span> ca.key <span class="token parameter variable">-CAcreateserial</span> 
<span class="token parameter variable">-in</span> aip-dev.xxxx.com.csr 
<span class="token parameter variable">-out</span> aip-dev.xxxx.com.crt

<span class="token comment"># 拷贝证书到指定目录（根据需要执行）</span>
<span class="token function">cp</span> aip-dev.xxxx.com.crt /data/harbor/cert
<span class="token function">cp</span> aip-dev.xxxx.com.key /data/harbor/cert

openssl x509 <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-in</span> aip-dev.xxxx.com.crt <span class="token parameter variable">-out</span> aip-dev.xxxx.com.cert

<span class="token comment"># nginx配置（根据需要执行）</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker/certs.d/nginx/certs/registry.aip-dev.xxxx.com/
<span class="token function">cp</span> aip-dev.xxxx.com.cert /etc/docker/certs.d/registry.aip-dev.xxxx.com/
<span class="token function">cp</span> aip-dev.xxxx.com.key /etc/docker/certs.d/registry.aip-dev.xxxx.com/
<span class="token function">cp</span> ca.crt /etc/docker/certs.d/registry.aip-dev.xxxx.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[i];function l(c,o){return a(),n("div",null,r)}const m=e(t,[["render",l],["__file","fa5521.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Linux/cert/fa5521.html","title":"生成自签名泛域名证书","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/cert/fa5521.html","lang":"zh-CN","title":"生成自签名泛域名证书","description":"生成自签名泛域名证书","isOriginal":true,"date":"2024-02-28T00:00:00.000Z","category":["自签名","泛域名"],"tag":["自签名","泛域名","证书"],"head":[["meta",{"name":"keywords","content":"Linux,泛域名,自签名泛域名,证书"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/cert/fa5521.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"生成自签名泛域名证书"}],["meta",{"property":"og:description","content":"生成自签名泛域名证书"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"自签名"}],["meta",{"property":"article:tag","content":"泛域名"}],["meta",{"property":"article:tag","content":"证书"}],["meta",{"property":"article:published_time","content":"2024-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生成自签名泛域名证书\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"生成环境说明","slug":"生成环境说明","link":"#生成环境说明","children":[]},{"level":2,"title":"泛域名介绍","slug":"泛域名介绍","link":"#泛域名介绍","children":[]},{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"自签名生成泛域名证书操作步骤","slug":"自签名生成泛域名证书操作步骤","link":"#自签名生成泛域名证书操作步骤","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":2.71,"words":814},"filePathRelative":"06.Linux/01.cert/20240228_自签名生成泛域名证书.md","localizedDate":"2024年2月28日","excerpt":"\\n<h2>生成环境说明</h2>\\n<blockquote>\\n<p>以下命令在  Ubuntu 20.04 LTS 系统上测试</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ubuntu@:~$ lsb_release <span class=\\"token parameter variable\\">-a</span>\\n\\nNo LSB modules are available.\\nDistributor ID:\\tUbuntu\\nDescription:\\tUbuntu <span class=\\"token number\\">20.04</span> LTS\\nRelease:\\t<span class=\\"token number\\">20.04</span>\\nCodename:\\tfocal\\n\\n</code></pre></div>"}`);export{m as comp,v as data};
