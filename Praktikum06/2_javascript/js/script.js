/**
 * Created by Sarah on 22.10.2014.
 */

function square(squareInt) {
    var squareProduct = squareInt * squareInt;
    console.log("the square of " + squareInt + " is " + squareProduct);
}

function fun(funnyMessage) {
    console.log("Hello from fun, I was called with argument " + funnyMessage + " and with 3000ms delay.");
}

function hello() {
    fun("hello world");
}

var timeoutID;

function delayedAlert() {
    timeoutID = window.setTimeout(hello, 3000);
}

// do it
square(5);

delayedAlert();

