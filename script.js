// Get references to the DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item (li) element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Add click event to remove the task
    removeBtn.addEventListener('click', function() {
        li.remove(); // Remove the task from the list
    });

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Add the new task (list item) to the task list (ul)
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Add event listener to the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Optional: Enable pressing 'Enter' to add tasks
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
