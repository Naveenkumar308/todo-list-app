document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

