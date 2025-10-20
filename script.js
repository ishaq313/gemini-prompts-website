// === Fade-in Animation on Scroll ===
/* Smooth Fade-In Animation */


// === Simple Search Interactivity ===
const searchBtn = document.querySelector("button i.fas.fa-search")?.parentElement;
const searchInput = document.querySelector(".search-box input");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`Searching prompts for: ${query}`);
    } else {
      alert("Please enter a prompt keyword.");
    }
  });
}


// === Scroll-to-Top Button ===
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// === Floating WhatsApp Button (Optional Placeholder) ===
// This feature will be added in the next step — once we insert the HTML & styles.
