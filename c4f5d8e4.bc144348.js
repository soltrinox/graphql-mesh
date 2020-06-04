(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{201:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),o=t.n(r),l=t(204),i=t.n(l),c=t(212),m=t(207),s=t(185),u=t.n(s),p=t(186),d=t.n(p),h=function(e){return o.a.createElement("button",Object(n.a)({},e,{className:i()(e.contained?d.a.buttonContained:d.a.button,e.className)}),e.children)},g=t(206),E=(t(24),t(20),t(19),t(51),t(187)),v=t.n(E),b={OpenAPI:{"JavaScript Wiki":"openapi-javascript-wiki","Location Weather":"openapi-location-weather",YouTrack:"openapi-youtrack",Stripe:"openapi-stripe",StackExchange:"openapi-stackexchange"},"JSON Schema":{"Fake API":"json-schema-example","Covid-19 Statistics":"json-schema-covid"},OData:{TripPin:"odata-trippin","Microsoft Graph":"odata-microsoft"},SOAP:{"Country Info":"soap-country-info"},MySQL:{Rfam:"mysql-rfam"},SQLite:{Chinook:"sqlite-chinook"}},y=function(){var e=Object(r.useState)("openapi-stripe"),a=e[0],t=e[1],n=Object(r.useState)(!0),l=n[0],i=n[1];return o.a.createElement("div",null,o.a.createElement("div",{className:v.a.picker},"Choose Live Example: ",o.a.createElement("select",{value:a,onChange:function(e){i(!0),t(e.target.value)}},Object.keys(b).map((function(e){return o.a.createElement("optgroup",{key:e,label:e},Object.keys(b[e]).map((function(a){return o.a.createElement("option",{key:a,label:a,value:b[e][a]},a)})))})))),o.a.createElement("div",{className:v.a.container},o.a.createElement("iframe",{src:"https://codesandbox.io/embed/github/Urigo/graphql-mesh/tree/master/examples/"+a+"?fontsize=14&hidenavigation=1&theme=dark&module=%2F.meshrc.yml",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},className:l?v.a.blur:"",title:a,allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin",onLoad:function(){return i(!1)}})))},f=[{title:o.a.createElement(o.a.Fragment,null,"GraphQL as a Query Language"),imageUrl:"img/GraphQL_Logo.svg",description:o.a.createElement(o.a.Fragment,null,"Use GraphQL as a query language to fetch data from your data-sources directly, without the need for a running gateway server, or any other bottleneck.")},{title:o.a.createElement(o.a.Fragment,null,"Any Data Source"),imageUrl:"img/mesh-example.png",description:o.a.createElement(o.a.Fragment,null,"With GraphQL Mesh, you can use GraphQL query language to fetch from (almost) any data source, without changing the source or modify it's code.")},{title:o.a.createElement(o.a.Fragment,null,"Open Source"),imageUrl:"img/open-source.svg",description:o.a.createElement(o.a.Fragment,null,"GraphQL Mesh is free and open-source, and been built with the community. You can contribute, extend and have your custom logic easily.")}];function w(e){var a=e.imageUrl,t=e.title,n=e.description,r=Object(m.a)(a);return o.a.createElement("div",{className:i()("col col--4",u.a.feature)},r&&o.a.createElement("div",{className:"text--center"},o.a.createElement("img",{className:u.a.featureImage,src:r,alt:t})),o.a.createElement("h3",null,t),o.a.createElement("p",null,n))}a.default=function(){var e=Object(r.useState)(!1),a=e[0],t=e[1];return o.a.createElement(c.a,{title:"GraphQL Mesh",description:""},o.a.createElement("header",{className:u.a.header},o.a.createElement("div",{className:u.a.bannerVideoContainer},o.a.createElement("video",{className:u.a.bannerVideo,width:"100%",height:"100%",playsInline:!0,autoPlay:!0,muted:!0,loop:!0},o.a.createElement("source",{src:"/video/medium_1200X345.webm",type:"video/webm"}),o.a.createElement("source",{src:"/video/medium_1200X345.mp4",type:"video/mp4"}))),o.a.createElement("img",{className:u.a.npmBadge,alt:"npm",src:"https://img.shields.io/npm/v/@graphql-mesh/runtime?color=%231BCBE2&label=stable&style=for-the-badge"}),o.a.createElement("div",{className:u.a.buttons},o.a.createElement(h,null,o.a.createElement("a",{href:"#",onClick:function(){return t(!0)}},"Try it out Live")),o.a.createElement(h,null,o.a.createElement(g.a,{to:"/docs/getting-started/introduction"},"View Docs")))),a&&o.a.createElement("div",{className:u.a.liveDemo},o.a.createElement("a",{id:"live-demo"}),o.a.createElement(y,null)),o.a.createElement("main",null,f&&f.length&&o.a.createElement("section",{className:u.a.features},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},f.map((function(e,a){return o.a.createElement(w,Object(n.a)({key:a},e))})))))))}}}]);