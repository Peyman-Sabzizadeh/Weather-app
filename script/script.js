const showBtn = document.querySelector(".header-section-search button")
const inputBox = document.querySelector(".header-section-search input")
const locBox = document.getElementById("loc")
const tempBox = document.getElementById("temp")
const WindBox = document.getElementById("Wind")
const HumidityBox = document.getElementById("Humidity")
const PreciptationBox = document.getElementById("Preciptation")
 const apiKey = "76a82f54cc0d476b86171625240510"
// const apiKey = "e934e472d9b35459af8900d8ab323b36"

showBtn.addEventListener('click', function() {
    getWeather(inputBox.value);
});
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
          })
          .catch(error => {
            locBox.innerHTML = `<p>${error.message}</p>`;
        });
}