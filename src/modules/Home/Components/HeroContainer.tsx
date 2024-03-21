import React from "react";
import SearchContainer from "./SearchContainer";

const HeroSearch = () => {
    return (
        <div className="w-full flex flex-col justify-center space-y-16">
            <h1 className="text-center md:text-5xl sm:text-3xl text-2xl font-bold ">
                Search best <span className="text-primary">restaurant</span>{" "}
                <br /> near by
            </h1>

            {/* search box */}

            {/* <Button buttonType="PRIMARY" className="w-fit bg-primary-light">
                Pune
            </Button> */}

            <div className="">
                <SearchContainer />
            </div>
        </div>
    );
};

export default HeroSearch;
