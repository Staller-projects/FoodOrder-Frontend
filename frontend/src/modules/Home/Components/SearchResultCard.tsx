import React, { useMemo } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { Images } from "../../../config/Globals";
import AxiosRequest from "../../../api/API";
import type SearchSuggestions from "../../../types/SearchSuggestions";

interface ResturentCardProps {
    resturentObject?: SearchSuggestions;
}

const Index = ({ resturentObject }: ResturentCardProps) => {
    /**
     *
     */
    const getRatingBadgeColor = (rating: string) => {
        const colorClass =
            rating !== "-"
                ? rating >= "3.5"
                    ? rating >= "4.2"
                        ? "bg-green-800"
                        : "bg-green-600"
                    : "bg-yellow-600"
                : "bg-gray-500";

        return colorClass;
    };

    const res = useMemo(() => {
        // Declare and initialize restaurant information
        const resturantOrDishName =
            resturentObject?.info?.name || "Name not available";
        const imageUrl =
            resturentObject?.info?.image?.url || Images.ThumbnailImage;
        const address =
            resturentObject?.info?.locality?.name || "Address Not Available";
        const deliveryTime =
            resturentObject?.order?.deliveryTime ||
            "Delivery Time Not Available";
        const diningRating =
            resturentObject?.info?.ratingNew?.ratings?.DINING?.rating || "-";
        const diningSubtitle =
            resturentObject?.info?.ratingNew?.ratings?.DINING?.subtitle || "";
        const deliveryRating =
            resturentObject?.info?.ratingNew?.ratings?.DELIVERY?.rating || "-";
        const deliverySubtitle =
            resturentObject?.info?.ratingNew?.ratings?.DELIVERY?.subtitle || "";
        const entityType = resturentObject?.entityType || "";
        const clickUrl =
            resturentObject?.actionInfo?.clickUrl ||
            "No Resturent Page found page";

        return {
            resturantOrDishName,
            imageUrl,
            diningRating,
            diningSubtitle,
            deliveryRating,
            deliverySubtitle,
            address,
            deliveryTime,
            entityType,
            clickUrl,
        };
    }, [resturentObject]);

    const getRes = async (resName: string) => {
        const url = `zmt-apis/respage/?resturentname=${resName}`;
        const response = await AxiosRequest({
            method: "GET",
            url: url,
        });

        const result = response;

        console.log(result);
        // console.log(result);
    };

    return (
        // single resturent info displplay card

        <Link to={res?.clickUrl} className=" searchCard flex px-1 ">
            <div className="my-auto">
                <img
                    // src={Images.ThumbImage}
                    src={res?.imageUrl}
                    className=" md:w-24 sm:w-20 w-auto rounded-lg"
                    alt=""
                />
            </div>

            <div className="p-2" onClick={() => getRes(res?.clickUrl)}>
                <div className="">
                    <h4 className="font-bold">{res?.resturantOrDishName}</h4>
                    <div className="flex flex-wrap w-full space-x-3">
                        {/* Dining rating section */}
                        <div className="text-white text-xs text-nowrap space-x-2">
                            <span
                                className={`${getRatingBadgeColor(
                                    res?.diningRating
                                )} rounded-md  px-1 py-[0.9px]`}
                            >
                                <span>{res?.diningRating}</span>
                                <StarIcon
                                    className="mb-1"
                                    sx={{
                                        fontSize: 12,
                                    }}
                                />
                            </span>
                            <span className="text-gray-700">
                                {res?.diningSubtitle}
                            </span>
                        </div>
                        <div className="border-e-2 border-gray-500"></div>

                        {/* Delivery rating section */}
                        <div className="text-white text-xs text-nowrap space-x-2">
                            <span
                                className={`${getRatingBadgeColor(
                                    res?.deliveryRating
                                )} rounded-md  px-1 py-[0.9px]`}
                            >
                                <span>{res?.deliveryRating}</span>
                                <StarIcon
                                    className="mb-1"
                                    sx={{
                                        fontSize: 12,
                                    }}
                                />
                            </span>
                            <span className="text-gray-700">
                                {res?.deliverySubtitle}
                            </span>
                        </div>
                    </div>

                    {/* Resturent other information */}
                    <div className="py-1">
                        <h4 className="text-[14px]">{res?.address}</h4>
                        <h4 className="text-[14px]">{res?.deliveryTime}</h4>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Index;
