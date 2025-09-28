const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "6dc0dc3a2592fa4a71726c17e5a88aec";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getData(city);
      display(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Enter city please");
  }
});

async function getData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const response = await fetch(apiUrl);
  console.log(response);

  if (!response.ok) {
    throw new Error("Couldnt fetch weather data");
  }

  return await response.json();
}

function display(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  console.log(data);
  card.textContent = "";
  card.style.display = "flex";
  setBackground(id);
  const degree = "\u00B0";
  const cityDisplay = document.createElement("h1");
  const temparature = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descriptionDisplay = document.createElement("p");
  const emoji = document.createElement("p");

  cityDisplay.textContent = city;
  temparature.textContent = `${(temp - 273.15).toFixed(1)}${degree}C`;
  humidityDisplay.textContent = `Humidity: ${humidity}% `;
  descriptionDisplay.textContent = description;
  emoji.textContent = getEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  temparature.classList.add(".temparature");
  humidityDisplay.classList.add("humidityDisplay");
  descriptionDisplay.classList.add("descriptionDisplay");
  emoji.classList.add("emoji");

  card.appendChild(cityDisplay);
  card.appendChild(temparature);
  card.appendChild(humidityDisplay);
  card.appendChild(descriptionDisplay);
  card.appendChild(emoji);
}

function getEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
      break;
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
      break;
    case weatherId >= 500 && weatherId < 600:
      return "🌦️";
      break;
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
      break;
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
      break;
    case weatherId === 800:
      return "☀️";
      break;
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
      break;
    default:
      return "❓";
  }
}

function setBackground(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    // Thunderstorm
    document.body.style.background = "blue";
    card.style.background = "#3a3d98";
  } else if (weatherId >= 300 && weatherId < 400) {
    // Drizzle
    document.body.style.background = "lightblue";
    card.style.background = "#a5d8ff";
  } else if (weatherId >= 500 && weatherId < 600) {
    // Rain
    document.body.style.background = "slategray";
    card.style.background = "#a3bedaff";
  } else if (weatherId >= 600 && weatherId < 700) {
    // Snow
    document.body.style.background = "white";
    card.style.background = "#f0f0f0";
  } else if (weatherId >= 700 && weatherId < 800) {
    // Atmosphere
    document.body.style.background = "lightgray";
    card.style.background = "#dcdcdc";
  } else if (weatherId === 800) {
    // Clear sky
    document.body.style.background = "skyblue";
    card.style.background = "#6ec5fbff";
  } else if (weatherId > 800 && weatherId < 810) {
    // Clouds
    document.body.style.background = "whitesmoke";
    card.style.background = "#e0e0e0";
  } else {
    // Default
    document.body.style.background = "brown";
    card.style.background = "#8b4513";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("error");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
