(this.webpackJsonpgithub_search=this.webpackJsonpgithub_search||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(0),s=c(1),n=c.n(s),a=c(5),o=c.n(a),i=c(4),j=c.n(i),l=c(6),u=c(2),h=n.a.createContext(),b="https://api.github.com/search/users?q=";function d(e){var t=e.children,c=Object(s.useState)(!1),n=Object(u.a)(c,2),a=n[0],o=n[1],i=Object(s.useState)(!1),d=Object(u.a)(i,2),O=d[0],f=d[1],x=Object(s.useState)(":"),m=Object(u.a)(x,2),v=m[0],g=m[1],p=Object(s.useState)([]),S=Object(u.a)(p,2),N=S[0],w=S[1];console.log(v);var C=Object(s.useCallback)(Object(l.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,fetch("".concat(b).concat(v));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,r=c.items,w(r),o(!1),console.log("".concat(b).concat(v)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])}))),[v]);return Object(r.jsx)(h.Provider,{value:{loading:a,showSearch:O,setShowSearch:f,users:N,setSearchTerm:g,fetchUsers:C},children:t})}var O=function(){return Object(s.useContext)(h)};c(13);var f=function(){var e=O(),t=e.users;return e.loading?Object(r.jsx)("div",{className:"loader"}):t.length<1?Object(r.jsx)("div",{className:"error",children:"sorry, no result found"}):Object(r.jsx)("section",{className:"result",children:Object(r.jsx)("div",{className:"users-template",children:t.map((function(e){var t=e.id,c=e.login,s=e.avatar_url,n=e.html_url;return Object(r.jsxs)("article",{className:"users",children:[Object(r.jsx)("img",{src:s,alt:c}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("a",{rel:"noreferrer",href:n,target:"_blank",children:c})})]},t)}))})})};var x=function(){var e=O(),t=e.setSearchTerm,c=e.fetchUsers,n=e.showSearch,a=e.setShowSearch,o=Object(s.useRef)("");return Object(r.jsxs)("section",{className:"search",children:[Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)("h3",{children:"Github"}),Object(r.jsx)("i",{children:"users"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("form",{id:"search-form",className:"form",onSubmit:function(e){e.preventDefault(),c()},children:[Object(r.jsx)("input",{type:"search",id:"search-input",autoComplete:"off",placeholder:"Eg. john",ref:o,onChange:function(){t(o.current.value),o.current.value?a(!0):a(!1)},required:!0}),Object(r.jsx)("button",{children:Object(r.jsx)("i",{className:n?"fas fa-search":"none"})})]})]})};var m=function(){return O().loading?Object(r.jsx)("div",{className:"loader"}):Object(r.jsxs)("main",{className:"home",children:[Object(r.jsx)(x,{}),Object(r.jsx)(f,{})]})};var v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(m,{})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),r(e),s(e),n(e),a(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(d,{children:Object(r.jsx)(v,{})})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.b8a8f374.chunk.js.map