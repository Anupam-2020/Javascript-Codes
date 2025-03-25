let taskInput = document.querySelector(".todo_input");
let addButton = document.getElementById("add_task");
let todoLists = document.querySelector(".todo_lists");
let task_array = [];
let selectedTaskId = null;

addButton.addEventListener("click", () => {
  if (taskInput.value === "") {
    addButton.innerText = "Add";
    return;
  }

  if (addButton.innerText === "Add") {
    task_array.push({
      task: taskInput.value,
      id: String(Math.random() * 1000),
      isCompleted: false,
    });
    taskInput.value = "";
  } else if (addButton.innerText === "Edit") {
    task_array = task_array.map((t) =>
      t.id === selectedTaskId
        ? { ...t, task: taskInput.value, isCompleted: false }
        : t
    );
    taskInput.value = "";
    addButton.innerText = "Add";
  }
  todoLists.innerHTML = "";
  renderLists();
});

function generateTodoItem(task, id, isCompleted) {
  let taskContainer = document.createElement("div");
  // taskContainer.setAttribute('id', id);
  let taskSpan = document.createElement("span");
  taskSpan.style.display = "flex";

  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "todo");
  checkbox.checked = isCompleted; // To ensure if any task in array is completed then checkbox should be in checked state.
  checkbox.addEventListener("change", function () {
    task_array = task_array.map((t) =>
      t.id === id ? { ...t, isCompleted: this.checked } : t
    );
    strikeOutFinishedTask(taskSpan, this.checked);
  });

  let span = document.createElement("span");
  span.innerHTML = `<h2 id=${id}>${task}</h2>`;
  strikeOutFinishedTask(span, isCompleted); // To ensure if any task is completed then span should be striked out.

  let buttonSpan = document.createElement("span");
  let editbutton = document.createElement("button");
  editbutton.innerText = "🖊️";
  editbutton.addEventListener("click", () => {
    editTask(id);
  });

  let deletebutton = document.createElement("button");
  deletebutton.innerText = "❌";
  deletebutton.addEventListener("click", () => {
    deleteTask(id);
  });

  buttonSpan.append(editbutton, deletebutton);
  taskSpan.append(checkbox, span);

  taskContainer.append(taskSpan, buttonSpan);
  taskContainer.style.display = "flex";
  taskContainer.style.width = "30vw";
  taskContainer.style.justifyContent = "space-between";
  todoLists.append(taskContainer);
}

function renderLists() {
  if(task_array.length === 0) {
    todoLists.innerHTML = "<h3>No Todo Yet!</h3>"
    return;
  }
  task_array.forEach((task) => {
    generateTodoItem(task.task, task.id, task.isCompleted);
  });
}

function strikeOutFinishedTask(taskSpan, checked) {
  if (checked) {
    taskSpan.style.textDecoration = "line-through";
  } else {
    taskSpan.style.textDecoration = "none";
  }
}

function deleteTask(id) {
  task_array = task_array.filter((task) => task.id !== id);
  todoLists.innerHTML = "";
  renderLists();
}

function editTask(id) {
  addButton.innerText = "Edit";
  let task = task_array.find((task) => task.id === id);
  taskInput.value = task.task;
  selectedTaskId = id;
}