import { createSlice } from "@reduxjs/toolkit";

interface ComponentToggleTypes {
    cartDrawerToggle: boolean;
    placeOrderView: boolean;
    menuCategorySidebar: boolean;
}

interface InitialState {
    data: ComponentToggleTypes;
}

const initialStateOfCompToggle: InitialState = {
    data: {
        cartDrawerToggle: false,
        placeOrderView: false,
        menuCategorySidebar: true,
    },
};

const ComponentToggleSlice = createSlice({
    name: "componentToggle",
    initialState: initialStateOfCompToggle,
    reducers: {
        setCartDrawerToggle: (state, action) => {
            state.data.cartDrawerToggle = action.payload;
        },
        setPlaceOrderView: (state, action) => {
            state.data.placeOrderView = action.payload;
        },
        menuCategorySidebar: (state, action) => {
            state.data.menuCategorySidebar = action.payload;
        },
    },
});

export const { setCartDrawerToggle, setPlaceOrderView, menuCategorySidebar } =
    ComponentToggleSlice.actions;
export default ComponentToggleSlice.reducer;
