"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[7459],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8272:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Connect with SSH",sidebar_label:"Connect with SSH"},c=void 0,u={unversionedId:"how-to/devops/connect-with-ssh",id:"how-to/devops/connect-with-ssh",title:"Connect with SSH",description:"Generate SSH Key",source:"@site/content/how-to/devops/connect-with-ssh.md",sourceDirName:"how-to/devops",slug:"/how-to/devops/connect-with-ssh",permalink:"/dev-toolbox/how-to/devops/connect-with-ssh",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/devops/connect-with-ssh.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1652973183,formattedLastUpdatedAt:"5/19/2022",frontMatter:{title:"Connect with SSH",sidebar_label:"Connect with SSH"},sidebar:"sidebar",previous:{title:"DevOps",permalink:"/dev-toolbox/how-to/devops/"},next:{title:"Generate SSL Certificate",permalink:"/dev-toolbox/how-to/devops/generate-ssl-certificate"}},l={},h=[{value:"Generate SSH Key",id:"generate-ssh-key",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Configure <code>ssh-agent</code>",id:"configure-ssh-agent",level:3},{value:"Auto-launch <code>ssh-agent</code>",id:"auto-launch-ssh-agent",level:3},{value:"Mac OS",id:"mac-os",level:4},{value:"Windows",id:"windows",level:4}],d={toc:h};function p(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"generate-ssh-key"},"Generate SSH Key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"~/.ssh")),(0,r.kt)("p",null,"Follow instructions at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key"},"Generate a new SSH key"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ ssh-keygen -t ed25519 -C "your_email@example.com"\n\nGenerating public/private ed25519 key pair.\n')),(0,r.kt)("p",null,"Enter desired filename when prompted and avoid manually renaming files for successful authentication."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"To use SSH keys to connect to online Git repository service providers, e.g. GitHub, follow the\nofficial instructions to add your public key to your account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"},"Adding a new SSH key to your GitHub account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ssh/#add-an-ssh-key-to-your-gitlab-account"},"Add an SSH key to your GitLab account"))),(0,r.kt)("h3",{id:"configure-ssh-agent"},"Configure ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh-agent")),(0,r.kt)("p",null,"Additional steps might be required before you can successfully connect; check your online Git\nrepository service provider documentation for additional instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent"},"Adding your SSH key to the ",(0,r.kt)("inlineCode",{parentName:"a"},"ssh-agent")))),(0,r.kt)("h3",{id:"auto-launch-ssh-agent"},"Auto-launch ",(0,r.kt)("inlineCode",{parentName:"h3"},"ssh-agent")),(0,r.kt)("h4",{id:"mac-os"},"Mac OS"),(0,r.kt)("p",null,"On Mac OS X, these default private key files are handled automatically; see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain"},"Saving your passphrase in the keychain"),"\nfor more details."),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("p",null,"On Windows, additional steps are needed to automate the process; follow these documented ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows"},"instructions"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Custom ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc")," config file template can be found ",(0,r.kt)("a",{target:"_blank",href:n(1537).Z},"here"),".")))}p.isMDXComponent=!0},1537:function(e,t,n){t.Z=n.p+"assets/files/ssh-agent-cc5aeeb23f8f49876ff838bb4ff11cfc.bashrc"}}]);