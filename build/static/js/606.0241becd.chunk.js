"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[606],{9606:function(e,r,n){n.r(r),n.d(r,{default:function(){return i},loader:function(){return h}});var t=n(4165),s=n(5861),a=(n(2791),n(184));var c=function(e){var r=e.balances;return(0,a.jsxs)("table",{className:"table table-striped",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",children:"Balance Number"}),(0,a.jsx)("th",{scope:"col",children:"Supplier Name"}),(0,a.jsx)("th",{scope:"col",children:"Currency"}),(0,a.jsx)("th",{scope:"col",children:"Amount"})]},r.number)}),(0,a.jsx)("tbody",{children:r.map((function(e){return(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"row",children:e.number}),(0,a.jsx)("td",{children:e.supplier_name}),(0,a.jsx)("td",{children:e.currency}),(0,a.jsx)("td",{children:e.total_amount})]},e.number)}))})]})},u=n(7689),o=n(1989),l=n(8127);var i=function(){var e=(0,u.useRouteLoaderData)("supplier-balances");return(0,a.jsx)(c,{balances:e})};function h(){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,t.Z)().mark((function e(){var r,n,s;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,l.bW)(),e.next=3,fetch("/supplier-balance",{method:"get",headers:{Authorization:"Bearer "+r}});case 3:if(404!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",n);case 6:if(n.ok){e.next=10;break}throw(0,o.json)({message:"The response was not ok"},{status:500});case 10:return e.next=12,n.json();case 12:return s=e.sent,console.log(s),e.abrupt("return",s.balances);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=606.0241becd.chunk.js.map