
const apiKey = `acd83b3b3e4f8eb29071ebfe535d7a10`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lang=pt_br&units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const iconeTempo = document.querySelector(".icone-tempo");
const descElement = document.querySelector(".descricaotempo");

async function checkWeather(cidade) {
  const response = await fetch(apiUrl + cidade + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML =
      Math.round(data.main.temp) + "ºC";
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " Km/h";

    descElement.innerText = data.weather[0].description;

    iconeTempo.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    );

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

