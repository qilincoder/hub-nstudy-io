import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as s}from"./app-DLYfSG7h.js";const t={},i=s(`<h1 id="本文介绍-contab常用用法" tabindex="-1"><a class="header-anchor" href="#本文介绍-contab常用用法"><span>本文介绍，contab常用用法</span></a></h1><h2 id="服务器说明" tabindex="-1"><a class="header-anchor" href="#服务器说明"><span>服务器说明</span></a></h2><blockquote><p>以下命令在 Ubuntu 20.04 LTS 系统上测试</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>ubuntu@:~$ lsb_release <span class="token parameter variable">-a</span>

No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu <span class="token number">20.04</span> LTS
Release:	<span class="token number">20.04</span>
Codename:	focal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><blockquote><p>contab是Linux下的一个定时任务管理工具，可以用来管理cron任务。</p></blockquote><h2 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法"><span>常见用法</span></a></h2><ol><li>查看当前用户的 cron 作业</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-l</span>

<span class="token comment"># Edit this file to introduce tasks to be run by cron.</span>
<span class="token comment"># </span>
<span class="token comment"># Each task to run has to be defined through a single line</span>
<span class="token comment"># indicating with different fields when the task will be run</span>
<span class="token comment"># and what command to run for the task</span>
<span class="token comment"># </span>
<span class="token comment"># To define the time you can provide concrete values for</span>
<span class="token comment"># minute (m), hour (h), day of month (dom), month (mon),</span>
<span class="token comment"># and day of week (dow) or use &#39;*&#39; in these fields (for &#39;any&#39;).</span>
<span class="token comment"># </span>
<span class="token comment"># Notice that tasks will be started based on the cron&#39;s system</span>
<span class="token comment"># daemon&#39;s notion of time and timezones.</span>
<span class="token comment"># </span>
<span class="token comment"># Output of the crontab jobs (including errors) is sent through</span>
<span class="token comment"># email to the user the crontab file belongs to (unless redirected).</span>
<span class="token comment"># </span>
<span class="token comment"># For example, you can run a backup of all your user accounts</span>
<span class="token comment"># at 5 a.m every week with:</span>
<span class="token comment"># 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/</span>
<span class="token comment"># </span>
<span class="token comment"># For more information see the manual pages of crontab(5) and cron(8)</span>
<span class="token comment"># </span>
<span class="token comment"># m h  dom mon dow   command</span>
<span class="token number">0</span> */4 * * * python3 /root/163News/09.dimages163new.py <span class="token operator">&gt;&gt;</span>/root/163News/log.txt <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>编辑当前用户的 cron 作业</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.删除当前用户的所有 cron 作业</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.按照特定格式添加 cron 作业</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>* * * * * <span class="token builtin class-name">command</span>

<span class="token comment"># 分钟：0-59</span>
<span class="token comment"># 小时：0-23</span>
<span class="token comment"># 日期：1-31</span>
<span class="token comment"># 月份：1-12</span>
<span class="token comment"># 星期：0-6 (0 表示星期日，1 表示星期一，以此类推)</span>

<span class="token comment"># 通配符：</span>
<span class="token comment"># * 表示匹配任意值。</span>
<span class="token comment"># */n 表示每隔 n 单位时间执行一次。</span>

<span class="token comment"># 示例：</span>

<span class="token comment"># 0 2 * * * backup.sh：每天凌晨 2 点执行 backup.sh 脚本。</span>
<span class="token comment"># */15 * * * * command：每 15 分钟执行一次命令。</span>
<span class="token comment"># 0 0 * * 1-5 command：每周一至周五的午夜执行命令。</span>

<span class="token comment"># 注意事项：</span>

<span class="token comment"># cron 作业的执行结果通常会通过邮件发送给作业的所有者。</span>
<span class="token comment"># 如果你不想接收这些通知邮件，可以在 cron 作业中使用 &gt;/dev/null 2&gt;&amp;1 将输出重定向到 /dev/null。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[i];function o(c,r){return e(),a("div",null,l)}const p=n(t,[["render",o],["__file","3e5ec3.html.vue"]]),u=JSON.parse(`{"path":"/p2024/Linux/others/3e5ec3.html","title":"contab介绍","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/3e5ec3.html","lang":"zh-CN","title":"contab介绍","description":"contab介绍","isOriginal":true,"date":"2024-02-26T00:00:00.000Z","category":["Linux"],"tag":["Linux","contab"],"head":[["meta",{"name":"keywords","content":"Linux,contab"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/others/3e5ec3.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"contab介绍"}],["meta",{"property":"og:description","content":"contab介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T01:47:26.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"contab"}],["meta",{"property":"article:published_time","content":"2024-02-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-18T01:47:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"contab介绍\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-18T01:47:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"服务器说明","slug":"服务器说明","link":"#服务器说明","children":[]},{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"常见用法","slug":"常见用法","link":"#常见用法","children":[]}],"git":{"createdTime":1713404846000,"updatedTime":1713404846000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.67,"words":501},"filePathRelative":"06.Linux/99.others/20240226_contab介绍.md","localizedDate":"2024年2月26日","excerpt":"\\n<h2>服务器说明</h2>\\n<blockquote>\\n<p>以下命令在  Ubuntu 20.04 LTS 系统上测试</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>ubuntu@:~$ lsb_release <span class=\\"token parameter variable\\">-a</span>\\n\\nNo LSB modules are available.\\nDistributor ID:\\tUbuntu\\nDescription:\\tUbuntu <span class=\\"token number\\">20.04</span> LTS\\nRelease:\\t<span class=\\"token number\\">20.04</span>\\nCodename:\\tfocal\\n</code></pre></div>"}`);export{p as comp,u as data};
