import { createSlice } from "@reduxjs/toolkit";


interface ComponentToggleTypes {
    cartDrawerToggle: boolean
}

interface InitialState {
    data: ComponentToggleTypes
}


const initialStateOfCompToggle: InitialState = {
    data: {
        cartDrawerToggle: false
    }
}

const ComponentToggleSlice = createSlice({
    name: 'componentToggle',
    initialState: initialStateOfCompToggle,
    reducers: {
        setCartDrawerToggle: (state, action) => {
            state.data.cartDrawerToggle = action.payload;
        }
    }
})



export const { setCartDrawerToggle } = ComponentToggleSlice.actions;
export default ComponentToggleSlice.reducer;
