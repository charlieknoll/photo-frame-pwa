(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"311b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"constrain q-pa-md"},[a("q-form",{staticClass:"q-gutter-md q-pa-lg"},[a("q-input",{attrs:{filled:"",label:"API KEY",hint:"Please contact the developer for the API KEY","lazy-rules":"",rules:[function(e){return e&&39==e.length||"Invalid API KEY"}]},model:{value:e.apikey,callback:function(t){e.apikey=t},expression:"apikey"}}),a("q-input",{attrs:{filled:"",type:"number",label:"Slide duration in seconds",hint:"default: 8 seconds","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Please enter a slide duration in seconds"}]},model:{value:e.slideSpeed,callback:function(t){e.slideSpeed=t},expression:"slideSpeed"}}),a("q-input",{attrs:{filled:"",label:"Google Photos Album Title",hint:"Use Google Photos to create the album","lazy-rules":"",rules:[function(e){return null!==e&&""!==e||"Enter a photo album title from your Google Photos account"}]},model:{value:e.albumTitle,callback:function(t){e.albumTitle=t},expression:"albumTitle"}}),a("q-toggle",{attrs:{disable:!1,value:e.$store.isSignedIn,label:e.$store.isSignedIn?"Granted "+e.$store.appName+" Access, toggle to revoke":"Authorize "+e.$store.appName+" to access "+e.$store.albumTitle,loading:e.$store.authInProgress},on:{input:e.setAuthStatus}})],1),a("div",{staticClass:"text-center"},[a("q-banner",{directives:[{name:"show",rawName:"v-show",value:e.$store.images.length>0&&e.$store.isSignedIn,expression:"$store.images.length > 0 && $store.isSignedIn"}],staticClass:"text-white bg-positive",attrs:{"inline-actions":"",animated:""}},[e._v('\n      "'+e._s(e.$store.albumTitle)+'" album has been loaded, click the "Slideshow"\n      button to start it.'),a("br"),e._v('\n      TIP: Share the "'+e._s(e.$store.albumTitle)+'" album with friends and family\n      so they can add photos to your album.\n    ')]),a("q-banner",{directives:[{name:"show",rawName:"v-show",value:!e.$store.authInProgress&&e.$store.authReady&&e.$store.isSignedIn&&!e.$store.imagesLoading&&0===e.$store.images.length,expression:"\n        !$store.authInProgress &&\n          $store.authReady &&\n          $store.isSignedIn &&\n          !$store.imagesLoading &&\n          $store.images.length === 0\n      "}],staticClass:"text-white bg-red",attrs:{"inline-actions":"",animated:""}},[e._v('\n      PhotoAh album not found or it is empty, please create an album titled\n      "PhotoAh" in your\n      '),a("a",{attrs:{href:"https://photos.google.com",target:"_blank"}},[e._v("Google Photos")]),e._v("\n      and add at least 1 photo.\n    ")])],1)],1)},n=[],o=(a("e6cf"),a("c60b")),i=a("c809"),l={name:"PageHome",data(){return{apikey:o["b"].apikey,albumTitle:o["b"].albumTitle,slideSpeed:o["b"].slideSpeed,$store:o["b"]}},watch:{apikey:function(e){i["a"].setLocalStorage("apikey",e)},albumTitle:function(e){i["a"].setLocalStorage("albumTitle",e),o["b"].isSignedIn=!1},slideSpeed:function(e){i["a"].setLocalStorage("slideSpeed",e)}},methods:{setAuthStatus:async function(){if(this.$store.isSignedIn)this.$gAuth.signOut();else try{await this.$gAuth.signIn()}catch(e){console.log("error: ",e),this.$q.dialog({class:"warning",message:`Could not authorize ${this.$store.appName}, try checking the api key.`})}}}},r=l,u=a("2877"),d=a("9989"),c=a("0378"),h=a("27f9"),g=a("9564"),m=a("54e1"),p=a("eebe"),b=a.n(p),$=Object(u["a"])(r,s,n,!1,null,null,null);t["default"]=$.exports;b()($,"components",{QPage:d["a"],QForm:c["a"],QInput:h["a"],QToggle:g["a"],QBanner:m["a"]})}}]);