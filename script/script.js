const showBtn = document.querySelector(".header-section-search button")
const inputBox = document.querySelector(".header-section-search input")
const backgroundBox = document.querySelector(".header-section")
const locBox = document.getElementById("loc")
const tempBox = document.getElementById("temp")
const WindBox = document.getElementById("Wind")
const HumidityBox = document.getElementById("Humidity")
const PreciptationBox = document.getElementById("Preciptation")
const apiKey = "76a82f54cc0d476b86171625240510"
showBtn.addEventListener('click', function() {
    getWeather(inputBox.value);
});
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather(inputBox.value)
    }
})
function getWeather(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('خطا در دریافت اطلاعات. لطفاً نام شهر را بررسی کنید.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const location = data.location.name;
            const region = data.location.region;
            const country = data.location.country;
            const temperature = data.current.temp_c;
            const condition = data.current.condition.text;
            const windSpeed = data.current.wind_kph;
            const humidity = data.current.humidity;
            const Preciptation = data.current.temp_c;
            locBox.innerHTML=`${location}, ${region}, ${country}`;
            tempBox.innerHTML=`${temperature}`+'°C';
            WindBox.innerHTML=`${windSpeed}`;
            HumidityBox.innerHTML=`${humidity}`;
            PreciptationBox.innerHTML=`${Preciptation}`;
            conditionBox.innerHTML=`${condition}`;
            


            let getMod = `${condition}`;
            if (getMod === "Sunny" || "Clear") {
                document.body.style.backgroundImage = "url(image/sun-img.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
            }
            if (getMod.includes("rain")) {
                document.body.style.backgroundImage = "url(image/rain-img.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
            }
            if (getMod.includes("cloudy")) {
                document.body.style.backgroundImage = "url(image/cloud-img.jpg)"
                document.body.style.backgroundSize = "inherit"
                document.body.style.backgroundRepeat = "no-repeat"
            }
            if (getMod.includes("snow")) {
                document.body.style.backgroundImage = "url(image/snow-img.jpg)"
                document.body.style.backgroundSize = "cover"
                document.body.style.backgroundRepeat = "no-repeat"
            }
          })
          .catch(error => {
            locBox.innerHTML = `<p>${error.message}</p>`;
        });
}
///////////////////
document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle");
    let isDarkMode = true; 
    themeToggleButton.addEventListener("click", function() {
        if (isDarkMode) {
            document.body.style.backgroundColor = "#ddd";
            locBox.style.color = "#ddd";
            tempBox.style.color = "#ddd";
            backgroundBox.style.backgroundColor= "#333333c5";
            document.querySelector('.header-section-search button[type="submit"]').style.backgroundColor = "#0f172a";
            document.querySelectorAll('.section-info-part').forEach(box => {
                box.style.backgroundColor="#4f6570";
            });
            document.querySelectorAll('.section-info-part').forEach(box => {
                box.style.color="#ddd";
            });
            isDarkMode = false;
        } else {
            document.body.style.backgroundColor = "#02b4eb";
            locBox.style.color = "#0f172a";
            tempBox.style.color = "#0f172a";
            document.querySelector('.header-section-search button[type="submit"]').style.backgroundColor = "#02b4eb";
            backgroundBox.style.backgroundColor= "#ffffff59";
            document.querySelectorAll('.section-info-part').forEach(box => {
                box.style.backgroundColor="rgba(30, 62, 104, 0.671)";
            });
            document.querySelectorAll('.section-info-part').forEach(box => {
                box.style.color="#ffff";
            });
            isDarkMode = true;
        }
    });
});
window.addEventListener("load", function () {
    inputBox.focus()
})