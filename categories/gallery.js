/*// Shared gallery behavior for all category pages
const galleryContainer = document.getElementById("gallery");
const fullscreenView = document.getElementById("fullscreen-view");
const fullscreenImg = document.getElementById("fullscreen-img");
const closeBtn = document.querySelector(".close-btn");

// Reusable render function
function renderGallery(images) {
  galleryContainer.innerHTML = "";

  images.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    // SVG icons
    const copyIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h14
        c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
      </svg>
    `;

    const fullscreenIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
        <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 7h-3v2h5v-5h-2v3zm-3-9V5h5v5h-2V7h-3z"/>
      </svg>
    `;

    div.innerHTML = `
      <img src="${item.src}" alt="Prompt Image ${index + 1}">
      <div class="gallery-actions">
        <button class="copy-btn" title="Copy Prompt">${copyIcon}</button>
        <button class="fullscreen-btn" title="Fullscreen View">${fullscreenIcon}</button>
      </div>
    `;

    // Copy prompt to clipboard
    div.querySelector(".copy-btn").addEventListener("click", () => {
      navigator.clipboard.writeText(item.prompt).then(() => {
        // Custom smooth alert instead of browser alert
        const toast = document.createElement("div");
        toast.className = "copied-toast";
        toast.textContent = "✅ Prompt copied!";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 1500);
      });
    });

    // Fullscreen view
    div.querySelector(".fullscreen-btn").addEventListener("click", () => {
      fullscreenImg.src = item.src;
      fullscreenView.classList.remove("hidden");
    });

    galleryContainer.appendChild(div);
  });
}

// Close fullscreen
closeBtn.addEventListener("click", () => {
  fullscreenView.classList.add("hidden");
});
*/
// ====== Shared gallery behavior for all category pages ====== //
const galleryContainer = document.getElementById("gallery");
const fullscreenView = document.getElementById("fullscreen-view");
const fullscreenImg = document.getElementById("fullscreen-img");
const closeBtn = document.querySelector(".close-btn");

// Prompt Detail View elements
const promptDetail = document.getElementById("prompt-detail");
const detailImg = document.getElementById("detail-img");
const detailText = document.getElementById("detail-text");
const detailCopy = document.getElementById("detail-copy");
const closeDetail = document.querySelector(".close-detail");

// ====== Reusable render function without fade-in ====== //
function renderGallery(images) {
  galleryContainer.innerHTML = "";

  images.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    div.innerHTML = `
      <img src="${item.src}" alt="Prompt Image ${index + 1}" loading="lazy">
      <div class="gallery-actions">
        <button class="copy-btn" title="Copy Prompt">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy Prompt</span>
        </button>

        <button class="fullscreen-btn" title="Fullscreen View">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2" viewBox="0 0 24 24">
            <path d="M15 3h6v6M9 21H3v-6M21 9V3h-6M3 15v6h6"></path>
          </svg>
          <span>View</span>
        </button>
      </div>
    `;

    const imgEl = div.querySelector("img");
    const copyBtn = div.querySelector(".copy-btn");
    const fullscreenBtn = div.querySelector(".fullscreen-btn");

    // Copy prompt
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(item.prompt).then(() => showCopiedToast());
    });

    // Fullscreen view
    fullscreenBtn.addEventListener("click", () => {
      fullscreenImg.src = item.src;
      fullscreenView.classList.remove("hidden");
    });

    // Prompt Detail View
    imgEl.addEventListener("click", () => {
      detailImg.src = item.src;
      detailText.textContent = item.prompt;
      promptDetail.classList.remove("hidden");
    });

    galleryContainer.appendChild(div);
  });
}

// ====== Fullscreen close ====== //
closeBtn.addEventListener("click", () => {
  fullscreenView.classList.add("hidden");
});

// ====== Detail view close ====== //
closeDetail.addEventListener("click", () => {
  promptDetail.classList.add("hidden");
});

// ====== Copy prompt from detail view ====== //
detailCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(detailText.textContent).then(() => showCopiedToast());
});

// ====== Toast notification ====== //
function showCopiedToast() {
  const toast = document.createElement("div");
  toast.className = "copied-toast";
  toast.textContent = "Prompt copied!";
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1500);
}


// ===== Loader Handling =====
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000); // delay for better visual effect
});



// ===== Search Functionality =====
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim().toLowerCase();

  // category pages mapping
  const categories = {
    cinematic: "categories/cinematic.html",
    luxury: "categories/luxury.html",
    natural: "categories/natural.html",
    traditional: "categories/traditional.html",
    wildlife: "categories/wildlife.html",
    "with car": "categories/with-car.html",
    car: "categories/with-car.html"
  };

  if (!query) {
    alert("Please enter a keyword to search.");
    return;
  }

  // find a matching category
  let found = false;
  for (let key in categories) {
    if (query.includes(key)) {
      window.location.href = categories[key];
      found = true;
      break;
    }
  }

  // if no match found
  if (!found) {
    alert("No matching category found. Try: cinematic, luxury, natural, traditional, wildlife, or car.");
  }
});
