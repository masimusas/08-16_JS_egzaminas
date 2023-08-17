const BASE_URL = "https://melon-potent-period.glitch.me";
const skillsTable = document.getElementById("skills-table");

// Function to fetch and display skills
async function fetchAndDisplaySkills() {
  try {
    const response = await fetch(`${BASE_URL}/skills`);
    const skills = await response.json();

    skillsTable.innerHTML = `<thead>
            <tr>
                <th>ID</th>
                <th>Skill</th>
                <th>Action</th>
            </tr>
        </thead>`;
    skills.forEach((skill) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${skill.id}</td>
        <td>${skill.skill}</td>
        <td><button data-id="${skill.id}" class="delete-button button">Delete</button></td>
      `;
      skillsTable.appendChild(row);
    });

    attachDeleteHandlers();
  } catch (error) {
    console.error("Error fetching skills:", error);
    alert("Error fetching skills");
  }
}

// Function to attach delete handlers to buttons
function attachDeleteHandlers() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      const id = event.target.getAttribute("data-id");
      try {
        const response = await fetch(`${BASE_URL}/skill/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Skill deleted successfully");
          fetchAndDisplaySkills();
        } else {
          alert("Error deleting skill");
        }
      } catch (error) {
        console.error("Error deleting skill:", error);
        alert("Error deleting skill");
      }
    });
  });
}

// Fetch and display skills on page load
fetchAndDisplaySkills();
