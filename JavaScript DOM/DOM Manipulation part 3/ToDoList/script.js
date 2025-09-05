const inputTugas = document.getElementById('taskInput').value;
const tugasBaru = document.createElement('li');
const tombolTambah = document.getElementById('addTaskButton');

tombolTambah.addEventListener('click', function() {
    const task = tugasBaru.cloneNode();
    task.textContent = inputTugas;
    document.getElementById('taskList').appendChild(task);
})