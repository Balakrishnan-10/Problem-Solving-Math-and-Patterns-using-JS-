//* Calculate the factorial of a number.

function factorial(n) {
  console.log(n);
  let product = 1;
 //* For Loop :
    for (let i = n; i > 0; i--) {
      product = product * i;
    }
    return `The factorial of ${n} is ${product}`;
  }

//* while loop :
//   let product1 = 1;
//   while (n > 0) {
//     product1 = product1 * n;
//     n--;
//   }
//   return `The factorial of ${n} is ${product1}`;
// }

console.log(factorial(5));
console.log(factorial(7));

//!------------------------------------------------------
