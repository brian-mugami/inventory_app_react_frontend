"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[604],{1604:function(e,n,r){r.r(n),r.d(n,{action:function(){return c}});var t=r(4165),s=r(5861),i=(r(2791),r(1084)),a=r(1226),o=r(8127),u=r(184);function c(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,t.Z)().mark((function e(n){var r,s,i,u,c,d,l,b;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.request,s=n.params,i=(0,o.bW)(),u=s.id,c="/invoice/void/"+u,e.next=6,r.formData();case 6:return d=e.sent,l={reason:d.get("reason")},e.next=10,fetch(c,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+i,"Access-Control-Allow-Origin":"*"},body:JSON.stringify(l)});case 10:if(400!==(b=e.sent).status){e.next=13;break}return e.abrupt("return",b);case 13:if(404!==b.status){e.next=15;break}return e.abrupt("return",b);case 15:if(b.ok){e.next=17;break}throw(0,a.json)({message:"Failed to void invoice"},{status:500});case 17:return e.abrupt("return",(0,a.redirect)("/invoice"));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.default=function(e){var n=e.invoice,r=(0,a.useNavigation)(),t=(0,a.useNavigate)(),s=(0,a.useActionData)(),o="submitting"===r.state;return(0,u.jsxs)(i.Z,{children:[s&&s.errors&&(0,u.jsx)("ul",{children:Object.values(s.errors).map((function(e){return(0,u.jsx)("li",{children:e},e)}))}),s&&s.message&&(0,u.jsx)("p",{children:s.message}),(0,u.jsxs)(a.Form,{method:"post",children:[(0,u.jsxs)("div",{children:["Are you sure you want to void invoice number"," ",(0,u.jsx)("b",{children:n.invoice_number})," of amount"," ",(0,u.jsxs)("b",{children:[n.currency," ",n.amount]})]}),(0,u.jsx)("div",{children:(0,u.jsx)("input",{required:!0,placeholder:"Void Reason",name:"reason"})}),(0,u.jsx)("button",{className:"btn btn-primary",onClick:function(){t("..")},children:"No"})," ",(0,u.jsx)("button",{className:"btn btn-secondary",type:"submit",disabled:o,children:o?"Voiding":"Void"})]})]})}}}]);
//# sourceMappingURL=604.f5f31477.chunk.js.map