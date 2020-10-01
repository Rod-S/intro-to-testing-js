// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
 return (input && typeof input !== 'boolean' && typeof input !== 'number') ? "Hello, " + input + "!" : "Hello, World!";
}

function isFive(input) {
    return (input == 5)
}

function isEven(input) {
    return (Number(input) % 2 === 0)
}

function isVowel(val) {
    if (val && typeof val == "string"){
        if ((val && val.match(/[AEIOU]/i)) && val.length === 1 ) {
            return true
        } else {
            return false
        }
    } else if (typeof val === "number") {
        return false
    }
    else {
        return false
    }
}

function add(num1, num2) {
return Number(num1 + num2) || NaN;
}