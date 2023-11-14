
// !ekle formu selector
const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")



let gelirler = 0;
let harcamaListesi= []


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
    tarihInput.valueAsDate = new Date()
    // harcamaListesi = localStorage.getItem("")
})


ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    ekleFormu.reset()
    gelirinizTd.textContent = gelirler
    

})

harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    const yeniHarcama= {
        id : new Date().getTime(),
        tarih : tarihInput.value,
        alan : harcamaAlaniInput.value,
        miktar : miktarInput.value
    }
        harcamaFormu.reset()
        tarihInput.valueAsDate = new Date()
        harcamaListesi.push(yeniHarcama)
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
        harcamayiDomaYaz(yeniHarcama)
})


// ! harcamayı dom a yazdıran fonksiyon
const harcamayiDomaYaz = ({id,miktar,tarih,alan})=>{
    const tr = document.createElement("tr")

    const appendTd=(content)=>{
        const td = document.createElement("td")
        td.textContent = content;
        return td
    }
    const createLastTd = () =>{
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id= id
        iElement.className ="fa-solid fa-trash-can text-danger"
        iElement.type="button"
        td.appendChild(iElement)
        return td

    }
    tr.append(          
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd()
    )

    harcamaBody.prepend(tr)
}