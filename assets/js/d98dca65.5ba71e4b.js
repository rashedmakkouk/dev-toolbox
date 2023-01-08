"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[4189],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(r),k=a,m=b["".concat(c,".").concat(k)]||b[k]||p[k]||o;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5577:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"Restore Backup Archive",sidebar_label:"Restore Backup Archive"},c=void 0,u={unversionedId:"how-to/gitlab/restore-backup-archive",id:"how-to/gitlab/restore-backup-archive",title:"Restore Backup Archive",description:"Run gitlab-cli reconfigure at least once before executing a restore.",source:"@site/content/how-to/gitlab/restore-backup-archive.md",sourceDirName:"how-to/gitlab",slug:"/how-to/gitlab/restore-backup-archive",permalink:"/dev-toolbox/how-to/gitlab/restore-backup-archive",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/gitlab/restore-backup-archive.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1673188359,formattedLastUpdatedAt:"1/8/2023",frontMatter:{title:"Restore Backup Archive",sidebar_label:"Restore Backup Archive"},sidebar:"sidebar",previous:{title:"Install Runner",permalink:"/dev-toolbox/how-to/gitlab/install-runner"},next:{title:"Setup Self-hosted Instance",permalink:"/dev-toolbox/how-to/gitlab/setup-self-hosted-instance"}},s={},p=[{value:"Omnibus",id:"omnibus",level:2}],b={toc:p};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"gitlab-cli reconfigure")," at least once before executing a restore.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Refer to backup file as ",(0,o.kt)("inlineCode",{parentName:"p"},"BACKUP=timestamp_of_backup"),".")),(0,o.kt)("h2",{id:"omnibus"},"Omnibus"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy application backup archive file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp 11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar /var/opt/gitlab/backups/\n")),(0,o.kt)("p",null,"Set required permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"chown git.git /var/opt/gitlab/backups/11493107454_2018_04_25_10.6.4-ce_gitlab_backup.tar\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy ",(0,o.kt)("inlineCode",{parentName:"li"},"gitlab-secrets")," file and ",(0,o.kt)("inlineCode",{parentName:"li"},"trusted-certs"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp /backups/secrets/gitlab-secrets.json|gitlab.rb /etc/gitlab/\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Stop GitLab services:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gitlab-ctl stop puma\n\nsudo gitlab-ctl stop sidekiq\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo gitlab-ctl status")," to verify services are down.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Execute restore command:")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This command will overwrite the contents of your GitLab database!")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"gitlab-backup restore BACKUP=1493107454_2018_04_25_10.6.4-ce\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Verification steps:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Confirm restore command completed successfully:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gitlab-rake gitlab:check SANITIZE=true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run post-restore commands (if necessary):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo gitlab-ctl restart\n\nsudo gitlab-ctl reconfigure\n")))}k.isMDXComponent=!0}}]);