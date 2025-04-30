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
