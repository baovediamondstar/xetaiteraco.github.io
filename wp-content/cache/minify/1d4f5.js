jQuery(function(l){if("undefined"==typeof wc_single_product_params)return!1;l("body").on("init",".wc-tabs-wrapper, .woocommerce-tabs",function(){l(this).find(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide();var t=window.location.hash,e=window.location.href,i=l(this).find(".wc-tabs, ul.tabs").first();0<=t.toLowerCase().indexOf("comment-")||"#reviews"===t||"#tab-reviews"===t||0<e.indexOf("comment-page-")||0<e.indexOf("cpage=")?i.find("li.reviews_tab a").click():"#tab-additional_information"===t?i.find("li.additional_information_tab a").click():i.find("li:first a").click()}).on("click",".wc-tabs li a, ul.tabs li a",function(t){t.preventDefault();var e=l(this),i=e.closest(".wc-tabs-wrapper, .woocommerce-tabs");i.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),i.find(".wc-tab, .panel:not(.panel .panel)").hide(),e.closest("li").addClass("active"),i.find(e.attr("href")).show()}).on("click","a.woocommerce-review-link",function(){return l(".reviews_tab a").click(),!0}).on("init","#rating",function(){l("#rating").hide().before('<p class="stars">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<a class="star-1" href="#">1</a>\t\t\t\t\t\t\t<a class="star-2" href="#">2</a>\t\t\t\t\t\t\t<a class="star-3" href="#">3</a>\t\t\t\t\t\t\t<a class="star-4" href="#">4</a>\t\t\t\t\t\t\t<a class="star-5" href="#">5</a>\t\t\t\t\t\t</span>\t\t\t\t\t</p>')}).on("click","#respond p.stars a",function(){var t=l(this),e=l(this).closest("#respond").find("#rating"),i=l(this).closest(".stars");return e.val(t.text()),t.siblings("a").removeClass("active"),t.addClass("active"),i.addClass("selected"),!1}).on("click","#respond #submit",function(){var t=l(this).closest("#respond").find("#rating"),e=t.val();if(0<t.length&&!e&&"yes"===wc_single_product_params.review_rating_required)return window.alert(wc_single_product_params.i18n_required_rating_text),!1}),l(".wc-tabs-wrapper, .woocommerce-tabs, #rating").trigger("init");var e=function(t,e){this.$target=t,this.$images=l(".woocommerce-product-gallery__image",t),0!==this.$images.length?(t.data("product_gallery",this),this.flexslider_enabled=l.isFunction(l.fn.flexslider)&&wc_single_product_params.flexslider_enabled,this.zoom_enabled=l.isFunction(l.fn.zoom)&&wc_single_product_params.zoom_enabled,this.photoswipe_enabled="undefined"!=typeof PhotoSwipe&&wc_single_product_params.photoswipe_enabled,e&&(this.flexslider_enabled=!1!==e.flexslider_enabled&&this.flexslider_enabled,this.zoom_enabled=!1!==e.zoom_enabled&&this.zoom_enabled,this.photoswipe_enabled=!1!==e.photoswipe_enabled&&this.photoswipe_enabled),1===this.$images.length&&(this.flexslider_enabled=!1),this.initFlexslider=this.initFlexslider.bind(this),this.initZoom=this.initZoom.bind(this),this.initZoomForTarget=this.initZoomForTarget.bind(this),this.initPhotoswipe=this.initPhotoswipe.bind(this),this.onResetSlidePosition=this.onResetSlidePosition.bind(this),this.getGalleryItems=this.getGalleryItems.bind(this),this.openPhotoswipe=this.openPhotoswipe.bind(this),this.flexslider_enabled?(this.initFlexslider(e.flexslider),t.on("woocommerce_gallery_reset_slide_position",this.onResetSlidePosition)):this.$target.css("opacity",1),this.zoom_enabled&&(this.initZoom(),t.on("woocommerce_gallery_init_zoom",this.initZoom)),this.photoswipe_enabled&&this.initPhotoswipe()):this.$target.css("opacity",1)};e.prototype.initFlexslider=function(t){var e=this.$target,i=this,o=l.extend({selector:".woocommerce-product-gallery__wrapper > .woocommerce-product-gallery__image",start:function(){e.css("opacity",1)},after:function(t){i.initZoomForTarget(i.$images.eq(t.currentSlide))}},t);e.flexslider(o),l(".woocommerce-product-gallery__wrapper .woocommerce-product-gallery__image:eq(0) .wp-post-image").one("load",function(){var i=l(this);i&&setTimeout(function(){var t=i.closest(".woocommerce-product-gallery__image").height(),e=i.closest(".flex-viewport");t&&e&&e.height(t)},100)}).each(function(){this.complete&&l(this).trigger("load")})},e.prototype.initZoom=function(){this.initZoomForTarget(this.$images.first())},e.prototype.initZoomForTarget=function(t){if(!this.zoom_enabled)return!1;var e,i=this.$target.width(),o=!1;l(t).each(function(t,e){if(l(e).find("img").data("large_image_width")>i)return!(o=!0)}),o&&(e=l.extend({touch:!1},wc_single_product_params.zoom_options),"ontouchstart"in document.documentElement&&(e.on="click"),t.trigger("zoom.destroy"),t.zoom(e),setTimeout(function(){t.find(":hover").length&&t.trigger("mouseover")},100))},e.prototype.initPhotoswipe=function(){this.zoom_enabled&&0<this.$images.length?(this.$target.prepend('<a href="#" class="woocommerce-product-gallery__trigger">🔍</a>'),this.$target.on("click",".woocommerce-product-gallery__trigger",this.openPhotoswipe),this.$target.on("click",".woocommerce-product-gallery__image a",function(t){t.preventDefault()}),this.flexslider_enabled||this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)):this.$target.on("click",".woocommerce-product-gallery__image a",this.openPhotoswipe)},e.prototype.onResetSlidePosition=function(){this.$target.flexslider(0)},e.prototype.getGalleryItems=function(){var t=this.$images,n=[];return 0<t.length&&t.each(function(t,e){var i,o,a,r,s=l(e).find("img");s.length&&(i=s.attr("data-large_image"),o=s.attr("data-large_image_width"),a=s.attr("data-large_image_height"),r={alt:s.attr("alt"),src:i,w:o,h:a,title:s.attr("data-caption")?s.attr("data-caption"):s.attr("title")},n.push(r))}),n},e.prototype.openPhotoswipe=function(t){t.preventDefault();var e=l(".pswp")[0],i=this.getGalleryItems(),o=l(t.target),a=o.is(".woocommerce-product-gallery__trigger")||o.is(".woocommerce-product-gallery__trigger img")?this.$target.find(".flex-active-slide"):o.closest(".woocommerce-product-gallery__image"),r=l.extend({index:l(a).index(),addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].textContent=t.title,!0):(e.children[0].textContent="",!1)}},wc_single_product_params.photoswipe_options);new PhotoSwipe(e,PhotoSwipeUI_Default,i,r).init()},l.fn.wc_product_gallery=function(t){return new e(this,t||wc_single_product_params),this},l(".woocommerce-product-gallery").each(function(){l(this).trigger("wc-product-gallery-before-init",[this,wc_single_product_params]),l(this).wc_product_gallery(wc_single_product_params),l(this).trigger("wc-product-gallery-after-init",[this,wc_single_product_params])})});
;/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(m){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(m){}if(n===g){c=C;break}n||(c[g]=C)}catch(m){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});