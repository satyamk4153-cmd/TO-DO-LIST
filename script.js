
// Get input and button
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");

// Get all columns and their lists
const columns = document.querySelectorAll(".column");
const taskLists = document.querySelectorAll(".column ul");

// Add task when button is clicked
addTaskButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Don't create an empty task
    if (taskText === "") {
        return;
    }

    // Create a new task
    const newTask = document.createElement("li");
    newTask.classList.add("task");
// Create task text
const taskContent = document.createElement("span");
taskContent.innerText = taskText;


// Create edit button
const editButton = document.createElement("button");
editButton.innerText = "Edit";
editButton.classList.add("edit-btn");

// Edit task when clicked
editButton.addEventListener("click", function () {

    const updatedTask = prompt("Edit your task:", taskContent.innerText);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        taskContent.innerText = updatedTask.trim();
    }

});


// Create delete button
const deleteButton = document.createElement("button");
deleteButton.innerText = "×";
deleteButton.classList.add("delete-btn");

// Delete task when button is clicked
deleteButton.addEventListener("click", function () {
    newTask.remove();
});

// Add elements to task
newTask.appendChild(taskContent);

const buttonGroup = document.createElement("div");
buttonGroup.classList.add("task-buttons");

buttonGroup.appendChild(editButton);
buttonGroup.appendChild(deleteButton);

newTask.appendChild(buttonGroup);

// Make task draggable
newTask.setAttribute("draggable", "true");

    // Drag start event
    newTask.addEventListener("dragstart", function () {
        newTask.classList.add("dragging");
    });

    // Drag end event
    newTask.addEventListener("dragend", function () {
        newTask.classList.remove("dragging");
    });

    // Add task to TO-DO list
    taskLists[1].appendChild(newTask);

    // Clear input
    taskInput.value = "";
});

// Drag and drop functionality
columns.forEach(function (column, index) {

    column.addEventListener("dragover", function (event) {

        event.preventDefault();

        const draggingTask = document.querySelector(".dragging");

        if (draggingTask) {
            taskLists[index].appendChild(draggingTask);
        }
    });

});

// Add task using Enter key
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTaskButton.click();
    }

});
