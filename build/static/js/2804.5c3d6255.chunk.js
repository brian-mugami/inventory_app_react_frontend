"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[2804],{92804:function(e,t,n){n.r(t);var r=n(74165),a=n(15861),s=n(29439),i=n(72791),o=n(11226),u=n(28127),c=n(80184);t.default=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],l=t[1],d=(0,o.useNavigate)(),f="submitting"===(0,o.useNavigation)().state,p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,s,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=(0,u.getAuthToken)(),(s=new FormData).append("file",n),e.prev=4,e.next=7,fetch("https://inventory-accounting.onrender.com/inventory/upload",{method:"POST",headers:{Authorization:"Bearer "+a},body:s});case 7:400===(i=e.sent).status&&window.alert(i.message),500===i.status&&window.alert(i.message),i.ok?window.confirm("Items uploaded successfully!!")&&d("/home"):window.alert("failed to upload"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),window.alert("Network error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsxs)(i.Fragment,{children:[(0,c.jsx)("h1",{children:"Inventory Upload"}),(0,c.jsx)("form",{onSubmit:p,children:(0,c.jsxs)("div",{children:[(0,c.jsx)("input",{type:"file",accept:".xlsx",required:!0,onChange:function(e){l(e.target.files[0])},name:"file",id:"formFileMultiple",className:"form-control"}),(0,c.jsx)("button",{className:"btn btn-success",type:"submit",disabled:f,children:f?"Submitting":"Submit"})]})})]})}}}]);
//# sourceMappingURL=2804.5c3d6255.chunk.js.map