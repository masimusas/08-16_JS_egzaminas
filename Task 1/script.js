/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const submitButton = document.getElementById("submit-btn");
const outputElement = document.getElementById("output");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const inputElement = document.getElementById("search");
  const inputValue = parseFloat(inputElement.value);

  if (!isNaN(inputValue)) {
    const lb = (inputValue * 2.2046).toFixed(2);
    const g = inputValue / 0.001;
    const oz = (inputValue * 35.274).toFixed(2);

    const resultHTML = `
      <p>Svarai (lb): ${lb}</p>
      <p>Gramai (g): ${g}</p>
      <p>Uncijos (oz): ${oz}</p>
    `;

    outputElement.innerHTML = resultHTML;
  } else {
    outputElement.innerHTML = "<p>Please enter a valid number.</p>";
  }
});
