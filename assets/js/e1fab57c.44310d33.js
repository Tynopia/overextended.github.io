"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[847],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,b=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7422:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(5443),o=r(3010),i=(r(9496),r(9613)),l=["components"],c={},a=void 0,s={unversionedId:"ox_lib/GetClosestVehicle/Client",id:"ox_lib/GetClosestVehicle/Client",title:"Client",description:"lib.getClosestVehicle",source:"@site/docs/ox_lib/GetClosestVehicle/Client.md",sourceDirName:"ox_lib/GetClosestVehicle",slug:"/ox_lib/GetClosestVehicle/Client",permalink:"/docs/ox_lib/GetClosestVehicle/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/GetClosestVehicle/Client.md",tags:[],version:"current",lastUpdatedAt:1661121231,formattedLastUpdatedAt:"8/21/2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/GetClosestPlayer/Client"},next:{title:"Client",permalink:"/docs/ox_lib/GetNearbyPlayers/Client"}},u={},p=[{value:"lib.getClosestVehicle",id:"libgetclosestvehicle",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"libgetclosestvehicle"},"lib.getClosestVehicle"),(0,i.kt)("p",null,"Get the id and coords of the closest vehicle to a set of coordinates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"---@param coords vector3 The coords to check from.\n---@param maxDistance number The max distance to check.\n---@param includePlayerVehicle boolean Whether or not to include the player's current vehicle.\n---@return number? vehicle\n---@return vector3? vehicleCoords\nfunction lib.getClosestVehicle(coords, maxDistance, includePlayerVehicle) end\n")))}d.isMDXComponent=!0}}]);