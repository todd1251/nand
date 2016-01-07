(function(){function e(){this.commands=[]}function v(a,b,c,f,e){this.model=a;this.width=b;this.height=c;this.heavyStrokeWidth=f;this.lightStrokeWidth=e;this.labels=[]}function g(a){this.logic=a;this.inputs=[]}function h(a){this.value=a}function d(a,b){this.inputs=a;this.output=b}function l(a){return!a.reduce(function(a,c){return a&&c})}e.prototype.moveTo=function(a,b){this.commands.push("M"+a+","+b);return this};e.prototype.lineTo=function(a,b){this.commands.push("L"+a+","+b);return this};e.prototype.arc=
function(a,b,c,f,e,k,d){this.commands.push("A"+a+","+b+" "+c+" "+f+" "+e+" "+k+","+d);return this};e.prototype.close=function(){this.commands.push("Z");return this};e.prototype.toPath=function(a){return a.path(this.commands.join(" "))};v.prototype.render=function(a,b,c){var f=this.width/2;(new e).moveTo(a,b).lineTo(a+f,b).arc(1,1,0,0,1,a+f,b+this.height).lineTo(a,b+this.height).close().toPath(c).attr("stroke-width",this.heavyStrokeWidth);var d=.05*this.width,k=this.height/2,f=a+f+k+d+this.heavyStrokeWidth/
2,k=b+k;c.circle(f,k,d).attr("stroke-width",this.lightStrokeWidth);var n=.2*this.height,m=.3*this.width;(new e).moveTo(a,b+n).lineTo(a-m,b+n).toPath(c).attr("stroke-width",this.lightStrokeWidth);c.circle(a-m,b+n,7.5).attr("fill","white");this.labels[0]=c.text(a-m,b+n,this.model.inputs[0]);(new e).moveTo(a,b+this.height-n).lineTo(a-m,b+this.height-n).toPath(c).attr("stroke-width",this.lightStrokeWidth);c.circle(a-m,b+this.height-n,7.5).attr("fill","white");this.labels[1]=c.text(a-m,b+this.height-n,
this.model.inputs[1]);this.outputWire={x:f+m,y:k};(new e).moveTo(f+d,k).lineTo(f+m,k).toPath(c).attr("stroke-width",this.lightStrokeWidth);null!=this.model.output&&(c.circle(f+m,k,7.5).attr("fill","white"),this.labels[2]=c.text(f+m,k,this.model.output))};g.prototype.inputs=function(a){this.inputs=a};g.prototype.evaluate=function(){if(2>this.inputs.length)throw"inputs";var a=[];this.inputs.map(function(b){a.push(b.evaluate())});return this.logic(a)};h.prototype.evaluate=function(){return this.value};
window.addEventListener("load",function(){function a(){0>p?p=0:3<p&&(p=3);document.getElementById("time").textContent="t = "+p;var g=new d(["?","?"],null),q=new d(["?","?"],null),h=new d(["?","?"],"?"),r=new d(["?","?"],null),u=new d(["?","?"],null),t=new d(["?","?"],null);0<=p&&(q=new d([y.inputs[0].evaluate()?"1":"0",y.inputs[1].evaluate()?"1":"0"],null),r=new d([z.inputs[0].evaluate()?"1":"0",z.inputs[1].evaluate()?"1":"0"],null),t=new d([A.inputs[0].evaluate()?"1":"0",A.inputs[1].evaluate()?"1":
"0"],null));1<=p&&(g=new d([B.inputs[0].evaluate()?"1":"0",B.inputs[1].evaluate()?"1":"0"],null),u=new d([C.inputs[0].evaluate()?"1":"0",C.inputs[1].evaluate()?"1":"0"],null));2<=p&&(h=new d([w.inputs[0].evaluate()?"1":"0",w.inputs[1].evaluate()?"1":"0"],"?"));3<=p&&(h=new d([w.inputs[0].evaluate()?"1":"0",w.inputs[1].evaluate()?"1":"0"],w.evaluate()?"1":"0"));b.clear();var g=new v(g,60,40,2,1.25),q=new v(q,60,40,2,1.25),h=new v(h,60,40,2,1.25),r=new v(r,60,40,2,1.25),u=new v(u,60,40,2,1.25),t=new v(t,
60,40,2,1.25),l=b.width/2-g.width/2,x=(b.height-50)/2-g.height/2;t.render(l-90,x+12+80,b);(new e).moveTo(t.outputWire.x,t.outputWire.y).lineTo(t.outputWire.x,t.outputWire.y-20).toPath(b);q.render(l-90,x-12-15,b);r.render(l-90,x+12+15,b);(new e).moveTo(q.outputWire.x,q.outputWire.y).lineTo(q.outputWire.x,q.outputWire.y+15).toPath(b);(new e).moveTo(r.outputWire.x,r.outputWire.y).lineTo(r.outputWire.x,r.outputWire.y-15).toPath(b);g.render(l,x,b);u.render(l,x+12+50,b);(new e).moveTo(u.outputWire.x,u.outputWire.y).lineTo(u.outputWire.x,
u.outputWire.y-30).toPath(b);h.render(l+90,x+12,b);q.labels[0].click(function(){c.value="0"==this.attr("text");a()});q.labels[1].click(function(){f.value="0"==this.attr("text");a()});r.labels[0].click(function(){D.value="0"==this.attr("text");a()});r.labels[1].click(function(){k.value="0"==this.attr("text");a()});u.labels[0].click(function(){n.value="0"==this.attr("text");a()});t.labels[0].click(function(){m.value="0"==this.attr("text");a()});t.labels[1].click(function(){E.value="0"==this.attr("text");
a()})}var b=new Raphael(0,50,window.innerWidth,window.innerHeight-50),c=new h(!0),f=new h(!0),D=new h(!0),k=new h(!0),n=new h(!0),m=new h(!0),E=new h(!0),B=new g(l),y=new g(l),w=new g(l),z=new g(l),C=new g(l),A=new g(l);B.inputs=[y,z];y.inputs=[c,f];w.inputs=[B,C];z.inputs=[D,k];C.inputs=[n,A];A.inputs=[m,E];var p=0;a();document.getElementById("forward").addEventListener("click",function(){p++;a()},!1);document.getElementById("backward").addEventListener("click",function(){p--;a()},!1)})})();
