(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"0e34":function(e,t,a){"use strict";a("fb43")},"18d1":function(e,t,a){},"1c16":function(e,t,a){"use strict";a("b0c0"),a("a4d3"),a("e01a");var r=a("7a23"),s=Object(r["M"])("data-v-45544137");Object(r["v"])("data-v-45544137");var n={class:"post-preview"},o=Object(r["i"])(" by "),c={class:"blue-highlight"},i=Object(r["i"])(" in "),d={class:"blue-highlight"};Object(r["t"])();var u=s((function(e,t,a,u,l,p){var b=Object(r["A"])("router-link"),j=Object(r["A"])("Vote");return Object(r["s"])(),Object(r["f"])("div",n,[Object(r["j"])(b,{to:{name:"Post",params:{subvuePermalink:a.post.subvue.permalink,id:a.post.id}},class:"image-area"},{default:s((function(){return[Object(r["j"])("div",{style:"background-image: url(http://localhost:5000/api/file/"+a.post.image+");",class:"image"},null,4)]})),_:1},8,["to"]),Object(r["j"])(j,{upvotes:a.post.upvotes,downvotes:a.post.downvotes,postId:a.post.id,onError:t[1]||(t[1]=function(t){e.error=t})},null,8,["upvotes","downvotes","postId"]),Object(r["j"])(b,{to:{name:"Post",params:{subvuePermalink:a.post.subvue.permalink,id:a.post.id}},class:"body-area"},{default:s((function(){return[Object(r["j"])("h3",null,[Object(r["z"])(e.$slots,"default",{},void 0,!0)]),Object(r["j"])("p",null,[Object(r["j"])("span",null,"on "+Object(r["D"])(a.post.created),1),Object(r["K"])(Object(r["j"])("span",null,[o,Object(r["j"])("span",c,"u/"+Object(r["D"])(a.post.user.username),1)],512),[[r["H"],!a.hideUser]]),Object(r["K"])(Object(r["j"])("span",null,[i,Object(r["j"])("span",d,"s/"+Object(r["D"])(a.post.subvue.name),1)],512),[[r["H"],!a.hideSubvue]])]),Object(r["j"])("p",null,Object(r["D"])(p.description),1)]})),_:3},8,["to"])])})),l=(a("fb6a"),a("e70a")),p={name:"post-preview",props:{post:{},hideUser:{default:!1},hideSubvue:{default:!1}},components:{Vote:l["a"]},computed:{description:function(){return this.post.content.slice(0,750)+"..."}}};a("0e34");p.render=u,p.__scopeId="data-v-45544137";t["a"]=p},2561:function(e,t,a){},"5c9c":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),s=Object(r["M"])("data-v-0512d5ec");Object(r["v"])("data-v-0512d5ec");var n={class:"signup"},o=Object(r["j"])("h1",null,"Sign Up",-1),c={key:0,class:"error"},i=Object(r["j"])("label",{for:"user-types",style:{float:"left","padding-top":"5px","padding-left":"20px"}},"User Type:",-1),d={style:{"padding-bottom":"5px","padding-right":"20px"}},u=Object(r["j"])("option",{value:"",disabled:"",selected:""},"Enter user type",-1),l=Object(r["j"])("option",{value:"Current Student"}," Current Student ",-1),p=Object(r["j"])("option",{value:"Prospective Student"}," Prospective Student ",-1),b=Object(r["j"])("br",null,null,-1),j={key:1,style:{"padding-top":"20px"}},v=Object(r["j"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),f={style:{"padding-right":"20px"}},O=Object(r["j"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),m=Object(r["j"])("option",{value:"Knox College"}," Knox College ",-1),h=Object(r["j"])("br",null,null,-1),g={key:0,style:{"padding-top":"20px"}},y=Object(r["j"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),w={style:{"padding-right":"20px"}},x=Object(r["j"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),k=Object(r["j"])("option",{value:"Current Student"}," Knox College ",-1),S=Object(r["j"])("br",null,null,-1),U=Object(r["j"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1);Object(r["t"])();var C=s((function(e,t,a,s,C,E){return Object(r["s"])(),Object(r["f"])("div",n,[Object(r["j"])("form",{onSubmit:t[10]||(t[10]=Object(r["L"])((function(){return E.signUp&&E.signUp.apply(E,arguments)}),["prevent"]))},[o,Object(r["j"])("p",{class:["error",{"deprecated-error":C.deprecatedError}]},Object(r["D"])(C.error),3),Object(r["K"])(Object(r["j"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return C.firstname=e}),placeholder:"First Name"},null,512),[[r["G"],C.firstname]]),Object(r["K"])(Object(r["j"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lasttname=t}),placeholder:"Last Name"},null,512),[[r["G"],e.lasttname]]),Object(r["K"])(Object(r["j"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return C.username=e}),placeholder:"Username",ref:"username"},null,512),[[r["G"],C.username]]),Object(r["K"])(Object(r["j"])("input",{type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return C.email=e}),placeholder:"E-Mail"},null,512),[[r["G"],C.email]]),Object(r["K"])(Object(r["j"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return C.password=e}),placeholder:"Password"},null,512),[[r["G"],C.password]]),Object(r["K"])(Object(r["j"])("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return C.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[r["G"],C.passwordRepeat]]),E.passwordsMatch?Object(r["g"])("",!0):(Object(r["s"])(),Object(r["f"])("p",c,"Passwords do not match!")),i,Object(r["j"])("div",d,[Object(r["K"])(Object(r["j"])("select",{name:"user-types","onUpdate:modelValue":t[7]||(t[7]=function(e){return C.usertype=e}),style:{float:"right",padding:"5px 0px 5px 0px"}},[u,l,p],512),[[r["F"],C.usertype]])]),b,"Current Student"===C.usertype?(Object(r["s"])(),Object(r["f"])("div",j,[v,Object(r["j"])("div",f,[Object(r["K"])(Object(r["j"])("select",{name:"current-school","onUpdate:modelValue":t[8]||(t[8]=function(e){return C.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[O,m],512),[[r["F"],C.userschool]])]),h,"Current Student"===e.userType?(Object(r["s"])(),Object(r["f"])("div",g,[y,Object(r["j"])("div",w,[Object(r["K"])(Object(r["j"])("select",{name:"current-school","onUpdate:modelValue":t[9]||(t[9]=function(e){return C.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[x,k],512),[[r["F"],C.userschool]])])])):Object(r["g"])("",!0),S])):Object(r["g"])("",!0),U],32)])})),E=a("c5b9"),K={name:"signup",data:function(){return{error:"",deprecatedError:!1,firstname:"",lastname:"",username:"",password:"",passwordRepeat:"",email:"",usertype:"",userschool:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,E["a"].signup({firstName:this.firstName,lastName:this.lastName,username:this.username,password:this.password,email:this.email,userType:this.userType,userSchool:this.userSchool}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{firstName:function(){this.deprecatedError=!0},lastName:function(){this.deprecatedError=!0},username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0},userType:function(){this.deprecatedError=!0},userSchool:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};a("aa2a");K.render=C,K.__scopeId="data-v-0512d5ec";t["default"]=K},"7c8b":function(e,t,a){"use strict";a("2561")},8418:function(e,t,a){"use strict";var r=a("c04e"),s=a("9bf2"),n=a("5c6c");e.exports=function(e,t,a){var o=r(t);o in e?s.f(e,o,n(0,a)):e[o]=a}},91124:function(e,t,a){"use strict";a("c69e")},aa2a:function(e,t,a){"use strict";a("18d1")},b5ae:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),s=Object(r["M"])("data-v-2bb12389");Object(r["v"])("data-v-2bb12389");var n={class:"home container"},o=Object(r["h"])('<h1 data-v-2bb12389> Questions and Answers</h1><div class="contentwrapper" data-v-2bb12389><div class="port-items-wrapper" data-v-2bb12389><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/classes.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> Classes </div></div></div></div><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/campuslife.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> Campus Life </div></div></div></div><div class="port-item-wrapper" data-v-2bb12389><div class="port-img-background" style="background-image:url(&#39;./assets/extracurricular.jpg&#39;);" data-v-2bb12389><div class="img-text-wrapper" data-v-2bb12389><div class="logo-wrappper" data-v-2bb12389></div><div class="subtitle" data-v-2bb12389> extracurricular </div></div></div></div></div></div>',2);Object(r["t"])();var c=s((function(e,t,a,c,i,d){var u=Object(r["A"])("PostPreview"),l=Object(r["A"])("CreateButton");return Object(r["s"])(),Object(r["f"])("div",n,[o,(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(i.posts,(function(e){return Object(r["s"])(),Object(r["f"])(u,{key:e.id,post:e},{default:s((function(){return[Object(r["i"])(Object(r["D"])(e.title),1)]})),_:2},1032,["post"])})),128)),Object(r["j"])(l)])})),i=a("1c16"),d=a("46fe"),u=a("3ffe"),l={name:"QnA",components:{PostPreview:i["a"],CreateButton:u["a"]},data:function(){return{posts:null}},mounted:function(){var e=this;d["a"].index().then((function(t){e.posts=t.data}))}};a("7c8b");l.render=c,l.__scopeId="data-v-2bb12389";t["default"]=l},bede:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),s=Object(r["M"])("data-v-17cf743a");Object(r["v"])("data-v-17cf743a");var n={class:"homecontainer",style:{"background-image":"url(./assets/books.jpg)"}},o={class:"txtcenter",style:{color:"DarkGraySlate"}},c=Object(r["j"])("h2",{style:{"font-size":"14px"}}," Click around, build your profile, or just chill here and admire our wallpaper.",-1),i=Object(r["j"])("div",{class:"container"},null,-1);Object(r["t"])();var d=s((function(e,t,a,s,d,u){return Object(r["s"])(),Object(r["f"])("div",n,[Object(r["j"])("div",o,[Object(r["j"])("h1",null," Hello, "+Object(r["D"])(e.$store.state.user.username)+"!",1),c]),i])})),u={name:"Landing"};a("91124");u.render=d,u.__scopeId="data-v-17cf743a";t["default"]=u},c5b9:function(e,t,a){"use strict";var r=a("3f4a");t["a"]={signup:function(e){return Object(r["a"])().post("signup",e)},login:function(e){return Object(r["a"])().post("login",e)}}},c69e:function(e,t,a){},fb43:function(e,t,a){},fb6a:function(e,t,a){"use strict";var r=a("23e7"),s=a("861d"),n=a("e8b5"),o=a("23cb"),c=a("50c4"),i=a("fc6a"),d=a("8418"),u=a("b622"),l=a("1dde"),p=a("ae40"),b=l("slice"),j=p("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),f=[].slice,O=Math.max;r({target:"Array",proto:!0,forced:!b||!j},{slice:function(e,t){var a,r,u,l=i(this),p=c(l.length),b=o(e,p),j=o(void 0===t?p:t,p);if(n(l)&&(a=l.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?s(a)&&(a=a[v],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return f.call(l,b,j);for(r=new(void 0===a?Array:a)(O(j-b,0)),u=0;b<j;b++,u++)b in l&&d(r,u,l[b]);return r.length=u,r}})}}]);
//# sourceMappingURL=signup.073c85a0.js.map