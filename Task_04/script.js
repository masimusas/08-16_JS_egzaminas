/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  fetch("cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((brand) => {
        const brandCard = document.createElement("div");
        brandCard.classList.add("brand-card");

        const brandName = document.createElement("h2");
        brandName.textContent = brand.brand;
        brandCard.appendChild(brandName);

        const modelsList = document.createElement("ul");
        modelsList.classList.add("models-list", "hidden"); // Hidden by default
        brand.models.forEach((model) => {
          const modelItem = document.createElement("li");
          modelItem.textContent = model;
          modelsList.appendChild(modelItem);
        });

        brandCard.appendChild(modelsList);
        output.appendChild(brandCard);

        brandName.addEventListener("click", () => {
          modelsList.classList.toggle("hidden");
        });
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
