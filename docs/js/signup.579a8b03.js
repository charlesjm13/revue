(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"0e34":function(e,t,a){"use strict";a("fb43")},"1c16":function(e,t,a){"use strict";a("b0c0"),a("a4d3"),a("e01a");var s=a("7a23"),r=Object(s["M"])("data-v-45544137");Object(s["v"])("data-v-45544137");var n={class:"post-preview"},c=Object(s["i"])(" by "),o={class:"blue-highlight"},i=Object(s["i"])(" in "),u={class:"blue-highlight"};Object(s["t"])();var d=r((function(e,t,a,d,l,p){var b=Object(s["A"])("router-link"),j=Object(s["A"])("Vote");return Object(s["s"])(),Object(s["f"])("div",n,[Object(s["j"])(b,{to:{name:"Post",params:{subvuePermalink:a.post.subvue.permalink,id:a.post.id}},class:"image-area"},{default:r((function(){return[Object(s["j"])("div",{style:"background-image: url(http://localhost:5000/api/file/"+a.post.image+");",class:"image"},null,4)]})),_:1},8,["to"]),Object(s["j"])(j,{upvotes:a.post.upvotes,downvotes:a.post.downvotes,postId:a.post.id,onError:t[1]||(t[1]=function(t){e.error=t})},null,8,["upvotes","downvotes","postId"]),Object(s["j"])(b,{to:{name:"Post",params:{subvuePermalink:a.post.subvue.permalink,id:a.post.id}},class:"body-area"},{default:r((function(){return[Object(s["j"])("h3",null,[Object(s["z"])(e.$slots,"default",{},void 0,!0)]),Object(s["j"])("p",null,[Object(s["j"])("span",null,"on "+Object(s["D"])(a.post.created),1),Object(s["K"])(Object(s["j"])("span",null,[c,Object(s["j"])("span",o,"u/"+Object(s["D"])(a.post.user.username),1)],512),[[s["H"],!a.hideUser]]),Object(s["K"])(Object(s["j"])("span",null,[i,Object(s["j"])("span",u,"s/"+Object(s["D"])(a.post.subvue.name),1)],512),[[s["H"],!a.hideSubvue]])]),Object(s["j"])("p",null,Object(s["D"])(p.description),1)]})),_:3},8,["to"])])})),l=(a("fb6a"),a("e70a")),p={name:"post-preview",props:{post:{},hideUser:{default:!1},hideSubvue:{default:!1}},components:{Vote:l["a"]},computed:{description:function(){return this.post.content.slice(0,750)+"..."}}};a("0e34");p.render=d,p.__scopeId="data-v-45544137";t["a"]=p},2561:function(e,t,a){},"2b33":function(e,t,a){},"5c9c":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),r=Object(s["M"])("data-v-7c8579c1");Object(s["v"])("data-v-7c8579c1");var n={class:"signup"},c=Object(s["j"])("h1",null,"Sign Up",-1),o={key:0,class:"error"},i=Object(s["j"])("label",{for:"usertype",style:{float:"left","padding-top":"5px","padding-left":"20px"}},"User Type:",-1),u={style:{"padding-bottom":"5px","padding-right":"20px"}},d=Object(s["j"])("option",{value:"",disabled:"",selected:""},"Enter user type",-1),l=Object(s["j"])("option",{value:"Current Student"}," Current Student ",-1),p=Object(s["j"])("option",{value:"Prospective Student"}," Prospective Student ",-1),b=Object(s["j"])("br",null,null,-1),j={key:1,style:{"padding-top":"20px"}},v=Object(s["j"])("label",{for:"userschool",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),f={style:{"padding-right":"20px"}},O=Object(s["j"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),m=Object(s["j"])("option",{value:"Knox College"}," Knox College ",-1),h=Object(s["j"])("br",null,null,-1),g=Object(s["j"])("br",null,null,-1),w=Object(s["j"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1);Object(s["t"])();var y=r((function(e,t,a,r,y,x){return Object(s["s"])(),Object(s["f"])("div",n,[Object(s["j"])("form",{onSubmit:t[9]||(t[9]=Object(s["L"])((function(){return x.signUp&&x.signUp.apply(x,arguments)}),["prevent"]))},[c,Object(s["j"])("p",{class:["error",{"deprecated-error":y.deprecatedError}]},Object(s["D"])(y.error),3),Object(s["K"])(Object(s["j"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return y.firstname=e}),placeholder:"First Name"},null,512),[[s["G"],y.firstname]]),Object(s["K"])(Object(s["j"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return y.lastname=e}),placeholder:"Last Name"},null,512),[[s["G"],y.lastname]]),Object(s["K"])(Object(s["j"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return y.username=e}),placeholder:"Username",ref:"username"},null,512),[[s["G"],y.username]]),Object(s["K"])(Object(s["j"])("input",{type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return y.email=e}),placeholder:"E-Mail"},null,512),[[s["G"],y.email]]),Object(s["K"])(Object(s["j"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return y.password=e}),placeholder:"Password"},null,512),[[s["G"],y.password]]),Object(s["K"])(Object(s["j"])("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return y.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[s["G"],y.passwordRepeat]]),x.passwordsMatch?Object(s["g"])("",!0):(Object(s["s"])(),Object(s["f"])("p",o,"Passwords do not match!")),i,Object(s["j"])("div",u,[Object(s["K"])(Object(s["j"])("select",{name:"usertype","onUpdate:modelValue":t[7]||(t[7]=function(e){return y.usertype=e}),style:{float:"right",padding:"5px 0px 5px 0px"}},[d,l,p],512),[[s["F"],y.usertype]])]),b,"Current Student"===y.usertype?(Object(s["s"])(),Object(s["f"])("div",j,[v,Object(s["j"])("div",f,[Object(s["K"])(Object(s["j"])("select",{name:"userschool","onUpdate:modelValue":t[8]||(t[8]=function(e){return y.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[O,m],512),[[s["F"],y.userschool]])]),h,g])):Object(s["g"])("",!0),w],32)])})),x=a("c5b9"),k={name:"signup",data:function(){return{error:"",deprecatedError:!1,firstname:"",lastname:"",username:"",password:"",passwordRepeat:"",email:"",usertype:"",userschool:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,console.log(this.firstname,this.lastname,this.username,this.password,this.email,this.usertype,this.userschool),x["a"].signup({firstname:this.firstname,lastname:this.lastname,username:this.username,password:this.password,email:this.email,usertype:this.usertype,userschool:this.userschool}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Landing"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{firstName:function(){this.deprecatedError=!0},lastName:function(){this.deprecatedError=!0},username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0},userType:function(){this.deprecatedError=!0},userSchool:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};a("6e14");k.render=y,k.__scopeId="data-v-7c8579c1";t["default"]=k},"6e14":function(e,t,a){"use strict";a("2b33")},"7c8b":function(e,t,a){"use strict";a("2561")},8418:function(e,t,a){"use strict";var s=a("c04e"),r=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var c=s(t);c in e?r.f(e,c,n(0,a)):e[c]=a}},91124:function(e,t,a){"use strict";a("c69e")},b5ae:function(e,t,a){"use strict";a.r(t);var s=a("7a23"),r=Object(s["M"])("data-v-2bb12389");Object(s["v"])("data-v-2bb12389");var n={class:"home container"},c=Object(s["h"])('<h1 data-v-2bb12389> Questions and Answers</h1><div class="contentwrapper" data-v-2bb12389><div class="port-items-wrapper" data-v-2bb12389><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/classes.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> Classes </div></div></div></div><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/campuslife.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> Campus Life </div></div></div></div><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/extracurricular.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> extracurricular </div></div></div></div></div></div>',2);Object(s["t"])();var o=r((function(e,t,a,o,i,u){var d=Object(s["A"])("PostPreview"),l=Object(s["A"])("CreateButton");return Object(s["s"])(),Object(s["f"])("div",n,[c,(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["y"])(i.posts,(function(e){return Object(s["s"])(),Object(s["f"])(d,{key:e.id,post:e},{default:r((function(){return[Object(s["i"])(Object(s["D"])(e.title),1)]})),_:2},1032,["post"])})),128)),Object(s["j"])(l)])})),i=a("1c16"),u=a("46fe"),d=a("3ffe"),l={name:"QnA",components:{PostPreview:i["a"],CreateButton:d["a"]},data:function(){return{posts:null}},mounted:function(){var e=this;u["a"].index().then((function(t){e.posts=t.data}))}};a("7c8b");l.render=o,l.__scopeId="data-v-2bb12389";t["default"]=l},bede:function(e,t,a){"use strict";a.r(t);var s=a("7a23"),r=Object(s["M"])("data-v-17cf743a");Object(s["v"])("data-v-17cf743a");var n={class:"homecontainer",style:{"background-image":"url(./assets/books.jpg)"}},c={class:"txtcenter",style:{color:"DarkGraySlate"}},o=Object(s["j"])("h2",{style:{"font-size":"14px"}}," Click around, build your profile, or just chill here and admire our wallpaper.",-1),i=Object(s["j"])("div",{class:"container"},null,-1);Object(s["t"])();var u=r((function(e,t,a,r,u,d){return Object(s["s"])(),Object(s["f"])("div",n,[Object(s["j"])("div",c,[Object(s["j"])("h1",null," Hello, "+Object(s["D"])(e.$store.state.user.username)+"!",1),o]),i])})),d={name:"Landing"};a("91124");d.render=u,d.__scopeId="data-v-17cf743a";t["default"]=d},c5b9:function(e,t,a){"use strict";var s=a("3f4a");t["a"]={signup:function(e){return Object(s["a"])().post("signup",e)},login:function(e){return Object(s["a"])().post("login",e)}}},c69e:function(e,t,a){},fb43:function(e,t,a){},fb6a:function(e,t,a){"use strict";var s=a("23e7"),r=a("861d"),n=a("e8b5"),c=a("23cb"),o=a("50c4"),i=a("fc6a"),u=a("8418"),d=a("b622"),l=a("1dde"),p=a("ae40"),b=l("slice"),j=p("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),f=[].slice,O=Math.max;s({target:"Array",proto:!0,forced:!b||!j},{slice:function(e,t){var a,s,d,l=i(this),p=o(l.length),b=c(e,p),j=c(void 0===t?p:t,p);if(n(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[v],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(l,b,j);for(s=new(void 0===a?Array:a)(O(j-b,0)),d=0;b<j;b++,d++)b in l&&u(s,d,l[b]);return s.length=d,s}})}}]);
//# sourceMappingURL=signup.579a8b03.js.map