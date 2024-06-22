/*! For license information please see 28294876df34edd2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[188],{5188:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(2957),o=r.n(n),i=r(5353),a=r(2505),s=r.n(a);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(){u=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),s=new T(n||[]);return o(a,"_invoke",{value:E(t,r,s)}),a}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var m="suspendedStart",h="suspendedYield",d="executing",_="completed",y={};function g(){}function w(){}function b(){}var x={};p(x,a,(function(){return this}));var j=Object.getPrototypeOf,C=j&&j(j($([])));C&&C!==r&&n.call(C,a)&&(x=C);var P=b.prototype=g.prototype=Object.create(x);function O(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,s){var u=v(t[o],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==c(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(p).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=m;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===_){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=k(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var u=v(e,r,n);if("normal"===u.type){if(o=n.done?_:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=_,n.method="throw",n.arg=u.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=v(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function $(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=b,o(P,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:w,configurable:!0}),w.displayName=p(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,p(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},O(L.prototype),p(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(P),p(P,l,"Generator"),p(P,a,(function(){return this})),p(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=$,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function l(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){l(i,n,o,a,s,"next",t)}function s(t){l(i,n,o,a,s,"throw",t)}a(void 0)}))}}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const m={name:"ReviewProject",layout:"back",middleware:["auth","lecturer"],metaInfo:function(){return{title:"Review Project"}},data:function(){return{detail:{project:{title:""}},form:new(o())({overall_score:"",overall_review:"",project_result:"",participants:[{assessment:"",score:""}]})}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,i.L8)({snackbar:"notification/snackbar"})),mounted:function(){this.getDetails()},methods:{getDetails:function(){var t=this;return p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api"+t.$route.path).then((function(e){var r=e.data;t.detail=r,t.transformApiToForm()}));case 2:case"end":return e.stop()}}),e)})))()},transformApiToForm:function(){this.form.participants=this.detail.participants.map((function(t){return{member_id:t.member_id,assessment:"",score:"",expertise:t.expertise}}))},postReview:function(){var t=this;return p(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.form.submit("post","/api/project/".concat(t.detail.project.project_url,"/review")).then((function(e){var r=e.data;t.snackbar.open(r.message),t.$router.push({name:"projectbox"})})).catch((function(e){t.snackbar.open(e.response.data.message)}));case 1:case"end":return e.stop()}}),e)})))()}}};const h=(0,r(4486).A)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"review__container"},[e("TopImage",{attrs:{type:2}}),t._v(" "),e("h2",{staticClass:"review__h2"},[t._v("\n    Review Project\n  ")]),t._v(" "),e("div",{staticClass:"review-top__container"},[e("img",{staticClass:"review__image",attrs:{src:t.detail.project.thumbnail_url,alt:""}}),t._v(" "),e("h3",{staticClass:"review__title"},[t._v("\n      "+t._s(t.detail.project.title)+"\n    ")])]),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.postReview.apply(null,arguments)},keydown:function(e){return t.form.onKeydown(e)}}},[e("div",{},[e("div",{staticClass:"review__overall--container"},[e("h4",{staticClass:"review__overall--score"},[t._v("\n          Overall Score\n        ")]),t._v(" "),e("div",{staticClass:"review__overall--dots"},[t._v("\n          :\n        ")]),t._v(" "),e("div",{staticClass:"w-100"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.overall_score,expression:"form.overall_score"}],staticClass:"form-group__input-text",attrs:{placeholder:"Scale is 0.0 - 5.0",type:"number",step:"0.1",min:"0.0",max:"5.0",required:""},domProps:{value:t.form.overall_score},on:{input:function(e){e.target.composing||t.$set(t.form,"overall_score",e.target.value)}}})])]),t._v(" "),e("has-error",{attrs:{form:t.form,field:"email"}}),t._v(" "),e("div",{staticClass:"form-group__container"},[e("h4",{staticClass:"form-group__input-name"},[t._v("\n          Overall Review\n        ")]),t._v(" "),e("div",{},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.overall_review,expression:"form.overall_review"}],staticClass:"form-group__input-textarea",attrs:{placeholder:"Max. 500 words",rows:"8"},domProps:{value:t.form.overall_review},on:{input:function(e){e.target.composing||t.$set(t.form,"overall_review",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"separator-short mt-3 mb-3"}),t._v(" "),e("div",[e("h4",{staticClass:"review__h4"},[t._v("\n          Project Participants\n        ")]),t._v(" "),e("div",{staticClass:"review__participant--list"},t._l(t.detail.participants,(function(r,n){return e("div",{key:"ProjectParticipant-".concat(n)},[e("div",{staticClass:"review-participant__left-container"},[e("div",{staticClass:"review__participant--container"},[e("div",{staticClass:"review__participant--img"},[e("img",{staticClass:"review__participant--img",attrs:{src:r.member.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"review__participant--info"},[t._m(0,!0),t._v(" "),e("p",[t._v(t._s(r.member.full_name))]),t._v(" "),e("p",[t._v(t._s(r.expertise))])])]),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"form-group__container review-score__container"},[e("h4",{staticClass:"form-group__input-name post__h4"},[t._v("\n                  Freelancer Score\n                ")]),t._v(" "),e("div",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.participants[n].score,expression:"form.participants[index].score"}],staticClass:"form-group__input-text",attrs:{placeholder:"Write down your student score",type:"number",step:"0.1",min:"0.0",max:"5.0",required:""},domProps:{value:t.form.participants[n].score},on:{input:function(e){e.target.composing||t.$set(t.form.participants[n],"score",e.target.value)}}})])]):t._e()]),t._v(" "),e("div",{staticClass:"mb-1_5"},[e("h4",{staticClass:"form-group__input-name post__h4"},[t._v("\n                Assessment\n              ")]),t._v(" "),e("div",{},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.participants[n].assessment,expression:"form.participants[index].assessment"}],staticClass:"form-group__input-textarea",attrs:{placeholder:"Write down your assessment",rows:"5"},domProps:{value:t.form.participants[n].assessment},on:{input:function(e){e.target.composing||t.$set(t.form.participants[n],"assessment",e.target.value)}}})])]),t._v(" "),t.$matchMedia.xl?t._e():e("div",{staticClass:"form-group__container"},[e("h4",{staticClass:"form-group__input-name"},[t._v("\n                Student Score\n              ")]),t._v(" "),e("div",{},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.participants[n].score,expression:"form.participants[index].score"}],staticClass:"form-group__input-text",attrs:{placeholder:"Write down your student score",type:"number",step:"0.1",min:"0.0",max:"5.0"},domProps:{value:t.form.participants[n].score},on:{input:function(e){e.target.composing||t.$set(t.form.participants[n],"score",e.target.value)}}})])])])})),0)]),t._v(" "),e("div",{staticClass:"separator-short mt-3 mb-3"}),t._v(" "),e("div",{staticClass:"form-group__container"},[e("h4",{staticClass:"form-group__input-name"},[t._v("\n          Project Result\n        ")]),t._v(" "),e("div",{staticClass:"social-media__edit-input--container"},[e("span",{staticClass:"iconify social-media__edit--icon",attrs:{"data-icon":"whh:website"}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.project_result,expression:"form.project_result"}],staticClass:"social-media__input",attrs:{type:"url",placeholder:"e.g., project.github.io"},domProps:{value:t.form.project_result},on:{input:function(e){e.target.composing||t.$set(t.form,"project_result",e.target.value)}}})])]),t._v(" "),e("button",{staticClass:"btn btn--large btn--blue mt-3 ml-auto"},[t._v("\n        Post Review\n      ")])],1)])],1)}),[function(){var t=this._self._c;return t("p",[t("b",[this._v("Member")])])}],!1,null,null,null).exports}}]);