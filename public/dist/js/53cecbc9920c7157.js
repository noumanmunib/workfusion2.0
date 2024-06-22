/*! For license information please see 53cecbc9920c7157.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[913],{9366:(t,e,r)=>{r.d(e,{A:()=>i});const a={name:"TopBoardItem",props:{data:{type:Object,default:function(){return{user:{avatar:"",tagname:"initial"}}}},leader:{type:Object,default:null},disabled:{type:Boolean,default:!0},leaderboard:{type:Boolean,default:!1},expertise:{type:Number,default:null}},computed:{projectCount:function(){return this.data.user.finished_project?this.data.user.finished_project.length:0}},methods:{changeExpertise:function(){this.leaderboard&&this.$emit("click",this.expertise)}}};var n=r(4486);const o={name:"TopBoardList",components:{TopBoardItem:(0,n.A)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"topboard-item",class:{"topboard-item--home":!t.leaderboard},on:{click:t.changeExpertise}},[e("div",[e("div",{staticClass:"topboard-item__title--container"},[e("span",{staticClass:"iconify topboard-item__title--icon",attrs:{"data-icon":t.leader.icon}}),t._v(" "),e("span",{staticClass:"topboard-item__title--name"},[t._v(t._s(t.leader.title))])]),t._v(" "),e("div",{staticClass:"topboard-item__avatar--container"},[e("div",{staticClass:"topboard-item__avatar--rank"},[t._v("\n        #1\n      ")]),t._v(" "),e("img",{staticClass:"topboard-item__avatar--img",attrs:{src:t.data.user.avatar,alt:"",height:"108",width:"108"}}),t._v(" "),e("div",{staticClass:"topboard-item__avatar--points"},[t._v("\n        "+t._s(t.data.points)+" Points\n      ")])]),t._v(" "),e("div",{staticClass:"topboard-item__identifier"},[e("div",{staticClass:"topboard-item__identifier-name"},[t._v("\n        "+t._s(t.data.user.full_name)+"\n      ")]),t._v(" "),e("div",{staticClass:"topboard-item__identifier-expertise"},[t._v("\n        "+t._s(t.data.expertise)+"\n      ")])])]),t._v(" "),e("div",[e("div",{staticClass:"topboard-item__fact"},[e("span",{staticClass:"iconify topboard-item__fact--icon",attrs:{"data-icon":"ic:round-check-circle"}}),t._v(" "),e("span",{staticClass:"topboard-item__fact--name"},[t._v(t._s(t.projectCount)+" Project Finished")])]),t._v(" "),e("router-link",{staticClass:"topboard-item__view-button",attrs:{to:{name:"@.info",params:{tagname:t.data.user.tagname}},tag:"button",disabled:t.disabled}},[t._v("\n      View Profile\n    ")])],1)])}),[],!1,null,null,null).exports},props:{arrow:{type:Boolean,default:!0},differ:{type:Boolean,default:!0},showAll:{type:Boolean,default:!1},data:{type:Object,default:null},leaderboard:{type:Boolean,default:!1}},data:function(){return{expertise:0,leader:[{icon:"whh:painting",title:"Picasso"},{icon:"bx:bx-code",title:"Front Row"},{icon:"bx:bx-code-curly",title:"Mastermind"},{icon:"bx:bxs-data",title:"Snowden"}],dummyWidth:"",navPos:""}},computed:{isDisabled:function(){return this.showAll?[{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"},{active:!0,class:"opacity-1"}]:this.differ?[{active:0===this.expertise,class:0===this.expertise?"leaderboard-item--active":""},{active:1===this.expertise,class:1===this.expertise?"leaderboard-item--active":""},{active:2===this.expertise,class:2===this.expertise?"leaderboard-item--active":""},{active:3===this.expertise,class:3===this.expertise?"leaderboard-item--active":""}]:[{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"},{active:!0,class:"leaderboard-item--active"}]},topBoards:function(){return[{data:this.data.ui_ux_designer},{data:this.data.frontend_engineer},{data:this.data.backend_engineer},{data:this.data.data_expert}]}},mounted:function(){var t=this;this.onResize(),this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{navigate:function(t){"left"===t?this.expertise--:this.expertise++,this.$refs.topBoardList.scrollLeft=235*this.expertise},onResize:function(){var t=document.querySelector("html");this.dummyWidth=(t.scrollWidth-235)/2,this.navPos=t.scrollWidth/2-50},swipeTopLeaderboard:function(t){if(!this.$matchMedia.xl){var e=this.expertise;"right"===t&&e>0?e--:"left"===t&&e<3&&e++,this.$refs.topBoardList.scrollLeft=235*e,this.expertise=e,this.leaderboard&&this.$emit("change",this.expertise)}},changeExpertise:function(t){this.leaderboard&&this.$matchMedia.xl&&(this.expertise=t,this.$emit("change",t))}}};const i=(0,n.A)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"topboard__container"},[e("div",{directives:[{name:"touch",rawName:"v-touch:swipe",value:t.swipeTopLeaderboard,expression:"swipeTopLeaderboard",arg:"swipe"}],ref:"topBoardList",staticClass:"topboard-list_container",class:{"topboard-list--showAll":t.showAll,"topboard-list_container--leaderboard":t.leaderboard}},[e("div",{class:{none:t.showAll},style:{"min-width":"".concat(t.dummyWidth/10,"rem")}}),t._v(" "),t._l(t.topBoards,(function(r,a){return e("TopBoardItem",{key:"TopBoardItem-".concat(a),class:t.isDisabled[a].class,attrs:{data:r.data,leader:t.leader[a],disabled:!t.isDisabled[a].active,expertise:a,leaderboard:t.leaderboard},on:{click:t.changeExpertise}})})),t._v(" "),e("div",{class:{none:t.showAll},style:{"min-width":"".concat(t.dummyWidth/10,"rem")}})],2),t._v(" "),t.arrow?e("div",{staticClass:"topboard-list__nav--container"},[e("button",{staticClass:"btn--clear topboard-list__nav",class:{invisible:0===t.expertise},style:{right:"".concat(t.navPos/10,"rem")},on:{click:function(e){return t.navigate("left")}}},[e("span",{staticClass:"iconify topboard-list__nav--item",attrs:{"data-icon":"bi:arrow-left-short"}})]),t._v(" "),e("button",{staticClass:"btn--clear topboard-list__nav",class:{invisible:3===t.expertise},style:{left:"".concat(t.navPos/10,"rem")},on:{click:function(e){return t.navigate("right")}}},[e("span",{staticClass:"iconify topboard-list__nav--item",attrs:{"data-icon":"bi-arrow-right-short"}})])]):t._e()])}),[],!1,null,null,null).exports},1913:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var a=r(2505),n=r.n(a),o=r(9366);const i={name:"LeaderboardItem",props:{data:{type:Object,default:null}},data:function(){return{}},computed:{points:function(){return(this.data.points/1e3).toFixed(0)+"K"},projectCount:function(){return this.data.user.finished_project?this.data.user.finished_project.length:0}},methods:{}};var s=r(4486);const d=(0,s.A)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"leaderboard-item__container"},[e("div",{staticClass:"leaderboard-item__left-container"},[e("router-link",{attrs:{to:{name:"@.info",params:{tagname:t.data.user.tagname}}}},[e("img",{staticClass:"leaderboard-item__img",attrs:{src:t.data.user.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"leaderboard-item__body"},[e("div",{staticClass:"leaderboard-item__body-top"},[e("div",{staticClass:"leaderboard-item__name"},[t._v("\n          "+t._s(t.data.user.full_name)+"\n        ")]),t._v(" "),e("div",{staticClass:"leaderboard-item__expertise"},[t._v("\n          "+t._s(t.data.expertise)+"\n        ")])]),t._v(" "),e("div",{staticClass:"leaderboard-item__stat"},[e("span",{staticClass:"iconify leaderboard-item__stat-icon",attrs:{"data-icon":"ic:round-check-circle"}}),t._v(" "),e("span",{staticClass:"leaderboard-item__stat-text"},[t._v(t._s(t.projectCount)+" Project Finished")])])])],1),t._v(" "),e("div",{staticClass:"leaderboard-item__points-container"},[e("span",{staticClass:"leaderboard-item__points--number"},[t._v(t._s(t.points))]),t._v(" "),e("span",{staticClass:"leaderboard-item__points--text"},[t._v("Points")])])])}),[],!1,null,"6ac22d52",null).exports;function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function p(){p=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new S(a||[]);return n(i,"_invoke",{value:j(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var _="suspendedStart",f="suspendedYield",v="executing",b="completed",m={};function g(){}function x(){}function y(){}var L={};l(L,i,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(O([])));k&&k!==r&&a.call(k,i)&&(L=k);var C=y.prototype=g.prototype=Object.create(L);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function M(t,e){function r(n,o,i,s){var d=h(t[n],t,o);if("throw"!==d.type){var l=d.arg,u=l.value;return u&&"object"==c(u)&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(d.arg)}var o;n(this,"_invoke",{value:function(t,a){function n(){return new e((function(e,n){r(t,a,e,n)}))}return o=o?o.then(n,n):n()}})}function j(e,r,a){var n=_;return function(o,i){if(n===v)throw Error("Generator is already running");if(n===b){if("throw"===o)throw i;return{value:t,done:!0}}for(a.method=o,a.arg=i;;){var s=a.delegate;if(s){var d=B(s,a);if(d){if(d===m)continue;return d}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===_)throw n=b,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=v;var c=h(e,r,a);if("normal"===c.type){if(n=a.done?b:f,c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n=b,a.method="throw",a.arg=c.arg)}}}function B(e,r){var a=r.method,n=e.iterator[a];if(n===t)return r.delegate=null,"throw"===a&&e.iterator.return&&(r.method="return",r.arg=t,B(e,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var o=h(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function O(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(c(e)+" is not iterable")}return x.prototype=y,n(C,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:x,configurable:!0}),x.displayName=l(y,d,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,d,"GeneratorFunction")),t.prototype=Object.create(C),t},e.awrap=function(t){return{__await:t}},E(M.prototype),l(M.prototype,s,(function(){return this})),e.AsyncIterator=M,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new M(u(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(C),l(C,d,"Generator"),l(C,i,(function(){return this})),l(C,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return s.type="throw",s.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var d=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(d&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(d){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;P(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:O(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),m}},e}function h(t,e,r,a,n,o,i){try{var s=t[o](i),d=s.value}catch(t){return void r(t)}s.done?e(d):Promise.resolve(d).then(a,n)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){h(o,a,n,i,s,"next",t)}function s(t){h(o,a,n,i,s,"throw",t)}i(void 0)}))}}const f={name:"LeaderboardPage",components:{TopBoardList:o.A,LeaderboardItem:d},metaInfo:function(){return{title:"Leaderboard",meta:[{name:"description",content:"workfusion Leaderboard: Shows all the Top Student amongs expertises"}]}},data:function(){return{loadMore:{can:!0,link:""},topLeaderboards:{},topBoards:{},currentExpertise:{},expertise:"UI/UX Designer"}},computed:{title:function(){return"UI/UX Designer"===this.expertise?"Picasso":"Frontend Engineer"===this.expertise?"Front Row":"Backend Engineer"===this.expertise?"Mastermind":"Snowden"}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return _(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().get("/api/leaderboards").then((function(e){var r=e.data;t.topBoards={ui_ux_designer:r.top_boards.ui_ux_designer.data.shift(),frontend_engineer:r.top_boards.frontend_engineer.data.shift(),backend_engineer:r.top_boards.backend_engineer.data.shift(),data_expert:r.top_boards.data_expert.data.shift()},t.topLeaderboards=r.top_boards,t.currentExpertise=t.topLeaderboards.ui_ux_designer.data,t.topLeaderboards.ui_ux_designer.next_page_url?(t.loadMore.can=!0,t.loadMore.link=t.topLeaderboards.ui_ux_designer.next_page_url):t.loadMore.can=!1}));case 2:case"end":return e.stop()}}),e)})))()},doLoadMore:function(){var t=this;return _(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n().get(t.loadMore.link).then((function(e){var r,a,n,o,i=e.data;t.topLeaderboards.ui_ux_designer.next_page_url=i.top_boards.ui_ux_designer.next_page_url,t.topLeaderboards.frontend_engineer.next_page_url=i.top_boards.frontend_engineer.next_page_url,t.topLeaderboards.backend_engineer.next_page_url=i.top_boards.backend_engineer.next_page_url,t.topLeaderboards.data_expert.next_page_url=i.top_boards.data_expert.next_page_url,"UI/UX Designer"===t.expertise?t.topLeaderboards.ui_ux_designer.next_page_url?(t.loadMore.can=!0,t.loadMore.link=t.topLeaderboards.ui_ux_designer.next_page_url):t.loadMore.can=!1:"Frontend Engineer"===t.expertise?t.topLeaderboards.frontend_engineer.next_page_url?(t.loadMore.can=!0,t.loadMore.link=t.topLeaderboards.frontend_engineer.next_page_url):t.loadMore.can=!1:"Backend Engineer"===t.expertise?t.topLeaderboards.backend_engineer.next_page_url?(t.loadMore.can=!0,t.loadMore.link=t.topLeaderboards.backend_engineer.next_page_url):t.loadMore.can=!1:"Data Expert"===t.expertise&&(t.topLeaderboards.data_expert.next_page_url?(t.loadMore.can=!0,t.loadMore.link=t.topLeaderboards.data_expert.next_page_url):t.loadMore.can=!1),(r=t.topLeaderboards.ui_ux_designer.data).push.apply(r,l(i.top_boards.ui_ux_designer.data)),(a=t.topLeaderboards.frontend_engineer.data).push.apply(a,l(i.top_boards.frontend_engineer.data)),(n=t.topLeaderboards.backend_engineer.data).push.apply(n,l(i.top_boards.backend_engineer.data)),(o=t.topLeaderboards.data_expert.data).push.apply(o,l(i.top_boards.data_expert.data))}));case 2:case"end":return e.stop()}}),e)})))()},changeExpertise:function(t){0===t?(this.currentExpertise=this.topLeaderboards.ui_ux_designer.data,this.expertise=this.topLeaderboards.ui_ux_designer.data[0].expertise,this.topLeaderboards.ui_ux_designer.next_page_url?(this.loadMore.can=!0,this.loadMore.link=this.topLeaderboards.ui_ux_designer.next_page_url):this.loadMore.can=!1):1===t?(this.currentExpertise=this.topLeaderboards.frontend_engineer.data,this.expertise=this.topLeaderboards.frontend_engineer.data[0].expertise,this.topLeaderboards.frontend_engineer.next_page_url?(this.loadMore.can=!0,this.loadMore.link=this.topLeaderboards.frontend_engineer.next_page_url):this.loadMore.can=!1):2===t?(this.currentExpertise=this.topLeaderboards.backend_engineer.data,this.expertise=this.topLeaderboards.backend_engineer.data[0].expertise,this.topLeaderboards.backend_engineer.next_page_url?(this.loadMore.can=!0,this.loadMore.link=this.topLeaderboards.backend_engineer.next_page_url):this.loadMore.can=!1):3===t&&(this.currentExpertise=this.topLeaderboards.data_expert.data,this.expertise=this.topLeaderboards.data_expert.data[0].expertise,this.topLeaderboards.data_expert.next_page_url?(this.loadMore.can=!0,this.loadMore.link=this.topLeaderboards.data_expert.next_page_url):this.loadMore.can=!1)}}};const v=(0,s.A)(f,(function(){var t=this,e=t._self._c;return e("div",{},[t.$matchMedia.xl?e("h2",{staticClass:"leaderboard__h1"},[t._v("\n    Leaderboard\n  ")]):t._e(),t._v(" "),e("TopBoardList",{attrs:{leaderboard:!0,arrow:!1,data:t.topBoards},on:{change:t.changeExpertise}}),t._v(" "),e("div",{staticClass:"leaderboard-body__container"},[t.$matchMedia.xl?e("h2",{staticClass:"leaderboard__h2"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"leaderboard-items__container"},t._l(t.currentExpertise,(function(t){return e("LeaderboardItem",{key:"LeaderboardItem-".concat(t.id),attrs:{data:t}})})),1),t._v(" "),t.loadMore.can?e("button",{staticClass:"btn btn--blue mt-2 mx-auto",on:{click:t.doLoadMore}},[t._v("\n      Load More\n    ")]):t._e()])],1)}),[],!1,null,null,null).exports}}]);