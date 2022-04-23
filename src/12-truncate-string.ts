export {};

function truncateString(word: string, num: number): string {
    return word.slice(0, num);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE