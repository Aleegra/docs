"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Kubernetes",l={unversionedId:"operation/connector/kubernetes",id:"operation/connector/kubernetes",title:"Kubernetes",description:"\u67e5\u770b\u5217\u8868",source:"@site/docs/operation/connector/kubernetes.md",sourceDirName:"operation/connector",slug:"/operation/connector/kubernetes",permalink:"/docs/operation/connector/kubernetes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u5668",permalink:"/docs/category/\u8fde\u63a5\u5668"},next:{title:"\u7248\u672c\u63a7\u5236",permalink:"/docs/operation/connector/version-control"}},c={},p=[{value:"\u67e5\u770b\u5217\u8868",id:"\u67e5\u770b\u5217\u8868",level:2},{value:"\u521b\u5efa Kubernetes \u8fde\u63a5\u5668",id:"\u521b\u5efa-kubernetes-\u8fde\u63a5\u5668",level:2},{value:"\u67e5\u770b\u3001\u7f16\u8f91\u8fde\u63a5\u5668",id:"\u67e5\u770b\u7f16\u8f91\u8fde\u63a5\u5668",level:2},{value:"\u5220\u9664\u8fde\u63a5\u5668",id:"\u5220\u9664\u8fde\u63a5\u5668",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,o.kt)("h2",{id:"\u67e5\u770b\u5217\u8868"},"\u67e5\u770b\u5217\u8868"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u83dc\u5355",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fd0\u7ef4\u4e2d\u5fc3")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5\u5668")," \u53ef\u67e5\u770b\u8fde\u63a5\u5668\u5217\u8868\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u72b6\u6001\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"ready"),"\u7684\u8fde\u63a5\u5668\u4e3a\u53ef\u7528\u72b6\u6001\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa-kubernetes-\u8fde\u63a5\u5668"},"\u521b\u5efa Kubernetes \u8fde\u63a5\u5668"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5217\u8868",(0,o.kt)("inlineCode",{parentName:"li"},"\u65b0\u5efa\u8fde\u63a5\u5668"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5f00\u542f",(0,o.kt)("inlineCode",{parentName:"li"},"\u542f\u7528\u6210\u672c\u5206\u6790"),"\u540e\u53ef\u5728\u5de6\u4fa7\u83dc\u5355",(0,o.kt)("inlineCode",{parentName:"li"},"\u6210\u672c\u7ba1\u7406"),"\u4e2d\u53ef\u521b\u5efa\u76f8\u5173\u89c6\u56fe\u67e5\u770b\u7edf\u8ba1\u76f8\u5173\u7684\u6d88\u8d39\u91d1\u989d\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355",(0,o.kt)("inlineCode",{parentName:"li"},"\u4fdd\u5b58"),"\u6210\u529f\u53ef\u521b\u5efa Kubernetes \u8fde\u63a5\u5668\u3002")),(0,o.kt)("h2",{id:"\u67e5\u770b\u7f16\u8f91\u8fde\u63a5\u5668"},"\u67e5\u770b\u3001\u7f16\u8f91\u8fde\u63a5\u5668"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5217\u8868\u4e2d",(0,o.kt)("inlineCode",{parentName:"li"},"\u8fde\u63a5\u5668\u540d\u79f0"),"\u53ef\u67e5\u770b\u8be6\u60c5\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u8be6\u60c5\u9875\u4e2d\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"\u7f16\u8f91"),"\u53ef\u8fdb\u5165\u7f16\u8f91\u72b6\u6001\u3002")),(0,o.kt)("h2",{id:"\u5220\u9664\u8fde\u63a5\u5668"},"\u5220\u9664\u8fde\u63a5\u5668"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5217\u8868\u4e2d\u9009\u4e2d\u8981\u5220\u9664\u7684\u8fde\u63a5\uff0c\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"li"},"\u5220\u9664"),"\u6309\u94ae\uff0c\u786e\u8ba4\u5373\u53ef\u5220\u9664\u3002")))}s.isMDXComponent=!0}}]);