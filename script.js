const inputElements = document.querySelectorAll("input");
const total_total = document.querySelector(".total-total");

const theoryElements = [
  document.querySelector(".theory1"),
  document.querySelector(".theory2"),
  document.querySelector(".theory3"),
  document.querySelector(".theory4"),
  document.querySelector(".theory5"),
];

const practicalElements = [
  document.querySelector(".practical1"),
  document.querySelector(".practical2"),
  document.querySelector(".practical3"),
  document.querySelector(".practical4"),
  document.querySelector(".practical5"),
];

const totalElements = [
  document.querySelector(".total1"),
  document.querySelector(".total2"),
  document.querySelector(".total3"),
  document.querySelector(".total4"),
  document.querySelector(".total5"),
];

function calculateTotal() {
  let totalVal = 0;
  totalElements.forEach((totalElement) => {
    totalVal += parseInt(totalElement.innerHTML) || 0;
  });
  total_total.innerHTML = totalVal;
  updateResult(totalVal);
}

function handleInput(index) {
  return function (e) {
    const value = e.target.value;
    totalElements[index].innerHTML =
      Number(value) + Number(practicalElements[index].value);
    calculateTotal();
  };
}

function handlePracticalInput(index) {
  return function (e) {
    const value = e.target.value;
    totalElements[index].innerHTML =
      Number(value) + Number(theoryElements[index].value);
    calculateTotal();
  };
}

theoryElements.forEach((theoryElement, index) => {
  theoryElement.addEventListener("input", handleInput(index));
});

practicalElements.forEach((practicalElement, index) => {
  practicalElement.addEventListener("input", handlePracticalInput(index));
});

function updateResult(total) {
  const result = document.querySelector(".result");
  const percentage = document.querySelector(".percentage");
  const grade = document.querySelector(".grade");

  result.innerHTML = total < 290 ? "Fail" : "Pass";

  let per = total / 5;
  percentage.innerHTML = per + "%";

  if (per >= 90) {
    grade.innerHTML = "A+";
  } else if (per >= 80) {
    grade.innerHTML = "A";
  } else if (per >= 70) {
    grade.innerHTML = "B";
  } else if (per >= 60) {
    grade.innerHTML = "C";
  } else {
    grade.innerHTML = "F";
  }
}
