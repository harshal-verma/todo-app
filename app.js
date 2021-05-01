let tasks = [
    {
    done: false,
    text: 'gym',
    id: 1
    },
];
const addTaskInputBox = document.getElementById("add-task");
const tasksList = document.getElementById("list");

function addTodo(task) {
    tasks.push(task);
    renderList();
}

function deleteTodo(taskId) {
    const newTask = tasks.filter(function (task) {
        return task.id !== taskId;
    });
    tasks = newTask;
    renderList();
}

function renderList() {
    for(let i = 0; i< tasks.length; i++){
        const li = document.createElement('li');

        li = `
        <li>
        <input type="checkbox" id="task1">
        <label for="task1">
            go to gym
        </label>
        <button>delete</button>
        </li>
        `;
    }
}

function checkTodo() {

}

console.log("sejfsjfsfjsj")