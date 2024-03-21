import React, { useEffect, useState } from "react";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import MenuCategoryCard from "./MenuCategoryCard";
import ItemSection from "./ItemSection"; 
import type { Menu } from "../../../types/ResturentMenu";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { menuCategorySidebar } from "../../../app/Slices/ComponentToggleSlice";

interface MenuCardsIteratorProps {
    resturantMenus?: Menu[];
}

const MenuCardsIterator = ({ resturantMenus }: MenuCardsIteratorProps) => {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);
    const [hideScrollbar, setHideScrollbar] = useState(false);

    const selector = useAppSelector((state) => state.ComponentToggleState.data);
    const dispatch = useAppDispatch();

    const handleMenuClick = (index: any) => {
        setSelectedMenuIndex(index === selectedMenuIndex ? -1 : index);
    };

    useEffect(() => {
        handleMenuClick(0);
        // eslint-disable-next-line
    }, []);

    return (
        <div className="relative flex   gap-10 ">
            {/* menu cards crasual */}

            {selector.menuCategorySidebar ? (
                <div
                    className={` fixed me-5 ps-3 pe-3 border-r-[1px] h-full border-gray-400/50 ${
                        hideScrollbar ? "" : "no-scrollbar"
                    }`}
                    onMouseOver={() => setHideScrollbar(!hideScrollbar)}
                >
                    <div className=" flex justify-between">
                        <h1 className="text-xl text-primary font-semibold w-fit">
                            Menu Categories
                        </h1>
                        <div
                            className="absolute top-60 -right-3 bg-gray-300 rounded-full cursor-pointer"
                            onClick={() =>
                                dispatch(
                                    menuCategorySidebar(
                                        !selector.menuCategorySidebar
                                    )
                                )
                            }
                        >
                            <SwitchRightIcon
                                className="text-gray-600 my-5"
                                sx={{ fontSize: 20 }}
                            />
                        </div>
                    </div>
                    <div className="  overflow-y-auto max-h-[600px] flex flex-col pe-3 py-3 gap-4 ">
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
            ) : (
                <div
                    className="absolute top-60 -left-3 bg-gray-300 rounded-full cursor-pointer"
                    onClick={() =>
                        dispatch(
                            menuCategorySidebar(!selector.menuCategorySidebar)
                        )
                    }
                >
                    <SwitchRightIcon
                        className="text-gray-600 my-5"
                        sx={{ fontSize: 20 }}
                    />
                </div>
            )}

            {/* selected menu and their items */}
            <div
                className={`${
                    selector.menuCategorySidebar && "ms-[250px]"
                } px-3 w-full`}
            >
                <div className="flex justify-between">
                    <h1 className="text-xl text-primary font-semibold">
                        Food Items
                    </h1>
                    <div className="flex gap-5">
                        <div
                            className="flex items-center mb-4"
                            onClick={(e) => {
                                console.log(e.target);
                            }}
                        >
                            <input
                                type="checkbox"
                                value=""
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <p className="ms-2 text-sm font-medium text-gray-900">
                                Veg
                            </p>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                value=""
                                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <p className="ms-2 text-sm font-medium text-gray-900">
                                Non-Veg
                            </p>
                        </div>
                    </div>
                </div>
                {selectedMenuIndex < 0 ? (
                    <div className="w-full">
                        <h1 className="text-xl w-full  text-gray-400 font-bold text-center my-10">
                            Please select menu category.
                        </h1>
                    </div>
                ) : (
                    <div className=" overflow-y-auto max-h-[600px]">
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
