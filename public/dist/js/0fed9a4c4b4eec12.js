/*! For license information please see 0fed9a4c4b4eec12.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[120],{8120:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(2505),o=r.n(n);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(){a=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),s=new $(n||[]);return o(a,"_invoke",{value:E(t,r,s)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",d="suspendedYield",m="executing",y="completed",g={};function b(){}function _(){}function w(){}var j={};f(j,c,(function(){return this}));var x=Object.getPrototypeOf,P=x&&x(x(I([])));P&&P!==r&&n.call(P,c)&&(j=P);var O=w.prototype=b.prototype=Object.create(j);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,s,c){var u=p(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function E(e,r,n){var o=v;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=C(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?y:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(i(e)+" is not iterable")}return _.prototype=w,o(O,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:_,configurable:!0}),_.displayName=f(w,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},k(L.prototype),f(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(O),f(O,l,"Generator"),f(O,c,(function(){return this})),f(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const h={name:"VisitedUserIndex",data:function(){return{inviteTo:""}},computed:l(l({},(0,r(5353).L8)({user:"auth/user",ownProjects:"auth/projects",data:"visit/user",snackbar:"notification/snackbar"})),{},{tabs:function(){return"Student"===this.data.user.role?[{name:"Projects",route:"@.projects"},{name:"Wishlist",route:"@.wishlist"},{name:"Info",route:"@.info"}]:[{name:"Projects",route:"@.projects"},{name:"Info",route:"@.info"}]},isSelf:function(){return!!this.user&&this.user.id===this.data.user.id},hiringProjects:function(){return this.ownProjects.filter((function(t){return"Hiring"===t.status}))}}),mounted:function(){this.getUser()},methods:{getUser:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("visit/fetchVisitedUser",{tagname:t.$route.params.tagname});case 2:t.changeTitle();case 3:case"end":return e.stop()}}),e)})))()},changeTitle:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch("navigation/changeTitle",{title:t.data.user.full_name});case 1:case"end":return e.stop()}}),e)})))()},inviteToTeam:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.user?o().post("/api/user/".concat(t.data.user.tagname,"/invite/team")).then((function(e){var r=e.data;t.snackbar.open(r.message)})):t.$router.push({name:"login"});case 1:case"end":return e.stop()}}),e)})))()},showOwnProjects:function(){null===this.ownProjects||0===this.ownProjects.length?this.snackbar.open("You don't have any projects yet"):(this.inviteTo=this.hiringProjects[0].id,this.$refs.listOwnProjects.openModal())},inviteToProject:function(){var t=this;return c(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.user?o().post("/api/user/".concat(t.data.user.tagname,"/invite/project"),{project_id:t.inviteTo}).then((function(e){var r=e.data;t.snackbar.open(r.message),t.$refs.listOwnProjects.closeModal()})).catch((function(e){t.snackbar.open(e.response.data.message)})):t.$router.push({name:"login"});case 1:case"end":return e.stop()}}),e)})))()}}};const p=(0,r(4486).A)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user__container"},[e("div",{staticClass:"user__info--container"},[e("img",{staticClass:"user__info--img",attrs:{src:t.data.user.avatar,alt:""}}),t._v(" "),e("p",{staticClass:"user__info--name"},[t._v("\n      "+t._s(t.data.user.full_name)+"\n    ")]),t._v(" "),e("p",{staticClass:"user__info--occupation"},[t._v("\n      "+t._s(t.data.user.expertise)+"\n    ")])]),t._v(" "),e("div",{staticClass:"user__action--container"},["Student"===t.data.user.role?[t.user&&"Lecturer"===t.user.role?e("button",{staticClass:"btn action--button btn--blue",attrs:{disabled:t.isSelf||!t.data.user.is_open_hired},on:{click:t.showOwnProjects}},[t._v("\n        Invite To Project\n      ")]):e("button",{staticClass:"btn action--button btn--blue",attrs:{disabled:t.isSelf},on:{click:t.inviteToTeam}},[t._v("\n        Invite To Party\n      ")]),t._v(" "),e("router-link",{staticClass:"btn action--button btn--white",attrs:{to:{name:"message",params:{tagname:this.$route.params.tagname}},tag:"button",disabled:t.isSelf}},[t._v("\n        Direct Message\n      ")])]:[e("router-link",{staticClass:"btn action--button btn--white",attrs:{to:{name:"message",params:{tagname:this.$route.params.tagname}},tag:"button",disabled:t.isSelf}},[t._v("\n        Contact client\n      ")])]],2),t._v(" "),t.$matchMedia.xl?t._e():e("div",{staticClass:"user__sub-menu--container"},t._l(t.tabs,(function(r){return e("router-link",{key:r.route,staticClass:"user__sub-menu--item",attrs:{to:{name:r.route},"active-class":"user__sub-menu--active"}},[t._v("\n      "+t._s(r.name)+"\n    ")])})),1),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"user__sub-menu"},[e("div",{staticClass:"user__sub-menu--left"},t._l(t.tabs,(function(r){return e("router-link",{key:r.route,staticClass:"user__sub-menu--item",attrs:{to:{name:r.route},"active-class":"user__sub-menu--active"}},[t._v("\n        "+t._s(r.name)+"\n      ")])})),1)]):t._e(),t._v(" "),e("Modal",{ref:"listOwnProjects",attrs:{type:"small"},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",[e("h4",{staticClass:"post__modal--h4 my-0"},[t._v("\n          Invite to\n        ")])])]},proxy:!0},{key:"body",fn:function(){return[e("div",[e("hr",{staticClass:"my-0 mb-2_5"}),t._v(" "),e("div",{staticClass:"form-group__container"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.inviteTo,expression:"inviteTo"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inviteTo=e.target.multiple?r:r[0]}}},t._l(t.hiringProjects,(function(r){return e("option",{key:"Option-".concat(r.id),domProps:{value:r.id}},[t._v("\n                "+t._s(r.title)+"\n              ")])})),0),t._v(" "),e("span",{staticClass:"focus"})])])])]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"btn btn--blue ml-auto",on:{click:t.inviteToProject}},[t._v("\n        Invite\n      ")])]},proxy:!0}])}),t._v(" "),t.$matchMedia.xl?e("hr",{staticClass:"separator-short mt-2_5 mb-3"}):t._e(),t._v(" "),e("div",{},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)],1)}),[],!1,null,null,null).exports}}]);