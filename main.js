let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");
let helpButton = document.getElementById("helpclick");

addToDoButton.addEventListener('click', ()=>{
    var paragraph = document.createElement('p');
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration = "line-through"
    
    })
    paragraph.addEventListener('dblclick', ()=>{
        
        toDoContainer.removeChild(paragraph);
    
    })
});

document.addEventListener('keydown', ()=>{
    if(event.keyCode === 13){
        event.preventDefault();
        addToDoButton.click();
    }
});
document.addEventListener("keydown", (event)=>{
    if (event.keyCode === 16) {
        event.preventDefault();
        toDoContainer.removeChild(toDoContainer.lastChild);
    }
});


