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