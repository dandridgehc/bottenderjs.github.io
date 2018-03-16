webpackJsonp([0x5cb5f4c9f25d],{662:function(n,s){n.exports={data:{markdownRemark:{html:'<p>This guide will give you some basic concepts of developing a Slack bot. For more detail, check <a href="https://api.slack.com/">official docs</a>.</p>\n<h2 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<ul>\n<li>\n<p>Slack App with following features:</p>\n<ul>\n<li>Event Subscriptions</li>\n<li>Permissions</li>\n<li>Bots</li>\n</ul>\n</li>\n</ul>\n<p>First, create an app on <a href="https://api.slack.com/apps?new_app=1">Slack API</a> site. Then setup its features:</p>\n<ul>\n<li>\n<p>Event Subscriptions:</p>\n<ul>\n<li>Subscribe to <code>message.channels</code> event, so your bot can receive message events.</li>\n<li>Setup webhook URL after your bot server is up.</li>\n</ul>\n</li>\n<li>\n<p>Permissions:</p>\n<ul>\n<li>Add <strong>bot</strong> <a href="https://api.slack.com/bot-users#api_usage">scope</a> to your app</li>\n<li>Copy <strong>Bot User OAuth Access Token</strong> (access token) for later use.</li>\n</ul>\n</li>\n<li>\n<p>Bots:</p>\n<ul>\n<li>Setup your bot\'s display name.</li>\n</ul>\n</li>\n</ul>\n<h2 id="build-your-first-slack-bot"><a href="#build-your-first-slack-bot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build your first Slack bot</h2>\n<p>Check out your app\'s <strong>access token</strong> <a href="https://api.slack.com/apps/">Slack API</a> then fill them in <a href="https://github.com/Yoctol/bottender/blob/master/examples/slack-hello-world/index.js">slack-hello-world</a> example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> SlackBot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'bottender\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SlackBot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accessToken<span class="token punctuation">:</span> <span class="token string">\'__FILL_YOUR_TOKEN_HERE__\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Then run your server and try it out by invite the <strong>Bot User</strong> to a channel and talk to him/her/it!</p>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<p>There are many types of events your bot may receive from Slack, but it\'s up to you whether to subscribe each of them. In Bottender, you can access them via <code>context.event</code>. For more information, check <a href="./APIReference-Event">Event Reference</a> and <a href="https://api.slack.com/events">official docs</a>.</p>\n<p>For the <strong>message</strong> related events, Bottender supports some helpers:</p>\n<ul>\n<li>isMessage</li>\n<li>isChannelsMessage</li>\n<li>isGroupsMessage</li>\n<li>isImMessage</li>\n<li>isMpimMessage</li>\n<li>isText</li>\n<li>message</li>\n<li>text</li>\n</ul>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code>bot<span class="token punctuation">.</span><span class="token function">onEvent</span><span class="token punctuation">(</span><span class="token keyword">async</span> context <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isChannelsMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello, this is a channels message!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isGroupsMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'Hello, this is a groups message!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>isText <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>event<span class="token punctuation">.</span>text <span class="token operator">===</span> <span class="token string">\'How are you?\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sendText</span><span class="token punctuation">(</span><span class="token string">\'I am fine.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> context<span class="token punctuation">.</span><span class="token function">sentText</span><span class="token punctuation">(</span><span class="token string">\'I do not understand.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="slack-specific"><a href="#slack-specific" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Slack specific</h2>\n<h3 id="message-format"><a href="#message-format" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Message format</h3>\n<p>In Bottender, you can use function <code>context.sendText()</code> to send messages. You can format messages with <a href="https://api.slack.com/docs/message-formatting">Slack message formatting</a>. For more information, check <a href="./APIReference-Context">Context Reference</a> and <a href="https://api.slack.com/methods/chat.postMessage">official docs</a>.</p>\n<h3 id="channel"><a href="#channel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Channel</h3>\n<p>You can invite your bot account into a channel. By doing so, the events will create <strong>channel sessions</strong>. Send method <code>context.sendText()</code> will send to the channel. You can still get the sender\'s profile with <code>context.session.user</code>.</p>\n<p>You can access the channel and team members in <code>context.session.channel</code> and <code>context.session.team</code>.</p>\n<h3 id="get-user-info-from-id"><a href="#get-user-info-from-id" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get user info from ID</h3>\n<p>If you want to get user info from user ID, you can find it with <code>session.team</code> info. For example, getting an user\'s name can be:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">function</span> <span class="token function">getNameFromId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> session<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> session<span class="token punctuation">.</span>team<span class="token punctuation">.</span>members<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>member <span class="token operator">=></span> member<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<ul>\n<li><a href="https://api.slack.com/">official docs</a>: official docs of Slack API.</li>\n<li><a href="https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-slack">messaging-api-slack</a></li>\n<li><a href="https://github.com/Yoctol/bottender/blob/master/examples/slack-hello-world/index.js">slack-hello-world</a> example.</li>\n</ul>',frontmatter:{title:"Slack",date:"October 16, 2017",author:null},fields:{path:"docs/Platforms-Slack.md"}},site:{siteMetadata:{title:"Bottender"}}},pathContext:{slug:"/docs/Platforms-Slack/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---docs-platforms-slack-63a240878fe3fca24276.js.map