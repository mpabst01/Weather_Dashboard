$("#uvIndex").text(data.name + " UV index");
var uvIndexUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
var apiKey = "17104c7c39ba9e47e7041e1135b64b45";


function uvIndex(){
    var uvIndexUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    $.ajax({
        url: uvIndexUrl,
        method: "GET",
    }).then(function (data) {
        console.log(data);

        const lat = uvIndexUrl.get('lat')
        console.log(data.coord.lat);
        const lon = uvIndexUrl.get('lon')
        console.log(data.coord.lon);

    });



}



