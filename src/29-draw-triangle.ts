export {};
/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 *
 * After you've finished this exercise (first of all, congrats! loops can be hard),
 * here are some more exercises similar to this one.
 *  - https://github.com/codelex-io/noob-exercises/tree/main/01-loops
 * Be warned - some of the exercises there can certainly be a tough nuts to crack.
 */

function draw(num: number): string | void {
  let drawStar: string ="";

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            if (i >= j ) {
                drawStar += "*";
            }
        }
      drawStar += "\n";
    }

  console.log(drawStar);
}

draw(3);
/* Expected output:
    *
    **
    ***
*/

draw(5);
/* Expected output:
    *
    **
    ***
    ****
    *****
*/