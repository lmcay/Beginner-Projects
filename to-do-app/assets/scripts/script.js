let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

showToDo();

document.querySelector('.user__input').addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        addToDo();
    }
});

document.querySelector('.submit').addEventListener('click', ()=>{
    addToDo();
})

function addToDo(){
    let userInput = document.querySelector('.user__input');
    toDoList.push(userInput.value);
    showToDo();
    userInput.value = "";
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

function showToDo(){
    let toDoHtml = '';
    toDoList.forEach((value) => {
        toDoHtml += 
        `<div><p>${value}</p><button class="delete" data-value="${value}">X</button></div>
        `
    })

    document.querySelector('.to__do__container').innerHTML = toDoHtml;

    document.querySelectorAll('.delete').forEach((button, index) => {
    button.addEventListener('click', ()=> {
            deleteToDo(index);
        })
    })
}

function deleteToDo(index){
    toDoList.splice(index, 1);
    showToDo();
    console.log(toDoList);
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}