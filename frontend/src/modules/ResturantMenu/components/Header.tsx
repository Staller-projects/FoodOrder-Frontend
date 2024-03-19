import React from "react";
import BackIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import type { SectionBasicInfo } from "../../../types/ResturentMenu";
import { useAppSelector } from "../../../app/hooks";

const Header = () => {
    const navigate = useNavigate();
    const selector: any = useAppSelector(
        (state) => state.ResturantData.data.data
    );
    const resturentId = String(selector?.pages?.current?.resId) as string;
    const basicInfo: SectionBasicInfo = selector?.pages?.restaurant[
        `${resturentId}`
    ].sections?.SECTION_BASIC_INFO as SectionBasicInfo;

    return (
        <div>
            <div className="my-auto flex py-4 space-x-3 border-b-[1px] border-primary/20">
                <div
                    className="my-auto cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <BackIcon className="text-primary my-auto" />
                </div>
                <h1 className="text-2xl my-auto font-bold text-gray-700">
                    {basicInfo?.name}
                </h1>
            </div>
        </div>
    );
};

export default Header;
