/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return this.budget > 1_000_000;
  }
}

// Testavimas
const hollywood = new Movie("Matrix", "Wachowski", 63_000_000);
const hollywood1 = new Movie("Zero 3", "Emilis Vėlyvis", 350_000);

console.log(hollywood.wasExpensive());
console.log(hollywood1.wasExpensive());
