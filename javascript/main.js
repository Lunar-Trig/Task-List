const newTaskInput = document.querySelector('#task-input');
const list = document.querySelector('.collection');
const form = document.querySelector('.task-form');
const clearTaskBtn = document.querySelector('.clear-btn');
const saveBtn = document.querySelector('.btn-save-tasks')

form.addEventListener('submit', addTask);
clearTaskBtn.addEventListener('click', clearTasks);
saveBtn.addEventListener('click', save)

function addTask(e){
    if(newTaskInput.value  == ''  ){
        alert('Add New Task');
    }else{
        var deleteBtn = document.createElement('a');
        var listItem = document.createElement('li'); 

        listItem.innerText = newTaskInput.value;
        listItem.className = 'collection-item';

        deleteBtn.className = 'delete-item';
        deleteBtn.innerHTML = '<i class="fas fa-times"></li>';
        deleteBtn.addEventListener('click', removeTask);

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);
        
        function removeTask(){
            if(confirm('Are You Sure?')){
                listItem.remove();
            };
        }
    }
       
        newTaskInput.value = '';
        e.preventDefault();
};

function clearTasks(){
    list.innerHTML = '';
}

function save(){
    localStorage.setItem('taskValue', newTaskInput.value);
}
