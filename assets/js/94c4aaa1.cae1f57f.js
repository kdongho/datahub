"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[692],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43826:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={id:"unions",title:"Unions",slug:"unions",sidebar_position:6},s=void 0,p={unversionedId:"graphql/unions",id:"graphql/unions",isDocsHomePage:!1,title:"Unions",description:"AnalyticsChart",source:"@site/genDocs/graphql/unions.md",sourceDirName:"graphql",slug:"/graphql/unions",permalink:"/docs/graphql/unions",editUrl:"https://github.com/datahub-project/datahub/blob/master/genDocs/graphql/unions.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"unions",title:"Unions",slug:"unions",sidebar_position:6},sidebar:"overviewSidebar",previous:{title:"Interfaces",permalink:"/docs/graphql/interfaces"},next:{title:"Enums",permalink:"/docs/graphql/enums"}},c=[{value:"AnalyticsChart",id:"analyticschart",children:[],level:2},{value:"HyperParameterValueType",id:"hyperparametervaluetype",children:[],level:2},{value:"OwnerType",id:"ownertype",children:[],level:2},{value:"PlatformSchema",id:"platformschema",children:[],level:2},{value:"ResultsType",id:"resultstype",children:[],level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"analyticschart"},"AnalyticsChart"),(0,o.kt)("p",null,"For consumption by UI only"),(0,o.kt)("p",{style:{marginBottom:"0.4em"}},(0,o.kt)("strong",null,"Possible types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#timeserieschart"},"TimeSeriesChart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#barchart"},"BarChart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#tablechart"},"TableChart"))),(0,o.kt)("h2",{id:"hyperparametervaluetype"},"HyperParameterValueType"),(0,o.kt)("p",{style:{marginBottom:"0.4em"}},(0,o.kt)("strong",null,"Possible types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#stringbox"},"StringBox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#intbox"},"IntBox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#floatbox"},"FloatBox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#booleanbox"},"BooleanBox"))),(0,o.kt)("h2",{id:"ownertype"},"OwnerType"),(0,o.kt)("p",null,"An owner of a Metadata Entity, either a user or group"),(0,o.kt)("p",{style:{marginBottom:"0.4em"}},(0,o.kt)("strong",null,"Possible types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#corpuser"},"CorpUser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#corpgroup"},"CorpGroup"))),(0,o.kt)("h2",{id:"platformschema"},"PlatformSchema"),(0,o.kt)("p",null,"A type of Schema, either a table schema or a key value schema"),(0,o.kt)("p",{style:{marginBottom:"0.4em"}},(0,o.kt)("strong",null,"Possible types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#tableschema"},"TableSchema")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#keyvalueschema"},"KeyValueSchema"))),(0,o.kt)("h2",{id:"resultstype"},"ResultsType"),(0,o.kt)("p",{style:{marginBottom:"0.4em"}},(0,o.kt)("strong",null,"Possible types")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/graphql/objects#stringbox"},"StringBox"))))}m.isMDXComponent=!0}}]);