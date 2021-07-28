/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[14],{357:function(ia,da,h){h.r(da);var ba=h(3),aa=h(0);h.n(aa);var fa=h(1),ca=h(119);ia=h(36);var z=h(75),y=h(202),f=h(50),e=h(201);h=h(303);var x=window,r=function(){function h(h,n,r){var w=-1===h.indexOf("?")?"?":"&";switch(n){case f.a.NEVER_CACHE:this.url=h+w+"_="+Object(aa.uniqueId)();break;default:this.url=h}this.cf=r;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=e.a.NOT_STARTED}h.prototype.start=function(f,n){var r=this,w=this,x=this.request,y;w.tu=0;f&&Object.keys(f).forEach(function(e){r.request.setRequestHeader(e,f[e])});n&&(this.request.withCredentials=n);this.sA=setInterval(function(){var f=0===window.document.URL.indexOf("file:///");f=200===x.status||f&&0===x.status;
if(x.readyState!==e.b.DONE||f){try{x.responseText}catch(sa){return}w.tu<x.responseText.length&&(y=w.R7())&&w.trigger(h.Events.DATA,[y]);0===x.readyState&&(clearInterval(w.sA),w.trigger(h.Events.DONE))}else clearInterval(w.sA),w.trigger(h.Events.DONE,["Error received return status "+x.status])},1E3);this.request.send(null);this.status=e.a.STARTED};h.prototype.R7=function(){var e=this.request,f=e.responseText;if(0!==f.length)if(this.tu===f.length)clearInterval(this.sA),this.trigger(h.Events.DONE);else return f=
Math.min(this.tu+3E6,f.length),e=x.sO(e,this.tu,!0,f),this.tu=f,e};h.prototype.abort=function(){clearInterval(this.sA);var f=this;this.request.onreadystatechange=function(){Object(fa.h)("StreamingRequest aborted");f.status=e.a.ABORTED;return f.trigger(h.Events.ABORTED)};this.request.abort()};h.prototype.finish=function(){var f=this;this.request.onreadystatechange=function(){f.status=e.a.SUCCESS;return f.trigger(h.Events.DONE)};this.request.abort()};h.Events={DONE:"done",DATA:"data",ABORTED:"aborted"};
return h}();Object(ia.b)(r);var w;(function(e){e[e.LOCAL_HEADER=0]="LOCAL_HEADER";e[e.FILE=1]="FILE";e[e.CENTRAL_DIR=2]="CENTRAL_DIR"})(w||(w={}));var n=function(e){function f(){var f=e.call(this)||this;f.buffer="";f.state=w.LOCAL_HEADER;f.dI=4;f.Bk=null;f.Wq=ca.c;f.Rl={};return f}Object(ba.c)(f,e);f.prototype.L7=function(e){var h;for(e=this.buffer+e;e.length>=this.Wq;)switch(this.state){case w.LOCAL_HEADER:this.Bk=h=this.V7(e.slice(0,this.Wq));if(h.yr!==ca.g)throw Error("Wrong signature in local header: "+
h.yr);e=e.slice(this.Wq);this.state=w.FILE;this.Wq=h.gD+h.uo+h.zt+this.dI;this.trigger(f.Events.HEADER,[h]);break;case w.FILE:this.Bk.name=e.slice(0,this.Bk.uo);this.Rl[this.Bk.name]=this.Bk;h=this.Wq-this.dI;var n=e.slice(this.Bk.uo+this.Bk.zt,h);this.trigger(f.Events.FILE,[this.Bk.name,n,this.Bk.xD]);e=e.slice(h);if(e.slice(0,this.dI)===ca.h)this.state=w.LOCAL_HEADER,this.Wq=ca.c;else return this.state=w.CENTRAL_DIR,!0}this.buffer=e;return!1};f.Events={HEADER:"header",FILE:"file"};return f}(y.a);
Object(ia.b)(n);ia=function(e){function f(f,h,w,x,y){w=e.call(this,f,w,x)||this;w.url=f;w.stream=new r(f,h);w.Hd=new n;w.ZQ=window.createPromiseCapability();w.vR={};w.cf=y;return w}Object(ba.c)(f,e);f.prototype.hv=function(e){var f=this;this.request([this.ji,this.uj,this.ii]);this.stream.on(r.Events.DATA,function(h){try{if(f.Hd.L7(h))return f.stream.finish()}catch(ka){throw f.stream.abort(),f.wt(ka),e(ka),ka;}});this.stream.on(r.Events.DONE,function(h){f.t7=!0;f.ZQ.resolve();h&&(f.wt(h),e(h))});this.Hd.on(n.Events.HEADER,
Object(aa.bind)(this.uR,this));this.Hd.on(n.Events.FILE,Object(aa.bind)(this.l8,this));return this.stream.start(this.cf,this.withCredentials)};f.prototype.pO=function(e){var f=this;this.ZQ.promise.then(function(){e(Object.keys(f.Hd.Rl))})};f.prototype.vm=function(){return!0};f.prototype.request=function(e){var f=this;this.t7&&e.forEach(function(e){f.vR[e]||f.oba(e)})};f.prototype.uR=function(){};f.prototype.abort=function(){this.stream&&this.stream.abort()};f.prototype.oba=function(e){this.trigger(z.a.Events.PART_READY,
[{$a:e,error:"Requested part not found",qh:!1,zf:!1}])};f.prototype.l8=function(e,f,h){this.vR[e]=!0;this.trigger(z.a.Events.PART_READY,[{$a:e,data:f,qh:!1,zf:!1,error:null,Pc:h}])};return f}(z.a);Object(h.a)(ia);Object(h.b)(ia);da["default"]=ia}}]);}).call(this || window)
