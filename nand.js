(function(){function m(){this.commands=[]}function v(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function q(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function r(a,b,f){this.id=a;this.kind="gate";this.gate=b;this.logic=f;this.inputs=[];this.outputs=[]}function n(a,b){this.id=a;this.kind="source";this.value=b;this.outputs=[]}function y(a){this.id=a;this.kind="sink";this.inputs=[]}function w(a){this.id=a;this.kind="delay";this.inputs=[];this.outputs=[]}function z(a){this.id=
a;this.kind="fanout";this.inputs=[];this.outputs=[]}function F(a){return!a.reduce(function(a,f){return a&&f})}function G(a){return!a.reduce(function(a,f){return a||f})}function t(a){this.model=a;this.outline=this.label=null}function u(a){this.model=a}function H(a){this.model=a}function I(a){this.model=a}function B(a){this.id=a;this.inputs=[];this.outputs=[]}function A(a,b,f){0>p?p=0:p>=f&&(p=f-1);a.traverse(function(a,h,c){b.map(function(b){var e=b.node,h=b.view;if(e.id==a.id){var k=c>p;switch(e.kind){case "gate":e.inputs.map(function(a,
b){h.model.inputs[b]=k?"?":a.evaluate()?"1":"0"});h.model.output=k?"?":e.evaluate()?"1":"0";h.update();break;case "sink":h.model.value=p<f-1?"?":e.evaluate()?"1":"0",h.update()}}})});document.getElementById("time").textContent="t = "+p}m.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};m.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};m.prototype.arc=function(a,b,f,g,h,c,d){this.commands.push("A"+a+","+b+" "+f+" "+g+" "+h+" "+c+","+d);return this};
m.prototype.close=function(){this.commands.push("Z");return this};m.prototype.toPath=function(a){return a.path(this.commands.join(" "))};v.prototype.render=function(a){var b=this.model.heavyStrokeWidth,f=this.model.lightStrokeWidth,g=this.model.width/2,h=this.model.height/2,c=this.model.x-g,d=this.model.y-h,e="?"==this.model.inputs[0];this.paths[0]=(new m).moveTo(c,d).lineTo(c+g,d).arc(1,1,0,0,1,c+g,d+this.model.height).lineTo(c,d+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*
(e?.5:1),"stroke-dasharray":e?"-":""});var l=.05*this.model.width,b=c+g+h+l+b/2,h=d+h;a.circle(b,h,l).attr({fill:"white","stroke-width":f*(e?.5:1),"stroke-dasharray":e?"-":""});e=.2*this.model.height;g=.3*this.model.width;this.paths[2]=(new m).moveTo(c,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",f);var k="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",k);this.labels[0]=a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",
k);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c,d+this.model.height-e).lineTo(c-g,d+this.model.height-e).toPath(a).attr("stroke-width",f);k="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",k);this.labels[1]=a.text(c-g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",k);this.labels[1].node.setAttribute("class","intermediate");this.outputWire=
{x:b+g,y:h};(new m).moveTo(b+l,h).lineTo(b+g,h).toPath(a).attr("stroke-width",f);null!=this.model.output&&(k="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",k),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",k),this.labels[2].node.setAttribute("class","intermediate"))};v.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",
this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",
a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};q.prototype.render=function(a){var b=this.model.heavyStrokeWidth,f=this.model.lightStrokeWidth,g=this.model.width/2,h=this.model.height/2,c=this.model.x-g,d=this.model.y-h,e="?"==this.model.inputs[0],l=.4*this.model.width,k=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+l,d).arc(k,k,0,0,1,c+this.model.width-n,d+h).arc(k,k,0,0,1,c+l,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white",
"stroke-width":b*(e?.5:1),"stroke-dasharray":e?"-":""});this.paths[1]=(new m).moveTo(c,d).arc(l,l,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(e?.5:1),"stroke-dasharray":e?"-":""});l=.05*this.model.width;b=c+g+h+l+b/2;h=d+h;a.circle(b,h,l).attr({fill:"white","stroke-width":f*(e?.5:1),"stroke-dasharray":e?"-":""});e=.2*this.model.height;g=.3*this.model.width;this.paths[2]=(new m).moveTo(c+g-1-.5*g,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",f);k="?"==this.model.inputs[0]?
"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",k);this.labels[0]=a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",k);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c+g-1-.5*g,d+this.model.height-e).lineTo(c-g,d+this.model.height-e).toPath(a).attr("stroke-width",f);k="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-
e,7.5).attr("fill","white").attr("stroke",k);this.labels[1]=a.text(c-g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",k);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+g,y:h};(new m).moveTo(b+l,h).lineTo(b+g,h).toPath(a).attr("stroke-width",f);null!=this.model.output&&(k="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",k),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",
k),this.labels[2].node.setAttribute("class","intermediate"))};q.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?
"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};r.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};r.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+
1)})};r.prototype.evaluate=function(){if(2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};n.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};n.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};n.prototype.evaluate=function(){return this.value};n.prototype.toggle=function(){this.value=!this.value};y.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};
y.prototype.traverse=function(a,b,f){a(this,b,f)};y.prototype.evaluate=function(){return this.inputs[0].evaluate()};w.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};w.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};w.prototype.evaluate=function(){return this.inputs[0].evaluate()};z.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};z.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,
b,f+1)})};z.prototype.evaluate=function(){return this.inputs[0].evaluate()};t.prototype.render=function(a){var b=this.model.value,f=this.model.x,g=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(f-7,g-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(f,g,b).attr("stroke",h).click(this.model.click.bind(this));this.label.node.setAttribute("class","input")};t.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",
a).attr("stroke",b);this.outline.attr("stroke",b)};u.prototype.render=function(a){var b=this.model.value,f=this.model.x,g=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(f-7,g-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(f,g,b).attr("stroke",h);this.label.node.setAttribute("class","output")};u.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",b)};
H.prototype.render=function(a){};I.prototype.render=function(a){var b=this.model.x,f=this.model.y;(new m).moveTo(b+42,f).lineTo(b+42,f+10).toPath(a)};B.prototype.traverse=function(a){this.inputs.map(function(b,f){b.traverse(a,f,0)})};B.prototype.layout=function(a){var b=[],f=null;this.traverse(function(a,e,c){e>=b.length&&(b[e]=[]);b[e][c]={node:a};if(null==f||c>f)f=c});for(var g=a.width/2-90*(b[0].length-1)/2,h=a.height/2-60*(b.length-1)/2,c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++){var e=
b[c][d],l=e.node;e.x=g+90*d;e.y=h+60*c;0<c&&b[c-1][d].node.id==l.id&&(b[c-1][d].skip=!0,null==b[c-1][d].skipCount&&(b[c-1][d].skipCount=1),e.skipCount=b[c-1][d].skipCount+1,e.x=b[c-1][d].x+e.x,e.y=b[c-1][d].y+e.y)}for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)e=b[c][d],null!=e.skipCount&&(e.x/=e.skipCount,e.y/=e.skipCount);for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)e=b[c][d],l=e.node,e.skip||null==l.outputs||l.outputs.map(function(c){for(var f=[],d=0;d<b.length;d++)for(var g=0;g<b[d].length;g++){var h=
b[d][g];h.node.id!=c.id||h.skip||f.push(h)}if(1!=f.length)throw console.log(f),"outputs";c=f[0];f="gate"==c.node.kind?-48:0;d="gate"==c.node.kind?-5:0;(new m).moveTo(e.x,e.y).lineTo(c.x+f,e.y).lineTo(c.x+f,c.y<e.y?c.y-d:c.y+d).toPath(a)});var k=this,n=[];b.map(function(b){b.map(function(b){if(!b.skip){var c=b.x,e=b.y,d=b.node;b=null;switch(d.kind){case "source":b=new t({x:c,y:e,value:d.value?"1":"0",click:function(){d.toggle();this.model.value=d.value?"1":"0";this.update();A(k,n,f)}});b.render(a);
break;case "sink":b=new u({x:c,y:e,value:d.evaluate()?"1":"0"});b.render(a);break;case "delay":b=new H({x:c,y:e});b.render(a);break;case "fanout":b=new I({x:c,y:e});b.render(a);break;case "gate":c={id:d.id,x:c,y:e,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:[d.inputs[0].evaluate()?"1":"0",d.inputs[1].evaluate()?"1":"0"],output:d.evaluate()?"1":"0"};b="nand"==d.gate?new v(c):new q(c);b.render(a);break;default:throw"kind";}null!=b&&n.push({node:d,view:b})}})});return{nodeViews:n,
maxDepth:f}};var p=0;window.addEventListener("load",function(){var a=new Raphael(0,0,window.innerWidth,window.innerHeight),b=document.getElementById("controls");b.style.left=a.width/2-b.clientWidth/2+"px";b.style.top=a.height/2-b.clientHeight/2-250+"px";var b=0,f=new n(b++,!1),g=new n(b++,!1),h=new n(b++,!1),c=new n(b++,!1),d=new n(b++,!1),e=new n(b++,!1),l=new y(b++),k=new y(b++),m=new w(b++),v=new w(b++);new w(b++);new z(b++);var q=new r(b++,"nand",F),t=new r(b++,"nor",G),u=new r(b++,"nor",G),C=
new r(b++,"nand",F);f.connect(q);g.connect(q);q.connect(t);h.connect(m);m.connect(t);t.connect(l);c.connect(u);d.connect(u);u.connect(C);e.connect(v);v.connect(C);C.connect(k);var x=new B(b++);x.inputs=[f,g,h,c,d,e];x.outputs=[l];var a=x.layout(a),D=a.nodeViews,E=a.maxDepth;A(x,D,E);document.getElementById("forward").addEventListener("click",function(){p++;A(x,D,E)},!1);document.getElementById("backward").addEventListener("click",function(){p--;A(x,D,E)},!1)})})();
