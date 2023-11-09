const addButton = document.getElementById("add")
const clearAllButton = document.getElementById("clear")
const ul = document.querySelector("ul")
const act = document.querySelector(".action")



addButton.addEventListener("click",()=> {
if(!input.value.trim()){
    alert("Enter a Task Please")
}else{
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

    input.value = ""
}

})

clearAllButton.addEventListener("click",(e)=>{
   if( confirm("All Tasks will clear...Are you sure?")){
    // e.target.nextElementSibling.remove()
    // const ul =document.createElement("ul")
    // act.appendChild(ul)
   }
})