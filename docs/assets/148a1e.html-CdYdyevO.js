import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as r,a as n,b as a,d as e,e as t}from"./app-D55Cmw5b.js";const i="/images/2024/20240318_algolia_search_index.png",c="/images/2024/20240318_algolia_search_result.png",u={},d=t('<p>本文介绍，在Vuepress中实现自定义algolia crawler爬虫来实现网站全文搜索功能。</p><h2 id="背景介绍" tabindex="-1"><a class="header-anchor" href="#背景介绍"><span>背景介绍</span></a></h2><blockquote><p>网站的全文搜索功能是必备利器。经过对比选中algolia</p></blockquote><blockquote><p>建议有特殊需求可以寻求Pro版本，本实践是使用algolia提供的免费服务来实现全文搜索。</p></blockquote><blockquote><p>本实践针对本网站实现全文搜索功能。其他网站可以参考本文档修改配置文件来实现。</p></blockquote><h2 id="实践步骤" tabindex="-1"><a class="header-anchor" href="#实践步骤"><span>实践步骤</span></a></h2><h3 id="_1-创建algolia账号" tabindex="-1"><a class="header-anchor" href="#_1-创建algolia账号"><span>1.创建algolia账号</span></a></h3>',7),k={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m=n("code",null,"Application name",-1),g=n("code",null,"Index name",-1),h=n("br",null,null,-1),b=t('<blockquote><figure><img src="'+i+`" alt="algolia账号索引" tabindex="0" loading="lazy"><figcaption>algolia账号索引</figcaption></figure></blockquote><h3 id="_2-在docker中自定义爬虫" tabindex="-1"><a class="header-anchor" href="#_2-在docker中自定义爬虫"><span>2.在docker中自定义爬虫</span></a></h3><blockquote><p>docker运行命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> --env-file<span class="token operator">=</span>.env <span class="token parameter variable">-e</span> <span class="token string">&quot;CONFIG=<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> config.json <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> tostring<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> aloglia-scraper algolia/docsearch-scraper

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>.env</code> 文件内容如下</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>APPLICATION_ID=MXXXXXXXX
API_KEY=972xxxxxxxxxxxxxxxxxxxxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>config.json</code> 文件内容如下<br><code>example.com</code> 请适当替换成你的网站地址</p></blockquote><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;index_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;start_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://example.com/&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sitemap_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;https://example.com/sitemap.xml&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stop_urls&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;selectors&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lvl0&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;p.sidebar-heading.open&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Documentation&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main h1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main h2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main h3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main h4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lvl5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main h5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main p, main li&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/html/@lang&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xpath&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;global&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;default_value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;strip_chars&quot;</span><span class="token operator">:</span> <span class="token string">&quot; .,;:#&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;custom_settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;attributesForFaceting&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;lang&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;conversation_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;1585404165&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scrape_start_urls&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nb_hits&quot;</span><span class="token operator">:</span> <span class="token number">40079</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查看日志" tabindex="-1"><a class="header-anchor" href="#_3-查看日志"><span>3.查看日志</span></a></h3><blockquote><p>docker logs -f aloglia-scraper<br><code>aloglia-scraper</code> 为容器名称</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>......
&gt; DocSearch: https://xxxxx/20240227_ReLU.html 16 records)
&gt; DocSearch: https://xxxx/20240226_tanh%E5%87%BD%E6%95%B0.html 18 records)
&gt; DocSearch: https://xxxx/20240226_sigmoid%E5%87%BD%E6%95%B0.html 17 records)
&gt; DocSearch: https://xxxx/20240225_%E5%87%BD%E6%95%B0%E6%B1%82%E5%AF%BC.html 58 records)
&gt; DocSearch: https://xxxx/20240225_e.html 20 records)
&gt; DocSearch: https://xxxx_%E7%BB%93%E6%9E%84%E5%8C%96%E7%9A%84Prompts.html 43 records)
&gt; DocSearch: https://xxxxxx.html 109 records)

Nb hits: 37,682
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-后台查看数据" tabindex="-1"><a class="header-anchor" href="#_4-后台查看数据"><span>4.后台查看数据</span></a></h3><blockquote><p>records 37,682 # events 19 avg. record size 694.72B</p></blockquote><h3 id="_5-vueepress配置" tabindex="-1"><a class="header-anchor" href="#_5-vueepress配置"><span>5.Vueepress配置</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">docsearch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;0xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;indexName&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意安装 <code>npm i -D @vuepress/plugin-docsearch</code></p></blockquote><h3 id="_6-部署检查" tabindex="-1"><a class="header-anchor" href="#_6-部署检查"><span>6.部署检查</span></a></h3><blockquote><p>通过浏览器访问你的网站，输入关键词，查看搜索结果。</p></blockquote><blockquote><figure><img src="`+c+'" alt="algolia搜索结果" tabindex="0" loading="lazy"><figcaption>algolia搜索结果</figcaption></figure></blockquote><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',20),x={href:"https://www.algolia.com/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/algolia/docsearch-configs",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),y={href:"https://docsearch.algolia.com/docs/legacy/run-your-own/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/algolia/docsearch-configs/blob/master/configs/vuepress-theme-hope.json",target:"_blank",rel:"noopener noreferrer"};function w(E,V){const s=p("ExternalLinkIcon");return l(),r("div",null,[d,n("blockquote",null,[n("p",null,[a("访问 "),n("a",k,[a("https://www.algolia.com/"),e(s)]),a(" 输入你的邮箱，创建账号。"),v,a(" 创建项目"),m,a(" 索引名称 "),g,h,a(" 记录应用的id和访问key。")])]),b,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",x,[a("algolia官网"),e(s)])]),n("li",null,[n("a",q,[a("algolia DocSearch configurations开源库"),e(s)]),_,a(" ***** This repository is not maintained anymore in favor of our new infrastructure.")]),n("li",null,[n("a",y,[a("自定义抓取官方说明"),e(s)])]),n("li",null,[n("a",f,[a("参考配置文件"),e(s)])])])])])}const B=o(u,[["render",w],["__file","148a1e.html.vue"]]),N=JSON.parse(`{"path":"/p2024/12/Vuepress/148a1e.html","title":"引入algolia并自定义crawler爬虫","lang":"zh-CN","frontmatter":{"permalink":"/p2024/12/Vuepress/148a1e.html","lang":"zh-CN","title":"引入algolia并自定义crawler爬虫","description":"引入algolia并自定义crawler爬虫","isOriginal":true,"date":"2024-03-18T00:00:00.000Z","category":["前端","Vuepress","robots"],"tag":["前端","Vuepress","algolia"],"head":[["meta",{"name":"keywords","content":"前端,Vuepress,algolia,crawler爬虫"}],["meta",{"property":"og:url","content":"https://nstudy.org/p2024/12/Vuepress/148a1e.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"引入algolia并自定义crawler爬虫"}],["meta",{"property":"og:description","content":"引入algolia并自定义crawler爬虫"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nstudy.org/images/2024/20240318_algolia_search_index.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T09:07:52.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"Vuepress"}],["meta",{"property":"article:tag","content":"algolia"}],["meta",{"property":"article:published_time","content":"2024-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T09:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"引入algolia并自定义crawler爬虫\\",\\"image\\":[\\"https://nstudy.org/images/2024/20240318_algolia_search_index.png\\",\\"https://nstudy.org/images/2024/20240318_algolia_search_result.png\\"],\\"datePublished\\":\\"2024-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T09:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://nstudy.org\\"}]}"]],"star":false,"sticky":true},"headers":[{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[]},{"level":2,"title":"实践步骤","slug":"实践步骤","link":"#实践步骤","children":[{"level":3,"title":"1.创建algolia账号","slug":"_1-创建algolia账号","link":"#_1-创建algolia账号","children":[]},{"level":3,"title":"2.在docker中自定义爬虫","slug":"_2-在docker中自定义爬虫","link":"#_2-在docker中自定义爬虫","children":[]},{"level":3,"title":"3.查看日志","slug":"_3-查看日志","link":"#_3-查看日志","children":[]},{"level":3,"title":"4.后台查看数据","slug":"_4-后台查看数据","link":"#_4-后台查看数据","children":[]},{"level":3,"title":"5.Vueepress配置","slug":"_5-vueepress配置","link":"#_5-vueepress配置","children":[]},{"level":3,"title":"6.部署检查","slug":"_6-部署检查","link":"#_6-部署检查","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1712480872000,"updatedTime":1712480872000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.96,"words":589},"filePathRelative":"12.前端/02.Vuepress/20240318_引入algolia并自定义crawler爬虫.md","localizedDate":"2024年3月18日","excerpt":"<p>本文介绍，在Vuepress中实现自定义algolia crawler爬虫来实现网站全文搜索功能。</p>\\n<!--more-->\\n<h2>背景介绍</h2>\\n<blockquote>\\n<p>网站的全文搜索功能是必备利器。经过对比选中algolia</p>\\n</blockquote>\\n<blockquote>\\n<p>建议有特殊需求可以寻求Pro版本，本实践是使用algolia提供的免费服务来实现全文搜索。</p>\\n</blockquote>\\n<blockquote>\\n<p>本实践针对本网站实现全文搜索功能。其他网站可以参考本文档修改配置文件来实现。</p>\\n</blockquote>\\n<h2>实践步骤</h2>"}`);export{B as comp,N as data};
