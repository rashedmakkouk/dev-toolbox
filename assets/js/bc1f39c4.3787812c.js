"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[8620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9849:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={title:"Windows",sidebar_label:"Windows"},o=void 0,d={unversionedId:"devops/windows",id:"devops/windows",title:"Windows",description:"OS",source:"@site/content/devops/windows.md",sourceDirName:"devops",slug:"/devops/windows",permalink:"/dev-toolbox/devops/windows",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/devops/windows.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1655445650,formattedLastUpdatedAt:"6/17/2022",frontMatter:{title:"Windows",sidebar_label:"Windows"},sidebar:"sidebar",previous:{title:"VirtualBox",permalink:"/dev-toolbox/devops/virtualbox"},next:{title:"Development",permalink:"/dev-toolbox/development/"}},u={},p=[{value:"OS",id:"os",level:2},{value:"Open Startup Folder",id:"open-startup-folder",level:3},{value:"List processes",id:"list-processes",level:3},{value:"Delete processes",id:"delete-processes",level:3},{value:"Filesystem",id:"filesystem",level:2},{value:"Create symbolic link",id:"create-symbolic-link",level:3},{value:"Windows Subsystem for Linux (WSL)",id:"windows-subsystem-for-linux-wsl",level:2},{value:"List available distros",id:"list-available-distros",level:3},{value:"Run a specific distro",id:"run-a-specific-distro",level:3},{value:"Shutdown distros",id:"shutdown-distros",level:3},{value:"Purge installed distro",id:"purge-installed-distro",level:3},{value:"User access",id:"user-access",level:3},{value:"Set distro version",id:"set-distro-version",level:3},{value:"Set default distro to run",id:"set-default-distro-to-run",level:3},{value:"Configure per distro launch settings",id:"configure-per-distro-launch-settings",level:3},{value:"Windows Terminal",id:"windows-terminal",level:2},{value:"Add icon to terminal profile",id:"add-icon-to-terminal-profile",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"os"},"OS"),(0,l.kt)("h3",{id:"open-startup-folder"},"Open Startup Folder"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"shell:startup\n")),(0,l.kt)("h3",{id:"list-processes"},"List processes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},'netstat -a -b -o\n\nnetstat -ano | findstr :port\n\ntasklist /fi "imagename eq process.exe"\n')),(0,l.kt)("h3",{id:"delete-processes"},"Delete processes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"taskkill /f /pid <pid>\n\ntaskkill /f /im <name>\n")),(0,l.kt)("h2",{id:"filesystem"},"Filesystem"),(0,l.kt)("h3",{id:"create-symbolic-link"},"Create symbolic link"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"mklink link.txt c:\\path\\to\\target\\file.txt\n\nmklink /d directory c:\\path\\to\\target\\directory\n")),(0,l.kt)("h2",{id:"windows-subsystem-for-linux-wsl"},"Windows Subsystem for Linux (WSL)"),(0,l.kt)("h3",{id:"list-available-distros"},"List available distros"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl --list --verbose\nwsl --list --version\nwsl --list --running\nwsl -l --all\n")),(0,l.kt)("h3",{id:"run-a-specific-distro"},"Run a specific distro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl -d <distro-name>\nwsl --distribution <distro-name>\n")),(0,l.kt)("h3",{id:"shutdown-distros"},"Shutdown distros"),(0,l.kt)("p",null,"Shutdown all running distros"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl --shutdown\n")),(0,l.kt)("p",null,"Shutdown specific distros"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"# To terminate/shutdown a specific distro\nwsl -t <distro-name>\nwsl --terminate <distro-name>\n")),(0,l.kt)("h3",{id:"purge-installed-distro"},"Purge installed distro"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl --unregister <distro-name>\n")),(0,l.kt)("h3",{id:"user-access"},"User access"),(0,l.kt)("p",null,"Run as specific user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl -u <username>\nwsl --user <username>\n")),(0,l.kt)("p",null,"Change default user"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"<distro-name> config --default-user <username>\n")),(0,l.kt)("h3",{id:"set-distro-version"},"Set distro version"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl --set-version <distro-name> <version>\n")),(0,l.kt)("h3",{id:"set-default-distro-to-run"},"Set default distro to run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"wsl -s <distro-name>\nwsl --setdefault <distro-name>\n")),(0,l.kt)("h3",{id:"configure-per-distro-launch-settings"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.microsoft.com/en-us/windows/wsl/wsl-config#configure-per-distro-launch-settings-with-wslconf"},"Configure per distro launch settings")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Additional steps or details will be listed below.")),(0,l.kt)("h2",{id:"windows-terminal"},"Windows Terminal"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"wt.exe")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"wt")," from any command line.")),(0,l.kt)("h3",{id:"add-icon-to-terminal-profile"},"Add icon to terminal profile"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Copy transparent 32pxx32px PNG images to:")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%\\packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\RoamingState")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This path can be accessed via ",(0,l.kt)("inlineCode",{parentName:"p"},"ms-appdata:///roaming"),".")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Goto Windows Terminal -> Settings")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Add "icon" property under desired profile with value ',(0,l.kt)("inlineCode",{parentName:"p"},"ms-appdata:///roaming/image-name.png"),"."))))}m.isMDXComponent=!0}}]);