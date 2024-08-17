document.getElementById('addTaskButton').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    if (task) {
        addTaskToList(task);
        taskInput.value = ''; // Clear the input field
    }
});

function addTaskToList(task) {
    let li = document.createElement('li');
    li.textContent = task;

    let deleteButton = document.createElement('span');
    deleteButton.textContent = '✖';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
}