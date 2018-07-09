var myCalculator = function (operator, firstNumber, secondNumber) {

    var operatorValue = operator.replace(/\s+/g, '');
    var validOperators = ["+", "-", "*", "/"];
    operatorIsValid = validOperators.indexOf(operatorValue) >= 0;

    if (operatorIsValid == false) {
        return "Please provide valid operator, only arithmetic operators are supported";
    }

    if (operatorValue == "+") {
        return parseFloat(firstNumber + secondNumber).toPrecision(14);
    }

    if (operatorValue == "-") {
        return parseFloat(firstNumber - secondNumber).toPrecision(14);
    }

    if (operatorValue == "*") {
        return parseFloat(firstNumber * secondNumber).toPrecision(14);
    }

    if (operatorValue == "/") {
        if (secondNumber == 0) {
            return "Numerator cannot be 0";
        }
        return parseFloat(firstNumber / secondNumber).toPrecision(14);
    }

}

module.exports = myCalculator;