(this["webpackJsonpto-read-list-app"]=this["webpackJsonpto-read-list-app"]||[]).push([[0],{38:function(e,t,n){e.exports={added:"FindABook_added__2zXwo"}},39:function(e,t,n){e.exports={wrapper:"Navigation_wrapper__2xxZt"}},45:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(16),i=n.n(a),s=(n(45),n(10)),o=n(35),j=n(11),d=n(3),b=n(8),u=n(18),l=Object(u.b)({name:"books",initialState:{toRead:[]},reducers:{addBook:function(e,t){e.toRead.push(Object(s.a)(Object(s.a)({},t.payload),{},{read:!1}))},markAsRead:function(e,t){var n=e.toRead.filter((function(e){return e.key===t.payload}));n[0].read=!n[0].read}}}),h=l.actions,O=h.addBook,p=h.markAsRead,x=function(e){return e.books.toRead},f=l.reducer,m=n(1);function k(){var e=Object(d.g)(),t=Object(b.c)(x),n=Object(b.b)(),c=function(e){var c=e.target.name;n(p(t[c].key))};return Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("h1",{children:"To Read List"}),Object(m.jsx)("ul",{children:t&&t.length>0&&t.map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{type:"checkbox",id:"book-".concat(t),"data-testid":"book-".concat(t),name:"".concat(t),checked:!!e.read,onChange:c}),Object(m.jsxs)("label",{htmlFor:"book-".concat(t),children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.author})]})]},t)}))}),(!t||0===t.length)&&Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Nothing was added to the list yet."}),Object(m.jsx)("p",{children:"Try finding some interesting books."}),Object(m.jsx)("button",{onClick:function(){e.push("/find")},children:"Find Books"})]})]})}var v=n(40),g=n(15),y=n.n(g),w=n(25),F=n(19),R=n(37),_=n(26),A=n.n(_);A.a.defaults.adapter=n(22);var B=A.a.create({baseURL:"http://openlibrary.org"}),N=n(38),S=n.n(N);function P(){var e=Object(c.useState)([]),t=Object(F.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(F.a)(a,2),s=i[0],o=i[1],j=Object(c.useState)(""),d=Object(F.a)(j,2),u=d[0],l=d[1],h=Object(b.c)(x),p=Object(b.b)(),f=function(){var e=Object(w.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c=t,B.get("search.json",{params:{title:c}}).then((function(e){return e.data.docs.map((function(e){return{title:e.title,author:e.author_name?e.author_name.join():"Unknown author",key:e.key}}))}));case 2:n=e.sent,h.forEach((function(e){n.forEach((function(t){e.key===t.key&&(t.isAdded=!0)}))})),r(n);case 5:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(R.debounce)(function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<4)){e.next=3;break}return r([]),e.abrupt("return",null);case 3:o(!0);try{f(t),l("")}catch(n){r([]),l("Something went wrong: ".concat(n.message))}finally{o(!1)}case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),500);return Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("h1",{children:"Find a Book"}),Object(m.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Enter a book's title",onChange:function(e){return k(e.target.value)}}),s&&Object(m.jsx)("p",{children:"Loading..."}),u&&Object(m.jsx)("p",{children:u}),Object(m.jsx)("ul",{children:!s&&n.map((function(e,t){return Object(m.jsxs)("li",{onClick:function(){return function(e){if(!n[e].isAdded){var t=Object(v.a)(n);t[e].isAdded=!0,r(t),p(O(n[e]))}}(t)},className:e.isAdded?S.a.added:null,children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.author})]},t)}))})]})}function C(){var e=Object(b.c)(x).filter((function(e){return e.read}));return Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)("h1",{children:"Finished Books"}),e.length>0&&e.map((function(e,t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.title}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:e.author})]},t)}))]})}var E=["component","isPrivate"];function L(e){var t=e.children;return Object(m.jsxs)(j.a,{children:[t,Object(m.jsxs)(d.d,{children:[Object(m.jsx)(J,{isPrivate:!0,path:"/",exact:!0,component:k}),Object(m.jsx)(J,{isPrivate:!0,path:"/find",component:P}),Object(m.jsx)(J,{isPrivate:!0,path:"/finished",component:C}),Object(m.jsx)(d.a,{to:"/"})]})]})}function J(e){var t=e.component,n=e.isPrivate,c=Object(o.a)(e,E);return n?Object(m.jsx)(d.b,Object(s.a)(Object(s.a)({},c),{},{component:t})):Object(m.jsx)(d.a,{to:"/"})}var T=n(39),U=n.n(T);function z(){return Object(m.jsxs)("div",{className:U.a.wrapper,children:[Object(m.jsx)(j.b,{to:"/",children:"Home"}),Object(m.jsx)(j.b,{to:"/find",children:"Find"}),Object(m.jsx)(j.b,{to:"/finished",children:"Finished"})]})}var H=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(L,{children:Object(m.jsx)(z,{})})})},I=Object(u.a)({reducer:{books:f}});i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(b.a,{store:I,children:Object(m.jsx)(H,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.3f762247.chunk.js.map