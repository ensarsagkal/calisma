const tarih = document.getElementById("tarih")
const harcamaMiktari = document.getElementById("harcamaMiktari")
const harcamaAlani = document.getElementById("harcamaAlani")
const kaydet= document.getElementById("kaydet")
const ekle = document.getElementById("ekle")
const gelirInput = document.getElementById("gelirInput")
const kalan = document.getElementById("kalan")
const clear = document.getElementById("clear")



// window.addEventListener("load",()=>{
//     tbody.innerHTML=localStorage.getItem("tbody.İnnerHTML")
// })

kaydet.addEventListener("click",()=>{
    if(!(tarih.value.trim() &&harcamaAlani.value.trim() && harcamaMiktari.value.trim() )){alert("Eksik alan girdiniz")
}else{
    const tbody = document.getElementById("table1")
    // const tr = document.createElement("tr")
    const tr = tbody.insertRow()
    tr.id ="tr"
     const tarihtD = tr.insertCell(0)  
     const harcamaTd = tr.insertCell(1)  
     const miktarTd = tr.insertCell(2)
     miktarTd.id = 'data'  
     const islemTd = tr.insertCell(3) 
     tarihtD.textContent = tarih.value 
     harcamaTd.textContent = harcamaAlani.value 
     miktarTd.textContent = harcamaMiktari.value 
     islemTd.innerHTML = '<i class="text-danger d-block text-center fa-solid fa-trash"></i>'
     tarih.value = ""
     harcamaAlani.value = ""
     harcamaMiktari.value = ""
     budget()
     result()
    }
})
document.querySelector("tbody").addEventListener("click", (event)=>{

    if(event.target.classList.contains('fa-trash')){
        event.target.closest("tr").remove()
        budget()
        result()
    }
       
})
const gelirinArrayi =[]
ekle.addEventListener("click",()=>{
    gelirinArrayi.push(gelirInput.value)
    console.log(gelirinArrayi);
    const totalArray =gelirinArrayi.reduce((sum,num)=> sum + Number(num),0)
    console.log(totalArray);

   document.getElementById("gelir").textContent = totalArray


    result()
    
})


clear.addEventListener("click",()=>{
    document.getElementById('gider').textContent = 0
    document.getElementById("gelir").textContent = 0
    
    document.getElementById("kalan").textContent = 0
    document.getElementById("table1").textContent= ""
    
   
    // totalArray=0
    // result()


})



const budget = ()=>{
    const gider = document.getElementById('gider')
    const miktar = document.querySelectorAll('#data')
 
    const totalGider = [...miktar].reduce((sum,m)=> sum + Number(m.textContent),0)
    gider.textContent =totalGider
    
    

}

const result =()=>{
    kalan.textContent = document.getElementById("gelir").textContent - Number(gider.textContent)
}





// localStorage.setItem("wallet", "tbody.innerHTML")








