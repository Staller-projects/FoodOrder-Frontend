import { configureStore } from "@reduxjs/toolkit";

// reducecrs import
import InputFieldSlice from "./Slices/InputFieldSlice";
import SelectedItemCartSlice from "./Slices/ItemCartSlice";
import ResturantDataSlice from "./Slices/ResturantDataSlice";
import ComponentToggleSlice from "./Slices/ComponentToggleSlice";

const reducers = {
    InputFields: InputFieldSlice,
    SelectedItemsCart: SelectedItemCartSlice,
    ResturantData: ResturantDataSlice,
    ComponentToggleState: ComponentToggleSlice,
};

export const store = configureStore({
    reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
