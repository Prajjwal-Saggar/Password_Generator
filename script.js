let slider = document.querySelector("#slider");
let digit = document.querySelector("#digit");
let display = document.querySelector("#display");
let generateButton = document.querySelector("button");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let lowercase = document.querySelector("#lowercase");
let copy = document.getElementById("copy-btn");
let tick = document.getElementById("tick-btn");

digit.innerHTML = 10;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let largeCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberCase = "1234567890";
let symbolCase = "!@#$%^&*()_+";

slider.addEventListener("input", () => {
  digit.innerHTML = slider.value;
});
generateButton.addEventListener("click", () => {
  var staticPassword = "";
  let selectedSet = [];
  if (uppercase.checked) {
    selectedSet.push(largeCase);
  }
  if (lowercase.checked) {
    selectedSet.push(lowerCase);
  }
  if (symbols.checked) {
    selectedSet.push(symbolCase);
  }
  if (numbers.checked) {
    selectedSet.push(numberCase);
  }

  if (selectedSet.length === 0) {
    alert("Please Select Atleast One Parameter");
  }

  for (let i = 0; i < slider.value; i++) {
    let choose = getRandomSet(...selectedSet);
    staticPassword = staticPassword + getRandomChar(choose);
  }

  function getRandomSet(...sets) {
    let randomIndex = Math.floor(Math.random() * sets.length);
    return sets[randomIndex];
  }

  function getRandomChar(charset) {
    return charset[Math.floor(Math.random() * charset.length)];
  }
  console.log(staticPassword);
  display.value = staticPassword;
});

copy.addEventListener("click", async () => {
  // navigator.clipboard.writeText(display.value);
  try{
    // display.select();
    await navigator.clipboard.writeText(display.value);
    copy.style.display = "none";
    tick.style.display = "inline";
  setTimeout(() => {
    copy.style.display = "inline";
    tick.style.display = "none";
  }, 2000);
  }catch (error){
    alert(error);
  }
});
