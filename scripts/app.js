"use strict";

const grid = document.getElementById("grid");
let numOfCards = 16;
for (let i = 0; i < numOfCards; i++) {
  const div = document.createElement("div");
  div.classList.add("card")
  div.innerHTML = "A";
  div.addEventListener("click", flippedCard)
  grid.append(div)
}

function flippedCard(){
    this.classList.add("flipped")
}
