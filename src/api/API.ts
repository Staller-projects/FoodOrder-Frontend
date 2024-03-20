import axios, { AxiosRequestConfig } from "axios";

interface AxiosRequestTypes {
    method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH";
    url?: string;
    options?: AxiosRequestConfig;
    headers?: {};
}

const URL = {
    protocol: "http",
    domain: "localhost",
    port: "4000",
};

const ERROR = {
    NETWORK_ERROR: "Internet Not connected or DNS not found",   
};

const AxiosRequest = async ({
    method,
    url,
}: AxiosRequestTypes): Promise<Object> => {
    const custUrl = url;
    const baseUrl = `${URL.protocol}://${URL.domain}:${URL.port}/${custUrl}`;
    console.log(baseUrl);

    try {
        const response = await axios({
            method: method,
            url: baseUrl,
        });

        // console.log(response);

        if (response.data.code == "ENOTFOUND") {
            throw new Error(ERROR.NETWORK_ERROR);
        } else {
            return response.data;
        }
    } catch (error) {
        console.error("Error making request in API file:", error);
        return { error: error };
    }
};

// const handleErrors = (error) => {
//     if (error.response) {
//       const status = error.response.status;
//       const errorCode = error.response.data.code;

//       if (status === 404) {
//         return new Error(ERROR.NOT_FOUND);
//       } else if (status === 500) {
//         return new Error(ERROR.SERVER_ERROR);
//       } else {
//         // Handle other status codes or specific error codes as needed
//         return new Error(ERROR.GENERIC_ERROR);
//       }
//     } else if (error.code === "ENOTFOUND") {
//       return new Error(ERROR.NETWORK_ERROR);
//     } else {
//       return new Error(ERROR.UNKNOWN_ERROR);
//     }
//   };

export default AxiosRequest;
