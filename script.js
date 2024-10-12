// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Define the addTask function
  function addTask() {
      // Retrieve and trim the task input value
      const taskText = taskInput.value.trim();

      // Check if taskText is not empty
      if (taskText === '') {
          alert('Please enter a task!');
          return; // Exit the function if no task is entered
      }

      // Create a new list item (li) element and set its text
      const li = document.createElement('li');
      li.textContent = taskText;

      // Create a remove button for the task
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');

      // Assign an onclick event to the remove button
      removeBtn.onclick = function() {
          taskList.removeChild(li); // Remove the task from the list
      };

      // Append the remove button to the li element
      li.appendChild(removeBtn);

      // Append the new task (li) to the task list (ul)
      taskList.appendChild(li);

      // Clear the task input field
      taskInput.value = '';
  }

  // Attach event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Allow tasks to be added by pressing 'Enter' in the input field
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          addTask();
      }
  });

  // Call addTask on DOMContentLoaded for initialization (optional if no pre-existing tasks)
  // addTask(); // Uncomment if you want to invoke a specific functionality after load

});
