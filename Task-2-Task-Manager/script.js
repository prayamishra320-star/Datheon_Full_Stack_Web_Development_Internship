let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'All';

// 2. Helper Functions - save and load
function saveToLocalStorage(){
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadFromLocalStorage(){
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function addTask(){
  let input = document.getElementById('taskInput');
  if(input.value.trim() === '') return alert('Pehle task likho');
  let newTask = {
    id: Date.now(),
    text: input.value,
    category: document.getElementById('category').value,
    date: document.getElementById('dueDate').value,
    completed: false
  };
  tasks.push(newTask);
  input.value = '';
  saveToLocalStorage();
  render();
}

function render(){
  let list = document.getElementById('taskList');
  list.innerHTML = '';
  let searchText = document.getElementById('search').value.toLowerCase();

  let filtered = tasks.filter(t=>{
    if(filter === 'Active') return !t.completed;
    if(filter === 'Completed') return t.completed;
    return true;
  }).filter(t=> t.text.toLowerCase().includes(searchText));

  filtered.forEach(t=>{
    list.innerHTML += `<li class="${t.completed?'completed':''}">
      <span><b>[${t.category}]</b> ${t.text} <small>(${t.date})</small></span>
      <span>
        <button onclick="toggle(${t.id})">✓</button>
        <button onclick="del(${t.id})" style="background:#ef4444">X</button>
      </span>
    </li>`;
  });
}

function toggle(id){
  tasks = tasks.map(t=> t.id===id ? {...t, completed:!t.completed} : t);
  saveToLocalStorage();
  render();
}
function del(id){
  tasks = tasks.filter(t=> t.id!==id);
  saveToLocalStorage();
  render();
}
function filterTasks(type){ filter = type; render(); }
function searchTask(){ render(); }

// Page khulte hi load karo
render();
