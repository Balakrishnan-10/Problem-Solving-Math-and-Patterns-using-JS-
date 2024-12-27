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

//* Generate the Fibonacci sequence up to Nth terms.

function fibonacciOfNTerm(n) {
  console.log(n);
  //* One Method :
  //   const fibo = [];
  //   if (n >= 1) fibo.push(0);
  //   if (n >= 2) fibo.push(1);
  //   if (n >= 3) {
  //     for (let i = 2; i < n; i++) {
  //       fibo.push(fibo[i - 1] + fibo[i - 2]);
  //     }
  //   }
  //   return `The Fibonacci series of ${n} is ${fibo}`;

  //* Another Method :
  //   const fibo1 = [0, 1, 1];
  //   for (let i = 2; i <= n; i++) {
  //     fibo1.push(fibo1[i] + fibo1[i - 1]);
  //   }
  //   return `The Fibonacci series of ${n} is ${fibo1[n + 1]}`;

  //* Without Using Array :
  let first = 0;
  let second = 1;
  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp = first + second;
    first = second;
    second = temp;
  }
  return `The Fibonacci series of ${n} is ${second}`;
}
console.log(fibonacciOfNTerm(0));
console.log(fibonacciOfNTerm(1));
console.log(fibonacciOfNTerm(6));

//!------------------------------------------------------
