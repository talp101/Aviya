!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Aviya",[],t):"object"==typeof exports?exports.Aviya=t():e.Aviya=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=function(){function e(){r(this,e),this.render=this.render.bind(this),this.htmlFile=null,this._htmlString=null,this._dependencies=[],this._events=[]}return n(e,[{key:"addEventListener",value:function(e,t,r){this._events.push({selector:e,type:t,trigger:r})}},{key:"addDependency",value:function(e){this._dependencies.push(e)}},{key:"_htmlFileRender",value:function(){var e="<"+this.constructor.name+"(.*?)>(.*?)</"+this.constructor.name+">",t=new RegExp(e,"gi");return this.htmlFile.match(t).map(function(e){return e.replace(/(\\r\\n|\\n|\\r|\\")/gm,"")}).join("")}},{key:"render",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.constructor.name:arguments[0];this._htmlString=this.htmlFile?this._htmlFileRender():this.html();var t=!0,r=!1,n=void 0;try{for(var i,o=document.querySelectorAll(e)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;a.insertAdjacentHTML("afterend",this._htmlString),a.remove()}}catch(l){r=!0,n=l}finally{try{!t&&o["return"]&&o["return"]()}finally{if(r)throw n}}var u=!0,c=!1,s=void 0;try{for(var d,f=this._events[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=d.value,v=!0,y=!1,m=void 0;try{for(var p,_=document.querySelectorAll(h.selector)[Symbol.iterator]();!(v=(p=_.next()).done);v=!0){var b=p.value;if(!b.getAttribute("event_id")){var g=Math.random().toString(36).substr(2,9);b.setAttribute("event_id",this.constructor.name+"_event_"+g),document.querySelector("[event_id="+this.constructor.name+"_event_"+g+"]").addEventListener(h.type,h.trigger)}}}catch(l){y=!0,m=l}finally{try{!v&&_["return"]&&_["return"]()}finally{if(y)throw m}}}}catch(l){c=!0,s=l}finally{try{!u&&f["return"]&&f["return"]()}finally{if(c)throw s}}var x=!0,S=!1,w=void 0;try{for(var A,j=this._dependencies[Symbol.iterator]();!(x=(A=j.next()).done);x=!0){var k=A.value;k.render()}}catch(l){S=!0,w=l}finally{try{!x&&j["return"]&&j["return"]()}finally{if(S)throw w}}}}]),e}();t["default"]=i}])});