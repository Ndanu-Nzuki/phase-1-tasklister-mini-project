document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('create-task-button');
  const taskDescriptionInput = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');

  // Function to create a new task item with a delete button
  function createTask(taskDescription) {
    const li = document.createElement('li');
    li.className = 'task-item';

    // Create task text
    const span = document.createElement('span');
    span.textContent = taskDescription;
    li.appendChild(span);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖️';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', () => {
      li.remove(); 
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }

  addButton.addEventListener('click', () => {
    // Get the task description from the input field
    const taskDescription = taskDescriptionInput.value.trim();

    if (taskDescription !== '') {
      createTask(taskDescription); 
      taskDescriptionInput.value = ''; // Clear the input field
    }
  });
});
