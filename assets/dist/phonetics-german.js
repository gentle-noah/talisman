webpackJsonp([4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(3),u=r(a),l=n(200),o=n(199),i=r(o),f=n(392),s=r(f),c=n(393),d=r(c);(0,l.render)(u["default"].createElement(i["default"],{algorithm:s["default"]}),document.getElementById("cologne-mount")),(0,l.render)(u["default"].createElement(i["default"],{algorithm:d["default"]}),document.getElementById("phonem-mount"))},68:function(e,t){"use strict";function n(e,t){for(var n=[],r=void 0;r=e.exec(t);)n.push(r);return e.lastIndex=0,n}function r(e){return e.slice().sort(function(e,t){return e-t})}function a(e){return"string"==typeof e?e.split(""):e}function u(e){for(var t="string"==typeof e,n=a(e),r=[n[0]],u=1,l=n.length;u<l;u++)n[u]!==n[u-1]&&r.push(n[u]);return t?r.join(""):r}function l(e,t){var n={};if(e=e.split(""),t=t.split(""),e.length!==t.length)throw Error("talisman/helpers#translation: given strings don't have the same length.");for(var r=0,a=e.length;r<a;r++)n[e[r]]=t[r];return n}function o(e){for(var t=Math.random(),n=e.length,r=0,a=0;a<n;a++)if(r+=e[a],t<=r)return a;return n-1}Object.defineProperty(t,"__esModule",{value:!0}),t.findall=n,t.numericSort=r,t.seq=a,t.squeeze=u,t.translation=l,t.weightedRandomIndex=o},151:function(e,t,n){"use strict";function r(e){return e=u(e),e&&e.replace(l,a).replace(s,"")}var a=n(210),u=n(67),l=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,o="\\u0300-\\u036f\\ufe20-\\ufe23",i="\\u20d0-\\u20f0",f="["+o+i+"]",s=RegExp(f,"g");e.exports=r},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),u=r(a),l=n(74),o=n(73),i=r(o),f=function(e){return e},s=function(e,t){return e===t},c=(0,l.compose)((0,l.withState)("wordOne","setWordOne",""),(0,l.withState)("wordTwo","setWordTwo","")),d=c(function(e){var t=e.algorithm,n=e.codeRenderer,r=void 0===n?f:n,a=e.comparator,l=void 0===a?s:a,o=e.wordOne,c=e.wordTwo,d=e.setWordOne,g=e.setWordTwo,h=o?t(o):null,p=c?t(c):null,m=h?r(h):"",E=p?r(p):"",v="·",A="default";return h&&p&&(l(h,p)?(v="=~",A="success"):(v="!~",A="error")),u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement(i["default"],{placeholder:"Word 1",value:o,onChange:function(e){return d(e.target.value)},status:A})),u["default"].createElement("td",{style:{width:"15%",textAlign:"center"}},u["default"].createElement("strong",null,v)),u["default"].createElement("td",null,u["default"].createElement(i["default"],{placeholder:"Word 2",value:c,onChange:function(e){return g(e.target.value)},status:A}))),u["default"].createElement("tr",null,u["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},m," "),u["default"].createElement("td",null),u["default"].createElement("td",{style:{fontSize:"1.3em",textAlign:"center"}},E," "))))});t["default"]=d},210:function(e,t){"use strict";function n(e){return r[e]}var r={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss"};e.exports=n},392:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){return e.replace(/Ä/g,"A").replace(/Ö/g,"O").replace(/Ü/g,"U").replace(/ß/g,"SS").replace(/PH/g,"F")}function u(e){if("string"!=typeof e)throw Error("talisman/phonetics/german/cologne: the given name is not a string.");e=(0,i["default"])(a(e.toUpperCase())).replace(/[^A-Z]/g,"");for(var t=[],n=0,r=e.length;n<r;n++){var u=e[n],o=f[u];if(void 0!==o)t.push(o);else if("D"===u||"T"===u)t.push(s.has(e[n+1])?8:2);else if("C"===u){var p=e[n-1],m=e[n+1];!p&&c.has(m)||d.has(m)&&!g.has(p)?t.push(4):t.push(8)}else"X"===u&&t.push(h.has(e[n-1])?8:48)}return t=(0,l.squeeze)(t).filter(function(e,t){return!t||e}),t.join("")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var l=n(68),o=n(151),i=r(o),f={H:null,A:0,E:0,I:0,O:0,U:0,J:0,Y:0,B:1,P:1,F:3,V:3,W:3,G:4,K:4,Q:4,L:5,M:6,N:6,R:7,S:8,Z:8},s=new Set(["C","S","Z"]),c=new Set(["A","H","K","L","O","Q","R","U","X"]),d=new Set(["A","H","K","O","Q","U","X"]),g=new Set(["S","Z"]),h=new Set(["C","Q","K"])},393:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){if("string"!=typeof e)throw Error("talisman/phonetics/german/phonem: the given name is not a string.");for(var t=e.toUpperCase(),n=0,a=l.length;n<a;n++){var f;t=(f=t).replace.apply(f,r(l[n]))}for(var s="",c=0,d=t.length;c<d;c++)s+=o[t[c]]||t[c];s=(0,u.squeeze)(s),t="";for(var g=0,h=s.length;g<h;g++)i.has(s[g])&&(t+=s[g]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var u=n(68),l=[[/(?:SC|SZ|CZ|TZ|TS)/g,"C"],[/KS/g,"X"],[/(?:PF|PH)/g,"V"],[/QU/g,"KW"],[/UE/g,"Y"],[/AE/g,"E"],[/OE/g,"Ö"],[/E[IY]/g,"AY"],[/EU/g,"OY"],[/AU/g,"A§"],[/OU/g,"§"]],o=(0,u.translation)("ZKGQÇÑßFWPTÁÀÂÃÅÄÆÉÈÊËIJÌÍÎÏÜÝ§ÚÙÛÔÒÓÕØ","CCCCCNSVVBDAAAAAEEEEEEYYYYYYYYUUUUOOOOÖ"),i=new Set("ABCDLMNORSUVWXYÖ")}});