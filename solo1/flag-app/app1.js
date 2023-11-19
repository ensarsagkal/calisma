const searchInput = document.querySelector("#search");
const selectBar = document.querySelector("#select-bar");
const countriesDiv = document.getElementById("countriesDiv")


const getApi = async ()=>{
    try {
        const res= await fetch("https://restcountries.com/v3.1/all/")
        if (res.ok){
            console.log(res);
            const data = await  res.json()
            allDatas= data
            showData(data)
            selectBarOptions(data)
          
            
        }else{
            throw new Error( `Hata Oluştu : ${res.status}`)
        }
    } catch (error) { console.log(error);}
}

getApi()


let countriesArr=[]
let allDatas = []
const selectBarOptions= (country)=>{
    //& country.forEach((c)=> countriesArr.push(c.name.common))
    countriesArr = country.map((c)=>c.name.common)

    countriesArr.forEach((country)=>  selectBar.innerHTML += `<option>${country}</option>`)
 }

 const showData=(country)=>{
    const {name:{common}, flags:{png},region,capital,languages,currencies,population,borders,maps:{googleMaps}}= country[Math.floor(Math.random()*country.length)]
    
   

    countriesDiv.innerHTML = `



    <div class="card shadow-lg" style="width: 22rem">
            <img src="${png}" class="card-img-top shadow" alt="..." />
            <div >
              <h5 class="p-2 text-center">${common}</h5>
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
                <span class="fw-bold"> Currencies:</span> ${currencies[Object.keys(currencies)].name} , ${currencies[Object.keys(currencies)].symbol}
              </li>
              <li class="list-group-item">
              <i class="fa-solid fa-people-group"></i></i>
              <span class="fw-bold"> Population:</span> ${population}
            </li>
              <li class="list-group-item">
              <i class="fa-sharp fa-solid fa-road-barrier"></i>
              <span class="fw-bold"> Borders:</span>  ${borders || "Komşusu yoktur." }
            </li>
            </li>
            <li class="list-group-item">
              <i class="fa-solid fa-map-location-dot"></i><span class="fw-bold"> Map:</span> <a href="${googleMaps}" target='_blank'> Go to google map</a> </li>
            </ul>
          </div>
  `
 }

selectBar.addEventListener("click",(e)=>{
    const value = selectBar.value
    const searchedData = allDatas.filter((c)=>value==c.name.common)
  showData(searchedData)

})
