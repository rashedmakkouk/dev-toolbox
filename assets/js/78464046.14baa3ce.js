"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[9707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Setup Git Commit Linting",sidebar_label:"Setup Git Commit Linting"},c=void 0,u={unversionedId:"how-to/git/setup-git-commit-linting",id:"how-to/git/setup-git-commit-linting",title:"Setup Git Commit Linting",description:"Prerequisites",source:"@site/content/how-to/git/setup-git-commit-linting.md",sourceDirName:"how-to/git",slug:"/how-to/git/setup-git-commit-linting",permalink:"/how-to/git/setup-git-commit-linting",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/git/setup-git-commit-linting.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1652972297,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Setup Git Commit Linting",sidebar_label:"Setup Git Commit Linting"},sidebar:"sidebar",previous:{title:"Merge Git Repository into Monorepo",permalink:"/how-to/git/merge-git-repository-into-monorepo"},next:{title:"Split subfolder out into a new repository",permalink:"/how-to/git/split-subfolder-out-into-a-new-repository"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Config",id:"config",level:2},{value:"husky",id:"husky",level:3},{value:"commitlint",id:"commitlint",level:3},{value:"okonet / lint-staged",id:"okonet--lint-staged",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Excecute ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git init")," commands before you proceed.")),(0,i.kt)("p",null,"Install the following packages:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @commitlint/cli @commitlint/config-conventional\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("h3",{id:"husky"},"husky"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},".huskyrc.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hooks": {\n    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"\n  }\n}\n')),(0,i.kt)("h3",{id:"commitlint"},"commitlint"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},".commitlintrc.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev @commitlint/config-conventional\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": ["@commitlint/config-conventional"]\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://commitlint.js.org/#/reference-rules"},"reference rules"),"."),(0,i.kt)("h3",{id:"okonet--lint-staged"},"okonet / lint-staged"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},".lintstagedrc.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add --dev eslint prettier\n\nnpx mrm lint-staged\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "*": "prettier --check"\n}\n')))}d.isMDXComponent=!0}}]);