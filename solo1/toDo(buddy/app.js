const input = document.getElementById("input")
const addBtn = document.getElementById("add")
const clearBtn = document.getElementById("clear")
const ul = document.querySelector("ul")

// addBtn.addEventListener("click",()=>{
//     const li = document.createElement("li")
//     const spanX = document.createElement("span")
//     ul.appendChild(li)
//     li.appendChild(spanX)
//     li.textContent= input.value
//     spanX.textContent= ("X")
//     li.classList.add("liJs")
//     spanX.classList.add("spanJs")


   


// })
addBtn.addEventListener("click",()=>{
    const li = document.createElement("li")
    const spanX = document.createElement("span")
    spanX.textContent= ("X")
    spanX.classList.add("spanJs")
    li.textContent= input.value
    li.appendChild(spanX)
    li.classList.add("liJs")
    ul.appendChild(li)
})

