"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[4158],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(d,".").concat(f)]||s[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={title:"Create Node Module",sidebar_label:"Create Node Module"},d=void 0,u={unversionedId:"how-to/general/create-node-module",id:"how-to/general/create-node-module",title:"Create Node Module",description:"Directory structure for building node packages.",source:"@site/content/how-to/general/create-node-module.md",sourceDirName:"how-to/general",slug:"/how-to/general/create-node-module",permalink:"/dev-toolbox/how-to/general/create-node-module",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/general/create-node-module.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1654713275,formattedLastUpdatedAt:"6/8/2022",frontMatter:{title:"Create Node Module",sidebar_label:"Create Node Module"},sidebar:"sidebar",previous:{title:"General",permalink:"/dev-toolbox/how-to/general/"},next:{title:"Migrate to Yarn 2",permalink:"/dev-toolbox/how-to/general/migrate-to-yarn-2"}},c={},p=[],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Directory structure for building node packages."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lib")," intended for code that can run as-is."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"src")," intended for code that needs to be manipulated before it can be used."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"build")," intended for any scripts or tooling needed to build the project."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dist")," intended for compiled modules that can be used with other systems."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bin")," intended for any executable scripts, compiled binaries used with, or\\\nbuilt from your module."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test")," intended for all of the project/module's test scripts."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"unit")," a sub-directory for unit tests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"integration")," a sub-directory for integration tests."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"env")," intended for any environment that's needed for testing."))}f.isMDXComponent=!0}}]);