"use strict";

// hier kommen ihre Skripte hin





//leggo label
console.log(document.getElementById("todoFeld").Value)
document.getElementById("create").addEventListener("click", function(){
    let todoInput = document.getElementById("todoFeld").value;

    const li = document.createElement("li");
    li.innerHTML=todoInput;
    
    const bu = document.createElement("button"); 
    bu.innerHTML="Delete";
    bu.id="deleteTodoElement";
    console.log("Hallo");
    li.appendChild(bu);

    document.querySelector("#cards ul").appendChild(li);
 
});

document.querySelector("#cards ul").addEventListener("click", calcelElementOfList);


function calcelElementOfList(e){
    console.log("cancella elemento");
//	let c = e.target.innerText;
    let idElement = e.target.id;
    console.log(idElement);

    document.querySelector("#cards ul").removeChild(e.target);
    /*
	for (let el of e.target.parentElement.children) {
		if (el.innerText === c){
			el.classList.toggle("highlight");		
		}
	};
    */
}

//let result = responseMessage2.filter(item => item.Color==farbe);




