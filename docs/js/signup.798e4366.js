(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"279c":function(e,t,r){},"528b":function(e,t,r){},"5c9c":function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a=Object(s["K"])("data-v-66dc697c");Object(s["t"])("data-v-66dc697c");var n={class:"signup"},c=Object(s["h"])("h1",null,"Sign Up",-1),o={key:0,class:"error"},d=Object(s["h"])("label",{for:"user-types",style:{float:"left","padding-top":"5px","padding-left":"20px"}},"User Type:",-1),i={style:{"padding-bottom":"5px","padding-right":"20px"}},l=Object(s["h"])("option",{value:"",disabled:"",selected:""},"Enter user type",-1),p=Object(s["h"])("option",{value:"Current Student"}," Current Student ",-1),u=Object(s["h"])("option",{value:"Prospective Student"}," Prospective Student ",-1),b=Object(s["h"])("br",null,null,-1),h={key:1,style:{"padding-top":"20px"}},m=Object(s["h"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),f={style:{"padding-right":"20px"}},v=Object(s["h"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),j=Object(s["h"])("option",{value:"Knox College"}," Knox College ",-1),O=Object(s["h"])("br",null,null,-1),g={key:0,style:{"padding-top":"20px"}},w=Object(s["h"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),x={style:{"padding-right":"20px"}},y=Object(s["h"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),E=Object(s["h"])("option",{value:"Current Student"}," Knox College ",-1),S=Object(s["h"])("br",null,null,-1),U=Object(s["h"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1);Object(s["r"])();var k=a((function(e,t,r,a,k,C){return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("form",{onSubmit:t[10]||(t[10]=Object(s["J"])((function(){return C.signUp&&C.signUp.apply(C,arguments)}),["prevent"]))},[c,Object(s["h"])("p",{class:["error",{"deprecated-error":k.deprecatedError}]},Object(s["B"])(k.error),3),Object(s["I"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return k.firstname=e}),placeholder:"First Name"},null,512),[[s["E"],k.firstname]]),Object(s["I"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lasttname=t}),placeholder:"Last Name"},null,512),[[s["E"],e.lasttname]]),Object(s["I"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return k.username=e}),placeholder:"Username",ref:"username"},null,512),[[s["E"],k.username]]),Object(s["I"])(Object(s["h"])("input",{type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return k.email=e}),placeholder:"E-Mail"},null,512),[[s["E"],k.email]]),Object(s["I"])(Object(s["h"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return k.password=e}),placeholder:"Password"},null,512),[[s["E"],k.password]]),Object(s["I"])(Object(s["h"])("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return k.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[s["E"],k.passwordRepeat]]),C.passwordsMatch?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("p",o,"Passwords do not match!")),d,Object(s["h"])("div",i,[Object(s["I"])(Object(s["h"])("select",{name:"user-types","onUpdate:modelValue":t[7]||(t[7]=function(e){return k.usertype=e}),style:{float:"right",padding:"5px 0px 5px 0px"}},[l,p,u],512),[[s["D"],k.usertype]])]),b,"Current Student"===k.usertype?(Object(s["q"])(),Object(s["d"])("div",h,[m,Object(s["h"])("div",f,[Object(s["I"])(Object(s["h"])("select",{name:"current-school","onUpdate:modelValue":t[8]||(t[8]=function(e){return k.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[v,j],512),[[s["D"],k.userschool]])]),O,"Current Student"===e.userType?(Object(s["q"])(),Object(s["d"])("div",g,[w,Object(s["h"])("div",x,[Object(s["I"])(Object(s["h"])("select",{name:"current-school","onUpdate:modelValue":t[9]||(t[9]=function(e){return k.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[y,E],512),[[s["D"],k.userschool]])])])):Object(s["e"])("",!0),S])):Object(s["e"])("",!0),U],32)])})),C=r("c5b9"),I={name:"signup",data:function(){return{error:"",deprecatedError:!1,firstname:"",lastname:"",username:"",password:"",passwordRepeat:"",email:"",usertype:"",userschool:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,C["a"].signup({firstName:this.firstName,lastName:this.lastName,username:this.username,password:this.password,email:this.email,userType:this.userType,userSchool:this.userSchool}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{firstName:function(){this.deprecatedError=!0},lastName:function(){this.deprecatedError=!0},username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0},userType:function(){this.deprecatedError=!0},userSchool:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};r("b4cd");I.render=k,I.__scopeId="data-v-66dc697c";t["default"]=I},"68f8":function(e,t,r){},"82d0":function(e,t,r){"use strict";r("68f8")},b4cd:function(e,t,r){"use strict";r("279c")},b5ae:function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a={class:"home container"},n=Object(s["f"])('<div class="txtcenter"><h1> Questions and Answers</h1></div><div class="contentwrapper"><div class="port-items-wrapper"><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;./assets/classes.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"></div><div class="subtitle"> Classes </div></div></div></div><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;./assets/campuslife.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"></div><div class="subtitle"> Campus Life </div></div></div></div><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;./assets/extracurricular.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"></div><div class="subtitle"> extracurricular </div></div></div></div></div></div>',2);function c(e,t,r,c,o,d){return Object(s["q"])(),Object(s["d"])("div",a,[n])}var o={name:"QnA"};r("82d0");o.render=c;t["default"]=o},bede:function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a=Object(s["K"])("data-v-13553932");Object(s["t"])("data-v-13553932");var n={class:"homecontainer",style:{"background-image":"url(./assets/books.jpg)"}},c={class:"txtcenter",style:{color:"black"}},o=Object(s["h"])("div",{class:"container"},null,-1);Object(s["r"])();var d=a((function(e,t,r,a,d,i){return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("div",c,[Object(s["h"])("h1",null," Hello "+Object(s["B"])(e.$store.state.user.username),1)]),o])})),i={name:"Landing"};r("d4e3");i.render=d,i.__scopeId="data-v-13553932";t["default"]=i},c5b9:function(e,t,r){"use strict";var s=r("3f4a");t["a"]={signup:function(e){return Object(s["a"])().post("signup",e)},login:function(e){return Object(s["a"])().post("login",e)}}},d4e3:function(e,t,r){"use strict";r("528b")}}]);
//# sourceMappingURL=signup.798e4366.js.map