let questionList = [
  {
    quest: "What is the color of sky",
    options: ["Blue", "Green", "purple", "pink"],
    correct_ans: 1,
  },
  {
    quest: "Which is the best Smartphone Brand?",
    options: ["Samsung", "Apple", "Pixel", "One Plus"],
    correct_ans: 2,
  },
  {
    quest: "How many bones are there in human body?",
    options: ["199", "201", "180", "206"],
    correct_ans: 4,
  },
  {
    quest: "What is the color of sky?",
    options: ["Blue", "Green", "purple", "pink"],
    correct_ans: 1,
  },
  {
    quest:
      "Which is the largest democracy in the world in terms of population?",
    options: ["USA", "England", "Russia", "India"],
    correct_ans: 4,
  },
];

// const questionList = require("./questions.json");

let startButton = document.querySelector(".start_button");
let startPage = document.querySelector(".start_page");
let quizPage = document.querySelector(".quiz_page");
let questionDiv = document.querySelector(".question");
let optionsDiv = document.querySelector(".options");
let nextButton = document.querySelector(".nextBtn");
let prevButton = document.querySelector(".prevBtn");
let submitButton = document.querySelector(".submitBtn");
let resultScreen = document.querySelector(".result");
let ans = "0";
let count = 0;
let result = 0;

function getCurrentQuestion() {
  questionDiv.innerHTML = "";
  questionDiv.innerText = `${questionList[count].quest}`;
}

function getOptions() {
  optionsDiv.innerHTML = "";
  questionList[count].options.forEach((opt, index) => {
    let div = document.createElement("div");
    div.innerHTML = `<span>${
      index + 1
    }</span> <input class="inputAns" name=${count}  type="radio" value=${
      index + 1
    } /> <span>${opt}</span>`;
    optionsDiv.appendChild(div);
  });
}

startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  quizPage.style.display = "";
  getCurrentQuestion();
  getOptions();
});

nextButton.addEventListener("click", () => {
  let selected = document.querySelector(
    `input[name="${count}"]:checked`
  );
  let selectedAns = selected?.value === null ? 0 : selected?.value;
  if (+selectedAns === questionList[count].correct_ans) result++;

  count++;
  if (count > 0) prevButton.style.display = "";
  if (count === questionList.length - 1) nextButton.style.display = "none";
  if (count === questionList.length - 1) submitButton.style.display = "";
  getOptions();
  getCurrentQuestion();
});

prevButton.addEventListener("click", () => {
  count--;
  result--;
  if (count === questionList.length - 1) nextButton.style.display = "none";
  if (count < questionList.length) nextButton.style.display = "";
  if (count <= 0) prevButton.style.display = "none";
  getOptions();
  getCurrentQuestion();
});

submitButton.addEventListener("click", () => {
    let selected = document.querySelector(
        `input[name="${count}"]:checked`
      );
      let selectedAns = selected?.value === null ? 0 : selected?.value;
      if (+selectedAns === questionList[count].correct_ans) result++;
  resultScreen.style.display = "";
  resultScreen.innerHTML = `<span>${result}</span>`;
  console.log(result);
});