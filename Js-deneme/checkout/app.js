document.querySelector(".nav__list--btn").addEventListener("click",(e)=>{
    document.querySelector(".main__product-painel").remove()
    const par = document.createElement("p")
    const text = document.createTextNode("No Products!")
    par.appendChild(text)
    document.querySelector(".main__products-preview").appendChild(par)
    par.style.backgroundColor = "white"


    document.querySelector(".main__sum-price").textContent = "0.00"
    document.querySelectorAll(".main__summary--info span.dollar")
    .forEach((item)=>(item.textContent ="0.00"))
})


document.querySelector(".main__product-painel").addEventListener("click",(e)=>{
    if(e.target.classList.contains("fa-plus")){
     e.target.previousElementSibling.textContent++
    }
})
