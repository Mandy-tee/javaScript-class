const todos =[
    {task: "wake up", status: "Done"},
    {task: "Exercise", status: "In Progress"},
    {task: "Eat", status: "Done"},
];

const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos");
    .then((response) => {
       return response.json()
    });
    .then((data) => {
        console.log(data);
        return data;
    });
};
const viewButton = document.getElementById("view-button");
console.log("Button:", viewButton);
const todoItems = document.getElementById("todo-list");

//es5 Syntax
//function [name of the func () = {}]
function showTodos() {
  todos.forEach((value) => {
    console.log(value.status);
    const todoItem = document.createElement("li");
    todoItem.textContent = value.task + "-" + value.status;
    todoItems.appendChild(todoItem);
  });
}

// add a click event to the view button
viewButton.addEventListener("click", showTodos);
