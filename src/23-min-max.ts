export {};
/**
 * Try to find at least two different solutions for this exercise,
 * one of which does not use built-in Math methods.
 */

const min = (array: number[]): number => {
//  Nr.1 solution -> return array.reduce((num1, num2) => num1 < num2 ? num1 : num2);
//  Nr.2 solution -> return Math.min(...array);
//  Nr.3 solution -> return array.sort((a,b) => a-b).shift();
 // Nr.4 solution:

    let findMin: number = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < findMin) {
            findMin = array[i];
        }
    }

    return findMin;  
};

function max(array: number[]): number {
// Nr.1 solution -> return array.reduce((num1, num2) => num1 > num2 ? num1 : num2);
// Nr.2 solution -> return Math.max(...array);
// Nr.3 solution -> return array.sort((a,b) => a-b).pop();
// Nr.4 solution:

    let findMax: number = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > findMax) {
            findMax = array[i];
        }
    }
    
    return findMax;
}

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9