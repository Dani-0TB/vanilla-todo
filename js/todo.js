let tasks = [];

let addTaskButton = document.getElementById('add-task');
let inputTask = document.getElementById('input-task');

function addItem(){
  tasks.unshift({"pk":tasks.length,"name":inputTask.value, "isDone":false});
  document.getElementById('input-task').value = "";
  renderList();
}

function removeItem(pk){
  if (tasks.length-1 === pk){
    console.log(tasks.pk);
    tasks.pop()
    reorder()
    renderList();
    return
  }

  for(let i = 0; i < tasks.length; i++){
    if (tasks[i].pk === pk){
      console.log(tasks[i]);
      tasks.splice(i,1);
    }
  }
  reorder()
  renderList();
}

function reorder(){
  for(let i = 0; i < tasks.length; i++){
    tasks[tasks.length-i-1].pk = i;
  }
}

function renderList(){
  let list = document.getElementById("list-view");
  list.innerHTML = '';
  
  if ( tasks.length < 1){
    list.innerHTML = `<h3 class='message'>Nothing to see here...</h3>`;
    return
  }

  for (let i = 0; i < tasks.length; i++){
    if (tasks[i].name === ""){
      tasks[i].name = "Untitled Task"
    }
    list.innerHTML += `
    <li class="task">
      <p class="task-title">${tasks[i].name}</p>
      <button type="button" class="btn-remove" 
      onclick="removeItem(${tasks[i].pk})">X</button>
    </li>
    `
  }
}

document.addEventListener('DOMContentLoaded', renderList );
addTaskButton.addEventListener('click', addItem );