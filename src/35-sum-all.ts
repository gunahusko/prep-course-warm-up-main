export {};
/**
 * Implement a function which takes two integers and returns the sum of
 * every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function(num1: number, num2: number): number {

  let countNum: number[] = [];
  
    for (let i = Math.abs(num1); i <= num2; i++) {
        countNum.push(i);
    }
    
  return countNum.reduce((n1, n2) => n1 + n2);
};

console.log(sumAll(1, 4)); // Expected output: 10
console.log(sumAll(-1, 4)); // Expected output: 10