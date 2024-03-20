import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import BackIcon from "@mui/icons-material/KeyboardBackspace";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    setCartDrawerToggle,
    setPlaceOrderView,
} from "../../../app/Slices/ComponentToggleSlice";

const Header = () => {
    const selector = useAppSelector((state) => state.ComponentToggleState.data);
    const dispatch = useAppDispatch();

    return (
        <div className="flex justify-between py-2 border-b-2 border-gray-400/30">
            <div className="flex space-x-2">
                {selector.placeOrderView && (
                    <span
                        className="cursor-pointer "
                        onClick={() =>
                            dispatch(
                                setPlaceOrderView(!selector.placeOrderView)
                            )
                        }
                    >
                        <BackIcon
                            className="mb-[0.5px] text-gray-500"
                            sx={{ fontSize: "15px" }}
                        />
                    </span>
                )}

                <h1 className="text-base my-auto font-semibold">
                    {selector.placeOrderView
                        ? "Place Order"
                        : "Your Cart Items"}
                </h1>
            </div>

            <span
                className="cursor-pointer my-auto"
                onClick={() => {
                    dispatch(setCartDrawerToggle(!selector.cartDrawerToggle));
                    dispatch(setPlaceOrderView(false));
                }}
            >
                <CloseIcon
                    className="my-auto text-gray-500"
                    sx={{ fontSize: "15px" }}
                />
            </span>

            {/* Add your cart content here */}
        </div>
    );
};

export default Header;
