let weather = {
    apikey: "8cc016291e702549194990020bf65a3d",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apikey
        ).then((response) => {
            if (response.status == 404) {
                alert("No weather found for this City");
            }
            return response.json();
        }
        ).then((data) => this.displayweather(data));
    },
    displayweather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".icon").src =
            "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city").innerText = name;
        document.querySelector(".description").innerText = description[0].toUpperCase() + description.substring(1);
        document.querySelector(".temp").innerText = "Temp: " + temp + "°C";
        document.querySelector(".humidity").innerText =
            "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
            "Wind speed: " + speed + " km/h";
        document.body.style.backgroundImage =
            "url('https://source.unsplash.com/1500x800/?" + name + "')";
    },
    searchWeather: function (text) {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
}

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.searchWeather();
        }
    });

weather.fetchWeather("kolkata");