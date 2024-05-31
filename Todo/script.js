document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".todo-form");
  const input = document.querySelector(".todo-input");
  const button = document.querySelector(".todo-button");
  const todoContainer = document.querySelector(".todo-list");

  let editable = false;
  let edititm = null;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let todoValue = input.value.trim();
    if (todoValue !== "") {
      if (editable) {
        edititm.firstChild.textContent = todoValue;
        button.innerText = "Add todo";
        editable = false;
        edititm = null;
      } else {
        addTodo(todoValue);
      }
      input.value = "";
    } else {
      alert("Please enter a valid todo");
    }
  });

  todoContainer.addEventListener("click", function (event) {
    const target = event.target;
    console.log(target.tagName);
    if (target.tagName === "BUTTON") {
      const todoitmes = target.parentNode;
      if (target.innerText === "❌") {
        todoitmes.remove();
      } else if (target.innerText === "🖌️") {
        editable = true;
        edititm = todoitmes;
        button.innerText = "Edit Todo";
        input.value = todoitmes.firstChild.textContent;
        input.focus();
      }
    }
  });

  function addTodo(todoValue) {
    const todoList = document.createElement("li");
    const editable = document.createElement("button");
    const deletebutton = document.createElement("button");

    todoList.innerHTML = `<span>${todoValue}</span>`;
    editable.innerText = "🖌️";
    deletebutton.innerText = "❌";
    todoList.appendChild(editable);
    todoList.appendChild(deletebutton);
    todoContainer.appendChild(todoList);
  }
});
