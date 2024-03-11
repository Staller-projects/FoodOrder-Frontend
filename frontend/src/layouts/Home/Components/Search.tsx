import React from "react";
import Input from "../../../components/Input/Index";
import Button from "../../../components/Button/Index";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ResturentCard from "../../../components/ResturentCard/Index";
// import AxiosRequest from "../../../api/API";

const Search = () => {
   
    //  AxiosRequest();

    // console.log(AxiosRequest().then());

    return ( 
            <div className="w-full flex justify-center space-x-2">
                <Button
                    buttonType="PRIMARY"
                    className=" w-fit h-fit py-2 hidden bg-primary-light md:flex sm:block"
                >
                    <LocationOnIcon className="my-auto" sx={{ fontSize: 19 }} />
                    <span className="my-auto">Pune</span>
                </Button>
                <div className="md:w-2/6">
                    <div className="relative">
                        <Input
                            type="text"
                            className="py-1.5 ps-10"
                            placeholder="Search Resturents, Dishes, etc."
                        />

                        <SearchIcon className="absolute top-2 left-2 text-primary" />
                    </div>

                    {/* Search Result container */}
                    <div className="my-1 fixed w-2/6 md:max-h-[450px] sm:max-h-[450px] overflow-y-auto shadow-2xl space-y-2 shadow-primary-light/30 border-[0.5px] border-gray-300 bg-transparent backdrop-blur-lg rounded-lg">
                        {/* Loop the search result into cards */}
                        <ResturentCard />
                    </div>
                </div>
            </div> 
    );
};

export default Search;
