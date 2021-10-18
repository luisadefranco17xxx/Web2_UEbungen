"use strict";



document.querySelector(".move").addEventListener("click", moveQuadrat);

function moveQuadrat(e){
    console.log("qui");
    if(e.target.id=="Links"){
        console.log("links");    
        let obj=document.getElementById('IdBox');
        let pos=obj.style.left;
        let newPos=" ";
        for(let i=0;i<pos.length-2; i++){
            newPos[i]=pos[i];
        }
        window.alert(pos);
        window.alert(newPos);
        obj.style.left=25+"px";
        //e.target.style.left=200 +"px";
        //obj.style.left=-5+"px"+Number(obj.style.left) +"px";
        obj.style.color='red';
        //docobjument.style.position=position-10;
        //window.alert("l posizione é:  "+obj.style.left);
        //window.alert(Number(obj.style.left));
    }
}