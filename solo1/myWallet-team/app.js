
// !ekle formu selector
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")



let gelirler = 0;



//  ! hesap tablosu selectors

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

// ! harcama formu selectors
 const harcamaFormu =document.getElementById("harcama-formu")
 const harcamaAlaniInput =document.getElementById("harcama-alani")
 const tarihInput =document.getElementById("tarih")
 const miktarInput =document.getElementById("miktar")

// ! harcama tablosu selector
const harcamaBody = document.getElementById("harcama-body")

// ! temizle buton selector
const temizleBtn= document.getElementById("temizle-btn")




// ? EVENTS

window.addEventListener("load",()=>{
    gelirler= Number(localStorage.getItem("gelirler")) || 0
    gelirinizTd.innerText=gelirler
})


ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    ekleFormu.reset()
    gelirinizTd.textContent = gelirler
    

})