import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "./components/Header";
import CartContent from "./components/CartContent";
import PlaceOrder from "./components/PlaceOrder";
import { 
    setPlaceOrderView,
} from "../../app/Slices/ComponentToggleSlice";

const CheckoutDrawer = () => {
    const [cartAmountSum, setCartAmountSum] = useState(0);

    const selector = useAppSelector((state) => state.ComponentToggleState.data);
    const cartItemsObject: any = useAppSelector(
        (state) => state.SelectedItemsCart.data
    );
    const resturantSelector = useAppSelector((state) => state.ResturantData);
    const resturantData: any = resturantSelector.data.data;
    const resturandId = String(resturantData?.pages?.current?.resId) as string;
    const dispatch = useAppDispatch();
    const cartDataLength = cartItemsObject[`${resturandId}`]?.length;

    // calculating the sum of amount of items inside cart
    useEffect(() => {
        calculateCartAmountSum();
        // cartDataLength < 1 &&
        //     dispatch(setCartDrawerToggle(!selector.cartDrawerToggle));
        // eslint-disable-next-line
    }, [cartItemsObject]);

    const calculateCartAmountSum = () => {
        let tempCartAmountSum: number = 0;

        // eslint-disable-next-line
        Object.entries(cartItemsObject).map(([key, value]) => {
            Number(key) === Number(resturandId) &&
                (tempCartAmountSum +=
                    Array.isArray(value) &&
                    value.reduce((total, currentItem) => {
                        return (
                            total +
                            currentItem.item.display_price *
                                currentItem.itemCount
                        );
                    }, 0));
            setCartAmountSum(tempCartAmountSum);
        });
    };

    return (
        <div className="relative drawer  ">
            <div
                className={`fixed  drop-shadow-2xl top-0 -bottom-10  right-0 z-50 ${
                    selector.cartDrawerToggle && "w-[25%]"
                } h-screen transition-transform `}
            >
                {selector.cartDrawerToggle && (
                    <div className="border-[1px]  h-full px-5 bg-white !z-50 border-gray-400/40">
                        <div className="">
                            {/* Header goes here */}
                            <Header />
                        </div>

                        {/* drawer Content */}
                        <div className="h-full py-5 overflow-y-auto pb-32">
                            {/* In CartContnet itels will be list and in placeOrder view payment is done */}
                            {selector.placeOrderView ? (
                                <PlaceOrder />
                            ) : (
                                <CartContent />
                            )}
                        </div>

                        {/* Checkout button */}
                        <div className="absolute  py-3 bottom-0 left-0 w-full p-4 bg-white ">
                            <div className="flex justify-between py-2">
                                <span className=" text-sm font-semibold text-gray-600">
                                    Total Amount :{" "}
                                </span>
                                <span className="text-sm font-bold text-green-600">
                                    &#8377;{" "}
                                    {cartDataLength > 0 && cartAmountSum}
                                </span>
                            </div>

                            {selector.placeOrderView ? (
                                <Button
                                    buttonType="PRIMARY"
                                    onClick={() =>
                                        console.log("making payment...")
                                    }
                                >
                                    Make Payment of &#8377;{" "}
                                    {cartDataLength > 0 && cartAmountSum}
                                </Button>
                            ) : (
                                <Button
                                    buttonType="OUTLINE"
                                    onClick={() =>
                                        dispatch(
                                            setPlaceOrderView(
                                                !selector.placeOrderView
                                            )
                                        )
                                    }
                                >
                                    Proceed to Checkout
                                </Button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutDrawer;
