/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[10],{350:function(ia,da,h){h.r(da);var ba=h(3),aa=h(1),fa=h(119);ia=h(75);var ca=h(202);h=h(303);var z=window;ia=function(h){function f(e,f,r){f=h.call(this,e,f,r)||this;if(e.name&&"xod"!==e.name.toLowerCase().split(".").pop())throw Error("Not an XOD file");if(!z.FileReader||!z.File||!z.Blob)throw Error("File API is not supported in this browser");f.file=e;f.Rx=[];f.ED=0;return f}Object(ba.c)(f,h);f.prototype.eG=function(e,f,h){var r=
this,n=new FileReader;n.onloadend=function(e){if(0<r.Rx.length){var w=r.Rx.shift();w.k8.readAsBinaryString(w.file)}else r.ED--;if(n.error){e=n.error;if(e.code===e.ABORT_ERR){Object(aa.h)("Request for chunk "+f.start+"-"+f.stop+" was aborted");return}return h(e)}if(e=n.content||e.target.result)return h(!1,e);Object(aa.h)("No data was returned from FileReader.")};f&&(e=(e.slice||e.webkitSlice||e.mozSlice||e.eea).call(e,f.start,f.stop));0===r.Rx.length&&50>r.ED?(n.readAsBinaryString(e),r.ED++):r.Rx.push({k8:n,
file:e});return function(){n.abort()}};f.prototype.Sq=function(e){var f=this;f.Nx=!0;var h=fa.a;f.eG(f.file,{start:-h,stop:f.file.size},function(r,n){if(r)return Object(aa.h)("Error loading end header: %s "+r),e(r);if(n.length!==h)throw Error("Zip end header data is wrong size!");f.Hd=new ca.a(n);var w=f.Hd.UN();f.eG(f.file,w,function(h,n){if(h)return Object(aa.h)("Error loading central directory: %s "+h),e(h);if(n.length!==w.stop-w.start)throw Error("Zip central directory data is wrong size!");f.Hd.lR(n);
f.pD=!0;f.Nx=!1;return e(!1)})})};f.prototype.WG=function(e,f){var h=this,w=h.Vg[e];if(h.Hd.zM(e)){var n=h.Hd.Lt(e),x=h.eG(h.file,n,function(r,w){delete h.Vg[e];if(r)return Object(aa.h)('Error loading part "%s": %s, '+e+", "+r),f(r);if(w.length!==n.stop-n.start)throw Error("Part data is wrong size!");f(!1,e,w,h.Hd.sP(e))});w.uT=!0;w.cancel=x}else f(Error('File not found: "'+e+'"'),e)};return f}(ia.a);Object(h.a)(ia);Object(h.b)(ia);da["default"]=ia}}]);}).call(this || window)