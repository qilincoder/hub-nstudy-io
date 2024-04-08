import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,a as e,b as n,d as r,e as s}from"./app-DKHkdyNf.js";const c={},d=s('<h2 id="部署环境" tabindex="-1"><a class="header-anchor" href="#部署环境"><span>部署环境</span></a></h2><blockquote><p>Ubuntu 22.04 LTS<br> 已经安装了docker <strong>原则上跟docker版本关系不大</strong></p></blockquote><blockquote><p>从 <code>v2.5.3</code> 迁移到 <code>v2.9.0</code> 版本上,保留原来的镜像仓库数据</p></blockquote><h2 id="参考资料-踩坑指南" tabindex="-1"><a class="header-anchor" href="#参考资料-踩坑指南"><span>参考资料&amp;踩坑指南</span></a></h2>',4),p={href:"https://goharbor.io/docs/2.9.0/",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),b={href:"https://github.com/goharbor/harbor/releases/download/v2.9.0/harbor-offline-installer-v2.9.0.tgz",target:"_blank",rel:"noopener noreferrer"},m=s(`<blockquote><p><span style="color:red;">全新部署参见 <code>部署harbor</code></span></p></blockquote><h2 id="迁移步骤" tabindex="-1"><a class="header-anchor" href="#迁移步骤"><span>迁移步骤</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 数据目录复制过来</span>
<span class="token function">cp</span> <span class="token parameter variable">-rf</span> /dataM/harbor /opt/harbor
   
<span class="token builtin class-name">cd</span> /usr/local/harbor/
<span class="token function">tar</span> zxvf harbor-offline-installer-v2.9.0.tgz
<span class="token function">rm</span> harbor-offline-installer-v2.9.0.tgz
<span class="token function">mv</span> harbor/* <span class="token punctuation">..</span>/harbor

<span class="token function">cp</span> harbor.yml.tmpl harbor.yml

<span class="token comment">#修改配置文件 --配置域名,存储</span>
<span class="token function">vim</span> harbor.yml
./prepare
<span class="token comment"># 修改yml文件-配置网络</span>
<span class="token function">vim</span> docker-compose.yml
networks:
  harbor:
    external: <span class="token boolean">false</span>
    driver: bridge
    ipam:
        driver: default
        config:
            - subnet: <span class="token string">&quot;192.168.70.0/24&quot;</span>
 
./install.sh
<span class="token function">docker</span> compose down <span class="token parameter variable">-v</span>
<span class="token function">docker</span> compose up <span class="token parameter variable">-d</span>

<span class="token comment"># 测试</span>
<span class="token function">docker</span> pull ubuntu:22.04
<span class="token function">docker</span> tag ubuntu:22.04 registry.example.com/library/ubuntu:22.04
<span class="token function">docker</span> push registry.example.com/library/ubuntu:22.04
<span class="token function">docker</span> rmi registry.example.com/library/ubuntu:22.04
<span class="token function">docker</span> pull registry.example.com/library/ubuntu:22.04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(v,k){const a=o("ExternalLinkIcon");return i(),l("div",null,[d,e("blockquote",null,[e("p",null,[n("参考资料 "),e("a",p,[n("参考资料"),r(a)]),u,n(" 部署包下载地址 "),e("a",b,[n("v2.9.0"),r(a)])])]),m])}const y=t(c,[["render",h],["__file","2a116a.html.vue"]]),_=JSON.parse(`{"path":"/p2024/Linux/harbor/2a116a.html","title":"迁移harbor","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/harbor/2a116a.html","lang":"zh-CN","title":"迁移harbor","description":"迁移harbor","isOriginal":true,"date":"2024-03-06T00:00:00.000Z","category":["harbor"],"tag":["harbor"],"head":[["meta",{"name":"keywords","content":"迁移harbor,harbor"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/harbor/2a116a.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"迁移harbor"}],["meta",{"property":"og:description","content":"迁移harbor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-08T03:28:49.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"harbor"}],["meta",{"property":"article:published_time","content":"2024-03-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T03:28:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"迁移harbor\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-06T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T03:28:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"部署环境","slug":"部署环境","link":"#部署环境","children":[]},{"level":2,"title":"参考资料&踩坑指南","slug":"参考资料-踩坑指南","link":"#参考资料-踩坑指南","children":[]},{"level":2,"title":"迁移步骤","slug":"迁移步骤","link":"#迁移步骤","children":[]}],"git":{"createdTime":1712546929000,"updatedTime":1712546929000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":0.77,"words":231},"filePathRelative":"06.Linux/05.harbor/20240306_迁移harbor.md","localizedDate":"2024年3月6日","excerpt":"<h2>部署环境</h2>\\n<blockquote>\\n<p>Ubuntu 22.04 LTS<br>\\n已经安装了docker <strong>原则上跟docker版本关系不大</strong></p>\\n</blockquote>\\n<blockquote>\\n<p>从 <code>v2.5.3</code> 迁移到 <code>v2.9.0</code> 版本上,保留原来的镜像仓库数据</p>\\n</blockquote>\\n<h2>参考资料&amp;踩坑指南</h2>\\n<blockquote>\\n<p>参考资料 <a href=\\"https://goharbor.io/docs/2.9.0/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">参考资料</a><br>\\n部署包下载地址 <a href=\\"https://github.com/goharbor/harbor/releases/download/v2.9.0/harbor-offline-installer-v2.9.0.tgz\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">v2.9.0</a></p>\\n</blockquote>"}`);export{y as comp,_ as data};
