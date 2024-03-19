import React, { useEffect, useState } from "react";
import { Images } from "../../../config/Globals";
import type { SingleFoodItem } from "../../../types/ResturentMenu";
import { addSelectedItemsToCart } from "../../../app/Slices/ItemCartSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

interface FoodItemCardProps {
    singleFoodItemFromProps?: SingleFoodItem;
    dataThroughComponent?: "menu" | "cart";
}

export interface SelectedItemDataType {
    itemId?: string;
    itemCount?: number;
    item?: SingleFoodItem;
}

interface SendDataToAction {
    typeOfOperation?: "add" | "remove";
    item?: SingleFoodItem;
    resturandId?: number;
}

const FOOD_TYPE: any = {
    veg: Images.VegSvg,
    "non-veg": Images.NonVegSvg,
    egg: Images.NonVegSvg,
};

const FoodItemCard = ({
    singleFoodItemFromProps,
    dataThroughComponent,
}: FoodItemCardProps) => {
    const dispatch = useAppDispatch();
    const resturantSelector = useAppSelector((state) => state.ResturantData);
    const selectedItemsCart = useAppSelector(
        (state) => state.SelectedItemsCart.data
    );
    const resturantData = resturantSelector.data.data;
    const resturandId = resturantData?.pages?.current?.resId as number;

    const [alreadyExistItem, setAlreadyExistItem] =
        useState<SelectedItemDataType>({});

    // const object = selectedItemsCart[resturandId]?.find(singleItem => singleItem.itemId === item?.item?.id);
    // console.log(object);

    useEffect(() => {
        // Perform find operation here
        const alreadyExistsInCart: SelectedItemDataType = selectedItemsCart[
            `${resturandId}`
        ]?.find(
            (singleItem) => singleItem.itemId === singleFoodItemFromProps?.id
        ) as SelectedItemDataType;

        setAlreadyExistItem(alreadyExistsInCart);
    }, [selectedItemsCart, resturandId, singleFoodItemFromProps]);

    const handleItemCount = (typeOfOperation: "add" | "remove") => {
        const data: SendDataToAction = {
            typeOfOperation: typeOfOperation,
            item: singleFoodItemFromProps,
            resturandId: resturandId,
        };

        dispatch(addSelectedItemsToCart(data));
    };

    // ctg_10609506

    return (
        <div className=" min-w-[290px] relative  flex border-2 rounded-lg">
            <div className="me-2 ">
                <img
                    src={
                        singleFoodItemFromProps?.item_image_thumb_url ??
                        Images.NoImage
                    }
                    className="rounded-tl-lg rounded-bl-lg"
                    width={100}
                    alt="item izmage"
                />

                <div
                    className={` ${
                        (alreadyExistItem?.itemCount as number)
                            ? "bg-primary"
                            : "bg-primary/50"
                    } absolute flex bottom-[-8px] left-[2.5px]  backdrop-blur-sm justify-around px-2 py-[0.5px] space-x-2 rounded-lg`}
                >
                    {/* <span className="text-xs font-semibold py-1 px-2 text-white">ADD <span className="text-xs my-auto">+</span></span> */}

                    {(alreadyExistItem?.itemCount as number) > 0 ? (
                        <>
                            <span
                                className="text-white font-bold text-base my-auto cursor-pointer"
                                onClick={() => handleItemCount("remove")}
                            >
                                -
                            </span>

                            <span className="text-sm text-white my-auto font-bold">
                                {alreadyExistItem
                                    ? (alreadyExistItem?.itemCount as number) <
                                      10
                                        ? `0${alreadyExistItem?.itemCount}`
                                        : alreadyExistItem?.itemCount
                                    : "00"}
                            </span>
                            <span
                                className="text-white font-bold text-base my-auto cursor-pointer"
                                onClick={() => handleItemCount("add")}
                            >
                                +
                            </span>
                        </>
                    ) : (
                        <span
                            className="text-xs font-semibold py-1 px-[5.2px] text-white cursor-pointer"
                            onClick={() => handleItemCount("add")}
                        >
                            ADD <span className="text-xs my-auto">+</span>
                        </span>
                    )}
                </div>
            </div>
            <div className="space-y-[0.5px] w-full">
                <div className=" flex w-full justify-between">
                    <span className="text-base font-medium flex justify-start max-w-[140px] truncate">
                        {singleFoodItemFromProps?.name}
                    </span>
                    <img
                        src={
                            FOOD_TYPE[
                                `${singleFoodItemFromProps?.primary_tag_slug}`
                            ]
                        }
                        className="pe-1 pt-1 flex justify-end"
                        alt=""
                    />
                </div>

                {dataThroughComponent === "menu" && (
                    <div className=" flex items-center">
                        <p className="bg-blue-100 text-blue-800 text-xs font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            {singleFoodItemFromProps?.order}
                        </p>
                        <p className="ms-2 text-sm font-semibold text-black">
                            Votes
                        </p>
                        <span className="w-1  h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
                        <p className="text-sm text-nowrap font-medium text-gray-400">
                            {singleFoodItemFromProps?.order} votes
                        </p>
                    </div>
                )}

                <div className="">
                    <span className="text-sm font-semibold">
                        &#8377;{" "}
                        <span>
                            {dataThroughComponent === "cart"
                                ? (alreadyExistItem?.itemCount as number) > 1
                                    ? (singleFoodItemFromProps?.display_price as number) *
                                      (alreadyExistItem?.itemCount as number)
                                    : singleFoodItemFromProps?.display_price
                                : singleFoodItemFromProps?.display_price}
                        </span>{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FoodItemCard;
