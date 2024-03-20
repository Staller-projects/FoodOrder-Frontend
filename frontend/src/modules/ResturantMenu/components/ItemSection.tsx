import React, { ReactNode } from "react";
import { Category } from "../../../types/ResturentMenu";
import FoodItemCard from "./FoodItemCard"; 

interface ItemSectionProps {
    children?: ReactNode;
    className?: String;
    category?: Category;
}

const ItemSection = ({ children, className, category }: ItemSectionProps) => {
    return (
        <div className=" ">
            <h1 className="text-lg py-2 px-5 font-bold text-gray-500">
                {category?.category?.name}
            </h1>

            {/* Item cards */}
            <div className=" overflow-y-auto  flex justify-start flex-wrap gap-5 p-5">
                {/* Perticular item cards loop*/}
                {category?.category?.items?.map((item, index) => (
                    <FoodItemCard
                        key={index}
                        dataThroughComponent={"menu"}
                        singleFoodItemFromProps={item.item}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemSection;
