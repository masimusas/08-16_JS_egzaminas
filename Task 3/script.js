/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const btn = document.getElementById("btn");
const output = document.getElementById("output");
const message = document.getElementById("message");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    output.innerHTML = "";
    message.style.display = "none";

    data.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");

      const userAvatar = document.createElement("img");
      userAvatar.src = user.avatar_url;
      userAvatar.alt = `${user.login}'s avatar`;
      userCard.appendChild(userAvatar);

      const userLogin = document.createElement("h3");
      userLogin.textContent = user.login;
      userCard.appendChild(userLogin);

      output.appendChild(userCard);
    });
  } catch (error) {
    console.error(error);
  }
});
