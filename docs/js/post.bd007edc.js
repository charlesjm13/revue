(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["post"],{"1e55":function(t,e,n){},"37d3":function(t,e,n){"use strict";n.r(e);var o=n("7a23"),c=Object(o["M"])("data-v-ef4670a8");Object(o["v"])("data-v-ef4670a8");var r={class:"post"},a={class:"main-container"},s={class:"body container"},i={class:"content"},u=Object(o["j"])("title",null,"Delete Post",-1),d=Object(o["j"])("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},null,-1),l=Object(o["j"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),j=Object(o["j"])("title",null,"Cancel",-1),b=Object(o["j"])("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},null,-1),f=Object(o["j"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),v={class:"error"},p=Object(o["i"])("by "),m={class:"post-id"},O={class:"container"},h={class:"error"},w=Object(o["j"])("input",{class:"button",type:"submit",value:"Create comment"},null,-1);Object(o["t"])();var C=c((function(t,e,n,C,g,V){var D=Object(o["A"])("Vote"),M=Object(o["A"])("router-link"),y=Object(o["A"])("Comment"),H=Object(o["A"])("CreateButton");return Object(o["s"])(),Object(o["f"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("div",s,[Object(o["j"])(D,{upvotes:g.upvotes,downvotes:g.downvotes,postId:g.id,onError:e[1]||(e[1]=function(t){g.error=t})},null,8,["upvotes","downvotes","postId"]),Object(o["j"])("div",i,[(Object(o["s"])(),Object(o["f"])("svg",{id:"delete-button",onClick:e[2]||(e[2]=function(){return V.deleteQPost&&V.deleteQPost.apply(V,arguments)}),fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[u,d,l])),Object(o["K"])((Object(o["s"])(),Object(o["f"])("svg",{id:"verify-delete-button",onClick:e[3]||(e[3]=function(t){return g.deleteVerify=!1}),fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[j,b,f],512)),[[o["H"],g.deleteVerify]]),Object(o["j"])("p",v,Object(o["D"])(g.error),1),Object(o["j"])("h1",null,Object(o["D"])(g.title),1),Object(o["j"])("h3",null,[p,Object(o["j"])(M,{to:{name:"User",params:{username:g.user.username}}},{default:c((function(){return[Object(o["i"])(Object(o["D"])(g.user.username),1)]})),_:1},8,["to"]),Object(o["i"])(" on "+Object(o["D"])(g.created),1)]),Object(o["j"])("p",{innerHTML:g.content},null,8,["innerHTML"]),Object(o["j"])("i",m,"ID "+Object(o["D"])(g.id),1)])]),Object(o["j"])("div",O,[Object(o["K"])(Object(o["j"])("h2",null,"Comments",512),[[o["H"],g.comments==[]]]),Object(o["j"])("form",{id:"comment-form",onSubmit:e[5]||(e[5]=Object(o["L"])((function(){return V.createComment&&V.createComment.apply(V,arguments)}),["prevent"]))},[Object(o["j"])("p",h,Object(o["D"])(g.errorCreateComment),1),Object(o["K"])(Object(o["j"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return g.newCommentContent=t}),name:"name",placeholder:"Content",rows:"5",cols:"80"},null,512),[[o["G"],g.newCommentContent]]),w],32),(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(g.comments,(function(t){return Object(o["s"])(),Object(o["f"])(y,{key:t.id,user:t.user,created:t.created,content:t.content},null,8,["user","created","content"])})),128))])]),Object(o["j"])(H)])})),g=Object(o["M"])("data-v-65cc5268");Object(o["v"])("data-v-65cc5268");var V={class:"comment"},D=Object(o["i"])("by "),M={href:""};Object(o["t"])();var y=g((function(t,e,n,c,r,a){return Object(o["s"])(),Object(o["f"])("div",V,[Object(o["j"])("h4",null,[D,Object(o["j"])("a",M,Object(o["D"])(n.user.username),1),Object(o["i"])(" on "+Object(o["D"])(n.created),1)]),Object(o["j"])("p",{innerHTML:n.content},null,8,["innerHTML"])])})),H={name:"comment",props:["user","created","content"],data:function(){return{}}};n("f30c");H.render=y,H.__scopeId="data-v-65cc5268";var L=H,x=n("3ffe"),I=n("e70a"),z=n("7df2"),k={name:"post",components:{Comment:L,Vote:I["a"],CreateButton:x["a"]},data:function(){return{error:null,id:this.$route.params.id,title:"",user:"",created:"",content:"",comments:[],upvotes:[],downvotes:[],deleteVerify:!1,newCommentContent:"",errorCreateComment:null}},methods:{deleteQPost:function(){var t=this;console.log("testing delete button"),this.deleteVerify?z["a"].delete(this.id).then((function(){t.$router.push({name:"QnAç"})})).catch((function(e){t.error=e.response.data.error})):this.deleteVerify=!0},createComment:function(){var t=this;z["a"].addComment(this.id,this.newCommentContent).then((function(e){t.comments=e.data,t.newCommentContent="",t.errorCreateComment=null})).catch((function(e){t.errorCreateComment=e.response.data.error}))}},mounted:function(){var t=this;z["a"].item(this.id).then((function(e){t.title=e.data.title,t.user=e.data.user,t.created=e.data.created,t.content=e.data.content,t.comments=e.data.comments,t.upvotes=e.data.upvotes,t.downvotes=e.data.downvotes})).catch((function(e){t.error=e.response.data.error}))}};n("7e1c");k.render=C,k.__scopeId="data-v-ef4670a8";e["default"]=k},"3ffe":function(t,e,n){"use strict";var o=n("7a23"),c=Object(o["M"])("data-v-5a32a464");Object(o["v"])("data-v-5a32a464");var r=Object(o["j"])("svg",{fill:"#FFFFFF",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[Object(o["j"])("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),Object(o["j"])("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);Object(o["t"])();var a=c((function(t,e,n,c,a,s){return Object(o["K"])((Object(o["s"])(),Object(o["f"])("div",{onClick:e[1]||(e[1]=function(e){return t.$router.push({name:"CreatePost"})}),class:"create-button"},[r],512)),[[o["H"],t.$store.state.isUserLoggedIn]])})),s={name:"create-button"};n("d84f");s.render=a,s.__scopeId="data-v-5a32a464";e["a"]=s},"7df2":function(t,e,n){"use strict";var o=n("3f4a");e["a"]={index:function(){return Object(o["a"])().get("qposts")},create:function(t){return Object(o["a"])().post("qposts",t)},delete:function(t){return Object(o["a"])().delete("qposts/id/"+t)},item:function(t){return Object(o["a"])().get("qposts/id/"+t)},user:function(t){return Object(o["a"])().get("qposts/user/"+t)},addComment:function(t,e){return Object(o["a"])().post("qposts/"+t+"/comments",{content:e})},upVote:function(t){return Object(o["a"])().post("qposts/"+t+"/upvote")},downVote:function(t){return Object(o["a"])().post("qposts/"+t+"/downvote")}}},"7e1c":function(t,e,n){"use strict";n("83e7")},"83e7":function(t,e,n){},8692:function(t,e,n){},bc0d:function(t,e,n){"use strict";n("8692")},d685:function(t,e,n){},d84f:function(t,e,n){"use strict";n("d685")},e70a:function(t,e,n){"use strict";var o=n("7a23"),c={class:"vote"},r=Object(o["j"])("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"},null,-1),a=Object(o["j"])("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1),s=Object(o["j"])("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"},null,-1),i=Object(o["j"])("path",{d:"M0-.75h24v24H0z",fill:"none"},null,-1);function u(t,e,n,u,d,l){return Object(o["s"])(),Object(o["f"])("div",c,[(Object(o["s"])(),Object(o["f"])("svg",{onClick:e[1]||(e[1]=function(){return l.upVote&&l.upVote.apply(l,arguments)}),class:{active:l.votedUp},fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[r,a],2)),Object(o["j"])("p",null,Object(o["D"])(l.voting),1),(Object(o["s"])(),Object(o["f"])("svg",{onClick:e[2]||(e[2]=function(){return l.downVote&&l.downVote.apply(l,arguments)}),class:{active:l.votedDown},fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[s,i],2))])}var d=n("4360"),l=n("46fe"),j={name:"vote",props:["upvotes","downvotes","postId"],data:function(){return{upVoteData:this.upvotes,downVoteData:this.downvotes}},methods:{upVote:function(){var t=this;l["a"].upVote(this.postId).then((function(e){t.upVoteData=e.data.upvotes,t.downVoteData=e.data.downvotes})).catch((function(e){t.$emit("error",e.response.data.error)}))},downVote:function(){var t=this;l["a"].downVote(this.postId).then((function(e){t.upVoteData=e.data.upvotes,t.downVoteData=e.data.downvotes})).catch((function(e){t.$emit("error",e.response.data.error)}))}},computed:{voting:function(){return this.upVoteData.length-this.downVoteData.length},votedUp:function(){if(!d["a"].state.isUserLoggedIn)return!1;for(var t in this.upVoteData)if(this.upVoteData[t].username==d["a"].state.user.username)return!0;return!1},votedDown:function(){if(!d["a"].state.isUserLoggedIn)return!1;for(var t in this.downVoteData)if(this.downVoteData[t].username==d["a"].state.user.username)return!0;return!1}}};n("bc0d");j.render=u;e["a"]=j},f30c:function(t,e,n){"use strict";n("1e55")}}]);
//# sourceMappingURL=post.bd007edc.js.map