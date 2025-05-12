// 🔐 Simple front-end access control
const USERNAME = "mohand";
const PASSWORD = "1234"; // You can change this

(function () {
  const user = prompt("Enter username:");
  const pass = prompt("Enter password:");

  if (user !== USERNAME || pass !== PASSWORD) {
    alert("Access denied.");
    document.body.innerHTML = `
  <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  ">
    <div style="
      background-color: red;
      color: white;
      padding: 30px 60px;
      border-radius: 15px;
      font-size: 2.5rem;
      font-weight: bold;
      box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
      text-align: center;
    ">
      Access Denied
    </div>
  </div>
`;
    throw new Error("Unauthorized access");
  }
})();
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get search input element
  const searchInput = document.getElementById("search");

  // Add event listener for search
  searchInput.addEventListener("keyup", filterApps);

  // Search function to filter apps
  function filterApps() {
    const filter = searchInput.value.toLowerCase();
    const cards = document.getElementsByClassName("app-card");

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const name = card.getAttribute("data-name").toLowerCase();
      if (name.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    }
  }

  // You can add more JavaScript functionality here
  // For example, fetching app status or dynamic content

  // Example: Change header title
  // document.querySelector('h1').textContent = "Custom Dashboard Name";
});
