/*! For license information please see 3a6c3478811f1fca.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91],{2017:(t,e,r)=>{r.d(e,{GP:()=>l});var n=["second","minute","hour","day","week","month","year"];var i=["秒","分钟","小时","天","周","个月","年"];var a={},o=function(t,e){a[t]=e},s=[60,60,24,7,365/7/12,12];function c(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}var l=function(t,e,r){var n=function(t,e){return(+(e?c(e):new Date)-+c(t))/1e3}(t,r&&r.relativeDate);return function(t,e){for(var r=t<0?1:0,n=t=Math.abs(t),i=0;t>=s[i]&&i<s.length;i++)t/=s[i];return(t=Math.floor(t))>(0==(i*=2)?9:1)&&(i+=1),e(t,i,n)[r].replace("%s",t.toString())}(n,function(t){return a[t]||a.en_US}(e))};o("en_US",(function(t,e){if(0===e)return["just now","right now"];var r=n[Math.floor(e/2)];return t>1&&(r+="s"),[t+" "+r+" ago","in "+t+" "+r]})),o("zh_CN",(function(t,e){if(0===e)return["刚刚","片刻后"];var r=i[~~(e/2)];return[t+" "+r+"前",t+" "+r+"后"]}))},4091:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(5353),i=r(2017);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function o(){o=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),s=new M(n||[]);return i(o,"_invoke",{value:L(t,r,s)}),o}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",m="suspendedYield",v="executing",_="completed",y={};function g(){}function j(){}function b(){}var w={};p(w,c,(function(){return this}));var x=Object.getPrototypeOf,C=x&&x(x(T([])));C&&C!==r&&n.call(C,c)&&(w=C);var k=b.prototype=g.prototype=Object.create(w);function P(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,s,c){var l=d(t[i],t,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==a(p)&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(p).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function L(e,r,n){var i=f;return function(a,o){if(i===v)throw Error("Generator is already running");if(i===_){if("throw"===a)throw o;return{value:t,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=O(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=_,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=v;var l=d(e,r,n);if("normal"===l.type){if(i=n.done?_:m,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=_,n.method="throw",n.arg=l.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(i,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(a(e)+" is not iterable")}return j.prototype=b,i(k,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:j,configurable:!0}),j.displayName=p(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,p(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},P(E.prototype),p(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(h(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(k),p(k,u,"Generator"),p(k,c,(function(){return this})),p(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;D(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function s(t,e,r,n,i,a,o){try{var s=t[a](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,i)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=a(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==a(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const p={name:"ProjectDashboard",middleware:["auth"],metaInfo:function(){return{title:"Project Dashboard"}},data:function(){return{projects:null,bgBubble:"blue",copyText:"Copy",image:"/images/img-placeholder.png",networks:[{network:"facebook",name:"Facebook",icon:"fa-brands:facebook-f"},{network:"telegram",name:"Telegram",icon:"fa-brands:telegram-plane"},{network:"twitter",name:"Twitter",icon:"fa-brands:twitter"},{network:"line",name:"Line",icon:"fa-brands:line"},{network:"whatsapp",name:"Whatsapp",icon:"fa-brands:whatsapp"}]}},computed:l(l({},(0,n.L8)({project:"visit/project",user:"auth/user"})),{},{members:function(){return this.project.project_team?this.project.project_team.members:[]},sharing:function(){return{url:window.location.href,title:this.project.title?this.project.title:"undefined",description:this.project.description}},startSince:function(){return new Date(this.project.start_time).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})},summaries:function(){return[{type:"icon",icon:"bi:brush",text:"Expertise in ".concat(this.expertiseIn)},{type:"icon",icon:"fa-solid:dollar-sign",text:this.rewards},{type:"icon",icon:"ic:round-access-time",text:"Posted ".concat(this.getHumanDate(this.project.created_at))},{type:"icon",icon:"ic:baseline-work",text:"".concat(this.totalApplicants," Total Applicants")},{type:"icon",icon:"ant-design:star-filled",text:"Joining Project Grant up to ".concat(this.grantMaximumPoints," Points")},{type:"icon",icon:"ic:round-supervisor-account",text:this.maxPerson},{type:"text",icon:"LVL",text:this.project.level_applicant},{type:"text",icon:"Pts",text:"Require Minimal ".concat(this.minimumPoints," Points for each Person")}]},grantMaximumPoints:function(){return"Easy"===this.project.level_applicant?2e3:"Medium"===this.project.level_applicant?2500:"Hard"===this.project.level_applicant?4e3:"Expert"===this.project.level_applicant?5e3:0},minimumPoints:function(){return"Easy"===this.project.level_applicant?0:"Medium"===this.project.level_applicant?1500:"Hard"===this.project.level_applicant?4500:"Expert"===this.project.level_applicant?9e3:0},expertiseIn:function(){return[{name:"UI/UX Designer",isRequired:this.project.ui_ux_designer},{name:"Frontend Engineer",isRequired:this.project.front_end_engineer},{name:"Backend Engineer",isRequired:this.project.back_end_engineer},{name:"Data Expert",isRequired:this.project.data_expert}].filter((function(t){return!0===t.isRequired})).map((function(t){return t.name})).join(", ")},rewards:function(){if(this.project.salary){var t="person"===this.project.payment_type?"for each person":"for whole project";return"".concat(new Intl.NumberFormat("id-ID").format(this.project.salary_amount),",- ").concat(this.project.currency," ").concat(t," ").concat(this.project.certificate?"+ Certificate":"")}return"Certificate"},maxPerson:function(){var t=1===this.project.max_person?"Person":"Persons";return"Max. ".concat(this.project.max_person," ").concat(t," (").concat(this.project.applicant_type,")")},totalApplicants:function(){return this.project.individual_applicants_count},projectReview:function(){return{icon:"whh:website",link:this.project.project_review.project_result?this.project.project_review.project_result:"",linkFiltered:this.project.project_review.project_result?this.filterLink(this.project.project_review.project_result):""}},isSelf:function(){return!!this.user&&this.user.tagname===this.project.user.tagname}}),mounted:function(){this.getDetails()},methods:{getDetails:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("visit/fetchVisitedProject",{id:e.$route.params.id});case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){s(a,n,i,o,c,"next",t)}function c(t){s(a,n,i,o,c,"throw",t)}o(void 0)}))})()},getHumanDate:function(t){return i.GP(t)},copyToClipboard:function(){var t=document.createElement("textarea");t.value=window.location.href,t.setAttribute("readonly",""),t.style={position:"absolute",left:"-999.9rem"},document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.copyText="Copied",this.snackbar.open("Project link copied")},filterLink:function(t){if("-"===t)return null;var e=t.split("//");return e[e.length-1]}}};const h=(0,r(4486).A)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-details--container"},[e("div",{staticClass:"details--top-container"},[e("div",[e("div",{staticClass:"project-details--image-container"},[e("div",{staticClass:"project-details--image"},[e("expandable-image",{staticClass:"details__image",attrs:{src:t.project.thumbnail_url,"close-on-background-click":!0}})],1)])]),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"details__top--left"},[e("div",{staticClass:"z-1"},[e("h1",{staticClass:"project-details--h1 text-outline--thin"},[t._v("\n          "+t._s(t.project.title)+"\n        ")]),t._v(" "),e("p",{staticClass:"details__ongoing--p text-bold text-italic"},[t._v("\n          On Going Project Since "+t._s(t.startSince)+"\n        ")]),t._v(" "),e("p",{staticClass:"details__ongoing--p"},[t._v("\n          Please contact your lecturer for your further information about the\n          project.\n        ")])])]):e("div",{staticClass:"mb-2_5"},[e("h1",{staticClass:"project-details--h1"},[t._v("\n        "+t._s(t.project.title)+"\n      ")])]),t._v(" "),t.$matchMedia.xl?t._e():e("div",[e("div",[e("h3",{staticClass:"project-dashboard__h3"},[t._v("\n          Project Participants\n        ")]),t._v(" "),e("div",{staticClass:"project-dashboard__list-team"},t._l(t.members,(function(r,n){return e("div",{key:"ProjectParticipant-".concat(n),staticClass:"project-dashboard__list-team--item"},[e("router-link",{attrs:{to:{path:"/@/"+r.member.tagname}}},[e("img",{staticClass:"project-dashboard__list-team--img",attrs:{src:r.member.avatar,alt:""}})]),t._v(" "),e("div",{},[e("p",{staticClass:"project-dashboard__list-team--name"},[t._v("\n                "+t._s(r.member.full_name)+"\n              ")]),t._v(" "),e("p",{staticClass:"project-dashboard__list-team--expertise"},[t._v("\n                "+t._s(r.expertise)+"\n              ")])])],1)})),0),t._v(" "),e("p",{staticClass:"details__ongoing--p"},[t._v("\n          Please contact your lecturer for your further information about the\n          project.\n        ")])])]),t._v(" "),t.$matchMedia.xl?t._e():e("h2",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#project-details",expression:"'#project-details'"}],staticClass:"project-details--h2",attrs:{id:"project-details"}},[t._m(0)])]),t._v(" "),t.$matchMedia.xl?e("hr",{staticClass:"form--hr"}):t._e(),t._v(" "),e("div",{staticClass:"desktop-details__body"},[e("div",{staticClass:"project-details--main-body"},[t.$matchMedia.xl?t._e():e("div",{staticClass:"project-details__lecturer-info"},[e("div",{staticClass:"lecturer-info--left"},[e("div",{staticClass:"lecturer-info--image-container mr-1"},[e("router-link",{staticClass:"lencturer-text-link",attrs:{to:{path:"/@/"+t.project.user.tagname}}},[e("img",{attrs:{src:t.project.user.avatar,alt:"".concat(t.project.user.full_name," Photo Profile")}})])],1),t._v(" "),e("div",[t._m(1),t._v(" "),e("div",[t._v(t._s(t.project.user.full_name))]),t._v(" "),e("div",[t._v(t._s(t.project.user.identity_number))]),t._v(" "),e("div",[t._v(t._s(t.project.user.expertise))])])]),t._v(" "),t._m(2)]),t._v(" "),e("div",[t.$matchMedia.xl?e("div",{staticClass:"mb-3"},[e("h3",{staticClass:"project-dashboard__h3 text-left"},[t._v("\n            Project Participants\n          ")]),t._v(" "),e("div",{staticClass:"project-dashboard__list-team flex-start"},t._l(t.members,(function(r,n){return e("div",{key:"ProjectParticipant-".concat(n),staticClass:"project-dashboard__list-team--item"},[e("router-link",{attrs:{to:{path:"/@/"+r.member.tagname}}},[e("img",{staticClass:"project-dashboard__list-team--img",attrs:{src:r.member.avatar,alt:""}})]),t._v(" "),e("div",{},[e("p",{staticClass:"project-dashboard__list-team--name"},[t._v("\n                  "+t._s(r.member.full_name)+"\n                ")]),t._v(" "),e("p",{staticClass:"project-dashboard__list-team--expertise"},[t._v("\n                  "+t._s(r.expertise)+"\n                ")])])],1)})),0)]):t._e(),t._v(" "),e("div",{staticClass:"project-description"},[e("h3",[t._v("Description")]),t._v(" "),e("p",[t._v(t._s(t.project.description))])]),t._v(" "),e("div",[e("div",{staticClass:"project-requirements"},[e("h3",[t._v("Requirements")]),t._v(" "),e("ul",{staticClass:"requirements--container"},t._l(t.project.requirements,(function(r){return e("li",{key:r.id},[t._v("\n                "+t._s(r.requirement)+"\n              ")])})),0)]),t._v(" "),e("div",{staticClass:"project-skills"},[e("h3",[t._v("Skills")]),t._v(" "),e("div",{staticClass:"skills--container"},t._l(t.project.skills,(function(r){return e("BubbleSkill",{key:r.id,attrs:{color:t.bgBubble,name:r.name}})})),1)])])]),t._v(" "),t.$matchMedia.xl?t._e():e("div",{staticClass:"project-summary"},[e("h2",{staticClass:"summary--h2"},[t._v("\n          Summary Project\n        ")]),t._v(" "),e("div",{staticClass:"summary--items"},t._l(t.summaries,(function(r,n){return e("div",{key:"SummaryItem-".concat(n),staticClass:"summary--item"},["icon"===r.type?[e("div",{staticClass:"summary-icon"},[e("span",{staticClass:"iconify",attrs:{"data-icon":r.icon,width:"15",height:"15"}})]),t._v("\n              "+t._s(r.text)+"\n            ")]:[e("div",{staticClass:"summary-icon"},[e("span",{staticClass:"summary--text-icon"},[t._v(t._s(r.icon))])]),t._v("\n              "+t._s(r.text)+"\n            ")]],2)})),0)])]),t._v(" "),e("div",{staticClass:"desktop__body--right"},[t.$matchMedia.xl?e("div",{staticClass:"lecturer-info--left"},[e("div",{staticClass:"lecturer-info--image-container mr-1"},[e("router-link",{staticClass:"lencturer-text-link",attrs:{to:{path:"/@/"+t.project.user.tagname}}},[e("img",{attrs:{src:t.project.user.avatar,alt:"".concat(t.project.user.full_name," Photo Profile")}})])],1),t._v(" "),e("div",{staticClass:"details__poster--info"},[t._m(3),t._v(" "),e("p",[t._v(t._s(t.project.user.full_name))]),t._v(" "),e("p",[t._v("NIP. "+t._s(t.project.user.identity_number))]),t._v(" "),e("p",[t._v(t._s(t.project.user.expertise))])])]):t._e(),t._v(" "),e("router-link",{staticClass:"btn btn--blue btn--large",attrs:{to:{name:"message",params:{tagname:t.project.user.tagname}},tag:"button",disabled:t.isSelf}},[t._v("\n        Contact client\n      ")]),t._v(" "),t.$matchMedia.xl?e("div",{staticClass:"project-summary"},[e("div",{staticClass:"details__share--container"},[e("h2",{},[t._v("\n            Share\n          ")]),t._v(" "),e("div",{staticClass:"flex-row share__button--container"},[e("div",{staticClass:"details__share--button",on:{click:t.copyToClipboard}},[e("span",{staticClass:"iconify details__share--icon",attrs:{"data-icon":"ic:round-link"}}),t._v(" "),e("span",[t._v(t._s(t.copyText))])]),t._v(" "),t._l(t.networks,(function(r){return e("ShareNetwork",{key:r.network,class:"details__share--button",attrs:{network:r.network,url:t.sharing.url,title:t.sharing.title,description:t.sharing.description}},[e("span",{staticClass:"iconify details__share--icon",attrs:{"data-icon":r.icon}}),t._v(" "),e("span",[t._v(t._s(r.name))])])}))],2)]),t._v(" "),e("div",[e("h2",{staticClass:"summary--h2"},[t._v("\n            Summary Project\n          ")]),t._v(" "),e("div",{staticClass:"summary--items"},t._l(t.summaries,(function(r,n){return e("div",{key:"SummaryItem-".concat(n),staticClass:"summary--item"},["icon"===r.type?[e("div",{staticClass:"summary-icon"},[e("span",{staticClass:"iconify",attrs:{"data-icon":r.icon,width:"24",height:"24"}})]),t._v("\n                "+t._s(r.text)+"\n              ")]:[e("div",{staticClass:"summary-icon"},[e("span",{staticClass:"summary--text-icon"},[t._v(t._s(r.icon))])]),t._v("\n                "+t._s(r.text)+"\n              ")]],2)})),0)])]):t._e()],1)])])}),[function(){var t=this,e=t._self._c;return e("a",{staticClass:"button__project--more",attrs:{href:"#project-details"}},[e("span",{staticClass:"iconify",attrs:{"data-icon":"zmdi:more"}}),t._v(" "),e("span",[t._v("Project Details")])])},function(){var t=this._self._c;return t("div",[t("strong",[this._v("Posted By")])])},function(){var t=this._self._c;return t("div",{staticClass:"lecturer-info--right"},[t("span",{staticClass:"iconify",attrs:{"data-icon":"dashicons:share",width:"30",height:"30"}})])},function(){var t=this._self._c;return t("p",[t("strong",[this._v("Posted By")])])}],!1,null,null,null).exports}}]);