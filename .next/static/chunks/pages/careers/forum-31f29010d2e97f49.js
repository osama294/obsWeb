(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[437],{2734:function(e,a,t){"use strict";t(7294),t(5893)},5839:function(e,a,t){"use strict";t(7294);var n=t(1673),s=t.n(n),l=t(5893);a.Z=function(e){return(0,l.jsx)("div",{className:s().overlay,children:(0,l.jsx)("div",{className:s().modal,children:e.message})})}},3737:function(e,a,t){"use strict";t.r(a);var n=t(9499),s=t(7294),l=t(2850),r=t(8630),c=t(1673),i=t.n(c),o=(t(2734),t(9352)),m=t(1163),d=t(6230),p=t.n(d),u=t(5839),h=t(9669),f=t.n(h),x=t(5893);function v(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?v(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}a.default=function(){var e=(0,m.useRouter)(),a=e.query;console.log("data",e),(0,s.useEffect)((function(){g(e.query.id),console.log("jobs",a)}),[a]);var t=(0,s.useState)(""),c=t[0],d=t[1],h=(0,s.useState)(!1),v=h[0],y=h[1],N=(0,s.useState)("0"),b=N[0],g=N[1],O=(0,s.useState)({}),_=O[0],w=O[1],E=(0,s.useState)({name:"",lastname:"",email:"",phone:"",expected_salary:"",experience:""}),P=E[0],C=E[1],S=new(p()),k=function(e){C(j(j({},P),{},(0,n.Z)({},e.target.name,e.target.value))),console.log("$$$",_)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(l.Z,{color:"#000000"}),(0,x.jsx)("div",{className:i().wrapper,children:(0,x.jsxs)("div",{className:i().career,children:[(0,x.jsxs)("div",{className:i().heading,children:[(0,x.jsx)("h3",{className:i().title,children:"".concat(a.title," - ").concat(a.type,"/").concat(a.jobeMode)}),(0,x.jsx)("hr",{className:i().hr1}),(0,x.jsxs)("h2",{className:i().desc,children:["".concat(a.domain," - ").concat(a.type)," - Islamabad - Pakistan"]})]}),(0,x.jsxs)("div",{className:i().form,children:[(0,x.jsxs)("div",{className:i().form_desc,children:[(0,x.jsx)("h3",{className:i().form_title,children:"Personal Information"}),(0,x.jsxs)("div",{className:i().clear,onClick:function(){C({name:"",lastname:"",email:"",phone:"",cv:""})},children:[(0,x.jsx)(o.WhN,{className:i().svg}),(0,x.jsx)("p",{children:"Clear form"})]})]}),(0,x.jsx)("hr",{className:i().hr2}),(0,x.jsxs)("div",{className:i().form_content,children:[(0,x.jsxs)("div",{className:i().name,children:[(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"name",className:i().labels,children:"First Name"}),(0,x.jsx)("input",{type:"text",name:"name",id:"name",className:i().inputs,placeholder:"Name",value:P.name,onChange:k})]}),(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"lname",className:i().labels,children:"Last Name"}),(0,x.jsx)("input",{type:"text",name:"lastname",id:"lname",className:i().inputs,placeholder:"Last Name",value:P.lastname,onChange:k})]})]}),(0,x.jsxs)("div",{className:i().name,children:[(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"experience",className:i().labels,children:"Experience"}),(0,x.jsx)("input",{type:"text",name:"experience",id:"experience",className:i().inputs,placeholder:"Experience",value:P.experience,onChange:k})]}),(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"expected_salary",className:i().labels,children:"Expected Salary"}),(0,x.jsx)("input",{type:"text",name:"expected_salary",id:"expected_salary",className:i().inputs,placeholder:"Expected Salary",value:P.expected_salary,onChange:k})]})]}),(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"email",className:i().labels,children:"Email"}),(0,x.jsx)("input",{type:"text",name:"email",id:"email",className:i().inputs,placeholder:"Email",value:P.email,onChange:k})]}),(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"phone",className:i().labels,children:"Phone"}),(0,x.jsx)("input",{type:"text",name:"phone",id:"phone",className:i().inputs,placeholder:"Phone",value:P.phone,onChange:k})]}),(0,x.jsxs)("div",{className:i().fieldset,children:[(0,x.jsx)("label",{htmlFor:"resume",className:i().labels,children:"Resume"}),(0,x.jsx)("input",{type:"file",name:"cv",id:"cv",className:i().upload,placeholder:"Resume",value:P.cv,onChange:function(e){console.log("file",e.target.name),w((0,n.Z)({},e.target.name,e.target.files[0])),console.log("cv",_)}})]})]}),(0,x.jsx)("button",{type:"submit",role:"button",id:"submit-btn",value:"Submit Application",className:i().buttons,onClick:function(e){if(e.preventDefault(),""==P.name||""==P.email||""==P.cv||""==P.message||""==P.lastname||""==P.phone||""==P.expected_salary||""==P.experience)return console.log("cv",_,_.cv),_=={}&&console.log("bsdk"),y(!0),d("Enter Required Details"),void setTimeout((function(){y(!1)}),5e3);S.append("name",P.name),S.append("lastname",P.lastname),S.append("email",P.email),S.append("phone",P.phone),S.append("cv",_.cv),S.append("job_id",b),S.append("experience",P.experience),S.append("expected_salary",P.expected_salary),console.log("form",_);JSON.stringify([P]);f().post("https://globaltechnologia.org/webAdmin/api/apply_job",S,{headers:{"content-type":"multipart/form-data"}}).then((function(e){var a;(console.log(e),200==e.status)?(d(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message),y(!0),C({name:"",email:"",lastname:"",phone:"",expected_salary:"",experience:""}),w({}),setTimeout((function(){y(!1)}),5e3)):d("try again")})).catch((function(e){console.log(e)}))},children:"Submit"})]})]})}),1==v&&(0,x.jsx)(u.Z,{message:c}),(0,x.jsx)(r.Z,{})]})}},4786:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/careers/forum",function(){return t(3737)}])},8357:function(e,a,t){"use strict";t.d(a,{w_:function(){return o}});var n=t(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),r=function(){return r=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var s in a=arguments[t])Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);return e},r.apply(this,arguments)},c=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]])}return t};function i(e){return e&&e.map((function(e,a){return n.createElement(e.tag,r({key:a},e.attr),i(e.child))}))}function o(e){return function(a){return n.createElement(m,r({attr:r({},e.attr)},a),i(e.child))}}function m(e){var a=function(a){var t,s=e.attr,l=e.size,i=e.title,o=c(e,["attr","size","title"]),m=l||a.size||"1em";return a.className&&(t=a.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,o,{className:t,style:r(r({color:e.color||a.color},a.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return a(e)})):a(s)}}},function(e){e.O(0,[937,636,65,589,774,888,179],(function(){return a=4786,e(e.s=a);var a}));var a=e.O();_N_E=a}]);