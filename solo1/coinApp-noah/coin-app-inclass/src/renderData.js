export const renderCoins=(coin)=>{
    // console.log(coin);
    const {price,name,iconUrl,change,symbol,rank}= coin
    const coinsUl = document.querySelector("main .coins")
    const newCoinLi = document.createElement("li")
    newCoinLi.classList.add("coin")
    newCoinLi.innerHTML=`
    <div class="remove-icon">
        <i class="fas fa-window-close"></i>
    
    </div>
    <h2>
        <span>${name}</span>
        <sup>${symbol}</sup>
    </h2>

    
    
    `
    coinsUl.append(newCoinLi)
}