"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[641],{9641:function(e,t,i){i.r(t);var n=i(74165),s=i(15861),a=i(29439),r=i(72791),o=i(28127),l=i(11226),u=i(80184);t.default=function(){var e=(0,r.useState)(null),t=(0,a.Z)(e,2),i=t[0],c=t[1],d=(0,l.useNavigate)(),f="submitting"===(0,l.useNavigation)().state,m=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var s,a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=(0,o.bW)(),(a=new FormData).append("file",i),e.prev=4,e.next=7,fetch("/item/upload",{method:"POST",headers:{Authorization:"Bearer "+s},body:a});case 7:400===(r=e.sent).status&&window.alert(r.message),500===r.status&&window.alert(r.message),r.ok?window.confirm("Items uploaded successfully!!")&&d("/home"):window.alert("failed to upload"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),window.alert("Network error",e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsx)(r.Fragment,{children:(0,u.jsxs)("div",{className:"pt-10",children:[(0,u.jsx)("h1",{children:"Item Upload"}),(0,u.jsxs)("form",{onSubmit:m,children:[(0,u.jsx)("div",{className:"py-4",children:(0,u.jsx)("input",{type:"file",accept:".xlsx",required:!0,onChange:function(e){c(e.target.files[0])},name:"file",id:"formFileMultiple",className:"form-control mt-1 text-sm leading-6 text-gray-600 "})}),(0,u.jsx)("button",{className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",type:"submit",disabled:f,children:f?"Submitting":"Submit"})]})]})})}}}]);
//# sourceMappingURL=641.edc3925d.chunk.js.map