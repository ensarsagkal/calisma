const addButton = document.getElementById("add")
const clearAllButton = document.getElementById("clear")
const ul = document.querySelector("ul")
const action = document.querySelector(".action")

// ! events

window.addEventListener("load",()=>{
    ul.innerHTML = localStorage.getItem('todo')
    input.focus()
    taskCounter()
})

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
localStorage.setItem('todo',ul.innerHTML)
taskCounter()

})


clearAllButton.addEventListener("click", () => {
    if (confirm("Tüm görevler silinecek... Emin misiniz?")) {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        localStorage.setItem('todo',ul.innerHTML)
        taskCounter()
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
    }else if(e.target.classList.contains("li")){
        e.target.querySelector(".added-span").classList.toggle("span-checked")
        e.target.querySelector(".today-date").classList.toggle("today-ended")
    }
    localStorage.setItem('todo',ul.innerHTML)
    taskCounter()
})






// !functions
 const taskCounter= ()=>{
    const totalTask = document.querySelectorAll("li").length
    const doneTask = document.querySelectorAll(".span-checked").length
   const resultCounter = document.querySelector(".result") 
  
   resultCounter.classList.add("counter")
   resultCounter.textContent= `${doneTask} out of ${totalTask} Task completed`;

   if(!totalTask){
    resultCounter.style.display = "none"
}else{
    resultCounter.style.display = "block"
}


 }

