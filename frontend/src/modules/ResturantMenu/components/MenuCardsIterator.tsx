import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Menu } from "../../../types/ResturentMenu";
import MenuCategoryCard from "./MenuCategoryCard";
import ItemSection from "./ItemSection";

interface MenuCardsIteratorProps {
    resturantMenus?: Menu[];
}

const MenuCardsIterator = ({ resturantMenus }: MenuCardsIteratorProps) => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(111111111111);

    const handleMenuClick = (index: any) => {
        setSelectedMenuIndex(
            index === selectedMenuIndex ? 111111111111 : index
        );
    };

    useEffect(() => {
        handleMenuClick(0);
        // eslint-disable-next-line
    }, []);

    return (
        <motion.div className="">
            {/* menu cards crasual */}
            <div className="w-full py-2 flex justify-start gap-4 overflow-x-auto">
                {resturantMenus?.map((menuSection, index: number) => (
                    <div key={index} className="">
                        <MenuCategoryCard
                            menuSection={menuSection}
                            onClick={() => handleMenuClick(index)}
                            isSelected={selectedMenuIndex === index}
                        />
                    </div>
                ))}
            </div>

            {/* selected menu items */}
            <div className="my-5">
                <h1 className="text-xl text-primary font-semibold w-fit">
                    Food Items
                </h1>
                {resturantMenus?.map((menuSection, index: number) => (
                    <div className="w-full" key={`sec${index}`}>
                        {selectedMenuIndex === index &&
                            menuSection?.menu?.categories?.map(
                                (category, index) => (
                                    <ItemSection
                                        key={`item${index}`}
                                        category={category}
                                    />
                                )
                            )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default MenuCardsIterator;
