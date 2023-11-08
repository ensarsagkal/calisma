// !global variables
const day = document.querySelector(".day")
const addButton = document.getElementById("add")
const input = document.getElementById("input")
const ul = document.querySelector("ul")

const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.textContent = dayName[new Date().getDay()]


// !Events
addButton.addEventListener("click",()=>{
    
    // ?  created element sect.
    const li = document.createElement("li")
    const p = document.createElement("p")
    const task = document.createElement("span")
    const deleteButton = document.createElement("button")
   
    // ?  chained to parents that we created above
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(task)
    li.appendChild(deleteButton)

    // ?  contents
    const text =document.createTextNode(input.value)
    const x = document.createTextNode("X")

    li.classList.add("li")
    p.classList.add("circle")
    task.classList.add("task")
    deleteButton.classList.add("sil")



    task.appendChild(text)
    task.appendChild(x)

})