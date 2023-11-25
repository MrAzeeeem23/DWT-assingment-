function isArmstrong(number) {
    const numString = number.toString();
    const numDigits = numString.length;
    let sum = 0;
  
    for (let i = 0; i < numDigits; i++) {
      sum += Math.pow(parseInt(numString[i]), numDigits);
    }
  
    return sum === number;
  }
  
  // Example usage:
  const inputNumber = 153;
  const result = isArmstrong(inputNumber);
  
  if (result) {
    console.log(`${inputNumber} is an Armstrong number.`);
  } else {
    console.log(`${inputNumber} is not an Armstrong number.`);
  }
  