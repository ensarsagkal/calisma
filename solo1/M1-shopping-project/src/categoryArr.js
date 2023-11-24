



export const categoryArrFunc = (data)=>{
   
  const categoryArr=data.reduce((acc,product)=>{
    if(!product.category){
        categoryArr.push(product.category)
    }
  },[])
  console.log(categoryArr);
  return categoryArr


}
