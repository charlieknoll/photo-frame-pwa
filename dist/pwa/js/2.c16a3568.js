(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0668":function(t,a,e){},"713b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"bg-primary text-grey-10",attrs:{bordered:""}},[e("q-toolbar",{staticClass:"constrain"},[e("q-toolbar-title",{staticClass:"text-bold text-fredoka-one text-white"},[t._v("\n        Photo"),e("span",{staticStyle:{"font-style":"italic"}},[t._v("Ahhhhh")])])],1)],1),e("q-footer",{staticClass:"bg-white"},[[e("transition",{attrs:{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[t.showAppInstallBanner?e("div",{staticClass:"banner-container bg-primary"},[e("div",{staticClass:"constrain-banner"},[e("q-banner",{staticClass:"bg-primary text-white",attrs:{dense:"","inline-actions":""},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-avatar",{attrs:{name:"signal_wifi_off",color:"primary",icon:"system_update","font-size":"22px"}})]},proxy:!0},{key:"action",fn:function(){return[e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Yes"},on:{click:t.installApp}}),e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Later"},on:{click:function(a){t.showAppInstallBanner=!1}}}),e("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Never"},on:{click:t.neverShowAppInstallBanner}})]},proxy:!0}],null,!1,2734498194)},[e("b",[t._v("Install PhotoAh?")])])],1)]):t._e()])],e("q-tabs",{staticClass:"text-grey-10",attrs:{"active-color":"primary","indicator-color":"transparent"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-route-tab",{attrs:{to:"/",name:"slideshow",icon:"panorama",label:"Slideshow",disable:0===t.$store.images.length}}),e("q-route-tab",{attrs:{to:"/settings",name:"settings",icon:"settings",label:"Settings"}}),e("q-route-tab",{attrs:{to:"/help",name:"help",icon:"support",label:"Help"}})],1)],2),e("q-page-container",{staticClass:"bg-grey-1"},[e("router-view")],1)],1)},n=[],i=(e("e6cf"),e("5319"),e("ddb0"),e("2b3d"),e("c60b"));let o,r=!1;var l={name:"MainLayout",data(){return{tab:"settings",showAppInstallBanner:!1,$store:i["c"]}},methods:{installApp(){this.showAppInstallBanner=!1,o.prompt(),o.userChoice.then((t=>{"accepted"===t.outcome?(console.log("User accepted the install prompt"),this.neverShowAppInstallBanner()):console.log("User dismissed the install prompt")}))},neverShowAppInstallBanner(){this.showAppInstallBanner=!1,this.$q.localStorage.set("neverShowInstall",!0)},albumMissingCb(){"Settings"!==this.$router.currentRoute.name&&this.$router.push({name:"Settings"}),this.$q.loading.hide()}},created(){this.$actions.albumMissingCb=this.albumMissingCb},async mounted(){if(this.interval=setInterval((async()=>{await this.$actions.loadImages(!1)}),18e5),!this.$store.authReady||0===this.$store.images.length){if(!this.$store.validApikey()){var t=new URLSearchParams(window.location.search);t.has("apikey")&&(this.$actions.setApikey(t.get("apikey")),window.location.replace(window.location.origin))}try{await this.$gAuth.initClient()}catch(e){console.log("error: "+e.message)}this.$store.authReady&&this.$store.isSignedIn||this.albumMissingCb()}const a=this.$q.localStorage.getItem("neverShowInstall");a||window.addEventListener("beforeinstallprompt",(t=>{!0!==r&&(t.preventDefault(),o=t,r=!0,setTimeout((()=>{this.showAppInstallBanner=!0}),3e3))}))}},c=l,p=(e("83ec"),e("2877")),h=e("4d5a"),b=e("e359"),u=e("65c6"),d=e("6ac5"),m=e("7ff0"),g=e("54e1"),w=e("cb32"),f=e("9c40"),v=e("429b"),y=e("7867"),q=e("09e3"),C=e("eebe"),A=e.n(C),I=Object(p["a"])(c,s,n,!1,null,null,null);a["default"]=I.exports;A()(I,"components",{QLayout:h["a"],QHeader:b["a"],QToolbar:u["a"],QToolbarTitle:d["a"],QFooter:m["a"],QBanner:g["a"],QAvatar:w["a"],QBtn:f["a"],QTabs:v["a"],QRouteTab:y["a"],QPageContainer:q["a"]})},"83ec":function(t,a,e){"use strict";e("0668")}}]);