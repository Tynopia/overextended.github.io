"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7519],{9613:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),d=l,k=b["".concat(o,".").concat(d)]||b[d]||p[d]||n;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},6247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var r=a(4250),l=(a(9496),a(9613));const n={},i=void 0,c={unversionedId:"ox_lib/Callback/Lua/Server",id:"ox_lib/Callback/Lua/Server",title:"Server",description:"Trigger Client Callback",source:"@site/docs/ox_lib/Callback/Lua/Server.md",sourceDirName:"ox_lib/Callback/Lua",slug:"/ox_lib/Callback/Lua/Server",permalink:"/docs/ox_lib/Callback/Lua/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Callback/Lua/Server.md",tags:[],version:"current",lastUpdatedAt:1681403328,formattedLastUpdatedAt:"Apr 13, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/Callback/Lua/Client"},next:{title:"Client",permalink:"/docs/ox_lib/DisableControls/Client"}},o={},u=[{value:"Trigger Client Callback",id:"trigger-client-callback",level:2},{value:"lib.callback",id:"libcallback",level:3},{value:"lib.callback.await",id:"libcallbackawait",level:3},{value:"Register Server Callback",id:"register-server-callback",level:2},{value:"lib.callback.register",id:"libcallbackregister",level:3}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"trigger-client-callback"},"Trigger Client Callback"),(0,l.kt)("h3",{id:"libcallback"},"lib.callback"),(0,l.kt)("p",null,"The response is handled in a separate coroutine."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback(name, source, cb, ...)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"source: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"cb: ",(0,l.kt)("inlineCode",{parentName:"li"},"function")),(0,l.kt)("li",{parentName:"ul"},"...: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback('ox:getNearbyVehicles', source, function(vehicles)\n    for i = 1, #vehicles do\n        DeleteEntity(entity)\n    end\nend, args.radius)\n")),(0,l.kt)("h3",{id:"libcallbackawait"},"lib.callback.await"),(0,l.kt)("p",null,"The current coroutine is yielded until a response is received."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await(name, source, ...)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"source: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"...: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local vehicles = lib.callback.await('ox:getNearbyVehicles', source, args.radius)\n\nfor i = 1, #vehicles do\n    DeleteEntity(entity)\nend\n")),(0,l.kt)("h2",{id:"register-server-callback"},"Register Server Callback"),(0,l.kt)("h3",{id:"libcallbackregister"},"lib.callback.register"),(0,l.kt)("p",null,"Register an event handler for responding to client requests."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register(name, cb)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"name: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"cb: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register('ox_inventory:getItemCount', function(source, item, metadata, target)\n    local inventory = target and Inventory(target) or Inventory(source)\n    return (inventory and Inventory.GetItem(inventory, item, metadata, true)) or 0\nend)\n")))}p.isMDXComponent=!0}}]);