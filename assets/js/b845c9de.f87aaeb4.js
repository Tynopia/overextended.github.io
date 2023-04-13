"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9830],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,y=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(4250),o=(t(9496),t(9613));const i={sidebar_position:2},a="Configuration",s={unversionedId:"ox_inventory/Getting Started/config",id:"ox_inventory/Getting Started/config",title:"Configuration",description:"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with exec.",source:"@site/docs/ox_inventory/Getting Started/config.md",sourceDirName:"ox_inventory/Getting Started",slug:"/ox_inventory/Getting Started/config",permalink:"/docs/ox_inventory/Getting Started/config",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Getting Started/config.md",tags:[],version:"current",lastUpdatedAt:1681403328,formattedLastUpdatedAt:"Apr 13, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"ox_inventory",previous:{title:"Common Issues",permalink:"/docs/ox_inventory/Getting Started/issues"},next:{title:"ESX",permalink:"/docs/ox_inventory/Getting Started/esx"}},c={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can add these settings directly to your 'server.cfg', or add them to a separate file (i.e. inventory.cfg) and call it with ",(0,o.kt)("inlineCode",{parentName:"p"},"exec"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Convars ",(0,o.kt)("strong",{parentName:"p"},"must")," be set before starting ox_inventory.")),(0,o.kt)("p",null,"The values below are ",(0,o.kt)("em",{parentName:"p"},"defaults")," and should not be explicitly set unless changing the value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'### Shared\n\n# Activate specific event handlers and functions (supported: ox, esx, qb, nd)\nsetr inventory:framework "esx"\n\n# Number of slots for player inventories\nsetr inventory:slots 50\n\n# Maximum carry capacity for players, in grams (frameworks may override this)\nsetr inventory:weight 30000\n\n# Integrated support for qtarget/ox_target stashes, shops, etc\n# Note: qtarget is deprecated, a future update may drop support (ox_target only, or gated features)\nsetr inventory:target false\n\n# Jobs with access to police armoury, evidence lockers, etc\nsetr inventory:police ["police", "sheriff"]\n\n### Client\n\n# The URL to load item images from\nsetr inventory:imagepath "nui://ox_inventory/web/images"\n\n# Weapons will reload after reaching 0 ammo\nsetr inventory:autoreload false\n\n# Blur the screen while accessing the inventory\nsetr inventory:screenblur true\n\n# Default hotkeys to access primary and secondary inventories, and hotbar\nsetr inventory:keys ["F2", "K", "TAB"]\n\n# Enable control action when inventory is open\nsetr inventory:enablekeys [249]\n\n# Weapons must be aimed before shooting\nsetr inventory:aimedfiring false\n\n# Show a list of all nearby players when giving items\nsetr inventory:giveplayerlist true\n\n# Toggle weapon draw/holster animations\nsetr inventory:weaponanims true\n\n# Toggle item notifications (add/remove)\nsetr inventory:itemnotify true\n\n# Disable drop markers and spawn a prop instead\nsetr inventory:dropprops true\n\n# Disarm the player if an unexpected weapon is in use (i.e. did not use the weapon item)\nsetr inventory:weaponmismatch true\n\n# Ignore weapon mismatch checks for the given weapon type (e.g. [\'WEAPON_SHOVEL\', \'WEAPON_HANDCUFFS\'])\nsetr inventory:ignoreweapons []\n\n\n### Server\n\n# Compare current version to latest release on GitHub\nset inventory:versioncheck true\n\n# Stashes will be wiped after remaining unchanged for the given time\nset inventory:clearstashes "6 MONTH"\n\n# Discord webhook url, used for imageurl metadata content moderation (image embeds)\nset inventory:webhook ""\n\n# Logging via ox_lib (0: Disable, 1: Standard, 2: Include AddItem/RemoveItem, and all shop purchases)\nset inventory:loglevel 1\n\n# Item prices fluctuate in shops\nset inventory:randomprices true\n\n# Loot will randomly generate inside unowned vehicles and dumpsters\nset inventory:randomloot true\n\n# Minimum job grade to remove items from evidence lockers\nset inventory:evidencegrade 2\n\n# Trim whitespace from vehicle plates when checking owned vehicles\nsetr inventory:trimplate true\n\n# Set the contents of randomly generated inventories\n# [item name, minimum, maximum, loot chance]\nset inventory:vehicleloot [\n    ["cola", 1, 1],\n    ["water", 1, 1],\n    ["garbage", 1, 2, 50],\n    ["panties", 1, 1, 5],\n    ["money", 1, 50],\n    ["money", 200, 400, 5],\n    ["bandage", 1, 1]\n]\n\nset inventory:dumpsterloot [\n    ["mustard", 1, 1],\n    ["garbage", 1, 3],\n    ["money", 1, 10],\n    ["burger", 1, 1]\n]\n')))}d.isMDXComponent=!0}}]);