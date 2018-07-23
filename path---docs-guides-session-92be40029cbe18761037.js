webpackJsonp([30531634831716],{523:function(n,s){n.exports={data:{markdownRemark:{html:'<p>A session is a place to store data that you want to access to across requests. Each user that talks to your bot has a unique session. You can use sessions to store and access user data as they talk to your bot.</p>\n<h2 id="session-expiration"><a href="#session-expiration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Session Expiration</h2>\n<p>You are able to set expired time for session optionally. The default value of expiration is <strong>one year</strong> after <code class="language-text">SessionStore</code> object is created.<br>\nThe expiration should be sent as a <strong>Number of minutes</strong> when you are initializing a <code class="language-text">SessionStore</code> object.</p>\n<p>Here is an example for creating a <code class="language-text">MongoSessionStore</code> object with expired time:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// Session will expire after 10 minutes</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> ConsoleBot<span class="token punctuation">,</span> MongoSessionStore <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  sessionStore<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">MongoSessionStore</span><span class="token punctuation">(</span>\n    <span class="token string">\'mongodb://localhost:27017/\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      collectionName<span class="token punctuation">:</span> <span class="token string">\'session\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token number">10</span>\n  <span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="use-different-session-store"><a href="#use-different-session-store" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use Different Session Store</h2>\n<p>Session store is a place where session data is being stored on server.</p>\n<p>We implement following kinds of session store. All kinds of bots will use memory session store as default.</p>\n<ul>\n<li><strong>memory</strong> - sessions are stored in memory with <a href="https://github.com/isaacs/node-lru-cache">LRU cache</a> and will not be persisted. See <a href="https://github.com/Yoctol/bottender/tree/master/examples/session-memory">example</a></li>\n<li><strong>file</strong> - sessions are stored in <code class="language-text">.sessions</code> by default. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/session-file">example</a></li>\n<li><strong>mongo</strong> - sessions are stored in a mongo database. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/session-mongo">example</a></li>\n<li><strong>redis</strong> - sessions are stored in redis based stores. See\n<a href="https://github.com/Yoctol/bottender/tree/master/examples/session-redis">example</a></li>\n</ul>\n<h2 id="session-store-configuration"><a href="#session-store-configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Session Store Configuration</h2>\n<h3 id="memorysessionstore"><a href="#memorysessionstore" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MemorySessionStore</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> MemorySessionStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bottender\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">MemorySessionStore</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> expiresIn<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Param</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>max</td>\n<td><code class="language-text">Number</code></td>\n<td>The max number of items in memory cache, defaults to \n<code class="language-text">Infinity</code>\n.</td>\n</tr>\n<tr>\n<td>expiresIn</td>\n<td><code class="language-text">Number</code></td>\n<td>Optional. Session expiration time in minutes, defaults to \n<code class="language-text">365 * 24 * 60</code>\n, or 1 year.</td>\n</tr>\n</tbody>\n</table>\n<p>Examples:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">MemorySessionStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">MemorySessionStore</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="filesessionstore"><a href="#filesessionstore" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FileSessionStore</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> FileSessionStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bottender\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">FileSessionStore</span><span class="token punctuation">(</span>dirname<span class="token punctuation">,</span> expiresIn<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Param</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dirname</td>\n<td><code class="language-text">String</code></td>\n<td>Optional. The directory name to store session files, defaults to \n<code class="language-text">.sessions</code>\n.</td>\n</tr>\n<tr>\n<td>expiresIn</td>\n<td><code class="language-text">Number</code></td>\n<td>Optional. Session expiration time in minutes, defaults to \n<code class="language-text">365 * 24 * 60</code>\n, or 1 year.</td>\n</tr>\n</tbody>\n</table>\n<p>Examples:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">FileSessionStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">FileSessionStore</span><span class="token punctuation">(</span><span class="token string">\'my-sessions-folder\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="mongosessionstore"><a href="#mongosessionstore" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MongoSessionStore</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> MongoSessionStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bottender\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">MongoSessionStore</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">,</span> expiresIn<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Param</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>url</td>\n<td><code class="language-text">String</code></td>\n<td>The \n<a href="https://docs.mongodb.com/manual/reference/connection-string/">mongodb connection string</a>\n to your database.</td>\n</tr>\n<tr>\n<td>options</td>\n<td><code class="language-text">Object</code></td>\n<td>Optional. The options object. See below for details.</td>\n</tr>\n<tr>\n<td>options.collectionName</td>\n<td><code class="language-text">String</code></td>\n<td>Optional. The collection name to store the sessions, defaults to \n<code class="language-text">sessions</code>\n.</td>\n</tr>\n<tr>\n<td>expiresIn</td>\n<td><code class="language-text">Number</code></td>\n<td>Optional. Session expiration time in minutes, defaults to \n<code class="language-text">365 * 24 * 60</code>\n, or 1 year.</td>\n</tr>\n</tbody>\n</table>\n<p>Examples:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">MongoSessionStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Connect to 127.0.0.1:27017</span>\n<span class="token keyword">new</span> <span class="token class-name">MongoSessionStore</span><span class="token punctuation">(</span>\n  <span class="token string">\'mongodb://db1.example.net:27017,db2.example.net:2500/?replicaSet=test\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> collectionName<span class="token punctuation">:</span> <span class="token string">\'my-sessions\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="redissessionstore"><a href="#redissessionstore" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>RedisSessionStore</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> RedisSessionStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'bottender\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">RedisSessionStore</span><span class="token punctuation">(</span>redisOption<span class="token punctuation">,</span> expiresIn<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<table>\n<thead>\n<tr>\n<th>Param</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>redisOption</td>\n<td><code class="language-text">String | Number | Object</code></td>\n<td>The \n<a href="https://github.com/luin/ioredis#connect-to-redis">ioredis connection option</a>\n to your database. See below for examples.</td>\n</tr>\n<tr>\n<td>expiresIn</td>\n<td><code class="language-text">Number</code></td>\n<td>Optional. Session expiration time in minutes, defaults to \n<code class="language-text">365 * 24 * 60</code>\n, or 1 year.</td>\n</tr>\n</tbody>\n</table>\n<p>Examples:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">new</span> <span class="token class-name">RedisSessionStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Connect to 127.0.0.1:6379</span>\n<span class="token keyword">new</span> <span class="token class-name">RedisSessionStore</span><span class="token punctuation">(</span><span class="token number">6380</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 127.0.0.1:6380</span>\n<span class="token keyword">new</span> <span class="token class-name">RedisSessionStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  port<span class="token punctuation">:</span> <span class="token number">6379</span><span class="token punctuation">,</span> <span class="token comment">// Redis port</span>\n  host<span class="token punctuation">:</span> <span class="token string">\'127.0.0.1\'</span><span class="token punctuation">,</span> <span class="token comment">// Redis host</span>\n  family<span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 4 (IPv4) or 6 (IPv6)</span>\n  password<span class="token punctuation">:</span> <span class="token string">\'auth\'</span><span class="token punctuation">,</span>\n  db<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// Connect to 127.0.0.1:6380, db 4, using password "authpassword"</span>\n<span class="token keyword">new</span> <span class="token class-name">RedisSessionStore</span><span class="token punctuation">(</span><span class="token string">\'redis://:authpassword@127.0.0.1:6380/4\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="adding-custom-session-drivers"><a href="#adding-custom-session-drivers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding Custom Session Drivers</h2>\n<p>Your custom session driver should implement the <code class="language-text">SessionStore</code> interface. This interface contains just a few simple methods you need to implement. A stubbed store implementation looks something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token comment">// @flow</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Store</span> <span class="token keyword">implements</span> <span class="token class-name">SessionStore</span> <span class="token punctuation">{</span>\n  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span>SessionStore<span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">read</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span>Session <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">write</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">destroy</span><span class="token punctuation">(</span>sessionId<span class="token punctuation">:</span> string<span class="token punctuation">)</span><span class="token punctuation">:</span> Promise<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h2 id="manipulate-session-state"><a href="#manipulate-session-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Manipulate Session State</h2>\n<p>See more on <a href="./Guides-State">state</a>.</p>',frontmatter:{title:"Conversation Session",date:"June 22, 2018",author:null},fields:{path:"docs/Guides-Session.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Guides-Session/"}}}});
//# sourceMappingURL=path---docs-guides-session-92be40029cbe18761037.js.map