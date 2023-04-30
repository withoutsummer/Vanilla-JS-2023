const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");

const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"
let toDos = [];


function savedToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li =event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    savedToDos();
}

function paintToDo(newTodo){
    const li =document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.innerText = "X";
    btn.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    savedToDos();

}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedLocalToDos = localStorage.getItem(TODOS_KEY);
console.log(savedLocalToDos);

if(savedLocalToDos !== null){
    const parsedToDos = JSON.parse(savedLocalToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
