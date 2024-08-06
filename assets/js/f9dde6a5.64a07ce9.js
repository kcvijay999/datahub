"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[25083],{79583:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>y});a(96540);var n=a(15680),r=a(53720),s=a(5400);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function u(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const l={title:"Data Contracts",slug:"/api/tutorials/data-contracts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md"},c="Data Contracts",p={unversionedId:"docs/api/tutorials/data-contracts",id:"docs/api/tutorials/data-contracts",title:"Data Contracts",description:"This guide specifically covers how to use the Data Contract APIs with DataHub Cloud.",source:"@site/genDocs/docs/api/tutorials/data-contracts.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/data-contracts",permalink:"/docs/api/tutorials/data-contracts",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md",tags:[],version:"current",frontMatter:{title:"Data Contracts",slug:"/api/tutorials/data-contracts",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/data-contracts.md"},sidebar:"overviewSidebar",previous:{title:"Operations",permalink:"/docs/api/tutorials/operations"},next:{title:"Domains",permalink:"/docs/api/tutorials/domains"}},d={},y=[{value:"Why Would You Use Data Contract APIs?",id:"why-would-you-use-data-contract-apis",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Privileges Required",id:"privileges-required",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Create &amp; Update Data Contract",id:"create--update-data-contract",level:2},{value:"Check Contract Status",id:"check-contract-status",level:2},{value:"Check Contract Status for Table",id:"check-contract-status-for-table",level:3}],h=(g="FeatureAvailability",function(t){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)});var g;const m={toc:y},f="wrapper";function b(t){var{components:e}=t,a=u(t,["components"]);return(0,n.yg)(f,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){o(t,e,a[e])}))}return t}({},m,a),{components:e,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"data-contracts"},"Data Contracts"),(0,n.yg)(h,{saasOnly:!0,mdxType:"FeatureAvailability"}),(0,n.yg)("p",null,"This guide specifically covers how to use the Data Contract APIs with ",(0,n.yg)("strong",{parentName:"p"},"DataHub Cloud"),"."),(0,n.yg)("h2",{id:"why-would-you-use-data-contract-apis"},"Why Would You Use Data Contract APIs?"),(0,n.yg)("p",null,"The Assertions APIs allow you to create, update, and evaluate Data Contracts programmatically. This is particularly\nuseful to automate the monitoring of data quality and schema compliance for your data."),(0,n.yg)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,n.yg)("p",null,"This guide will show you how to create, update, and check the status of aData Contract."),(0,n.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.yg)("h3",{id:"privileges-required"},"Privileges Required"),(0,n.yg)("p",null,"The actor making API calls must have the ",(0,n.yg)("inlineCode",{parentName:"p"},"Edit Data Contract")," privileges for the Tables at hand."),(0,n.yg)("h3",{id:"assertions"},"Assertions"),(0,n.yg)("p",null,"Before creating a Data Contract, you should have already created the Assertions that you want to associate with the Data Contract.\nCheck out the ",(0,n.yg)("a",{parentName:"p",href:"/docs/api/tutorials/assertions"},"Assertions")," guide for details on how to create DataHub Assertions."),(0,n.yg)("h2",{id:"create--update-data-contract"},"Create & Update Data Contract"),(0,n.yg)("p",null,'You can create a new Data Contract, which is simply bundle of "important" assertions, using the following APIs.'),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(s.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"To create or update a Data Contract, simply use the ",(0,n.yg)("inlineCode",{parentName:"p"},"upsertDataContract")," GraphQL Mutation. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-graphql"},'mutation upsertDataContract {\n    upsertDataContract(\n      input: {\n        entityUrn: "urn:li:dataset:(urn:li:dataPlatform:snowflake,purchases,PROD)", # Table to Create Contract for \n        freshness: [\n            {\n                assertionUrn: "urn:li:assertion:your-freshness-assertion-id",\n            }\n        ],\n        schema: [\n            {\n                assertionUrn: "urn:li:assertion:your-schema-assertion-id",\n            }\n        ],\n        dataQuality: [\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-1",\n            },\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-2",\n            }\n        ]\n      }) {\n        urn\n      }\n  )\n}\n')),(0,n.yg)("p",null,"This API will return a unique identifier (URN) for the Data Contract if you were successful:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "upsertDataContract": {\n      "urn": "urn:li:dataContract:your-new-contract-id"\n    }\n  },\n  "extensions": {}\n}\n')),(0,n.yg)("p",null,"If you want to update an existing Data Contract, you can use the same API, but also passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"urn")," parameter in the\n",(0,n.yg)("inlineCode",{parentName:"p"},"upsertDataContract")," mutation."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-graphql"},'mutation upsertDataContract {\n    upsertDataContract(\n      urn: "urn:li:dataContract:your-existing-contract-id",\n      input: {\n        freshness: [\n            {\n                assertionUrn: "urn:li:assertion:your-freshness-assertion-id",\n            }\n        ],\n        schema: [\n            {\n                assertionUrn: "urn:li:assertion:your-schema-assertion-id",\n            }\n        ],\n        dataQuality: [\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-1",\n            },\n            {\n                assertionUrn: "urn:li:assertion:your-column-assertion-id-2",\n            }\n        ]\n      }) {\n        urn\n      }\n  )\n}\n')))),(0,n.yg)("h2",{id:"check-contract-status"},"Check Contract Status"),(0,n.yg)("p",null,"You can use the following APIs to check whether a Data Contract is passing or failing, which is determined\nby the last status of the assertions associated with the contract."),(0,n.yg)(r.A,{mdxType:"Tabs"},(0,n.yg)(s.A,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,n.yg)("h3",{id:"check-contract-status-for-table"},"Check Contract Status for Table"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-graphql"},'query getTableContractStatus {\n    dataset(urn: "urn:li:dataset(urn:li:dataPlatform:snowflake,purchases,PROD") {\n        contract {\n           result {\n              type # Passing or Failing.\n              assertionResults { # Results of each contract assertion. \n                  assertion {\n                     urn\n                  }\n                  result {\n                      type\n                      nativeResults {\n                          key\n                          value\n                      }\n                  }\n              }\n           }\n        }\n    }\n}\n')),(0,n.yg)("p",null,"You can also ",(0,n.yg)("em",{parentName:"p"},"force refresh")," all of the Contract Assertions by evaluating them on-demand by providing the ",(0,n.yg)("inlineCode",{parentName:"p"},"refresh")," argument\nin your query. "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-graphql"},'query getTableContractStatus {\n    dataset(urn: "urn:li:dataset(urn:li:dataPlatform:snowflake,purchases,PROD") {\n        contract(refresh: true) {\n           ... same\n        }\n    }\n}\n')),(0,n.yg)("p",null,"This will run any native Acryl assertions comprising the Data Contract. Be careful! This can take a while depending on how many native assertions are part of the contract."),(0,n.yg)("p",null,"If you're successful, you'll get the latest status for the Table Contract: "),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dataset": {\n       "contract": {\n           "result": {\n              "type": "PASSING",\n              "assertionResults": [\n                  {\n                      "assertion": {\n                         "urn": "urn:li:assertion:your-freshness-assertion-id"\n                      },\n                      "result": {\n                          "type": "SUCCESS",\n                          "nativeResults": [\n                              {\n                                  "key": "Value",\n                                  "value": "1382"\n                              }\n                          ]\n                      }\n                  },\n                  {\n                     "assertion": {\n                        "urn": "urn:li:assertion:your-volume-assertion-id"\n                     },\n                      "result": {\n                          "type": "SUCCESS",\n                          "nativeResults": [\n                              {\n                                  "key": "Value",\n                                  "value": "12323"\n                              }\n                          ]\n                      }\n                  }\n              ]\n           }\n        }\n    }\n  },\n  "extensions": {}\n}\n')))))}b.isMDXComponent=!0}}]);