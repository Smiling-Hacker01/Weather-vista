 
   const city_input = document.getElementById("city-input");
   const form = document.getElementById("form");
   const Submit_btn = document.getElementById("submit");
   const temperature = document.getElementById("temperature");
   const pressure = document.getElementById("pressure");
   const humidity = document.getElementById("humidity");
   const apiKey = `8ac10cf51f63898230cadc699c1145fd`;
   const additional_info = document.getElementById("additional-info");
   const description = document.createElement('p');
   const visibility = document.createElement('p');
   const sealevel = document.createElement("p");
   const body = document.querySelector("#body");
   const videoBackground = document.getElementById("V-background");
   let userCity;
  form.addEventListener("submit", (event) =>{
    event.preventDefault();
     userCity = city_input.value.trim();
     if (!userCity) {
      alert("Please Provide a Valid City Name");
     }
     
     const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric`;

     fetch(apiurl)
     .then( (response) => {
      if (!response.ok) {
        throw new Error(`Failed To Fetch Data`);
      }
      return response.json();
     })
     .then((data) => {
      console.log(data);
      temperature.innerHTML = `Temperature : ${data.main.temp}`; 
      pressure.innerHTML = `Pressure :  ${data.main.pressure}`;
      humidity.innerHTML = `Humidity : ${data.main.humidity}`;
      description.innerHTML = `Description : ${data.weather[0].description}`;
      visibility.innerHTML = `Visibility : ${data.visibility}`;
      sealevel.innerHTML = `Sea Leve : ${data.main.sea_level}`;
      additional_info.innerHTML = " ";
      additional_info.appendChild(description);
      additional_info.appendChild(visibility);
      additional_info.appendChild(sealevel);
      return parseInt(data.main.temp) ;
     })
     .then((temperature) => {
      console.log(temperature);
      videoBackground.style.transition = 'opacity 1s ease-in-out';
      videoBackground.style.opacity = 0;
      setTimeout( () => {

        if (temperature >= 0 && temperature <= 15) {
          videoBackground.setAttribute('src', './public/winter forest snow 4k live wallpaper.mp4');
        }
        else if (temperature > 15 && temperature <= 25) {
          videoBackground.setAttribute('src','./public/4K UHD Flying Above Clouds Live Wallpaper.mp4');
        }
        else if (temperature > 25 && temperature <= 35) {
          videoBackground.setAttribute('src', './public/Lumion 10 _ Nature _ Cinematic _ Animation _ Lumion Video _ Lumion Animation.mp4');
        }
        else if (temperature > 35) {
          videoBackground.setAttribute('src', './public/Lumion 10 _ Nature _ Cinematic _ Animation _ Lumion Video _ Lumion Animation.mp4');
        }
        videoBackground.addEventListener('loadeddata', () => {
          videoBackground.style.opacity = 1;
        })
      }, 1000 )
    })
      
      .catch((error) => {
      alert(error.message);
     } )
  })