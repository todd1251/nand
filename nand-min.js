var NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var p=this.model.heavyStrokeWidth,d=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0];this.paths[0]=(new b.PathBuilder).moveTo(f,e).lineTo(f+k,e).arc(1,1,0,0,1,f+k,e+this.model.height).lineTo(f,e+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":p*(g?.5:1),"stroke-dasharray":g?
"-":""}).drag(b.makeMove(this),b.start,b.up(this));var g=.05*this.model.width,p=f+k+l+g+p/2,l=e+l,k=.2*this.model.height,h=.3*this.model.width;this.paths[2]=(new b.PathBuilder).moveTo(f,e+k).lineTo(f-h,e+k).toPath(a).attr("stroke-width",d);var m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-h,e+k,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-h,e+k,this.model.inputs[0]).attr("stroke",m);this.labels[0].node.setAttribute("class",
"intermediate");this.paths[3]=(new b.PathBuilder).moveTo(f,e+this.model.height-k).lineTo(f-h,e+this.model.height-k).toPath(a).attr("stroke-width",d);m="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(f-h,e+this.model.height-k,7.5).attr("fill","white").attr("stroke",m);this.labels[1]=a.text(f-h,e+this.model.height-k,this.model.inputs[1]).attr("stroke",m);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:p+h,y:l};this.outlines[3]=
(new b.PathBuilder).moveTo(p+g,l).lineTo(p+h,l).toPath(a).attr("stroke-width",d);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(p+h,l,7.5).attr("fill","white").attr("stroke",m),this.labels[2]=a.text(p+h,l,this.model.output).attr("stroke",m),this.labels[2].node.setAttribute("class","intermediate"))};b.AndView=d;return b}(NAND||{});NAND=function(b){function d(a){this.id=a;this.inputs=[];this.outputs=[];this.wires=[]}d.prototype.traverse=function(a){this.inputs.map(function(b,d){b.traverse(a,d,0)})};d.prototype.layout=function(a,p){var d=null,k=null;this.traverse(function(a,e,f){if(null==d||e>d)d=e;if(null==k||f>k)k=f});var l=[];this.traverse(function(a,e,f){a.seen||(a.seen=!0,l.push({node:a,row:e,column:f,dx:0,dy:0}))});for(var f=0,e=0;e<l.length;e++){var g=l[e],h=g.node;g.row+=f;if(null!=h.inputs){var m=function(a){if(null!=
a)for(var e=0;e<l.length;e++){var f=l[e];if(f.node.id==a.id)return f}return null},n=m(h.inputs[0]),h=m(h.inputs[1]);null!=n&&null!=h?(g.row=Math.round((n.row+h.row)/2),f++):null!=n&&null==h&&(g.row=n.row)}}for(h=!0;h;)for(h=!1,f=[],e=0;e<l.length;e++){g=l[e];for(n=0;n<f.length;n++)if(f[n].row==g.row&&f[n].column==g.column&&f[n].node.id!=g.node.id){g.column++;h=!0;break}if(h)break;f.push(g)}for(var q=this,t=[],e=0;e<l.length;e++){g=l[e];h=g.node;f=null;switch(h.kind){case "source":n={viewModel:g,value:g.node.value?
"1":"0",click:function(){this.node.toggle();this.model.value=this.node.value?"1":"0";this.update();p(q,t,k)}};f=new b.SourceView(h,n);g.options=n;break;case "sink":n={viewModel:g,value:h.evaluate()?"1":"0"};f=new b.SinkView(n);g.options=n;break;case "delay":f=new b.DelayView({viewModel:g});break;case "fanout":f=new b.FanOutView({viewModel:g,node:h});break;case "gate":n={viewModel:g,id:h.id,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:"not"==h.gate?[h.inputs[0].evaluate()?"1":
"0"]:[h.inputs[0].evaluate()?"1":"0",h.inputs[1].evaluate()?"1":"0"],output:h.evaluate()?"1":"0"};g.options=n;switch(h.gate){case "not":f=new b.GateView(new b.NotView(n));break;case "nand":f=new b.NandView(n);break;case "and":f=new b.GateView(new b.AndView(n));break;case "nor":f=new b.NorView(n);break;case "or":f=new b.OrView(n);break;case "xor":f=new b.GateView(new b.XorView(n));break;default:throw"gate";}break;default:throw"kind";}null!=f&&t.push({node:h,view:f})}m=n=null;for(e=0;e<t.length;e++){f=
t[e].view;g=f.bounds();if(null==n||g.width>n)n=g.width;if(null==m||g.height>m)m=g.height}var n=n+10,m=m+10,v=a.width/2-(k-1)*n/2,u=a.height/2-(d-1)*m/2;this.dx=n;this.dy=m;this.cx=v;this.cy=u;for(e=0;e<t.length;e++)h=t[e].node,f=t[e].view,g=f.model.viewModel,h=u+g.row*m,f.model.x=v+g.column*n,f.model.y=h,f.render(a);this.models=l;this.layoutWires(a);return{nodeViews:t,maxDepth:k}};d.prototype.layoutWires=function(a){for(var p=0;p<this.wires.length;p++)this.wires[p].remove();this.wires=[];for(var d=
this.dx,k=this.dy,l=this.cx,f=this.cy,e=this,p=0;p<this.models.length;p++){var g=this.models[p],h=g.node;null!=h.outputs&&h.outputs.map(function(p){for(var h=[],q=0;q<e.models.length;q++){var t=e.models[q];t.node.id==p.id&&h.push(t)}if(1!=h.length)throw console.log(h),"outputs";p=h[0];var h=g.options?g.options.x+g.dx:l+g.column*d,q=g.options?g.options.y+g.dy:f+g.row*k,t=p.options?p.options.x+p.dx:l+p.column*d,v=p.options?p.options.y+p.dy:f+p.row*k,u="gate"==p.node.kind?-48:0;p="gate"==p.node.kind?
-5:0;e.wires.push((new b.PathBuilder).moveTo(h,q).lineTo(t+u,q).lineTo(t+u,v<q?v-p:v+p).toPath(a).toBack())})}};d.prototype.layout2=function(a,p){var d=a.width/2,k=a.height/2,l=c.Expression.fromConstant(0),f=c.Expression.fromConstant(a.width),e=new c.Variable({name:"source1x"}),g=new c.Variable({name:"gate1x"}),h=new c.Variable({name:"sink1x"});(new c.SimplexSolver).addConstraint(new c.Inequality(e,c.GEQ,l)).addConstraint(new c.Inequality(g,c.GEQ,l)).addConstraint(new c.Inequality(h,c.GEQ,l)).addConstraint(new c.Inequality(e,
c.LEQ,f)).addConstraint(new c.Inequality(g,c.LEQ,f)).addConstraint(new c.Inequality(h,c.LEQ,f)).addConstraint(new c.Inequality(c.plus(e,80),c.LEQ,g)).addConstraint(new c.Inequality(c.plus(g,80),c.LEQ,h)).solve();console.log("source1x = "+e.value);console.log("gate1x = "+g.value);console.log("sink1x = "+h.value);var l=h.value-e.value,m=[],n=0,q=[];this.traverse(function(a,e,f){a.seen||(a.seen=!0,q.push({node:a,dx:0,dy:0}));if(null==n||f>n)n=f});var f=q[0],t=f.node,v=this,e={viewModel:f,value:f.node.value?
"1":"0",click:function(){this.node.toggle();this.model.value=this.node.value?"1":"0";this.update();p(v,m,n)},x:d-l/2+e.value,y:k},u=new b.SourceView(t,e);u.render(a);f.options=e;m.push({node:t,view:u});f=q[1];t=f.node;e={viewModel:f,id:t.id,width:60,height:40,heavyStrokeWidth:2,lightStrokeWidth:1.25,inputs:[t.inputs[0].evaluate()?"1":"0"],output:t.evaluate()?"1":"0",x:d-l/2+g.value,y:k};u=new b.GateView(new b.NotView(e));u.render(a);f.options=e;m.push({node:t,view:u});f=q[2];t=f.node;e={viewModel:f,
value:t.evaluate()?"1":"0",x:d-l/2+h.value,y:k};u=new b.SinkView(e);u.render(a);f.options=e;m.push({node:t,view:u});this.models=q;this.layoutWires(a);return{nodeViews:m,maxDepth:n}};b.Circuit=d;return b}(NAND||{});NAND=function(b){function d(a){this.id=a;this.kind="delay";this.inputs=[];this.outputs=[]}d.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};d.prototype.traverse=function(a,b,d){a(this,b,d);this.outputs.map(function(k){k.traverse(a,b,d+1)})};d.prototype.evaluate=function(){return this.inputs[0].evaluate()};b.Delay=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a}d.prototype.render=function(a){};b.DelayView=d;return b}(NAND||{});NAND=function(b){function d(a){this.id=a;this.kind="fanout";this.inputs=[];this.outputs=[]}d.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};d.prototype.traverse=function(a,b,d){a(this,b,d);this.outputs.map(function(k){k.traverse(a,b,d+1)})};d.prototype.evaluate=function(){return this.inputs[0].evaluate()};b.FanOut=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a}d.prototype.render=function(a){};d.prototype.bounds=function(){return{width:10,height:10}};b.FanOutView=d;return b}(NAND||{});NAND=function(b){function d(a,b,d){this.id=a;this.kind="gate";this.gate=b;this.logic=d;this.inputs=[];this.outputs=[]}d.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};d.prototype.traverse=function(a,b,d){a(this,b,d);this.outputs.map(function(k){k.traverse(a,b,d+1)})};d.prototype.evaluate=function(){if("not"==this.gate&&1!=this.inputs.length||"not"!=this.gate&&2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};
b.Gate=d;return b}(NAND||{});NAND=function(b){function d(a){this.delegate=a;this.model=a.model}d.prototype.render=function(a){this.delegate.render(a)};d.prototype.update=function(){for(var a=this.delegate.model.inputs,b=this.delegate.model.output,d=this.delegate.labels,k=this.delegate.outlines,l=this.delegate.paths,f="?"==a[0],e=0;e<a.length;e++){var g="?"==a[e]?"black":"0"==a[e]?"#a00":"#0a0";d[e].attr("text",a[e]).attr("stroke",g);k[e].attr("stroke",g)}d[a.length].attr("text",b).attr("stroke","?"==b?"black":"0"==b?"#a00":"#0a0");
k[a.length].attr("stroke","?"==b?"black":"0"==b?"#a00":"#0a0");for(e=0;e<l.length;e++)null!=l[e]&&l[e].attr("stroke-dasharray",f?"-":"")};d.prototype.bounds=function(){return{width:1.4*this.delegate.model.width,height:1.1*this.delegate.model.height}};b.GateView=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var b=this.model.heavyStrokeWidth,d=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0];this.paths[0]=(new PathBuilder).moveTo(f,e).lineTo(f+k,e).arc(1,1,0,0,1,f+k,e+this.model.height).lineTo(f,e+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":b*(g?.5:1),"stroke-dasharray":g?
"-":""});var h=.05*this.model.width,b=f+k+l+h+b/2,l=e+l;a.circle(b,l,h).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});g=.2*this.model.height;k=.3*this.model.width;this.paths[2]=(new PathBuilder).moveTo(f,e+g).lineTo(f-k,e+g).toPath(a).attr("stroke-width",d);var m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-k,e+g,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-k,e+g,this.model.inputs[0]).attr("stroke",
m);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new PathBuilder).moveTo(f,e+this.model.height-g).lineTo(f-k,e+this.model.height-g).toPath(a).attr("stroke-width",d);m="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(f-k,e+this.model.height-g,7.5).attr("fill","white").attr("stroke",m);this.labels[1]=a.text(f-k,e+this.model.height-g,this.model.inputs[1]).attr("stroke",m);this.labels[1].node.setAttribute("class","intermediate");
this.outputWire={x:b+k,y:l};(new PathBuilder).moveTo(b+h,l).lineTo(b+k,l).toPath(a).attr("stroke-width",d);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(b+k,l,7.5).attr("fill","white").attr("stroke",m),this.labels[2]=a.text(b+k,l,this.model.output).attr("stroke",m),this.labels[2].node.setAttribute("class","intermediate"))};d.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":
"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",
a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};b.NandView=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var d=this.model.heavyStrokeWidth,r=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0],h=.4*this.model.width,m=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new b.PathBuilder).moveTo(f,e).lineTo(f+h,e).arc(m,m,0,0,1,f+this.model.width-n,e+l).arc(m,m,0,0,1,f+h,e+this.model.height).lineTo(f,
e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});this.paths[1]=(new b.PathBuilder).moveTo(f,e).arc(h,h,0,0,1,f,e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});h=.05*this.model.width;d=f+k+l+h+d/2;l=e+l;a.circle(d,l,h).attr({fill:"white","stroke-width":r*(g?.5:1),"stroke-dasharray":g?"-":""});g=.2*this.model.height;k=.3*this.model.width;this.paths[2]=(new b.PathBuilder).moveTo(f+k-1-.5*
k,e+g).lineTo(f-k,e+g).toPath(a).attr("stroke-width",r);m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-k,e+g,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-k,e+g,this.model.inputs[0]).attr("stroke",m);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new b.PathBuilder).moveTo(f+k-1-.5*k,e+this.model.height-g).lineTo(f-k,e+this.model.height-g).toPath(a).attr("stroke-width",r);m="?"==this.model.inputs[1]?
"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(f-k,e+this.model.height-g,7.5).attr("fill","white").attr("stroke",m);this.labels[1]=a.text(f-k,e+this.model.height-g,this.model.inputs[1]).attr("stroke",m);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:d+k,y:l};(new b.PathBuilder).moveTo(d+h,l).lineTo(d+k,l).toPath(a).attr("stroke-width",r);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=
a.circle(d+k,l,7.5).attr("fill","white").attr("stroke",m),this.labels[2]=a.text(d+k,l,this.model.output).attr("stroke",m),this.labels[2].node.setAttribute("class","intermediate"))};d.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",
a);this.outlines[1].attr("stroke",a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};b.NorView=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var d=this.model.heavyStrokeWidth,r=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0];this.paths[0]=(new b.PathBuilder).moveTo(f,e).lineTo(f+this.model.width-20,e+l).lineTo(f,e+this.model.height).close().toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""}).drag(b.makeMove(this),
b.start,b.up(this));var h=.05*this.model.width,d=f+k+l+h+d/2-11,k=e+l;this.paths[1]=a.circle(d,k,h).attr({fill:"white","stroke-width":r*(g?.5:1),"stroke-dasharray":g?"-":""});g=.3*this.model.width;this.paths[2]=(new b.PathBuilder).moveTo(f,e+l).lineTo(f-g,e+l).toPath(a).attr("stroke-width",r);var m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-g,e+l,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-g,e+l,this.model.inputs[0]).attr("stroke",
m);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new b.PathBuilder).moveTo(d+h,k).lineTo(d+g,k).toPath(a).attr("stroke-width",r);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[1]=a.circle(d+g,k,7.5).attr("fill","white").attr("stroke",m),this.labels[1]=a.text(d+g,k,this.model.output).attr("stroke",m),this.labels[1].node.setAttribute("class","intermediate"))};b.NotView=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var d=this.model.heavyStrokeWidth,r=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0],h=.4*this.model.width,m=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new b.PathBuilder).moveTo(f,e).lineTo(f+h,e).arc(m,m,0,0,1,f+this.model.width-n,e+l).arc(m,m,0,0,1,f+h,e+this.model.height).lineTo(f,
e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""}).drag(b.makeMove(this),b.start,b.up(this));this.paths[1]=(new b.PathBuilder).moveTo(f,e).arc(h,h,0,0,1,f,e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});g=.05*this.model.width;d=f+k+l+g+d/2;l=e+l;k=.2*this.model.height;h=.3*this.model.width;this.paths[2]=(new b.PathBuilder).moveTo(f+h-1-.5*h,e+k).lineTo(f-h,e+k).toPath(a).attr("stroke-width",
r);m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-h,e+k,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-h,e+k,this.model.inputs[0]).attr("stroke",m);this.labels[0].node.setAttribute("class","intermediate");this.paths[3]=(new b.PathBuilder).moveTo(f+h-1-.5*h,e+this.model.height-k).lineTo(f-h,e+this.model.height-k).toPath(a).attr("stroke-width",r);m="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=
a.circle(f-h,e+this.model.height-k,7.5).attr("fill","white").attr("stroke",m);this.labels[1]=a.text(f-h,e+this.model.height-k,this.model.inputs[1]).attr("stroke",m);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:d+h,y:l};this.outlines[3]=(new b.PathBuilder).moveTo(d+g,l).lineTo(d+h,l).toPath(a).attr("stroke-width",r);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(d+h,l,7.5).attr("fill","white").attr("stroke",
m),this.labels[2]=a.text(d+h,l,this.model.output).attr("stroke",m),this.labels[2].node.setAttribute("class","intermediate"))};d.prototype.update=function(){var a="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.labels[0].attr("text",this.model.inputs[0]).attr("stroke",a);this.outlines[0].attr("stroke",a);a="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.labels[1].attr("text",this.model.inputs[1]).attr("stroke",a);this.outlines[1].attr("stroke",
a);a="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0";this.labels[2].attr("text",this.model.output).attr("stroke",a);this.outlines[2].attr("stroke",a);a="?"==this.model.inputs[0];this.paths[0].attr("stroke-dasharray",a?"-":"");this.paths[1].attr("stroke-dasharray",a?"-":"");this.paths[2].attr("stroke-dasharray",a?"-":"");this.paths[3].attr("stroke-dasharray",a?"-":"")};b.OrView=d;return b}(NAND||{});NAND=function(b){function d(){this.commands=[]}d.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};d.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};d.prototype.arc=function(a,b,d,k,l,f,e){this.commands.push("A"+a+","+b+" "+d+" "+k+" "+l+" "+f+","+e);return this};d.prototype.close=function(){this.commands.push("Z");return this};d.prototype.toPath=function(a){return a.path(this.commands.join(" "))};b.PathBuilder=d;return b}(NAND||{});NAND=function(b){function d(a){this.id=a;this.kind="sink";this.inputs=[]}d.prototype.connect=function(a){this.inputs.push(a);a.outputs.push(this)};d.prototype.traverse=function(a,b,d){a(this,b,d)};d.prototype.evaluate=function(){return this.inputs[0].evaluate()};b.Sink=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.paths=[];this.outlines=[];this.labels=[]}d.prototype.render=function(a){var d=this.model.value,r=this.model.x,k=this.model.y,l="?"==d?"black":"0"==d?"#a00":"#0a0";this.outlines[0]=a.rect(r-7,k-7,14,14).attr("stroke",l).attr("fill","white").drag(b.makeMove(this),b.start,b.up(this));this.labels[0]=a.text(r,k,d).attr("stroke",l).drag(b.makeMove(this),b.start,b.up(this));this.labels[0].node.setAttribute("class","output")};d.prototype.update=function(){var a=
this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.labels[0].attr("text",a).attr("stroke",b);this.outlines[0].attr("stroke",b)};d.prototype.bounds=function(){return{width:14,height:14}};b.SinkView=d;return b}(NAND||{});NAND=function(b){function d(a,b){this.id=a;this.kind="source";this.value=b;this.outputs=[]}d.prototype.connect=function(a){this.outputs.push(a);a.inputs.push(this)};d.prototype.traverse=function(a,b,d){a(this,b,d);this.outputs.map(function(k){k.traverse(a,b,d+1)})};d.prototype.evaluate=function(){return this.value};d.prototype.toggle=function(){this.value=!this.value};b.Source=d;return b}(NAND||{});NAND=function(b){function d(a,b){this.node=a;this.model=b;this.paths=[];this.labels=[];this.outlines=[]}d.prototype.render=function(a){var d=this.model.value,r=this.model.x,k=this.model.y,l="?"==d?"black":"0"==d?"#a00":"#0a0";this.outlines[0]=a.rect(r-7,k-7,14,14).attr("stroke",l).attr("fill","white").drag(b.makeMove(this),b.start,b.up(this));this.labels[0]=a.text(r,k,d).attr("stroke",l).click(this.model.click.bind(this)).drag(b.makeMove(this),b.start,b.up(this));this.labels[0].node.setAttribute("class",
"input")};d.prototype.update=function(){var a=this.model.value,b="?"==a?"black":"0"==a?"#a00":"#0a0";this.labels[0].attr("text",a).attr("stroke",b);this.outlines[0].attr("stroke",b)};d.prototype.bounds=function(){return{width:14,height:14}};b.SourceView=d;return b}(NAND||{});NAND=function(b){function d(a){this.model=a;this.outlines=[];this.labels=[];this.paths=[]}d.prototype.render=function(a){var d=this.model.heavyStrokeWidth,r=this.model.lightStrokeWidth,k=this.model.width/2,l=this.model.height/2,f=this.model.x-k,e=this.model.y-l,g="?"==this.model.inputs[0],h=.4*this.model.width,m=2*this.model.width/3,n=.15*this.model.width;this.paths[0]=(new b.PathBuilder).moveTo(f,e).lineTo(f+h,e).arc(m,m,0,0,1,f+this.model.width-n,e+l).arc(m,m,0,0,1,f+h,e+this.model.height).lineTo(f,
e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""}).drag(b.makeMove(this),b.start,b.up(this));this.paths[1]=(new b.PathBuilder).moveTo(f,e).arc(h,h,0,0,1,f,e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});this.paths[2]=(new b.PathBuilder).moveTo(f-5,e).arc(h,h,0,0,1,f-5,e+this.model.height).toPath(a).attr({fill:"white","stroke-width":d*(g?.5:1),"stroke-dasharray":g?"-":""});g=.05*this.model.width;
d=f+k+l+g+d/2;l=e+l;k=.2*this.model.height;h=.3*this.model.width;this.paths[3]=(new b.PathBuilder).moveTo(f+h-1-.5*h,e+k).lineTo(f-h,e+k).toPath(a).attr("stroke-width",r);m="?"==this.model.inputs[0]?"black":"0"==this.model.inputs[0]?"#a00":"#0a0";this.outlines[0]=a.circle(f-h,e+k,7.5).attr("fill","white").attr("stroke",m);this.labels[0]=a.text(f-h,e+k,this.model.inputs[0]).attr("stroke",m);this.labels[0].node.setAttribute("class","intermediate");this.paths[4]=(new b.PathBuilder).moveTo(f+h-1-.5*h,
e+this.model.height-k).lineTo(f-h,e+this.model.height-k).toPath(a).attr("stroke-width",r);m="?"==this.model.inputs[1]?"black":"0"==this.model.inputs[1]?"#a00":"#0a0";this.outlines[1]=a.circle(f-h,e+this.model.height-k,7.5).attr("fill","white").attr("stroke",m);this.labels[1]=a.text(f-h,e+this.model.height-k,this.model.inputs[1]).attr("stroke",m);this.labels[1].node.setAttribute("class","intermediate");this.outputWire={x:d+h,y:l};this.outlines[3]=(new b.PathBuilder).moveTo(d+g,l).lineTo(d+h,l).toPath(a).attr("stroke-width",
r);null!=this.model.output&&(m="?"==this.model.output?"black":"0"==this.model.output?"#a00":"#0a0",this.outlines[2]=a.circle(d+h,l,7.5).attr("fill","white").attr("stroke",m),this.labels[2]=a.text(d+h,l,this.model.output).attr("stroke",m),this.labels[2].node.setAttribute("class","intermediate"))};b.XorView=d;return b}(NAND||{});NAND=function(b){function d(a){return!a[0]}function a(a){return a.reduce(function(a,b){return a&&b})}function p(a){return a.reduce(function(a,b){return a^b})}function r(a,b,d){0>e?e=0:e>=d&&(e=d-1);a.traverse(function(a,f,h){b.map(function(b){var f=b.node,g=b.view;if(f.id==a.id){var k=h>e;switch(f.kind){case "gate":f.inputs.map(function(a,b){g.model.inputs[b]=k?"?":a.evaluate()?"1":"0"});g.model.output=k?"?":f.evaluate()?"1":"0";g.update();break;case "sink":g.model.value=e<d-1?"?":f.evaluate()?"1":
"0",g.update()}}})});document.getElementById("time").textContent="t = "+e}function k(k){l=new Raphael(0,0,window.innerWidth,window.innerHeight);var q=document.getElementById("controls");q.style.left=l.width/2-q.clientWidth/2+"px";q.style.top=l.height/2-q.clientHeight/2-150+"px";var q=0,t=new b.Source(q++,!1);new b.Source(q++,!1);new b.Source(q++,!1);var v=new b.Sink(q++);new b.Sink(q++);new b.Sink(q++);new b.Delay(q++);new b.Delay(q++);new b.Delay(q++);new b.FanOut(q++);new b.FanOut(q++);new b.FanOut(q++);
var u=new b.Gate(q++,"not",d);new b.Gate(q++,"and",a);new b.Gate(q++,"xor",p);t.connect(u);u.connect(v);f=new b.Circuit(q++);f.inputs=[t];f.outputs=[v];g=f.layout2(l,r);m=g.nodeViews;h=g.maxDepth;e=h-1;r(f,m,h);var w=document.getElementById("slider");w.max=h-1;w.value=e;k&&(document.getElementById("forward").addEventListener("click",function(){e++;r(f,m,h);w.value=e},!1),document.getElementById("backward").addEventListener("click",function(){e--;r(f,m,h);w.value=e},!1),document.getElementById("slider").addEventListener("input",
function(){e=this.value;r(f,m,h);w.value=e}))}var l,f;b.makeMove=function(a){return function(b,d){for(var e=0;e<a.paths.length;e++){var g=a.paths[e];null!=g&&g.translate(b-this.tx,d-this.ty)}for(e=0;e<a.labels.length;e++)g=a.labels[e],null!=g&&g.translate(b-this.tx,d-this.ty);for(e=0;e<a.outlines.length;e++)g=a.outlines[e],null!=g&&g.translate(b-this.tx,d-this.ty);this.tx=b;this.ty=d;a.model.viewModel.dx=b;a.model.viewModel.dy=d;f.layoutWires(l)}};b.start=function(){this.ty=this.tx=0};b.up=function(a){return function(){a.model.x+=
a.model.viewModel.dx;a.model.y+=a.model.viewModel.dy;a.model.viewModel.dx=0;a.model.viewModel.dy=0}};var e=0,g,h,m;window.addEventListener("load",function(){k(!0)});window.addEventListener("resize",function(){l.clear();k(!1)});return b}(NAND||{});
