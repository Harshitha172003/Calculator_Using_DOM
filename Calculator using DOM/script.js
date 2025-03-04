/* jshint esversion: 6 */

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    let result;
    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "division") {
        result = num1 / num2;
    } else if (operation === "modulo") {
        result = num1 % num2;
    }

    document.getElementById("result").textContent = result;
    console.log(result);
}
