const searchButton = document.querySelector('.search-btn');
var card = document.querySelector('.card');
var reportSection = document.querySelector('.weather');


function search() {
    let weatherHeading = document.querySelector('.weather').firstElementChild;

    reportSection.style.display = "block";
    const searchItem = document.querySelector('.search-bar').value;
    weatherHeading.innerHTML = "Weather In " + searchItem;

    let allData = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchItem + "&units=metric&appid=71ccef76e6ea44982bf6e721d8280f7d")
        .then((Response) => Response.json())
        .then()
        .then(data => {
            const temperature = data['main']['temp'];
            const description = data['weather'][0]
            ['description'];
            const iconLink = data['weather'][0]['icon'];
            const humidity = data['main']['humidity'];
            const windSpeed = data['wind']['speed'];

            document.querySelector('.temp').innerText = temperature + "°C";
            document.querySelector('.weather-icon').src = "http://openweathermap.org/img/wn/" + iconLink + "@2x.png";
            document.querySelector('.description').innerText = description;
            document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
            document.querySelector('.wind').innerText = "Wind Speed: " + windSpeed + " miles/h";
            document.querySelector('.search-bar').value = "";
        })


}


searchButton.addEventListener('click', function () {

    search();

    document.addEventListener('click', function (event) {
        var isClickInsideElement = card.contains(event.target);
        if (!isClickInsideElement) {
            reportSection.style.display = "none";
        }
    });
});


document.querySelector('.search-bar').addEventListener('keyup', function (et) {
    if (et.keyCode === 13) {
        search();
    }
});
