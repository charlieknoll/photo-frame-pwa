(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"32e7":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("q-carousel",{class:{hidden:!e.$store.albumLoaded&&!e.$store.imagesLoading},attrs:{swipeable:"",autoplay:e.$store.autoplay?1e3*parseInt(e.$store.slideSpeed):0,"transition-next":"slide-fade","transition-prev":"slide-fade",fullscreen:e.fullscreen,animated:"",infinite:"",height:e.windowHeight},on:{"update:fullscreen":function(t){e.fullscreen=t},click:e.showControls},scopedSlots:e._u([{key:"control",fn:function(){return[n("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,300]}},[n("q-btn",{attrs:{push:"",square:"",dense:"",color:"grey",size:"xl","text-color":"white",icon:e.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullScreen}})],1),n("q-carousel-control",{staticClass:"text-white rounded-borders",class:e.controlClass,staticStyle:{background:"rgba(0, 0, 0, .3)",padding:"4px 8px","font-size":"24px"},attrs:{position:"top-right",offset:[160,60]}},[n("q-toggle",{attrs:{dense:"",dark:"",color:"orange",label:"Only New ("+e.newImageCt+")"},model:{value:e.newImagesOnly,callback:function(t){e.newImagesOnly=t},expression:"newImagesOnly"}})],1),n("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,60]}},[n("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:e.$store.autoplay?"pause":"play_arrow"},on:{click:function(t){e.$store.autoplay=!e.$store.autoplay}}})],1),n("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,140]}},[n("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:e.$store.newImages?"check":"cached"},on:{click:function(t){e.$store.newImages?e.$actions.markImagesRead():e.$actions.loadImages(!1)}}})],1),n("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,220]}},[n("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:"shuffle"},on:{click:e.shuffleImages}})],1),n("q-carousel-control",{attrs:{position:"bottom-left",offset:[0,18]}},[n("q-btn",{class:{hidden:!e.$store.newImages},attrs:{square:"",size:"md",dense:"","text-color":"warning",icon:"new_releases"}})],1)]},proxy:!0}]),model:{value:e.$store.currentSlideIndex,callback:function(t){e.$set(e.$store,"currentSlideIndex",t)},expression:"$store.currentSlideIndex"}},e._l(e.images,(function(e,t){return n("q-carousel-slide",{key:t,attrs:{name:t,"img-src":e.baseUrl}})})),1),n("settings-banner")],1)},o=[],a=(n("e6cf"),n("c60b")),r=n("c809"),i=(n("bc3a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{appear:"","enter-active-class":"animated bounceIn","leave-active-class":"animated fadeOut"}},[e.$store.albumLoaded||e.$store.imagesLoading||!e.showBanner?e._e():n("div",{staticClass:"banner-container bg-red"},[n("div",{staticClass:"constrain-banner"},[n("q-banner",{staticClass:"bg-red text-white",attrs:{name:"settings-banner",dense:"","inline-actions":""},scopedSlots:e._u([{key:"avatar",fn:function(){return[n("q-avatar",{attrs:{name:"error",color:"error",icon:"error","font-size":"22px"}})]},proxy:!0},{key:"action",fn:function(){return[n("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"Yes"},on:{click:e.goToSettings}}),n("q-btn",{staticClass:"q-px-sm",attrs:{dense:"",flat:"",label:"No"},on:{click:function(t){e.showBanner=!1}}})]},proxy:!0}],null,!1,250770648)},[n("b",[e._v("Album could not be loaded, would you like to check the settings?")])])],1)])])}),l=[];var c={name:"SettingsBanner",data(){return{showBanner:!1,$store:a["b"]}},methods:{goToSettings(){"Settings"!==this.$router.currentRoute.name&&this.$router.push({name:"Settings"})}},mounted(){setTimeout((()=>{this.showBanner=!0}),1e3)}},u=c,d=n("2877"),g=n("54e1"),h=n("cb32"),f=n("9c40"),m=n("eebe"),p=n.n(m),w=Object(d["a"])(u,i,l,!1,null,null,null),b=w.exports;p()(w,"components",{QBanner:g["a"],QAvatar:h["a"],QBtn:f["a"]});let $=null,y=null,k=null;const x=async()=>{try{y=await navigator.wakeLock.request("screen"),y.addEventListener("release",(()=>{console.log("Screen Wake Lock released"),k=a["b"].autoplay,a["b"].autoplay=!1})),console.log("Screen Wake Lock acquired")}catch(e){console.error(`${e.name}, ${e.message}`)}},q=async()=>{null!==y&&"visible"===document.visibilityState&&(k&&(a["b"].autoplay=!0),await x(),a["b"].registration&&!a["b"].registration.waiting&&a["b"].registration.update())};document.addEventListener("visibilitychange",q);var v={components:{SettingsBanner:b},data(){return{controlClass:"hidden",windowHeight:0,fullscreen:!1,$store:a["b"],$actions:r["a"],interval:null,newImagesOnly:!1}},computed:{imagesLoading(){return a["b"].imagesLoading},images(){if(this.$store.images.length>0&&this.$q.loading.hide(),this.newImagesOnly){const e=this.$store.images.filter((e=>e.new));return 0===e.length&&e.push({id:"no-images",baseUrl:"images/no-images.png"}),e}return this.$store.images},allowFullScreen(){return this.fullscreen&&!this.$store.showAppUpdatedBanner},newImageColor(){return this.$store.newImages?"warning":""},newImageCt(){const e=this.$store.images.filter((e=>e.new&&"no-images"!==e.id));return e.length}},watch:{images:function(e){this.$store.currentSlideIndex>e.length&&(this.$store.currentSlideIndex=0)},allowFullScreen:function(e){!e&&this.fullscreen&&this.toggleFullScreen()},imagesLoading:function(e){e||this.$q.loading.hide()}},methods:{showControls:function(){this.controlClass="",$&&(clearTimeout($),$=null),$=setTimeout(function(){this.controlClass="hidden",clearTimeout(this.timeout=null)}.bind(this),5e3)},toggleFullScreen:function(){this.fullscreen=!this.fullscreen,this.$q.fullscreen.isActive!==this.fullscreen&&this.$q.fullscreen.toggle()},shuffleImages:function(){this.$actions.shuffleImages()},onlyNew:function(){this.newImagesOnly=!this.newImagesOnly,this.$store.currentSlideIndex=0}},async created(){this.windowHeight=window.innerHeight-124+"px",this.$q.loading.show(),"wakeLock"in navigator?await x():console.log("wakelock:","wakeLock"in navigator),await this.$actions.loadImages(!1)},async beforeDestroy(){"wakeLock"in navigator&&y.release()}},I=v,S=(n("c7f6"),n("880c")),C=n("62cd"),L=n("32a7"),_=n("9564"),O=n("bd08"),B=Object(d["a"])(I,s,o,!1,null,null,null);t["default"]=B.exports;p()(B,"components",{QCarousel:S["a"],QCarouselSlide:C["a"],QCarouselControl:L["a"],QBtn:f["a"],QToggle:_["a"],QTr:O["a"]})},b524:function(e,t,n){},c7f6:function(e,t,n){"use strict";n("b524")}}]);