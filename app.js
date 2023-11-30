console.log("Hello World");

let number1_1 = document.getElementById("input1_1");
let number1_2 = document.getElementById("input1_2");
let submit1 = document.getElementById("submit1");
let result1 = document.getElementById("result1");

submit1.onclick = function () {
  result = (+number1_1.value + +number1_2.value) / 2;
  result1.textContent = result;
};

let number2_1 = document.getElementById("input2_1");
let number2_2 = document.getElementById("input2_2");
let submit2 = document.getElementById("submit2");
let result2 = document.getElementById("result2");

submit2.onclick = function () {
  result = +number2_1.value % +number2_2.value;
  result2.textContent = result;
};

let number4_1 = document.getElementById("input4_1");
let number4_2 = document.getElementById("input4_2");
let submit4 = document.getElementById("submit4");
let result4 = document.getElementById("result4");

submit4.onclick = function () {
  result = Math.max(number4_1.value, number4_2.value);
  result4.textContent = result;
};

let number5_1 = document.getElementById("input5_1");
let submit5 = document.getElementById("submit5");
let result5 = document.getElementById("result5");

submit5.onclick = function () {
  god = number5_1.value % 4;
  if (god == 0) {
    result = "Да - Високосный год";
  }
  if (god != 0) {
    result = "Нет";
  }

  result5.textContent = result;
};
