import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCartDrawerToggle } from "../../../app/Slices/ComponentToggleSlice";

const Header = () => {
    const cartDisplayState = useAppSelector(
        (state) => state.ComponentToggleState.data.cartDrawerToggle
    );
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between">
            <h1 className="text-lg font-semibold">Your Cart</h1>

            <span
                className="cursor-pointer my-auto"
                onClick={() => dispatch(setCartDrawerToggle(!cartDisplayState))}
            >
                <CloseIcon className="my-auto text-black" sx={{fontSize: '15px'}} />
            </span>

            {/* Add your cart content here */}
        </div>
    );
};

export default Header;
