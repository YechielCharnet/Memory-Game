"use strict";

let name = null;
let email = null;
let password = null;
let usersArray = [];

function saveUser() {
  name = document.getElementById("username").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  let tempUsersArray = localStorage.getItem("usersArray");

  if (name && email && password) {
    if (tempUsersArray) {
      usersArray = JSON.parse(tempUsersArray);
      for (let i = 0; i < usersArray.length; i++) {
        if (email === usersArray[i]["email"]) {
          alert("AAAAAAA");
          break;
        }
      }
    }
    usersArray.push({
      name: name,
      email: email,
      password: password,
    });
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
  }
}
console.log(usersArray[0]);
document.querySelector("button").addEventListener("click", saveUser);
