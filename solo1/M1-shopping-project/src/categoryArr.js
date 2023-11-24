



export const categoryArrFunc = (data)=>{
   
  const categoryArr=data.reduce((acc,product)=>{
    if(!acc.includes(product.category)){
        acc.push(product.category)
    }
    // console.log(acc);
    return acc
  },[])

 categoryArr.unshift("All")
 console.log(categoryArr);



 
 const btns= document.getElementById("btns")
 categoryArr.forEach((categorName)=>{
    btns.innerHTML+=`
    <button class="btn btn-warning">${categorName}</button>
    `
 })

return categoryArr

}


