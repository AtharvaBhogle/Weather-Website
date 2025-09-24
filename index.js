const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "";

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
  const apiUrl = ``;
  const response = await fetch(apiUrl);
  console.log(response);

  if (!response.ok) {
    throw new Error("Couldnt fetch weather data");
  }

  return await response.json();
}

function display(data) {
  {
  }
}

function emoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("error");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
