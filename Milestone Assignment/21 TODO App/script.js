const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", additem);
const todoList = document.getElementById("todoList");

function additem() {
  const todoitem = document.getElementById("todoitem").value;
  const item = document.createElement("li");
  item.textContent = todoitem;
  todoList.appendChild(item);
}