import axios, {
    isCancel,
    AxiosError,
    Axios,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";

// const custom_url =
// "https://www.zomato.com/webroutes/search/autoSuggest?addressId=0&entityId=5&entityType=city&locationType=&isOrderLocation=1&cityId=5&latitude=18.5204690000000000&longitude=73.8566200000000000&userDefinedLatitude=18.520469&userDefinedLongitude=73.85662&entityName=Pune&orderLocationName=Pune&cityName=Pune&countryId=1&countryName=India&displayTitle=Pune&o2Serviceable=true&placeId=1165&cellId=4306215736965070848&deliverySubzoneId=1165&placeType=DSZ&placeName=Banglore&isO2City=true&fetchFromGoogle=false&fetchedFromCookie=true&q=bR";

const custom_url = "https://www.zomato.com/webroutes/search/autoSuggest";
// const custom_url = "https://www.swiggy.com/dapi/restaurants/search/suggest?lat=18.61610&lng=73.72860&str=bramha&trackingId=undefined";
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const AxiosRequest = async <T>(url?: string, options?: AxiosRequestConfig) => {
    // try {
    //     const response = await axios.get(custom_url, options);
    //     console.log(response);
    // } catch (error) {
    //     console.error("Error making request:", error);
    //     throw error;
    // }

    try {
        const response = await axios.get(
            "https://www.swiggy.com/dapi/restaurants/search/suggest",
            {
                params: {
                    lat: 18.6161,
                    lng: 73.7286,
                    str: "bramha",
                    trackingId: "undefined",
                },
            }
        );

        console.log(response.data); // Handle the response data here
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default AxiosRequest;
