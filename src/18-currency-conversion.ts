export {};
/**
 * Currency Formatting
 *
 * The business is breaking out into a new market and need to convert prices to USD
 * Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
 */

// You are allowed to change only this function
const rate: number = 1.4;

function convertToUSD(price: number): number {
    return price * rate;
}

const product: string = "You don't know JS";
const price: number = 19.99;
const priceInUSD: number = convertToUSD(price);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD.toFixed(2));

/* Expected output:
    > Product: You don't know JS
    > Price: $27.99
*/