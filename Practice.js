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

//* Check if a number is palindrome.

function isPalindrome(num) {
  let temp = num;
  let reverse = 0;
  while (temp > 0) {
    let lastdigit = temp % 10;
    reverse = reverse * 10 + lastdigit;
    temp = Math.floor(temp / 10);
  }
  console.log(num, reverse);
  return reverse == num;
}
console.log(isPalindrome(121));
console.log(isPalindrome(12134));
console.log(isPalindrome(123321));
console.log(isPalindrome(13461));

//!------------------------------------------------------

//* Check if a number is prime.(Time Complexity and Algorithms).
//? A number is only divisible by 1 and itself.This is called Prime Number.

function isPrime(num) {
  console.log(num);
  //* One Method but time complexity is more:
  //   let conut = 0;
  //   for (let i = 2; i < num; i++) {
  //       count++;
  //     if (num % i == 0) {
  //       return false;
  //     }
  //   }
  //   return true;

  //* Reduce the number of itertion:
  //   let count = 0;
  //   for (let i = 2; i < num/2; i++) {
  //     count++;
  //     if (num % i == 0) {
  //       return false;
  //     }
  //   }
  //   return [true,count];

  //* Remove the square of the i value:
  //   let count = 0;
  //   for (let i = 2; i * i < num; i++) {
  //     count++;
  //     if (num % i == 0) {
  //       return [false,count];
  //     }
  //   }
  //   return [true, count];

  let count = 0;
  if (num == 2) return [true, count];
  if (num % 2 == 0) return [true, count];
  for (let i = 3; i * i <= num; i += 2) {
    count++;
    if (num % i == 0) {
      return [false, count];
    }
  }
  return [true, count];
}
console.log(isPrime(101));
console.log(isPrime(19));
console.log(isPrime(8));
console.log(isPrime(16));
console.log(isPrime(23));

//!------------------------------------------------------

//* Print Hollow Square Pattern:
function hollowSquare(num) {
  //console.log(num);
  const pattern = [];
  for (let row = 0; row < num; row++) {
    const rowValues = [];
    for (let col = 0; col < num; col++) {
      if (row == 0 || col == 0 || row == num - 1 || col == num - 1) {
        rowValues.push("*");
      } else {
        rowValues.push(" ");
      }
    }
    pattern.push(rowValues.join(" "));
  }
  console.log(pattern.join("\n"));
}
hollowSquare(10);

//!------------------------------------------------------

//* Print a right angled trianglepattern of asterisks:
function rightAngleTriangle(num) {
  //console.log(num);
  for (let row = 0; row < num; row++) {
    const rowValues = [];
    for (let col = 0; col <= row; col++) {
      rowValues.push("*");
    }
    console.log(rowValues.join(" "));
  }
}
rightAngleTriangle(10);

//!------------------------------------------------------

