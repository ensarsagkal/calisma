
// !------step 1--------
const header = document.querySelector(".header")
header.style.backgroundColor = "red"
header.style.color = "white"
header.style.padding = "10px"
header.style.textAlign = "center"

// !------step 2--------
document.getElementById("title").textContent = "JavaScript Dom Assignment 1"

// !------step 3--------
const navItem = document.querySelector(".nav-item")
navItem.style.display = "flex"
navItem.style.justifyContent = "center"
navItem.style.gap = "1rem"
navItem.style.listStyleType = "none"

// !------step 4--------
const userName =document.querySelector("#username")
userName.value = "Ensar" 
const password = document.querySelector("#password")
password.value = "123456"
password.type ="text"

// !------step 5--------
const button = document.querySelector(".btn")
button.style.backgroundColor = "lightgreen"
button.style.color = "navy"
button.style.padding = "5px 10px"
button.style.borderRadius = "5px"
button.style.cursor = "pointer"
button.style.border = "none"
button.textContent = "Giriş Yap"

// !------step 6--------
const projects = document.getElementById("projects")
projects.firstElementChild.innerText ="Js Dom Projects"


// !------step 7--------
const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"]

// projects.lastElementChild.innerHTML = "<li>hello world</li>"
// projects.lastElementChild.innerHTML = "<li>Gues Number</li>"
for(i of myProjects){
    const ul =projects.lastElementChild
    const li =document.createElement("li")
    li.innerText = `${i}`
    ul.appendChild(li)
    
}








// !sonradan---
//  const ul =projects.lastElementChild
//  const li =document.createElement("li")
//  li.textContent = "Guess Number"
//  ul.appendChild(li)