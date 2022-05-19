"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[5929],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8964:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Version Control",sidebar_label:"Version Control"},d=void 0,c={unversionedId:"style-guide/version-control",id:"style-guide/version-control",title:"Version Control",description:"Commit",source:"@site/content/style-guide/version-control.md",sourceDirName:"style-guide",slug:"/style-guide/version-control",permalink:"/style-guide/version-control",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/style-guide/version-control.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1652972297,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Version Control",sidebar_label:"Version Control"},sidebar:"sidebar",previous:{title:"Markdown",permalink:"/style-guide/markdown"},next:{title:"Resources",permalink:"/resources"}},p={},s=[{value:"Commit",id:"commit",level:2},{value:"Message",id:"message",level:3},{value:"Change <code>type</code>s",id:"change-types",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commit"},"Commit"),(0,o.kt)("h3",{id:"message"},"Message"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Use two separate messages for multi-line tasks:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First message includes a general overview describing the commit."),(0,o.kt)("li",{parentName:"ul"},"Second message includes detailed information about the commit - described in the table below.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Summary:")," as header for blocks listing commit changes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Changelog:")," as header for blocks listing changes to include in ",(0,o.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Each commit change message should start with a capital letter after its ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," prefix for each commit change message."))),(0,o.kt)("h3",{id:"change-types"},"Change ",(0,o.kt)("inlineCode",{parentName:"h3"},"type"),"s"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"breaking:"),(0,o.kt)("td",{parentName:"tr",align:null},"Commit includes changes that could break previous API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chore:"),(0,o.kt)("td",{parentName:"tr",align:null},"Tasks and coding activity.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"deprecated"),(0,o.kt)("td",{parentName:"tr",align:null},"Remove outdated or refactored code block or package.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"docs"),(0,o.kt)("td",{parentName:"tr",align:null},"Added, updated or deprecated documentation entries.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"enhancement"),(0,o.kt)("td",{parentName:"tr",align:null},"Improve or expand on existing functionality or feature.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fix"),(0,o.kt)("td",{parentName:"tr",align:null},"Fix a bug or a regression.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"refactor"),(0,o.kt)("td",{parentName:"tr",align:null},"Update existing code; no new functionality added.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"update"),(0,o.kt)("td",{parentName:"tr",align:null},"Replace existing code with new API or change functionality.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"upgrade"),(0,o.kt)("td",{parentName:"tr",align:null},"Including package dependencies, db schema, scripts, etc.")))))}m.isMDXComponent=!0}}]);