let isRunning = false; // Kronometre çalışma durumu
let startTime; // Başlangıç zamanı
let elapsedTime = 0; // Geçen süre
let intervalID; // setInterval tarafından döndürelen ID

function startPause() {
  if (isRunning) {
    clearInterval(intervalID); // Kronometre çalışıyorsa duraklat
  } else {
    startTime = Date.now() - elapsedTime; // Başlangıç zamanı güncelle
    intervalID = setInterval(updateStopwatch, 10); // SAlise hassasiyeti günceller
  }

  isRunning = !isRunning; // Kronometre durumunu tersine çevir
  updateButton();
}

function stop() {
  clearInterval(intervalID); // kronometreyi duraklat
  isRunning = false;
  elapsedTime = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
  updateButton();
}

// Kronometreyi güncelle
function updateStopwatch() {
  // şu anki zaman
  const currentTime = Date.now();
  // Başlangıç zamanından bu yana geçen süreyi hesaplama
  elapsedTime = currentTime - startTime;

  // Dakika, saniye ve salise hesaplaması
  const minutes = Math.floor(elapsedTime / (60 * 1000));
  const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);
  const centiseconds = Math.floor((elapsedTime % 1000) / 10);

  // Formatlı zamanı göster
  const formattedTime = `${part(minutes)}:${part(seconds)}:${part(
    centiseconds
  )}`;
  document.getElementById("stopwatch").innerText = formattedTime;
}

  // Sayıyı iki haneli yapmak için kullanılacak yardımcı fonksiyon
  function part(value) {
    console.log(value);

    return value < 10 ? `0${value}` : value;
  }


//Başlat ve duraklat butonu güncelleme
function updateButton() {
  const button = document.getElementById("startPauseButton");
  button.style.border = isRunning ? "2px solid yellow" : "2px solid green";
  button.innerHTML = isRunning
    ? `<i class="fas fa-pause text-warning"></i>`
    : `<i class="fas fa-play text-success"></i>`;
}