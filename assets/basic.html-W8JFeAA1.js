import{_ as s,c as a,a as e,o as t}from"./app-DsOgR8nk.js";const i={};function p(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="basics-of-c" tabindex="-1"><a class="header-anchor" href="#basics-of-c"><span>Basics of C++</span></a></h1><p>Every time we start to learn a new language, it&#39;s a good idea to start with a simple <strong>&quot;Hello, World!&quot;!</strong></p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello, World!&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In C++, we use the <code>#include</code> directive to include libraries or header files into our program.</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The entry point of a C++ program is the <code>main</code> function. Every C++ program must have a <code>main</code> function.</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Your code starts here!</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <em>input/output</em> library <code>iostream</code> is a part of the C++ Standard Library and is used to perform input and output operations.</p><p>One of the most useful is <code>std::cout</code>, which is used to output data to the console. <code>std::endl</code> is used to insert a newline character and flush the stream.</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> <span class="token comment">//for std::cout</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello, World!&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span> <span class="token comment">// print Hello world! to console</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <strong>insertion operator</strong> (<code>&lt;&lt;</code>) can be used multiple times in a single statement to concatenate (link together) multiple pieces of output.</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span> <span class="token comment">// for std::cout</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello&quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; world!&quot;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The program will output <code>Hello world!</code> to the console.</p><h3 id="std-endl-vs-n" tabindex="-1"><a class="header-anchor" href="#std-endl-vs-n"><span><code>std::endl</code> vs <code>\\n</code></span></a></h3><p>Using <code>std::endl</code> is often inefficient, as it actually does two jobs: it outputs a newline (moving the cursor to the next line of the console), and it flushes the buffer (which is slow).</p><p>To output a newline without flushing the output buffer, we use <code>\\n</code> instead.</p><h3 id="std-cin" tabindex="-1"><a class="header-anchor" href="#std-cin"><span><code>std::cin</code></span></a></h3><p><code>std::cin</code> is another predefined variable in the iostream library. Whereas <code>std::cout</code> prints data to the console (using the insertion operator <code>&lt;&lt;</code> to provide the data), <code>std::cin</code> (which stands for “character input”) <strong>reads input from keyboard</strong>. We typically use the extraction operator <code>&gt;&gt;</code> to put the input data in a variable.</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span>  <span class="token comment">// for std::cout and std::cin</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Enter a number: &quot;</span><span class="token punctuation">;</span> <span class="token comment">// ask user for a number</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">int</span> x<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>       <span class="token comment">// define variable x to hold user input (and value-initialize it)</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> x<span class="token punctuation">;</span> <span class="token comment">// get number from keyboard and store it in variable x</span></span>
<span class="line"></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;You entered &quot;</span> <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization"><span>Initialization</span></a></h2><h3 id="different-forms-of-initialization" tabindex="-1"><a class="header-anchor" href="#different-forms-of-initialization"><span>Different forms of initialization:</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">int</span> a<span class="token punctuation">;</span>         <span class="token comment">// default-initialization (no initializer)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Traditional initialization forms:</span></span>
<span class="line"><span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>     <span class="token comment">// copy-initialization (initial value after equals sign)</span></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">c</span> <span class="token punctuation">(</span> <span class="token number">6</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// direct-initialization (initial value in parenthesis)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Modern initialization forms (preferred):</span></span>
<span class="line"><span class="token keyword">int</span> d <span class="token punctuation">{</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>   <span class="token comment">// direct-list-initialization (initial value in braces)</span></span>
<span class="line"><span class="token keyword">int</span> e <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">// value-initialization (empty braces)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The modern way to initialize objects in C++ is to use a form of initialization that makes use of curly braces. This is called list-initialization (or uniform initialization or brace initialization).</p><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">int</span> width <span class="token punctuation">{</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// direct-list-initialization of initial value 5 into variable width (preferred)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="instantiation" tabindex="-1"><a class="header-anchor" href="#instantiation"><span>Instantiation</span></a></h3><p>The term <strong>instantation</strong> is a fancy word that means a variable has been <strong>created (allocated)</strong> and <strong>initialized (this includes default initialization)</strong> . An instantiated object is sometimes called an instance. Most often, this term is applied to class type objects, but it is occasionally applied to objects of other types as well.</p><h3 id="unused-initialized-variables-warnings" tabindex="-1"><a class="header-anchor" href="#unused-initialized-variables-warnings"><span>Unused initialized variables warnings</span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">int</span> x <span class="token punctuation">{</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// variable x defined</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// but not used anywhere</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will result in a warning, as the variable <code>x</code> is defined but not used.</p><h3 id="the-maybe-unused-attribute-c-17" tabindex="-1"><a class="header-anchor" href="#the-maybe-unused-attribute-c-17"><span>The <code>[[maybe_unused]]</code> attribute <strong>(c++17)</strong></span></a></h3><div class="language-cpp line-numbers-mode" data-highlighter="prismjs" data-ext="cpp" data-title="cpp"><pre><code><span class="line"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token punctuation">[</span>maybe_unused<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token keyword">double</span> pi <span class="token punctuation">{</span> <span class="token number">3.14159</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">// Don&#39;t complain if pi is unused</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token punctuation">[</span>maybe_unused<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token keyword">double</span> gravity <span class="token punctuation">{</span> <span class="token number">9.8</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Don&#39;t complain if gravity is unused</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token punctuation">[</span>maybe_unused<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token keyword">double</span> phi <span class="token punctuation">{</span> <span class="token number">1.61803</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Don&#39;t complain if phi is unused</span></span>
<span class="line"></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> pi <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> phi <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// The compiler will no longer warn about gravity not being used</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31)]))}const c=s(i,[["render",p],["__file","basic.html.vue"]]),r=JSON.parse('{"path":"/CPP/basic.html","title":"Basics of C++","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"std::endl vs \\\\n","slug":"std-endl-vs-n","link":"#std-endl-vs-n","children":[]},{"level":3,"title":"std::cin","slug":"std-cin","link":"#std-cin","children":[]},{"level":2,"title":"Initialization","slug":"initialization","link":"#initialization","children":[{"level":3,"title":"Different forms of initialization:","slug":"different-forms-of-initialization","link":"#different-forms-of-initialization","children":[]},{"level":3,"title":"Instantiation","slug":"instantiation","link":"#instantiation","children":[]},{"level":3,"title":"Unused initialized variables warnings","slug":"unused-initialized-variables-warnings","link":"#unused-initialized-variables-warnings","children":[]},{"level":3,"title":"The [[maybe_unused]] attribute (c++17)","slug":"the-maybe-unused-attribute-c-17","link":"#the-maybe-unused-attribute-c-17","children":[]}]}],"git":{"updatedTime":1731752824000,"contributors":[{"name":"pingzhihe","email":"pzh1760473545@gmail.com","commits":1,"url":"https://github.com/pingzhihe"}]},"filePathRelative":"CPP/basic.md"}');export{c as comp,r as data};