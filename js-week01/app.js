const todoListKey = 'todolist-week01';

document.querySelector('#addTodo').addEventListener('click', addTodo);
document.querySelector('#clearTask').addEventListener('click', clearTask);

renderTodos();
countTodos();
focusInput();

function clearTask(){
    storeInLocalStorage([]);
    renderRemoveAll();
    countTodos();
}

function renderRemoveAll(){
    document.getElementById('todoList').innerHTML = '';
}

function renderTodos(){
    retrieveTodos().forEach(todo => render(todo));
}

function retrieveTodos(){
    return JSON.parse(window.localStorage.getItem('todolist-week01')) ?? [];
}

function addTodo(){
    const todoText = document.querySelector('#newTodo').value;

    if(isNotMeaningFul(todoText)) return;

    const todo = makeTodoObj(todoText);
    storeTodo(todo);
    render(todo);
    countTodos();
    clearInput();
    focusInput();
}

function isNotMeaningFul(value){
    return (!value.trim() || 0 === value.length);
}

function countTodos(){
    document.getElementById('taskCount').innerHTML = retrieveTodos().length;
}

function makeTodoObj(todo){
    return {id: new Date().getTime(), name: todo, status: false};
}

function storeInLocalStorage(todos){
    window.localStorage.setItem('todolist-week01', JSON.stringify(todos));
}

function storeTodo(todo){
    const todos = retrieveTodos();
    todos.push(todo);
    storeInLocalStorage(todos);
}

function clearInput(){
    document.querySelector('#newTodo').value = '';
}

function focusInput(){
    document.getElementById('newTodo').focus();
}

function render(todo) {
    const checkBox = createCheckBox(todo);
    const text = createText(todo.name);
    const removeBtn = createRemoveBtn(todo.id);
    const li = createLi(todo.id, checkBox, text, removeBtn);
    document.getElementById('todoList').appendChild(li);
}

function createRemoveBtn(id){
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.name = id;
    btn.value = 'Delete';
    btn.addEventListener('click', removeTodo);
    return btn;
}

function removeTodo(event){
    const todos =  retrieveTodos();
    const targetTodoIndex = todos.findIndex(todo => parseInt(event.target.parentElement.id) === todo.id);
    if(targetTodoIndex < 0) return;

    todos.splice(targetTodoIndex, 1);

    storeInLocalStorage(todos);
    renderRemove(event.target.parentElement);
    countTodos();
}

function renderRemove(element){
    document.getElementById('todoList').removeChild(document.getElementById(element.id));
}

function createLi(id, checkBox, text, removeBtn) {
    const li = document.createElement('li');
    li.id = id;
    li.appendChild(checkBox);
    li.appendChild(text);
    li.appendChild(removeBtn);
    return li;
}

function createCheckBox(todo) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = todo.id;
    checkBox.checked = todo.status;
    checkBox.addEventListener('click', changeStatus);
    return checkBox;
}

function changeStatus(event){
    const todos = retrieveTodos();
    const targetTodoIndex = todos.findIndex(todo => parseInt(event.target.parentElement.id) === todo.id);
    if(targetTodoIndex < 0) return;

    todos[targetTodoIndex].status = !todos[targetTodoIndex].status;

    storeInLocalStorage(todos);

    todos[targetTodoIndex].status ? 
        event.target.parentElement.classList.add('completed') : 
        event.target.parentElement.classList.remove('completed');
}

function createText(name) {
    const div = document.createElement('span');
    div.appendChild(document.createTextNode(name));
    return div;
}
