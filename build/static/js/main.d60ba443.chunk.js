(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},64:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(24),i=t.n(n),r=(t(61),t(62),t(5)),o=t(4),l=t(92),j=t(47),d=t.n(j),h=(t(63),t(41)),b=t(18),u=t(34),O=t.n(u),g=t(46),m=t.n(g),x=t(91),_=(t(64),t(2)),v=Object(s.createContext)(),p=function(e){var c=e.reducer,t=e.initialState,a=e.children;return Object(_.jsx)(v.Provider,{value:Object(s.useReducer)(c,t),children:a})},f=function(){return Object(s.useContext)(v)},N=t(38),P="SET_SEARCH_TERM",w=function(e,c){return console.log(c),c.type===P?Object(N.a)(Object(N.a)({},e),{},{term:c.term}):e};var y=function(e){var c=e.hideButtons,t=void 0!==c&&c,a=f(),n=Object(b.a)(a,2);Object(h.a)(n[0]);var i=n[1],r=Object(o.f)(),l=Object(s.useState)(""),j=Object(b.a)(l,2),d=j[0],u=j[1],g=function(e){e.preventDefault(),console.log("search!"),i({type:P,term:d}),r.push("/search")};return Object(_.jsxs)("form",{className:"search",children:[Object(_.jsxs)("div",{className:"search__input",children:[Object(_.jsx)(O.a,{className:"search__inputIcon"}),Object(_.jsx)("input",{value:d,onChange:function(e){return u(e.target.value)}}),Object(_.jsx)(m.a,{})]}),t?Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{className:"search__buttonsHidden",onClick:g,type:"submit",variant:"outlined",children:"Google Search"}),Object(_.jsx)(x.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(x.a,{onClick:g,type:"submit",variant:"outlined",children:"Google Search"}),Object(_.jsx)(x.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var S=function(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("div",{className:"home__header",children:[Object(_.jsxs)("div",{className:"home__headerLeft",children:[Object(_.jsx)(r.b,{to:"/about",children:"About"}),Object(_.jsx)(r.b,{to:"/store",children:"Store"})]}),Object(_.jsxs)("div",{className:"home__headerRight",children:[Object(_.jsx)(r.b,{to:"/gmail",children:"Gmail"}),Object(_.jsx)(r.b,{to:"/images",children:"Images"}),Object(_.jsx)(d.a,{}),Object(_.jsx)(l.a,{})]})]}),Object(_.jsxs)("div",{className:"home__body",children:[Object(_.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:"logo"}),Object(_.jsx)("div",{className:"home__inputContainer",children:Object(_.jsx)(y,{})})]})]})},C=t(40),k=t(48),I=function(e){var c=Object(s.useState)(null),t=Object(b.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var c=function(){var c=Object(k.a)(Object(C.a)().mark((function c(){return Object(C.a)().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyC8hNWwV4tza5rOcx7CyM4O1I68y4QAXRQ","&cx=").concat("b2f760f2b97a14440","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[e]),{data:a}},L=(t(75),t(49)),T=t.n(L),R=t(50),A=t.n(R),F=t(51),B=t.n(F),E=t(52),G=t.n(E),H=t(53),M=t.n(H);var z=function(){var e=f(),c=Object(b.a)(e,2),t=c[0].term,s=(c[1],I(t).data);return console.log(s),Object(_.jsxs)("div",{className:"searchPage",children:[Object(_.jsxs)("div",{className:"searchPage__header",children:[Object(_.jsx)(r.b,{to:"/",children:Object(_.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""})}),Object(_.jsxs)("div",{className:"searchPage__headerBody",children:[Object(_.jsx)(y,{hideButtons:!0}),Object(_.jsxs)("div",{className:"searchPage__options",children:[Object(_.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(O.a,{}),Object(_.jsx)(r.b,{to:"/all",children:"All"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(T.a,{}),Object(_.jsx)(r.b,{to:"/news",children:"News"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(A.a,{}),Object(_.jsx)(r.b,{to:"/images",children:"Images"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(B.a,{}),Object(_.jsx)(r.b,{to:"/shopping",children:"shopping"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(G.a,{}),Object(_.jsx)(r.b,{to:"/maps",children:"maps"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(M.a,{}),Object(_.jsx)(r.b,{to:"/more",children:"more"})]})]}),Object(_.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/settings",children:"Settings"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/tools",children:"Tools"})})]})]})]})]}),t&&Object(_.jsxs)("div",{className:"searchPage__results",children:[Object(_.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," results (",null===s||void 0===s?void 0:s.searchInformation.formattedSearchTime," seconds) for"," ",Object(_.jsx)("strong",{children:t})]}),null===s||void 0===s?void 0:s.items.map((function(e){var c,t,s,a,n,i,r,o;return Object(_.jsxs)("div",{className:"searchPage__result",children:[Object(_.jsxs)("a",{className:"searchPage__resultLink",href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(t=c.cse_image)||void 0===t?void 0:t.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(a=s.cse_image[0])||void 0===a?void 0:a.src)&&Object(_.jsx)("img",{className:"searchPage__resultImage",src:(null===(n=e.pagemap)||void 0===n||null===(i=n.cse_image)||void 0===i?void 0:i.length)>0&&(null===(r=e.pagemap)||void 0===r||null===(o=r.cse_image[0])||void 0===o?void 0:o.src),alt:""}),e.displayLink," \u25be"]}),Object(_.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(_.jsx)("h2",{children:e.title})}),Object(_.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var D=function(){return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(r.a,{children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/search",children:Object(_.jsx)(z,{})}),Object(_.jsx)(o.a,{path:"/",children:Object(_.jsx)(S,{})})]})})})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,93)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(p,{initialState:{term:null},reducer:w,children:Object(_.jsx)(D,{})})}),document.getElementById("root")),J()}},[[76,1,2]]]);
//# sourceMappingURL=main.d60ba443.chunk.js.map