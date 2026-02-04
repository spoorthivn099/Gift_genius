// Get elements
const form = document.getElementById("giftForm");
const formSection = document.getElementById("form-section");
const paywallSection = document.getElementById("paywall-section");
const resultSection = document.getElementById("result-section");
const unlockBtn = document.getElementById("unlockBtn");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  // Hide form, show paywall
  formSection.style.display = "none";
  paywallSection.style.display = "block";
});

// Handle unlock button click
unlockBtn.addEventListener("click", function () {
  // Hide paywall, show results
  paywallSection.style.display = "none";
  resultSection.style.display = "block";
});
