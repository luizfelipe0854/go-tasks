const table = document.getElementById('table');
const loading = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

function updateCountTasks(){
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable(){
    const allTasks = getTasks();
    allTasks.forEach(addTask);

    if(allTasks.length === 0) {
        loading.innerHTML = "Você não possui nenhuma tarefa!";
    } else {
        loading.innerHTML = "";
    }

    updateCountTasks();
}

function addTask(task){
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);

    table.appendChild(tr)
}

function innerHTMLTasks(task){
    const html = `
        <td>${task.description}</td>
        <td>${task.date}</td>
        <td>
            <a href="" onclick="removeTask(${task.id})">
            <i class="fa-solid fa-trash"></i>
            </a>
        </td>
    `
    return html
}

function removeTask(id){
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id !== id);

    setTasks(tasksFiltered);
    reload();
}

function reload() {
    table.innerHTML = '';
    fillTable();
}
