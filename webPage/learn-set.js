function card(){
    /*
    this.shape
    this.number
    this.color
    this.shading
    */
}
function shapes(){
    this.squiggle = function(){
        
        
    }
    this.oval = function(){
        
        
    }
    this.diamond = function(){
        
        
    }
}
function color(){
    this.red = function(){
        
        
    }
    this.purple = function(){
        
        
    }
    this.green = function(){
        
        
    }
}
function number(){
    this.one = function(){
        
        
    }
    this.two = function(){
        
        
    }
    this.three = function(){
        
        
    }
}
function shading(){
    this.solid = function(){
        
        
    }
    this.open = function(){
        
        
    }
    this.striped = function(){
        
        
    }
}

var shapes={
    oval:
        />,
    diamond:          		<rect class="ovalStyle"
			rx="26"
            x="15"
            y="10"
			height="108"
			width="52"
			fill="none"
			stroke-width="3"
	   />,
    squiggle:"m 331.37033,298.8648 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"
    
} 
         <path class="squiggleStyle"
               d="m 100,100 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z"
               />


var oval = (
      <svg viewBox="-3 -4 115 64">
        <path className={classes} stroke="black" stroke-width="4" stroke-linejoin="miter" fill="none"
          d="M30 0
             L80,0
             C120,0 120,50 80,50
             L30 50
             C-10,50 -10,0 30,0
             " />
      </svg>
    );

    var squiggle = (
      <svg viewBox="-3 -4 115 64">
        <path className={classes} stroke="black" stroke-width="4" stroke-linejoin="miter" fill="none"
          d="M0 30
             C0,0 33,0 50,12
             S70,20 85,8
             S105,10 103,26
             S90,70 60,45
             S30,50 16,55
             S00,40 0,30
             " />
      </svg>
    );

    var diamond = (
      <svg width="100" height="60" viewBox="-5 -4 115 64">
        <path className={classes} stroke-width="4" storke="black" stroke-linejoin="miter"  fil="none" d="M0 30 L50 0 L100 30 L50 60 Z" />
      </svg>
    );


var romby= 
    <svg
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   id="svg2"
   viewBox="0 -50 700 700"
  >
 <!--romb pusty, zmienic kolory i wypelnienie -->

              
              
  <path
       style="
              opacity:1;
              fill-opacity:0;
              stroke:red;
              stroke-width:3;
              stroke-linejoin:round;
              stroke-opacity:3"
       d="m 331.37033,298.8648 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"
        />
</svg>;
           
           var rombfalki =  <svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="210mm"
   height="297mm"
   viewBox="0 0 744.09448819 1052.3622047"
   id="svg2"
   version="1.1"
   inkscape:version="0.91 r13725"
   sodipodi:docname="romb-fale.svg">
  <defs
     id="defs4">
    <pattern
       inkscape:isstock="true"
       inkscape:stockid="Wavy"
       id="Wavy"
       height="5.1805778"
       width="30.066020"
       patternUnits="userSpaceOnUse"
       inkscape:collect="always">
      <path
         id="path5811"
         d="M 7.597,0.061 C 5.079,-0.187 2.656,0.302 -0.01,1.788 L -0.01,3.061 C 2.773,1.431 5.173,1.052 7.472,1.280 C 9.770,1.508 11.969,2.361 14.253,3.218 C 18.820,4.931 23.804,6.676 30.066,3.061 L 30.062,1.788 C 23.622,5.497 19.246,3.770 14.691,2.061 C 12.413,1.207 10.115,0.311 7.597,0.061 z "
         style="fill:black;stroke:none;" />
    </pattern>
 
  

 
  </defs>



    <rect
       style="opacity:1;fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect6293"
       width="14.364143"
       height="45.682686"
       x="226.5296"
       y="227.24815" />
    <g
       id="g6347"
       style="opacity:1;fill:#24719d;fill-opacity:0.41340781;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       transform="translate(24.310155,-2.2488393e-8)">
      <path
         inkscape:connector-curvature="0"
         id="path6313"
         d="m 307.59354,200.59868 29.13397,50.23714 z"
         style="fill:#24719d;fill-opacity:0.41340781;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path6313-5"
         d="m 278.39051,251.79098 29.13397,50.23714 z"
         style="fill:#24719d;fill-opacity:0.41340781;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path6330"
         d="m 307.52111,200.71927 -29.12858,51.28466 z"
         style="fill:#24719d;fill-opacity:0.41340781;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
      <path
         inkscape:connector-curvature="0"
         id="path6330-0"
         d="m 336.75659,250.8306 -29.12857,51.28467 z"
         style="fill:#24719d;fill-opacity:0.41340781;fill-rule:evenodd;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    </g>
    <path
       style="opacity:1;fill:url(#Wavy);fill-opacity:1.0;fill-rule:evenodd;stroke:#000000;stroke-width:0.66603166;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 331.37033,298.8648 c -2.18523,-3.44062 -27.20487,-46.97704 -27.10492,-47.16498 0.0708,-0.13317 6.31653,-11.15013 13.87935,-24.48215 l 13.75059,-24.24003 1.05013,1.76146 c 5.41148,9.07705 26.64746,46.0736 26.57729,46.302 -0.12455,0.40544 -27.10013,47.96674 -27.40772,48.32323 -0.13542,0.15695 -0.47055,-0.0678 -0.74472,-0.49953 z"
       id="path6868"
       inkscape:connector-curvature="0" />
 
</svg>
    
       var ovale =   <svg
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   id="svg2"
   viewBox="250 200 150 150"
 >
  <defs
     id="defs4" />
  <g
     id="layer1">
		<rect
			transform="scale(-1,1)"
			rx="26"
			y="201.93103"
			x="-330.3985"
			height="108"
			width="52"
			id="rect3408"
			style="opacity:1;
			fill:none;
			stroke:#000000;
			stroke-width:2.5;
			stroke-miterlimit:4;
			stroke-dasharray:none;
			stroke-opacity:1;
			stroke-linejoin:miter;
			stroke-linecap:round" 
	   />
  </g>
</svg>
            var falki = <svg

   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 744.09448819 1052.3622047"
   version="1.1"
>



  <g>
    <path
              style="
              opacity:1;
              fill-opacity:0;
              stroke:red;
              stroke-width:3;
              stroke-linejoin:round;
              stroke-opacity:3"
       d="m 258.34458,441.87941 c 0,0 0.79623,-8.72627 2.14286,-12.85714 1.25308,-3.84391 5.44008,-10.84056 5.44008,-10.84056 0,0 2.27418,-4.62691 2.81753,-7.12119 0.56873,-2.61078 0.51917,-5.33498 0.41842,-8.00508 -0.14531,-3.85134 -0.81746,-8.32464 -1.47189,-11.46818 -0.65443,-3.14354 -1.19607,-5.02541 -2.14998,-7.39725 -0.95392,-2.37185 -2.29605,-4.85013 -3.53893,-6.76591 -1.24288,-1.91578 -2.56998,-3.10788 -3.76269,-4.7583 -1.19271,-1.65042 -3.0932,-2.61784 -3.38388,-5.13711 -0.29069,-2.51928 0.61023,-5.77553 3.13134,-8.50642 2.52111,-2.7309 7.05963,-4.95351 12.01659,-5.54841 4.95696,-0.59491 12.02967,1.66242 16.4069,3.218 4.37722,1.55557 7.0057,3.14648 9.84464,5.24139 2.83894,2.0949 4.71581,4.04919 7.1051,7.05992 2.38929,3.01072 5.16697,7.09208 6.85256,11.10053 1.38286,3.28853 2.15203,6.84557 2.57583,10.38777 0.61135,5.1098 0.74442,11.15825 -0.0758,15.43854 -0.82026,4.2803 -2.70925,6.62643 -3.91062,9.97091 -1.20136,3.34449 -2.45898,6.65012 -3.29723,10.08666 -0.54317,2.22683 -0.97161,4.49795 -1.1129,6.78571 -0.14472,2.34342 -0.0521,4.71341 0.27606,7.03825 0.29686,2.10295 0.85879,4.16938 1.52235,6.18686 0.58393,1.77539 1.29081,3.51888 2.15369,5.17672 0.69308,1.3316 1.60955,2.53445 2.41334,3.80231 1.03379,1.63064 1.86258,3.14855 3.09885,4.89353 1.23627,1.74498 3.74869,3.56754 4.36154,5.52488 0.35174,1.12342 1.07045,2.73795 0.97951,4.15945 -0.13186,2.06114 -0.83088,4.23471 -2.17721,5.80094 -2.39509,2.7863 -6.1739,4.29289 -9.62119,5.37881 -3.73898,1.1778 -7.76266,1.43248 -11.65944,1.53689 -3.51588,0.0942 -7.1111,-0.13876 -10.5484,-0.88389 -3.9285,-0.8516 -7.60297,-2.73519 -11.0931,-4.72951 -2.99114,-1.70918 -5.90183,-3.21081 -8.31889,-6.1327 -2.3035,-2.7846 -4.12807,-6.67078 -5.29215,-10.06499 -1.16408,-3.39422 -1.41677,-6.6341 -1.78571,-10 -0.31158,-2.8426 -0.35715,-8.57143 -0.35715,-8.57143 z"
       />
  </g>
</svg>