document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://127.0.0.1:9000/v1/tasks';
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const taskDescription = document.getElementById('taskDescription');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const addTaskButton = document.getElementById('addTaskButton');
    const searchInput = document.getElementById('searchInput');

    function fetchTasks() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                taskList.innerHTML = '';
                data.forEach(task => {
                    const li = document.createElement('li');
                    li.className = 'p-2 border-b flex justify-between items-center';
                    li.innerHTML = `
                        <span>${task.label}: ${task.description} (Start: ${task.start_date}, End: ${task.end_date})</span>
                        <button class="bg-red-500 text-white px-2 py-1 rounded deleteTaskButton" data-label="${task.label}">Delete</button>
                    `;
                    taskList.appendChild(li);
                });
                addDeleteEventListeners();
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }

    function addDeleteEventListeners() {
        document.querySelectorAll('.deleteTaskButton').forEach(button => {
            button.addEventListener('click', (e) => {
                const label = e.target.getAttribute('data-label');
                deleteTask(label);
            });
        });
    }

    function deleteTask(label) {
        fetch(`${apiUrl}/${label}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                fetchTasks();
            } else {
                console.error('Error deleting task:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting task:', error));
    }

    addTaskButton.addEventListener('click', () => {
        const task = {
            label: taskInput.value,
            description: taskDescription.value,
            start_date: new Date(startDate.value).toISOString(),
            end_date: new Date(endDate.value).toISOString()
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => response.json())
        .then(() => {
            taskInput.value = '';
            taskDescription.value = '';
            startDate.value = '';
            endDate.value = '';
            fetchTasks();
        })
        .catch(error => console.error('Error adding task:', error));
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            if (task.textContent.toLowerCase().includes(query)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    });

    fetchTasks();
});
