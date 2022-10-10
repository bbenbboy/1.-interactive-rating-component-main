"use strict";

const primaryBtn = document.getElementById("bottons");
const scoreBtn1 = document.querySelector(".firstBtn");
const scoreBtn2 = document.querySelector(".secondBtn");
const scoreBtn3 = document.querySelector(".thirdBtn");
const scoreBtn4 = document.querySelector(".fouthBtn");
const scoreBtn5 = document.querySelector(".fifthBtn");

let summitbtn = document.getElementById("submit-button");
const scoreRate = document.querySelector(".scoreRate");

const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

let score = 0;
let currentScore = 0;

const container = document.getElementById("button-container");
// Get all buttons with class="btn" inside the container
const btns = container.getElementsByClassName("btn");

console.log(btns.length);

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

scoreBtn1.addEventListener("click", function () {
  console.log(scoreBtn1);
  currentScore = 1;
  return (scoreRate.textContent = currentScore);
});

scoreBtn2.addEventListener("click", function () {
  console.log(scoreBtn2);
  scoreBtn2.classList.add("orange");
  currentScore = 2;
  return (scoreRate.textContent = currentScore);
});

scoreBtn3.addEventListener("click", function () {
  console.log(scoreBtn3);
  currentScore = 3;
  return (scoreRate.textContent = currentScore);
});

scoreBtn4.addEventListener("click", function () {
  console.log(scoreBtn4);
  currentScore = 4;
  return (scoreRate.textContent = currentScore);
});

scoreBtn5.addEventListener("click", function () {
  console.log(scoreBtn5);
  currentScore = 5;
  return (scoreRate.textContent = currentScore);
});

summitbtn.addEventListener("click", function () {
  if ((summitbtn = this.click)) {
    card1.classList.add("hidden");
    card2.classList.remove("hidden");
  }
});
