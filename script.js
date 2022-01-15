// query selector for number display
let numberDisplay = document.querySelector(".display");
// query selector to add
let addNumber = document.querySelector(".add");
// query selector to subtract
let subNumber = document.querySelector(".sub");
// variable to hold the count
let count = 0;

// event listener to add
addNumber.addEventListener("click", () =>{
  count++;
});
// event listener to subtract
subNumber.addEventListener("click", () =>{
  count--;
});
