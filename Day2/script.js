const apiKey = "863242cfb2b1d357e6093d9a4df194ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
  } catch (error) {
    console.error("❌ Error fetching weather:", error);
  }
}

checkWeather("bangalore");
