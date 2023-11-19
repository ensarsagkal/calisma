const searchInput = document.querySelector("#search");
const selectBar = document.querySelector("#select-bar");
const countries = document.querySelector(".countries");


const getApi = async ()=>{
    try {
        const res= await fetch("https://restcountries.com/v3.1/all/")
        if (res.ok){
            console.log(res);
            const data = await  res.json()
            console.log(data);
            // showData(data)
            selectBarOptions(data)
          
            
        }else{
            throw new Error( `Hata Oluştu : ${res.status}`)
        }
    } catch (error) { console.log(error);}
}

getApi()


let countriesArr=[]

const selectBarOptions= (country)=>{
    //' country.forEach((c)=> countriesArr.push(c.name.common))
    countriesArr = country.map((c)=>c.name.common)
    
    console.log(countriesArr);

  

}
