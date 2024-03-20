import React, { useEffect, useState } from "react";  
import MenuCategoryCard from "./MenuCategoryCard";
import ItemSection from "./ItemSection";
import type { Menu } from "../../../types/ResturentMenu";

interface MenuCardsIteratorProps {
    resturantMenus?: Menu[];
}

const MenuCardsIterator = ({ resturantMenus }: MenuCardsIteratorProps) => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

    const handleMenuClick = (index: any) => {
        setSelectedMenuIndex(index === selectedMenuIndex ? -1 : index);
    };

    useEffect(() => {
        handleMenuClick(0);
        // eslint-disable-next-line
    }, []);

    return (
        <div className=" flex justify-  gap-10 ">
            {/* menu cards crasual */}

            <div className=" me-5">
                <h1 className="text-xl text-primary font-semibold w-fit">
                    Menu Categories
                </h1>
                <div className="  overflow-y-auto max-h-[50%] flex flex-col pe-3 py-3 gap-4 ">
                    {resturantMenus?.map((menuSection, index: number) => (
                        <MenuCategoryCard
                            key={index}
                            menuSection={menuSection}
                            onClick={() => handleMenuClick(index)}
                            isSelected={selectedMenuIndex === index}
                        />

                    ))}
                </div>
            </div>

            {/* selected menu and their items */}
            <div className="">
                <div className="flex justify-between">
                    <h1 className="text-xl text-primary font-semibold">
                        Food Items
                    </h1>
                    {/* <Input type="text" className="!py-1 w-fit" /> */}
                </div>
                {selectedMenuIndex < 0 ? (
                    <div className="w-full">
                        <h1 className="text-xl w-full  text-gray-400 font-bold text-center my-10">
                            Please select menu category.
                        </h1>
                    </div>
                ) : (
                    <div className=" overflow-y-auto max-h-[50%]">
                        {resturantMenus?.map((menuSection, index: number) => (
                            <>
                                {selectedMenuIndex === index &&
                                    menuSection?.menu?.categories?.map(
                                        (category, index) => (
                                            <ItemSection
                                                key={`item${index}`}
                                                category={category}
                                            />
                                        )
                                    )}
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuCardsIterator;
