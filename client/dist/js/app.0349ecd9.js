(function(e){function t(t){for(var a,l,i=t[0],r=t[1],o=t[2],g=0,b=[];g<i.length;g++)l=i[g],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,i=1;i<s.length;i++){var r=s[i];0!==n[r]&&(a=!1)}a&&(c.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},n={app:0},c=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=r;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0801":function(e,t,s){e.exports=s.p+"img/Logo.87393409.svg"},"1d73":function(e,t,s){"use strict";s("4876")},"286d":function(e,t,s){},"332f":function(e,t,s){"use strict";s("3db4")},"3db4":function(e,t,s){},4876:function(e,t,s){},"4d85":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var a=s("7a23");function n(e,t){const s=Object(a["x"])("nav-bar"),n=Object(a["x"])("router-view");return Object(a["s"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(s),Object(a["i"])(n)],64)}var c=s("0801"),l=s.n(c);const i={class:"hero-head",style:{position:"absolute",width:"100%"}},r={class:"navbar background-color"},o=Object(a["h"])('<div class="navbar-brand"><div class="plate-logo"><a class="navbar-item" href="/home"><img src="'+l.a+'"></a></div></div><div class="plate-item"><span class="navbar-item"><i class="fas fa-image plate-icon"></i><a href="/gallery"> Gallery </a></span></div>',2),u={class:"plate-item"},g={class:"navbar-item"},b=Object(a["g"])("i",{class:"icon fas fa-plus-square plate-icon"},null,-1),d={key:0,class:"plate-item"},p=Object(a["g"])("span",{class:"navbar-item"},[Object(a["g"])("i",{class:"fas fa-user-circle plate-icon"}),Object(a["g"])("a",{href:"/login"}," Login ")],-1),f=[p],O={key:1,class:"plate-item"},j=Object(a["g"])("span",{class:"navbar-item"},[Object(a["g"])("i",{class:"fas fa-user-circle plate-icon"}),Object(a["g"])("a",{href:"/login"}," Logout ")],-1),h=[j];function m(e,t){return Object(a["s"])(),Object(a["f"])("div",i,[Object(a["g"])("nav",r,[o,Object(a["g"])("div",u,[Object(a["g"])("span",g,[b,Object(a["g"])("a",{onClick:t[0]||(t[0]=t=>e.goto("create"))}," Create ")])]),e.isAuth()?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["f"])("div",d,f)),e.isAuth()?(Object(a["s"])(),Object(a["f"])("div",O,h)):Object(a["e"])("",!0)])])}var v={methods:{isAuth(){return this.$store.state.auth.user},goto(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}};s("332f");v.render=m;var y=v,w={components:{NavBar:y}};w.render=n;var k=w,_=s("6c02");const S={id:"login"},I={class:"left-half"},x={class:"center"},L=Object(a["g"])("div",{class:"center-h logo-block"},[Object(a["g"])("img",{src:l.a}),Object(a["g"])("h1",null,"Put yourself to another world")],-1),C={class:"input-block"},P={class:"center-h"},F=Object(a["g"])("div",{class:"divided"},[Object(a["g"])("span"),Object(a["g"])("span",{class:"divider"}),Object(a["g"])("span")],-1),N={class:"center-h panel-create-account"},T=Object(a["g"])("div",{class:"right-half"},null,-1);function U(e,t){return Object(a["s"])(),Object(a["f"])("div",S,[Object(a["g"])("div",I,[Object(a["g"])("div",x,[L,Object(a["g"])("div",C,[e.is_sign_up?Object(a["D"])((Object(a["s"])(),Object(a["f"])("input",{key:0,class:"input is-large panel-input",type:"text",name:"name","onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),placeholder:"Full name"},null,512)),[[a["B"],e.name]]):Object(a["e"])("",!0),Object(a["D"])(Object(a["g"])("input",{class:"input is-large panel-input",type:"text",name:"email","onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t),placeholder:"Email"},null,512),[[a["B"],e.email]]),Object(a["D"])(Object(a["g"])("input",{class:"input is-large panel-input",type:"password",name:"password","onUpdate:modelValue":t[2]||(t[2]=t=>e.password=t),placeholder:"Password"},null,512),[[a["B"],e.password]]),e.message?(Object(a["s"])(),Object(a["f"])("div",{key:1,class:Object(a["o"])(["alert",e.successful?"alert-success":"alert-danger"]),style:{color:"red"}},Object(a["z"])(e.message),3)):Object(a["e"])("",!0)]),Object(a["g"])("div",P,[Object(a["g"])("button",{class:"plate-button button is-large",type:"button",onClick:t[3]||(t[3]=(...t)=>e.enter&&e.enter(...t))},Object(a["z"])(e.buttonValue()),1)]),F,Object(a["g"])("div",N,[Object(a["g"])("h2",null,Object(a["z"])(e.backToValue()),1),Object(a["g"])("button",{onClick:t[4]||(t[4]=t=>{e.is_sign_up=!e.is_sign_up,e.message=""})},Object(a["z"])(e.changerValue()),1)])])]),T])}var V=s("bc3a"),z=s.n(V),A={name:"Login",data(){return{email:"",name:"",password:"",errorMsg:"",message:"",is_sign_up:!1}},methods:{enter(){let e={email:this.email,password:this.password},t="auth/";this.is_sign_up?(e.name=this.name,t+="register"):t+="login",this.$store.dispatch(t,e).then(()=>{this.$router.push("/")},e=>{this.message="*"+(e.response&&e.response.data&&e.response.data.message)||!1})},backToValue(){return this.is_sign_up?"Already have an account?":"Dont't have account yet?"},changerValue(){return this.is_sign_up?"Log in!":"Create!"},buttonValue(){return this.is_sign_up?"Sign up!":"Log in!"}}};s("1d73");A.render=U;var B=A,D=s("d2d9"),J=s.n(D);const M={id:"header"},R={class:"left-half"},E={class:"center"},q=Object(a["g"])("div",{class:"left-h"},[Object(a["g"])("h1",null,"Put yourself to another world")],-1),$={class:"left-h"},H=Object(a["g"])("div",{class:"left-h"},[Object(a["g"])("div",{class:"slogan"},[Object(a["g"])("p",null,"The AI artist generates masterpiece from your photo.")])],-1),G=Object(a["g"])("div",{class:"right-half"},null,-1),K={id:"create"},Q={class:"style-header"},W=Object(a["g"])("h1",null,"Choose your style",-1),X={id:"styles",class:"style-choose"},Y={class:"transfer-block"},Z={class:"input-image"},ee={key:0,style:{color:"red"}},te={id:"preview",class:"img-preview"},se=["src"],ae={class:"plate-file file has-name"},ne={class:"file-label"},ce=Object(a["g"])("span",{class:"backgroud-file-input file-cta plate-input"},[Object(a["g"])("span",{class:"file-icon"},[Object(a["g"])("i",{class:"fas fa-upload"})]),Object(a["g"])("span",{class:"file-label"}," Load file… ")],-1),le={key:0,class:"file-name"},ie={id:"preview",class:"img-preview"},re={key:0,src:J.a},oe=["src"],ue={style:{"text-align":"center"}};function ge(e,t){const s=Object(a["x"])("style-checkbox");return Object(a["s"])(),Object(a["f"])("div",null,[Object(a["g"])("section",M,[Object(a["g"])("div",R,[Object(a["g"])("div",E,[q,Object(a["g"])("div",$,[Object(a["g"])("button",{class:"plate-button button is-large",type:"button",onClick:t[0]||(t[0]=t=>e.goto("create"))}," Try it now ")]),H])]),G]),Object(a["g"])("section",K,[Object(a["g"])("div",Q,[W,Object(a["g"])("div",X,[(Object(a["s"])(!0),Object(a["f"])(a["a"],null,Object(a["w"])(e.allStyles,t=>(Object(a["s"])(),Object(a["d"])(s,{"style-name":t,onClick:s=>e.uncheckStyles(t)},null,8,["style-name","onClick"]))),256))])]),Object(a["g"])("div",Y,[Object(a["g"])("div",Z,[e.no_style?(Object(a["s"])(),Object(a["f"])("span",ee,"*Style can't be blank!")):Object(a["e"])("",!0),Object(a["g"])("div",te,[e.fileUrl?(Object(a["s"])(),Object(a["f"])("img",{key:0,src:e.fileUrl},null,8,se)):Object(a["e"])("",!0)]),Object(a["g"])("div",ae,[Object(a["g"])("label",ne,[Object(a["g"])("input",{class:"file-input",type:"file",accept:"image/*",onChange:t[1]||(t[1]=t=>e.onFileChange(t))},null,32),ce,e.fileName?(Object(a["s"])(),Object(a["f"])("span",le,Object(a["z"])(e.fileName),1)):Object(a["e"])("",!0)])])]),Object(a["g"])("div",ie,[e.isLoading?(Object(a["s"])(),Object(a["f"])("img",re)):Object(a["e"])("",!0),e.resultImage?(Object(a["s"])(),Object(a["f"])("img",{key:1,src:e.resultImage},null,8,oe)):Object(a["e"])("",!0)])]),Object(a["g"])("div",ue,[Object(a["g"])("button",{class:"button is-large",type:"button",style:{"background-color":"#b6ff7c !important","font-family":"'Poppins', sans-serif","font-weight":"700","font-style":"normal"},onClick:t[2]||(t[2]=t=>e.transferImage())}," Transfer! ")])])])}const be={class:"style-checkbox"},de={class:"switch"},pe={class:"slider"},fe={class:"checkbox-text"};function Oe(e,t){return Object(a["s"])(),Object(a["f"])("div",be,[Object(a["g"])("label",de,[Object(a["g"])("input",{class:Object(a["o"])(e.styleName.replace(/ /g,"_").toLowerCase()),type:"checkbox"},null,2),Object(a["g"])("span",pe,[Object(a["g"])("span",fe,Object(a["z"])(e.styleName),1)])])])}var je={props:["styleName"],data(){return{is_checked:""}}};s("b3b6");je.render=Oe;var he=je,me={components:{StyleCheckbox:he},name:"Home",data(){return{no_style:!1,file:null,fileUrl:"",fileName:"",choosedStyle:"",allStyles:["la_muse","rain_princess","scream","udnie","wave","wreck","cube","matta"],resultImage:"",isLoading:!1}},methods:{onFileChange(e){this.resultImage="",this.file=e.target.files[0],this.fileName=this.file.name,this.fileUrl=URL.createObjectURL(this.file)},transferImage(){if(!this.choosedStyle)return this.no_style=!0,null;this.resultImage="",this.isLoading=!0;const e="http://127.0.0.1:8000/api/transfer";let t=new FormData;t.append("file",this.file),t.append("style",this.choosedStyle);let s={header:{"Content-Type":"'multipart/form-data'"},responseType:"blob"};z.a.post(e,t,s).then(e=>{const t=window.URL||window.webkitURL;this.resultImage=t.createObjectURL(e.data),this.isLoading=!1}).catch(e=>{console.log(e)})},uploadFile(e){this.File=e.target.files},dragFile(e){this.File=e.dataTransfer.files},goto(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})},uncheckStyles(e){this.choosedStyle=e,this.no_style=!1;let t=document.querySelector("#styles").querySelectorAll('input[type="checkbox"]');t.forEach(t=>{t.className!=e.replace(/ /g,"_").toLowerCase()&&(t.checked=!1)})}}};s("e69a");me.render=ge;var ve=me;const ye=[{path:"/login",name:"Login",component:B},{path:"/home",name:"Home",component:ve}],we=Object(_["a"])({history:Object(_["b"])("/"),routes:ye});var ke=we,_e=s("5502");const Se="http://127.0.0.1:8000/api/";class Ie{login(e){return z.a.post(Se+"login",e).then(e=>(e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data))}logout(){localStorage.removeItem("user")}register(e){return z.a.post(Se+"signup",e).then(e=>(e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data))}}var xe=new Ie;const Le=JSON.parse(localStorage.getItem("user")),Ce=Le?{status:{loggedIn:!0},user:Le}:{status:{loggedIn:!1},user:null},Pe={namespaced:!0,state:Ce,actions:{login({commit:e},t){return xe.login(t).then(t=>(e("loginSuccess",t),Promise.resolve(t)),t=>(e("loginFailure"),Promise.reject(t)))},logout({commit:e}){xe.logout(),e("logout")},register({commit:e},t){return xe.register(t).then(s=>(e("registerSuccess",t),Promise.resolve(t)),t=>(e("registerFailure"),Promise.reject(t)))}},mutations:{loginSuccess(e,t){e.status.loggedIn=!0,e.user=t},loginFailure(e){e.status.loggedIn=!1,e.user=null},logout(e){e.status.loggedIn=!1,e.user=null},registerSuccess(e,t){e.status.loggedIn=!0,e.user=t},registerFailure(e){e.status.loggedIn=!1}}},Fe=Object(_e["a"])({modules:{auth:Pe}});var Ne=Fe;s("15f5"),s("7051");Object(a["c"])(k).use(ke).use(Ne).mount("#app"),s("b383")},b383:function(e,t,s){},b3b6:function(e,t,s){"use strict";s("4d85")},d2d9:function(e,t,s){e.exports=s.p+"img/loading.a6178f44.gif"},e69a:function(e,t,s){"use strict";s("286d")}});
//# sourceMappingURL=app.0349ecd9.js.map