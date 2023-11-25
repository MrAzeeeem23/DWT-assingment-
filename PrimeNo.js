function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}
  

const inputNumber = 11;
const result = isPrime(inputNumber);
  
if (result) {
    console.log(`${inputNumber} is a prime number.`);
} else {
    console.log(`${inputNumber} is not a prime number.`);
}
  