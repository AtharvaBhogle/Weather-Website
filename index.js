const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "";

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
  } else {
    displayError("Enter city please");
  }
});

async function getData(city) {}

function display(data) {}

function emoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("error");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
