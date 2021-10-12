"use strict";

let i=1;
console.log(document.getElementById("todoFeld").Value)
document.getElementById("create").addEventListener("click", function(){
    let todoInput = document.getElementById("todoFeld").value;

    const li = document.createElement("li");
    li.innerHTML=i+" "+todoInput;
    li.className=i;
    
    const bu = document.createElement("button"); 
    bu.innerHTML="Delete";
    bu.className=i;
    bu.id="deleteTodoElement";
    li.appendChild(bu);

    const bu2 = document.createElement("button"); 
    bu2.innerHTML="Up";
    bu2.className=i;
    bu2.id="OverTodoElement";
    li.appendChild(bu2);

    const bu3 = document.createElement("button"); 
    bu3.innerHTML="Down";
    bu3.className=i;
    bu3.id="DownTodoElement";
    li.appendChild(bu3);

    document.querySelector("#cards ul").appendChild(li);
    i++;

});

document.querySelector("#cards ul").addEventListener("click", calcelElementOfList);


function calcelElementOfList(e){
    if(e.target.innerHTML=="Delete")  {
        console.log("delete element");
        console.log(e.target.id +  "  element e il valore della i e` : "+i+" la classe é: "+ e.target.className);
        let listHtml = document.querySelectorAll("#cards ul li");
        let list=Array.from(listHtml);
        let elementToRemove = list[Number(e.target.className)-1];

        //document.querySelector("#cards ul").removeChild(elementToRemove); 
        document.querySelector("#cards ul").removeChild(e.target.parentElement); 
        /*
        for (let el of e.target.parentElement.parentElement.children) {
            if (el.className ==Number(e.target.className)-1){
                console.log("el	"+el);	
                console.log("e.target : "+e.target);
            }
        };
        */

    }   else if(e.target.innerHTML=="Up")  {
        /*console.log("move over ");
        console.log(e.target.id +  "  element e il valore della i e` : "+i+" la classe é: "+ e.target.className);
       
        for (let el of e.target.parentElement.parentElement.children) {
                console.log(el.className);       
                 console.log(el.innerHTML);
        };*/
        moveUp(e.target.parentNode);
    }   else if(e.target.innerHTML=="Down")  {
        moveDown(e.target.parentNode);       
    }
}


function moveUp(element) {
    //console.log("moveUP, element id:  ");
    //console.log(element.innerHTML);
    
    if(element.previousElementSibling)
      element.parentNode.insertBefore(element, element.previousElementSibling);
  }
  function moveDown(element) {
    //console.log("moveDOWN");
    if(element.nextElementSibling)
      element.parentNode.insertBefore(element.nextElementSibling, element);
  }



