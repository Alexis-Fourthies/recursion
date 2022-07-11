// Savoir si n est un nombre premier
const isPrimeNumber = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(8));

// Retourner la liste des nombres premiers supérieurs ou égal à n
const findSupPrime = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    if (isPrimeNumber(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(findSupPrime(10));