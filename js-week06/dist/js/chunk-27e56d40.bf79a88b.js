(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27e56d40"],{"1dde":function(t,r,e){var o=e("d039"),c=e("b622"),i=e("2d00"),a=c("species");t.exports=function(t){return i>=51||!o((function(){var r=[],e=r.constructor={};return e[a]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"65f0":function(t,r,e){var o=e("861d"),c=e("e8b5"),i=e("b622"),a=i("species");t.exports=function(t,r){var e;return c(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!c(e.prototype)?o(e)&&(e=e[a],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===r?0:r)}},8418:function(t,r,e){"use strict";var o=e("c04e"),c=e("9bf2"),i=e("5c6c");t.exports=function(t,r,e){var a=o(r);a in t?c.f(t,a,i(0,e)):t[a]=e}},"99af":function(t,r,e){"use strict";var o=e("23e7"),c=e("d039"),i=e("e8b5"),a=e("861d"),s=e("7b0b"),n=e("50c4"),d=e("8418"),u=e("65f0"),l=e("1dde"),f=e("b622"),p=e("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=p>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=l("concat"),x=function(t){if(!a(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)},_=!m||!w;o({target:"Array",proto:!0,forced:_},{concat:function(t){var r,e,o,c,i,a=s(this),l=u(a,0),f=0;for(r=-1,o=arguments.length;r<o;r++)if(i=-1===r?a:arguments[r],x(i)){if(c=n(i.length),f+c>h)throw TypeError(b);for(e=0;e<c;e++,f++)e in i&&d(l,f,i[e])}else{if(f>=h)throw TypeError(b);d(l,f++,i)}return l.length=f,l}})},dda7:function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.isLoaded?e("div",{staticClass:"product my-4 mx-4"},[e("div",{staticClass:"row"},[e("img",{staticStyle:{height:"300px"},attrs:{src:t.product.imageUrl[0]}})]),e("div",{staticClass:"row mt-5"},[e("h4",{staticClass:"title"},[t._v(t._s(t.product.title))])]),e("div",{staticClass:"row"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),e("p",{staticClass:"mb-1 text-muted"},[e("small",[t._v(t._s(t.product.description))])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-2"},[e("del",{staticClass:"h6 text-secondary"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")])]),e("div",{staticClass:"col-10"},[e("div",{staticClass:"h5 text-dark"},[t._v("現在只要 "+t._s(t.product.price)+" 元")])])])]):t._e()},c=[],i=(e("99af"),{name:"ProductMoreDetails",data:function(){return{product:{},isLoaded:!1}},methods:{retrieveProductDetail:function(t){var r=this,e=this.$loading.show({isFullPage:!0});this.$http.get("".concat("https://course-ec-api.hexschool.io/api","/").concat("19831eca-3ff8-4cbe-9167-80b24e16783f","/ec/product/").concat(t)).then((function(t){var o=t.data.data;r.product=o,e.hide(),r.isLoaded=!0}))}},created:function(){this.retrieveProductDetail(this.$route.params.id)}}),a=i,s=e("2877"),n=Object(s["a"])(a,o,c,!1,null,null,null);r["default"]=n.exports},e8b5:function(t,r,e){var o=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-27e56d40.bf79a88b.js.map