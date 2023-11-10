const tarih = document.getElementById("tarih")
const harcamaMiktari = document.getElementById("harcamaMiktari")
const harcamaAlani = document.getElementById("harcamaAlani")
const kaydet= document.getElementById("kaydet")
const ekle = document.getElementById("ekle")
const gelirInput = document.getElementById("gelirInput")

kaydet.addEventListener("click",()=>{
    if(!(tarih.value.trim() &&harcamaAlani.value.trim() && harcamaMiktari.value.trim() )){alert("Eksik alan girdiniz")
}else{
    const tbody = document.getElementById("table1")
    // const tr = document.createElement("tr")
    const tr = tbody.insertRow()
     const tarihtD = tr.insertCell(0)  
     const harcamaTd = tr.insertCell(1)  
     const miktarTd = tr.insertCell(2)  
     const islemTd = tr.insertCell(3) 
     tarihtD.textContent = tarih.value 
     harcamaTd.textContent = harcamaAlani.value 
     miktarTd.textContent = harcamaMiktari.value 
     islemTd.innerHTML = '<i class="text-danger d-block text-center fa-solid fa-trash"></i>'
     tarih.value = ""
     harcamaAlani.value = ""
     harcamaMiktari.value = ""
     
    }
})
document.querySelector("tbody").addEventListener("click", (event)=>{

    if(event.target.classList.contains('fa-trash')){
        event.target.closest("tr").remove()
    }
       
})

ekle.addEventListener("click",()=>{
    document.getElementById("gelir").textContent = gelirInput.value
})

