const findGiftBtn = document.getElementById("findGift");
const unlockBtn = document.getElementById("unlockBtn");

const formSection = document.getElementById("form-section");
const paywallSection = document.getElementById("paywall-section");
const resultSection = document.getElementById("result-section");

const ageSelect = document.getElementById("age");
const aiResult = document.getElementById("aiResult");

findGiftBtn.addEventListener("click", () => {
  if (ageSelect.value === "") {
    alert("Please select an age group");
    return;
  }
  formSection.classList.add("hidden");
  paywallSection.classList.remove("hidden");
});

unlockBtn.addEventListener("click", () => {
  paywallSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  generateAIGift();
});

function generateAIGift() {
  let gift = "";

  switch (ageSelect.value) {
    case "baby":
      gift = "🧸 Soft toys, personalized baby blanket & memory photo book.";
      break;
    case "child":
      gift = "🎨 Coloring kits, storybooks, DIY craft box & learning games.";
      break;
    case "teen":
      gift = "🎧 Wireless earbuds, LED lights, aesthetic journal & trendy accessories.";
      break;
    case "adult":
      gift = "⌚ Personalized watch, perfume set, custom bouquet & handwritten note.";
      break;
    case "senior":
      gift = "📖 Memory journal, wellness kit, devotional items & framed family photo.";
      break;
  }

  aiResult.innerText = "AI Suggestion: " + gift;
}

function generateCustomGift() {
  const text = document.getElementById("customText").value;
  const output = document.getElementById("customResult");

  if (text.trim() === "") {
    output.innerText = "Please describe the person 😊";
    return;
  }

  output.innerText =
    "🎁 Custom AI Gift: A thoughtfully curated gift box with a handwritten note, something they love, and a keepsake that matches their personality.";
}
