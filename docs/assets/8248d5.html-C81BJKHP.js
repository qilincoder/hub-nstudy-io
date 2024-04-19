import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,e as s}from"./app-CcdNUK7S.js";const t={},i=s(`<h2 id="实现目标" tabindex="-1"><a class="header-anchor" href="#实现目标"><span>实现目标</span></a></h2><blockquote><p>在 ubuntu 系统下安装 conda</p></blockquote><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><blockquote><p>anaconda安装参考文档: <code>https://docs.anaconda.com/free/anaconda/install/linux/</code></p></blockquote><h2 id="环境说明" tabindex="-1"><a class="header-anchor" href="#环境说明"><span>环境说明</span></a></h2><blockquote><p>系统环境: Ubuntu 22.04.3 LTS<br> 安装用户使用 <code>root</code> 用户安装<br> 安装版本 <code>Anaconda3-2024.02-1</code><br> 安装路径 <code>/opt/anaconda3</code></p></blockquote><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><ol><li>下载 <code>Anaconda3-2023.09-Linux-x86_64.sh</code></li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Replace &lt;INSTALLER_VERSION&gt; with the version of the installer file you want to download</span>
<span class="token comment"># For example, https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh</span>
<span class="token comment"># All installers can be found at repo.anaconda.com/archive/</span>
<span class="token function">curl</span> <span class="token parameter variable">-O</span> https://repo.anaconda.com/archive/Anaconda3-Anaconda3-2024.02-1-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>安装</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">bash</span> Anaconda3-2023.09-Linux-x86_64.sh

<span class="token comment"># 成功后输出</span>

Preparing transaction: <span class="token keyword">done</span>
Executing transaction: <span class="token operator">|</span>

    Installed package of scikit-learn can be accelerated using scikit-learn-intelex.
    More details are available here: https://intel.github.io/scikit-learn-intelex

    For example:

        $ conda <span class="token function">install</span> scikit-learn-intelex
        $ python <span class="token parameter variable">-m</span> sklearnex my_application.py


                                                                                                                                                                                 <span class="token keyword">done</span>
installation finished.
Do you wish to update your shell profile to automatically initialize conda?
This will activate conda on startup and change the <span class="token builtin class-name">command</span> prompt when activated.
If you<span class="token string">&#39;d prefer that conda&#39;</span>s base environment not be activated on startup,
   run the following <span class="token builtin class-name">command</span> when conda is activated:

conda config <span class="token parameter variable">--set</span> auto_activate_base <span class="token boolean">false</span>

You can undo this by running <span class="token variable"><span class="token variable">\`</span>conda init <span class="token parameter variable">--reverse</span> <span class="token environment constant">$SHELL</span><span class="token variable">\`</span></span>? <span class="token punctuation">[</span>yes<span class="token operator">|</span>no<span class="token punctuation">]</span>
<span class="token punctuation">[</span>no<span class="token punctuation">]</span> <span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> no

You have chosen to not have conda modify your shell scripts at all.
To activate conda<span class="token string">&#39;s base environment in your current shell session:

eval &quot;$(/opt/anaconda3/bin/conda shell.YOUR_SHELL_NAME hook)&quot;

To install conda&#39;</span>s shell functions <span class="token keyword">for</span> easier access, first activate, then:

conda init



<span class="token comment"># 静默安装</span>
<span class="token function">bash</span> Anaconda3-2024.02-1-Linux-x86_64.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-p</span> /opt/anaconda3 <span class="token parameter variable">-f</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>配置</li></ol><blockquote><p>cd /opt/anaconda3</p></blockquote><blockquote><p>./bin/conda init bash<br> cat .bashrc</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># &gt;&gt;&gt; conda initialize &gt;&gt;&gt;</span>
<span class="token comment"># !! Contents within this block are managed by &#39;conda init&#39; !!</span>
<span class="token assign-left variable">__conda_setup</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>&#39;/opt/anaconda3/bin/conda<span class="token string">&#39; &#39;</span>shell.bash<span class="token string">&#39; &#39;</span>hook&#39; <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /dev/null<span class="token variable">)</span></span>&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable">$__conda_setup</span>&quot;</span>
<span class="token keyword">else</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;/opt/anaconda3/etc/profile.d/conda.sh&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">.</span> <span class="token string">&quot;/opt/anaconda3/etc/profile.d/conda.sh&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/opt/anaconda3/bin:<span class="token environment constant">$PATH</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">unset</span> __conda_setup
<span class="token comment"># &lt;&lt;&lt; conda initialize &lt;&lt;&lt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>回退 参考 <code>./bin/conda init --reverse bash</code></p></blockquote><blockquote><p>conda config --set auto_activate_base false</p></blockquote><blockquote><p>cat ~/.condarc</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>auto_activate_base: <span class="token boolean">false</span>

pkgs_dirs:
  - /data/anaconda3/pkgs
  - /opt/anaconda3/pkgs

envs_dirs:
  - /data/anaconda3/envs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>创建环境</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> conda create <span class="token parameter variable">--name</span> hello <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.8</span>

conda activate hello
conda deactivate

conda <span class="token function">env</span> remove <span class="token parameter variable">--name</span> hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>其他命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
conda <span class="token function">env</span> list

conda list
conda info
conda search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多环境问题解决" tabindex="-1"><a class="header-anchor" href="#多环境问题解决"><span>多环境问题解决</span></a></h2><blockquote><p>问题：前文说道我的安装用户是<code>root</code>, 安装后 <code>conda env list</code> 显示的是 还有其他用户创建的环境，看着有点奇怪，想去掉，但是不能影响其他用户</p></blockquote>`,25),l=[i];function o(c,d){return a(),e("div",null,l)}const u=n(t,[["render",o],["__file","8248d5.html.vue"]]),v=JSON.parse(`{"path":"/p2024/Python/8248d5.html","title":"ubuntu安装conda","lang":"zh-CN","frontmatter":{"permalink":"/p2024/Python/8248d5.html","lang":"zh-CN","title":"ubuntu安装conda","description":"ubuntu安装conda","isOriginal":true,"date":"2024-04-16T00:00:00.000Z","category":["python","conda"],"tag":["python","conda"],"head":[["meta",{"name":"keywords","content":"ubuntu安装conda, python,conda"}],["meta",{"property":"og:url","content":"https://hub.nstudy.org/p2024/Python/8248d5.html"}],["meta",{"property":"og:site_name","content":"Jack's 新学习基地"}],["meta",{"property":"og:title","content":"ubuntu安装conda"}],["meta",{"property":"og:description","content":"ubuntu安装conda"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:50:23.000Z"}],["meta",{"property":"article:author","content":"Jack"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"conda"}],["meta",{"property":"article:published_time","content":"2024-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:50:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ubuntu安装conda\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-19T07:50:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Jack\\",\\"url\\":\\"https://hub.nstudy.org\\"}]}"]],"star":true,"sticky":true},"headers":[{"level":2,"title":"实现目标","slug":"实现目标","link":"#实现目标","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]},{"level":2,"title":"环境说明","slug":"环境说明","link":"#环境说明","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":2,"title":"多环境问题解决","slug":"多环境问题解决","link":"#多环境问题解决","children":[]}],"git":{"createdTime":1713513023000,"updatedTime":1713513023000,"contributors":[{"name":"lizhiquan","email":"lizhiquan@jianke.com","commits":1}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"05.Python/20240416_ubuntu安装conda.md","localizedDate":"2024年4月16日","excerpt":"<h2>实现目标</h2>\\n<blockquote>\\n<p>在 ubuntu 系统下安装 conda</p>\\n</blockquote>\\n<h2>参考资料</h2>\\n<blockquote>\\n<p>anaconda安装参考文档: <code>https://docs.anaconda.com/free/anaconda/install/linux/</code></p>\\n</blockquote>\\n<h2>环境说明</h2>\\n<blockquote>\\n<p>系统环境: Ubuntu 22.04.3 LTS<br>\\n安装用户使用 <code>root</code> 用户安装<br>\\n安装版本 <code>Anaconda3-2024.02-1</code><br>\\n安装路径 <code>/opt/anaconda3</code></p>\\n</blockquote>"}`);export{u as comp,v as data};
