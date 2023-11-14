
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
const kalanTh = document.getElementById("kalanTh")

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
    harcamaListesi =JSON.parse(localStorage.getItem("harcamalar")) || []
    harcamaListesi.forEach((harcama) => harcamayiDomaYaz(harcama))
    hesaplaVeGuncelle()
})


ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    localStorage.setItem("gelirler", gelirler)
    ekleFormu.reset()
    hesaplaVeGuncelle()
   
    

})

harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault()
    const yeniHarcama= {
        id : new Date().getTime(),
        // tarih : tarihInput.value,
        tarih: new Date(tarihInput.value).toLocaleDateString(),
        alan : harcamaAlaniInput.value,
        miktar : miktarInput.value
    }
        harcamaFormu.reset()
        tarihInput.valueAsDate = new Date()
        harcamaListesi.push(yeniHarcama)
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
        harcamayiDomaYaz(yeniHarcama)
        hesaplaVeGuncelle()
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



harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target)

    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
    }
    //silinen harcamanın id sini alır
    const id = e.target.id
    // console.log(id)
    // silinen harcamayı array den çıkarır
    harcamaListesi = harcamaListesi.filter((harcama => harcama.id != id))
    //yeni array i local e update eder
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    //silindikten sonra yeniden hesapla

    hesaplaVeGuncelle()



})

// !bilgileri temizle
temizleBtn.addEventListener("click",()=>{
    if(confirm("Emin misiniz?")){
        harcamaListesi = []
        gelirler = 0
        localStorage.clear()
        harcamaBody.innerHTML= ""
        hesaplaVeGuncelle()
    }
})

// !hesapla ve güncelle alt tabloyu yazan fonksiyon

const hesaplaVeGuncelle = ()=>{
    gelirinizTd.textContent = gelirler
    const gideriniz  = harcamaListesi.reduce((sum,harcama)=> sum + Number(harcama.miktar) ,0)
    giderinizTd.textContent= gideriniz
    kalanTd.textContent = gelirinizTd.textContent -giderinizTd.textContent
   
        // kalanTh.classList.toggle("text-danger",kalanTd.textContent<0)
        // kalanTd.classList.toggle("text-danger",kalanTd.textContent<0) 

        // * ya da...

        const  borclu = gelirler - gideriniz <0;
         
        kalanTd.classList.toggle("text-danger",borclu)
        kalanTh.classList.toggle("text-danger",borclu)
    }