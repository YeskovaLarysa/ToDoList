(this.webpackJsonp37reactredux=this.webpackJsonp37reactredux||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var i=n(5),r=n.n(i),a=n(3),c=n(7),s=n(14),o=n(2),l={name:"btnReducer",initialState:{displayedTaskStatus:1,isLoaded:!1,list:null,inputFilerValue:""},reducers:{setList:function(t,e){t.list=e.payload,t.isLoaded=!0},setInputFilerValue:function(t,e){t.inputFilerValue=e.payload},toggleDelete:function(t,e){var n=t.list;t.list=n.filter((function(t){return t.id!==e.payload}))},toggleActive:function(t,e){var n=t.list;t.list=n.map((function(t){var n=t.id,i=t.isActive;return Object(o.a)(Object(o.a)({},t),{},{isActive:e.payload===n?!i:i})}))},toggleImportant:function(t,e){var n=t.list;t.list=n.map((function(t){var n=t.id,i=t.isImportant;return Object(o.a)(Object(o.a)({},t),{},{isImportant:e.payload===n?!i:i})}))},btnAdd:function(t,e){var n=t.list,i=Date.now();t.list=[].concat(Object(s.a)(n),[{id:i,name:e.payload,isImportant:!1,isActive:!0}])},filterBtn:function(t,e){"all"===e.payload&&(t.displayedTaskStatus=1),"active"===e.payload&&(t.displayedTaskStatus=2),"finish"===e.payload&&(t.displayedTaskStatus=3)}}},u=Object(c.b)(l),d=u.reducer,j=u.actions,b={btnReducer:d},p=Object(c.a)({reducer:b}),f=n(0),v=p.dispatch,m=j.setList,O=j.setInputFilerValue,x=j.toggleDelete,h=j.toggleActive,y=j.toggleImportant,g=j.btnAdd,A=j.filterBtn,k=(n(25),n(1)),I=function(t){var e=t.id;return Object(k.jsx)("button",{type:"button",className:"btn",onClick:function(){return v(h(e))},children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})},L=function(t){var e=t.id;return Object(k.jsx)("button",{type:"button",className:"btn",onClick:function(){return v(y(e))},children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0436\u043d\u043e\u0439"})},S=function(t){var e=t.id;return Object(k.jsx)("button",{className:"btn",onClick:function(){return v(x(e))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})},C=function(t){var e=t.id,n=t.name,i=t.isActive,r={color:t.isImportant?"red":"#444",fontStyle:i?"normal":"italic",textDecorationLine:i?"none":"line-through",margin:"10px",width:"500px"};return Object(k.jsxs)("div",{style:{border:"2px solid green",margin:"10px"},children:[Object(k.jsx)("li",{style:r,children:n}),Object(k.jsx)(L,{id:e}),Object(k.jsx)(I,{id:e}),Object(k.jsx)(S,{id:e})]})},w=(n(27),function(t){var e=t.list,n=void 0===e?[]:e;return Object(k.jsx)("ol",{className:"rounded",children:n.map((function(t){return Object(k.jsx)(C,Object(o.a)({},t),t.id)}))})}),T=function(){return Object(k.jsx)("h1",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b \u043d\u0430 \u043b\u0435\u0442\u043e"})},F=function(t){var e=t.inputFilter,n=Object(a.b)((function(t){return t.btnReducer})).inputFilerValue;if("3"===n)throw new Error("s");return Object(k.jsxs)("form",{children:[Object(k.jsx)("label",{style:{margin:"10px"},children:"\u0424\u0438\u043b\u044c\u0442\u0440"}),Object(k.jsx)("input",{value:n,onChange:function(t){return e(t)}})]})},N=(n(28),function(t){var e=t.name,n=t.filterType,i=t.activeStyle;return Object(k.jsx)("button",{style:i,className:"btnFilter",onClick:function(){return function(t){return v(A(t))}(n)},children:e})}),E=function(t){var e=t.displayedTaskStatus,n="white",i="rgb(136, 213, 248)",r={backgroundColor:1===e?n:i},a={backgroundColor:2===e?n:i},c={backgroundColor:3===e?n:i};return Object(k.jsxs)("div",{children:[Object(k.jsx)(N,{activeStyle:r,filterType:"all",name:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(k.jsx)(N,{activeStyle:a,filterType:"active",name:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(k.jsx)(N,{activeStyle:c,filterType:"finish",name:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"})]})},V=(n(29),function(){return Object(k.jsx)("div",{className:"loader",children:Object(k.jsxs)("div",{className:"ldsEllipsis",children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{})]})})}),D=n(15),R=function(){var t=Object(f.useState)(""),e=Object(D.a)(t,2),n=e[0],i=e[1];return console.log(n),Object(k.jsxs)("form",{children:[Object(k.jsxs)("button",{disabled:function(t){return""===t}(n),type:"button",style:{margin:"10px"},onClick:function(){return v(g(n))},children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435:"," "]}),Object(k.jsx)("input",{value:n,onChange:function(t){return function(t){t.preventDefault(),i(t.target.value)}(t)}})]})},B=n(11),J=n(12),P=n(16),q=n(13),z=function(t){Object(P.a)(n,t);var e=Object(q.a)(n);function n(){var t;Object(B.a)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={hasError:!1},t}return Object(J.a)(n,[{key:"componentDidCatch",value:function(t){return console.log("\u043e\u0448\u0438\u0431\u043a\u0430",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(k.jsx)("div",{children:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.."}):Object(k.jsx)("div",{className:"error",children:this.props.children})}}]),n}(f.Component),G=(n(30),function(){var t=Object(a.b)((function(t){return t.btnReducer})),e=t.displayedTaskStatus,n=t.isLoaded,i=t.list,r=t.inputFilerValue;if(Object(f.useEffect)((function(){new Promise((function(t){setTimeout((function(){t([{id:1,name:"\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c \u0440\u0430\u0441\u0441\u0432\u0435\u0442",isImportant:!1,isActive:!0},{id:2,name:"\u0412\u044b\u043f\u0438\u0442\u044c \u0432\u0438\u043d\u043e \u0432 \u0445\u043e\u0440\u043e\u0448\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438",isImportant:!0,isActive:!0},{id:3,name:"\u0421\u044b\u0433\u0440\u0430\u0442\u044c \u0432 \u043d\u043e\u0432\u0443\u044e \u043d\u0430\u0441\u0442\u043e\u043b\u043a\u0443 \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438",isImportant:!1,isActive:!0},{id:4,name:"\u0441\u044a\u0435\u0437\u0434\u0438\u0442\u044c \u0432 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0443",isImportant:!0,isActive:!0,displayedList:"active"},{id:5,name:"\u0432\u044b\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0432\u0441\u0435 \u043b\u0438\u0448\u043d\u0438\u0435 \u0432\u0435\u0449\u0438 \u0438\u0437 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b",isImportant:!1,isActive:!0,displayedList:"active"},{id:6,name:"\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0432 \u043f\u043e\u0445\u043e\u0434",isImportant:!1,isActive:!0,displayedList:"active"},{id:7,name:"\u043f\u043e\u043a\u0430\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0432\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u0435",isImportant:!1,isActive:!0,displayedList:"active"},{id:8,name:"\u043f\u043e\u043f\u0440\u044b\u0433\u0430\u0442\u044c \u043d\u0430 \u0431\u0430\u0442\u0443\u0442\u0435",isImportant:!1,isActive:!0,displayedList:"active"},{id:9,name:"\u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c 5 \u043a\u043d\u0438\u0433",isImportant:!1,isActive:!0,displayedList:"active"},{id:10,name:"\u0441\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443",isImportant:!1,isActive:!0,displayedList:"active"}])}),1e3)})).then((function(t){!function(t){v(m(t))}(t)}))}),[]),!n)return Object(k.jsx)(V,{});var c=function(t,e,n){var i;return 1===t&&(i=e),2===t&&(i=e.filter((function(t){return t.isActive}))),3===t&&(i=e.filter((function(t){return!t.isActive}))),""===n?i:i.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))}(e,i,r);return Object(k.jsx)(z,{children:Object(k.jsxs)("div",{className:"wrapper",children:[Object(k.jsx)(T,{}),Object(k.jsx)(R,{}),Object(k.jsx)(F,{inputFilter:function(t){!function(t){v(O(t))}(t.target.value)},inputFilerValue:r}),Object(k.jsx)(E,{displayedTaskStatus:e}),Object(k.jsx)(w,{list:c})]})})});r.a.render(Object(k.jsx)(a.a,{store:p,children:Object(k.jsx)(G,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.51da80a4.chunk.js.map