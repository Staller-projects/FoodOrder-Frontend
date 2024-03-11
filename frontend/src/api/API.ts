import axios, {
    isCancel,
    AxiosError,
    Axios,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";



const AxiosRequest = async <T>(url: string, options: AxiosRequestConfig) => {
    try {
        const response = await axios.get(url, options);
        return response;
    } catch (error) {
        console.error("Error making request:", error);
        throw error;
    }

};

export default AxiosRequest;
