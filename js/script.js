const ratingPanel = document.getElementById("rating-panel");
const summaryPanel = document.getElementById("summary-panel");

const ratingForm = document.getElementById("rating-form");
const scoreText = document.getElementById("score");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const checked = document.querySelector('input[name="group1"]:checked').value;
  if (checked) {
    scoreText.innerText = `You selected ${checked} out of 5`;
    summaryPanel.classList.remove("hidden");
    summaryPanel.classList.add("flex");
    ratingPanel.classList.add("hidden");
    ratingPanel.classList.add("hidden");
  }
});
