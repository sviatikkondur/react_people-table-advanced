(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,r){},39:function(e,t,r){},41:function(e,t,r){"use strict";r.r(t);var n=r(26),c=r(8),a=(r(36),r(37),r(38),r(3)),s=r(4),i=r(6),l=r(5),o=r(0),j=(r(39),r(1)),u=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},d="https://mate-academy.github.io/react_people-table/api/people.json";function b(e){return new Promise((function(t){return setTimeout(t,e)}))}function h(){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b(500).then((function(){return fetch(d)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=r(10),O=r.n(m),x=function(e){var t=e.person,r=e.people,n=Object(a.q)().personSlug,s=Object(c.d)(),i=Object(l.a)(s,1)[0],o=function(e){return!!e&&r.find((function(t){return t.name===e}))},u=function(e){var t=function(e){var t;return null===(t=r.find((function(t){return t.name===e})))||void 0===t?void 0:t.slug}(e),n=i.toString()&&"/?".concat(i.toString());return"./".concat(t).concat(n)};return Object(j.jsxs)("tr",{"data-cy":"person",className:O()({"has-background-warning":t.slug===n}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(c.b,{to:u(t.name),className:O()({"has-text-danger":"f"===t.sex}),children:t.name})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:o(t.motherName)?Object(j.jsx)(c.b,{to:u(t.motherName),className:O()("has-text-danger"),children:t.motherName}):t.motherName||"-"}),Object(j.jsx)("td",{children:o(t.fatherName)?Object(j.jsx)(c.b,{to:u(t.fatherName),children:t.fatherName}):t.fatherName||"-"})]},t.slug)},f=function(e){return e.name="name",e.sex="sex",e.born="born",e.died="died",e}({}),v=r(24),g=r(27);function N(e,t){var r=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(l.a)(e,2),n=t[0],c=t[1];null===c?r.delete(n):Array.isArray(c)?(r.delete(n),c.forEach((function(e){r.append(n,e)}))):r.set(n,c)})),r.toString()}var y=["children","params"],w=function(e){var t=e.children,r=e.params,n=Object(g.a)(e,y),a=Object(c.d)(),s=Object(l.a)(a,1)[0];return Object(j.jsx)(c.b,Object(v.a)(Object(v.a)({to:{search:N(s,r)}},n),{},{children:t}))};function k(e){if("string"!==typeof e)throw new Error("Input must be a string");return e.charAt(0).toUpperCase()+e.slice(1)}var S=function(e){var t=e.people,r=Object(c.d)(),n=Object(l.a)(r,1)[0],a=n.get("sort"),s=n.get("order"),i=function(e){var t={};return a!==e&&(t.sort=e,t.order=null),a!==e||s||(t.order="desc"),a===e&&"desc"===s&&(t.sort=null,t.order=null),t};return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object.values(f).map((function(e){return Object(j.jsx)("th",{children:Object(j.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[k(e),Object(j.jsx)(w,{params:i(e),children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:O()("fas",{"fa-sort":a!==e,"fa-sort-up":a===e&&!s,"fa-sort-down":a===e&&s})})})})]})},e)})),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(x,{person:e,people:t},e.slug)}))})]})},A=r(9),L=["16","17","18","19","20"],C=[{title:"All",value:null},{title:"Male",value:"m"},{title:"Female",value:"f"}],P=function(){var e=Object(c.d)(),t=Object(l.a)(e,2),r=t[0],n=t[1],a=r.get("query")||"",s=r.getAll("centuries"),i=r.get("sex");return Object(o.useEffect)((function(){N(r,{sex:null})}),[]),Object(j.jsxs)("nav",{className:"panel",children:[Object(j.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(j.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:C.map((function(e){var t=e.title,r=e.value;return Object(j.jsx)(w,{params:{sex:r},className:O()({"is-active":r===i}),children:t},t)}))}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("p",{className:"control has-icons-left",children:[Object(j.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:a,onChange:function(e){return function(e){var t=N(r,{query:e.target.value||null});n(t)}(e)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(j.jsx)("div",{className:"level-left",children:L.map((function(e){return Object(j.jsx)(w,{params:{centuries:s.includes(e)?s.filter((function(t){return t!==e})):[].concat(Object(A.a)(s),[e])},"data-cy":"century",className:O()("button","mr-1",{"is-info":s.includes(e)}),children:e},e)}))}),Object(j.jsx)("div",{className:"level-right ml-4",children:Object(j.jsx)(w,{"data-cy":"centuryALL",className:O()("button","is-success"),params:{centuries:null},children:"All"})})]})}),Object(j.jsx)("div",{className:"panel-block",children:Object(j.jsx)(w,{params:{sex:null,query:null,centuries:null},className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})};var E=function(e,t,r){var n=Object(A.a)(e),c=t.sex,a=t.query,s=t.centuries,i=r.sort,l=r.order||"asc";c&&(n=n.filter((function(e){return e.sex===c}))),a&&(n=n.filter((function(e){var t,r,n=a.toLowerCase();return e.name.toLowerCase().includes(n)||(null===(t=e.fatherName)||void 0===t?void 0:t.toLowerCase().includes(n))||(null===(r=e.motherName)||void 0===r?void 0:r.toLowerCase().includes(n))}))),s&&s.length>0&&(n=n.filter((function(e){return s.includes(String(function(e){if(!Number.isInteger(e)||e<=0)throw new Error("Please provide a valid positive integer for the year.");return Math.ceil(e/100)}(e.born)))})));var o=Object(A.a)(n);return i&&l&&o.sort((function(e,t){var r=e[i],n=t[i];return"number"===typeof r&&"number"===typeof n?"asc"===l?r-n:n-r:"string"===typeof r&&"string"===typeof n?"asc"===l?r.localeCompare(n):n.localeCompare(r):0})),o},q=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1],a=Object(o.useState)(!0),d=Object(l.a)(a,2),b=d[0],p=d[1],m=Object(o.useState)(!1),O=Object(l.a)(m,2),x=O[0],f=O[1],v=Object(c.d)(),g=Object(l.a)(v,1)[0],N={query:g.get("query")||"",centuries:g.getAll("centuries")||"",sex:g.get("sex")||""},y={sort:g.get("sort"),order:g.get("order")};Object(o.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!1),e.prev=1,e.next=4,h();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),f(!0);case 11:return e.prev=11,p(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=E(r,N,y);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(j.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!b&&Object(j.jsx)(P,{})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"box table-container",children:[b&&Object(j.jsx)(u,{}),x&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!b&&0===r.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),w.length>0&&Object(j.jsx)(S,{people:w}),0===w.length&&!b&&"There are no people matching the current search criteria"]})})]})})]})},F=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(c.c,{to:"/",className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(j.jsx)(c.c,{to:"/people",className:function(e){var t=e.isActive;return O()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},_=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},M=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},T=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(F,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.b,{path:"/",element:Object(j.jsx)(_,{})}),Object(j.jsx)(a.b,{path:"/home",element:Object(j.jsx)(a.a,{to:"/",replace:!0})}),Object(j.jsx)(a.b,{path:"/people",element:Object(j.jsx)(q,{}),children:Object(j.jsx)(a.b,{path:":personSlug",element:Object(j.jsx)(q,{})})}),Object(j.jsx)(a.b,{path:"*",element:Object(j.jsx)(M,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(c.a,{children:Object(j.jsx)(T,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.bf536bd5.chunk.js.map