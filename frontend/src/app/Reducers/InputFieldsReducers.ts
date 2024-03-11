
import { PayloadAction } from "@reduxjs/toolkit";
import { InputFieldsType, InputFieldsInitialStateType } from "../Slices/InputFieldSlice";

// Input field reducers 

export const setInputData = (state: InputFieldsInitialStateType, action: PayloadAction<InputFieldsType>) => {
    console.log(state, action);
  
}

export const removeInputData = (state: InputFieldsInitialStateType, action: PayloadAction<InputFieldsType>) => {
    console.log(state, action);
 
    
    
}


