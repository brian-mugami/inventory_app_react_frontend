"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[5149],{85149:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(74165),a=t(15861),s=t(29439),c=t(72791),i=t(63924),o=t(57689),l=t(11087),u=t(79139),h=t(80184);var d=function(e){var n=e.onSearchHandler,t=(0,c.useState)(""),r=(0,s.Z)(t,2),a=r[0],i=r[1],d=(0,o.useNavigation)(),m=(0,o.useRouteLoaderData)("inventory-balances").items,x="submitting"===d;return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)(l.l0,{className:"d-flex",role:"search",onSubmit:function(e){e.preventDefault(),n(a)},method:"post",children:[(0,h.jsx)("input",{className:"form-control me-2",list:"options2",placeholder:"Search item","aria-label":"Search",name:"search-balance",onChange:function(e){i(e.target.value)},value:a}),(0,h.jsx)("datalist",{id:"options2",children:m.map((function(e){return(0,h.jsx)("option",{value:e.item_name},e.id)}))}),(0,h.jsx)(u.Button,{type:"submit",disabled:x,children:"Search"})]})})};var m=function(e){var n=e.balances;return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("table",{className:"table table-info",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"col",children:"Balance Number"}),(0,h.jsx)("th",{scope:"col",children:"Item Name"}),(0,h.jsx)("th",{scope:"col",children:"Item Quantity"}),(0,h.jsx)("th",{scope:"col",children:"Item Value"})]},n.number)}),(0,h.jsx)("tbody",{children:n.map((function(e){return(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{scope:"row",children:e.number}),(0,h.jsx)("td",{children:e.item_name}),(0,h.jsx)("td",{children:e.quantity}),(0,h.jsx)("td",{children:e.value})]},e.number)}))})]})})},x=t(28127);var p=function(){var e=(0,c.useState)(""),n=(0,s.Z)(e,2),t=n[0],o=n[1];function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(n){var a,s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,x.getAuthToken)(),e.next=3,fetch("https://inventory-accounting.onrender.com/balance/search/?item_name="+n,{method:"GET",headers:{Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"}});case 3:if((s=e.sent).ok){e.next=7;break}return window.alert("This item does not exist. Please select again"),e.abrupt("return",(0,i.redirect)("./"));case 7:return e.next=9,s.json();case 9:return c=e.sent,o(c.balances),console.log(t),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(d,{onSearchHandler:function(e){return l.apply(this,arguments)},className:"justify-content-center"}),t.length>0&&(0,h.jsx)(m,{balances:t})]})}}}]);
//# sourceMappingURL=5149.9b025594.chunk.js.map