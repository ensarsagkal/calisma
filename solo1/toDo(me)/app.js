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
    const todayDate=document.createElement("span")
    const removeButton = document.createElement("button")

    ul.appendChild(li)
    li.appendChild(content)
    li.appendChild(todayDate)
    li.appendChild(removeButton)

    content.textContent=(input.value)
    todayDate.textContent=(new Date().getDay() +"/"+ new Date().getMonth()+"/"+new Date().getFullYear())
    removeButton.textContent=("X")

    li.classList.add("li")
    content.classList.add("added-span")
    todayDate.classList.add("today-date")
    removeButton.classList.add("deleted")

    input.value = ""
}

})


clearAllButton.addEventListener("click", () => {
    if (confirm("Tüm görevler silinecek... Emin misiniz?")) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});

document.addEventListener("keyup",(e)=>{
    if(e.key ==="Enter"){
        addButton.click()
    }else if(e.key==="Escape"){
        clearAllButton.click()
    }
})



ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("added-span")){
        e.target.classList.toggle("span-checked")
        e.target.nextElementSibling.classList.toggle("today-ended")
    }else if(e.target.classList.contains("deleted")){
        e.target.parentElement.remove()
    }
})