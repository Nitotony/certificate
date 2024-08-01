const input = document.querySelectorAll("input");
const total_total = document.querySelector(".total-total");

const theory1 = document.querySelector(".theory1");
const practical1 = document.querySelector(".practical1");
const total1 = document.querySelector(".total1");
theory1.addEventListener("input", (e) => {
  const value = e.target.value;
  total1.innerHTML = Number(value) + Number(practical1.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});
practical1.addEventListener("input", (e) => {
  const value = e.target.value;
  total1.innerHTML = Number(value) + Number(theory1.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);
  updateResult(Number(totalVal));
});

const theory2 = document.querySelector(".theory2");
const practical2 = document.querySelector(".practical2");
const total2 = document.querySelector(".total2");
theory2.addEventListener("input", (e) => {
  const value = e.target.value;
  total2.innerHTML = Number(value) + Number(practical2.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});
practical2.addEventListener("input", (e) => {
  const value = e.target.value;
  total2.innerHTML = Number(value) + Number(theory2.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});

const theory3 = document.querySelector(".theory3");
const practical3 = document.querySelector(".practical3");
const total3 = document.querySelector(".total3");
theory3.addEventListener("input", (e) => {
  const value = e.target.value;
  total3.innerHTML = Number(value) + Number(practical3.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});
practical3.addEventListener("input", (e) => {
  const value = e.target.value;
  total3.innerHTML = Number(value) + Number(theory3.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});

const theory4 = document.querySelector(".theory4");
const practical4 = document.querySelector(".practical4");
const total4 = document.querySelector(".total4");
theory4.addEventListener("input", (e) => {
  const value = e.target.value;
  total4.innerHTML = Number(value) + Number(practical4.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});
practical4.addEventListener("input", (e) => {
  const value = e.target.value;
  total4.innerHTML = Number(value) + Number(theory4.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});

const theory5 = document.querySelector(".theory5");
const practical5 = document.querySelector(".practical5");
const total5 = document.querySelector(".total5");
theory5.addEventListener("input", (e) => {
  const value = e.target.value;
  total5.innerHTML = Number(value) + Number(practical5.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});
practical5.addEventListener("input", (e) => {
  const value = e.target.value;
  total5.innerHTML = Number(value) + Number(theory5.value);

  const totalVal =
    parseInt(total1.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total2.innerHTML) +
    parseInt(total4.innerHTML) +
    parseInt(total5.innerHTML);

  total_total.innerHTML = Number(totalVal);

  updateResult(Number(totalVal));
});

function updateResult(total) {
  const result = document.querySelector(".result");
  const percentage = document.querySelector(".percentage");
  const grade = document.querySelector(".grade");

  if (total < 285) {
    result.innerHTML = "Fail";
  } else {
    result.innerHTML = "Pass";
  }

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
  }
}
