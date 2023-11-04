// const button1 = document.querySelector("#button1")
// const button2 = document.getElementById("button2")
// const button3 = document.getElementById("button3")
// const result = document.querySelector(".result")




// const numToString = {
//     1:"one",
//     2: "two",
//     3:"three",
//     4:"four",
//     5:"five",
//     6:"six"
// }


// let num1 = 0 
// let num2 = 0

// const getNum = ()=>{
//     return Math.ceil(Math.random() * 6)
// }


// button1.addEventListener("click",()=>{
//     num1=getNum()
    
// })
// button2.addEventListener("click",()=>{
//     num2=getNum()
    
// })
// button3.addEventListener('click', ()=>{
//     if(num1>num2){
//         result.innerHTML = `${numToString[num2]} - ${numToString[num1]}`;
//     }
//     else{
//         result.textContent = `${numToString[num1]} - ${numToString[num2]}`;
//     }
    
//     num1=0
//     num2=0
    
// });




const btn1 = document.getElementById("button1")
const btn2 = document.getElementById("button2")
const btn3 = document.getElementById("button3")

const result = document.querySelector(".result")


strToNum = {
    1 :"one",
    2 :"two",
    3 :"three",
    4 :"four",
    5 :"five",
    6 :"six",
}
let num1 = 0
let num2 = 0


const getRandomNumber =()=>{
    return Math.floor(Math.random()* 6) +1
}
btn1.addEventListener("click",()=>{
  num1= getRandomNumber()
  console.log(num1);
  console.log(strToNum[num1]);
})
btn2.addEventListener("click",()=>{
  num2= getRandomNumber()
  console.log(num2);
  console.log(strToNum[num2]);
})


btn3.addEventListener("click",()=>{
    if(num1>num2){
        result.textContent=` ${strToNum[num2]} --- ${strToNum[num1]}`
    }else{
        result.textContent=` ${strToNum[num1]} --- ${strToNum[num2]}`
    }
    num1=0
    num2=0
})