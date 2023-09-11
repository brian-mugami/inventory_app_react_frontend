"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[2735,727],{60727:function(e,t,n){n.r(t),n.d(t,{action:function(){return d}});var s=n(74165),r=n(15861),a=(n(72791),n(57689)),i=n(11087),o=n(63924),c=n(31084),u=n(28127),l=n(80184);function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)((0,s.Z)().mark((function e(t){var n,r,a,i,c,l,d,m;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,r=t.params,a=(0,u.getAuthToken)(),i=r.id,c="https://inventory-accounting.onrender.com/payment/reject/"+i,e.next=6,n.formData();case 6:return l=e.sent,d={reason:l.get("reason")},e.next=10,fetch(c,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(d)});case 10:if(400!==(m=e.sent).status){e.next=13;break}return e.abrupt("return",m);case 13:if(m.ok){e.next=16;break}throw window.alert("Failed to reject payment"),(0,o.json)({message:"Failed to reject payment"},{status:500});case 16:return e.abrupt("return",(0,o.redirect)("/payment"));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(e){var t=e.bank,n=e.amount,s=e.supplier,r=e.currency,o=(0,a.useActionData)(),u=(0,a.useNavigation)(),d=(0,a.useNavigate)(),m="submitting"===u.state;return(0,l.jsxs)(c.Z,{children:[(0,l.jsx)("h3",{className:"text-base font-semibold leading-7 text-gray-900",children:"Payment Rejection Form"}),o&&o.errors&&(0,l.jsx)("ul",{children:Object.values(o.errors).map((function(e){return(0,l.jsx)("li",{children:e},e)}))}),o&&o.message&&(0,l.jsx)("p",{children:o.message}),(0,l.jsxs)(i.l0,{method:"post",children:[(0,l.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Are you sure you want to reject this payment of ",(0,l.jsxs)("b",{children:[r," ",n," "]})]}),(0,l.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["To ",(0,l.jsx)("strong",{children:"supplier"}),":",s," from ",(0,l.jsx)("strong",{children:"bank"})," :",t]}),(0,l.jsxs)("div",{className:"col-span-full pt-2",children:[(0,l.jsx)("label",{htmlFor:"reason",className:"block text-sm font-medium leading-6 text-gray-900",children:"Reason"}),(0,l.jsx)("div",{className:"mt-2",children:(0,l.jsx)("textarea",{id:"reason",name:"reason",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:""})}),(0,l.jsx)("p",{className:"mt-3 text-sm leading-6 text-gray-600",children:"Write the reason for Rejection ."})]}),(0,l.jsxs)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:[(0,l.jsx)("button",{type:"button",onClick:function(){d("/payment")},children:"No"}),(0,l.jsx)("button",{type:"submit",disabled:m,className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Yes"})]})]})]})}},32735:function(e,t,n){n.r(t);var s=n(72791),r=n(11226),a=n(60727),i=n(80184);t.default=function(){var e=(0,r.useRouteLoaderData)("payment").payment;return(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(a.default,{bank:e.account.account_name,amount:e.amount,supplier:e.invoice.supplier.supplier_name,currency:e.currency})})}}}]);
//# sourceMappingURL=2735.a82e52b0.chunk.js.map