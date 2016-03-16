var NAND=function(h){function p(b){this.model=b;this.outlines=[];this.labels=[];this.paths=[]}p.prototype.render=function(b){var x=this.model.heavyStrokeWidth,p=this.model.lightStrokeWidth,q=this.model.width/2,v=this.model.height/2,n=this.model.x-q,k=this.model.y-v,t="?"==this.model.inputs[0];this.paths[0]=(new h.PathBuilder).moveTo(n,k).lineTo(n+q,k).arc(1,1,0,0,1,n+q,k+this.model.height).lineTo(n,k+this.model.height).close().toPath(b).attr({fill:"white","stroke-width":x*(t?.5:1),"stroke-dasharray":t?
"-":""}).drag(h.makeMove(this),h.start,h.up(this));var t=.05*this.model.width,x=n+q+v+t+x/2,v=k+v,q=.2*this.model.height,w=.3*this.model.width;this.paths[2]=(new h.PathBuilder).moveTo(n,k+q).lineTo(n-w,k+q).toPath(b).attr("stroke-width",p);var r="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=b.circle(n-w,k+q,7.5).attr("fill","white").attr("stroke",r);this.labels[0]=b.text(n-w,k+q,this.model.inputs[0]).attr("stroke",r);this.labels[0].node.setAttribute("class",
"intermediate");this.paths[3]=(new h.PathBuilder).moveTo(n,k+this.model.height-q).lineTo(n-w,k+this.model.height-q).toPath(b).attr("stroke-width",p);r="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=b.circle(n-w,k+this.model.height-q,7.5).attr("fill","white").attr("stroke",r);this.labels[1]=b.text(n-w,k+this.model.height-q,this.model.inputs[1]).attr("stroke",r);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:x+w,y:v};this.outlines[3]=
(new h.PathBuilder).moveTo(x+t,v).lineTo(x+w,v).toPath(b).attr("stroke-width",p);null!=this.model.output&&(r="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=b.circle(x+w,v,7.5).attr("fill","white").attr("stroke",r),this.labels[2]=b.text(x+w,v,this.model.output).attr("stroke",r),this.labels[2].node.setAttribute("class","intermediate"))};p.prototype.update=function(){var b="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",
this.model.inputs[0]).attr("stroke",b);this.outlines[0].attr("stroke",b);b="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",b);this.outlines[1].attr("stroke",b);b="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",b);this.outlines[2].attr("stroke",b);b="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",b?"-":"");this.paths[2].attr("stroke-dasharray",
b?"-":"");this.paths[3].attr("stroke-dasharray",b?"-":"")};h.AndView=p;return h}(NAND||{});NAND=function(h){function p(b){this.model=b;this.outlines=[];this.labels=[];this.paths=[]}p.prototype.render=function(b){var h=this.model.heavyStrokeWidth,p=this.model.lightStrokeWidth,q=this.model.width/2,v=this.model.height/2,n=this.model.x-q,k=this.model.y-v,t="?"==this.model.inputs[0];this.paths[0]=(new PathBuilder).moveTo(n,k).lineTo(n+q,k).arc(1,1,0,0,1,n+q,k+this.model.height).lineTo(n,k+this.model.height).close().toPath(b).attr({fill:"white","stroke-width":h*(t?.5:1),"stroke-dasharray":t?
"-":""});var w=.05*this.model.width,h=n+q+v+w+h/2,v=k+v;b.circle(h,v,w).attr({fill:"white","stroke-width":p*(t?.5:1),"stroke-dasharray":t?"-":""});t=.2*this.model.height;q=.3*this.model.width;this.paths[2]=(new PathBuilder).moveTo(n,k+t).lineTo(n-q,k+t).toPath(b).attr("stroke-width",p);var r="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=b.circle(n-q,k+t,7.5).attr("fill","white").attr("stroke",r);this.labels[0]=b.text(n-q,k+t,this.model.inputs[0]).attr("stroke",
r);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new PathBuilder).moveTo(n,k+this.model.height-t).lineTo(n-q,k+this.model.height-t).toPath(b).attr("stroke-width",p);r="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=b.circle(n-q,k+this.model.height-t,7.5).attr("fill","white").attr("stroke",r);this.labels[1]=b.text(n-q,k+this.model.height-t,this.model.inputs[1]).attr("stroke",r);this.labels[1].node.setAttribute("class","intermediate");
this.outputWire={x:h+q,y:v};(new PathBuilder).moveTo(h+w,v).lineTo(h+q,v).toPath(b).attr("stroke-width",p);null!=this.model.output&&(r="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=b.circle(h+q,v,7.5).attr("fill","white").attr("stroke",r),this.labels[2]=b.text(h+q,v,this.model.output).attr("stroke",r),this.labels[2].node.setAttribute("class","intermediate"))};p.prototype.update=function(){var b="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":
"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",b);this.outlines[0].attr("stroke",b);b="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",b);this.outlines[1].attr("stroke",b);b="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",b);this.outlines[2].attr("stroke",b);b="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",
b?"-":"");this.paths[2].attr("stroke-dasharray",b?"-":"");this.paths[3].attr("stroke-dasharray",b?"-":"")};h.NandView=p;return h}(NAND||{});NAND=function(h){function p(b){this.model=b;this.outlines=[];this.labels=[];this.paths=[]}p.prototype.render=function(b){var p=this.model.heavyStrokeWidth,y=this.model.lightStrokeWidth,q=this.model.width/2,v=this.model.height/2,n=this.model.x-q,k=this.model.y-v,t="?"==this.model.inputs[0];this.paths[0]=(new h.PathBuilder).moveTo(n,k).lineTo(n+this.model.width-20,k+v).lineTo(n,k+this.model.height).close().toPath(b).attr({fill:"white","stroke-width":p*(t?.5:1),"stroke-dasharray":t?"-":""});var w=.05*
this.model.width,p=n+q+v+w+p/2-11,q=k+v;b.circle(p,q,w).attr({fill:"white","stroke-width":y*(t?.5:1),"stroke-dasharray":t?"-":""});t=.3*this.model.width;this.paths[1]=(new h.PathBuilder).moveTo(n,k+v).lineTo(n-t,k+v).toPath(b).attr("stroke-width",y);var r="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=b.circle(n-t,k+v,7.5).attr("fill","white").attr("stroke",r);this.labels[0]=b.text(n-t,k+v,this.model.inputs[0]).attr("stroke",r);this.labels[0].node.setAttribute("class",
"intermediate");this.outputWire={x:p+t,y:q};(new h.PathBuilder).moveTo(p+w,q).lineTo(p+t,q).toPath(b).attr("stroke-width",y);null!=this.model.output&&(r="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[1]=b.circle(p+t,q,7.5).attr("fill","white").attr("stroke",r),this.labels[1]=b.text(p+t,q,this.model.output).attr("stroke",r),this.labels[1].node.setAttribute("class","intermediate"))};p.prototype.update=function(){var b="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?
"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",b);this.outlines[0].attr("stroke",b);b="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[1].attr("text",this.model.output).attr("stroke",b);this.outlines[1].attr("stroke",b);b="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",b?"-":"");this.paths[1].attr("stroke-dasharray",b?"-":"")};h.NotView=p;return h}(NAND||{});NAND=function(h){function p(){this.commands=[]}p.prototype.moveTo=function(b,h){this.commands.push("M"+b+","+h);return this};p.prototype.lineTo=function(b,h){this.commands.push("L"+b+","+h);return this};p.prototype.arc=function(b,h,p,q,v,n,k){this.commands.push("A"+b+","+h+" "+p+" "+q+" "+v+" "+n+","+k);return this};p.prototype.close=function(){this.commands.push("Z");return this};p.prototype.toPath=function(b){return b.path(this.commands.join(" "))};h.PathBuilder=p;return h}(NAND||{});NAND=function(h){function p(){this.ty=this.tx=0}function b(a){return function(l,b){for(var g=0;g<a.paths.length;g++){var m=a.paths[g];null!=m&&m.translate(l-this.tx,b-this.ty)}for(g=0;g<a.labels.length;g++)m=a.labels[g],null!=m&&m.translate(l-this.tx,b-this.ty);for(g=0;g<a.outlines.length;g++)m=a.outlines[g],null!=m&&m.translate(l-this.tx,b-this.ty);this.tx=l;this.ty=b;a.model.viewModel.dx=l;a.model.viewModel.dy=b;A.layoutWires()}}function x(a){return function(){a.model.x+=a.model.viewModel.dx;a.model.y+=
a.model.viewModel.dy;a.model.viewModel.dx=0;a.model.viewModel.dy=0}}function y(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function q(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function v(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function n(a,l,b){this.id=a;this.kind="gate";this.gate=l;this.logic=b;this.inputs=[];this.outputs=[]}function k(a,l){this.id=a;this.kind="source";this.value=l;this.outputs=[]}function t(a){this.id=a;this.kind="sink";
this.inputs=[]}function w(a){this.id=a;this.kind="delay";this.inputs=[];this.outputs=[]}function r(a){this.id=a;this.kind="fanout";this.inputs=[];this.outputs=[]}function J(a){return a.reduce(function(a,b){return a&&b})}function L(a){return a.reduce(function(a,b){return a||b})}function K(a){return a.reduce(function(a,b){return a^b})}function F(a,l){this.node=a;this.model=l;this.paths=[];this.labels=[];this.outlines=[]}function G(a){this.model=a;this.paths=[];this.outlines=[];this.labels=[]}function H(a){this.model=
a}function I(a){this.model=a}function D(a){this.id=a;this.inputs=[];this.outputs=[];this.wires=[]}function C(a,l,b){0>z?z=0:z>=b&&(z=b-1);a.traverse(function(a,m,e){l.map(function(l){var f=l.node,d=l.view;if(f.id==a.id){var m=e>z;switch(f.kind){case "gate":f.inputs.map(function(a,l){d.model.inputs[l]=m?"?":a.evaluate()?"1":"0"});d.model.output=m?"?":f.evaluate()?"1":"0";d.update();break;case "sink":d.model.value=z<b-1?"?":f.evaluate()?"1":"0",d.update()}}})});document.getElementById("time").textContent=
"t = "+z}var E,A;h.makeMove=b;h.start=p;h.up=x;y.prototype.render=function(a){var l=this.model.heavyStrokeWidth,b=this.model.lightStrokeWidth,g=this.model.width/2,m=this.model.height/2,e=this.model.x-g,c=this.model.y-m,f="?"==this.model.inputs[0],d=.4*this.model.width,u=2*this.model.width/3,p=.15*this.model.width;this.paths[0]=(new h.PathBuilder).moveTo(e,c).lineTo(e+d,c).arc(u,u,0,0,1,e+this.model.width-p,c+m).arc(u,u,0,0,1,e+d,c+this.model.height).lineTo(e,c+this.model.height).toPath(a).attr({fill:"white",
"stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[1]=(new h.PathBuilder).moveTo(e,c).arc(d,d,0,0,1,e,c+this.model.height).toPath(a).attr({fill:"white","stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""});d=.05*this.model.width;l=e+g+m+d+l/2;m=c+m;a.circle(l,m,d).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});f=.2*this.model.height;g=.3*this.model.width;this.paths[2]=(new h.PathBuilder).moveTo(e+g-1-.5*g,c+f).lineTo(e-g,c+f).toPath(a).attr("stroke-width",
b);u="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(e-g,c+f,7.5).attr("fill","white").attr("stroke",u);this.labels[0]=a.text(e-g,c+f,this.model.inputs[0]).attr("stroke",u);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new h.PathBuilder).moveTo(e+g-1-.5*g,c+this.model.height-f).lineTo(e-g,c+this.model.height-f).toPath(a).attr("stroke-width",b);u="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=
a.circle(e-g,c+this.model.height-f,7.5).attr("fill","white").attr("stroke",u);this.labels[1]=a.text(e-g,c+this.model.height-f,this.model.inputs[1]).attr("stroke",u);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:l+g,y:m};(new h.PathBuilder).moveTo(l+d,m).lineTo(l+g,m).toPath(a).attr("stroke-width",b);null!=this.model.output&&(u="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(l+g,m,7.5).attr("fill","white").attr("stroke",u),
this.labels[2]=a.text(l+g,m,this.model.output).attr("stroke",u),this.labels[2].node.setAttribute("class","intermediate"))};y.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",
a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};q.prototype.render=function(a){var l=this.model.heavyStrokeWidth,B=this.model.lightStrokeWidth,g=this.model.width/
2,m=this.model.height/2,e=this.model.x-g,c=this.model.y-m,f="?"==this.model.inputs[0],d=.4*this.model.width,u=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new h.PathBuilder).moveTo(e,c).lineTo(e+d,c).arc(u,u,0,0,1,e+this.model.width-n,c+m).arc(u,u,0,0,1,e+d,c+this.model.height).lineTo(e,c+this.model.height).toPath(a).attr({fill:"white","stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""}).drag(b(this),p,x(this));this.paths[1]=(new h.PathBuilder).moveTo(e,c).arc(d,d,0,0,1,e,c+this.model.height).toPath(a).attr({fill:"white",
"stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""});f=.05*this.model.width;l=e+g+m+f+l/2;m=c+m;g=.2*this.model.height;d=.3*this.model.width;this.paths[2]=(new h.PathBuilder).moveTo(e+d-1-.5*d,c+g).lineTo(e-d,c+g).toPath(a).attr("stroke-width",B);u="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(e-d,c+g,7.5).attr("fill","white").attr("stroke",u);this.labels[0]=a.text(e-d,c+g,this.model.inputs[0]).attr("stroke",u);this.labels[0].node.setAttribute("class",
"intermediate");this.paths[3]=(new h.PathBuilder).moveTo(e+d-1-.5*d,c+this.model.height-g).lineTo(e-d,c+this.model.height-g).toPath(a).attr("stroke-width",B);u="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(e-d,c+this.model.height-g,7.5).attr("fill","white").attr("stroke",u);this.labels[1]=a.text(e-d,c+this.model.height-g,this.model.inputs[1]).attr("stroke",u);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:l+d,y:m};
this.outlines[3]=(new h.PathBuilder).moveTo(l+f,m).lineTo(l+d,m).toPath(a).attr("stroke-width",B);null!=this.model.output&&(u="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(l+d,m,7.5).attr("fill","white").attr("stroke",u),this.labels[2]=a.text(l+d,m,this.model.output).attr("stroke",u),this.labels[2].node.setAttribute("class","intermediate"))};q.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";
this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",
a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};v.prototype.render=function(a){var l=this.model.heavyStrokeWidth,B=this.model.lightStrokeWidth,g=this.model.width/2,m=this.model.height/2,e=this.model.x-g,c=this.model.y-m,f="?"==this.model.inputs[0],d=.4*this.model.width,u=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new h.PathBuilder).moveTo(e,c).lineTo(e+d,c).arc(u,u,0,0,1,e+this.model.width-
n,c+m).arc(u,u,0,0,1,e+d,c+this.model.height).lineTo(e,c+this.model.height).toPath(a).attr({fill:"white","stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""}).drag(b(this),p,x(this));this.paths[1]=(new h.PathBuilder).moveTo(e,c).arc(d,d,0,0,1,e,c+this.model.height).toPath(a).attr({fill:"white","stroke-width":l*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[2]=(new h.PathBuilder).moveTo(e-5,c).arc(d,d,0,0,1,e-5,c+this.model.height).toPath(a).attr({fill:"white","stroke-width":l*(f?.5:1),"stroke-dasharray":f?
"-":""});f=.05*this.model.width;l=e+g+m+f+l/2;m=c+m;g=.2*this.model.height;d=.3*this.model.width;this.paths[3]=(new h.PathBuilder).moveTo(e+d-1-.5*d,c+g).lineTo(e-d,c+g).toPath(a).attr("stroke-width",B);u="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(e-d,c+g,7.5).attr("fill","white").attr("stroke",u);this.labels[0]=a.text(e-d,c+g,this.model.inputs[0]).attr("stroke",u);this.labels[0].node.setAttribute("class","intermediate");this.paths[4]=(new h.PathBuilder).moveTo(e+
d-1-.5*d,c+this.model.height-g).lineTo(e-d,c+this.model.height-g).toPath(a).attr("stroke-width",B);u="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(e-d,c+this.model.height-g,7.5).attr("fill","white").attr("stroke",u);this.labels[1]=a.text(e-d,c+this.model.height-g,this.model.inputs[1]).attr("stroke",u);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:l+d,y:m};this.outlines[3]=(new h.PathBuilder).moveTo(l+f,m).lineTo(l+
d,m).toPath(a).attr("stroke-width",B);null!=this.model.output&&(u="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(l+d,m,7.5).attr("fill","white").attr("stroke",u),this.labels[2]=a.text(l+d,m,this.model.output).attr("stroke",u),this.labels[2].node.setAttribute("class","intermediate"))};v.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",
a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");
this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"");this.paths[4].attr("stroke-dasharray",a?"-":"")};n.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};n.prototype.traverse=function(a,l,b){a(this,l,b);this.outputs.map(function(g){g.traverse(a,l,b+1)})};n.prototype.evaluate=function(){if("not"==this.gate&&1!=this.inputs.length||"not"!=this.gate&&2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(l){a.push(l.evaluate())});
return this.logic(a)};k.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};k.prototype.traverse=function(a,l,b){a(this,l,b);this.outputs.map(function(g){g.traverse(a,l,b+1)})};k.prototype.evaluate=function(){return this.value};k.prototype.toggle=function(){this.value=!this.value};t.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};t.prototype.traverse=function(a,l,b){a(this,l,b)};t.prototype.evaluate=function(){return this.inputs[0].evaluate()};w.prototype.connect=
function(a){this.outputs.push(a);a.inputs.push(this)};w.prototype.traverse=function(a,l,b){a(this,l,b);this.outputs.map(function(g){g.traverse(a,l,b+1)})};w.prototype.evaluate=function(){return this.inputs[0].evaluate()};r.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};r.prototype.traverse=function(a,l,b){a(this,l,b);this.outputs.map(function(g){g.traverse(a,l,b+1)})};r.prototype.evaluate=function(){return this.inputs[0].evaluate()};F.prototype.render=function(a){var l=this.model.value,
h=this.model.x,g=this.model.y,m="?"==l?"black":"0"==l?"#a00":"#0a0";this.outlines[0]=a.rect(h-7,g-7,14,14).attr("stroke",m).attr("fill","white").drag(b(this),p,x(this));this.labels[0]=a.text(h,g,l).attr("stroke",m).click(this.model.click.bind(this)).drag(b(this),p,x(this));this.labels[0].node.setAttribute("class","input")};F.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.labels[0].attr("text",a).attr("stroke",b);this.outlines[0].attr("stroke",b)};G.prototype.render=
function(a){var l=this.model.value,h=this.model.x,g=this.model.y,m="?"==l?"black":"0"==l?"#a00":"#0a0";this.outlines[0]=a.rect(h-7,g-7,14,14).attr("stroke",m).attr("fill","white").drag(b(this),p,x(this));this.labels[0]=a.text(h,g,l).attr("stroke",m).drag(b(this),p,x(this));this.labels[0].node.setAttribute("class","output")};G.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.labels[0].attr("text",a).attr("stroke",b);this.outlines[0].attr("stroke",b)};H.prototype.render=
function(a){};I.prototype.render=function(a){var b=this.model.x,n=this.model.y;(new h.PathBuilder).moveTo(b+42,n).lineTo(b+42,n+10).toPath(a)};D.prototype.traverse=function(a){this.inputs.map(function(b,h){b.traverse(a,h,0)})};D.prototype.layout=function(a){var b=[],n=null;this.traverse(function(a,d,e){d>=b.length&&(b[d]=[]);b[d][e]={node:a};if(null==n||e>n)n=e});for(var g=a.width/2-90*(b[0].length-1)/2,m=a.height/2-60*(b.length-1)/2,e=0;e<b.length;e++)for(var c=0;c<b[e].length;c++){var f=b[e][c],
d=f.node;f.x=g+90*c;f.y=m+60*e;0<e&&b[e-1][c].node.id==d.id&&(b[e-1][c].skip=!0,null==b[e-1][c].skipCount&&(b[e-1][c].skipCount=1),f.skipCount=b[e-1][c].skipCount+1,f.x=b[e-1][c].x+f.x,f.y=b[e-1][c].y+f.y)}for(e=0;e<b.length;e++)for(c=0;c<b[e].length;c++)f=b[e][c],null!=f.skipCount&&(f.x/=f.skipCount,f.y/=f.skipCount);for(e=0;e<b.length;e++)for(c=0;c<b[e].length;c++)f=b[e][c],d=f.node,f.skip||null==d.outputs||d.outputs.map(function(d){for(var e=[],c=0;c<b.length;c++)for(var g=0;g<b[c].length;g++){var m=
b[c][g];m.node.id!=d.id||m.skip||e.push(m)}if(1!=e.length)throw console.log(e),"outputs";d=e[0];e="gate"==d.node.kind?-48:0;c="gate"==d.node.kind?-5:0;(new h.PathBuilder).moveTo(f.x,f.y).lineTo(d.x+e,f.y).lineTo(d.x+e,d.y<f.y?d.y-c:d.y+c).toPath(a)});var u=this,p=[];b.map(function(b){b.map(function(b){if(!b.skip){var d=b.x,e=b.y,c=b.node;b=null;switch(c.kind){case "source":b=new F({x:d,y:e,value:c.value?"1":"0",click:function(){c.toggle();this.model.value=c.value?"1":"0";this.update();C(u,p,n)}});
b.render(a);break;case "sink":b=new G({x:d,y:e,value:c.evaluate()?"1":"0"});b.render(a);break;case "delay":b=new H({x:d,y:e});b.render(a);break;case "fanout":b=new I({x:d,y:e});b.render(a);break;case "gate":d={id:c.id,x:d,y:e,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:"not"==c.gate?[c.inputs[0].evaluate()?"1":"0"]:[c.inputs[0].evaluate()?"1":"0",c.inputs[1].evaluate()?"1":"0"],output:c.evaluate()?"1":"0"};switch(c.gate){case "not":b=new NotView(d);break;case "nand":b=new NandView(d);
break;case "and":b=new h.AndView(d);break;case "nor":b=new y(d);break;case "or":b=new q(d);break;case "xor":b=new v(d);break;default:throw"gate";}b.render(a);break;default:throw"kind";}null!=b&&p.push({node:c,view:b})}})});return{nodeViews:p,maxDepth:n}};D.prototype.layout2=function(a){var b=null,n=null;this.traverse(function(a,d,c){console.log(a.kind+"["+a.id+"]: breadth="+d+", depth="+c);if(null==b||d>b)b=d;if(null==n||c>n)n=c});console.log("maxBreadth="+b+", maxDepth="+n);var g=[];this.traverse(function(a,
b,d){a.seen||(console.log(a.kind+"["+a.id+"]: breadth="+b+", depth="+d),a.seen=!0,a={node:a,row:b,column:d,dx:0,dy:0},console.log(a),g.push(a))});for(var m=!0;m;)for(var m=!1,e=[],c=0;c<g.length;c++){for(var f=g[c],d=0;d<e.length;d++)if(e[d].row==f.row&&e[d].column==f.column&&e[d].node.id!=f.node.id){console.log("conflict at "+f.row+","+f.column);f.row++;f.column++;m=!0;break}if(m)break;e.push(f)}m=a.width/2-90*(n-1)/2;e=a.height/2-60*(b-1)/2;this.dx=90;this.dy=60;this.cx=m;this.cy=e;this.models=
g;this.layoutWires();for(var u=this,p=[],c=0;c<g.length;c++){var f=g[c],k=m+90*f.column,t=e+60*f.row,d=f.node,r=null;switch(d.kind){case "source":k={viewModel:f,x:k,y:t,value:f.node.value?"1":"0",click:function(){this.node.toggle();this.model.value=this.node.value?"1":"0";this.update();C(u,p,n)}};r=new F(d,k);f.options=k;r.render(a);break;case "sink":k={viewModel:f,x:k,y:t,value:d.evaluate()?"1":"0"};r=new G(k);f.options=k;r.render(a);break;case "delay":r=new H({x:k,y:t});r.render(a);break;case "fanout":r=
new I({x:k,y:t});r.render(a);break;case "gate":k={viewModel:f,id:d.id,x:k,y:t,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:"not"==d.gate?[d.inputs[0].evaluate()?"1":"0"]:[d.inputs[0].evaluate()?"1":"0",d.inputs[1].evaluate()?"1":"0"],output:d.evaluate()?"1":"0"};f.options=k;switch(d.gate){case "not":r=new NotView(k);break;case "nand":r=new NandView(k);break;case "and":r=new h.AndView(k);break;case "nor":r=new y(k);break;case "or":r=new q(k);break;case "xor":r=new v(k);break;
default:throw"gate";}r.render(a);break;default:throw"kind";}null!=r&&p.push({node:d,view:r})}return{nodeViews:p,maxDepth:n}};D.prototype.layoutWires=function(){for(var a=0;a<this.wires.length;a++)this.wires[a].remove();this.wires=[];for(var b=this.dx,n=this.dy,g=this.cx,m=this.cy,e=this,a=0;a<this.models.length;a++){var c=this.models[a],f=c.node;null!=f.outputs&&f.outputs.map(function(a){for(var f=[],k=0;k<e.models.length;k++){var p=e.models[k];p.node.id==a.id&&f.push(p)}if(1!=f.length)throw console.log(f),
"outputs";a=f[0];var f=c.options?c.options.x+c.dx:g+c.column*b,k=c.options?c.options.y+c.dy:m+c.row*n,p=a.options?a.options.x+a.dx:g+a.column*b,r=a.options?a.options.y+a.dy:m+a.row*n,q="gate"==a.node.kind?-48:0;a="gate"==a.node.kind?-5:0;e.wires.push((new h.PathBuilder).moveTo(f,k).lineTo(p+q,k).lineTo(p+q,r<k?r-a:r+a).toPath(E).toBack())})}};var z=0;window.addEventListener("load",function(){E=new Raphael(0,0,window.innerWidth,window.innerHeight);var a=document.getElementById("controls");a.style.left=
E.width/2-a.clientWidth/2+"px";a.style.top=E.height/2-a.clientHeight/2-150+"px";var a=0,b=new k(a++,!1),h=new k(a++,!1),g=new k(a++,!1),m=new t(a++),e=new t(a++),c=new t(a++);new w(a++);new w(a++);new w(a++);var f=new r(a++),d=new r(a++);new r(a++);new r(a++);var p=new n(a++,"xor",K),q=new n(a++,"and",J);new n(a++,"xor",K);new n(a++,"and",J);new n(a++,"or",L);b.connect(f);f.connect(m);h.connect(d);d.connect(e);f.connect(q);d.connect(q);q.connect(p);g.connect(p);p.connect(c);A=new D(a++);A.inputs=
[b,h,g];A.outputs=[m,e];var a=A.layout2(E),v=a.nodeViews,x=a.maxDepth;C(A,v,x);var y=document.getElementById("slider");y.max=x-1;document.getElementById("forward").addEventListener("click",function(){z++;C(A,v,x);y.value=z},!1);document.getElementById("backward").addEventListener("click",function(){z--;C(A,v,x);y.value=z},!1);document.getElementById("slider").addEventListener("input",function(){z=this.value;C(A,v,x);y.value=z})});return h}(NAND||{});
