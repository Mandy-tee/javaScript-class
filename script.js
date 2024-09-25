const toDos = ['wake up','bath', 'eat', 'exercise'];
console.log(toDos);

// Get Element by id
const viewButton = document.getElementById ('view-button');
console.log(viewButton);

//es5 Syntax
//function [name of the func () = {}]
function showtoDos () {
    alert("The function has been called");
}

//function call
showtoDos();

// add a click event to the view button
viewButton.addEventListener('click', showtoDos);

//function and secondNum are placeholders and parameters
function addNumbers (text, firstNum, secondNum) {
   // let firstNum =35;
    // let secondNum = 8;

    let total = firstNum + secondNum;
    //console.log(text)
    console.log(text+total)
}

addNumbers("2 + 5 = ", 2 , 5); // 2 and 5
addNumbers(9, 8); // 9 and 8
addNumbers(12, 16); // 12 and 16

function squareNumbers (num) {
console.log(num * num);
}

squareNumbers(2);
squareNumbers(4);
squareNumbers(12);

//es6 Syntax
//function
