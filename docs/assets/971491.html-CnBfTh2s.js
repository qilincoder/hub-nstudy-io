import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as r,a as n,b as a,d as s,e as l}from"./app-0RuRy7YQ.js";const c={},p=n("p",null,"本文介绍，使用Brew安装MongoDB",-1),d=n("h2",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接"},[n("span",null,"参考链接")])],-1),u={href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/mongodb/homebrew-brew",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="安装操作步骤" tabindex="-1"><a class="header-anchor" href="#安装操作步骤"><span>安装操作步骤</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew tap mongodb/brew
brew search mongodb

brew <span class="token function">install</span> mongodb-community@7.0

a configuration file: /usr/local/etc/mongod.conf
a log directory path: /usr/local/var/log/mongodb
a data directory path: /usr/local/var/mongodb

brew services start mongodb-community
brew services stop mongodb-community
To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, <span class="token keyword">if</span> you don&#39;t want/need a background <span class="token function">service</span> you can just run:
  mongod <span class="token parameter variable">--config</span> /usr/local/etc/mongod.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化mongodb步骤" tabindex="-1"><a class="header-anchor" href="#初始化mongodb步骤"><span>初始化MongoDB步骤</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>mongo
<span class="token operator">&gt;</span>show dbs
<span class="token operator">&gt;</span>use admin
<span class="token operator">&gt;</span>db.createUser<span class="token punctuation">(</span><span class="token punctuation">{</span>user:<span class="token string">&#39;admin&#39;</span>,pwd:<span class="token string">&#39;abccba&#39;</span>,roles:<span class="token punctuation">[</span><span class="token string">&#39;__system&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>show <span class="token function">users</span>

<span class="token function">vim</span> /usr/local/etc/mongod.conf
security.authorization
security:
authorization: enabled

<span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">grep</span> mongod

<span class="token operator">&gt;</span>mongo
<span class="token operator">&gt;</span>use admin
<span class="token operator">&gt;</span>db.auth<span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span>,<span class="token string">&#39;abccba&#39;</span><span class="token punctuation">)</span>
<span class="token operator">&gt;</span>


<span class="token operator">&gt;</span>show roles
<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span>db.createUser<span class="token punctuation">(</span>
   <span class="token punctuation">{</span>
     user: <span class="token string">&quot;admin&quot;</span>,
     pwd: <span class="token string">&quot;dev_admin&quot;</span>,
     roles: <span class="token punctuation">[</span> <span class="token string">&quot;readWrite&quot;</span>, <span class="token string">&quot;dbAdmin&quot;</span> <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
db.runCommand<span class="token punctuation">(</span> <span class="token punctuation">{</span>dropUser: <span class="token string">&quot;root&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db.changeUserPassword<span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span>, <span class="token string">&quot;dev_admin&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(v,h){const e=o("ExternalLinkIcon");return i(),r("div",null,[p,d,n("ul",null,[n("li",null,[n("a",u,[a("install-mongodb-on-os-x"),s(e)])]),n("li",null,[n("a",m,[a("mongodb homebrew-brew"),s(e)])])]),b])}const _=t(c,[["render",g],["__file","971491.html.vue"]]),f=JSON.parse(`{"path":"/p2024/Mac/971491.html","title":"Brew安装MongoDB","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Mac/971491.html","lang":"zh-CN","title":"Brew安装MongoDB","description":"Brew安装MongoDB","isOriginal":true,"date":"2024-02-02T00:00:00.000Z","category":["Mac","HomeBrew","MongoDB安装"],"tag":["Mac","HomeBrew","MongoDB安装"],"head":[["meta",{"name":"keywords","content":"Mac,HomeBrew,MongoDB安装"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Mac/971491.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"Brew安装MongoDB"}],["meta",{"property":"og:description","content":"Brew安装MongoDB"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T06:52:02.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Mac"}],["meta",{"property":"article:tag","content":"HomeBrew"}],["meta",{"property":"article:tag","content":"MongoDB安装"}],["meta",{"property":"article:published_time","content":"2024-02-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T06:52:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Brew安装MongoDB\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T06:52:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"安装操作步骤","slug":"安装操作步骤","link":"#安装操作步骤","children":[]},{"level":2,"title":"初始化MongoDB步骤","slug":"初始化mongodb步骤","link":"#初始化mongodb步骤","children":[]}],"git":{"createdTime":1712904722000,"updatedTime":1712904722000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":0.69,"words":206},"filePathRelative":"98.Mac-/20240202_Brew安装MongoDB.md","localizedDate":"2024年2月2日","excerpt":"<p>本文介绍，使用Brew安装MongoDB</p>\\n<!--more-->\\n<h2>参考链接</h2>\\n<ul>\\n<li><a href=\\"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">install-mongodb-on-os-x</a></li>\\n<li><a href=\\"https://github.com/mongodb/homebrew-brew\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">mongodb homebrew-brew</a></li>\\n</ul>"}`);export{_ as comp,f as data};
