(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["create"],{"6bbb":function(t,e,n){"use strict";n("825f")},"7df2":function(t,e,n){"use strict";var o=n("3f4a");e["a"]={index:function(){return Object(o["a"])().get("qposts")},create:function(t){return Object(o["a"])().post("qposts",t)},delete:function(t){return Object(o["a"])().delete("qposts/id/"+t)},item:function(t){return Object(o["a"])().get("qposts/id/"+t)},user:function(t){return Object(o["a"])().get("qposts/user/"+t)},addComment:function(t,e){return Object(o["a"])().post("qposts/"+t+"/comments",{content:e})},upVote:function(t){return Object(o["a"])().post("qposts/"+t+"/upvote")},downVote:function(t){return Object(o["a"])().post("qposts/"+t+"/downvote")}}},"825f":function(t,e,n){},c9c2:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r=Object(o["M"])("data-v-244edbdf");Object(o["v"])("data-v-244edbdf");var c={class:"create-post container"},a=Object(o["j"])("h1",null,"Create Post",-1),u={class:"error"},s=Object(o["j"])("input",{class:"button",type:"submit",value:"Create post"},null,-1);Object(o["t"])();var i=r((function(t,e,n,r,i,p){return Object(o["s"])(),Object(o["f"])("div",c,[a,Object(o["j"])("form",{onSubmit:e[3]||(e[3]=Object(o["L"])((function(){return p.create&&p.create.apply(p,arguments)}),["prevent"])),enctype:"multipart/form-data"},[Object(o["j"])("p",u,Object(o["D"])(i.error),1),Object(o["K"])(Object(o["j"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.title=t}),type:"text",placeholder:"Title",ref:"title"},null,512),[[o["G"],i.title]]),Object(o["K"])(Object(o["j"])("textarea",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return i.content=t}),name:"name",placeholder:"Content",rows:"10",cols:"80"},null,512),[[o["G"],i.content]]),s],32)])})),p=n("7df2"),d={name:"create-post",data:function(){return{title:"",content:"",error:null}},methods:{create:function(){var t=this,e=new FormData;e.append("title",this.title),e.append("content",this.content),console.log(e),p["a"].create(e).then((function(e){t.$router.push({name:"QnA",params:{id:e.data.id}})})).catch((function(e){t.error=e.response.data.error}))},qnaDirect:function(){this.$router.push({name:"QnA"})}},mounted:function(){this.$refs.title.focus()}};n("6bbb");d.render=i,d.__scopeId="data-v-244edbdf";e["default"]=d}}]);
//# sourceMappingURL=create.52a9c879.js.map