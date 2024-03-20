import React from "react";
import { useAppSelector } from "../../../app/hooks";

import FoodItemCard from "../../ResturantMenu/components/FoodItemCard";
import { SectionBasicInfo } from "../../../types/ResturentMenu";

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
    const cartItemsObject: any = useAppSelector(
        (state) => state.SelectedItemsCart.data
    );
    const resturantSelector = useAppSelector((state) => state.ResturantData);
    const resturantData: any = resturantSelector.data.data;
    const resturandId = String(resturantData?.pages?.current?.resId) as string;
    const basicInfo: SectionBasicInfo = resturantData?.pages?.restaurant[
        `${resturandId}`
    ].sections?.SECTION_BASIC_INFO as SectionBasicInfo;

    return (
        <div className="">
            {Object.entries<CartItemsObject>(cartItemsObject)?.map(
                ([key, value]) => (
                    <div key={key}>
                        {Number(key) === Number(resturandId) && (
                            <>
                                <h1>{basicInfo.name}</h1>
                                {Array.isArray(value) && (
                                    <div className="space-y-5 overflow-y-auto py-5">
                                        {value.length > 0 &&
                                            value.map((item, index) => (
                                                <FoodItemCard
                                                    key={index}
                                                    dataThroughComponent={
                                                        "cart"
                                                    }
                                                    singleFoodItemFromProps={
                                                        item.item
                                                    }
                                                />
                                            ))}

                                        {value.length <= 0 && (
                                            <h1 className="text-center my-5 text-lg font-semibold text-gray-500">
                                                No Items in cart.
                                            </h1>
                                        )}
                                    </div>
                                )}
                            </>
                        )}

                        {/* Check if 'value' is an array before using map */}
                    </div>
                )
            )}

            {/* checking the cart is empty  */}
            {Object.keys(cartItemsObject).length < 1 && (
                <h1 className="text-center my-5 text-lg font-semibold text-gray-500">
                    No Items in cart.
                </h1>
            )}
        </div>
    );
};

export default CartContent;
