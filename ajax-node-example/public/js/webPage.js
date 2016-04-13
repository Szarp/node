function createGraph(){
    //var getLabel=getMinLabel();//min max medium
    var el=document.getElementById("radioItem1_fdGraph");
    x = el.clientHeight;
    y = el.clientWidth;   
    min=20;
    max=30;
    style='height:'+x+'px';
    //elements=[labelY(x,y),labelX(max,min,y),minMaxText(max,min,y)];
    elements="";
    elements+=createSvg.group('grid',createGrids(x,y));
       
       elements+=createSvg.group('labelY',labelY(x,y));
       elements+=createSvg.group('labelY',labelX(25,20,y));
       elements+=createSvg.group('text',minMaxText(25,20,x,y));
       //console.log(text);
       
       text=createSvg.svg(style,elements);
       el.innerHTML=text;
    
      //createSvg.tryTest();
   }
function createGrids(x,y){
    var text="";
    text+=createSvg.line(30,30,30,y-30);
    text+=createSvg.line(30,y-30,x-30,y-30);
    return text;
    
}
function labelY(x,y){
    var y1=y-30;
    var y2=30;
    text="";
    b=(x-65)/12;
    console.log(b,x);
    var c=1;
    for(var i=0;i<12;i++){
        a=c*b
        text+=createSvg.line(a+30,y1,a+30,y2);
        console.log(text);
        c++;
    }
    return text;   
}
function labelX(max,min,y){
    var x1=30;
    var x2=20;
    index=max-min+2;
    text="";
    b=(y-65)/index;
    console.log(index);
    var c=0;
    for(var i=-1;i<index;i++){
        a=c*b
        text+=createSvg.line(x1,a+35,x2,a+35);
        c++;
    }
    console.log(text);
    return text;   
}
function minMaxText(max,min,y){
    var text="";
    text+=createSvg.text(10,40,max);
    text+=createSvg.text(10,y-25,min);
    console.log(text);
    return text;
}
function cos(){
     var gridX='<g class="grid x-grid">'+line_gridX+'</g>';
     gridY='<g class="grid y-grid">'+line_gridY+'</g>';
     labelX='<g class="labels x-labels">'+splitLines+'</g>';
     labelY='<g class="labels y-labels">'+minMaxText+tickLine+'</g>';
     polyline='<polyline fill="none" stroke="#0074d9" stroke-width="5" '+points+'/>';
     svgEnd='</svg>';
}
var createSvg=(function(){
        lineElement=function (x1,y1,x2,y2){
            return '<line x1="'+x1+'" x2="'+x2+'" y1="'+y1+'" y2="'+y2+'"></line>';
        }
        svgElement=function(style,elements){
            //<g class="labels y-labels"></g>
            var text="";
            elements =[].concat(elements);
            for(var i=0;i<elements.length;i++){
                   text+=elements[i];
            }
         return '<svg style="'+style+'">'+text+'</svg>';  
            
        }
        textElement=function(x,y,msg){
            //<text x="80" y="248">5</text>
            return '<text x="'+x+'" y="'+y+'">'+msg+'</text>';
        }
        polylineElement=function(style,points){
            var text="";   
            for (var i=0;i<points.length;i++){
                   text+=points[i];
                   text+=" ";
            }
            return '<polyline '+style+' points="'+text+'"/>';    
        }
        groupElement=function(className,elements){
            //<g class="labels y-labels"></g>
            var text="";
            elements =[].concat(elements);
            for(var i=0;i<elements.length;i++){
                   text+=elements[i];
            }
         return '<g class="'+className+'">'+text+'</g>';       
        }
        //testy
        tryTest=function(){
            try{
                testGroup();
                testPolyline();
                testLine();
            }
            catch(e){console.log(e);}
        }
        testPolyline=function(){
            var a=createSvg.polylineElement( 'fill="none" stroke="#0074d9"',['10,10','20,20','30,30'])
            assertEqual('<polyline fill="none" stroke="#0074d9" points="10,10 20,20 30,30 "/>',a)  
        }
        testGroup=function(){
            var a=groupElement('labels',['<line </>','<g>']);
                b=groupElement('labels','<line </>');
            assertEqual(a,'<g class="labels"><line </><g></g>');
            assertEqual(b,'<g class="labels"><line </></g>');
        }
        testLine=function(){
            var a=lineElement(10,10,20,20)
            assertEqual(a,'<line x1="10" x2="20" y1="10" y2="20"></line>');
        }
    return{
        text:textElement,
        polyline:polylineElement,
        group:groupElement,
        svg:svgElement,
        line:lineElement,
        tryTest:tryTest,
    };
    
})();
    var assertEqual = function (val_1,val_2,msg){
	   if(val_1!==val_2){
	   throw(msg || (val_1 +" does not equal to " + val_2));
        }
    }
    var compareStrings = function (val_1,val_2){
	      throw( val_1+'  '+val_2);
       
    }
 var testy=(function(){
        tryTest=function(){
            try{
                testPolyline();
            }
            catch(e){console.log(e);}
        }
     return{
         tryTest:tryTest
     };
 })();