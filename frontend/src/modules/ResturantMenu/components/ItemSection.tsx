import React, { ReactNode } from "react";
import { Category } from "../../../types/ResturentMenu";
import FoodItemCard from "./FoodItemCard";
import { motion } from "framer-motion";

interface ItemSectionProps {
    children?: ReactNode;
    className?: String;
    category?: Category;
}

const ItemSection = ({ children, className, category }: ItemSectionProps) => {
    return (
        <motion.div className="min-w-full">
            {/* section */}
            <div className=" rounded-lg">
                <h1 className="text-lg py-2 px-5 font-bold text-gray-500">
                    {category?.category?.name}
                </h1>

                {/* Item cards */}
                <div className="flex justify-start flex-wrap gap-5 p-5">
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
        </motion.div>
    );
};

export default ItemSection;
