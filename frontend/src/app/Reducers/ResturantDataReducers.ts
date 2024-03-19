import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResturnatParams } from "../../api/GetRequests";
import AxiosRequest from "../../api/API";



export const fetchResturentData = createAsyncThunk(
    "fetchResturentData",
    async (
        payload: ResturnatParams = { resturantCity: "", resturantName: "" }
    ) => {
        const baseUrl = `zmt-apis/resturantpage/?resturantname=`;
        const customUrl = `${baseUrl}/${payload.resturantCity}/${payload.resturantName}`;

        const response = await AxiosRequest({
            method: "GET",
            url: customUrl,
        });

        return response;
    }
);