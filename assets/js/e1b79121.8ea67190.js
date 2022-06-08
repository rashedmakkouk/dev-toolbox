"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[2920],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),g=n,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7425:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],s={title:"Upgrade Packaged Postgresql Server",sidebar_label:"Upgrade Packaged Postgresql Server"},p=void 0,i={unversionedId:"how-to/gitlab/upgrade-packaged-postgresql-server",id:"how-to/gitlab/upgrade-packaged-postgresql-server",title:"Upgrade Packaged Postgresql Server",description:"Official Guide",source:"@site/content/how-to/gitlab/upgrade-packaged-postgresql-server.md",sourceDirName:"how-to/gitlab",slug:"/how-to/gitlab/upgrade-packaged-postgresql-server",permalink:"/dev-toolbox/how-to/gitlab/upgrade-packaged-postgresql-server",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/gitlab/upgrade-packaged-postgresql-server.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1654710696,formattedLastUpdatedAt:"6/8/2022",frontMatter:{title:"Upgrade Packaged Postgresql Server",sidebar_label:"Upgrade Packaged Postgresql Server"},sidebar:"sidebar",previous:{title:"Setup Self-hosted Instance",permalink:"/dev-toolbox/how-to/gitlab/setup-self-hosted-instance"},next:{title:"Kubernetes",permalink:"/dev-toolbox/how-to/kubernetes/"}},c={},u=[{value:"System Check",id:"system-check",level:2},{value:"Upgrade",id:"upgrade",level:2},{value:"Clean up",id:"clean-up",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/omnibus/settings/database.html#upgrade-packaged-postgresql-server"},"Official Guide"))),(0,o.kt)("h2",{id:"system-check"},"System Check"),(0,o.kt)("p",null,"Check database size:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo du -sh /var/opt/gitlab/postgresql/data\n")),(0,o.kt)("p",null,"Confirm enough free space is availble:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo df -h\n")),(0,o.kt)("h2",{id:"upgrade"},"Upgrade"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gitlab-ctl pg-upgrade -V 12\n")),(0,o.kt)("h2",{id:"clean-up"},"Clean up"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Verify everything is working before running the following commands.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo rm -rf /var/opt/gitlab/postgresql/data.<old_version>\n\nsudo rm -f /var/opt/gitlab/postgresql-version.old\n")))}g.isMDXComponent=!0}}]);