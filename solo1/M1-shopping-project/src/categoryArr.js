import { dataToUi } from "./dataToUi"



export const categoryArrFunc = (data)=>{
   
  const categoryArr=data.reduce((acc,product)=>{
    if(!acc.includes(product.category)){
        acc.push(product.category)
    }
    // console.log(acc);
    return acc
  },[])

 categoryArr.unshift("All")
//  console.log(categoryArr);



 
 const btns= document.getElementById("btns")
 categoryArr.forEach((categorName)=>{
    // btns.innerHTML+=`
    // <button class="btn btn-warning">${categorName}</button>
    // `
    const button = document.createElement('button');
    
    button.type = 'button';
    button.textContent= categorName
    btns.appendChild(button)
    button.addEventListener("click",(e)=>{
      products.innerHTML=""
      if(e.target.textContent=="All"){
        dataToUi(data)
      }else{
      
      let filtered = data.filter((item)=>item.category==categorName)
      
      dataToUi(filtered)}
      
 })





})

}
