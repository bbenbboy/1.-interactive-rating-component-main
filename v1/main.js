const buttonContainer = document.querySelector(".button-container");
const buttons = buttonContainer.querySelectorAll(".btn");
const submitBtn = buttonContainer.querySelector(".submit-btn");
const scoreRate = document.querySelector(".scoreRate");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

let score = 0;

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const btnActive = buttonContainer.querySelector(".active");

  if (btnActive) {
    scoreRate.textContent = score;
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  } else {
    alert("Please give a point");
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    score = button.value;
  });
});
