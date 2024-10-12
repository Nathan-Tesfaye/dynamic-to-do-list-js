// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    
  // Select the "Add Task" button
  const addButton = document.getElementById('add-task-btn');
  
  // Select the input field for tasks
  const taskInput = document.getElementById('task-input');
  
  // Select the unordered list where tasks will be displayed
  const taskList = document.getElementById('task-list');
  
  // Function to add a new task
  function addTask() {
      // Retrieve the value from the task input field and trim any extra spaces
      const taskText = taskInput.value.trim();
      
      // Check if taskText is not empty
      if (taskText === "") {
          alert("Please enter a task.");
          return; // Exit function if no task is entered
      }
      
      // Create a new <li> element for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText; // Set the text to the task the user entered
      
      // Create a new button to remove the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove"; // Button label
      removeButton.className = 'remove-btn'; // Add a class for potential styling
      
      // Add an event listener to the remove button
      removeButton.addEventListener('click', function() {
          taskList.removeChild(taskItem); // Remove the task when the button is clicked
      });
      
      // Append the remove button to the task item <li>
      taskItem.appendChild(removeButton);
      
      // Append the task item to the task list
      taskList.appendChild(taskItem);
      
      // Clear the task input field after the task has been added
      taskInput.value = ''; // Reset the input field
  }

  // Add event listener to the "Add Task" button to trigger addTask when clicked
  addButton.addEventListener('click', addTask);
  
  // Allow adding tasks by pressing "Enter" in the input field
  taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') { // Check if the "Enter" key is pressed
          addTask(); // Call the addTask function
          event.preventDefault(); // Prevent form submission or other side effects
      }
  });
});
