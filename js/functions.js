// Func-1



// function power(a, n) {
//   return Math.pow(a, n);
// }

// console.log(power(3, 5));




// Func-2



// function mean(a, b) {
//   const arithmeticMean = (a + b) / 2;
//   const geometricMean = Math.sqrt(a * b);
//   return `${arithmeticMean}, ${geometricMean}`;
// }

// console.log(mean(12, 48));




// Func-3



// function sign(n) {
//   if (n < 0) {
//     return -1;
//   } else if (n > 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(sign(10));




// Func-4



// function numberOfRoots(A, B, C) {
//   const D = B * B - 4 * A * C;
//   if (D > 0) {
//     return 2;
//   } else if (D === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(numberOfRoots(1, -6, 9));




// Func-5



// function areaCircle(R) {
//   const S = Math.PI * Math.pow(R, 2);
//   return S;
// }

// console.log(areaCircle(5));




// Func-6



// function sumRange(A, B) {
//   if (A > B) {
//     return 0;
//   }
  
//   let sum = 0;
//   for (let i = A; i <= B; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumRange(8, 10));




// Func-7



// function calc(A, B, S) {
//   let result = 0;
//   switch (S) {
//     case '+':
//       result = A + B;
//       break;
//     case '-':
//       result = A - B;
//       break;
//     case '*':
//       result = A * B;
//       break;
//     case '/':
//       result = A / B;
//       break;
//     default:
//       result = 0;
//       break;
//   }
//   return result;
// }

// console.log(calc(10, 15, '*'));
// console.log(calc(7, 8, '+'));




// Func-8



// function isEven(K) {
//   return K % 2 === 0;
// }

// console.log(isEven(10));




// Func-9



// function sortABC(a, b, c) {
//   const min = Math.min(a, b, c);
//   const max = Math.max(a, b, c);
//   const mid = a + b + c - min - max;
//   return `${min}, ${mid}, ${max}`;
// }

// console.log(sortABC(10, 5, 8));




// Func-10



// function isPowerN(K, N) {
//   if (K === 1) {
//     return true;
//   }
  
//   let power = 1;
//   while (power <= K) {
//     if (power === K) {
//       return true;
//     }
//     power *= N;
//   }
//   return false;
// }

// console.log(isPowerN(8, 2));




// Func-11



// function isPrime(N) {
//   if (N <= 1) {
//     return false;
//   }
  
//   for (let i = 2; i <= Math.sqrt(N); i++) {
//     if (N % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(7));




// Func-12



// function numberOfPrime(N) {
//   let count = 0;
//   for (let i = 2; i <= N; i++) {
//     if (isPrime(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(numberOfPrime(10)); 




// Func-13



// function digitCount(K) {
//   return K.toString().length;
// }

// function digitNth(K, N) {
//   const count = digitCount(K);
//   if (N > count) {
//     return -1;
//   }
  
//   const digits = K.toString().split('').map(Number);
//   return digits[count - N];
// }

// console.log(digitNth(105782, 5));
// console.log(digitNth(1057, 5)); 




// Func-14



// function inverseNumber(N) {
//   const digits = N.toString().split('').reverse().join('');
//   return parseInt(digits, 10);
// }

// console.log(inverseNumber(56814)); 




// Func-15



// function isPalindrom(N) {
//   return N === inverseNumber(N);
// }

// console.log(isPalindrom(1678761));




// Func-16



// function factorial(N) {
//   if (N < 0) {
//     return 1;
//   }
  
//   let result = 1;
//   for (let i = 1; i <= N; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));




// Func-17



// function getSum3(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getSum3(15));




// Func-18



// function sumOddEven(N) {
//   let sumOdd = 0;
//   let sumEven = 0;
//   for (let i = 1; i <= N; i++) {
//     if (i % 2 === 0) {
//       sumEven += i;
//     } else {
//       sumOdd += i;
//     }
//   }
//   return `${sumOdd}, ${sumEven}`;
// }

// console.log(sumOddEven(10)); 




// Func-19



// function invertTime(H, M, S) {
//   const T = H * 3600 + M * 60 + S;
//   return T;
// }

// console.log(invertTime(0, 6, 40)); 




// Func-20



// function decTime(H, M, S) {
//   const T = H * 3600 + M * 60 + S;
//   const prevT = T - 1;
//   const prevH = Math.floor(prevT / 3600);
//   const prevM = Math.floor((prevT % 3600) / 60);
//   const prevS = prevT % 60;
//   return `${prevH.toString().padStart(2, '0')}:${prevM.toString().padStart(2, '0')}:${prevS.toString().padStart(2, '0')}`;
// }

// console.log(decTime(0, 6, 40)); 




// Func-21



// function isLeapYear(Y) {
//   if (Y % 400 === 0) {
//     return true;
//   } else if (Y % 100 === 0) {
//     return false;
//   } else if (Y % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isLeapYear(2020)); 




// Func-22



// function monthDays(M, Y) {
//   const leapYear = isLeapYear(Y);
//   switch (M) {
//     case 2:
//       return leapYear ? 29 : 28;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       return 30;
//     default:
//       return 31;
//   }
// }

// console.log(monthDays(2, 2020));
// console.log(monthDays(3, 2021)); 




// Func-23



// function prevDate(D, M, Y) {
//   const daysInMonth = monthDays(M, Y);
//   const prevD = D - 1;
//   let prevM = M;
//   let prevY = Y;
//   if (prevD === 0) {
//     prevM--;
//     if (prevM === 0) {
//       prevM = 12;
//       prevY--;
//     }
//     prevD = monthDays(prevM, prevY);
//   }
//   return `${prevD.toString().padStart(2, '0')}.${prevM.toString().padStart(2, '0')}.${prevY}`;
// }

// console.log(prevDate(10, 3, 2022));




// Func-24



// function nextDate(D, M, Y) {
//   const daysInMonth = monthDays
// }