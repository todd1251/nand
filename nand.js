(function(){function m(){this.commands=[]}function u(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function v(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function w(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function x(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function y(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function z(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function n(a,b,k){this.id=
a;this.kind="gate";this.gate=b;this.logic=k;this.inputs=[];this.outputs=[]}function p(a,b){this.id=a;this.kind="source";this.value=b;this.outputs=[]}function A(a){this.id=a;this.kind="sink";this.inputs=[]}function B(a){this.id=a;this.kind="delay";this.inputs=[];this.outputs=[]}function t(a){this.id=a;this.kind="fanout";this.inputs=[];this.outputs=[]}function J(a){return!a[0]}function K(a){return!a.reduce(function(a,k){return a&&k})}function L(a){return a.reduce(function(a,k){return a&&k})}function M(a){return!a.reduce(function(a,
k){return a||k})}function N(a){return a.reduce(function(a,k){return a||k})}function O(a){return a.reduce(function(a,k){return a^k})}function E(a){this.model=a;this.outline=this.label=null}function F(a){this.model=a}function H(a){this.model=a}function I(a){this.model=a}function G(a){this.id=a;this.inputs=[];this.outputs=[]}function D(a,b,k){0>q?q=0:q>=k&&(q=k-1);a.traverse(function(a,h,c){b.map(function(b){var f=b.node,g=b.view;if(f.id==a.id){var h=c>q;switch(f.kind){case "gate":f.inputs.map(function(a,
b){g.model.inputs[b]=h?"?":a.evaluate()?"1":"0"});g.model.output=h?"?":f.evaluate()?"1":"0";g.update();break;case "sink":g.model.value=q<k-1?"?":f.evaluate()?"1":"0",g.update()}}})});document.getElementById("time").textContent="t = "+q}m.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};m.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};m.prototype.arc=function(a,b,k,e,h,c,d){this.commands.push("A"+a+","+b+" "+k+" "+e+" "+h+" "+c+","+d);return this};
m.prototype.close=function(){this.commands.push("Z");return this};m.prototype.toPath=function(a){return a.path(this.commands.join(" "))};u.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0];this.paths[0]=(new m).moveTo(c,d).lineTo(c+e,d).arc(1,1,0,0,1,c+e,d+this.model.height).lineTo(c,d+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*
(f?.5:1),"stroke-dasharray":f?"-":""});var g=.05*this.model.width,b=c+e+h+g+b/2,h=d+h;a.circle(b,h,g).attr({fill:"white","stroke-width":k*(f?.5:1),"stroke-dasharray":f?"-":""});f=.2*this.model.height;e=.3*this.model.width;this.paths[2]=(new m).moveTo(c,d+f).lineTo(c-e,d+f).toPath(a).attr("stroke-width",k);var l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-e,d+f,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-e,d+f,this.model.inputs[0]).attr("stroke",
l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c,d+this.model.height-f).lineTo(c-e,d+this.model.height-f).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-e,d+this.model.height-f,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-e,d+this.model.height-f,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire=
{x:b+e,y:h};(new m).moveTo(b+g,h).lineTo(b+e,h).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+e,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+e,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};u.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",
this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",
a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};v.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0];this.paths[0]=(new m).moveTo(c,d).lineTo(c+this.model.width-20,d+h).lineTo(c,d+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});var g=.05*this.model.width,b=c+e+h+g+b/2-11,e=d+h;a.circle(b,
e,g).attr({fill:"white","stroke-width":k*(f?.5:1),"stroke-dasharray":f?"-":""});f=.3*this.model.width;this.paths[1]=(new m).moveTo(c,d+h).lineTo(c-f,d+h).toPath(a).attr("stroke-width",k);var l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-f,d+h,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-f,d+h,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.outputWire={x:b+f,y:e};(new m).moveTo(b+
g,e).lineTo(b+f,e).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[1]=a.circle(b+f,e,7.5).attr("fill","white").attr("stroke",l),this.labels[1]=a.text(b+f,e,this.model.output).attr("stroke",l),this.labels[1].node.setAttribute("class","intermediate"))};v.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",
a);this.outlines[0].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[1].attr("text",this.model.output).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"")};w.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,
f="?"==this.model.inputs[0];this.paths[0]=(new m).moveTo(c,d).lineTo(c+e,d).arc(1,1,0,0,1,c+e,d+this.model.height).lineTo(c,d+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});var f=.05*this.model.width,b=c+e+h+f+b/2,h=d+h,e=.2*this.model.height,g=.3*this.model.width;this.paths[2]=(new m).moveTo(c,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",k);var l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=
a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c,d+this.model.height-e).lineTo(c-g,d+this.model.height-e).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-
g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+g,y:h};(new m).moveTo(b+f,h).lineTo(b+g,h).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};
w.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",
a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};x.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0],g=.4*this.model.width,l=2*this.model.width/3,r=.15*this.model.width;this.paths[0]=(new m).moveTo(c,
d).lineTo(c+g,d).arc(l,l,0,0,1,c+this.model.width-r,d+h).arc(l,l,0,0,1,c+g,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[1]=(new m).moveTo(c,d).arc(g,g,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});g=.05*this.model.width;b=c+e+h+g+b/2;h=d+h;a.circle(b,h,g).attr({fill:"white","stroke-width":k*(f?.5:1),"stroke-dasharray":f?"-":""});
f=.2*this.model.height;e=.3*this.model.width;this.paths[2]=(new m).moveTo(c+e-1-.5*e,d+f).lineTo(c-e,d+f).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-e,d+f,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-e,d+f,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c+e-1-.5*e,d+this.model.height-f).lineTo(c-e,d+this.model.height-
f).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-e,d+this.model.height-f,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-e,d+this.model.height-f,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+e,y:h};(new m).moveTo(b+g,h).lineTo(b+e,h).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==this.model.output?"black":
"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+e,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+e,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};x.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?
"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};
y.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0],g=.4*this.model.width,l=2*this.model.width/3,r=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+g,d).arc(l,l,0,0,1,c+this.model.width-r,d+h).arc(l,l,0,0,1,c+g,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?
"-":""});this.paths[1]=(new m).moveTo(c,d).arc(g,g,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});f=.05*this.model.width;b=c+e+h+f+b/2;h=d+h;e=.2*this.model.height;g=.3*this.model.width;this.paths[2]=(new m).moveTo(c+g-1-.5*g,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=
a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c+g-1-.5*g,d+this.model.height-e).lineTo(c-g,d+this.model.height-e).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class",
"intermediate");this.outputWire={x:b+g,y:h};(new m).moveTo(b+f,h).lineTo(b+g,h).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};y.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?
"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",
a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};z.prototype.render=function(a){var b=this.model.heavyStrokeWidth,k=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0],g=.4*this.model.width,l=2*this.model.width/3,r=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+g,d).arc(l,l,0,0,1,c+this.model.width-
r,d+h).arc(l,l,0,0,1,c+g,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[1]=(new m).moveTo(c,d).arc(g,g,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[2]=(new m).moveTo(c-5,d).arc(g,g,0,0,1,c-5,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});f=.05*this.model.width;b=
c+e+h+f+b/2;h=d+h;e=.2*this.model.height;g=.3*this.model.width;this.paths[3]=(new m).moveTo(c+g-1-.5*g,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[4]=(new m).moveTo(c+g-1-.5*g,d+this.model.height-e).lineTo(c-
g,d+this.model.height-e).toPath(a).attr("stroke-width",k);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+g,y:h};(new m).moveTo(b+f,h).lineTo(b+g,h).toPath(a).attr("stroke-width",k);null!=this.model.output&&(l="?"==
this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};z.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":
"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",
a?"-":"");this.paths[4].attr("stroke-dasharray",a?"-":"")};n.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};n.prototype.traverse=function(a,b,k){a(this,b,k);this.outputs.map(function(e){e.traverse(a,b,k+1)})};n.prototype.evaluate=function(){if("not"==this.gate&&1!=this.inputs.length||"not"!=this.gate&&2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};p.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};
p.prototype.traverse=function(a,b,k){a(this,b,k);this.outputs.map(function(e){e.traverse(a,b,k+1)})};p.prototype.evaluate=function(){return this.value};p.prototype.toggle=function(){this.value=!this.value};A.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};A.prototype.traverse=function(a,b,k){a(this,b,k)};A.prototype.evaluate=function(){return this.inputs[0].evaluate()};B.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};B.prototype.traverse=function(a,
b,k){a(this,b,k);this.outputs.map(function(e){e.traverse(a,b,k+1)})};B.prototype.evaluate=function(){return this.inputs[0].evaluate()};t.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};t.prototype.traverse=function(a,b,k){a(this,b,k);this.outputs.map(function(e){e.traverse(a,b,k+1)})};t.prototype.evaluate=function(){return this.inputs[0].evaluate()};E.prototype.render=function(a){var b=this.model.value,k=this.model.x,e=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=
a.rect(k-7,e-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(k,e,b).attr("stroke",h).click(this.model.click.bind(this));this.label.node.setAttribute("class","input")};E.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",b)};F.prototype.render=function(a){var b=this.model.value,k=this.model.x,e=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(k-7,e-7,14,
14).attr("stroke",h).attr("fill","white");this.label=a.text(k,e,b).attr("stroke",h);this.label.node.setAttribute("class","output")};F.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",b)};H.prototype.render=function(a){};I.prototype.render=function(a){var b=this.model.x,k=this.model.y;(new m).moveTo(b+42,k).lineTo(b+42,k+10).toPath(a)};G.prototype.traverse=function(a){this.inputs.map(function(b,
k){b.traverse(a,k,0)})};G.prototype.layout=function(a){var b=[],k=null;this.traverse(function(a,c,d){c>=b.length&&(b[c]=[]);b[c][d]={node:a};if(null==k||d>k)k=d});for(var e=a.width/2-90*(b[0].length-1)/2,h=a.height/2-60*(b.length-1)/2,c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++){var f=b[c][d],g=f.node;f.x=e+90*d;f.y=h+60*c;0<c&&b[c-1][d].node.id==g.id&&(b[c-1][d].skip=!0,null==b[c-1][d].skipCount&&(b[c-1][d].skipCount=1),f.skipCount=b[c-1][d].skipCount+1,f.x=b[c-1][d].x+f.x,f.y=b[c-1][d].y+f.y)}for(c=
0;c<b.length;c++)for(d=0;d<b[c].length;d++)f=b[c][d],null!=f.skipCount&&(f.x/=f.skipCount,f.y/=f.skipCount);for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)f=b[c][d],g=f.node,f.skip||null==g.outputs||g.outputs.map(function(c){for(var d=[],e=0;e<b.length;e++)for(var g=0;g<b[e].length;g++){var h=b[e][g];h.node.id!=c.id||h.skip||d.push(h)}if(1!=d.length)throw console.log(d),"outputs";c=d[0];d="gate"==c.node.kind?-48:0;e="gate"==c.node.kind?-5:0;(new m).moveTo(f.x,f.y).lineTo(c.x+d,f.y).lineTo(c.x+d,
c.y<f.y?c.y-e:c.y+e).toPath(a)});var l=this,r=[];b.map(function(b){b.map(function(b){if(!b.skip){var c=b.x,d=b.y,e=b.node;b=null;switch(e.kind){case "source":b=new E({x:c,y:d,value:e.value?"1":"0",click:function(){e.toggle();this.model.value=e.value?"1":"0";this.update();D(l,r,k)}});b.render(a);break;case "sink":b=new F({x:c,y:d,value:e.evaluate()?"1":"0"});b.render(a);break;case "delay":b=new H({x:c,y:d});b.render(a);break;case "fanout":b=new I({x:c,y:d});b.render(a);break;case "gate":c={id:e.id,
x:c,y:d,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:"not"==e.gate?[e.inputs[0].evaluate()?"1":"0"]:[e.inputs[0].evaluate()?"1":"0",e.inputs[1].evaluate()?"1":"0"],output:e.evaluate()?"1":"0"};switch(e.gate){case "not":b=new v(c);break;case "nand":b=new u(c);break;case "and":b=new w(c);break;case "nor":b=new x(c);break;case "or":b=new y(c);break;case "xor":b=new z(c);break;default:throw"gate";}b.render(a);break;default:throw"kind";}null!=b&&r.push({node:e,view:b})}})});return{nodeViews:r,
maxDepth:k}};var q=0;window.addEventListener("load",function(){var a=new Raphael(0,0,window.innerWidth,window.innerHeight),b=document.getElementById("controls");b.style.left=a.width/2-b.clientWidth/2+"px";b.style.top=a.height/2-b.clientHeight/2-150+"px";var b=0,k=new p(b++,!1);new p(b++,!1);new p(b++,!1);new p(b++,!1);new p(b++,!1);var e=new A(b++);new A(b++);new A(b++);new B(b++);new B(b++);new B(b++);var h=new t(b++),c=new t(b++),d=new t(b++),f=new t(b++),g=new t(b++),l=new n(b++,"not",J),m=new n(b++,
"and",L),u=new n(b++,"nand",K),v=new n(b++,"or",N),w=new n(b++,"nor",M),x=new n(b++,"xor",O);k.connect(l);l.connect(h);h.connect(m);h.connect(m);m.connect(c);c.connect(u);c.connect(u);u.connect(d);d.connect(v);d.connect(v);v.connect(f);f.connect(w);f.connect(w);w.connect(g);g.connect(x);g.connect(x);x.connect(e);var C=new G(b++);C.inputs=[k];C.outputs=[e];var a=C.layout(a),y=a.nodeViews,z=a.maxDepth;D(C,y,z);document.getElementById("forward").addEventListener("click",function(){q++;D(C,y,z)},!1);
document.getElementById("backward").addEventListener("click",function(){q--;D(C,y,z)},!1)})})();
