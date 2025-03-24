let input = prompt("How much?", "$");

console.log(input);

let price = parseFloat(input.slice(1));

console.log(price);

let reducedPrice = price * 0.9;

console.log("Your new price is " + reducedPrice);
