(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"./src/index.css":function(e,t,n){},"./src/index.js":function(e,t,n){"use strict";n.r(t),n("./node_modules/core-js/es6/map.js"),n("./node_modules/core-js/es6/set.js"),n("./node_modules/raf/polyfill.js");var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/react-dom/index.js"),c=n.n(o),l=(n("./src/index.css"),n("./node_modules/react-router-dom/esm/react-router-dom.js")),s=n("./node_modules/react-router/esm/react-router.js");function u(){return r.a.createElement("footer",{className:"info"},r.a.createElement("p",null,"Double-click to edit a todo"),r.a.createElement("p",null,"Created by Road To FullStack"))}var i=n("./node_modules/@babel/runtime/regenerator/index.js"),d=n.n(i),m=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),p=n.n(m),f=n("./node_modules/use-react-router/use-react-router.js"),b=n.n(f),h=n("./node_modules/axios/index.js"),j=n.n(h);function g(e,t){return Object(a.useCallback)((function(t){"Enter"===t.key&&(t.preventDefault(),e(t))}),t)}var v=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),O=n.n(v),E=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),y=n.n(E),w=n("./node_modules/react-hook-utils/dist/index.es.js");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){return{done:!1,id:"".concat(t()).concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t(),"-").concat(t()).concat(t()).concat(t()),label:(e||"").trim()};function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}},N={setListTodo:function(e,t){return t},deleteTodo:function(e,t){return e.filter((function(e){return e.id!==t}))},addTodo:function(e,t){return[t].concat(y()(e))},setDone:function(e,t,n){return e.map((function(e){return e.id===t?k({},e,{done:n}):e}))},setLabel:function(e,t,n){return e.map((function(e){return e.id===t?k({},e,{label:n}):e}))},toggleDone:function(e,t){return e.map((function(e){return e.id===t?k({},e,{done:!e.done}):e}))}},P=Object(w.a)([],N,(function(e){return localStorage.setItem("todos",JSON.stringify(e))})),T=n("./node_modules/use-onclickoutside/dist/use-onclickoutside.esm.browser.js");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){O()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t,n,o,c=e.todo,l=P((function(){return null})),s=p()(l,2)[1],u=s.deleteTodo,i=s.setLabel,m=s.toggleDone,f=Object(a.useState)(!1),b=p()(f,2),h=b[0],v=b[1],O=Object(a.useState)(c),E=p()(O,2),y=E[0],w=E[1],x=Object(a.useCallback)((function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.awrap(j()({method:"post",url:"".concat("http://localhost:3000/api","/deleteTodo"),data:{id:c.id}}));case 3:200===e.sent.status&&u(c.id),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),null,null,[[0,7]])}),[c.id]),k=Object(a.useCallback)((function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(C(_({},y,{done:!y.done,completed:!y.completed})));case 2:return e=t.sent,t.abrupt("return",m(e.id));case 4:case"end":return t.stop()}}))}),[c.id]),C=function(e){var t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.a.awrap(j()({method:"post",url:"".concat("http://localhost:3000/api","/updateTodo"),data:e}));case 3:if(200===(t=n.sent).status)return n.abrupt("return",t.data);n.next=6;break;case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])},N=Object(a.useCallback)((function(e){i(c.id,e.target.value),w(_({},y,{label:e.target.value}))}),[c.id]),D=(null,t=function(){return v(!0)},o=[],function(e){for(var a=arguments.length,r=new Array(1<a?a-1:0),c=1;c<a;c++)r[c-1]=arguments[c];o.push((new Date).getTime()),clearTimeout(n),n=setTimeout((function(){1<o.length&&o[o.length-1]-o[o.length-2]<250&&(t&&t.apply(void 0,[e].concat(r))),o=[]}),250)}),S=Object(a.useCallback)((function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!1),t.next=3,d.a.awrap(C(y));case 3:e=t.sent,i(e.id,e.label.trim());case 5:case"end":return t.stop()}}))}),[c]),A=g(S,[c]),R=Object(a.useRef)();return Object(T.a)(R,S),r.a.createElement("li",{onClick:D,className:"".concat(h?"editing":""," ").concat(c.done?"completed":"")},r.a.createElement("div",{className:"view"},r.a.createElement("input",{type:"checkbox",className:"toggle",checked:c.done,onChange:k,autoFocus:!0}),r.a.createElement("label",null,c.label),r.a.createElement("button",{className:"destroy",onClick:x})),h&&r.a.createElement("input",{ref:R,className:"edit",value:c.label,onChange:N,onKeyPress:A}))}var A=Object(a.memo)((function(e){var t=e.allSelected,n=e.onToggleAll;return console.log("INPUT RERENDER"),console.log(t),r.a.createElement("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:t,onChange:n})}));function R(){var e=b()(),t=P(),n=p()(t,2),o=n[0],c=n[1],s=c.addTodo,u=c.deleteTodo,i=c.setDone,m=c.setListTodo;Object(a.useEffect)((function(){var t;d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(j()({method:"post",url:"".concat("http://localhost:3000/api","/todos"),data:{completed:"active"!==e.match.params.filter&&("completed"===e.match.params.filter||void 0)}}));case 2:t=n.sent,m(t.data);case 4:case"end":return n.stop()}}))}),[e.match.params]);var f,h,v,O,E=Object(a.useMemo)((function(){return o.reduce((function(e,t){return e+(t.done?0:1)}),0)}),[o]),y=Object(a.useMemo)((function(){return console.log(o),e.match.params.filter?o.filter((function(t){return"active"===e.match.params.filter?!t.done:t.done})):o}),[o,e.match.params.filter]),w=Object(a.useMemo)((function(){return o.some((function(e){return e.done}))}),[o]),x=Object(a.useMemo)((function(){return console.log(y),y.every((function(e){return e.done}))}),[y]),k=Object(a.useCallback)((function(){y.forEach((function(e){return i(e.id,!x)}))}),[x]),N=Object(a.useCallback)((function(){return d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(j()({method:"post",url:"".concat("http://localhost:3000/api","/clearCompleted")}));case 2:e.sent.data.result&&o.forEach((function(e){e.done&&u(e.id)}));case 4:case"end":return e.stop()}}))}),[o]),T=(f=Object(a.useState)(""),v=(h=p()(f,2))[0],O=h[1],[v,Object(a.useCallback)((function(e){O(e.target.value)})),O]),D=p()(T,3),_=D[0],R=D[1],F=D[2],M=g((function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(_)return e=C(_),n.prev=2,n.next=5,d.a.awrap(j()({method:"post",url:"".concat("http://localhost:3000/api","/createTodo"),data:e}));n.next=13;break;case 5:200===(t=n.sent).status&&s(t.data),F(""),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:case"end":return n.stop()}}),null,null,[[2,10]])}),[_]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"todos"),r.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyPress:M,value:_,onChange:R})),r.a.createElement("section",{className:"main"},r.a.createElement(A,{allSelected:x,onToggleAll:k}),r.a.createElement("label",{htmlFor:"toggle-all"}),r.a.createElement("ul",{className:"todo-list"},y.map((function(e){return r.a.createElement(S,{key:e.id,todo:e})})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("span",{className:"todo-count"},r.a.createElement("strong",null,E)," items left"),r.a.createElement("ul",{className:"filters"},r.a.createElement("li",null,r.a.createElement(l.b,{exact:!0,to:"/",activeClassName:"selected"},"All")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/active",activeClassName:"selected"},"Active")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/completed",activeClassName:"selected"},"Completed"))),w&&r.a.createElement("button",{className:"clear-completed",onClick:N},"Clear completed")))}var F=document.getElementById("root");c.a.render(r.a.createElement((function(){return r.a.createElement(l.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"todoapp"},r.a.createElement(s.Route,{path:"/:filter?",component:R})),r.a.createElement(u,null)))}),null),F)}},[["./src/index.js",1,2]]]);