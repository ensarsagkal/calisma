const tarih = document.getElementById("tarih")
const harcamaMiktari = document.getElementById("harcamaMiktari")
const harcamaAlani = document.getElementById("harcamaAlani")
const kaydet= document.getElementById("kaydet")
const ekle = document.getElementById("ekle")
const gelirInput = document.getElementById("gelirInput")
const kalan = document.getElementById("kalan")

kaydet.addEventListener("click",()=>{
    if(!(tarih.value.trim() &&harcamaAlani.value.trim() && harcamaMiktari.value.trim() )){alert("Eksik alan girdiniz")
}else{
    const tbody = document.getElementById("table1")
    // const tr = document.createElement("tr")
    const tr = tbody.insertRow()
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

ekle.addEventListener("click",()=>{
    document.getElementById("gelir").textContent = gelirInput.value
    result()
    
})


const budget = ()=>{
    const gider = document.getElementById('gider')
    const miktar = document.querySelectorAll('#data')
 
    const totalGider = [...miktar].reduce((sum,m)=> sum + Number(m.textContent),0)
    gider.textContent =totalGider
    
    

}

const result =()=>{
    kalan.textContent = Number(gelirInput.value) - Number(gider.textContent)
}













// const tarih = document.getElementById('tarih')

// const harcamaMiktari = document.getElementById('harcamaMiktari')

// const harcamaAlani = document.getElementById('harcamaAlani')

// const kaydet = document.getElementById('kaydet')






// kaydet.addEventListener('click',() =>{
// if(!(tarih.value && harcamaAlani.value &&harcamaMiktari.value )){
//     alert('eksik bilgi girdiniz')
// }
// else {

//     const tbody = document.getElementById('table1')

//     //    const tr = document.createElement('tr')
//     //    tbody.appendChild(tr)
    
//     const tr = tbody.insertRow()
//     const tarihTd = tr.insertCell(0)
//     const harcamaTd = tr.insertCell(1)
//     const miktarTd = tr.insertCell(2)
//      miktarTd.id = 'data'
//     const islemTd = tr.insertCell(3)
    
//     tarihTd.textContent = tarih.value ;
//     harcamaTd.textContent = harcamaAlani.value;
//     miktarTd.textContent = harcamaMiktari.value;
//     islemTd.innerHTML = '<i class="fa-solid fa-trash text-danger d-block text-center"></i>'
    
//     // const giderMiktarı = harcamaMiktari.value
//     // console.log(giderMiktarı);

 
// // const giderTotal = document.getElementById('gider')

// // giderTotal.textContent = arrGider.reduce((sum,x)=>sum+Number(x),0)

//     tarih.value = ''
//     harcamaAlani.value = ''
//     harcamaMiktari.value = ''
// }

// budget()
// localStorage.setItem('bütce',tbody.innerHTML)

// })




// document.querySelector("tbody").addEventListener("click", (event)=>{

//     if(event.target.classList.contains('fa-trash')){
//         event.target.closest("tr").remove()
//     }

//     budget()
//     localStorage.setItem('bütce',tbody.innerHTML)
    
// })


// const ekle = document.getElementById('ekle')
// const gelirInput = document.getElementById('gelirInput')



// const budget = ()=>{

//     ekle.addEventListener('click',()=>{

//         document.getElementById('gelir').textContent = gelirInput.value
//         localStorage.setItem('bütce',tbody.innerHTML)
       
//     })
    

//     const gider = document.getElementById('gider')
//     const miktar = document.querySelectorAll('#data')
 
//     const totalGider = [...miktar].reduce((sum,m)=> sum + Number(m.textContent),0)
//     gider.textContent =totalGider
    
//     //? kalanı bulma

//     const kalan = document.getElementById('kalan')
//     kalan.textContent = Number(gelirInput.value) - Number(gider.textContent )

//     // tbody.innerHTML = localStorage.getItem('bütce')

// }










