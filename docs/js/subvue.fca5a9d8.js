(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subvue"],{"0d48":function(e,t,s){"use strict";s("b0c0"),s("a4d3"),s("e01a");var n=s("7a23"),c={class:"subvue-info"},u=Object(n["j"])("p",null,[Object(n["j"])("strong",null,"Moderators")],-1);function a(e,t,s,a,r,o){var i=Object(n["A"])("router-link");return Object(n["s"])(),Object(n["f"])("div",c,[Object(n["j"])(i,{class:"heading",to:{name:"Subvue",params:{name:s.subvue.permalink}}},{default:Object(n["J"])((function(){return[Object(n["j"])("h2",null,Object(n["D"])(s.subvue.name),1)]})),_:1},8,["to"]),Object(n["j"])("p",null,Object(n["D"])(s.subvue.description),1),r.subscribed?Object(n["g"])("",!0):(Object(n["s"])(),Object(n["f"])("button",{key:0,onClick:t[1]||(t[1]=function(){return o.subscribe&&o.subscribe.apply(o,arguments)}),class:"subscribe-button"},"Subscribe")),r.subscribed?(Object(n["s"])(),Object(n["f"])("button",{key:1,onClick:t[2]||(t[2]=function(){return o.unsubscribe&&o.unsubscribe.apply(o,arguments)}),class:"subscribe-button"},"Unsubscibe")):Object(n["g"])("",!0),u,Object(n["j"])("ul",null,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(s.subvue.moderators,(function(e){return Object(n["s"])(),Object(n["f"])("li",{key:e.username},[Object(n["j"])(i,{to:{name:"User",params:{username:e.username}}},{default:Object(n["J"])((function(){return[Object(n["i"])(Object(n["D"])(e.username),1)]})),_:2},1032,["to"])])})),128))])])}s("4de4");var r=s("aaff"),o=s("bf80"),i={name:"subvue-info",props:["subvue"],data:function(){return{subscribed:!1}},methods:{subscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;r["a"].subscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},unsubscribe:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return this.$router.push({name:"Login"}),!1;r["a"].unsubscribe(this.subvue.permalink).then((function(t){e.$store.dispatch("updateSubscribedSubvues",t.data.subscribed),e.checkSubscribed()}))},checkSubscribed:function(){var e=this;if(!this.$store.state.isUserLoggedIn)return!1;o["a"].username(this.$store.state.user.username).then((function(t){var s=t.data.subscribed.filter((function(t){return t.permalink==e.subvue.permalink}));e.subscribed=s.length>0}))}},mounted:function(){this.checkSubscribed()},watch:{subvue:function(){this.checkSubscribed()}}};s("6469");i.render=a;t["a"]=i},"0dc1":function(e,t,s){"use strict";s("0e7f")},"0dd2":function(e,t,s){},"0e34":function(e,t,s){"use strict";s("fb43")},"0e7f":function(e,t,s){},"1ab8":function(e,t,s){"use strict";s.r(t);s("b0c0");var n=s("7a23"),c=Object(n["M"])("data-v-3efdd9e3");Object(n["v"])("data-v-3efdd9e3");var u={class:"home container"},a=Object(n["j"])("h1",null," SchoolSelector",-1);Object(n["t"])();var r=c((function(e,t,s,r,o,i){var b=Object(n["A"])("SchoolPreview");return Object(n["s"])(),Object(n["f"])("div",u,[a,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(o.schools,(function(e){return Object(n["s"])(),Object(n["f"])(b,{key:e.name},{default:c((function(){return[Object(n["i"])(Object(n["D"])(e.name),1)]})),_:2},1024)})),128))])})),o=(s("a4d3"),s("e01a"),Object(n["M"])("data-v-3af961ce"));Object(n["v"])("data-v-3af961ce");var i={class:"post-preview"},b=Object(n["i"])(" by "),l={class:"blue-highlight"},d=Object(n["i"])(" in "),j={class:"blue-highlight"};Object(n["t"])();var f=o((function(e,t,s,c,u,a){var r=Object(n["A"])("router-link"),f=Object(n["A"])("Vote");return Object(n["s"])(),Object(n["f"])("div",i,[Object(n["j"])(r,{to:{name:"school",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"image-area"},null,8,["to"]),Object(n["j"])(f,{upvotes:s.post.upvotes,downvotes:s.post.downvotes,postId:s.post.id,onError:t[1]||(t[1]=function(t){e.error=t})},null,8,["upvotes","downvotes","postId"]),Object(n["j"])(r,{to:{name:"school",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"body-area"},{default:o((function(){return[Object(n["j"])("h3",null,[Object(n["z"])(e.$slots,"default",{},void 0,!0)]),Object(n["j"])("p",null,[Object(n["j"])("span",null,"on "+Object(n["D"])(s.post.created),1),Object(n["K"])(Object(n["j"])("span",null,[b,Object(n["j"])("span",l,"u/"+Object(n["D"])(s.post.user.username),1)],512),[[n["H"],!s.hideUser]]),Object(n["K"])(Object(n["j"])("span",null,[d,Object(n["j"])("span",j,"s/"+Object(n["D"])(s.post.subvue.name),1)],512),[[n["H"],!s.hideSubvue]])]),Object(n["j"])("p",null,Object(n["D"])(a.description),1)]})),_:3},8,["to"])])})),p=(s("fb6a"),s("e70a")),v={name:"post-preview",props:{post:{},hideUser:{default:!1},hideSubvue:{default:!1}},components:{Vote:p["a"]},computed:{description:function(){return this.post.content.slice(0,750)+"..."}}};s("3c59");v.render=f,v.__scopeId="data-v-3af961ce";var O=v,h=s("bc3a"),m=s.n(h),g=function(){return m.a.create({baseURL:"https://api.data.gov/ed/collegescorecard/v1/schools.json"})},k={index:function(){return g().get("?school.name=Knox%20College&_fields=school.name")}},S={name:"SchoolSelector",components:{SchoolPreview:O},data:function(){return{schools:null}},mounted:function(){var e=this;k.index().then((function(t){e.schools=t.data}))}};s("0dc1");S.render=r,S.__scopeId="data-v-3efdd9e3";t["default"]=S},"1c16":function(e,t,s){"use strict";s("b0c0"),s("a4d3"),s("e01a");var n=s("7a23"),c=Object(n["M"])("data-v-45544137");Object(n["v"])("data-v-45544137");var u={class:"post-preview"},a=Object(n["i"])(" by "),r={class:"blue-highlight"},o=Object(n["i"])(" in "),i={class:"blue-highlight"};Object(n["t"])();var b=c((function(e,t,s,b,l,d){var j=Object(n["A"])("router-link"),f=Object(n["A"])("Vote");return Object(n["s"])(),Object(n["f"])("div",u,[Object(n["j"])(j,{to:{name:"Post",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"image-area"},{default:c((function(){return[Object(n["j"])("div",{style:"background-image: url(http://localhost:5000/api/file/"+s.post.image+");",class:"image"},null,4)]})),_:1},8,["to"]),Object(n["j"])(f,{upvotes:s.post.upvotes,downvotes:s.post.downvotes,postId:s.post.id,onError:t[1]||(t[1]=function(t){e.error=t})},null,8,["upvotes","downvotes","postId"]),Object(n["j"])(j,{to:{name:"Post",params:{subvuePermalink:s.post.subvue.permalink,id:s.post.id}},class:"body-area"},{default:c((function(){return[Object(n["j"])("h3",null,[Object(n["z"])(e.$slots,"default",{},void 0,!0)]),Object(n["j"])("p",null,[Object(n["j"])("span",null,"on "+Object(n["D"])(s.post.created),1),Object(n["K"])(Object(n["j"])("span",null,[a,Object(n["j"])("span",r,"u/"+Object(n["D"])(s.post.user.username),1)],512),[[n["H"],!s.hideUser]]),Object(n["K"])(Object(n["j"])("span",null,[o,Object(n["j"])("span",i,"s/"+Object(n["D"])(s.post.subvue.name),1)],512),[[n["H"],!s.hideSubvue]])]),Object(n["j"])("p",null,Object(n["D"])(d.description),1)]})),_:3},8,["to"])])})),l=(s("fb6a"),s("e70a")),d={name:"post-preview",props:{post:{},hideUser:{default:!1},hideSubvue:{default:!1}},components:{Vote:l["a"]},computed:{description:function(){return this.post.content.slice(0,750)+"..."}}};s("0e34");d.render=b,d.__scopeId="data-v-45544137";t["a"]=d},"3c59":function(e,t,s){"use strict";s("0dd2")},"4c7d":function(e,t,s){},"4de4":function(e,t,s){"use strict";var n=s("23e7"),c=s("b727").filter,u=s("1dde"),a=s("ae40"),r=u("filter"),o=a("filter");n({target:"Array",proto:!0,forced:!r||!o},{filter:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},6469:function(e,t,s){"use strict";s("92e5")},7728:function(e,t,s){"use strict";s("4c7d")},8418:function(e,t,s){"use strict";var n=s("c04e"),c=s("9bf2"),u=s("5c6c");e.exports=function(e,t,s){var a=n(t);a in e?c.f(e,a,u(0,s)):e[a]=s}},"92e5":function(e,t,s){},aaff:function(e,t,s){"use strict";var n=s("3f4a");t["a"]={item:function(e){return Object(n["a"])().get("subvues/"+e)},create:function(e){return Object(n["a"])().post("subvues",e)},posts:function(e){return Object(n["a"])().get("subvues/"+e+"/posts")},subscribe:function(e){return Object(n["a"])().post("subvues/"+e+"/subscribe")},unsubscribe:function(e){return Object(n["a"])().post("subvues/"+e+"/unsubscribe")}}},f073:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),c=Object(n["M"])("data-v-4054d65a");Object(n["v"])("data-v-4054d65a");var u={class:"subvue"},a={class:"container"},r=Object(n["j"])("h1",null,"Recent Posts",-1),o={key:1};Object(n["t"])();var i=c((function(e,t,s,i,b,l){var d=Object(n["A"])("PostPreview"),j=Object(n["A"])("CreateButton"),f=Object(n["A"])("SubvueInfo");return Object(n["s"])(),Object(n["f"])("div",u,[Object(n["j"])("div",a,[r,(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(b.posts,(function(e){return Object(n["s"])(),Object(n["f"])(d,{hideSubvue:!0,key:e.id,post:e},{default:c((function(){return[Object(n["i"])(Object(n["D"])(e.title),1)]})),_:2},1032,["post"])})),128)),Object(n["j"])(j)]),b.subvue?(Object(n["s"])(),Object(n["f"])(f,{key:0,class:"subvue-info",subvue:b.subvue},null,8,["subvue"])):(Object(n["s"])(),Object(n["f"])("div",o))])})),b=(s("b0c0"),s("0d48")),l=s("3ffe"),d=s("1c16"),j=s("aaff"),f={name:"subvue",components:{SubvueInfo:b["a"],CreateButton:l["a"],PostPreview:d["a"]},data:function(){return{permalink:this.$route.params.name,posts:[],subvue:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;j["a"].item(this.permalink).then((function(t){e.subvue=t.data})),j["a"].posts(this.permalink).then((function(t){e.posts=t.data}))}},watch:{$route:function(){this.permalink=this.$route.params.name,this.fetchData()}}};s("7728");f.render=i,f.__scopeId="data-v-4054d65a";t["default"]=f},fb43:function(e,t,s){},fb6a:function(e,t,s){"use strict";var n=s("23e7"),c=s("861d"),u=s("e8b5"),a=s("23cb"),r=s("50c4"),o=s("fc6a"),i=s("8418"),b=s("b622"),l=s("1dde"),d=s("ae40"),j=l("slice"),f=d("slice",{ACCESSORS:!0,0:0,1:2}),p=b("species"),v=[].slice,O=Math.max;n({target:"Array",proto:!0,forced:!j||!f},{slice:function(e,t){var s,n,b,l=o(this),d=r(l.length),j=a(e,d),f=a(void 0===t?d:t,d);if(u(l)&&(s=l.constructor,"function"!=typeof s||s!==Array&&!u(s.prototype)?c(s)&&(s=s[p],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return v.call(l,j,f);for(n=new(void 0===s?Array:s)(O(f-j,0)),b=0;j<f;j++,b++)j in l&&i(n,b,l[j]);return n.length=b,n}})}}]);
//# sourceMappingURL=subvue.fca5a9d8.js.map