(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),i=n.n(a),o=(n(12),n(5)),r=n(3),l=n(0);function d(e){var t=e.handleAdd,n=e.inputValue,s=e.setInputValue,c=e.errorMessage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{children:"Tasks"}),Object(l.jsxs)("form",{className:"header",onSubmit:t,children:[Object(l.jsx)("input",{className:"todo-input",type:"text",placeholder:"Add a task...",value:n,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{className:"add-button",type:"submit",children:"\u2795"})]}),c.length>0&&Object(l.jsx)("span",{className:"validate",children:c})]})}function u(e){var t=e.tasks,n=e.handleDone;return Object(l.jsx)("div",{className:"task-list",children:t.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h4",{children:["In progress ",t.length," "]}),Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsxs)("li",{children:[e.name,Object(l.jsx)("span",{className:"add-delete-return-icons",children:Object(l.jsx)("input",{className:"done-checkbox",type:"checkbox",onClick:function(t){return n(e)}})})]},e.id)}))})]})})}function h(e){var t=e.completedTasks,n=e.handleDelete,s=e.handleRecover,c=e.setIsShowCompleted,a=e.isShowCompleted;return Object(l.jsx)("div",{className:"completed-tasks",children:t.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h4",{children:["Completed ",t.length," ",Object(l.jsx)("button",{className:"show-hide",onClick:function(){return c(!a)},children:a?"Hide":"Show"})]}),a&&Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsxs)("li",{children:[e.name,Object(l.jsxs)("span",{className:"add-delete-return-icons",children:[Object(l.jsx)("button",{className:"completed-task-icons",id:"put-back-icon",onClick:function(){return s(e)},children:"\u2934"}),Object(l.jsx)("button",{className:"completed-task-icons",onClick:function(){return n(e)},children:"\u274c"})]})]},e.id)}))})]})})}n(14);var j=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),j=i[0],m=i[1],b=Object(s.useState)((function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[{id:"Workout for 45 minutes_1635131939043",name:"Workout for 45 minutes",isDone:!0},{id:"Play with kids_1635131914628",name:"Play with kids",isDone:!1},{id:"Take a nap for 30 minutes_1635131866702",name:"Take a nap for 30 minutes",isDone:!1},{id:"Stay away from phone for 2 hours_1635131850670",name:"Stay away from phone for 2 hours",isDone:!1},{id:"Spend quality time with girlfriend_1635131829895",name:"Spend quality time with girlfriend",isDone:!1},{id:"Read for 30 minutes The Millionaire Next Door_1635131812295",name:"Read for 30 minutes The Millionaire Next Door",isDone:!1},{id:"Call Mom_1635131768729",name:"Call Mom",isDone:!1}]})),f=Object(r.a)(b,2),O=f[0],p=f[1],x=Object(s.useState)(!1),g=Object(r.a)(x,2),k=g[0],v=g[1];Object(s.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(O))}),[O]);var D=Object(s.useMemo)((function(){return O.filter((function(e){return!1===e.isDone}))}),[O]),S=Object(s.useMemo)((function(){return O.filter((function(e){return!0===e.isDone}))}),[O]);return console.log(JSON.stringify(O)),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"todo",children:[Object(l.jsx)(d,{handleAdd:function(e){var t;(e.preventDefault(),n.length<1)?m("Input must be filled out"):(p([{id:(t=n,"".concat(t,"_").concat((new Date).getTime())),name:n.slice(0,255),isDone:!1}].concat(Object(o.a)(O))),m(""),c(""))},inputValue:n,setInputValue:c,errorMessage:j}),Object(l.jsx)(u,{tasks:D,handleDone:function(e){var t=Object(o.a)(O);t.forEach((function(t){e.id===t.id&&(t.isDone=!0)})),p(t)}}),Object(l.jsx)(h,{completedTasks:S,handleDelete:function(e){var t=O.filter((function(t){return t.id!==e.id}));p(t)},handleRecover:function(e){var t=Object(o.a)(O);O.forEach((function(t){t.id===e.id&&(t.isDone=!1)})),p(t)},isShowCompleted:k,setIsShowCompleted:v})]}),D.length>5&&Object(l.jsxs)("span",{className:"author",children:["made with \u2764 by ",Object(l.jsx)("a",{href:"https://github.com/bekza",children:"bekzat"})]})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.e8003fe2.chunk.js.map