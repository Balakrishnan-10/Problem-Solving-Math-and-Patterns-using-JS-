//* Find the LCM of two numbers:

function calculateLCM(num1, num2) {
    //console.log(num1, num2);
  
    function calculateGCD(a, b) {
      a = Number(a);
      b = Number(b);
      if (b === 0) {
        return a;
      } else {
        return calculateGCD(b, a % b);
      }
    }
  
    num1 = Number(num1);
    num2 = Number(num2);
    const lcm = num1 * num2 / calculateGCD(num1,num2)
    return `LCM of ${num1} and ${num2} id ${lcm}`; 
  }
  
  console.log(calculateLCM(48, 18));
  console.log(calculateLCM(22, 33));

//!---------------------------------------------------------------
