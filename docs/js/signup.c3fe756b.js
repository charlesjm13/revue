(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"29c9":function(e,t,r){},4619:function(e,t,r){},"5c9c":function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a=Object(s["J"])("data-v-45494edb");Object(s["t"])("data-v-45494edb");var n={class:"signup"},c=Object(s["h"])("h1",null,"Sign Up",-1),i={key:0,class:"error"},o=Object(s["h"])("label",{for:"user-types",style:{float:"left","padding-top":"5px","padding-left":"20px"}},"User Type:",-1),p={style:{"padding-bottom":"5px","padding-right":"20px"}},d=Object(s["h"])("option",{value:"",disabled:"",selected:""},"Enter user type",-1),u=Object(s["h"])("option",{value:"Current Student"}," Current Student ",-1),l=Object(s["h"])("option",{value:"Prospective Student"}," Prospective Student ",-1),b=Object(s["h"])("br",null,null,-1),h={key:1,style:{"padding-top":"20px"}},m=Object(s["h"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),v={style:{"padding-right":"20px"}},f=Object(s["h"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),j=Object(s["h"])("option",{value:"Knox College"}," Knox College ",-1),g=Object(s["h"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1);Object(s["r"])();var O=a((function(e,t,r,a,O,w){return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("form",{onSubmit:t[9]||(t[9]=Object(s["I"])((function(){return w.signUp&&w.signUp.apply(w,arguments)}),["prevent"]))},[c,Object(s["h"])("p",{class:["error",{"deprecated-error":O.deprecatedError}]},Object(s["A"])(O.error),3),Object(s["H"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return O.firstname=e}),placeholder:"First Name"},null,512),[[s["D"],O.firstname]]),Object(s["H"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lasttname=t}),placeholder:"Last Name"},null,512),[[s["D"],e.lasttname]]),Object(s["H"])(Object(s["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return O.username=e}),placeholder:"Username",ref:"username"},null,512),[[s["D"],O.username]]),Object(s["H"])(Object(s["h"])("input",{type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return O.email=e}),placeholder:"E-Mail"},null,512),[[s["D"],O.email]]),Object(s["H"])(Object(s["h"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return O.password=e}),placeholder:"Password"},null,512),[[s["D"],O.password]]),Object(s["H"])(Object(s["h"])("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return O.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[s["D"],O.passwordRepeat]]),w.passwordsMatch?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("p",i,"Passwords do not match!")),o,Object(s["h"])("div",p,[Object(s["H"])(Object(s["h"])("select",{name:"user-types","onUpdate:modelValue":t[7]||(t[7]=function(e){return O.usertype=e}),style:{float:"right",padding:"5px 0px 5px 0px"}},[d,u,l],512),[[s["C"],O.usertype]])]),b,"Current Student"===O.usertype?(Object(s["q"])(),Object(s["d"])("div",h,[m,Object(s["h"])("div",v,[Object(s["H"])(Object(s["h"])("select",{name:"current-school","onUpdate:modelValue":t[8]||(t[8]=function(e){return O.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[f,j],512),[[s["C"],O.userschool]])])])):Object(s["e"])("",!0),g],32)])})),w=r("c5b9"),y={name:"signup",data:function(){return{error:"",deprecatedError:!1,firstname:"",lastname:"",username:"",password:"",passwordRepeat:"",email:"",usertype:"",userschool:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,w["a"].signup({firstName:this.firstName,lastName:this.lastName,username:this.username,password:this.password,email:this.email,userType:this.userType,userSchool:this.userSchool}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{firstName:function(){this.deprecatedError=!0},lastName:function(){this.deprecatedError=!0},username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0},userType:function(){this.deprecatedError=!0},userSchool:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};r("e335");y.render=O,y.__scopeId="data-v-45494edb";t["default"]=y},b5ae:function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a={class:"home container"},n=Object(s["f"])('<div class="txtcenter"><h1> Questions and Answers</h1></div><div class="contentwrapper"><div class="port-items-wrapper"><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;../../public/assets/classes.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"><img src="&#39;../../public/assets/s.png&#39;" alt=""></div><div class="subtitle"> Classes </div></div></div></div><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;../../public/assets/campuslife.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"><img src="&#39;../../public/assets/h.png&#39;" alt=""></div><div class="subtitle"> Campus Life </div></div></div></div><div class="port-item-wrapper"><div class="port-img-background" style="background-image:url(&#39;../../public/assets/extracurricular.jpg&#39;);"><div class="img-text-wrapper"><div class="logo-wrappper"><img src="&#39;../../public/assets/s.png&#39;" alt=""></div><div class="subtitle"> extracurricular </div></div></div></div></div></div>',2);function c(e,t,r,c,i,o){return Object(s["q"])(),Object(s["d"])("div",a,[n])}var i={name:"QnA"};r("be98");i.render=c;t["default"]=i},ba6b:function(e,t,r){},be98:function(e,t,r){"use strict";r("4619")},bede:function(e,t,r){"use strict";r.r(t);var s=r("7a23"),a=Object(s["J"])("data-v-25a3aa32");Object(s["t"])("data-v-25a3aa32");var n={class:"home container"},c={class:"txtcenter",style:{color:"#FAF7F2","padding-top":"100px"}},i=Object(s["h"])("div",{class:"container"},null,-1);Object(s["r"])();var o=a((function(e,t,r,a,o,p){return Object(s["q"])(),Object(s["d"])("div",n,[Object(s["h"])("div",c,[Object(s["h"])("h1",null," Welcome "+Object(s["A"])(e.$store.state.user.username),1)]),i])})),p={name:"Landing"};r("df01");p.render=o,p.__scopeId="data-v-25a3aa32";t["default"]=p},c5b9:function(e,t,r){"use strict";var s=r("3f4a");t["a"]={signup:function(e){return Object(s["a"])().post("signup",e)},login:function(e){return Object(s["a"])().post("login",e)}}},df01:function(e,t,r){"use strict";r("ba6b")},e335:function(e,t,r){"use strict";r("29c9")}}]);
//# sourceMappingURL=signup.c3fe756b.js.map