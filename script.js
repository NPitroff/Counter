// query selector for number display
let numberDisplay = document.querySelector(".display");
// query selector to add
let addNumber = document.querySelector(".add");
// query selector to subtract
let subNumber = document.querySelector(".sub");
// variable to hold the count
let count = 0;
// calling the update function to show current number
updateCount();

// event listener to add
addNumber.addEventListener("click", () =>{
  count++;
  updateCount();
});
// event listener to subtract
subNumber.addEventListener("click", () =>{
  count--;
  updateCount();
});

// function to change the count in the HTML
function updateCount(){
  numberDisplay.innerHTML = count;
};
