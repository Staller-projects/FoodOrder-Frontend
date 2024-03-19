import { createSlice } from "@reduxjs/toolkit";
import { setInputData, removeInputData } from "../Reducers/InputFieldsReducers";

// initializing the initial data for input fields

export interface InputFieldsType {
    name: string | null;
    email: string | null; // TODO: Add regex validation and specify the type of the email
    password: string | null;
    search: string | null;
}

export interface InputFieldsInitialStateType {
    inputData: InputFieldsType[];
}

const initialState: InputFieldsInitialStateType = {
    inputData: [], // Corrected property name
};

// reducers for input fileds data manipulation
export const InputFieldSlice = createSlice({
    name: "InputFleidsData",
    initialState: initialState, 
    reducers: {
        setData: setInputData,
        getData: removeInputData,
    },
});

// exports
export const { setData, getData } = InputFieldSlice.actions;
export default InputFieldSlice.reducer;
