"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,b=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(b,i(i({ref:t},d),{},{components:a})):r.createElement(b,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:31,title:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},i="DataHubSecret",c={unversionedId:"docs/generated/metamodel/entities/dataHubSecret",id:"docs/generated/metamodel/entities/dataHubSecret",title:"DataHubSecret",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubSecret.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubsecret",permalink:"/docs/generated/metamodel/entities/datahubsecret",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,title:"DataHubSecret",slug:"/generated/metamodel/entities/datahubsecret",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubSecret.md"},sidebar:"overviewSidebar",previous:{title:"DataHubIngestionSource",permalink:"/docs/generated/metamodel/entities/datahubingestionsource"},next:{title:"DataHubExecutionRequest",permalink:"/docs/generated/metamodel/entities/datahubexecutionrequest"}},l={},s=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubSecretValue",id:"datahubsecretvalue",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"datahubsecret"},"DataHubSecret"),(0,n.kt)("h2",{id:"aspects"},"Aspects"),(0,n.kt)("h3",{id:"datahubsecretvalue"},"dataHubSecretValue"),(0,n.kt)("p",null,"The value of a DataHub Secret"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Schema"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubSecretValue"\n  },\n  "name": "DataHubSecretValue",\n  "namespace": "com.linkedin.secret",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "The display name for the secret"\n    },\n    {\n      "type": "string",\n      "name": "value",\n      "doc": "The AES-encrypted value of the DataHub secret."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the secret"\n    }\n  ],\n  "doc": "The value of a DataHub Secret"\n}\n'))),(0,n.kt)("h2",{id:"relationships"},"Relationships"),(0,n.kt)("h2",{id:"global-metadata-model"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);