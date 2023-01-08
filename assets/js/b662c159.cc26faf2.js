"use strict";(self.webpackChunk_rashedmakkouk_dev_toolbox=self.webpackChunk_rashedmakkouk_dev_toolbox||[]).push([[1586],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],u={title:"Setup Kubernetes",sidebar_label:"Setup Kubernetes"},i=void 0,s={unversionedId:"how-to/kubernetes/setup-kubernetes",id:"how-to/kubernetes/setup-kubernetes",title:"Setup Kubernetes",description:"Getting Started",source:"@site/content/how-to/kubernetes/setup-kubernetes.md",sourceDirName:"how-to/kubernetes",slug:"/how-to/kubernetes/setup-kubernetes",permalink:"/dev-toolbox/how-to/kubernetes/setup-kubernetes",draft:!1,editUrl:"https://github.com/rashedmakkouk/dev-toolbox/edit/main/content/how-to/kubernetes/setup-kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Rashed Makkouk",lastUpdatedAt:1673188359,formattedLastUpdatedAt:"1/8/2023",frontMatter:{title:"Setup Kubernetes",sidebar_label:"Setup Kubernetes"},sidebar:"sidebar",previous:{title:"Setup Ingress Nginx",permalink:"/dev-toolbox/how-to/kubernetes/setup-ingress-nginx"},next:{title:"Linux",permalink:"/dev-toolbox/how-to/linux/"}},p={},c=[{value:"Drivers",id:"drivers",level:2},{value:"Hyper-V",id:"hyper-v",level:3},{value:"Cluster",id:"cluster",level:2},{value:"Runtime configuration",id:"runtime-configuration",level:3},{value:"Manage instance",id:"manage-instance",level:3},{value:"kubectl",id:"kubectl",level:2},{value:"Retrieve pod deployment auto-generated status data",id:"retrieve-pod-deployment-auto-generated-status-data",level:3},{value:"Manage components",id:"manage-components",level:3},{value:"Manage configuration files",id:"manage-configuration-files",level:3},{value:"Manage deployments",id:"manage-deployments",level:3},{value:"Setup Addons",id:"setup-addons",level:2},{value:"Setup Ingress Nginx",id:"setup-ingress-nginx",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup"},"Getting Started"))),(0,l.kt)("h2",{id:"drivers"},"Drivers"),(0,l.kt)("h3",{id:"hyper-v"},"Hyper-V"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enable Microsoft Hyper-V:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/create-a-virtual-switch-for-hyper-v-virtual-machines"},"Create Virtual Switch"))),(0,l.kt)("h2",{id:"cluster"},"Cluster"),(0,l.kt)("h3",{id:"runtime-configuration"},"Runtime configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl version\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"options")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"--hyperv-virtual-switch=<external-switch-name>\n--driver=hyperv|docker|virtualbox\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"container-runtime")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"minikube config set container-runtime=docker|containerd|cri-o\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"driver")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"minikube config set driver hyperv|docker|virtualbox\n")),(0,l.kt)("h3",{id:"manage-instance"},"Manage instance"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"commands")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"minikube start\nminikube stop\nminikube delete\n\nkubectl cluster-info\nminikube dashboard\n")),(0,l.kt)("h2",{id:"kubectl"},"kubectl"),(0,l.kt)("h3",{id:"retrieve-pod-deployment-auto-generated-status-data"},"Retrieve pod deployment auto-generated status data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl get deployment <service-name> -o yaml > service-deployment-etcd.yaml\n")),(0,l.kt)("h3",{id:"manage-components"},"Manage components"),(0,l.kt)("p",null,"Namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl create namespace <name>\nkubectl delete namespace <name>\n")),(0,l.kt)("p",null,"All:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl get all -n <namespace>\nkubectl get po -A\nkubectl get all\nkubectl get pods --output wide\nkubectl get pods --watch\nkubectl get pods --show-labels\nkubectl get service\nkubectl get rs\n")),(0,l.kt)("h3",{id:"manage-configuration-files"},"Manage configuration files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl apply -f <name>.yaml\nkubectl delete -f <name>.yaml\n")),(0,l.kt)("p",null,"Apply all configuration files in a directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl apply $(ls pattern*.yaml | awk ' { print \" -f \" $1 } ')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl delete services <name> <another-name>\nkubectl delete deployment <name> <another-name>\n")),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"base64")," values for use in ",(0,l.kt)("inlineCode",{parentName:"p"},"secret")," files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"echo -n 'value' | base64\n")),(0,l.kt)("h3",{id:"manage-deployments"},"Manage deployments"),(0,l.kt)("p",null,"Update a deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl edit deployment.v1.apps/name-deployment\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-terminal"},"kubectl get deployments\nkubectl rollout status deployment/name-deployment\n\nkubectl describe deployments\nkubectl describe po -n <namespace> <pod-name>\nkubectl describe pod <name>\n")),(0,l.kt)("h2",{id:"setup-addons"},"Setup Addons"),(0,l.kt)("h3",{id:"setup-ingress-nginx"},(0,l.kt)("a",{parentName:"h3",href:"/dev-toolbox/how-to/kubernetes/setup-ingress-nginx"},"Setup Ingress Nginx")))}m.isMDXComponent=!0}}]);