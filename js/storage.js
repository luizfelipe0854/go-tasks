function getTasks(){
    return JSON.parse(localStorage.getItem('@GoTasks')) || [];
}

function setTasks(tasks){
    localStorage.setItem('@GoTasks', JSON.stringify(tasks));
}

