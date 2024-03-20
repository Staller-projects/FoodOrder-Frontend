

export const getLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            console.log("Latitude:", lat);
            console.log("Longitude:", lng);

            // Now, you can use these lat/lng values to fetch the city name.
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
};


