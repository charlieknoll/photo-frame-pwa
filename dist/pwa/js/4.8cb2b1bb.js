(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"32e7":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("q-carousel",{attrs:{swipeable:"",autoplay:e.$store.autoplay,"transition-next":"slide-fade","transition-prev":"slide-fade",fullscreen:e.fullscreen,animated:"",infinite:"",height:e.windowHeight},on:{"update:fullscreen":function(t){e.fullscreen=t},click:e.showControls},scopedSlots:e._u([{key:"control",fn:function(){return[s("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,300]}},[s("q-btn",{attrs:{push:"",square:"",dense:"",color:"grey",size:"xl","text-color":"white",icon:e.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:e.toggleFullScreen}})],1),s("q-carousel-control",{staticClass:"text-white rounded-borders",class:e.controlClass,staticStyle:{background:"rgba(0, 0, 0, .3)",padding:"4px 8px","font-size":"24px"},attrs:{position:"top-right",offset:[160,60]}},[s("q-toggle",{attrs:{dense:"",dark:"",color:"orange",label:"Only New ("+e.newImageCt+")"},model:{value:e.newImagesOnly,callback:function(t){e.newImagesOnly=t},expression:"newImagesOnly"}})],1),s("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,60]}},[s("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:0===e.$store.autoplay?"play_arrow":"pause"},on:{click:function(t){e.$store.autoplay=0===e.$store.autoplay?8e3:0}}})],1),s("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,140]}},[s("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:e.$store.newImages?"check":"cached"},on:{click:function(t){e.$store.newImages?e.$actions.markImagesRead():e.$actions.loadImages(!1)}}})],1),s("q-carousel-control",{class:e.controlClass,attrs:{position:"top-right",offset:[60,220]}},[s("q-btn",{attrs:{push:"",square:"",size:"xl",dense:"",color:"grey","text-color":"white",icon:"shuffle"},on:{click:e.shuffleImages}})],1),s("q-carousel-control",{attrs:{position:"bottom-left",offset:[0,18]}},[s("q-btn",{class:{hidden:!e.$store.newImages},attrs:{square:"",size:"md",dense:"","text-color":"warning",icon:"new_releases"}})],1)]},proxy:!0}]),model:{value:e.$store.currentSlideIndex,callback:function(t){e.$set(e.$store,"currentSlideIndex",t)},expression:"$store.currentSlideIndex"}},e._l(e.images,(function(e,t){return s("q-carousel-slide",{key:t,attrs:{name:t,"img-src":e.baseUrl}})})),1)],1)},o=[],l=(s("e6cf"),s("c60b"));s("bc3a");let r=null,a=null,i=null;const c=async()=>{try{i=await navigator.wakeLock.request("screen"),i.addEventListener("release",(()=>{console.log("Screen Wake Lock released:",i.released)})),console.log("Screen Wake Lock released:",i.released)}catch(e){console.error(`${e.name}, ${e.message}`)}},u=async()=>{null!==i&&"visible"===document.visibilityState&&(await c(),l["c"].registration&&!l["c"].registration.waiting&&l["c"].registration.update())};document.addEventListener("visibilitychange",u);var g={data(){return{controlClass:"hidden",windowHeight:0,fullscreen:!1,$store:l["c"],$actions:l["a"],interval:null,newImagesOnly:!1}},computed:{images(){if(this.$store.images.length>0&&this.$q.loading.hide(),this.newImagesOnly){const e=this.$store.images.filter((e=>e.new));return 0===e.length&&e.push({id:"no-images",baseUrl:"images/no-images.png"}),e}return this.$store.images},allowFullScreen(){return this.fullscreen&&!this.$store.showAppUpdatedBanner},newImageColor(){return this.$store.newImages?"warning":""},newImageCt(){const e=this.$store.images.filter((e=>e.new&&"no-images"!==e.id));return e.length}},watch:{images:function(e){this.$store.currentSlideIndex>e.length&&(this.$store.currentSlideIndex=0)},allowFullScreen:function(e){!e&&this.fullscreen&&this.toggleFullScreen()}},methods:{showControls:function(){this.controlClass="",r&&(clearTimeout(r),r=null),r=setTimeout(function(){this.controlClass="hidden",clearTimeout(this.timeout=null)}.bind(this),5e3)},toggleFullScreen:function(){this.fullscreen=!this.fullscreen,this.$q.fullscreen.isActive!==this.fullscreen&&this.$q.fullscreen.toggle()},shuffleImages:function(){this.$actions.shuffleImages()},onlyNew:function(){this.newImagesOnly=!this.newImagesOnly,this.$store.currentSlideIndex=0}},async created(){this.windowHeight=window.innerHeight-124+"px",this.$q.loading.show(),"wakeLock"in navigator?await c():console.log("wakelock:","wakeLock"in navigator),a=setInterval((function(){l["c"].registration&&!l["c"].registration.waiting&&l["c"].registration.update()}),6e4)},async beforeDestroy(){"wakeLock"in navigator&&i.release(),a&&clearInterval(a)}},d=g,h=(s("c7f6"),s("2877")),f=s("880c"),w=s("62cd"),m=s("32a7"),p=s("9c40"),$=s("9564"),y=s("bd08"),b=s("eebe"),k=s.n(b),I=Object(h["a"])(d,n,o,!1,null,null,null);t["default"]=I.exports;k()(I,"components",{QCarousel:f["a"],QCarouselSlide:w["a"],QCarouselControl:m["a"],QBtn:p["a"],QToggle:$["a"],QTr:y["a"]})},b524:function(e,t,s){},c7f6:function(e,t,s){"use strict";s("b524")}}]);