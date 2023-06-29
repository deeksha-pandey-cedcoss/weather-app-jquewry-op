// jquery ready section
$(document).ready(function () {

    $("#search").on('click', function () {

        let city = document.getElementById("city").value;
        $.ajax({
            url: "https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=$location=" + city,
            success: function (result) {
                const weather = document.createElement('div')
                weather.classList.add('weather');
                weather.innerHTML = `
                <h2>City:${result.location.name}</h2>
                <h3>Region:${result.location.region}</h3><br>
          <h1><img src="http:${result.current.condition.icon}" />Temperature: ${result.current.temp_c}°C <img src="http:${result.current.condition.icon}" /></h1>
          <big>Weather Condition:${result.current.condition.text}</big>
          
          `;
                //   cleanup 
                main.innerHTML = "";
                main.appendChild(weather);
            }

        });

    });

});
