const modal = document.getElementById('modal');
const btnCreateTask = document.getElementById('create-task');
const inputdescription = document.getElementById('description');
const inputdate = document.getElementById('date');
const alertElement = document.getElementById('alert');

btnCreateTask.addEventListener('click', createTask);

function createTask(e){
    e.preventDefault();

    if(!inputdescription.value || !inputdate.value){
        alertElement.style.display = 'block';
        closeAlert();
        return
    }

    const newTask = {
        description: inputdescription.value,
        date: new Date(inputdate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC' }),
        id: Math.floor(Math.random() * 10000),
    }

    const allTasks = getTasks();
    
    setTasks([ ...allTasks, newTask]);

    reload();
    toggleModal();
    clearFields();
}

function toggleModal(){
    modal.classList.toggle('modal-visible');
}

function clearFields(){
    inputdate.value = '';
    inputdescription.value = '';
}

function closeAlert(){
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}
