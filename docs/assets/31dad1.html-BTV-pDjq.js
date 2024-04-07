import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,a as n,b as e,d as a,e as i}from"./app-D55Cmw5b.js";const r={},p=n("h1",{id:"本文介绍-mc的安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本文介绍-mc的安装"},[n("span",null,"本文介绍，mc的安装")])],-1),d=n("h2",{id:"mc介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mc介绍"},[n("span",null,"mc介绍")])],-1),m=n("strong",null,"==>",-1),u={href:"https://min.io/docs/minio/linux/reference/minio-mc.html",target:"_blank",rel:"noopener noreferrer"},v=i(`<blockquote><p>The MinIO Client mc command line tool provides a modern alternative to UNIX commands like ls, cat, cp, mirror, and diff with support for both filesystems and Amazon S3-compatible cloud storage services.</p></blockquote><blockquote><p>The mc commandline tool is built for compatibility with the AWS S3 API and is tested with MinIO and AWS S3 for expected functionality and behavior.</p></blockquote><blockquote><p>MinIO provides no guarantees for other S3-compatible services, as their S3 API implementation is unknown and therefore unsupported. While mc commands may work as documented, any such usage is at your own risk.</p></blockquote><blockquote><p>mc has the following syntax:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mc</span> <span class="token punctuation">[</span>GLOBALFLAGS<span class="token punctuation">]</span> COMMAND <span class="token parameter variable">--help</span>
See Command Quick Reference <span class="token keyword">for</span> a list of supported commands.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="agplv3" tabindex="-1"><a class="header-anchor" href="#agplv3"><span>AGPLv3</span></a></h4><blockquote><p>mc is AGPLv3 licensed Free and Open Source (FOSS) software.</p></blockquote><blockquote><p>Applications integrating mc may trigger AGPLv3 compliance requirements. MinIO Commercial Licensing is the best option for applications which trigger AGPLv3 obligations where open-sourcing the application is not an option.</p></blockquote><h4 id="version-alignment-with-minio-server" tabindex="-1"><a class="header-anchor" href="#version-alignment-with-minio-server"><span>Version Alignment with MinIO Server</span></a></h4><blockquote><p>The MinIO Client releases separately from the MinIO Server.</p></blockquote><blockquote><p>For best functionality and compatibility, use a MinIO Client version released closely to your MinIO Server version. For example, a MinIO Client released the same day or later than your MinIO Server version.</p></blockquote><blockquote><p>You can install a version of the MinIO Client that is more recent than the MinIO Server version. However, if the MinIO Client version skews too far from the MinIO Server version, you may see increased warnings or errors as a result of the differences. For example, while core S3 APIs around copying (mc cp) may remain unchanged, some features or flags may only be available or stable if the client and server versions are aligned.</p></blockquote><h4 id="大白话解释" tabindex="-1"><a class="header-anchor" href="#大白话解释"><span>大白话解释</span></a></h4><blockquote><p>mc是MinIO的客户端，可以用于管理minio和aws s3。不完全兼容其他S3存储服务。不过对于咱们管理S3和minio来说，已经完全足够。</p></blockquote><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2><ul><li><p>Linux</p><ul><li>64-bit Intel <blockquote><p>官网提供的命令代码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://dl.min.io/client/mc/release/linux-amd64/mc <span class="token punctuation">\\</span>
--create-dirs <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> <span class="token environment constant">$HOME</span>/minio-binaries/mc

<span class="token function">chmod</span> +x <span class="token environment constant">$HOME</span>/minio-binaries/mc
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token environment constant">$HOME</span>/minio-binaries/

<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><span style="color:red;">我实际在机器上的命令代码</span></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://dl.min.io/client/mc/release/linux-amd64/mc --create-dirs <span class="token parameter variable">-o</span> <span class="token function">mc</span>

<span class="token function">chmod</span> +x <span class="token function">mc</span>

<span class="token function">mv</span> <span class="token function">mc</span> /usr/bin/mc

<span class="token function">mc</span> <span class="token parameter variable">--help</span>

<span class="token comment">#─────────────────────────────────────────────────────</span>
NAME:                                                                              
  <span class="token function">mc</span> - MinIO Client <span class="token keyword">for</span> object storage and filesystems.                            
                                                                                  
USAGE:                                                                             
  <span class="token function">mc</span> <span class="token punctuation">[</span>FLAGS<span class="token punctuation">]</span> COMMAND <span class="token punctuation">[</span>COMMAND FLAGS <span class="token operator">|</span> -h<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARGUMENTS<span class="token punctuation">..</span>.<span class="token punctuation">]</span>                           
                                                                                  
COMMANDS:                                                                          
  <span class="token builtin class-name">alias</span>      manage server credentials <span class="token keyword">in</span> configuration <span class="token function">file</span>                       
  <span class="token function">ls</span>         list buckets and objects                                              
  mb         <span class="token function">make</span> a bucket                                                         
  rb         remove a bucket                                                       
  <span class="token function">cp</span>         copy objects                                                          
  <span class="token function">mv</span>         move objects                                                          
  <span class="token function">rm</span>         remove object<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                                                      
  mirror     synchronize object<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to a remote site                                
  <span class="token function">cat</span>        display object contents                                               
  <span class="token function">head</span>       display first <span class="token string">&#39;n&#39;</span> lines of an object                                  
  pipe       stream STDIN to an object                                             
  <span class="token function">find</span>       search <span class="token keyword">for</span> objects                                                    
  sql        run sql queries on objects                                            
  <span class="token function">stat</span>       show object metadata                                                  
  tree       list buckets and objects <span class="token keyword">in</span> a tree <span class="token function">format</span>                             
  <span class="token function">du</span>         summarize disk usage recursively                                      
  retention  <span class="token builtin class-name">set</span> retention <span class="token keyword">for</span> object<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                                           
  legalhold  manage legal hold <span class="token keyword">for</span> object<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                                       
  support    support related commands                                              
  license    license related commands                                              
  share      generate URL <span class="token keyword">for</span> temporary access to an object                        
  version    manage bucket versioning                                              
  ilm        manage bucket lifecycle                                               
  encrypt    manage bucket encryption config                                       
  event      manage object notifications                                           
  <span class="token function">watch</span>      listen <span class="token keyword">for</span> object notification events                                 
  undo       undo PUT/DELETE operations                                            
  anonymous  manage anonymous access to buckets and objects                        
  tag        manage tags <span class="token keyword">for</span> bucket and object<span class="token punctuation">(</span>s<span class="token punctuation">)</span>                                  
  <span class="token function">diff</span>       list differences <span class="token keyword">in</span> object name, size, and <span class="token function">date</span> between two buckets   
  replicate  configure server side bucket replication                              
  admin      manage MinIO servers                                                  
  update     update <span class="token function">mc</span> to latest release                                           
  ready      checks <span class="token keyword">if</span> the cluster is ready or not                                 
  <span class="token function">ping</span>       perform liveness check                                                
  od         measure single stream upload and download                             
  batch      manage batch <span class="token function">jobs</span>                                                     
                                                                                  
GLOBAL FLAGS:                                                                      
  <span class="token parameter variable">--autocompletion</span>              <span class="token function">install</span> auto-completion <span class="token keyword">for</span> your shell             
  --config-dir value, <span class="token parameter variable">-C</span> value  path to configuration folder <span class="token punctuation">(</span>default: <span class="token string">&quot;/root/.mc&quot;</span><span class="token punctuation">)</span>
  --quiet, <span class="token parameter variable">-q</span>                   disable progress bar display                       
  --no-color                    disable color theme 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>64-bit PPC<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://dl.min.io/client/mc/release/linux-ppc64le/mc <span class="token punctuation">\\</span>
--create-dirs <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> ~/minio-binaries/mc

<span class="token function">chmod</span> +x <span class="token environment constant">$HOME</span>/minio-binaries/mc
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token environment constant">$HOME</span>/minio-binaries/

<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>ARM64<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> https://dl.min.io/client/mc/release/linux-arm64/mc <span class="token punctuation">\\</span>
--create-dirs <span class="token punctuation">\\</span>
<span class="token parameter variable">-o</span> ~/minio-binaries/mc

<span class="token function">chmod</span> +x <span class="token environment constant">$HOME</span>/minio-binaries/mc
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token environment constant">$HOME</span>/minio-binaries/

<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>macOs</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> minio/stable/mc
<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Windows</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Open the following <span class="token function">file</span> <span class="token keyword">in</span> a browser: https://dl.min.io/client/mc/release/windows-amd64/mc.exe
或下载 https://dl.min.io/client/mc/release/windows-amd64/mc.exe

Execute the <span class="token function">file</span> by double clicking on it, or by running the following <span class="token keyword">in</span> the <span class="token builtin class-name">command</span> prompt or powershell:

<span class="token punctuation">\\</span>path<span class="token punctuation">\\</span>to<span class="token punctuation">\\</span>mc.exe <span class="token parameter variable">--help</span>

或

添加 mc.exe 到环境变量中，然后在命令行中执行
<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><span style="color:red;">我实际在机器上的命令代码</span></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Invoke-WebRequest <span class="token parameter variable">-Uri</span> <span class="token string">&quot;https://dl.minio.io/client/mc/release/windows-amd64/mc.exe&quot;</span> <span class="token parameter variable">-OutFile</span> <span class="token string">&quot;C:\\Windows\\mc.exe&quot;</span>

<span class="token function">mc</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Source</p><blockquote><p>Installation from source is intended for developers and advanced users and requires a working Golang environment. See How to install Golang.</p></blockquote><blockquote><p>Run the following commands in a terminal environment to install mc from source:</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">install</span> github.com/minio/mc@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>能不用源码安装就不用源码安装，源码安装需要golang环境，而且golang环境安装比较麻烦，所以不推荐</p></blockquote></li></ul><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2><blockquote><p>在使用mc之前，需要先配置环境变量，配置环境变量的命令如下：</p></blockquote>`,18),b=n("br",null,null,-1),k={href:"http://minio-api.xxxx.com",target:"_blank",rel:"noopener noreferrer"},h=n("br",null,null,-1),f=n("br",null,null,-1),g=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bash</span> +o <span class="token function">history</span>
<span class="token function">mc</span> <span class="token builtin class-name">alias</span> <span class="token builtin class-name">set</span> minio http://minio-api.xxxx.com user password
<span class="token function">bash</span> <span class="token parameter variable">-o</span> <span class="token function">history</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查配置情况" tabindex="-1"><a class="header-anchor" href="#检查配置情况"><span>检查配置情况</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mc</span> admin info minio

<span class="token comment"># 输出结果如下</span>
●  http://minio-api.xxxx.com
   Uptime: <span class="token number">1</span> month 
   Version: <span class="token number">2023</span>-09-23T03:47:50Z
   Network: <span class="token number">1</span>/1 OK 
   Drives: <span class="token number">1</span>/1 OK 
   Pool: <span class="token number">1</span>

Pools:
   1st, Erasure sets: <span class="token number">1</span>, Drives per erasure set: <span class="token number">1</span>

<span class="token number">33</span> GiB Used, <span class="token number">5</span> Buckets, <span class="token number">55</span> Objects
<span class="token number">1</span> drive online, <span class="token number">0</span> drives offline

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="情况说明" tabindex="-1"><a class="header-anchor" href="#情况说明"><span>情况说明</span></a></h2><blockquote><p>我在window环境和linux环境（X64）都安装了mc，其他环境未验证。</p></blockquote>`,5);function y(x,w){const s=l("ExternalLinkIcon");return o(),c("div",null,[p,d,n("blockquote",null,[n("p",null,[n("em",null,[m,e(),n("a",u,[e("官方文档"),a(s)])])])]),v,n("blockquote",null,[n("p",null,[e("假定 minio-server已经启动"),b,e(" Minio API访问地址为："),n("a",k,[e("http://minio-api.xxxx.com"),a(s)]),h,e(" 用户名为：user，密码为：password"),f,e(" 预计设置的别名为 minio")])]),g])}const O=t(r,[["render",y],["__file","31dad1.html.vue"]]),M=JSON.parse(`{"path":"/p2024/Linux/minio/31dad1.html","title":"mc安装和环境配置","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Linux/minio/31dad1.html","lang":"zh-CN","title":"mc安装和环境配置","description":"mc安装和环境配置","isOriginal":true,"date":"2024-02-28T00:00:00.000Z","category":["minio"],"tag":["minio","mc安装","mc","环境配置"],"head":[["meta",{"name":"keywords","content":"minio,mc安装,mc,环境配置"}],["meta",{"property":"og:url","content":"https://nstudy.org/p2024/Linux/minio/31dad1.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"mc安装和环境配置"}],["meta",{"property":"og:description","content":"mc安装和环境配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-07T09:07:52.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"minio"}],["meta",{"property":"article:tag","content":"mc安装"}],["meta",{"property":"article:tag","content":"mc"}],["meta",{"property":"article:tag","content":"环境配置"}],["meta",{"property":"article:published_time","content":"2024-02-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-07T09:07:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mc安装和环境配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-07T09:07:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"mc介绍","slug":"mc介绍","link":"#mc介绍","children":[]},{"level":2,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"检查配置情况","slug":"检查配置情况","link":"#检查配置情况","children":[]},{"level":2,"title":"情况说明","slug":"情况说明","link":"#情况说明","children":[]}],"git":{"createdTime":1712480872000,"updatedTime":1712480872000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":3.75,"words":1126},"filePathRelative":"06.Linux/89.minio/20240228_mc安装和环境配置.md","localizedDate":"2024年2月28日","excerpt":"\\n<h2>mc介绍</h2>\\n<blockquote>\\n<p><em><strong>==&gt;</strong> <a href=\\"https://min.io/docs/minio/linux/reference/minio-mc.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官方文档</a></em></p>\\n</blockquote>\\n<blockquote>\\n<p>The MinIO Client mc command line tool provides a modern alternative to UNIX commands like ls, cat, cp, mirror, and diff with support for both filesystems and Amazon S3-compatible cloud storage services.</p>\\n</blockquote>"}`);export{O as comp,M as data};
