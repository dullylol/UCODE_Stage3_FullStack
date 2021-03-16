
let days =  [document.getElementById("day1"),
            document.getElementById("day2"),
            document.getElementById("day3"),
            document.getElementById("day4"),
            document.getElementById("day5")]

const apiKey = "e6f832eeb03a5092e029b4bf9c9fc719";

const container = document.querySelector('#weather');

const requestUrl   = `http://api.openweathermap.org/data/2.5/forecast?lang=ru&q=Kharkiv&appid=${apiKey}`
fetch(requestUrl).then(
    res => res.json()
).then(response => {
    let day_decription = []
    let day_temperature = []
    let dates = []

    let jsonSTR = JSON.stringify(response, null, 4)
    jsonSTR = JSON.parse(jsonSTR)
    //console.log(jsonSTR)

    for (let i = 0; i < 40; i += 8) {
        day_decription.push(jsonSTR["list"][i]["weather"][0]['main'])
        day_temperature.push(Math.round(jsonSTR["list"][i]["main"]['temp'] - 273))
        dates.push(jsonSTR["list"][i]["dt_txt"])
    }
    console.log(day_decription)
    console.log(day_temperature)
    console.log(dates)

    for (let i = 0; i < 5; i++) {
        days[i].children[2].innerHTML = day_temperature[i] + "°"
        days[i].children[1].setAttribute("alt", day_decription[i])
        let date = new Date(dates[i])
        days[i].children[0].innerHTML = String(date.getDate()).padStart(2, '0') + "." + String(date.getMonth() + 1).padStart(2, '0')
    
        if (days[i].children[1].getAttribute("alt") == "Clouds") {
            days[i].children[1].src = "assets/images/clowdy.png"
        }
        //add new images
        else if (days[i].children[1].getAttribute("alt") == "Rain") {
            days[i].children[1].src = "assets/images/rain.png"
        }
        else if (days[i].children[1].getAttribute("alt") == "Snow") {
            days[i].children[1].src = "assets/images/Snow.png"
        }
        else if (days[i].children[1].getAttribute("alt") == "Sun") {
            days[i].children[1].src = "assets/images/sun.jpg"
        }
        else {
            days[i].children[1].src = "assets/images/windy.png"
        }
    }
    
});

