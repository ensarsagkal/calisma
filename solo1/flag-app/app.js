// ! selectors




// !========================
const BASE_URL = "https://restcountries.com/v3.1/all/"

const countryApis = async ()=>{
  
  try {
    const res = await fetch(`${BASE_URL}`)

    if(!res.ok){
        throw new Error (`hata : ${res.status}`)
        
}
const data =await res.json()
allCountriesDatas= data

//  data.forEach((country)=>{console.log(country.name.common) })
 countryName(data)
 selectBarOptions(data)



  }catch(error){console.log(error)}
    
  
  
//   console.log(data);
}

countryApis()
let allCountriesDatas= []
const countryArr= []
const countries = document.getElementById("countries")
const selectBar= document.getElementById("select-bar")



const countryName= (country)=>{
    // !select bardaki ülke isimlerini bastırmak için;
   



    // const {name:{common},flags:{png},region,capital,population,borders,maps:{googleMaps},languages,currencies} =country[Math.floor(Math.random()*country.length)]

    const {name:{common},flags:{png},region,capital,population,borders,maps:{googleMaps},languages,currencies}=  country[Math.floor(Math.random()*country.length)]


    countries.innerHTML=`


    
    <div class="card shadow-lg" style="width: 22rem">
        <img src="${png}" class="card-img-top shadow" alt="..." />
        <div >
          <h5 class="p-2 text-center" id="country-name" >${common}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <i class="fa-solid fa-earth-oceania"></i><span class="fw-bold"> Region:</span> ${region}
          </li>
          <li class="list-group-item">
            <i class="fas fa-lg fa-landmark"></i>
            <span class="fw-bold"> Capitals:</span> ${capital}
          </li>
          <li class="list-group-item">
            <i class="fas fa-lg fa-comments"></i>
            <span class="fw-bold"> Languages:</span> ${Object.values(languages)}
          </li>
          <li class="list-group-item">
            <i class="fas fa-lg fa-money-bill-wave"></i>
            <span class="fw-bold"> Currencies:</span> ${currencies[Object.keys(currencies)].name} ,${currencies[Object.keys(currencies)].symbol}
              
          </li>
          <li class="list-group-item">
          <i class="fa-solid fa-people-group"></i></i>
          <span class="fw-bold"> Population:</span> ${population}
        </li>
          <li class="list-group-item">
          <i class="fa-sharp fa-solid fa-road-barrier"></i>
          <span class="fw-bold"> Borders:</span>  ${borders || "Komşusu Yoktur"}
        </li>
        </li>
        <li class="list-group-item">
          <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${googleMaps}" target='_blank'> Go to google map</a> </li>
        </ul>
      </div>


  `   
   
}


selectBar.addEventListener("input",(e)=>{
  const value = selectBar.value
  console.log(value);
 
 const searchedData= allCountriesDatas.filter((c)=>c.name.common==value)
console.log(searchedData);
countryName(searchedData)


})
console.log(allCountriesDatas);


const selectBarOptions = (data)=>{
  data.forEach((c)=>countryArr.push(c.name.common))

console.log(countryArr);
   
  countryArr.forEach((cname)=>{
  selectBar.innerHTML +=`<option>${cname}</option>`})
}
