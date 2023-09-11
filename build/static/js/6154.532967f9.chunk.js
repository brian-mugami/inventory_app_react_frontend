"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[6154,3150],{3150:function(e,t,s){s.r(t),s.d(t,{loader:function(){return m}});var r=s(74165),a=s(15861),n=s(29439),c=s(72791),i=s(57689),o=s(11087),u=s(11226),l=s(28127),p=s(80184);function x(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(){var t,s,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,l.getAuthToken)(),e.next=3,fetch("https://inventory-accounting.onrender.com/customer",{method:"get",headers:{Authorization:"Bearer "+t}});case 3:if((s=e.sent).ok){e.next=8;break}throw(0,u.json)({message:"Cant get customers"},{status:500});case 8:return e.next=10,s.json();case 10:return a=e.sent,e.abrupt("return",a);case 12:case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u.defer,e.next=3,x();case 3:return e.t1=e.sent,e.t2={customers:e.t1},e.abrupt("return",(0,e.t0)(e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.onSearch,s=(0,i.useNavigate)(),r=(0,i.useNavigation)(),a=(0,c.useState)(""),l=(0,n.Z)(a,2),x=l[0],d=l[1],m="submitting"===r.state,h=(0,u.useLoaderData)().customers;return(0,p.jsx)(c.Fragment,{children:(0,p.jsxs)(o.l0,{id:"search-form",onSubmit:function(e){e.preventDefault(),t(x)},children:[(0,p.jsx)("label",{children:"Search the customer"}),(0,p.jsx)("input",{required:!0,name:"customer_name",type:"text",list:"options",placeholder:"search customer",value:x,onChange:function(e){d(e.target.value)}}),(0,p.jsx)("datalist",{id:"options",children:h.map((function(e){return(0,p.jsx)("option",{value:e.customer_name},e.id)}))}),(0,p.jsx)("button",{disabled:m||0===x.length,type:"submit",className:"btn btn-success",children:m?"Searching...":"Search"}),(0,p.jsx)("button",{onClick:function(){s("..")},type:"button",className:"btn btn-dark",children:"Cancel"})]})})}},56154:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=s(74165),a=s(15861),n=s(29439),c=s(72791),i=s(28127),o=s(57689),u=s(63924),l=s(3150),p=s(11087),x=s(80184);var d=function(e){var t=e.results,s=e.customer;return(0,x.jsx)(c.Fragment,{children:(0,x.jsxs)("div",{className:"max-w-screen-lg mx-auto",children:[(0,x.jsxs)("h2",{className:"text-lg font-semibold mb-4",children:['Search results for "',s,'"']}),(0,x.jsx)("div",{className:"shadow border rounded-md",children:(0,x.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,x.jsx)("thead",{className:"bg-gray-50",children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Receipt Number"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Customer Name"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Receipt Date"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Accounted"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Payment Status"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Balance"}),(0,x.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Paid"})]})}),(0,x.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((function(e){return(0,x.jsxs)("tr",{className:"hover:bg-gray-100 transition-colors duration-200",children:[(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:(0,x.jsx)(p.rU,{to:"/receipt/".concat(e.id),children:e.receipt_number})}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.customer.customer_name}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.date}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.accounted}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.status}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.customer_balance[0].balance}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.customer_balance[0].paid}),(0,x.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:(0,x.jsx)("button",{className:"btn btn-success",children:(0,x.jsx)(p.rU,{to:"/receipt/".concat(e.id,"/pay"),children:" Pay"})})})]},e.id)}))})]})})]})})};var m=function(){var e=(0,c.useState)([]),t=(0,n.Z)(e,2),s=t[0],p=t[1],m=(0,c.useState)(""),h=(0,n.Z)(m,2),f=h[0],g=h[1],y=(0,o.useNavigate)();function j(){return(j=(0,a.Z)((0,r.Z)().mark((function e(t){var a,n,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(0,i.getAuthToken)(),g(t),e.next=4,fetch("/customer/payment/search/?customer_name="+t,{method:"get",headers:{Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"}});case 4:if(404===(n=e.sent).status&&(window.alert("No such customer is available. Please try again!!"),y("./")),n.ok){e.next=8;break}throw(0,u.json)({message:"No such request"},{status:500});case 8:return e.next=10,n.json();case 10:return c=e.sent,p(c),0===c.length&&(window.alert("That customer has no payments!!"),y("./")),e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,x.jsxs)(c.Fragment,{children:[(0,x.jsx)(l.default,{onSearch:function(e){return j.apply(this,arguments)}}),s&&(0,x.jsx)(d,{results:s,customer:f})]})}}}]);
//# sourceMappingURL=6154.532967f9.chunk.js.map