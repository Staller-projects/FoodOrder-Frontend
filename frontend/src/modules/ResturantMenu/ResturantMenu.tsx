import React from "react";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";

const ResturantMenu = () => {
    return (
        <div className="p-1 h-full">
            <div className="">
                {/* Resturant details header */}
                <Header />

                {/* Resturant Menu sidebar  */}
                <div className="max-h-20">
                    <MenuContainer />
                </div>
            </div>
        </div>
    );
};

export default ResturantMenu;
