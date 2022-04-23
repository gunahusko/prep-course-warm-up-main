export {};

const repeatString = (char: string, num: number): string => {
    // return char.repeat(num);
    let makeString = "";

    for (let i = 0; i < num; i++) {
        makeString += char;
    }
    
    return makeString;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'