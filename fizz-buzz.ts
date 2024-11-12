// TypeScript function FizzBuzz, which determines the output for each number
function fizzBuzz(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return num.toString(); // return the number as a String format if no condition applies
    }
}

// for loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i)); // call the function and print the result for each number
}

/* NOTES:
   1. Used tsc --init command, to generate a tsconfig.json file (to compile the program without creating a seperate JS file)
   2. Ran the program using --> ts-node fizz-buzz.ts
*/