!function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&d.push(l[a][0]),l[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(i&&i(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==l[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},l={0:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var i=s;o.push([7,1]),n()}({14:function(e,t,n){"use strict";var r=n(5),l=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const[e,t]=(0,o.useState)([0,0]),[n,r]=(0,o.useState)(!1),[l,p]=(0,o.useState)([[]]),[y,m]=(0,o.useState)(0),[v,b]=(0,o.useState)(0),[h,g]=(0,o.useState)(0);return(0,o.useEffect)(()=>{if(!n){r(!0);for(let e=0;e<u[0];e++){l.hasOwnProperty(e)||(l[e]=[]);for(let t=0;t<u[1];t++)l[e][t]=0!==e||0!==t?[0,1,2][(0,a.default)(0,2)]:0}p([...l])}},[l]),document.onkeypress=n=>{const r=n.code;"KeyS"===r?(m(0),e[0]!==u[0]-1&&d(l[e[0]+1][e[1]])&&e[0]++):"KeyD"===r?(m(1),e[1]!==u[1]-1&&d(l[e[0]][e[1]+1])&&e[1]++):"KeyW"===r?(m(2),0!==e[0]&&d(l[e[0]-1][e[1]])&&e[0]--):"KeyA"===r?(m(3),0!==e[1]&&d(l[e[0]][e[1]-1])&&e[1]--):"Space"===r&&(0===y&&e[0]!==u[0]-1&&0!==l[e[0]+1][e[1]]?(1===l[e[0]+1][e[1]]?b(v+1):2===l[e[0]+1][e[1]]&&g(h+1),l[e[0]+1][e[1]]=0):1===y&&e[1]!==u[1]-1&&0!==l[e[0]][e[1]+1]?(1===l[e[0]][e[1]+1]?b(v+1):2===l[e[0]][e[1]+1]&&g(h+1),l[e[0]][e[1]+1]=0):2===y&&0!==e[0]&&0!==l[e[0]-1][e[1]]?(1===l[e[0]-1][e[1]]?b(v+1):2===l[e[0]-1][e[1]]&&g(h+1),l[e[0]-1][e[1]]=0):3===y&&0!==e[1]&&0!==l[e[0]][e[1]-1]&&(1===l[e[0]][e[1]-1]?b(v+1):2===l[e[0]][e[1]-1]&&g(h+1),l[e[0]][e[1]-1]=0),p([...l])),t([...e])},o.createElement("div",{style:{display:"table"}},o.createElement("div",{style:{display:"table-cell"}},o.createElement("div",{className:"noselect",style:{display:"table-cell"}},l.map((t,n)=>o.createElement("div",{key:n,style:{display:"table"}},t.map((t,r)=>{const l=function(e){switch(e){case 0:return s.faAlignJustify;case 1:return s.faTree;case 2:return s.faIcicles}}(t);return o.createElement("div",{key:r,style:{display:"table-cell",width:"17px"}},e[0]===n&&e[1]===r?o.createElement(c.FontAwesomeIcon,{icon:i(y),color:"red"}):o.createElement(c.FontAwesomeIcon,{transform:{rotate:f(l)?180:0},icon:l}))})))),o.createElement("div",{style:{display:"table",marginTop:"15px"}},o.createElement("b",null,"Move"),": WASD; ",o.createElement("b",null,"Mine"),": Space"),o.createElement("div",{style:{display:"table",marginTop:"15px"}},"You: ",o.createElement(c.FontAwesomeIcon,{icon:i(y)}))),o.createElement("div",{style:{display:"table-cell",paddingLeft:"25px"}},o.createElement("div",{style:{display:"table"}},o.createElement("div",{style:{display:"table-cell"}},"tree: ",v)),o.createElement("div",{style:{display:"table"}},o.createElement("div",{style:{display:"table-cell"}},"stone: ",h))))};var o=l(n(1)),a=r(n(15)),c=n(16),s=n(22);const u=[25,25];function i(e){switch(e){case 0:return s.faAngleDown;case 1:return s.faAngleRight;case 2:return s.faAngleUp;case 3:return s.faAngleLeft}}function f(e){return e===s.faIcicles}function d(e){return 1!==e&&2!==e}},15:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=(e,t)=>{void 0===t&&(t=e,e=0);const n=e-.5+Math.random()*(t-e+1);return Math.round(n)}},23:function(e,t,n){var r=n(24),l=n(25);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[e.i,l,""]]);var o={insert:"head",singleton:!1};r(l,o);e.exports=l.locals||{}},25:function(e,t,n){(t=n(26)(!1)).push([e.i,".noselect {\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none; /* Non-prefixed version, currently\n                                  supported by Chrome, Edge, Opera and Firefox */\n}\n\nhtml {\n    background-color: #F8F8FF;\n}\n",""]),e.exports=t},7:function(e,t,n){"use strict";var r=n(4),l=n(5),o=l(n(1)),a=r(n(10)),c=l(n(14));n(23),a.render(o.default.createElement(c.default,null),document.getElementById("root"))}});