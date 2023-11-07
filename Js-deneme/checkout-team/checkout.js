
// !variables

const SHIPPING_PRICE = 25.99
const FREE_SHIPPING_LIMIT = 3000
const TAX_RATE = 0.18



const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")


// !events
deleteProducts.addEventListener("click",()=>{
  if(confirm("emin misiniz?")){
    noProductPrint()
    calculateTotalPrice()
  }
})

products.addEventListener("click",(e)=>{
  if(e.target.classList.contains("fa-plus")){
    e.target.previousElementSibling.textContent++
    calculateProductPrice(e.target)
  }else if(e.target.classList.contains("fa-minus")){
    e.target.nextElementSibling.textContent>1 && e.target.nextElementSibling.textContent--
    calculateProductPrice(e.target)
  }else if(e.target.classList.contains("fa-trash-can")){
    e.target.closest(".product").remove()
    calculateProductPrice(e.target)  //? calculateTotalPrice() da olabilir
  }
})
window.addEventListener("load", () => {
  calculateTotalPrice()
})










// !functions

const noProductPrint = ()=> {
  
  products.textContent = "No products!"
  products.classList.add("no-product")
  document.querySelector(".delete-div").style.display = "none"
}
const calculateProductPrice = (button)=>{
  const quantity = button.closest(".buttons-div").querySelector("#quantity").textContent
  const discountedPrice = button.closest(".product").querySelector("#discounted-price").textContent
  const productPrice = button.closest(".buttons-div").querySelector("#product-price")
  productPrice.textContent= (quantity * discountedPrice).toFixed(2)
  calculateTotalPrice()
}
const calculateTotalPrice = ()=>{
  const price = document.querySelectorAll("#product-price")
  const reducedTotal = [...price].reduce((sum,prc)=>sum +Number(prc.textContent),0)
  document.getElementById("selected-price").textContent = reducedTotal.toFixed(2)

 const shippingPrice = reducedTotal>FREE_SHIPPING_LIMIT || reducedTotal ===0 ? 0 : SHIPPING_PRICE
 document.getElementById("shipping").textContent = shippingPrice.toFixed(2)

 const taxPrice = reducedTotal* TAX_RATE
 document.getElementById("tax").textContent = taxPrice.toFixed(2)

 const totalPrice = reducedTotal + shippingPrice + taxPrice
 document.getElementById("total").textContent = totalPrice.toFixed(2)

!totalPrice && noProductPrint()


}