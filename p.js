function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showLocation);

    } else {
        document.getElementById("loc").innerHTML =
        "Geolocation not supported";
    }
}

function showLocation(position) {

    document.getElementById("loc").innerHTML =
    "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
