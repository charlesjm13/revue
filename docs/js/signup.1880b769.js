(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"2b9e":function(e,t,r){"use strict";r("5bd1")},"5bd1":function(e,t,r){},"5c9c":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s=Object(n["J"])("data-v-09999570");Object(n["t"])("data-v-09999570");var a={class:"signup"},o=Object(n["h"])("h1",null,"Sign Up",-1),c={key:0,class:"error"},u=Object(n["h"])("label",{for:"user-types",style:{float:"left","padding-top":"5px","padding-left":"20px"}},"User Type:",-1),p={style:{"padding-bottom":"5px","padding-right":"20px"}},i=Object(n["h"])("option",{value:"",disabled:"",selected:""},"Enter user type",-1),d=Object(n["h"])("option",{value:"Current Student"}," Current Student ",-1),l=Object(n["h"])("option",{value:"Prospective Student"}," Prospective Student ",-1),h=Object(n["h"])("br",null,null,-1),b={key:1,style:{"padding-top":"20px"}},f=Object(n["h"])("label",{for:"current-school",style:{float:"left","padding-bottom":"25px","padding-top":"5px","padding-left":"20px"}},"Current School:",-1),m={style:{"padding-right":"20px"}},j=Object(n["h"])("option",{value:"",disabled:"",selected:""},"Select a school",-1),O=Object(n["h"])("option",{value:"Current Student"}," Knox College ",-1),g=Object(n["h"])("input",{class:"button",type:"submit",value:"Sign Up"},null,-1);Object(n["r"])();var w=s((function(e,t,r,s,w,y){return Object(n["q"])(),Object(n["d"])("div",a,[Object(n["h"])("form",{onSubmit:t[9]||(t[9]=Object(n["I"])((function(){return y.signUp&&y.signUp.apply(y,arguments)}),["prevent"]))},[o,Object(n["h"])("p",{class:["error",{"deprecated-error":w.deprecatedError}]},Object(n["A"])(w.error),3),Object(n["H"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return w.firstname=e}),placeholder:"First Name"},null,512),[[n["D"],w.firstname]]),Object(n["H"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lasttname=t}),placeholder:"Last Name"},null,512),[[n["D"],e.lasttname]]),Object(n["H"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return w.username=e}),placeholder:"Username",ref:"username"},null,512),[[n["D"],w.username]]),Object(n["H"])(Object(n["h"])("input",{type:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return w.email=e}),placeholder:"E-Mail"},null,512),[[n["D"],w.email]]),Object(n["H"])(Object(n["h"])("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=function(e){return w.password=e}),placeholder:"Password"},null,512),[[n["D"],w.password]]),Object(n["H"])(Object(n["h"])("input",{type:"password","onUpdate:modelValue":t[6]||(t[6]=function(e){return w.passwordRepeat=e}),placeholder:"Repeat Password"},null,512),[[n["D"],w.passwordRepeat]]),y.passwordsMatch?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("p",c,"Passwords do not match!")),u,Object(n["h"])("div",p,[Object(n["H"])(Object(n["h"])("select",{name:"user-types","onUpdate:modelValue":t[7]||(t[7]=function(e){return w.usertype=e}),style:{float:"right",padding:"5px 0px 5px 0px"}},[i,d,l],512),[[n["C"],w.usertype]])]),h,"Current Student"===e.userType?(Object(n["q"])(),Object(n["d"])("div",b,[f,Object(n["h"])("div",m,[Object(n["H"])(Object(n["h"])("select",{name:"current-school","onUpdate:modelValue":t[8]||(t[8]=function(e){return w.userschool=e}),style:{float:"right",padding:"5px 28px 5px 0px"}},[j,O],512),[[n["C"],w.userschool]])])])):Object(n["e"])("",!0),g],32)])})),y=r("c5b9"),v={name:"signup",data:function(){return{error:"",deprecatedError:!1,firstname:"",lastname:"",username:"",password:"",passwordRepeat:"",email:"",usertype:"",userschool:""}},methods:{signUp:function(){var e=this;this.passwordsMatch&&(this.deprecatedError=!1,y["a"].signup({firstName:this.firstName,lastName:this.lastName,username:this.username,password:this.password,email:this.email,userType:this.userType,userSchool:this.userSchool}).then((function(t){e.$store.dispatch("setToken",t.data.token),e.$store.dispatch("setUser",t.data.user),e.$router.push({name:"Home"})})).catch((function(t){e.error=t.response.data.error})))}},computed:{passwordsMatch:function(){return this.password==this.passwordRepeat}},watch:{firstName:function(){this.deprecatedError=!0},lastName:function(){this.deprecatedError=!0},username:function(){this.deprecatedError=!0},password:function(){this.deprecatedError=!0},passwordRepeat:function(){this.deprecatedError=!0},email:function(){this.deprecatedError=!0},userType:function(){this.deprecatedError=!0},userSchool:function(){this.deprecatedError=!0}},mounted:function(){this.$refs.username.focus()}};r("cab2");v.render=w,v.__scopeId="data-v-09999570";t["default"]=v},b5ae:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),s={class:"home container"},a=Object(n["h"])("div",{class:"txtcenter"},[Object(n["h"])("h1",null," Questions and Answers"),Object(n["h"])("h2",null,' We will be working on "working qna" section in sprint 2')],-1);function o(e,t,r,o,c,u){return Object(n["q"])(),Object(n["d"])("div",s,[a])}var c={name:"QnA"};r("2b9e");c.render=o;t["default"]=c},bfb3:function(e,t,r){},c5b9:function(e,t,r){"use strict";var n=r("3f4a");t["a"]={signup:function(e){return Object(n["a"])().post("signup",e)},login:function(e){return Object(n["a"])().post("login",e)}}},cab2:function(e,t,r){"use strict";r("bfb3")}}]);
//# sourceMappingURL=signup.1880b769.js.map