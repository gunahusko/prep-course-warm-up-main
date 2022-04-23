export {};

function greatest(...args: number[]): number {
    // return Math.max(x, y);
    // return x > y ? x : y;
    return args.reduce((x, y) => x > y ? x : y);
}

console.log(greatest(1, 2)); // Expected output: 2
console.log(greatest(5, 2)); // Expected output: 5
console.log(greatest(5, 2, 5, 6, 7)); // Expected output: 7