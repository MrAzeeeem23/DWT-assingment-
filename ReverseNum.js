function reverseNumber(inputNumber) {
    const reversed = parseInt(inputNumber.toString().split('').reverse().join(''));
    return reversed;
  }
  
  // Example usage:
  const inputNumber = 12345;
  const reversedNumber = reverseNumber(inputNumber);
  
  console.log(`Original number: ${inputNumber}`);
  console.log(`Reversed number: ${reversedNumber}`);
  