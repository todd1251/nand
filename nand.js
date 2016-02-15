(function(){function m(){this.commands=[]}function q(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function r(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function t(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function y(a,b,g){this.id=a;this.kind="gate";this.gate=b;this.logic=g;this.inputs=[];this.outputs=[]}function u(a,b){this.id=a;this.kind="source";this.value=b;this.outputs=[]}function z(a){this.id=a;this.kind="sink";this.inputs=[]}function p(a){this.id=
a;this.kind="delay";this.inputs=[];this.outputs=[]}function A(a){this.id=a;this.kind="fanout";this.inputs=[];this.outputs=[]}function E(a){return!a.reduce(function(a,g){return a&&g})}function H(a){return a.reduce(function(a,g){return a^g})}function v(a){this.model=a;this.outline=this.label=null}function w(a){this.model=a}function F(a){this.model=a}function G(a){this.model=a}function D(a){this.id=a;this.inputs=[];this.outputs=[]}function C(a,b,g){0>n?n=0:n>=g&&(n=g-1);a.traverse(function(a,h,c){b.map(function(b){var f=
b.node,k=b.view;if(f.id==a.id){var h=c>n;switch(f.kind){case "gate":f.inputs.map(function(a,b){k.model.inputs[b]=h?"?":a.evaluate()?"1":"0"});k.model.output=h?"?":f.evaluate()?"1":"0";k.update();break;case "sink":k.model.value=n<g-1?"?":f.evaluate()?"1":"0",k.update()}}})});document.getElementById("time").textContent="t = "+n}m.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};m.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};m.prototype.arc=function(a,
b,g,e,h,c,d){this.commands.push("A"+a+","+b+" "+g+" "+e+" "+h+" "+c+","+d);return this};m.prototype.close=function(){this.commands.push("Z");return this};m.prototype.toPath=function(a){return a.path(this.commands.join(" "))};q.prototype.render=function(a){var b=this.model.heavyStrokeWidth,g=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0];this.paths[0]=(new m).moveTo(c,d).lineTo(c+e,d).arc(1,1,0,0,1,c+e,d+this.model.height).lineTo(c,
d+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});var k=.05*this.model.width,b=c+e+h+k+b/2,h=d+h;a.circle(b,h,k).attr({fill:"white","stroke-width":g*(f?.5:1),"stroke-dasharray":f?"-":""});f=.2*this.model.height;e=.3*this.model.width;this.paths[2]=(new m).moveTo(c,d+f).lineTo(c-e,d+f).toPath(a).attr("stroke-width",g);var l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-e,d+f,7.5).attr("fill",
"white").attr("stroke",l);this.labels[0]=a.text(c-e,d+f,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c,d+this.model.height-f).lineTo(c-e,d+this.model.height-f).toPath(a).attr("stroke-width",g);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-e,d+this.model.height-f,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-e,d+this.model.height-f,this.model.inputs[1]).attr("stroke",
l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+e,y:h};(new m).moveTo(b+k,h).lineTo(b+e,h).toPath(a).attr("stroke-width",g);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+e,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+e,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};q.prototype.update=function(){var a="?"==this.model.inputs[0]?
"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];
this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};r.prototype.render=function(a){var b=this.model.heavyStrokeWidth,g=this.model.lightStrokeWidth,e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0],k=.4*this.model.width,l=2*this.model.width/3,x=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+k,d).arc(l,l,0,0,1,c+this.model.width-x,d+h).arc(l,
l,0,0,1,c+k,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[1]=(new m).moveTo(c,d).arc(k,k,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});k=.05*this.model.width;b=c+e+h+k+b/2;h=d+h;a.circle(b,h,k).attr({fill:"white","stroke-width":g*(f?.5:1),"stroke-dasharray":f?"-":""});f=.2*this.model.height;e=.3*this.model.width;this.paths[2]=(new m).moveTo(c+
e-1-.5*e,d+f).lineTo(c-e,d+f).toPath(a).attr("stroke-width",g);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-e,d+f,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-e,d+f,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c+e-1-.5*e,d+this.model.height-f).lineTo(c-e,d+this.model.height-f).toPath(a).attr("stroke-width",g);l="?"==this.model.inputs[1]?"black":
"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-e,d+this.model.height-f,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-e,d+this.model.height-f,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+e,y:h};(new m).moveTo(b+k,h).lineTo(b+e,h).toPath(a).attr("stroke-width",g);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+e,
h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+e,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};r.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",
a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};t.prototype.render=function(a){var b=this.model.heavyStrokeWidth,g=this.model.lightStrokeWidth,
e=this.model.width/2,h=this.model.height/2,c=this.model.x-e,d=this.model.y-h,f="?"==this.model.inputs[0],k=.4*this.model.width,l=2*this.model.width/3,x=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+k,d).arc(l,l,0,0,1,c+this.model.width-x,d+h).arc(l,l,0,0,1,c+k,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[1]=(new m).moveTo(c,d).arc(k,k,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white",
"stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});this.paths[2]=(new m).moveTo(c-5,d).arc(k,k,0,0,1,c-5,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(f?.5:1),"stroke-dasharray":f?"-":""});f=.05*this.model.width;b=c+e+h+f+b/2;h=d+h;e=.2*this.model.height;k=.3*this.model.width;this.paths[3]=(new m).moveTo(c+k-1-.5*k,d+e).lineTo(c-k,d+e).toPath(a).attr("stroke-width",g);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-
k,d+e,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-k,d+e,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[4]=(new m).moveTo(c+k-1-.5*k,d+this.model.height-e).lineTo(c-k,d+this.model.height-e).toPath(a).attr("stroke-width",g);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-k,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",l);this.labels[1]=a.text(c-k,
d+this.model.height-e,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+k,y:h};(new m).moveTo(b+f,h).lineTo(b+k,h).toPath(a).attr("stroke-width",g);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+k,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+k,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class","intermediate"))};
t.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",
a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"");this.paths[4].attr("stroke-dasharray",a?"-":"")};y.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};y.prototype.traverse=function(a,b,g){a(this,b,g);this.outputs.map(function(e){e.traverse(a,b,g+1)})};y.prototype.evaluate=
function(){if(2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};u.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};u.prototype.traverse=function(a,b,g){a(this,b,g);this.outputs.map(function(e){e.traverse(a,b,g+1)})};u.prototype.evaluate=function(){return this.value};u.prototype.toggle=function(){this.value=!this.value};z.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};z.prototype.traverse=
function(a,b,g){a(this,b,g)};z.prototype.evaluate=function(){return this.inputs[0].evaluate()};p.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};p.prototype.traverse=function(a,b,g){a(this,b,g);this.outputs.map(function(e){e.traverse(a,b,g+1)})};p.prototype.evaluate=function(){return this.inputs[0].evaluate()};A.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};A.prototype.traverse=function(a,b,g){a(this,b,g);this.outputs.map(function(e){e.traverse(a,
b,g+1)})};A.prototype.evaluate=function(){return this.inputs[0].evaluate()};v.prototype.render=function(a){var b=this.model.value,g=this.model.x,e=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(g-7,e-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(g,e,b).attr("stroke",h).click(this.model.click.bind(this));this.label.node.setAttribute("class","input")};v.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",
a).attr("stroke",b);this.outline.attr("stroke",b)};w.prototype.render=function(a){var b=this.model.value,g=this.model.x,e=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(g-7,e-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(g,e,b).attr("stroke",h);this.label.node.setAttribute("class","output")};w.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",b)};
F.prototype.render=function(a){};G.prototype.render=function(a){var b=this.model.x,g=this.model.y;(new m).moveTo(b+42,g).lineTo(b+42,g+10).toPath(a)};D.prototype.traverse=function(a){this.inputs.map(function(b,g){b.traverse(a,g,0)})};D.prototype.layout=function(a){var b=[],g=null;this.traverse(function(a,c,d){c>=b.length&&(b[c]=[]);b[c][d]={node:a};if(null==g||d>g)g=d});for(var e=a.width/2-90*(b[0].length-1)/2,h=a.height/2-60*(b.length-1)/2,c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++){var f=
b[c][d],k=f.node;f.x=e+90*d;f.y=h+60*c;0<c&&b[c-1][d].node.id==k.id&&(b[c-1][d].skip=!0,null==b[c-1][d].skipCount&&(b[c-1][d].skipCount=1),f.skipCount=b[c-1][d].skipCount+1,f.x=b[c-1][d].x+f.x,f.y=b[c-1][d].y+f.y)}for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)f=b[c][d],null!=f.skipCount&&(f.x/=f.skipCount,f.y/=f.skipCount);for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)f=b[c][d],k=f.node,f.skip||null==k.outputs||k.outputs.map(function(c){for(var d=[],e=0;e<b.length;e++)for(var g=0;g<b[e].length;g++){var h=
b[e][g];h.node.id!=c.id||h.skip||d.push(h)}if(1!=d.length)throw console.log(d),"outputs";c=d[0];d="gate"==c.node.kind?-48:0;e="gate"==c.node.kind?-5:0;(new m).moveTo(f.x,f.y).lineTo(c.x+d,f.y).lineTo(c.x+d,c.y<f.y?c.y-e:c.y+e).toPath(a)});var l=this,x=[];b.map(function(b){b.map(function(b){if(!b.skip){var c=b.x,d=b.y,e=b.node;b=null;switch(e.kind){case "source":b=new v({x:c,y:d,value:e.value?"1":"0",click:function(){e.toggle();this.model.value=e.value?"1":"0";this.update();C(l,x,g)}});b.render(a);
break;case "sink":b=new w({x:c,y:d,value:e.evaluate()?"1":"0"});b.render(a);break;case "delay":b=new F({x:c,y:d});b.render(a);break;case "fanout":b=new G({x:c,y:d});b.render(a);break;case "gate":c={id:e.id,x:c,y:d,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:[e.inputs[0].evaluate()?"1":"0",e.inputs[1].evaluate()?"1":"0"],output:e.evaluate()?"1":"0"};switch(e.gate){case "nand":b=new q(c);break;case "nor":b=new r(c);break;case "xor":b=new t(c);break;default:throw"gate";}b.render(a);
break;default:throw"kind";}null!=b&&x.push({node:e,view:b})}})});return{nodeViews:x,maxDepth:g}};var n=0;window.addEventListener("load",function(){var a=new Raphael(0,0,window.innerWidth,window.innerHeight),b=document.getElementById("controls");b.style.left=a.width/2-b.clientWidth/2+"px";b.style.top=a.height/2-b.clientHeight/2-150+"px";var b=0,g=new u(b++,!1),e=new u(b++,!1),h=new u(b++,!1),c=new z(b++);new z(b++);var d=new z(b++),f=new p(b++),k=new p(b++),l=new p(b++);new p(b++);new p(b++);var m=
new A(b++);new A(b++);new A(b++);var q=new y(b++,"nand",E),r=new y(b++,"nand",E),t=new y(b++,"xor",H);g.connect(q);e.connect(q);q.connect(m);m.connect(r);m.connect(r);r.connect(t);h.connect(f);f.connect(k);k.connect(l);l.connect(t);t.connect(d);var B=new D(b++);B.inputs=[g,e,h];B.outputs=[c];var a=B.layout(a),v=a.nodeViews,w=a.maxDepth;C(B,v,w);document.getElementById("forward").addEventListener("click",function(){n++;C(B,v,w)},!1);document.getElementById("backward").addEventListener("click",function(){n--;
C(B,v,w)},!1)})})();
