"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[4482],{74482:function(e,t,r){r.r(t),r.d(t,{action:function(){return l}});var n=r(74165),s=r(15861),i=r(72791),a=r(11226),o=r(31084),u=r(28127),c=r(80184);function l(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,n.Z)().mark((function e(t){var r,s,i,o,c,l,d,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.request,s=t.params,i=(0,u.getAuthToken)(),o=s.id,c="/receipt/void/"+o,e.next=6,r.formData();case 6:return l=e.sent,d={reason:l.get("reason")},e.next=10,fetch(c,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(d)});case 10:if(400!==(p=e.sent).status){e.next=13;break}return e.abrupt("return",p);case 13:if(404!==p.status){e.next=15;break}return e.abrupt("return",p);case 15:if(p.ok){e.next=17;break}throw(0,a.json)({message:"Failed to void receipt"},{status:500});case 17:return e.abrupt("return",(0,a.redirect)("/receipt"));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.default=function(){var e=(0,a.useRouteLoaderData)("receipt-detail"),t=(0,a.useNavigation)(),r=(0,a.useNavigate)(),n=(0,a.useActionData)(),s="submitting"===t.state;return(0,c.jsx)(i.Fragment,{children:(0,c.jsxs)(o.Z,{children:[n&&n.errors&&(0,c.jsx)("ul",{children:Object.values(n.errors).map((function(e){return(0,c.jsx)("li",{children:e},e)}))}),n&&n.message&&(0,c.jsx)("p",{children:n.message}),(0,c.jsxs)(a.Form,{method:"post",children:[(0,c.jsx)("div",{className:"pb-4",children:(0,c.jsxs)("p",{className:"mt-1 text-sm leading-6 text-gray-600",children:["Are you sure you want to void receipt number"," ",(0,c.jsx)("b",{children:e.receipt_number})," of amount"," ",(0,c.jsxs)("b",{children:[e.currency," ",e.amount]})]})}),(0,c.jsx)("div",{className:"pb-2",children:(0,c.jsx)("input",{required:!0,placeholder:"Void Reason",name:"reason",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-4 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})}),(0,c.jsxs)("div",{className:"space-x-4",children:[(0,c.jsx)("button",{className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",disabled:s,children:s?"Voiding":"Void"}),(0,c.jsx)("button",{className:"text-sm font-semibold leading-6 text-gray-900",onClick:function(){r("..")},children:"Cancel"})," "]})]})]})})}}}]);
//# sourceMappingURL=4482.17bc8023.chunk.js.map