

 export const dataToUi=(data)=>{
    const products = document.getElementById("products")
    console.log(products);
    data.forEach((item)=>{
        const {title,description,category,price,image,id}=item
       products.innerHTML +=`
       <div class="col">
       <div class="card">
         <img
           src=${image}
           class="p-2"
           height="250px"
           alt="..."
         />
         <div class="card-body">
           <h5 class="card-title line1">${title}</h5>
           <p class="card-text line3">${description}</p>
         </div>
         <div
           class="card-footer w-100 fw-bold d-flex justify-content-between gap-3"
         >
           <span>Fiyatı:</span><span> ${price} ₺</span>
         </div>
         <div class="card-footer w-100 d-flex justify-content-center gap-3">
           <button class="btn btn-danger">Sepete Ekle</button>
           <button
             class="btn btn-primary"
             data-bs-toggle="modal"
             data-bs-target="#exampleModal"
           >
            Detayları Gör
           </button>
         </div>
       </div>
     </div>
       `
    })
}