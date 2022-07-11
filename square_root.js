// Racine carrée
const computeSquareRoot = (n) => {
  let result = n;
  while (result * result !== n) {
    result = (result + n / result) / 2;
  }
  return result;
}

console.log(computeSquareRoot(9));

