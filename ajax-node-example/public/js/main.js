function zad3() {
   var tekst = document.getElementById("wej3").value;
   var znak = document.getElementById("wej3a").value; 
   var dlt = tekst.length;
   var dzn = znak.length;
   var x = 0;
   if (dlt == 0) {
      x =1;
      //document.getElementById("b3").innerHTML ="";
	   document.getElementById("nowe").style.color="red";
   }
   else
     // document.getElementById("b3").innerHTML = "";
   if (dzn == 0) {
      x = 1;
      //document.getElementById("wyn3").innerHTML = "";
      document.getElementById("nowe").style.color="red";	  
   }
    if (dzn > 1) {
      x = 1;
      //document.getElementById("wyn3").innerHTML = '<span style="color: red; text-decoration: underline;">Wpisz <b>tylko 1</b> znak!</span>';
	  document.getElementById("nowe").style.color="red";
   };
   //console.log("jestem");
   var wynik = 0;
   if (x < 1) {
      var a = znak.charAt[0];
      for (var x = 0; x < dlt; x++) {
         var b = tekst.charAt[x];
         if (a == b) {
            wynik++;
         };
      };
   };
   
   console.log(wynik);
}
