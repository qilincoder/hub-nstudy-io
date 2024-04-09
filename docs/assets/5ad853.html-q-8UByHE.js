import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,e}from"./app-CRfAIpjY.js";const t={},i=e(`<h2 id="centos下安装rabbitmq" tabindex="-1"><a class="header-anchor" href="#centos下安装rabbitmq"><span>centos下安装RabbitMQ</span></a></h2><blockquote><p>这篇记录发生在 <code>2022-05-06</code> , 下面内容不做整理仅作记录,待后续在有RabbitMQ需求的时候做参考。<br> 当有新的记录后此记录可能会删除</p></blockquote><h2 id="记录" tabindex="-1"><a class="header-anchor" href="#记录"><span>记录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> <span class="token parameter variable">-y</span> socat

-- 安装 Erlang
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">make</span> gcc gcc-c++ kernel-devel m4 ncurses-devel openssl-devel

<span class="token builtin class-name">cd</span> /opt
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> otp_src_19.0.tar.gz
<span class="token builtin class-name">cd</span> otp_src_19.0/
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/erlang --enable-smp-support --enable-threads --enable-sctp --enable-kernel-poll --enable-hipe --with-ssl
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/erlang/bin/erl /usr/bin/erl

erl
-- 安装 rabbitMq

<span class="token function">rpm</span> <span class="token parameter variable">-ivh</span> <span class="token parameter variable">--nodeps</span> rabbitmq-server-3.6.10-1.el7.noarch.rpm

-- 使用
systemctl status rabbitmq-server
systemctl start rabbitmq-server
systemctl restart rabbitmq-server


<span class="token function">chkconfig</span> rabbitmq-server on

rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
rabbitmqctl  list_users
rabbitmqctl add_user admin xxxxxxx
rabbitmqctl set_user_tags admin administrator
rabbitmqctl list_users
rabbitmqctl set_permissions <span class="token parameter variable">-p</span> / admin <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>

http://186.137.xxx.xxx:15672/
admin xxxxxxx

-- 插件 rabbitmq_delayed_message_exchange-20171215-3.6.x.ez
<span class="token builtin class-name">cd</span> /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/plugins


rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_delayed_message_exchange
---------------
<span class="token function">vim</span> /usr/lib/rabbitmq/bin/rabbitmq-defaults
----------集群命令
<span class="token builtin class-name">cd</span> /var/log/rabbitmq

<span class="token builtin class-name">cd</span> /var/lib/rabbitmq
处理 .erlang.cookie 一致
<span class="token function">chown</span> <span class="token parameter variable">-R</span> rabbitmq:rabbitmq rabbitmq
<span class="token function">chown</span> <span class="token parameter variable">-R</span> rabbitmq:rabbitmq .erlang.cookie

rabbitmqctl cluster_status
rabbitmqctl reset

rabbitmqctl  forget_cluster_node rabbit@os205
rabbitmqctl  forget_cluster_node rabbit@os200

rabbitmqctl stop_app
rabbitmqctl join_cluster rabbit@os201
rabbitmqctl start_app

rabbitmqctl stop_app
rabbitmqctl join_cluster <span class="token parameter variable">--ram</span> rabbit@os201
rabbitmqctl start_app
------------
ss <span class="token parameter variable">-tnlp</span> <span class="token operator">|</span><span class="token function">grep</span>  <span class="token number">15672</span>
ss <span class="token parameter variable">-tnlp</span> <span class="token operator">|</span><span class="token function">grep</span>  <span class="token number">5672</span>
ss <span class="token parameter variable">-tnlp</span> <span class="token operator">|</span><span class="token function">grep</span>  <span class="token number">25672</span>
ss <span class="token parameter variable">-tnlp</span> <span class="token operator">|</span><span class="token function">grep</span>  <span class="token number">4369</span>
--------------
rabbitmqctl stop_app
rabbitmqctl change_cluster_node_type <span class="token function">ram</span>
rabbitmqtl start_app
-----------------------------rabbitmqctl list_policies
rabbitmqctl set_policy ha-all <span class="token string">&quot;^&quot;</span> <span class="token string">&#39;{&quot;ha-mode&quot;:&quot;all&quot;,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</span>
rabbitmqctl set_policy <span class="token parameter variable">-p</span> inner_task_system ha-all <span class="token string">&quot;^&quot;</span> <span class="token string">&#39;{&quot;ha-mode&quot;:&quot;all&quot;,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</span>
rabbitmqctl set_policy <span class="token parameter variable">-p</span> outer_task_system ha-all <span class="token string">&quot;^&quot;</span> <span class="token string">&#39;{&quot;ha-mode&quot;:&quot;all&quot;,&quot;ha-sync-mode&quot;:&quot;automatic&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function r(c,p){return n(),s("div",null,l)}const m=a(t,[["render",r],["__file","5ad853.html.vue"]]),d=JSON.parse(`{"path":"/p2024/Linux/others/5ad853.html","title":"centos下安装RabbitMQ","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/others/5ad853.html","lang":"zh-CN","title":"centos下安装RabbitMQ","description":"centos下安装RabbitMQ","isOriginal":true,"date":"2024-03-27T00:00:00.000Z","category":["centos","RabbitMQ"],"tag":["centos","RabbitMQ"],"head":[["meta",{"name":"keywords","content":"centos下安装RabbitMQ,RabbitMQ,centos"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Linux/others/5ad853.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"centos下安装RabbitMQ"}],["meta",{"property":"og:description","content":"centos下安装RabbitMQ"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-09T03:22:27.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:tag","content":"RabbitMQ"}],["meta",{"property":"article:published_time","content":"2024-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-09T03:22:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"centos下安装RabbitMQ\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-09T03:22:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":false,"sticky":false},"headers":[{"level":2,"title":"centos下安装RabbitMQ","slug":"centos下安装rabbitmq","link":"#centos下安装rabbitmq","children":[]},{"level":2,"title":"记录","slug":"记录","link":"#记录","children":[]}],"git":{"createdTime":1712632947000,"updatedTime":1712632947000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.12,"words":337},"filePathRelative":"06.Linux/99.others/20240327_centos下安装RabbitMQ.md","localizedDate":"2024年3月27日","excerpt":"<h2>centos下安装RabbitMQ</h2>\\n<blockquote>\\n<p>这篇记录发生在 <code>2022-05-06</code> , 下面内容不做整理仅作记录,待后续在有RabbitMQ需求的时候做参考。<br>\\n当有新的记录后此记录可能会删除</p>\\n</blockquote>\\n<h2>记录</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>yum <span class=\\"token function\\">install</span> <span class=\\"token parameter variable\\">-y</span> socat\\n\\n-- 安装 Erlang\\nyum <span class=\\"token parameter variable\\">-y</span> <span class=\\"token function\\">install</span> <span class=\\"token function\\">make</span> gcc gcc-c++ kernel-devel m4 ncurses-devel openssl-devel\\n\\n<span class=\\"token builtin class-name\\">cd</span> /opt\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> otp_src_19.0.tar.gz\\n<span class=\\"token builtin class-name\\">cd</span> otp_src_19.0/\\n./configure <span class=\\"token parameter variable\\">--prefix</span><span class=\\"token operator\\">=</span>/usr/local/erlang --enable-smp-support --enable-threads --enable-sctp --enable-kernel-poll --enable-hipe --with-ssl\\n<span class=\\"token function\\">make</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">make</span> <span class=\\"token function\\">install</span>\\n\\n<span class=\\"token function\\">ln</span> <span class=\\"token parameter variable\\">-s</span> /usr/local/erlang/bin/erl /usr/bin/erl\\n\\nerl\\n-- 安装 rabbitMq\\n\\n<span class=\\"token function\\">rpm</span> <span class=\\"token parameter variable\\">-ivh</span> <span class=\\"token parameter variable\\">--nodeps</span> rabbitmq-server-3.6.10-1.el7.noarch.rpm\\n\\n-- 使用\\nsystemctl status rabbitmq-server\\nsystemctl start rabbitmq-server\\nsystemctl restart rabbitmq-server\\n\\n\\n<span class=\\"token function\\">chkconfig</span> rabbitmq-server on\\n\\nrabbitmq-plugins <span class=\\"token builtin class-name\\">enable</span> rabbitmq_management\\nrabbitmqctl  list_users\\nrabbitmqctl add_user admin xxxxxxx\\nrabbitmqctl set_user_tags admin administrator\\nrabbitmqctl list_users\\nrabbitmqctl set_permissions <span class=\\"token parameter variable\\">-p</span> / admin <span class=\\"token string\\">\\".*\\"</span> <span class=\\"token string\\">\\".*\\"</span> <span class=\\"token string\\">\\".*\\"</span>\\n\\nhttp://186.137.xxx.xxx:15672/\\nadmin xxxxxxx\\n\\n-- 插件 rabbitmq_delayed_message_exchange-20171215-3.6.x.ez\\n<span class=\\"token builtin class-name\\">cd</span> /usr/lib/rabbitmq/lib/rabbitmq_server-3.6.10/plugins\\n\\n\\nrabbitmq-plugins <span class=\\"token builtin class-name\\">enable</span> rabbitmq_delayed_message_exchange\\n---------------\\n<span class=\\"token function\\">vim</span> /usr/lib/rabbitmq/bin/rabbitmq-defaults\\n----------集群命令\\n<span class=\\"token builtin class-name\\">cd</span> /var/log/rabbitmq\\n\\n<span class=\\"token builtin class-name\\">cd</span> /var/lib/rabbitmq\\n处理 .erlang.cookie 一致\\n<span class=\\"token function\\">chown</span> <span class=\\"token parameter variable\\">-R</span> rabbitmq:rabbitmq rabbitmq\\n<span class=\\"token function\\">chown</span> <span class=\\"token parameter variable\\">-R</span> rabbitmq:rabbitmq .erlang.cookie\\n\\nrabbitmqctl cluster_status\\nrabbitmqctl reset\\n\\nrabbitmqctl  forget_cluster_node rabbit@os205\\nrabbitmqctl  forget_cluster_node rabbit@os200\\n\\nrabbitmqctl stop_app\\nrabbitmqctl join_cluster rabbit@os201\\nrabbitmqctl start_app\\n\\nrabbitmqctl stop_app\\nrabbitmqctl join_cluster <span class=\\"token parameter variable\\">--ram</span> rabbit@os201\\nrabbitmqctl start_app\\n------------\\nss <span class=\\"token parameter variable\\">-tnlp</span> <span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span>  <span class=\\"token number\\">15672</span>\\nss <span class=\\"token parameter variable\\">-tnlp</span> <span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span>  <span class=\\"token number\\">5672</span>\\nss <span class=\\"token parameter variable\\">-tnlp</span> <span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span>  <span class=\\"token number\\">25672</span>\\nss <span class=\\"token parameter variable\\">-tnlp</span> <span class=\\"token operator\\">|</span><span class=\\"token function\\">grep</span>  <span class=\\"token number\\">4369</span>\\n--------------\\nrabbitmqctl stop_app\\nrabbitmqctl change_cluster_node_type <span class=\\"token function\\">ram</span>\\nrabbitmqtl start_app\\n-----------------------------rabbitmqctl list_policies\\nrabbitmqctl set_policy ha-all <span class=\\"token string\\">\\"^\\"</span> <span class=\\"token string\\">'{\\"ha-mode\\":\\"all\\",\\"ha-sync-mode\\":\\"automatic\\"}'</span>\\nrabbitmqctl set_policy <span class=\\"token parameter variable\\">-p</span> inner_task_system ha-all <span class=\\"token string\\">\\"^\\"</span> <span class=\\"token string\\">'{\\"ha-mode\\":\\"all\\",\\"ha-sync-mode\\":\\"automatic\\"}'</span>\\nrabbitmqctl set_policy <span class=\\"token parameter variable\\">-p</span> outer_task_system ha-all <span class=\\"token string\\">\\"^\\"</span> <span class=\\"token string\\">'{\\"ha-mode\\":\\"all\\",\\"ha-sync-mode\\":\\"automatic\\"}'</span>\\n</code></pre></div>"}`);export{m as comp,d as data};
