import React, { useMemo } from "react";
import DownArrowIcon from "@mui/icons-material/KeyboardArrowDown";
import UpArrowIcon from "@mui/icons-material/KeyboardArrowUp";
import type { Menu, Category } from "../../../types/ResturentMenu";

interface MenuCategoryCardProps {
    menuSection?: Menu;
    isSelected?: boolean; // Define the isSelected prop
    onClick?: () => void;
}

const MenuCategoryCard = ({
    menuSection,
    onClick,
    isSelected,
}: MenuCategoryCardProps) => {
    const res = useMemo(() => {
        let numberOfItemsInMenuSection: number = 0;

        // eslint-disable-next-line
        menuSection?.menu?.categories?.map((item: Category, index: number) => {
            const itemsLength = item?.category?.items?.length ?? 0;
            numberOfItemsInMenuSection += itemsLength;
        });

        const menuSectionName = menuSection?.menu?.name || "No name";

        return {
            menuSectionName,
            numberOfItemsInMenuSection,
        };
    }, [menuSection]);

    return (
        <div className="w-fit relative">
            <div
                className={` ${
                    isSelected ? "bg-primary/60" : ""
                } rounded-lg p-2 bg-primary/20 cursor-pointer`}
                onClick={onClick}
            >
                <div className=" text-gray-700 flex justify-between">
                    <div className="">
                        <span
                            className={` truncate ${
                                isSelected ? "text-white" : "text-gray-500"
                            } text-[16px] font-bold`}
                        >
                            {res?.menuSectionName}
                        </span>
                        <span className=" text-xs text-white bg-primary-light font-bold absolute right-[-8px] top-[-8px] my-auto ms-2  py-0.5  px-1 rounded-full">
                            {res?.numberOfItemsInMenuSection < 10
                                ? `0${res?.numberOfItemsInMenuSection}`
                                : res?.numberOfItemsInMenuSection}
                        </span>
                    </div>
                    {!isSelected ? (
                        <DownArrowIcon className={`my-auto `} />
                    ) : (
                        <UpArrowIcon
                            className={`my-auto ${
                                isSelected ? "text-white" : ""
                            }`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MenuCategoryCard;
