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

// Retourner le plus petit des nombres premiers supérieurs ou égal à n
const findSupPrime = (n) => {
  let result = n;
  while (!isPrimeNumber(result)) {
    result++;
  }
  return result;
}

console.log(findSupPrime(10));