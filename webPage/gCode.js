  var mainBox_elements='';
    function createBlock(x,y){
        //var el=document.getElementById("mainDiv");
        var style='height="'+x+'" width="'+y+'"';
        //var b=createSvg.polyline('fill="none" stroke="#0074d9"',['0,0','0,'+y,x+','+y,x+',0','0,0']);
        var a=createSvg.svg(style,'');
        //el.innerHTML=a;
          mainBox_elements+=a;
        console.log(mainBox_elements);
        return a;
        //createSvg.addElement("mainDiv",b);
    }

    function createGraph(){
    //var getLabel=getMinLabel();//min max medium
    var el=document.getElementById("mainDiv");
    x = 50;  
    y = 50;  
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
    
    var figurePrototype=function(){
        
        this.solidFill=true;
        this.pocketHeight=2;
        this.generateColor=function(){}
    }
    function circleFigure(){
        figurePrototype.call(this);
        this.radius=30;
        this.pointsPossition=[[0,0]]
        this.drawCircle=function(){
        this.heightColor='#00cc00' //generateColor();
            return '<circle cx="'+this.pointsPossition[0][0]+'" cy="'+this.pointsPossition[0][1]+'" r="'+this.radius+'" style="stroke:#006600; fill:'+this.heightColor+'"/>'
        }
    }
    var exaplesObjects={
        fig0:{
            specie:'circle',//pierscien(annulus),line,shape
            body:{
                pocketHeight:2,//glebokosc
                pointsPossition:[[15,15]],
                radious:5,
                fillSolid:true
            }
        },
        fig1:{
            type:'line',//pierscien(annulus),line,shape
            pocketHeight:2,//glebokosc
            pointsPossition:[[0,0],[15,15]],
        },
        fig2:{
            type:'polyline',//pierscien(annulus),line,shape
            pocketHeight:2,//glebokosc
            pointsPossition:[[0,0],[0,15],[15,15],[15,0]],
            fillSolid:true
        },
        fig3:{
            type:'annulus',//pierscien(annulus),line,shape
            pocketHeight:2,//glebokosc
            pointsPossition:[[30,30]],
            //esential elemnts^
            //in case of type
            Radious:10,
            radious:5,
            fillSolid:true
        }
    }
 
        function test(){
            var a=createBlock(150,150);
            var x=new circleFigure();
            var element=x.drawCircle();
            var b=createSvg.polyline( 'fill="block" stroke="#0074d9"',['10,10','20,20','0,20'])
            createSvg.addElement('mainDiv',element);
            createSvg.addElement('mainDiv',b);
            console.log(x);
            
        }
        var scaleExapleJSON={
            divName:'svgColor',//set position
            divClass:'svgColor',
            possMax:115,
            possMin:0,
            poits:7,
            beginLine:[10,10],
            endLine:[10,125],
            lineStyle:'',
            poitsStyle:'',
            test:{
                lineName:'label',
                podzialka:'',
                onlyMinMax:false,
                pointsName:['0','','2','','4','','6','']
            }
        }
function scaleLabel(){
    this.svgHeight=115;
    this.svgWidth=115;
    this.divName='svgColor';//set position
    this.divClass='svgColor';
    this.possMax=115;
    this.possMin=0;
    this.points=7;
    this.beginLine=[10,10];
    this.endLine=[10,125];
    this.lineStyle='';
    this.poitsStyle='';
    this.chceckIfHorizontal=function(){}//pierwszy parametr jest x lub y
    this.gridElement=function(className){
        return'<g class="'+className+'">';
    }
    this.divForSVG=function(){
        return '<div class="'+this.divClass+'" id="'+this.divName+'">';
    }
    this.svg=function(){
        return '<svg height="'+this.svgHeight+'" width="'+this.svgWidth+ '">'
    }
    this.smallLines=function(){
        var x1=20;
        var max=105;
        var colors=7;
        var text="";
        var b=this.possMax/colors;
        console.log('wspolczynnik b:',b);
        var a=5;//begin na oko
        for(var i=-1;i<this.points;i++){             text+=createSvg.line(this.possMin,a,x1,a);
            a+=b;
        }
    }
}
function scaleTest(){
    var el=document.getElementById("scaleDiv");
    //console.log(el.innerHTML);
    style='height="'+115+'" width="'+105+ '" border="1px black"';
    var svg=createSvg.svg(style,'');
    var div=createSvg.div('svgColor','svgColor');
    div+=svg+'</div>';
    el.innerHTML+=div;
    console.log('test: ',div);
    //var b='<circle cx="0" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />'
    var a=createSvg.line(10,0,20,0,'"stroke:rgb(255,0,0);stroke-width:2"');
    createSvg.addElement('svgColor',a);
    //createSvg.addElement('svgColor',b)
    var x1=20;
    var max=105;
    var colors=7;
    var text="";
    var b=max/colors;
    console.log('wspolczynnik b:',b);
    var a=5;
    for(var i=-1;i<colors;i++){
        text+=createSvg.line(10,a,x1,a,'"stroke:rgb(255,0,0);stroke-width:2"');
        a+=b;
    }
    createSvg.addElement('svgColor',text)
    console.log('powstale linie:',text)
    
    
}

function scaleColorGraph(){
    //var getLabel=getMinLabel();//min max medium
    var el=document.getElementById("scaleDiv");
    x = el.clientHeight;
    y = el.clientWidth;   
    heigh = y-50;
    min=20;
    max=30;
    style='height='+x+'px'+' width='+50+'px';
    //elements=[labelY(x,y),labelX(max,min,y),minMaxText(max,min,y)];
    elements="";
    elements+=createSvg.group('grid',createGrids(x,y));
       
     //  elements+=createSvg.group('labelY',labelY(x,y));
       elements+=createSvg.group('labelY',labelX(25,20,y));
       elements+=createSvg.group('text',minMaxText(25,20,x,y));
    var a=createSvg.line(0,0,50,50,'stroke="black" stroke-width="20"')
    console.log(a);
       //console.log(text);
       
       text=createSvg.svg(style,elements);
       el.innerHTML=text;
    
      //createSvg.tryTest();
   }
function createGrids(x,y){
    var text="";
    text+=createSvg.line(30,30,30,y-30);
    //text+=createSvg.line(30,y-30,x-30,y-30);
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
    var index=3;
    var text="";
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
   var createSvg=(function(){
       divForSVG=function(idName,className){
           return '<div class="'+className+'" id="'+idName+'">'
           
       }
        addElementTo=function(id,element){
            var el=readDiv(id);
            var value=el.innerHTML;
            
            element+='</svg>';
            value=value.replace('</svg>',element);
            console.log('value test:',value);
            var a=refreshDiv(value,el);
            console.log('refreshed div: ',a);  
            //el.innerHTML=mainBox_elements;

        }
        readDiv=function(id){
            var el=document.getElementById(id);
            console.log(el);
            return el;
        }
        refreshDiv=function(element,el){
            el.innerHTML='';
            el.innerHTML=element;
            return element;
            
        }
        lineElement=function (x1,y1,x2,y2, style){
            return '<line x1="'+x1+'" x2="'+x2+'" y1="'+y1+'" y2="'+y2+'"  style='+style+'/>';
        }
        svgElement=function(style,elements){
            //<g class="labels y-labels"></g>
            /*var text="";
            elements =[].concat(elements);
            for(var i=0;i<elements.length;i++){
                   text+=elements[i];
            }*/
         return '<svg '+style+'>'+elements+'</svg>';  
            
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
        div:divForSVG,
        tryTest:tryTest,
        addElement:addElementTo
    };
    
})(); 