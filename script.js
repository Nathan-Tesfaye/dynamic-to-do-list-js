// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  
  // Initialize the tasks array (it will hold the tasks)
  let tasks = [];

  // Function to load tasks from Local Storage
  function loadTasks() {
      // Get the tasks from Local Storage, parse them, and update the tasks array
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
          tasks = JSON.parse(savedTasks);
          // Loop through the tasks array and display each task in the DOM
          tasks.forEach(taskText => {
              createTaskElement(taskText);
          });
      }
  }

  // Function to create and display a task in the DOM
  function createTaskElement(taskText) {
      // Create a new list item (li) element and set its text
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button for the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');

      // Assign an onclick event to the remove button
      removeBtn.onclick = function() {
          // Remove the task from the DOM
          taskList.removeChild(li);
          // Remove the task from the tasks array and update Local Storage
          removeTask(taskText);
      };

      // Append the remove button to the li element
      li.appendChild(removeBtn);

      // Append the new task (li) to the task list (ul)
      taskList.appendChild(li);
  }

  // Function to add a new task
  function addTask() {
      // Retrieve and trim the task input value
      const taskText = taskInput.value.trim();

      // Check if taskText is not empty
      if (taskText === '') {
          alert('Please enter a task!');
          return; // Exit the function if no task is entered
      }

      // Add the task to the DOM
      createTaskElement(taskText);

      // Add the task to the tasks array and save it to Local Storage
      tasks.push(taskText);
      saveTasks();

      // Clear the task input field
      taskInput.value = '';
  }

  // Function to save the tasks array to Local Storage
  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to remove a task from the tasks array and update Local Storage
  function removeTask(taskText) {
      // Remove the task from the tasks array
      tasks = tasks.filter(task => task !== taskText);
      // Update Local Storage with the modified tasks array
      saveTasks();
  }

  // Attach event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Allow tasks to be added by pressing 'Enter' in the input field
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Load tasks from Local Storage when the page loads
  loadTasks();

});
