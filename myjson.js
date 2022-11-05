myjson={
    coord: {
        lon: 88.3697,
            lat: 22.5697
    },
    weather: [
        {
            id: 721,
            main: "Haze",
            description: "haze",
            icon: "50n"
        }
    ],
        base: "stations",
            main: {
        temp: 24.97,
            feels_like: 25.43,
                temp_min: 24.97,
                    temp_max: 24.97,
                        pressure: 1013,
                            humidity: 73
    },
    visibility: 3000,
        wind: {
        speed: 0,
            deg: 0
    },
    clouds: {
        all: 0
    },
    dt: 1667583545,
        sys: {
        type: 1,
            id: 9114,
                country: "IN",
                    sunrise: 1667520743,
                        sunset: 1667561264
    },
    timezone: 19800,
        id: 1275004,
            name: "Kolkata",
                cod: 200
}

console.log(myjson.humidity);