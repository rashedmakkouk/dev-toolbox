"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[8744],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return f}});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),d=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=d(r),f=n,w=c["".concat(s,".").concat(f)]||c[f]||u[f]||a;return r?o.createElement(w,i(i({ref:e},p),{},{components:r})):o.createElement(w,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1166:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Host to WSL 2 Port Forwarding",sidebar_label:"Host to WSL 2 Port Forwarding"},s=void 0,d={unversionedId:"how-to/windows/host-to-wsl-2-port-forwarding",id:"how-to/windows/host-to-wsl-2-port-forwarding",title:"Host to WSL 2 Port Forwarding",description:"Netsh interface portproxy",source:"@site/content/how-to/windows/host-to-wsl-2-port-forwarding.md",sourceDirName:"how-to/windows",slug:"/how-to/windows/host-to-wsl-2-port-forwarding",permalink:"/dev-toolbox/how-to/windows/host-to-wsl-2-port-forwarding",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/windows/host-to-wsl-2-port-forwarding.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1652973183,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Host to WSL 2 Port Forwarding",sidebar_label:"Host to WSL 2 Port Forwarding"},sidebar:"sidebar",previous:{title:"Windows",permalink:"/dev-toolbox/how-to/windows/"},next:{title:"Install Windows Subsystem for Linux",permalink:"/dev-toolbox/how-to/windows/install-windows-subsystem-for-linux"}},p={},u=[{value:"Add port forwarding rule",id:"add-port-forwarding-rule",level:2},{value:"Remove port forwarding rule",id:"remove-port-forwarding-rule",level:2},{value:"List port forwarding rules",id:"list-port-forwarding-rules",level:2},{value:"Automate port forwarding",id:"automate-port-forwarding",level:2}],c={toc:u};function f(t){var e=t.components,l=(0,n.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh-interface-portproxy"},"Netsh interface portproxy"))),(0,a.kt)("h2",{id:"add-port-forwarding-rule"},"Add port forwarding rule"),(0,a.kt)("p",null,"The following rule listens on the local host IP address ",(0,a.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," and forwards\nrequests to a WSL 2 instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"netsh interface portproxy add v4tov4 listenport=<port-no> listenaddress=0.0.0.0 connectport=<port-no> connectaddress=<wsl-2-ip>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"0.0.0.0 refers to localhost IP address.")),(0,a.kt)("h2",{id:"remove-port-forwarding-rule"},"Remove port forwarding rule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"netsh interface portproxy delete v4tov4 listenport=<port-no> listenaddress=<x.x.x.x>\n")),(0,a.kt)("h2",{id:"list-port-forwarding-rules"},"List port forwarding rules"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"netsh interface portproxy show all\n")),(0,a.kt)("h2",{id:"automate-port-forwarding"},"Automate port forwarding"),(0,a.kt)("p",null,"You can deploy Windows service to automate configuration on boot; check out the\n",(0,a.kt)("a",{target:"_blank",href:r(4881).Z},"service template"),"."))}f.isMDXComponent=!0},4881:function(t,e,r){e.Z=r.p+"assets/files/wsl-2-port-forwarding-c8fdfda0073fa2a49fba307732b3fa17.ps1"}}]);