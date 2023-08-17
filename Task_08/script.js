/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {
    this.sum = function (a, b) {
      return a + b;
    };

    this.subtraction = function (a, b) {
      return a - b;
    };

    this.multiplication = function (a, b) {
      if (a !== 0 && b !== 0) {
        return a * b;
      } else {
        alert("Multiplication by zero always return zero.");
        return a * b;
      }
    };

    this.division = function (a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error("Division by zero is not allowed.");
      }
    };
  }
}

const calc = new Calculator();

// Testavimas
console.log(calc.sum(2, 2));
console.log(calc.subtraction(2, 2));
console.log(calc.multiplication(2, 0));
console.log(calc.division(2, 0));
