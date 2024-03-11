import React from "react";
import { Images } from "../../../config/Globals";
import Search from "./Search";
import Button from "../../../components/Button/Index";
import { getLocation } from "../Helper/GetCurrentLocation";

const HeroSearch = () => { 

    return (
        <div className="w-full space-y-8">
            <h1 className="text-center md:text-5xl sm:text-3xl text-2xl font-bold text-primary">
                Find best resturents <br /> near by
            </h1>

            {/* search box */}

            {/* <Button buttonType="PRIMARY" className="w-fit bg-primary-light">
                Pune
            </Button> */}

            <div className="">
                <Search />{" "}
            </div>

            {/* <div className=" w-3/6 relative"> 
                <Input
                    type="text"
                    className="py-2 ps-10"
                    placeholder="Search Resturents, Dishes, etc."
                />
 
                <SearchIcon className="absolute top-2 left-2 text-primary" />
 
                <div className="bg-gray-300">
                    <div className="searchCard ">
                        <div className="">
                            <img
                                src={Images.ThumbImage}
                                className="rounded-lg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeroSearch;
