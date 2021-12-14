let editTaskContainer = document.querySelector(".edit-task-container"),
    newtask = document.getElementById("task"),
    button = document.querySelector(".inputs button"),
    tasklist = document.querySelector(".task-list"),
    tasks = [];

let idEditTask = document.querySelector(".edit-task p"),
    inputEdit = document.getElementById("inputEdit");



newtask.addEventListener("keypress", (target) => {
    if(newtask.value.length != 0){
        if(target.keyCode == 13){
            let task = {
                nome: newtask.value,
                id: idTask()
            }

            tasks.push(task);
            taskFunction();

            newtask.value = "";
        }
    }

});

button.addEventListener("click", () => {
    if(newtask.value.length != 0){
        let task = {
            nome: newtask.value,
            id: idTask()
        }
    
        tasks.push(task);
        taskFunction();
    
        newtask.value = "";
    }
});

function taskFunction(){
    tasks.map(val => {
        tasks = [];
        
        tasklist.innerHTML += `
        <div class="task" id="${val.id}id">
            <p id="${val.id}">${val.nome}</p>
            <ul class="buttons">
            <span>#${val.id}</span>
            <li onclick="openModal(${val.id})"><ion-icon name="create-outline"></ion-icon></li>
            <li onclick="trashTask(${val.id})"><ion-icon name="trash-outline"></ion-icon></li>
            </ul>
        </div>`;
    });
}

//ID DA TASK
function idTask(){
    return Math.floor(Math.random() * 2000);
}

//MODAL EDIT
function openModal(id){
    if(editTaskContainer.style.display == "none"){
        editTaskContainer.style.display = "flex";
        
        idEditTask.innerHTML = id;

        let pIdEdit = document.getElementById(id);

        inputEdit.value = pIdEdit.innerHTML;
        inputEdit.focus();

    } else {
        editTaskContainer.style.display = "none";
    }
}

function closeModal(){
    editTaskContainer.style.display = "none";
}

//SALVAR NOVA TAREFA
function saveNewTask(){
    
    let novaTask = document.getElementById(idEditTask.innerHTML);
    novaTask.innerHTML = inputEdit.value;

    editTaskContainer.style.display = "none";
}

//EXCLUIR TAREFA
function trashTask(id){
    let taskBox = document.getElementById(id + "id");
    tasklist.removeChild(taskBox);

    console.log(taskBox);
}