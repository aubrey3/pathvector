"use strict";(self.webpackChunkpathvector_io=self.webpackChunkpathvector_io||[]).push([[535],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var a=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,o=function(t,e){if(null==t)return{};var r,a,o={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,i=new Array(n);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1171:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={title:"About",sidebar_position:1},i=void 0,c={unversionedId:"about",id:"about",title:"About",description:"Pathvector is a declarative edge routing platform that automates route optimization and control plane configuration with",source:"@site/docs/about.md",sourceDirName:".",slug:"/about",permalink:"/docs/about",draft:!1,editUrl:"https://github.com/natesales/pathvector/edit/main/docs/docs/about.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"About",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/installation"}},s={},l=[{value:"Features",id:"features",level:2}],p={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("img",{alt:"Pathvector Logo",src:"https://pathvector.io/img/black-border.svg",height:"200"}),(0,o.kt)("p",null,"Pathvector is a declarative edge routing platform that automates route optimization and control plane configuration with\nsecure and repeatable routing policy."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pathvector.io"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=docs&message=pathvector.io&color=9407cd&style=for-the-badge",alt:"Docs"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://goreportcard.com/report/github.com/natesales/pathvector"},(0,o.kt)("img",{parentName:"a",src:"https://goreportcard.com/badge/github.com/natesales/pathvector?style=for-the-badge",alt:"Go Report"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://bestpractices.coreinfrastructure.org/projects/5328"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1?label=CII%20Best%20Practices&message=passing&color=green&style=for-the-badge",alt:"CII Best Practices"}))),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://pathvector.io/docs/installation"},"installation page"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://pathvector.io/docs/examples"},"practical examples"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://pathvector.io/docs/configuration"},"configuration manual"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Robust BGP route filtering with RPKI, IRR, and downstream AS cone, ASPA, never-via-RS and more"),(0,o.kt)("li",{parentName:"ul"},"Automatic configuration from PeeringDB"),(0,o.kt)("li",{parentName:"ul"},"Automatic route optimization by enriching the standard set of BGP attributes with latency and packet loss metrics"),(0,o.kt)("li",{parentName:"ul"},"Declarative configuration model: Want to track your changes? Just commit your file to version control."),(0,o.kt)("li",{parentName:"ul"},"Data-plane agnostic: Pathvector works on servers, network switches, embedded devices, etc"),(0,o.kt)("li",{parentName:"ul"},"BFD and VRRP support"),(0,o.kt)("li",{parentName:"ul"},"Extensible Go plugin API")))}u.isMDXComponent=!0}}]);