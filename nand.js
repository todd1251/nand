(function(){function m(){this.commands=[]}function x(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}function n(a,b){this.id=a;this.kind="gate";this.logic=b;this.inputs=[];this.outputs=[]}function q(a,b){this.id=a;this.kind="source";this.value=b;this.outputs=[]}function v(a){this.id=a;this.kind="sink";this.inputs=[]}function u(a){this.id=a;this.kind="delay";this.inputs=[];this.outputs=[]}function r(a){this.id=a;this.kind="fanout";this.inputs=[];this.outputs=[]}function t(a){return!a.reduce(function(a,
f){return a||f})}function y(a){this.model=a;this.outline=this.label=null}function z(a){this.model=a}function B(a){this.model=a}function C(a){this.model=a}function A(a){this.id=a;this.inputs=[];this.outputs=[]}function w(a,b,f){0>p?p=0:p>=f&&(p=f-1);a.traverse(function(a,h,c){b.map(function(b){var e=b.node,k=b.view;if(e.id==a.id){var h=c>p;switch(e.kind){case "gate":e.inputs.map(function(a,b){k.model.inputs[b]=h?"?":a.evaluate()?"1":"0"});k.model.output=h?"?":e.evaluate()?"1":"0";k.update();break;
case "sink":k.model.value=p<f-1?"?":e.evaluate()?"1":"0",k.update()}}})});document.getElementById("time").textContent="t = "+p}m.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};m.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};m.prototype.arc=function(a,b,f,g,h,c,d){this.commands.push("A"+a+","+b+" "+f+" "+g+" "+h+" "+c+","+d);return this};m.prototype.close=function(){this.commands.push("Z");return this};m.prototype.toPath=function(a){return a.path(this.commands.join(" "))};
x.prototype.render=function(a){var b=this.model.heavyStrokeWidth,f=this.model.lightStrokeWidth,g=this.model.width/2,h=this.model.height/2,c=this.model.x-g,d=this.model.y-h,e="?"==this.model.inputs[0],k=.4*this.model.width,l=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new m).moveTo(c,d).lineTo(c+k,d).arc(l,l,0,0,1,c+this.model.width-n,d+h).arc(l,l,0,0,1,c+k,d+this.model.height).lineTo(c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(e?.5:1),"stroke-dasharray":e?
"-":""});this.paths[1]=(new m).moveTo(c,d).arc(k,k,0,0,1,c,d+this.model.height).toPath(a).attr({fill:"white","stroke-width":b*(e?.5:1),"stroke-dasharray":e?"-":""});k=.05*this.model.width;b=c+g+h+k+b/2;h=d+h;a.circle(b,h,k).attr({fill:"white","stroke-width":f*(e?.5:1),"stroke-dasharray":e?"-":""});e=.2*this.model.height;g=.3*this.model.width;this.paths[2]=(new m).moveTo(c+g-1-.5*g,d+e).lineTo(c-g,d+e).toPath(a).attr("stroke-width",f);l="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":
"#0a0";this.outlines[0]=a.circle(c-g,d+e,7.5).attr("fill","white").attr("stroke",l);this.labels[0]=a.text(c-g,d+e,this.model.inputs[0]).attr("stroke",l);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new m).moveTo(c+g-1-.5*g,d+this.model.height-e).lineTo(c-g,d+this.model.height-e).toPath(a).attr("stroke-width",f);l="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(c-g,d+this.model.height-e,7.5).attr("fill","white").attr("stroke",
l);this.labels[1]=a.text(c-g,d+this.model.height-e,this.model.inputs[1]).attr("stroke",l);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:b+g,y:h};(new m).moveTo(b+k,h).lineTo(b+g,h).toPath(a).attr("stroke-width",f);null!=this.model.output&&(l="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+g,h,7.5).attr("fill","white").attr("stroke",l),this.labels[2]=a.text(b+g,h,this.model.output).attr("stroke",l),this.labels[2].node.setAttribute("class",
"intermediate"))};x.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",
this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};n.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};n.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};n.prototype.evaluate=function(){if(2>
this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};q.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};q.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};q.prototype.evaluate=function(){return this.value};q.prototype.toggle=function(){this.value=!this.value};v.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};v.prototype.traverse=function(a,
b,f){a(this,b,f)};v.prototype.evaluate=function(){return this.inputs[0].evaluate()};u.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};u.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};u.prototype.evaluate=function(){return this.inputs[0].evaluate()};r.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};r.prototype.traverse=function(a,b,f){a(this,b,f);this.outputs.map(function(g){g.traverse(a,b,f+1)})};r.prototype.evaluate=
function(){return this.inputs[0].evaluate()};y.prototype.render=function(a){var b=this.model.value,f=this.model.x,g=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(f-7,g-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(f,g,b).attr("stroke",h).click(this.model.click.bind(this));this.label.node.setAttribute("class","input")};y.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",
b)};z.prototype.render=function(a){var b=this.model.value,f=this.model.x,g=this.model.y,h="?"==b?"black":"0"==b?"#a00":"#0a0";this.outline=a.rect(f-7,g-7,14,14).attr("stroke",h).attr("fill","white");this.label=a.text(f,g,b).attr("stroke",h);this.label.node.setAttribute("class","output")};z.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.label.attr("text",a).attr("stroke",b);this.outline.attr("stroke",b)};B.prototype.render=function(a){};C.prototype.render=
function(a){var b=this.model.x,f=this.model.y;(new m).moveTo(b+42,f).lineTo(b+42,f+10).toPath(a)};A.prototype.traverse=function(a){this.inputs.map(function(b,f){b.traverse(a,f,0)})};A.prototype.layout=function(a){var b=[],f=null;this.traverse(function(a,e,c){e>=b.length&&(b[e]=[]);b[e][c]={node:a};if(null==f||c>f)f=c});for(var g=a.width/2-90*(b[0].length-1)/2,h=a.height/2-60*(b.length-1)/2,c=0;c<b.length;c++)for(var d=0;d<b[c].length;d++){var e=b[c][d],k=e.node;e.x=g+90*d;e.y=h+60*c;0<c&&b[c-1][d].node.id==
k.id&&(b[c-1][d].skip=!0,null==b[c-1][d].skipCount&&(b[c-1][d].skipCount=1),e.skipCount=b[c-1][d].skipCount+1,e.x=b[c-1][d].x+e.x,e.y=b[c-1][d].y+e.y)}for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)e=b[c][d],null!=e.skipCount&&(e.x/=e.skipCount,e.y/=e.skipCount);for(c=0;c<b.length;c++)for(d=0;d<b[c].length;d++)e=b[c][d],k=e.node,e.skip||null==k.outputs||k.outputs.map(function(c){for(var f=[],d=0;d<b.length;d++)for(var g=0;g<b[d].length;g++){var h=b[d][g];h.node.id!=c.id||h.skip||f.push(h)}if(1!=
f.length)throw console.log(f),"outputs";c=f[0];f="gate"==c.node.kind?-48:0;d="gate"==c.node.kind?-5:0;(new m).moveTo(e.x,e.y).lineTo(c.x+f,e.y).lineTo(c.x+f,c.y<e.y?c.y-d:c.y+d).toPath(a)});var l=this,n=[];b.map(function(b){b.map(function(b){if(!b.skip){var c=b.x,e=b.y,d=b.node;b=null;switch(d.kind){case "source":b=new y({x:c,y:e,value:d.value?"1":"0",click:function(){d.toggle();this.model.value=d.value?"1":"0";this.update();w(l,n,f)}});b.render(a);break;case "sink":b=new z({x:c,y:e,value:d.evaluate()?
"1":"0"});b.render(a);break;case "delay":b=new B({x:c,y:e});b.render(a);break;case "fanout":b=new C({x:c,y:e});b.render(a);break;case "gate":b=new x({id:d.id,x:c,y:e,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:[d.inputs[0].evaluate()?"1":"0",d.inputs[1].evaluate()?"1":"0"],output:d.evaluate()?"1":"0"});b.render(a);break;default:throw"kind";}null!=b&&n.push({node:d,view:b})}})});return{nodeViews:n,maxDepth:f}};var p=0;window.addEventListener("load",function(){var a=new Raphael(0,
0,window.innerWidth,window.innerHeight),b=document.getElementById("controls");b.style.left=a.width/2-b.clientWidth/2+"px";b.style.top=a.height/2-b.clientHeight/2-250+"px";var b=0,f=new q(b++,!1),g=new q(b++,!1);new q(b++,!1);new q(b++,!1);var h=new v(b++);new u(b++);new u(b++);var c=new r(b++);new r(b++);new r(b++);var d=new n(b++,t);new n(b++,t);new n(b++,t);new n(b++,t);new n(b++,t);var e=new n(b++,t);f.connect(d);g.connect(d);d.connect(c);c.connect(e);c.connect(e);e.connect(h);var k=new A(b++);
k.inputs=[f,g];k.outputs=[h];var a=k.layout(a),l=a.nodeViews,m=a.maxDepth;w(k,l,m);document.getElementById("forward").addEventListener("click",function(){p++;w(k,l,m)},!1);document.getElementById("backward").addEventListener("click",function(){p--;w(k,l,m)},!1)})})();
