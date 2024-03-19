import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useAppSelector } from "../../app/hooks";
import Header from "./components/Header";
import CartContent from "./components/CartContent";

const CheckoutDrawer = () => {
    const [cartAmountSum, setCartAmountSum] = useState(0);

    const cartDisplayState = useAppSelector(
        (state) => state.ComponentToggleState.data.cartDrawerToggle
    );
    const cartItemsObject: any = useAppSelector(
        (state) => state.SelectedItemsCart.data
    );

    // calculating the sum of amount of items inside cart
    useEffect(() => {
        calculateCartAmountSum();
        // eslint-disable-next-line
    }, [cartItemsObject]);

    const calculateCartAmountSum = () => {
        let tempCartAmountSum: number = 0;

        // eslint-disable-next-line
        Object.entries(cartItemsObject).map(([key, value]) => {
            tempCartAmountSum +=
                Array.isArray(value) &&
                value.reduce((total, currentItem) => {
                    return (
                        total +
                        currentItem.item.display_price * currentItem.itemCount
                    );
                }, 0);
        });

        setCartAmountSum(tempCartAmountSum);
    };

    return (
        <div className="relative drawer  ">
            <div
                className={`fixed  drop-shadow-2xl top-0 -bottom-10  right-0 z-50 ${
                    cartDisplayState && "w-[25%]"
                } h-screen transition-transform `}
            >
                {cartDisplayState && (
                    <div className="border-[1px]  h-full px-5 bg-white !z-50 border-gray-400/40">
                        <div className="">
                            {/* Header goes here */}
                            <Header />
                        </div>

                        {/* Cart Content */}
                        <div className="h-full py-5 overflow-y-auto pb-32">
                            <CartContent />
                        </div>

                        {/* Checkout button */}
                        <div className="absolute  py-3 bottom-0 left-0 w-full p-4 bg-white ">
                            <div className="flex justify-between py-2">
                                <span className=" text-sm font-semibold text-gray-600">
                                    Total Amount :{" "}
                                </span>
                                <span className="text-sm font-bold text-green-600">
                                    &#8377; {cartAmountSum}
                                </span>
                            </div>
                            <Button buttonType="OUTLINE">
                                Proceed to Checkout
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutDrawer;
