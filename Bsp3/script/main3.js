"use strict";



document.querySelector(".move").addEventListener("click", moveQuadrat);

function moveQuadrat(e){
    if(e.target.id=="Links"){    
        let obj=document.getElementById('IdBox');
        var objRectangle = obj.getBoundingClientRect()
        obj.style.left=objRectangle.left-25+"px";
    }
    if(e.target.id=="Recht"){    
        let obj=document.getElementById('IdBox');
        var objRectangle = obj.getBoundingClientRect()
        obj.style.left=objRectangle.left+25+"px";
    }
    if(e.target.id=="Hoch"){    
        let obj=document.getElementById('IdBox');
        var objRectangle = obj.getBoundingClientRect()
        obj.style.top=objRectangle.top-25+"px";
    }
    if(e.target.id=="Runter"){    
        let obj=document.getElementById('IdBox');
        var objRectangle = obj.getBoundingClientRect()
        obj.style.top=objRectangle.top+25+"px";
    }
}