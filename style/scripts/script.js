// 🔐 Simple front-end access control
const USERNAME = "MohandL3G";
const PASSWORD = "9199@mhD"; // You can change this

(function () {
  // Check if user is already logged in
  if (localStorage.getItem("loggedIn") === "true") {
    return; // Skip login prompt
  }

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

  // If login successful, set loggedIn flag in localStorage
  localStorage.setItem("loggedIn", "true");
})();

// Add logout button dynamically after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Create logout button element
  const logoutBtn = document.createElement("img");
  logoutBtn.src = "style/images/close.png"; // your logout icon path
  logoutBtn.alt = "Logout";
  logoutBtn.title = "Logout";
  logoutBtn.style.position = "fixed";
  logoutBtn.style.top = "20px";
  logoutBtn.style.right = "20px";
  logoutBtn.style.width = "40px";
  logoutBtn.style.height = "40px";
  logoutBtn.style.cursor = "pointer";
  logoutBtn.style.zIndex = "9999";
  logoutBtn.style.filter = "drop-shadow(0 0 3px rgba(0,0,0,0.5))";

  // Append to body
  document.body.appendChild(logoutBtn);

  // Logout function
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    location.reload();
  });

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
});
