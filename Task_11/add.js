const BASE_URL = "https://melon-potent-period.glitch.me";

const addForm = document.getElementById("add-form");

addForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const skillInput = document.getElementById("skill");
  const skill = skillInput.value.trim();

  if (skill) {
    try {
      const response = await fetch(`${BASE_URL}/skills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skill }),
      });

      if (response.ok) {
        alert("Skill added successfully");
        window.location.href = "index.html";
      } else {
        alert("Error adding skill");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Error adding skill");
    }
  }
});
