//méthode itérative de calcul de la factorielle
const computeFactorialIt = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(computeFactorialIt(5));

//méthode récursive de calcul de la factorielle
const computeFactorialRec = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * computeFactorialRec(n - 1);
}

console.log(computeFactorialRec(6));