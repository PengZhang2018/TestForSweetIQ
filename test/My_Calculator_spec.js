var assert = require("assert");
var myCalculator = require("../models/My_Calculator");

describe("My calculator works fine if ...", function () {
    var firstNumber = 1.2;
    var secondNumber = 0.6;

    describe("Provide '+' operator and two numbers to it", function () {
        it("it returns the sum of two numbers", function () {
            var sum = myCalculator("+", firstNumber, secondNumber);
            assert.equal(sum, 1.8, "Didn't return correct sum");
        });
    });

    describe("Provide '-' operator and two numbers to it", function () {
        it("it returns the difference between two numbers", function () {
            var difference = myCalculator("-", firstNumber, secondNumber);
            assert.equal(difference, 0.6, "Didn't return correct difference");
        });
    });

    describe("Provide '*' operator and two numbers to it", function () {
        it("it returns the product of two numbers", function () {
            var product = myCalculator("*", firstNumber, secondNumber);
            assert.equal(product, 0.72, "Didn't return correct product");
        });
    });

    describe("Provide '/' operator and two numbers to it", function () {
        it("it returns proper error message to indicate 0 cannot be the numerator", function () {
            var result = myCalculator("/", firstNumber, 0);
            assert.equal(result, "Numerator cannot be 0", "Didn't return proper error message.")
        });

        it("it return the quotient of two numbers", function () {
            var quotient = myCalculator("/", firstNumber, secondNumber);
            assert.equal(quotient, 2, "Didn't return correct quotient");
        });
    });

    describe("Provide invalid operator and two numbers to it", function () {
        it("it returns proper error message to indicate only arithmetic operators are supported", function () {
            var result = myCalculator("%", firstNumber, secondNumber);
            assert.equal(result, "Please provide valid operator, only arithmetic operators are supported", "Didn't return proper error message");
        });
    });

});
