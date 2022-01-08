const newTaskInput = document.querySelector('#task-input');
const list = document.querySelector('.collection');
const form = document.querySelector('.task-form');
const clearTaskBtn = document.querySelector('.clear-btn');


form.addEventListener('submit', addTask);
clearTaskBtn.addEventListener('click', clearTasks);

function addTask(e){
    if(newTaskInput.value  == ''  ){
        alert('Add New Task');
    }else{
        list.innerHTML += ` 
        <li> ${newTaskInput.value} </li>
        `;
    }
       
        newTaskInput.value  == '' 
        e.preventDefault();
};

function clearTasks(){
    list.innerHTML = '';
}
 