(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function initAnalytics(){function e(){m&&clearTimeout(m),m=setTimeout(t,l)}function t(){var e=$(window).height()+$(window).scrollTop(),t=$(document).height();if(!v&&e>h&&(o=(new Date).getTime(),i=Math.round((o-w)/1e3),T=i,g("send","event","Reading","PageStart","",i),v=!0),R&&!y){var l=R.getBoundingClientRect(),m=l.top+document.body.scrollTop,p=m+l.height;e>p?(c=(new Date).getTime(),s=Math.round((c-w)/1e3),T=s,g("send","event","Reading","ContentEnd","",s),n(),y=!0):!f&&e>m+.5*l.height&&(a=(new Date).getTime(),d=Math.round((a-w)/1e3),T=d,g("send","event","Reading","ContentMidway","",d),f=!0)}!M&&e>=t&&(u=(new Date).getTime(),r=Math.round((u-w)/1e3),T=r,g("send","event","Reading","PageEnd","",r),n(),M=!0)}function n(){var e;e=60>T?"Skim":"Thorough",g("set","dimension1",e)}var o,i,a,d,c,s,u,r,g,l=150,h=150,m=0,w=(new Date).getTime(),T=0,v=!1,f=!1,y=!1,M=!1;switch(document.location.hostname){case"localhost":case"127.0.0.1":case"0.0.0.0":g=function(){console.log(arguments)};break;default:g=window.ga}var R=document.querySelector(".post-content");R=R||document.querySelector(".content"),g("send","event","Reading","PageLoadedTime","",Math.round(w/1e3)),$(window).scroll(e)}module.exports={initAnalytics:initAnalytics};

},{}],2:[function(require,module,exports){
"use strict";var header=require("./header"),analytics=require("./analytics"),social=require("./social");jQuery(function(e){analytics.initAnalytics(),social.shareDynamic(),header.renderWordCloudCoverImage()});

},{"./analytics":1,"./header":3,"./social":5}],3:[function(require,module,exports){
"use strict";function renderWordCloudCoverImage(){function drawWordCloud(options){var canvas=document.getElementById("wordcloud");return canvas?(options=options||{list:[]},"string"==typeof options&&(options=eval("options="+options.trim())),canvas.addEventListener("wordclouddrawn",onWordCloudDrawn),canvas.addEventListener("wordcloudstart",onWordCloudStart),canvas.addEventListener("wordcloudstop",onWordCloudStop),canvas.addEventListener("wordcloudabort",onWordCloudAbort),void window.WordCloud(canvas,options)):void console.error("No canvas found")}function onWordCloudDrawn(o){}function onWordCloudStart(o){}function onWordCloudAbort(o){}function onWordCloudStop(o){var a=document.getElementById("wordcloud"),n=a.getContext("2d"),r=document.querySelector(".main-header");if(r&&n&&"function"==typeof n.createRadialGradient){var e=a.width,t=a.height,d=n.createRadialGradient(.5*e,.5*t,.1*t,.5*e,.5*t,.5*e);d.addColorStop(0,"rgba(240,0,0,0.5)"),d.addColorStop(.2,"rgba(240,0,0,0.4)"),d.addColorStop(.7,"rgba(240,0,0,0.1)"),d.addColorStop(1,"rgba(0,  0,0,0.3)"),n.fillStyle=d,n.fillRect(0,0,e,t);var i=a.toDataURL("image/png");r.style["background-image"]="url("+i+")"}}if(window.wordcloudConfig)if(window.WordCloud)if(window.WordCloud.isSupported){if(!window.wordcloudConfig.image){var canvas=document.getElementById("wordcloud");canvas.width=window.wordcloudConfig.canvasWidth,canvas.height=window.wordcloudConfig.canvasHeight;var width=canvas.width;drawWordCloud({gridSize:Math.round(8*width/1024),weightFactor:function(o){return 16*Math.pow(o,1.15)*width/1024},fontFamily:"Roboto, sans-serif",color:function(o,a){return"hsl("+(20*Math.random()+5).toFixed()+","+(20*Math.random()+(50-Math.pow(a,2))).toFixed()+"%,"+(20*Math.random()+(50-Math.pow(a,2))).toFixed()+"%)"},rotateRatio:.75,backgroundColor:"#481818",list:getWordList()})}}else console.error("Word cloud not supported");else console.error("No word cloud library");else console.error("No word cloud config")}function getWordList(){return[["Lah!",6],["Leh!",5],["Lor!",5],["Meh?",5],["walao eh",4],["huat ah",1],["bo pian",1],["stupiak",1],["blur like sotong",1],["referee kayu",1],["ah bo den",1],["arbuthen",2],["ok ah",1],["tekan",1],["hantam",1],["corright",1],["talk cock",3],["can or not",1],["buay tahan",3],["jia lat",1],["go where",1],["stylo milo",3],["alamak",2],["kanasai",1],["bo liao",1],["cockanathan",1],["steady steady",1],["bom pipi",1],["powderful",1],["rilak one korner",2],["chope",1],["hentak kaki",1],["langgar",1],["gabra",1],["kilat",1],["kaypoh",2],["anyhow whack",2],["spoil market",1],["chao keng",1],["siol ah",1],["got meh",1],["horlan liao",1],["habis lah",1],["kena hantam",1],["kena sai",1],["kena arrowed",1],["heng ah",1],["heck care lah",1],["guai lan",1],["kao pei kao bu",1],["pai seh",1],["kancheong spider",1],["lolek uncer",1],["gold chain uncer",1],["grandfather road",1],["kopitiam",1],["fly kite",2],["oso can",1],["cock eye",1],["angkat bola",1],["balik kampong",1],["kiasu",1],["kiasi",1],["referee kayu",1],["kelong",1],["saboh king",1],["wayang king",1],["paotoh king",1],["pangseh king",1],["pontang king",1],["drama queen",1],["cannot make it",1],["goondu",1],["confirm plus chop",2],["eskew me",2],["karang guni",1],["pakat pakat ah",1],["shag liao",1],["don’ch pray pray",1],["ya ya papaya",1],["song song gao Jurong",1],["huat ah!",2],["simi taiji",1],["neh neh pok",1],["itchy backside",1],["agaration",1],["sia la",1],["lepak",1],["yum seng!",1],["zhun zhun",1],["win liao lor",1],["cheem",1],["powderful siol",1],["I clap for you",1],["barang barang",1],["curry pok",1],["swee ah",1],["bo chup",2]]}module.exports={renderWordCloudCoverImage:renderWordCloudCoverImage,getWordList:getWordList};

},{}],4:[function(require,module,exports){
require("./wordcloud2.js"),require("./code.js");
},{"./code.js":2,"./wordcloud2.js":6}],5:[function(require,module,exports){
"use strict";function shareDynamic(){function e(e){var t=encodeURIComponent(e.input.value);e.twitter.href="https://twitter.com/share?text="+t+"&url="+o,e.facebook.href="https://www.facebook.com/sharer/sharer.php?u="+o}var t=document.querySelectorAll(".share-dynamic");if(t&&!(t.length<1))for(var o=encodeURIComponent(window.location.href),r=(encodeURIComponent("http://shirtlah.com/images/shirtlah-logo-300x300.png"),0);r<t.length;++r){var n=t[r],a=n.querySelector(".input"),i={input:a,twitter:n.querySelector(".twitter"),facebook:n.querySelector(".facebook")};e(i),a.addEventListener("input",e.bind(void 0,i))}}module.exports={shareDynamic:shareDynamic};

},{}],6:[function(require,module,exports){
"use strict";window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var t=[void 0],e="zero-timeout-message",r=function(r){var a=t.length;return t.push(r),window.postMessage(e+a.toString(36),"*"),a};return window.addEventListener("message",function(r){if("string"==typeof r.data&&r.data.substr(0,e.length)===e){r.stopImmediatePropagation();var a=parseInt(r.data.substr(e.length),36);t[a]&&(t[a](),t[a]=void 0)}},!0),window.clearImmediate=function(e){t[e]&&(t[e]=void 0)},r}()||function(t){window.setTimeout(t,0)}}()),window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(t){window.clearTimeout(t)}}()),function(t){var e=function(){var t=document.createElement("canvas");if(!t||!t.getContext)return!1;var e=t.getContext("2d");return e.getImageData&&e.fillText&&Array.prototype.some&&Array.prototype.push?!0:!1}(),r=function(){if(e){for(var t,r,a=document.createElement("canvas").getContext("2d"),i=20;i;){if(a.font=i.toString(10)+"px sans-serif",a.measureText("Ｗ").width===t&&a.measureText("m").width===r)return i+1;t=a.measureText("Ｗ").width,r=a.measureText("m").width,i--}return 0}}(),a=function(t){for(var e,r,a=t.length;a;e=Math.floor(Math.random()*a),r=t[--a],t[a]=t[e],t[e]=r);return t},i=function(t,i){function o(t,e){return"hsl("+(360*Math.random()).toFixed()+","+(30*Math.random()+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}if(e){Array.isArray(t)||(t=[t]),t.forEach(function(e,r){if("string"==typeof e){if(t[r]=document.getElementById(e),!t[r])throw"The element id specified is not found."}else if(!e.tagName&&!e.appendChild)throw"You must pass valid HTML elements, or ID of the element."});var n={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,hover:null,click:null};if(i)for(var f in i)f in n&&(n[f]=i[f]);if("function"!=typeof n.weightFactor){var l=n.weightFactor;n.weightFactor=function(t){return t*l}}if("function"!=typeof n.shape)switch(n.shape){case"circle":default:n.shape="circle";break;case"cardioid":n.shape=function(t){return 1-Math.sin(t)};break;case"diamond":case"square":n.shape=function(t){var e=t%(2*Math.PI/4);return 1/(Math.cos(e)+Math.sin(e))};break;case"triangle-forward":n.shape=function(t){var e=t%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"triangle":case"triangle-upright":n.shape=function(t){var e=(t+3*Math.PI/2)%(2*Math.PI/3);return 1/(Math.cos(e)+Math.sqrt(3)*Math.sin(e))};break;case"pentagon":n.shape=function(t){var e=(t+.955)%(2*Math.PI/5);return 1/(Math.cos(e)+.726543*Math.sin(e))};break;case"star":n.shape=function(t){var e=(t+.955)%(2*Math.PI/10);return(t+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-e)+3.07768*Math.sin(2*Math.PI/10-e)):1/(Math.cos(e)+3.07768*Math.sin(e))}}n.gridSize=Math.max(Math.floor(n.gridSize),4);var s,d,c,u,h,m,v,w=n.gridSize,g=w-n.maskGapWidth,p=Math.abs(n.maxRotation-n.minRotation),M=Math.min(n.maxRotation,n.minRotation);switch(n.color){case"random-dark":v=function(){return o(10,50)};break;case"random-light":v=function(){return o(50,90)};break;default:"function"==typeof n.color&&(v=n.color)}var x,b=!1,C=[],I=function(t){var e=t.currentTarget,r=e.getBoundingClientRect(),a=t.clientX-r.left,i=t.clientY-r.top,o=Math.floor(a*(e.width/r.width||1)/w),n=Math.floor(i*(e.height/r.height||1)/w);return C[o][n]},T=function(t){var e=I(t);if(x!==e)return x=e,e?void n.hover(e.item,e.dimension,t):void n.hover(void 0,void 0,t)},y=function(t){var e=I(t);e&&n.click(e.item,e.dimension,t)},k=[],S=function(t){if(k[t])return k[t];var e=8*t,r=e,a=[];for(0===t&&a.push([u[0],u[1],0]);r--;){var i=1;"circle"!==n.shape&&(i=n.shape(r/e*2*Math.PI)),a.push([u[0]+t*i*Math.cos(-r/e*2*Math.PI),u[1]+t*i*Math.sin(-r/e*2*Math.PI)*n.ellipticity,r/e*2*Math.PI])}return k[t]=a,a},E=function(){return n.abortThreshold>0&&(new Date).getTime()-m>n.abortThreshold},R=function(){return 0===n.rotateRatio?0:Math.random()>n.rotateRatio?0:0===p?M:M+Math.random()*p},P=function(t,e,a){var i=!1,o=n.weightFactor(e);if(o<=n.minSize)return!1;var f=1;r>o&&(f=function(){for(var t=2;r>t*o;)t+=2;return t}());var l=document.createElement("canvas"),s=l.getContext("2d",{willReadFrequently:!0});s.font=n.fontWeight+" "+(o*f).toString(10)+"px "+n.fontFamily;var d=s.measureText(t).width/f,c=Math.max(o*f,s.measureText("m").width,s.measureText("Ｗ").width)/f,u=d+2*c,h=3*c,m=Math.ceil(u/w),v=Math.ceil(h/w);u=m*w,h=v*w;var g=-d/2,p=.4*-c,M=Math.ceil((u*Math.abs(Math.sin(a))+h*Math.abs(Math.cos(a)))/w),x=Math.ceil((u*Math.abs(Math.cos(a))+h*Math.abs(Math.sin(a)))/w),b=x*w,C=M*w;l.setAttribute("width",b),l.setAttribute("height",C),i&&(document.body.appendChild(l),s.save()),s.scale(1/f,1/f),s.translate(b*f/2,C*f/2),s.rotate(-a),s.font=n.fontWeight+" "+(o*f).toString(10)+"px "+n.fontFamily,s.fillStyle="#000",s.textBaseline="middle",s.fillText(t,g*f,(p+.5*o)*f);var I=s.getImageData(0,0,b,C).data;if(E())return!1;i&&(s.strokeRect(g*f,p,d*f,c*f),s.restore());for(var T,y,k,S=[],R=x,P=[M/2,x/2,M/2,x/2];R--;)for(T=M;T--;){k=w;t:{for(;k--;)for(y=w;y--;)if(I[4*((T*w+k)*b+(R*w+y))+3]){S.push([R,T]),R<P[3]&&(P[3]=R),R>P[1]&&(P[1]=R),T<P[0]&&(P[0]=T),T>P[2]&&(P[2]=T),i&&(s.fillStyle="rgba(255, 0, 0, 0.5)",s.fillRect(R*w,T*w,w-.5,w-.5));break t}i&&(s.fillStyle="rgba(0, 0, 255, 0.5)",s.fillRect(R*w,T*w,w-.5,w-.5))}}return i&&(s.fillStyle="rgba(0, 255, 0, 0.5)",s.fillRect(P[3]*w,P[0]*w,(P[1]-P[3]+1)*w,(P[2]-P[0]+1)*w)),{mu:f,occupied:S,bounds:P,gw:x,gh:M,fillTextOffsetX:g,fillTextOffsetY:p,fillTextWidth:d,fillTextHeight:c,fontSize:o}},F=function(t,e,r,a,i){for(var o=i.length;o--;){var n=t+i[o][0],f=e+i[o][1];if(n>=d||f>=c||0>n||0>f||!s[n][f])return!1}return!0},z=function(e,r,a,i,o,f,l,s,d){var c,u=a.fontSize;c=v?v(i,o,u,f,l):n.color;var h,m=a.bounds;h={x:(e+m[3])*w,y:(r+m[0])*w,w:(m[1]-m[3]+1)*w,h:(m[2]-m[0]+1)*w},t.forEach(function(t){if(t.getContext){var o=t.getContext("2d"),f=a.mu;o.save(),o.scale(1/f,1/f),o.font=n.fontWeight+" "+(u*f).toString(10)+"px "+n.fontFamily,o.fillStyle=c,o.translate((e+a.gw/2)*w*f,(r+a.gh/2)*w*f),0!==s&&o.rotate(-s),o.textBaseline="middle",o.fillText(i,a.fillTextOffsetX*f,(a.fillTextOffsetY+.5*u)*f),o.restore()}else{var l=document.createElement("span"),h="";h="rotate("+-s/Math.PI*180+"deg) ",1!==a.mu&&(h+="translateX(-"+a.fillTextWidth/4+"px) scale("+1/a.mu+")");var m={position:"absolute",display:"block",font:n.fontWeight+" "+u*a.mu+"px "+n.fontFamily,left:(e+a.gw/2)*w+a.fillTextOffsetX+"px",top:(r+a.gh/2)*w+a.fillTextOffsetY+"px",width:a.fillTextWidth+"px",height:a.fillTextHeight+"px",color:c,lineHeight:u+"px",whiteSpace:"nowrap",transform:h,webkitTransform:h,msTransform:h,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};l.textContent=i;for(var v in m)l.style[v]=m[v];if(d)for(var g in d)l.setAttribute(g,d[g]);t.appendChild(l)}})},L=function(e,r,a,i,o){if(!(e>=d||r>=c||0>e||0>r)){if(s[e][r]=!1,a){var n=t[0].getContext("2d");n.fillRect(e*w,r*w,g,g)}b&&(C[e][r]={item:o,dimension:i})}},W=function(e,r,a,i,o,f){var l,s=o.occupied,d=n.drawMask;d&&(l=t[0].getContext("2d"),l.save(),l.fillStyle=n.maskColor);var c;if(b){var u=o.bounds;c={x:(e+u[3])*w,y:(r+u[0])*w,w:(u[1]-u[3]+1)*w,h:(u[2]-u[0]+1)*w}}for(var h=s.length;h--;)L(e+s[h][0],r+s[h][1],d,c,f);d&&l.restore()},A=function(t){var e,r,i;Array.isArray(t)?(e=t[0],r=t[1]):(e=t.word,r=t.weight,i=t.attributes);var o=R(),f=P(e,r,o);if(!f)return!1;if(E())return!1;var l=f.bounds;if(l[1]-l[3]+1>d||l[2]-l[0]+1>c)return!1;for(var s=h+1,u=function(a){var n=Math.floor(a[0]-f.gw/2),l=Math.floor(a[1]-f.gh/2),d=f.gw,c=f.gh;return F(n,l,d,c,f.occupied)?(z(n,l,f,e,r,h-s,a[2],o,i),W(n,l,d,c,f,t),!0):!1};s--;){var m=S(h-s);n.shuffle&&(m=[].concat(m),a(m));var v=m.some(u);if(v)return!0}return!1},O=function(e,r,a){return r?!t.some(function(t){var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!0,r,a||{}),!t.dispatchEvent(i)},this):void t.forEach(function(t){var i=document.createEvent("CustomEvent");i.initCustomEvent(e,!0,r,a||{}),t.dispatchEvent(i)},this)},D=function(){var e=t[0];if(e.getContext)d=Math.floor(e.width/w),c=Math.floor(e.height/w);else{var r=e.getBoundingClientRect();d=Math.floor(r.width/w),c=Math.floor(r.height/w)}if(O("wordcloudstart",!0)){u=n.origin?[n.origin[0]/w,n.origin[1]/w]:[d/2,c/2],h=Math.floor(Math.sqrt(d*d+c*c)),s=[];var a,i,o;if(!e.getContext||n.clearCanvas)for(t.forEach(function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=n.backgroundColor,e.clearRect(0,0,d*(w+1),c*(w+1)),e.fillRect(0,0,d*(w+1),c*(w+1))}else t.textContent="",t.style.backgroundColor=n.backgroundColor}),a=d;a--;)for(s[a]=[],i=c;i--;)s[a][i]=!0;else{var f=document.createElement("canvas").getContext("2d");f.fillStyle=n.backgroundColor,f.fillRect(0,0,1,1);var l=f.getImageData(0,0,1,1).data,v=e.getContext("2d").getImageData(0,0,d*w,c*w).data;a=d;for(var g,p;a--;)for(s[a]=[],i=c;i--;){p=w;t:for(;p--;)for(g=w;g--;)for(o=4;o--;)if(v[4*((i*w+p)*d*w+(a*w+g))+o]!==l[o]){s[a][i]=!1;break t}s[a][i]!==!1&&(s[a][i]=!0)}v=f=l=void 0}if(n.hover||n.click){for(b=!0,a=d+1;a--;)C[a]=[];n.hover&&e.addEventListener("mousemove",T),n.click&&e.addEventListener("click",y),e.addEventListener("wordcloudstart",function F(){e.removeEventListener("wordcloudstart",F),e.removeEventListener("mousemove",T),e.removeEventListener("click",y),x=void 0})}o=0;var M,I;0!==n.wait?(M=window.setTimeout,I=window.clearTimeout):(M=window.setImmediate,I=window.clearImmediate);var k=function(e,r){t.forEach(function(t){t.addEventListener(e,r)},this)},S=function(e,r){t.forEach(function(t){t.removeEventListener(e,r)},this)},R=function z(){S("wordcloudstart",z),I(P)};k("wordcloudstart",R);var P=M(function L(){if(o>=n.list.length)return I(P),O("wordcloudstop",!1),void S("wordcloudstart",R);m=(new Date).getTime();var t=A(n.list[o]),e=!O("wordclouddrawn",!0,{item:n.list[o],drawn:t});return E()||e?(I(P),n.abort(),O("wordcloudabort",!1),O("wordcloudstop",!1),void S("wordcloudstart",R)):(o++,void(P=M(L,n.wait)))},n.wait)}};D()}};i.isSupported=e,i.miniumFontSize=r,"function"==typeof t.define&&t.define.amd?t.define("wordcloud",[],function(){return i}):"undefined"!=typeof t.module&&t.module.exports?t.module.exports=i:t.WordCloud=i}(window);

},{}]},{},[4]);
