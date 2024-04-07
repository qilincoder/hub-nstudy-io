import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c,a as e,b as t,d as n,e as i}from"./app-D55Cmw5b.js";const s={},p=i('<p>本文介绍，当网络环境只支持IPv4的情况下，怎么访问IPv6网站。</p><blockquote><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>公司办公环境是纯IPv4环境，需要访问IPv6网站，可以使用Teredo协议。</p></blockquote><blockquote><h2 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明"><span>环境说明</span></a></h2><p>公司办公系统是Windows 10 专业版，系统版本是19043.928，系统语言是中文简体。</p></blockquote><blockquote><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h2></blockquote><ol><li>查看teredo状态</li></ol><blockquote><p>netsh interface teredo show state</p></blockquote><ol><li>设置teredo 不可用/可用</li></ol><blockquote><p>netsh interface Teredo set state disable<br> netsh interface teredo set state enterpriseclient server=default</p></blockquote><ol><li>配置设置teredo服务</li></ol>',9),d={href:"http://win1910.ipv6.microsoft.com",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),h={href:"http://server=teredo.iks-jena.de",target:"_blank",rel:"noopener noreferrer"},u=e("ol",null,[e("li",null,"配置设置teredo端口（根据需要设置，可以不设置）")],-1),g=e("blockquote",null,[e("p",null,"netsh interface teredo set state natawareclient clientport=60409")],-1),v=e("ol",null,[e("li",null,"验证是否可用")],-1),_={href:"http://6.ipw.cn",target:"_blank",rel:"noopener noreferrer"};function k(b,P){const o=a("ExternalLinkIcon");return l(),c("div",null,[p,e("blockquote",null,[e("p",null,[t("#"),e("a",d,[t("win1910.ipv6.microsoft.com"),n(o)]),m,t(" netsh interface teredo set state "),e("a",h,[t("server=teredo.iks-jena.de"),n(o)])])]),u,g,v,e("blockquote",null,[e("p",null,[t("ping "),e("a",_,[t("6.ipw.cn"),n(o)])])])])}const y=r(s,[["render",k],["__file","bdc88e.html.vue"]]),q=JSON.parse(`{"path":"/p2024/99/bdc88e.html","title":"纯IPv4环境访问IPv6网站","lang":"zh-CN","frontmatter":{"permalink":"/p2024/99/bdc88e.html","lang":"zh-CN","title":"纯IPv4环境访问IPv6网站","description":"纯IPv4环境访问IPv6网站","isOriginal":true,"date":"2024-02-17T00:00:00.000Z","category":["其他杂项"],"tag":["IPv6","IPv4"],"cover":"/images/2024/network.jpg","head":[["meta",{"name":"keywords","content":"IPv6,IPv4,网络"}],["meta",{"property":"og:url","content":"https://nstudy.org/p2024/99/bdc88e.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"纯IPv4环境访问IPv6网站"}],["meta",{"property":"og:description","content":"纯IPv4环境访问IPv6网站"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://nstudy.org/images/2024/network.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T09:07:52.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://nstudy.org/images/2024/network.jpg"}],["meta",{"name":"twitter:image:alt","content":"纯IPv4环境访问IPv6网站"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"IPv6"}],["meta",{"property":"article:tag","content":"IPv4"}],["meta",{"property":"article:published_time","content":"2024-02-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T09:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"纯IPv4环境访问IPv6网站\\",\\"image\\":[\\"https://nstudy.org/images/2024/network.jpg\\"],\\"datePublished\\":\\"2024-02-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T09:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[],"git":{"createdTime":1712480872000,"updatedTime":1712480872000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":0.76,"words":227},"filePathRelative":"99.其他杂项/20240217_纯IPv4环境访问IPv6网站.md","localizedDate":"2024年2月17日","excerpt":"<p>本文介绍，当网络环境只支持IPv4的情况下，怎么访问IPv6网站。</p>\\n<!--more-->\\n<blockquote>\\n<h2>背景</h2>\\n<p>公司办公环境是纯IPv4环境，需要访问IPv6网站，可以使用Teredo协议。</p>\\n</blockquote>\\n<blockquote>\\n<h2>环境说明</h2>\\n<p>公司办公系统是Windows 10 专业版，系统版本是19043.928，系统语言是中文简体。</p>\\n</blockquote>\\n<blockquote>\\n<h2>操作步骤</h2>\\n</blockquote>\\n<ol>\\n<li>查看teredo状态</li>\\n</ol>"}`);export{y as comp,q as data};
