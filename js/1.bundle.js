(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},43:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(44),s=a.n(r);a(45);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],l=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=e=>{var t=o(Object(l.useState)(""),2),a=t[0],r=t[1],i=o(Object(l.useState)(""),2),c=i[0],m=i[1],u=o(Object(l.useState)(""),2),d=u[0],p=u[1],h=o(Object(l.useState)(!0),2),g=h[0],b=h[1],v=o(Object(l.useState)(!0),2),E=v[0],f=v[1],w=o(Object(l.useState)(!1),2),y=w[0],N=w[1],j=o(Object(l.useState)(!1),2),S=j[0],O=j[1];function k(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var R="We will be happy to meet you online and showcase our solutions.";return R=e.description?e.description:R,n.a.createElement("section",{className:"contact-form"+(S?" sent":"")},n.a.createElement("div",{className:"form-container",id:"form"},n.a.createElement("h1",{className:"form-title"},S?"Thank you.":e.title||"Request feedback"),n.a.createElement("p",{className:"form-text"},S?"Our managers will contact you as soon as possible to showcase our solutions.":R),!S&&n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"input"+(g?"":" error")},n.a.createElement("span",null,"Name"),n.a.createElement("input",{type:"text",onBlur:()=>{b(a.trim().length>0)},name:"name",value:a,onChange:e=>r(e.target.value)})),n.a.createElement("div",{className:"input"+(E?"":" error")},n.a.createElement("span",null,"E-mail"),n.a.createElement("input",{type:"text",onBlur:()=>{f(k(c))},name:"mail",value:c,onChange:e=>m(e.target.value)})),n.a.createElement("div",{className:"input"},n.a.createElement("span",null,"Tell us about your company (optional)"),n.a.createElement("textarea",{name:"description",value:d,onChange:e=>p(e.target.value)}))),!S&&n.a.createElement("div",{className:"action-button-orange",onClick:function(){if(a.trim().length>0&&k(c)){N(!0);var t=a.trim(),l=d.trim();"Avo Cado"!==a&&s.a.post("https://nr-form-api-test.now.sh/"+e.demoUrl,{name:t,email:c,description:l}).then(e=>{console.log(e),N(!1),O(!0)}).catch(e=>{console.error(e),N(!1)}),s.a.post("https://cado.starcat.now.sh/api/ofit",{name:t,email:c,description:l,product:e.product},{headers:{"content-type":"application/x-www-form-urlencoded"}}).then(e=>{200===e.status?(console.log("Bot will send notificatoins"),console.log(e)):console.error("Something went wrong on sending notifications.")})}else b(a.trim().length>0),f(k(c))}},!y&&n.a.createElement("span",null,"Contact me"),y&&n.a.createElement("div",{className:"button-loader"},n.a.createElement("div",{className:"first"}),n.a.createElement("div",{className:"second"}),n.a.createElement("div",{className:"third"})))))}},45:function(e,t,a){},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var l={Spain:{north:45.47,south:35.43,west:-14.88,east:5.36,center:{lat:40.392039,lng:-3.645235},zoom:6},Russia:{north:66.03,south:40.9,west:20.75,east:63.09,center:{lat:55.795952,lng:37.616165},zoom:4},Mexico:{north:32.46,south:10.24,west:-108.96,east:-91.14,center:{lat:25.448337,lng:-100.327115},zoom:6},UK:{north:56.65,south:49.98,west:-6,east:2.59,center:{lat:51.517965,lng:-.815124},zoom:6},Portugal:{north:42.33,south:36.74,west:-10,east:-6.36,center:{lat:40.200434,lng:-8.120066},zoom:7},Norway:{north:64.3,south:57.7,west:-1.67,east:18.11,center:{lat:60.646884,lng:8.610399},zoom:6},Denmark:{north:58.34,south:53.12,west:6.39,east:14.45,center:{lat:55.253899,lng:10.973799},zoom:7},Italy:{north:46.04,south:36.48,west:8.04,east:19.73,center:{lat:43.365026,lng:12.196844},zoom:6},Belarus:{north:56.96,south:51.51,west:23.37,east:32.85,center:{lat:53.904209,lng:27.560622},zoom:6},Lithuania:{norh:57.9,south:52.09,west:18.49,east:31.04,center:{lat:55.054716980254646,lng:24.430052273864824},zoom:6},Turkey:{north:43.15,south:34.29,west:24.11,east:44.43,center:{lat:38.801576,lng:36.487331},zoom:6}}},66:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a(0),n=a.n(l),r=a(1),s=a(4);a(143);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],l=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(){var e=o(Object(l.useState)(!1),2),t=e[0],a=e[1],i=o(Object(l.useState)(0),2),c=i[0],m=i[1],u=Object(l.useRef)(null),d=o(Object(l.useState)(80),2),p=d[0],h=d[1],g=o(Object(l.useState)("overview"),2),b=g[0],v=g[1],E=Object(r.f)();function f(){var e=window.scrollY;if(window.scrollY>=0){var t=u.current.style.top||0;u.current.style.top=Math.min(Math.max(parseFloat(t)+(c-e),0),p)+"px",m(e)}}return Object(l.useEffect)(()=>{h(document.getElementsByTagName("header")[0].clientHeight)},[p,h]),Object(l.useEffect)(()=>(window.addEventListener("scroll",f,{passive:!0}),()=>{window.removeEventListener("scroll",f)}),[c,t,a,m]),Object(l.useEffect)(()=>{E.hash.length>=1&&(console.log("hash",E.hash),v(E.hash.substr(1,E.hash.length)))},[E]),n.a.createElement("div",{style:{top:p},ref:u,className:"page-nav"+(t?" hidden":"")},n.a.createElement("div",{className:"page-nav--container"},n.a.createElement("div",{className:"page-nav-left"},n.a.createElement("div",{className:"product-name"},n.a.createElement(s.b,{to:"#intro"},n.a.createElement("h1",{className:"product-name"},"OmniPack"))),n.a.createElement("div",{className:"nav-tabs"},n.a.createElement("div",{className:"tab"+("overview"===b?" active":"")},n.a.createElement(s.b,{to:"#overview"}),n.a.createElement("p",{className:"tab-label"},"Overview")),n.a.createElement("div",{className:"tab"+("installation"===b?" active":"")},n.a.createElement(s.b,{to:"#installation"}),n.a.createElement("p",{className:"tab-label"},"Installation")),n.a.createElement("div",{className:"tab"+("distributors"===b?" active":"")},n.a.createElement(s.b,{to:"#distributors"}),n.a.createElement("p",{className:"tab-label "},"Distributors")))),n.a.createElement("div",{className:"page-nav-right"},n.a.createElement(s.b,{to:"#get-omnipack"},n.a.createElement("div",{className:"demo-button"},"Free demo")))))}},67:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(5),s=a.n(r);a(146);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],l=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){var t=o(Object(l.useState)(e.defaultValue),2),a=t[0],r=t[1],s=o(Object(l.useState)(!1),2),i=s[0],c=s[1],m=Object(l.useRef)(null);Object(l.useEffect)(()=>{m&&m.current&&r(m.current.value)},[]),Object(l.useEffect)(()=>{e.onChange&&"function"==typeof e.onChange&&e.onChange(a)},[a]);var u=[],d=a;if(e.options){u=e.options.map(e=>n.a.createElement("option",{key:"option-"+e.value,value:e.value},e.label||e.value));var p=e.options.filter(e=>e.value===a);d=p[0]&&(p[0].label||p[0].value)||a}return n.a.createElement("div",{className:"select"+(i?" focused":"")},n.a.createElement("h3",{className:"select-label"},e.label),n.a.createElement("div",{className:"select-pole"},n.a.createElement("select",{ref:m,defaultValue:e.defaultValue,onFocus:()=>c(!0),onBlur:()=>c(!1),onChange:function(e){var t=e.target.value;r(t)},value:a,className:"hidden-select",name:e.name},u),n.a.createElement("div",{className:"select-pole--value"+(a?"":" placeholder")},d||"Choose"),n.a.createElement("div",{className:"icon-arrow"},n.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M12 14.2L6.64 9.73a1 1 0 00-1.28 1.54l6 5a1 1 0 001.28 0l6-5a1 1 0 10-1.28-1.54L12 14.2z",fill:"#B7B7B9"})))))}i.defaultProps={label:"Sample select",name:"select-name"},i.propTypes={name:s.a.string,label:s.a.string,onChange:s.a.func,defaultValue:s.a.string,options:s.a.arrayOf(s.a.shape({value:s.a.string.isRequired,label:s.a.string})).isRequired},t.a=i},68:function(e,t,a){e.exports=a.p+"assets/images/intro-940-trim.mp4"},69:function(e,t,a){e.exports=a.p+"assets/images/mp_image.jpg"},70:function(e,t,a){e.exports=a.p+"assets/images/intro-end-frame.jpg"},71:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_1.jpg"},72:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_2.jpg"},73:function(e,t,a){e.exports=a.p+"assets/images/setup_pic_3.jpg"},74:function(e,t,a){},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var l=a(0),n=a.n(l);a(148);function r(e){return Object(l.useEffect)(()=>(document.getElementsByTagName("body")[0].style.overflow="hidden",document.getElementsByTagName("html")[0].style.overflow="hidden",()=>{document.getElementsByTagName("body")[0].removeAttribute("style"),document.getElementsByTagName("html")[0].removeAttribute("style")}),[]),n.a.createElement("div",{className:"calculations-table",onClick:function(t){t.target&&"calculations-table"===t.target.className&&e.onClose&&"function"==typeof e.onClose&&e.onClose()}},n.a.createElement("div",{className:"table-container"},n.a.createElement("h1",null,"Cost reduction calculations"),n.a.createElement("h3",null,"'000 EUR, no VAT"),n.a.createElement("div",{className:"close-button",onClick:e.onClose},n.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M18.36 16.78L13.58 12l4.78-4.78c.44-.44.44-1.15 0-1.58a1.12 1.12 0 00-1.58 0L12 10.42 7.22 5.64a1.12 1.12 0 00-1.91.79c0 .29.1.57.33.8L10.42 12l-4.78 4.78a1.12 1.12 0 000 1.58c.43.44 1.14.44 1.58 0L12 13.58l4.78 4.78c.43.44 1.15.44 1.58 0 .44-.43.44-1.15 0-1.58z",fill:"#FF9500"}))),n.a.createElement("div",{className:"table"},n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"}),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h1",null,"UR10e",n.a.createElement("br",null),"without OmniPack")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h1",null,"UR10e",n.a.createElement("br",null),"with OmniPack"))),n.a.createElement("div",{className:"table-row spacer"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Palletizer lifetime, years")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"10")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"10"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("h3",null,"Initital investments")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h4",null,"70")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h4",null,"72"))),n.a.createElement("div",{className:"table-row spacer"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Hardware & installation")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"70")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"72"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("h3",null,"Operational costs (per year)")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h4",null,"6.5")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h4",null,"1.8"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Reprogramming and reconfiguration")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"3")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"—"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Robot maintenance")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"6.5")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"3"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Other equipment maintenance")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"5")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"4"))),n.a.createElement("div",{className:"table-row spacer"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Power supply")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"0.5")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"0.3"))),n.a.createElement("div",{className:"table-row spacer"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Operational costs during lifetime")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"14")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"7.3"))),n.a.createElement("div",{className:"table-row spacer"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null,"Total investments")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null,"~200")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null,"~140"))),n.a.createElement("div",null,n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null,"Your value")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null)),n.a.createElement("div",{className:"table-cell"},n.a.createElement("h2",null))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Savings, EUR")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null)),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"60"))),n.a.createElement("div",{className:"table-row"},n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"Savings, %")),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null)),n.a.createElement("div",{className:"table-cell"},n.a.createElement("p",null,"33%")))))))}},76:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var l=a(0),n=a.n(l);class r{constructor({apiKey:e,channel:t,client:a,id:l="__googleMapsScriptId",libraries:n=[],language:s,region:o,version:i,mapIds:c,nonce:m,retries:u=3,url:d="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=i,this.apiKey=e,this.channel=t,this.client=a,this.id=l||"__googleMapsScriptId",this.libraries=n,this.language=s,this.region=o,this.mapIds=c,this.nonce=m,this.retries=u,this.url=d,r.instance){if(!function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var l,n,r;if(Array.isArray(t)){if((l=t.length)!=a.length)return!1;for(n=l;0!=n--;)if(!e(t[n],a[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((l=(r=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(n=l;0!=n--;)if(!Object.prototype.hasOwnProperty.call(a,r[n]))return!1;for(n=l;0!=n--;){var s=r[n];if(!e(t[s],a[s]))return!1}return!0}return t!=t&&a!=a}(this.options,r.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(r.instance.options)}`);return r.instance}r.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}createUrl(){let e=this.url;return e+="?callback="+this.CALLBACK,this.apiKey&&(e+="&key="+this.apiKey),this.channel&&(e+="&channel="+this.channel),this.client&&(e+="&client="+this.client),this.libraries.length>0&&(e+="&libraries="+this.libraries.join(",")),this.language&&(e+="&language="+this.language),this.region&&(e+="&region="+this.region),this.version&&(e+="&v="+this.version),this.mapIds&&(e+="&map_ids="+this.mapIds.join(",")),e}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(a=>{a?t(a):e()})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}resetIfRetryingFailed(){const e=this.retries+1;this.done&&!this.loading&&this.errors.length>=e&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[])}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}var s=a(5),o=a.n(s);a(144);function i(e){return n.a.createElement("div",{className:"distributor-card"},n.a.createElement("div",{className:"distributor-card--container"},n.a.createElement("div",{className:"label"},e.label,"."),n.a.createElement("div",{className:"dist-info"},e.logo&&n.a.createElement("figure",{className:"dist-info--logo"},n.a.createElement("img",{src:"assets/images/"+e.logo,style:{maxWidth:186},alt:"Company logo"})),n.a.createElement("div",{className:"title-address"},n.a.createElement("h2",null,e.title),n.a.createElement("p",null,e.address)),n.a.createElement("div",{className:"website"},n.a.createElement("a",{href:e.url||"#",target:"_blank"}),n.a.createElement("span",null,"Open website"),n.a.createElement("div",{className:"link-icon"},n.a.createElement("svg",{width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M14.75 3a1 1 0 011-1H21a1 1 0 011 1v5.25a1 1 0 11-2 0V5.41l-8.8 8.8a1 1 0 01-1.4-1.42L18.58 4h-2.84a1 1 0 01-1-1z",fill:"#FF9500"}),n.a.createElement("path",{d:"M4.88 7a.88.88 0 00-.88.88v11.25a.87.87 0 00.88.87h11.25a.87.87 0 00.87-.88V10.5a1 1 0 112 0v8.63A2.88 2.88 0 0116.12 22H4.88A2.87 2.87 0 012 19.12V7.88A2.87 2.87 0 014.88 5h7.85a1 1 0 110 2H4.87z",fill:"#FF9500"})))))))}i.propTypes={logo:o.a.any.isRequired,title:o.a.string.isRequired,address:o.a.string,url:o.a.string,label:o.a.string};var c=Object.create({},{Spain:{value:[{name:"Inser Robotica",address:"Derio Bidea, 55, 48100, Mungia, Bizkaia",url:"",coordinates:{lat:43.33351116019542,lng:-2.8666334015211787},robots:["UR"],logo:"inser-robotica.jpg"},{name:"Robot+",address:"Calle Londres, 10, Local comercial C-5, 28805, Alcalá de Henares, Madrid",url:"https://robotplus.es/",coordinates:{lat:40.498101114071,lng:-3.335358710611812},robots:["UR","Fanuc"],logo:"robot-plus.jpg"},{name:"CFZ Cobots",address:"C Jose Maria Castano Martinez, 44, 03202, Elch, Alicante",url:"https://cfzcobots.com/",coordinates:{lat:38.272596276659044,lng:-.6865642700038654},robots:["UR"],logo:"logo-cfz-robots.png"},{name:"Vicosystems",address:"Ronda de Ponent, 116, 08201 Sabadell, Barcelona",url:"https://vicosystems.com/",coordinates:{lat:41.54754729069235,lng:2.0992526561056764},robots:["UR"],logo:"logo-vicosystems.png"},{name:"ELEKTRES",address:"Crta.Sta.Coloma 82 2b | 17005 Girona",url:"https://www.elektres.es/",coordinates:{lat:41.96193270460412,lng:2.8047136851114516},robots:["UR"],logo:"logo-itsme-elektres.png"},{name:"Fluitronic",address:"C. Gabriel Ramos Bejarano, Parcela 233E, C.P 14014, Cordoba, Spain",url:"https://www.fluitronic.es/",coordinates:{lat:37.90173882388097,lng:-4.708789286310357},robots:["UR"],logo:"fluitronic-map.png"}],enumerable:!0},Russia:{value:[{name:"ANT Company",address:"Saint Perersburg, Glinyanaya st., b .5/1, office 308.",url:"http://ant-company.ru/",coordinates:{lat:59.91449926845972,lng:30.386844974099507},robots:["UR","Doosan"]},{name:"Indutech",address:"Saint Petersburg, Kondratievski pr., b. 15",url:"https://www.indutech.ru/",coordinates:{lat:59.920600209732974,lng:30.318278982135755},robots:["UR"]},{name:"Technored",address:"Moscow, Antonova-Ovseenko st., b. 15",url:"https://technored.ru/",coordinates:{lat:55.75563294030618,lng:37.53740408534743},robots:["UR"]},{name:"Promenergo",address:"Moscow,  Ryazanski pr., 8A, build. 46",url:"https://промэнергоавтоматика.рф",coordinates:{lat:55.72600087064534,lng:37.75515342201022},robots:["UR"]}],enumerable:!0},Mexico:{value:[{name:"Einsrobotics",address:"Torre Cibeles, Monterrey, Nuevo León.",url:"https://einsrobotics.com/",robots:["UR"],logo:"einsrobotics-logo.png",coordinates:{lat:25.629621904968833,lng:-100.30028785353119}}],enumerable:!0},UK:{value:[{name:"Native Robotics",address:"2 Oscar Wilde Road, Reading",url:"https://native-robotics.com/",robots:["UR"],logo:"nr_logo.png",coordinates:{lat:51.456877,lng:-.957046}}],enumerable:!0},Portugal:{value:[{name:"EPL",address:"Rua do Visconde de São João da Madeira",url:"https://epl-si.com/",coordinates:{lat:40.89117306344268,lng:-8.487444630419958},logo:"epl_logo.png",robots:["UR"]}],enumerable:!0},Norway:{value:[{name:"Imperietek AS",address:"Kvartsvegen 32, 4104, Jorpeland, Rogaland",url:"https://www.imperietek.no/",coordinates:{lat:59.03266143311496,lng:6.043322327779752},logo:"impertek.png",robots:["UR"]}],enumerable:!0},Denmark:{value:[{name:"Technicon",address:"Slagelse, Sjællandsvej 19",url:"https://technicon.dk/",coordinates:{lat:55.39700829983938,lng:11.345022541154226},logo:"technicon.jpg",robots:["UR"]},{name:"InCite Robotics",address:"Sivlandvænget 3, st, 5260 Odense, Denmark",coordinates:{lat:55.35524165882205,lng:10.407503180587094},url:"https://inciterobotics.com/",logo:"InCiteRobotics.png",robots:["UR"]}],enumerable:!0},Italy:{value:[{name:"PSTSRL",address:"Str. Del Portone 131/A, Torino, Italy",url:"https://pstsrl.eu/",logo:"pst.jpg",coordinates:{lat:45.04602884672316,lng:7.587178283178785},robots:["UR"]}],enumerable:!0},Belarus:{value:[{name:"PNS",address:"Cnyanka, Dzerzhinskogo st., b. 75",url:"https://www.pns.by/",coordinates:{lat:53.981053474288736,lng:27.530173367961115},robots:["UR"]}],enumerable:!0},Lithuania:{value:[{name:"Techvitas",address:"Naujoji Riovonių g. 25B, LT-03153 Vilnius",coordinates:{lat:54.65176379144168,lng:25.225296142047103},robots:["UR"],url:"https://www.techvitas.com/",logo:"techvitas.png"}]},Turkey:{value:[{name:"Kenttur",address:"Şerifali Mh. Hattat Sok. No: 34 Ümraniye - İstanbul, 34775",url:"http://www.kenttur.com",logo:"",robots:["UR"],coordinates:{lat:41.001774442619585,lng:29.15345515794667}}],enumerable:!0}}),m=a(46);a(145);function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],l=!0,n=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);l=!0);}catch(e){n=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(n)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e){var t=!1,a=d(Object(l.useState)([]),2),s=a[0],o=a[1],p=null;function h(){if(!e.country)return!1;var t,a=(t=e.country||"Spain",m.a[t]||m.a.Spain),l=a.center,r=a.zoom,s=u(a,["center","zoom"]);p=new google.maps.Map(document.getElementById("gmaps"),{zoom:r,minZoom:r,maxZoom:r+6,center:l,restriction:{latLngBounds:s,strictBounds:!1}}),function(){var t="ABCDEFGHIJK",a=c[e.country];if(!a)return!1;var l=[];a.map(a=>{if(a.robots.indexOf(e.robot)>=0){var r=t.split("").shift();new google.maps.Marker({position:a.coordinates,title:a.name,label:r}).setMap(p),l.push(n.a.createElement(i,{key:a.url,label:r,title:a.name,logo:a.logo,address:a.address,url:a.url}));var s=t.split("");s.shift(),t=s.join("")}}),o(l)}()}return Object(l.useEffect)(()=>{},[]),Object(l.useEffect)(()=>{e.country&&e.robot&&(t?h():new r({apiKey:"AIzaSyAgVj7nsWNGkQhm7xkIvMHzNcFKAPdf2J0",version:"weekly",mapIds:["130ede963d80b374"],region:"US",language:"en"}).load().then(()=>{h(),t=!0}))},[e.country,e.robot]),n.a.createElement("div",{className:"omnipack-distributors-map"},n.a.createElement("div",{className:"results"},n.a.createElement("div",{className:"results-cards"},s),n.a.createElement("div",{className:"results-count"},n.a.createElement("p",null,s.length>0?s.length+" distributors found.":"No distributors found."))),n.a.createElement("div",{id:"gmaps",className:"google-maps"}))}}}]);