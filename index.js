// For
function showTodos() {
    for (let i = 0; i < toDos.length; i++) {
      const todoItem = document.createElement("li");
      todoItem.textContent = toDos[i].task + '-' + toDos[i].status;
      todoItems.appendChild(todoItem);
    }
  }

  // For of
function showTodos() {
    for (const todo of toDos) {
      const todoItem = document.createElement("li");
      todoItem.textContent = todo.task + '-' + todo.status;
      todoItems.appendChild(todoItem);
    }
  }

  // For Each
function showTodos() {
    toDos.forEach((value) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = value.task + '-' + value.status;
      todoItems.appendChild(todoItem);
    });
  }

  // For In
function showTodos() {
    for (let index in toDos) {
      const todoItem = document.createElement("li");
      todoItem.textContent = toDos[index].task + '-' + toDos[index].status;
      todoItems.appendChild(todoItem);
    }
  }

  // While loop
function showTodos() {
    let i = 0;
    while (i < toDos.length) {
      const todoItem = document.createElement("li");
      todoItem.textContent = toDos[i].task + '-' + toDos[i].status;
      todoItems.appendChild(todoItem);
      i++;
    }
  }

  // Map
function showTodos() {
    toDos.map((value) => {
      const todoItem = document.createElement("li");
      todoItem.textContent = value.task + '-' + value.status;
      todoItems.appendChild(todoItem);
    });
  }

  const showTodos = () => {
    alert('The function has been called');
};

// Function call
// showTodos();

viewBtn.addEventListener('click', showTodos);

const addNumbers = (text, firstNum, secondNum) => {
    const total = firstNum + secondNum;
    console.log(text, total);
};

addNumbers('2 + 5 =', 2, 5);
addNumbers('4 + 8 =', 9, 8);
addNumbers('12 + 9 =', 12, 16); /*12 and 16*/

const squareNum = (num) => {
    console.log(num * num);
};

squareNum(2);
squareNum(4);
squareNum(12);
