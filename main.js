/* Create a simple program that returns a price tag from the user, then give them a discount of 10 procent 

 

    Task: 

    1. Ask the user to enter a price tag using prompt(), for example: $49.99 

    2. Convert the input from string to number 

    3. Reduce the price by 10 procent 

    4. Print out the new price using console.log(), for example: 'Your new price is: $44.99' */

let input = prompt("How much?", "$");

console.log(input);

let price = parseFloat(input.slice(1))

console.log(price)5

let reducedPrice = price * 0.9;

console.log("Your new price is " + reducedPrice);
