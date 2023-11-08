// !global variables
const day = document.querySelector(".day")
const addButton = document.getElementById("add")
const input = document.getElementById("input")
const ul = document.querySelector("ul")

const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

day.textContent = dayName[new Date().getDay()]


// !Events

window.addEventListener("load",()=>{
  ul.innerHTML =localStorage.getItem("toDo")
  input.focus()
  taskCount()
})


addButton.addEventListener("click",()=>{
  if(!input.value.trim()){
    alert("please enter a task or whatever!")
  }else{
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
      // ? added class that we've already created on css
      li.classList.add("li")
      p.classList.add("circle")
      task.classList.add("task")
      deleteButton.classList.add("sil")
      
  
  
      // ?print to screen
      task.appendChild(text)
      deleteButton.appendChild(x)
      input.value = ""

  }  
  localStorage.setItem("toDo",ul.innerHTML) 
  taskCount()

})


ul.addEventListener("click",(e)=>{
  if(e.target.classList.contains("sil")){
    e.target.parentElement.remove()
  }else if(e.target.classList.contains("circle")){
    e.target.classList.toggle("pchecked") 
    e.target.closest("li").querySelector("span").classList.toggle("span-checked")
  }else if(e.target.classList.contains("task")){
    e.target.classList.toggle("span-checked")
    e.target.closest("li").querySelector("p").classList.toggle("pchecked")
  }
localStorage.setItem("toDo",ul.innerHTML)  
taskCount()

})


input.addEventListener("keyup",(e)=>{
  if(e.key==="Enter"){
    addButton.click()
  }
})



// !functions

const taskCount = ()=>{
  const totalTasks = document.querySelectorAll("li").length
  const doneTasks =document.querySelectorAll(".pchecked").length
  const result = document.querySelector(".result")
  result.classList.add("result-task")
  result.textContent = `${doneTasks} out of ${totalTasks} Task Completed`
  if(!totalTasks){result.style.display ="none"
}else{
  result.style.display ="block"
}



}
