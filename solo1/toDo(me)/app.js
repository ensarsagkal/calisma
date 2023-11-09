const addButton = document.getElementById("add")
const clearAllButton = document.getElementById("clear")
const ul = document.querySelector("ul")




addButton.addEventListener("click",()=> {
    const li = document.createElement("li")
    const content = document.createElement("span")
    const removeButton = document.createElement("button")

    ul.appendChild(li)
    li.appendChild(content)
    li.appendChild(removeButton)

    content.textContent=(input.value)
    removeButton.textContent=("X")

    li.classList.add("li")
    content.classList.add("added-span")
    removeButton.classList.add("deleted")

})