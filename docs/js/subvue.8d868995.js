(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subvue"],{"0d48":function(e,t,s){"use strict";s("b0c0"),s("a4d3"),s("e01a");var u=s("7a23"),n={class:"subvue-info"},c=Object(u["h"])("p",null,[Object(u["h"])("strong",null,"Moderators")],-1);function r(e,t,s,r,i,a){var b=Object(u["y"])("router-link");return Object(u["q"])(),Object(u["d"])("div",n,[Object(u["h"])(b,{class:"heading",to:{name:"Subvue",params:{name:s.subvue.permalink}}},{default:Object(u["H"])((function(){return[Object(u["h"])("h2",null,Object(u["B"])(s.subvue.name),1)]})),_:1},8,["to"]),Object(u["h"])("p",null,Object(u["B"])(s.subvue.description),1),i.subscribed?Object(u["e"])("",!0):(Object(u["q"])(),Object(u["d"])("button",{key:0,onClick:t[1]||(t[1]=function(){return a.subscribe&&a.subscribe.apply(a,arguments)}),class:"subscribe-button"},"Subscribe")),i.subscribed?(Object(u["q"])(),Object(u["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return a.unsubscribe&&a.unsubscribe.apply(a,arguments)}),class:"subscribe-button"},"Unsubscibe")):Object(u["e"])("",!0),c,Object(u["h"])("ul",null,[(Object(u["q"])(!0),Object(u["d"])(u["a"],null,Object(u["w"])(s.subvue.moderators,(function(e){return Object(u["q"])(),Object(u["d"])("li",{key:e.username},[Object(u["h"])(b,{to:{name:"User",params:{username:e.username}}},{default:Object(u["H"])((function(){return[Object(u["g"])(Object(u["B"])(e.username),1)]})),_:2},1032,["to"])])})),128))])])}s("4de4");var i=s("aaff"),a=s("bf80"),b={name:"subvue-info",props:["subvue"],data:function(){return{subscribed:!1}},methods:{subscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;i["a"].subscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},unsubscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;i["a"].unsubscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},checkSubscribed:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return!1;a["a"].username(this.$store.state.user.username).then((function(t){var s=t.data.subscribed.filter((function(t){return t.permalink==e.subvue.permalink}));e.subscribed=s.length>0}))}},mounted:function(){this.checkSubscribed()},watch:{subvue:function(){this.checkSubscribed()}}};s("6469");b.render=r;t["a"]=b},"0e34":function(e,t,s){"use strict";s("fb43")},"1c16":function(e,t,s){"use strict";s("b0c0"),s("a4d3"),s("e01a");var u=s("7a23"),n=Object(u["K"])("data-v-45544137");Object(u["t"])("data-v-45544137");var c={class:"post-preview"},r=Object(u["g"])(" by "),i={class:"blue-highlight"},a=Object(u["g"])(" in "),b={class:"blue-highlight"};Object(u["r"])();var o=n((function(e,t,s,o,d,l){var f=Object(u["y"])("router-link"),p=Object(u["y"])("Vote");return Object(u["q"])(),Object(u["d"])("div",c,[Object(u["h"])(f,{to:{name:"Post",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"image-area"},{default:n((function(){return[Object(u["h"])("div",{style:"background-image: url(http://localhost:5000/api/file/"+s.post.image+");",class:"image"},null,4)]})),_:1},8,["to"]),Object(u["h"])(p,{upvotes:s.post.upvotes,downvotes:s.post.downvotes,postId:s.post.id,onError:t[1]||(t[1]=function(t){e.error=t})},null,8,["upvotes","downvotes","postId"]),Object(u["h"])(f,{to:{name:"Post",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"body-area"},{default:n((function(){return[Object(u["h"])("h3",null,[Object(u["x"])(e.$slots,"default",{},void 0,!0)]),Object(u["h"])("p",null,[Object(u["h"])("span",null,"on "+Object(u["B"])(s.post.created),1),Object(u["I"])(Object(u["h"])("span",null,[r,Object(u["h"])("span",i,"u/"+Object(u["B"])(s.post.user.username),1)],512),[[u["F"],!s.hideUser]]),Object(u["I"])(Object(u["h"])("span",null,[a,Object(u["h"])("span",b,"s/"+Object(u["B"])(s.post.subvue.name),1)],512),[[u["F"],!s.hideSubvue]])]),Object(u["h"])("p",null,Object(u["B"])(l.description),1)]})),_:3},8,["to"])])})),d=(s("fb6a"),s("e70a")),l={name:"post-preview",props:{post:{},hideUser:{default:!1},hideSubvue:{default:!1}},components:{Vote:d["a"]},computed:{description:function(){return this.post.content.slice(0,750)+"..."}}};s("0e34");l.render=o,l.__scopeId="data-v-45544137";t["a"]=l},"4c7d":function(e,t,s){},"4de4":function(e,t,s){"use strict";var u=s("23e7"),n=s("b727").filter,c=s("1dde"),r=s("ae40"),i=c("filter"),a=r("filter");u({target:"Array",proto:!0,forced:!i||!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},6469:function(e,t,s){"use strict";s("92e5")},7728:function(e,t,s){"use strict";s("4c7d")},8418:function(e,t,s){"use strict";var u=s("c04e"),n=s("9bf2"),c=s("5c6c");e.exports=function(e,t,s){var r=u(t);r in e?n.f(e,r,c(0,s)):e[r]=s}},"92e5":function(e,t,s){},aaff:function(e,t,s){"use strict";var u=s("3f4a");t["a"]={item:function(e){return Object(u["a"])().get("subvues/"+e)},create:function(e){return Object(u["a"])().post("subvues",e)},posts:function(e){return Object(u["a"])().get("subvues/"+e+"/posts")},subscribe:function(e){return Object(u["a"])().post("subvues/"+e+"/subscribe")},unsubscribe:function(e){return Object(u["a"])().post("subvues/"+e+"/unsubscribe")}}},f073:function(e,t,s){"use strict";s.r(t);var u=s("7a23"),n=Object(u["K"])("data-v-4054d65a");Object(u["t"])("data-v-4054d65a");var c={class:"subvue"},r={class:"container"},i=Object(u["h"])("h1",null,"Recent Posts",-1),a={key:1};Object(u["r"])();var b=n((function(e,t,s,b,o,d){var l=Object(u["y"])("PostPreview"),f=Object(u["y"])("CreateButton"),p=Object(u["y"])("SubvueInfo");return Object(u["q"])(),Object(u["d"])("div",c,[Object(u["h"])("div",r,[i,(Object(u["q"])(!0),Object(u["d"])(u["a"],null,Object(u["w"])(o.posts,(function(e){return Object(u["q"])(),Object(u["d"])(l,{hideSubvue:!0,key:e.id,post:e},{default:n((function(){return[Object(u["g"])(Object(u["B"])(e.title),1)]})),_:2},1032,["post"])})),128)),Object(u["h"])(f)]),o.subvue?(Object(u["q"])(),Object(u["d"])(p,{key:0,class:"subvue-info",subvue:o.subvue},null,8,["subvue"])):(Object(u["q"])(),Object(u["d"])("div",a))])})),o=(s("b0c0"),s("0d48")),d=s("3ffe"),l=s("1c16"),f=s("aaff"),p={name:"subvue",components:{SubvueInfo:o["a"],CreateButton:d["a"],PostPreview:l["a"]},data:function(){return{permalink:this.$route.params.name,posts:[],subvue:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;f["a"].item(this.permalink).then((function(t){e.subvue=t.data})),f["a"].posts(this.permalink).then((function(t){e.posts=t.data}))}},watch:{$route:function(){this.permalink=this.$route.params.name,this.fetchData()}}};s("7728");p.render=b,p.__scopeId="data-v-4054d65a";t["default"]=p},fb43:function(e,t,s){},fb6a:function(e,t,s){"use strict";var u=s("23e7"),n=s("861d"),c=s("e8b5"),r=s("23cb"),i=s("50c4"),a=s("fc6a"),b=s("8418"),o=s("b622"),d=s("1dde"),l=s("ae40"),f=d("slice"),p=l("slice",{ACCESSORS:!0,0:0,1:2}),h=o("species"),v=[].slice,O=Math.max;u({target:"Array",proto:!0,forced:!f||!p},{slice:function(e,t){var s,u,o,d=a(this),l=i(d.length),f=r(e,l),p=r(void 0===t?l:t,l);if(c(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!c(s.prototype)?n(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return v.call(d,f,p);for(u=new(void 0===s?Array:s)(O(p-f,0)),o=0;f<p;f++,o++)f in d&&b(u,o,d[f]);return u.length=o,u}})}}]);
//# sourceMappingURL=subvue.8d868995.js.map