export {};

function concatenate(firstWord: string, secondWord: string, thirdWord: string): string {
  return firstWord.concat(" ", secondWord, " ", thirdWord);
}

const result: string = concatenate("Hello", "from", "CODELEX");
console.log(result); // Expected output: "Hello from CODELEX"