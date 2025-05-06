let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let currentDay = document.getElementById("current-day");
let currentDate = document.getElementById("current-date");
let cityNameElem = document.getElementById("city-name");
let currentDeg = document.getElementById("current-deg");
let conditionImg = document.getElementById("conditionImg");
let weatherDesc = document.getElementById("weather-desc");
let myrow = document.querySelector(".row");
let ApiKey = "6d7a0162898d4db0a9c142426250105";
let Url_Api = "http://api.weatherapi.com/v1";

// searchBtn.addEventListener("click", getWeatherDetails);

// async function getWeatherDetails() {
//   let newResponse = await fetch(
//     `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${searchInput.value}&days=3&aqi=no&alerts=no
// `
//   );
//   let weatherData = await newResponse.json();

//   displayweather(weatherData);
// }

// function displayweather(weatherData) {
//   // const date = new Date(data.location.localtime);
//   // const dateWithoutTime = date.toISOString().split("T")[0];
//   // const dayIndex = date.getDay();
//   // const dayNames = [
//   //   "Sunday",
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
//   // ];
//   // const dayName = dayNames[dayIndex];

//   let cartona = ``;

//   for (let i = 0; i < weatherData.forecast.forecastday.lenght; i++) {
//     let cartona = `

//      <div class="col-md-4">

//           <div>
//             <div class="weather-card mt-5  p-4 rounded-2 bg-dark-subtle ">
//               <div class="current-day-box d-flex justify-content-between
//               ">
//                 <p id="current-day">tuesday</p>
//                 <p id="current-date">${weatherData.forecast.forecastday[i].date}</p>
//               </div>
//               <div class="weather-info py-4 ">
//                 <p id="city-name">${weatherData.location.name}</p>

//                 <h1 id="current-deg " class="fw-bold">${weatherData.forecast.forecastday[i].day.maxtemp_c} <sup>o</sup>C</h1>
//                 <img src="https:${weatherData.forecast.forecastday[i].day.condition.icon}" alt="" id="conditionImg">
//                 <p id="weather-desc" class="text-danger fw-semibold">${weatherData.forecast.forecastday[i].day.condition.text} </p>
//               </div>
//               <div class="weather-details d-flex gap-3">
//                 <p><i class="fa-solid fa-umbrella" ></i> <span id="hotnessDeg">${weatherData.forecast.forecastday[i].day.avghumidity}</span></p>
//                 <p><i class="fa-solid fa-wind" ></i> <span>${weatherData.forecast.forecastday[i].day.maxwind_mph}</span></p>
//                 <p><i class="fa-brands fa-nfc-directional"></i> <span>${weatherData.forecast.forecastday[i].day.maxwind_mph}</span></p>
//               </div>
//             </div>
//           </div>
//         </div>

//   `;
//   }

searchBtn.addEventListener("click", getWeatherDetails);

async function getWeatherDetails() {
  try {
    let newResponse = await fetch(
      `${Url_Api}/forecast.json?key=${ApiKey}&q=${searchInput.value}&days=3&aqi=no&alerts=no`
    );
    if (!newResponse.ok) {
      throw new Error(`HTTP error! status: ${newResponse.status}`);
    }
    let weatherData = await newResponse.json();
    displayweather(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayweather(weatherData) {
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let cartona = "";

  for (let i = 0; i < weatherData.forecast.forecastday.length; i++) {
    const date = new Date(weatherData.forecast.forecastday[i].date);
    const dayIndex = date.getDay();
    const dayName = dayNames[dayIndex];

    cartona += `
      <div class="col-md-4">
        <div>
          <div class="weather-card mt-5  p-4 rounded-2 bg-dark-subtle ">
            <div class="current-day-box d-flex justify-content-between">
              <p id="current-day">${dayName}</p>
              <p id="current-date">${weatherData.forecast.forecastday[i].date}</p>
            </div>
            <div class="weather-info py-4 ">
              <p id="city-name">${weatherData.location.name}</p>

              <h1 id="current-deg " class="fw-bold">${weatherData.forecast.forecastday[i].day.maxtemp_c} <sup>o</sup>C</h1>
              <img src="https:${weatherData.forecast.forecastday[i].day.condition.icon}" alt="" id="conditionImg">
              <p id="weather-desc" class="text-danger fw-semibold">${weatherData.forecast.forecastday[i].day.condition.text} </p>
            </div>
            <div class="weather-details d-flex gap-3">
              <p><i class="fa-solid fa-umbrella" ></i> <span id="hotnessDeg">${weatherData.forecast.forecastday[i].day.avghumidity}</span></p>
              <p><i class="fa-solid fa-wind" ></i> <span>${weatherData.forecast.forecastday[i].day.maxwind_mph}</span></p>
              <p><i class="fa-brands fa-nfc-directional"></i> <span>${weatherData.forecast.forecastday[i].day.maxwind_mph}</span></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  myrow.innerHTML = cartona;
}
