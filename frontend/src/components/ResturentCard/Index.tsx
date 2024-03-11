import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Images } from "../../config/Globals";

interface ResturentCardProps {
    resturentObject?: {};
}

const Index = () => {
    return (
        // single resturent info displplay card

        <div className="">
            <div className=" searchCard flex p-1">
                <div className="my-auto">
                    <img
                        src={Images.ThumbImage}
                        className=" md:w-24 sm:w-20 w-auto rounded-lg"
                        alt=""
                    />
                </div>

                <div className="p-2">
                    <div className="">
                        <h4 className="font-bold">Name Resturent</h4>
                        <div className="flex space-x-3">
                            <div className="text-white text-xs space-x-2">
                                <span className="bg-green-600 rounded-md  px-1 py-[0.9px]">
                                    <span>4.9</span>
                                    <StarIcon
                                        className="mb-1"
                                        sx={{
                                            fontSize: 12,
                                        }}
                                    />
                                </span>
                                <span className="text-gray-700">Dining</span>
                            </div>
                            <div className="border-e-2 border-gray-500"></div>
                            <div className="text-white text-xs space-x-2">
                                <span className="bg-green-600 rounded-md  px-1 py-[0.9px]">
                                    <span>4.9</span>
                                    <StarIcon
                                        className="mb-1"
                                        sx={{
                                            fontSize: 12,
                                        }}
                                    />
                                </span>
                                <span className="text-gray-700">Delivery</span>
                            </div>
                        </div>
                        <h4 className="text-[15px]">Resturent address</h4>
                        <h4 className="text-[15px]">Delivery time</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
