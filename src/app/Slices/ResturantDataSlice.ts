import { createSlice } from "@reduxjs/toolkit";
import type { ResturentMenu } from "../../types/ResturentMenu";
import { fetchResturentData } from "../Reducers/ResturantDataReducers";

// const initialResturantData: any = {data: null};
interface InitialResturantDataType {
    data?: ResturentMenu;
    isLoading: boolean;
    error?: {};
}

interface FinalObject {
    data: InitialResturantDataType;
}

const initialResturantData: FinalObject = {
    data: {
        isLoading: false,
        data: {},
        error: {},
    },
};

export const ResturantDataSlice = createSlice({
    name: "resturantData",
    initialState: initialResturantData,
    reducers: {
        setTempData: (state, action) => {
            state.data.data = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchResturentData.pending, (state, action) => {
            state.data.isLoading = true;
        });
        builder.addCase(fetchResturentData.fulfilled, (state, action) => {
            state.data.isLoading = false;
            state.data.data = action.payload;
        });
        builder.addCase(fetchResturentData.rejected, (state, action) => {
            // state.error = action.payload
            console.log("error in reducer line 31: ", action.payload);
        });
    },
});

export const { setTempData } = ResturantDataSlice.actions;
export default ResturantDataSlice.reducer;
