function render(){paper.project.activeLayer.removeChildren();var a=new paper.Path({segments:[{x:0,y:0},{x:40,y:0},new paper.Segment({x:65,y:25},{x:0,y:-25},{x:0,y:25}),{x:40,y:50},{x:0,y:50}],closed:!0,strokeWidth:1.5,strokeColor:"black",fillColor:"white"}),b=new paper.Path.Circle({center:{x:70,y:25},radius:5,strokeWidth:1.25,strokeColor:"black",fillColor:"white"});(new paper.Group([a,b])).position={x:100,y:100}}
window.addEventListener("load",function(){paper.setup(document.getElementById("paper"));paper.view.onFrame=function(a){paper.view.draw()};paper.view.onResize=function(a){render()};render()});
