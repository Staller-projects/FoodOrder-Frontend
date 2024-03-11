import { configureStore } from "@reduxjs/toolkit";

// reducecrs import
import InputFieldSlice from "./Slices/InputFieldSlice";

export const store = configureStore({
    reducer: InputFieldSlice,
});


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

