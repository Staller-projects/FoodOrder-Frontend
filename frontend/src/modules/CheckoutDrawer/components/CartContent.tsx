import React from "react";
import { useAppSelector } from "../../../app/hooks";

import FoodItemCard from "../../ResturantMenu/components/FoodItemCard";

type CartItem = {
    // Define the structure of your cart item here
    // For example:
    name: string;
    quantity: number;
    // Add more properties as needed
};

type CartItemsObject = {
    [key: string]: CartItem;
    // Define the structure of your cart items object
    // It's an object where keys are strings and values are of type CartItem
};

const CartContent = () => {
    // const resturantSelector = useAppSelector((state) => state.ResturantData);
    // const resturantData = resturantSelector.data.data;

    // const resturandId = resturantData?.pages?.current?.resId as number;
    const cartItemsObject: any = useAppSelector(
        (state) => state.SelectedItemsCart.data
    );

    return (
        <div className="">
            {Object.entries<CartItemsObject>(cartItemsObject)?.map(
                ([key, value]) => (
                    <div key={key}>
                        <h1>Name Here</h1>

                        {/* Check if 'value' is an array before using map */}
                        {Array.isArray(value) ? (
                            <div className="space-y-5 overflow-y-auto py-5">
                                {value.length > 0 &&
                                    value.map((item, index) => (
                                        <FoodItemCard
                                            key={index}
                                            dataThroughComponent={"cart"}
                                            singleFoodItemFromProps={item.item}
                                        />
                                    ))}

                                {value.length <= 0 && (
                                    <h1 className="text-center my-5 text-lg font-semibold text-gray-500">
                                        No Items in cart.
                                    </h1>
                                )}
                            </div>
                        ) : (
                            <p>Invalid data format for '{key}'</p>
                        )}
                    </div>
                )
            )}

            {/* check if the cart has items or not */}
            {Object.keys(cartItemsObject).length <= 0 && (
                <h1 className="text-center my-5 text-lg font-semibold text-gray-500">
                    No Items in cart.
                </h1>
            )}
        </div>
    );
};

export default CartContent;
