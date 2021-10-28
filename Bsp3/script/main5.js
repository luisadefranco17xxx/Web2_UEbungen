"use strict";
let list=["Anna","Beatrice","Carlo","Daniele"];
let i=0;
let richtung=1;
let but=document.getElementsByClassName("btn btn-primary");
console.log(but)
but[0].addEventListener("click", function(){    
    let textName=document.getElementsByClassName("nächstSpielerName");
    textName[0].innerHTML=list[i];

    if(richtung>0) { 
       if(i<3) i=i+1;
       else i=0;
    } 
    if(richtung<1) { 
        if(i!=0) i=i-1;  
          else i=3;       
    } 
});



let but2=document.getElementsByClassName("btn btn-secondary");
console.log(but2)
but2[0].addEventListener("click", function(){   
    richtung=richtung*(-1);  
});
