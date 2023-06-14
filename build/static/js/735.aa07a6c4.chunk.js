"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[735,727],{727:function(e,t,n){n.r(t),n.d(t,{action:function(){return p}});var r=n(4165),a=n(5861),s=(n(2791),n(7689)),i=n(1087),o=n(1989),u=n(1084),c=n(8127),l=n(184);function p(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,s,i,u,l,p,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,a=t.params,s=(0,c.bW)(),i=a.id,u="/payment/reject/"+i,e.next=6,n.formData();case 6:return l=e.sent,p={reason:l.get("reason")},e.next=10,fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(p)});case 10:if(400!==(d=e.sent).status){e.next=13;break}return e.abrupt("return",d);case 13:if(d.ok){e.next=16;break}throw window.alert("Failed to reject payment"),(0,o.json)({message:"Failed to reject payment"},{status:500});case 16:return e.abrupt("return",(0,o.redirect)("/payment"));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.bank,n=e.amount,r=e.supplier,a=e.currency,o=(0,s.useActionData)(),c=(0,s.useNavigation)(),p=(0,s.useNavigate)(),d="submitting"===c.state;return(0,l.jsxs)(u.Z,{children:[(0,l.jsx)("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:"Payment Approval Form"}),o&&o.errors&&(0,l.jsx)("ul",{children:Object.values(o.errors).map((function(e){return(0,l.jsx)("li",{children:e},e)}))}),o&&o.message&&(0,l.jsx)("p",{children:o.message}),(0,l.jsxs)(i.l0,{method:"post",children:[(0,l.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Are you sure you want to reject this payment of ",(0,l.jsxs)("b",{children:[a," ",n," "]})]}),(0,l.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["To ",(0,l.jsx)("strong",{children:"supplier"}),":",r," from ",(0,l.jsx)("strong",{children:"bank"})," :",t]}),(0,l.jsx)("input",{name:"reason",type:"text",placeholder:"reason",required:!0}),(0,l.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,l.jsx)("button",{type:"submit",disabled:d,children:"Yes"}),(0,l.jsx)("button",{type:"button",onClick:function(){p("/payment")},children:"No"})]})]})]})}},2735:function(e,t,n){n.r(t);var r=n(2791),a=n(1226),s=n(727),i=n(184);t.default=function(){var e=(0,a.useRouteLoaderData)("payment").payment;return(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(s.default,{bank:e.account.account_name,amount:e.amount,supplier:e.invoice.supplier.supplier_name,currency:e.currency})})}}}]);
//# sourceMappingURL=735.aa07a6c4.chunk.js.map