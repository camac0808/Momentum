navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 앞에는 됐을때 뒤에는 에러났을때 함수

const API_KEY = "65375fde5fdd4daa9a8cd1505be0f2a7"
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

function onGeoOk(position){
  const lat= position.coords.latitude;
  const lng= position.coords.longitude;
  
  console.log(`You live in ${lat}, ${lng}`);

  fetch(url).then((response) => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name; 
    weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}도`;
    console.log(data.main.temp);
  });
}

function onGeoError(){
  alert("No location, allow please")
}