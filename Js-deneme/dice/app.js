const button1 = document.querySelector("#button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const result = document.querySelector(".result")




const numToString = {
    1:"one",
    2: "two",
    3:"three",
    4:"four",
    5:"five",
    6:"six"
}


let num1 = 0 
let num2 = 0

const getNum = ()=>{
    return Math.ceil(Math.random() * 6)
}


button1.addEventListener("click",()=>{
    num1=getNum()
    
})
button2.addEventListener("click",()=>{
    num2=getNum()
    
})
button3.addEventListener('click', ()=>{
    if(num1>num2){
        result.innerHTML = `${numToString[num2]} - ${numToString[num1]}`;
    }
    else{
        result.textContent = `${numToString[num1]} - ${numToString[num2]}`;
    }
    
    num1=0
    num2=0
    
});




