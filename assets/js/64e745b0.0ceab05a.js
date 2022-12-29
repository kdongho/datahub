"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Classification",slug:"/metadata-ingestion/docs/dev_guides/classification",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md"},i="Classification",o={unversionedId:"metadata-ingestion/docs/dev_guides/classification",id:"metadata-ingestion/docs/dev_guides/classification",title:"Classification",description:"The classification feature enables sources to be configured to automatically predict info types for columns and use them as glossary terms. This is an explicit opt-in feature and is not enabled by default.",source:"@site/genDocs/metadata-ingestion/docs/dev_guides/classification.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/classification",permalink:"/docs/metadata-ingestion/docs/dev_guides/classification",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md",tags:[],version:"current",frontMatter:{title:"Classification",slug:"/metadata-ingestion/docs/dev_guides/classification",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/classification.md"},sidebar:"overviewSidebar",previous:{title:"Stateful Ingestion",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful"},next:{title:"Adding Stateful Ingestion to a Source",permalink:"/docs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source"}},d={},s=[{value:"Config details",id:"config-details",level:2},{value:"DataHub Classifier",id:"datahub-classifier",level:2},{value:"Config Details",id:"config-details-1",level:3},{value:"Supported sources",id:"supported-sources",level:3},{value:"Example",id:"example",level:4},{value:"Example with Advanced Configuration: Specifying custom info_types_config",id:"example-with-advanced-configuration-specifying-custom-info_types_config",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classification"},"Classification"),(0,r.kt)("p",null,"The classification feature enables sources to be configured to automatically predict info types for columns and use them as glossary terms. This is an explicit opt-in feature and is not enabled by default."),(0,r.kt)("h2",{id:"config-details"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enabled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether classification should be used to auto-detect glossary terms"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_type_to_term"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional mapping to provide glossary term identifier for info type."),(0,r.kt)("td",{parentName:"tr",align:null},"By default, info type is used as glossary term identifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classifiers"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of object"),(0,r.kt)("td",{parentName:"tr",align:null},"Classifiers to use to auto-detect glossary terms. If more than one classifier, infotype predictions from the classifier defined later in sequence take precedance."),(0,r.kt)("td",{parentName:"tr",align:null},"[{'type': 'datahub', 'config': None}]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"Regex patterns to filter tables for classification. This is used in combination with other patterns in parent config. Specify regex to match the entire table name in ",(0,r.kt)("inlineCode",{parentName:"td"},"database.schema.table")," format. e.g. to match all tables starting with customer in Customer database and public schema, use the regex 'Customer.public.customer.*'"),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_pattern"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null},"Regex patterns to filter columns for classification. This is used in combination with other patterns in parent config. Specify regex to match the column name in ",(0,r.kt)("inlineCode",{parentName:"td"},"database.schema.table.column")," format."),(0,r.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_pattern.allow"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to include in ingestion"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_pattern.deny"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns to exclude from ingestion."),(0,r.kt)("td",{parentName:"tr",align:null},"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"column_pattern.ignoreCase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"datahub-classifier"},"DataHub Classifier"),(0,r.kt)("p",null,"DataHub Classifier is the default classifier implementation, which uses ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/acryl-datahub-classify/"},"acryl-datahub-classify")," library to predict info types."),(0,r.kt)("h3",{id:"config-details-1"},"Config Details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"confidence_level_threshold"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"0.6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"list","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of infotypes to be predicted. By default, all supported infotypes are considered. If specified. this should be subset of ","['Email_Address', 'Gender', 'Credit_Debit_Card_Number', 'Phone_Number', 'Street_Address', 'Full_Name', 'Age', 'IBAN', 'US_Social_Security_Number', 'Vehicle_Identification_Number', 'IP_Address_v4', 'IP_Address_v6', 'US_Driving_License_Number', 'Swift_Code']"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration details for infotypes"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str, InfoTypeConfig]"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/acryldata/datahub-classify/blob/main/datahub-classify/src/datahub_classify/reference_input.py"},"reference_input.py")," for default configuration.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".prediction_factors_and_weights"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2753 (required if info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key")," is set)"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict","[str,number]"),(0,r.kt)("td",{parentName:"tr",align:null},"Factors and their weights to consider when predicting info types"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"NameFactorConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".name.regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns the column name follows for the info type"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".description"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"DescriptionFactorConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".description.regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns the column description follows for the info type"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".datatype"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"DataTypeFactorConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".datatype.type"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of data types for the info type"),(0,r.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".values"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"ValuesFactorConfig (see below for fields)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".values.prediction_type"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2753 (required if info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".values is set)"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".values.regex"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns the column value follows for the info type"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info_types_config.",(0,r.kt)("inlineCode",{parentName:"td"},"key"),".values.library"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,r.kt)("td",{parentName:"tr",align:null},"Library used for prediction"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h3",{id:"supported-sources"},"Supported sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"snowflake")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    env: PROD\n    # Coordinates\n    account_id: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\n\n    classification:\n      enabled: True\n      classifiers:\n        - type: datahub          \n')),(0,r.kt)("h4",{id:"example-with-advanced-configuration-specifying-custom-info_types_config"},"Example with Advanced Configuration: Specifying custom info_types_config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: snowflake\n  config:\n    env: PROD\n    # Coordinates\n    account_id: account_name\n    warehouse: "COMPUTE_WH"\n\n    # Credentials\n    username: user\n    password: pass\n    role: "sysadmin"\n\n    # Options\n    top_n_queries: 10\n    email_domain: mycompany.com\n\n    classification:\n      enabled: True\n      info_type_to_term:\n        Email_Address: "Email"\n      classifiers:\n        - type: datahub          \n          config:\n            confidence_level_threshold: 0.7\n            info_types_config:\n              Email_Address:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*mail.*id.*$"\n                    - "^.*id.*mail.*$"\n                    - "^.*mail.*add.*$"\n                    - "^.*add.*mail.*$"\n                    - email\n                    - mail\n                description:\n                  regex:\n                    - "^.*mail.*id.*$"\n                    - "^.*mail.*add.*$"\n                    - email\n                    - mail\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: regex\n                  regex:\n                    - "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}"\n                  library: []\n              Gender:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*gender.*$"\n                    - "^.*sex.*$"\n                    - gender\n                    - sex\n                description:\n                  regex:\n                    - "^.*gender.*$"\n                    - "^.*sex.*$"\n                    - gender\n                    - sex\n                datatype:\n                  type:\n                    - int\n                    - str\n                values:\n                  prediction_type: regex\n                  regex:\n                    - male\n                    - female\n                    - man\n                    - woman\n                    - m\n                    - f\n                    - w\n                    - men\n                    - women\n                  library: []\n              Credit_Debit_Card_Number:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - "^.*card.*number.*$"\n                    - "^.*number.*card.*$"\n                    - "^.*credit.*card.*$"\n                    - "^.*debit.*card.*$"\n                description:\n                  regex:\n                    - "^.*card.*number.*$"\n                    - "^.*number.*card.*$"\n                    - "^.*credit.*card.*$"\n                    - "^.*debit.*card.*$"\n                datatype:\n                  type:\n                    - str\n                    - int\n                values:\n                  prediction_type: regex\n                  regex:\n                    - "^4[0-9]{12}(?:[0-9]{3})?$"\n                    - "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$"\n                    - "^3[47][0-9]{13}$"\n                    - "^3(?:0[0-5]|[68][0-9])[0-9]{11}$"\n                    - "^6(?:011|5[0-9]{2})[0-9]{12}$"\n                    - "^(?:2131|1800|35\\\\d{3})\\\\d{11}$"\n                    - "^(6541|6556)[0-9]{12}$"\n                    - "^389[0-9]{11}$"\n                    - "^63[7-9][0-9]{13}$"\n                    - "^9[0-9]{15}$"\n                    - "^(6304|6706|6709|6771)[0-9]{12,15}$"\n                    - "^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$"\n                    - "^(62[0-9]{14,17})$"\n                    - "^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$"\n                    - "^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$"\n                    - "^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$"\n                  library: []\n              Phone_Number:\n                prediction_factors_and_weights:\n                  name: 0.4\n                  description: 0\n                  datatype: 0\n                  values: 0.6\n                name:\n                  regex:\n                    - ".*phone.*(num|no).*"\n                    - ".*(num|no).*phone.*"\n                    - ".*[^a-z]+ph[^a-z]+.*(num|no).*"\n                    - ".*(num|no).*[^a-z]+ph[^a-z]+.*"\n                    - ".*mobile.*(num|no).*"\n                    - ".*(num|no).*mobile.*"\n                    - ".*telephone.*(num|no).*"\n                    - ".*(num|no).*telephone.*"\n                    - ".*cell.*(num|no).*"\n                    - ".*(num|no).*cell.*"\n                    - ".*contact.*(num|no).*"\n                    - ".*(num|no).*contact.*"\n                    - ".*landline.*(num|no).*"\n                    - ".*(num|no).*landline.*"\n                    - ".*fax.*(num|no).*"\n                    - ".*(num|no).*fax.*"\n                    - phone\n                    - telephone\n                    - landline\n                    - mobile\n                    - tel\n                    - fax\n                    - cell\n                    - contact\n                description:\n                  regex:\n                    - ".*phone.*(num|no).*"\n                    - ".*(num|no).*phone.*"\n                    - ".*[^a-z]+ph[^a-z]+.*(num|no).*"\n                    - ".*(num|no).*[^a-z]+ph[^a-z]+.*"\n                    - ".*mobile.*(num|no).*"\n                    - ".*(num|no).*mobile.*"\n                    - ".*telephone.*(num|no).*"\n                    - ".*(num|no).*telephone.*"\n                    - ".*cell.*(num|no).*"\n                    - ".*(num|no).*cell.*"\n                    - ".*contact.*(num|no).*"\n                    - ".*(num|no).*contact.*"\n                    - ".*landline.*(num|no).*"\n                    - ".*(num|no).*landline.*"\n                    - ".*fax.*(num|no).*"\n                    - ".*(num|no).*fax.*"\n                    - phone\n                    - telephone\n                    - landline\n                    - mobile\n                    - tel\n                    - fax\n                    - cell\n                    - contact\n                datatype:\n                  type:\n                    - int\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - phonenumbers\n              Street_Address:\n                prediction_factors_and_weights:\n                  name: 0.5\n                  description: 0\n                  datatype: 0\n                  values: 0.5\n                name:\n                  regex:\n                    - ".*street.*add.*"\n                    - ".*add.*street.*"\n                    - ".*full.*add.*"\n                    - ".*add.*full.*"\n                    - ".*mail.*add.*"\n                    - ".*add.*mail.*"\n                    - add[^a-z]+\n                    - address\n                    - street\n                description:\n                  regex:\n                    - ".*street.*add.*"\n                    - ".*add.*street.*"\n                    - ".*full.*add.*"\n                    - ".*add.*full.*"\n                    - ".*mail.*add.*"\n                    - ".*add.*mail.*"\n                    - add[^a-z]+\n                    - address\n                    - street\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - spacy\n              Full_name:\n                prediction_factors_and_weights:\n                  name: 0.3\n                  description: 0\n                  datatype: 0\n                  values: 0.7\n                name:\n                  regex:\n                    - ".*person.*name.*"\n                    - ".*name.*person.*"\n                    - ".*user.*name.*"\n                    - ".*name.*user.*"\n                    - ".*full.*name.*"\n                    - ".*name.*full.*"\n                    - fullname\n                    - name\n                    - person\n                    - user\n                description:\n                  regex:\n                    - ".*person.*name.*"\n                    - ".*name.*person.*"\n                    - ".*user.*name.*"\n                    - ".*name.*user.*"\n                    - ".*full.*name.*"\n                    - ".*name.*full.*"\n                    - fullname\n                    - name\n                    - person\n                    - user\n                datatype:\n                  type:\n                    - str\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - spacy\n              Age:\n                prediction_factors_and_weights:\n                  name: 0.65\n                  description: 0\n                  datatype: 0\n                  values: 0.35\n                name:\n                  regex:\n                    - age[^a-z]+.*\n                    - ".*[^a-z]+age"\n                    - ".*[^a-z]+age[^a-z]+.*"\n                    - age\n                description:\n                  regex:\n                    - age[^a-z]+.*\n                    - ".*[^a-z]+age"\n                    - ".*[^a-z]+age[^a-z]+.*"\n                    - age\n                datatype:\n                  type:\n                    - int\n                values:\n                  prediction_type: library\n                  regex: []\n                  library:\n                    - rule_based_logic\n\n')))}u.isMDXComponent=!0}}]);