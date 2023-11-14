//***********************************/
//*        CHECKOUT APP
//***********************************/



//! CONSTANTS
const SHIPPING_PRICE = 25.99
const FREE_SHIPPING_LIMIT = 3000
const TAX_RATE = 0.18

//! SELECTORS
const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")





deleteProducts.addEventListener("click",()=>{
  noProductPrint()
  calculateTotalPrice()
  
})


products.addEventListener("click",(e)=>{
  if(e.target.classList.contains("fa-plus")){
    e.target.previousElementSibling.textContent++
    calculateProductPrice(e.target)
    
  }else if(e.target.classList.contains("fa-minus")){
    if(e.target.nextElementSibling.textContent >1){
    e.target.nextElementSibling.textContent--
  
    calculateProductPrice(e.target)
    }
  }else if(e.target.classList.contains("fa-trash-can")){
    e.target.closest(".product").remove()
    calculateTotalPrice()
    
  }

})







const calculateProductPrice = (btn)=>{
  const discountedPrice = btn.closest(".product-info").querySelector("#discounted-price").textContent

  const quantity = btn.closest(".buttons-div").querySelector("#quantity").textContent

  const productPrice = btn.closest(".buttons-div").querySelector("#product-price")

  productPrice.textContent = Number(discountedPrice * quantity).toFixed(2)
  calculateTotalPrice()
}


const calculateTotalPrice =()=>{
  const productPriceList = document.querySelectorAll("#product-price")
  const sumOfproductPriceList = [...productPriceList].reduce((sum,num)=>sum+ Number(num.textContent),0)
  const selectedPrice = document.getElementById("selected-price")
  selectedPrice.textContent = Number(sumOfproductPriceList).toFixed(2)

  const shippingPrice = sumOfproductPriceList >FREE_SHIPPING_LIMIT ||  sumOfproductPriceList===0 ? 0: SHIPPING_PRICE
  document.getElementById("shipping").textContent= shippingPrice.toFixed(2)

  const taxPrice =  sumOfproductPriceList * TAX_RATE
  document.getElementById("tax").textContent = taxPrice.toFixed(2)

  const fullTotal = sumOfproductPriceList + taxPrice + shippingPrice
  document.getElementById("total").textContent = fullTotal.toFixed(2)

  !fullTotal && noProductPrint()


}

const noProductPrint =  ()=>{
  products.textContent="No product!"
  products.classList.add("no-product")
  document.querySelector(".delete-div").style.display = "none"
}
window.addEventListener("load",()=>{
  calculateTotalPrice()
})




















