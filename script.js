const buttons = document.querySelectorAll(".numberBtn");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

let num1 = null;
let num2 = null;
let ope = null;
const operators = ["+", "-", "*", "/"];


buttons.forEach(item => {
    item.addEventListener("click", calculate);
})


function calculate() {
    let userInput = this.value;

    if (userInput == "AC") {
        clearEverything();

    }else if (userInput == "DEL") {
        input.value = input.value.substr(0, input.value.length - 1);
        return;

    }else if (operators.includes(userInput)) {
        input.value = null;
        num1 = operate(num1, num2, ope);
        result.value = num1;
        ope = userInput;
        num2 = null;

    }else if (userInput == "=") {
        input.value = null;
        num1 = operate(num1, num2, ope);
        result.value = num1;
        num2 = null;

    }else if (userInput == "+") {
        if (num2 !== null) {
            num2 = num2 * 1;
            input.value = (num2)
        }

    }else if (userInput == "-") {
        if (num2 !== null) {
            num2 = num2 * -1;
            input.value = (num2)
        }

    }else if (userInput == ".") {
        if (!input.value.includes(".")) {
            input.value += userInput;
        }

    }else {
        input.value += userInput;
        num2 = Number(input.value);
        input.value = num2;
        return;
    }
}

function operate(x, y, ope) {
    if (ope === "+") {
        return x + y;
    }else if (ope === "-") {
        return x - y;
    }else if (ope === "*") {
        return x * y;
    }else if (ope === "/") {
        if (y === 0) {
            return "Infinity";
        } else {
            return (x / y).toFixed(3);
        }
    }else {
        return y;
    }
}


function clearEverything() {
    input.value = "";
        result.value = 0;
        ope = null;
        num1 = null;
        num2 = null;
        return;
    
}

