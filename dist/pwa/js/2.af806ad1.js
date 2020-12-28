(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0668":function(t,a,e){},"713b":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"bg-primary"},[e("q-toolbar",{staticClass:"constrain text-white"},[e("q-toolbar-title",{staticClass:"text-bold text-fredoka-one"},[t._v("\n        "+t._s(this.$store.appName)+"\n      ")]),e("div",[t._v("v"+t._s(t.version))])],1)],1),e("q-footer",{staticClass:"bg-white"},[e("app-install-banner"),e("app-update-banner"),e("q-tabs",{staticClass:"text-grey-10",attrs:{"active-color":"primary","indicator-color":"transparent"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-route-tab",{attrs:{to:"/",name:"slideshow",icon:"panorama",label:"Slideshow",disable:0===t.$store.images.length}}),e("q-route-tab",{attrs:{to:"/settings",name:"settings",icon:"settings",label:"Settings"}}),e("q-route-tab",{attrs:{to:"/help",name:"help",icon:"help",label:"Help"}})],1)],1),e("q-page-container",{staticClass:"bg-grey-1"},[e("router-view")],1)],1)},s=[],r=(e("e6cf"),e("5319"),e("ddb0"),e("2b3d"),e("c60b")),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[this.$store.showAppUpdatedBanner?e("div",{staticClass:"banner-container bg-primary"},[e("div",{staticClass:"constrain-banner"},[e("q-banner",{staticClass:"bg-primary text-white",attrs:{dense:"","inline-actions":""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-avatar",{attrs:{name:"signal_wifi_off",color:"primary",icon:"system_update","font-size":"22px"}})]},proxy:!0},{key:"action",fn:function(){return[e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Yes"},on:{click:function(a){return t.updateApp(!0)}}}),e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"No"},on:{click:function(a){return t.updateApp(!1)}}})]},proxy:!0}],null,!1,2216117024)},[e("b",[t._v(t._s(this.$store.appName)+" has an update pending, update now?")])])],1)]):t._e()])},o=[];let l=!1;var c={name:"AppUpdateBanner",data(){return{$store:r["b"]}},methods:{updateApp(t){this.$store.showAppUpdatedBanner=!1,t&&!l&&(l=!0,r["b"].registration&&r["b"].registration.waiting&&r["b"].registration.waiting.postMessage({type:"SKIP_WAITING"}),window.location.reload(!0))}}},p=c,u=e("2877"),b=e("54e1"),d=e("cb32"),h=e("9c40"),m=e("eebe"),g=e.n(m),v=Object(u["a"])(p,i,o,!1,null,null,null),f=v.exports;g()(v,"components",{QBanner:b["a"],QAvatar:d["a"],QBtn:h["a"]});var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[t.showAppInstallBanner?e("div",{staticClass:"banner-container bg-primary"},[e("div",{staticClass:"constrain-banner"},[e("q-banner",{staticClass:"bg-primary text-white",attrs:{dense:"","inline-actions":""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-avatar",{attrs:{name:"signal_wifi_off",color:"primary",icon:"system_update","font-size":"22px"}})]},proxy:!0},{key:"action",fn:function(){return[e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Yes"},on:{click:t.installApp}}),e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Later"},on:{click:function(a){t.showAppInstallBanner=!1}}}),e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Never"},on:{click:t.neverShowAppInstallBanner}})]},proxy:!0}],null,!1,2734498194)},[e("b",[t._v("Install "+t._s(this.$store.appName)+"?")])])],1)]):t._e()])},y=[];let q,I=!1;var $={name:"AppInstallBanner",data(){return{showAppInstallBanner:!1,$store:r["b"]}},methods:{installApp(){this.showAppInstallBanner=!1,q.prompt(),q.userChoice.then((t=>{"accepted"===t.outcome?(console.log("User accepted the install prompt"),this.neverShowAppInstallBanner()):console.log("User dismissed the install prompt")}))},neverShowAppInstallBanner(){this.showAppInstallBanner=!1,this.$q.localStorage.set("neverShowInstall",!0)}},mounted(){const t=this.$q.localStorage.getItem("neverShowInstall");t||window.addEventListener("beforeinstallprompt",(t=>{!0!==I&&(t.preventDefault(),q=t,I=!0,setTimeout((()=>{this.showAppInstallBanner=!0}),3e3))}))}},A=$,_=Object(u["a"])(A,w,y,!1,null,null,null),C=_.exports;g()(_,"components",{QBanner:b["a"],QAvatar:d["a"],QBtn:h["a"]});let x=null;var B={name:"MainLayout",data(){return{tab:"settings",showAppInstallBanner:!1,version:"0.0.86",$store:r["b"]}},components:{AppUpdateBanner:f,AppInstallBanner:C},methods:{albumMissingCb(){"Settings"!==this.$router.currentRoute.name&&this.$router.push({name:"Settings"}),this.$q.loading.hide()}},created(){this.$actions.albumMissingCb=this.albumMissingCb,x=setInterval((function(){console.log("registration: ",r["b"].registration),r["b"].registration&&!r["b"].registration.waiting&&r["b"].registration.update()}),6e4)},async mounted(){if(this.interval=setInterval((async()=>{await this.$actions.loadImages(!1)}),18e5),!this.$store.authReady||0===this.$store.images.length){var t=new URLSearchParams(window.location.search);t.has("apikey")&&(this.$actions.setLocalStorage("apikey",t.get("apikey")),window.location.replace(window.location.origin));try{await this.$gAuth.initClient()}catch(a){console.log("error: "+a.message)}this.$store.authReady&&this.$store.isSignedIn||!navigator.onLine&&0!==this.$store.images.length||this.albumMissingCb()}},beforeDestroy(){x&&clearInterval(x)}},S=B,k=(e("83ec"),e("4d5a")),Q=e("e359"),L=e("65c6"),T=e("6ac5"),U=e("7ff0"),M=e("429b"),N=e("7867"),O=e("09e3"),R=Object(u["a"])(S,n,s,!1,null,null,null);a["default"]=R.exports;g()(R,"components",{QLayout:k["a"],QHeader:Q["a"],QToolbar:L["a"],QToolbarTitle:T["a"],QFooter:U["a"],QTabs:M["a"],QRouteTab:N["a"],QPageContainer:O["a"]})},"83ec":function(t,a,e){"use strict";e("0668")}}]);