import React, { useEffect } from "react";
import { fetchResturentData } from "../../../app/Reducers/ResturantDataReducers";
import MenuCardsIterator from "./MenuCardsIterator";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import type { ResturnatParams } from "../../../api/GetRequests";
import type { Menu } from "../../../types/ResturentMenu";
import { Images } from "../../../config/Globals";

// export interface SelectedResturantParams

const MenuListSidebar = () => {
    // getting resturant Params
    const resturantDetails = useParams();
    const params: ResturnatParams = {
        resturantCity: resturantDetails.resturantCity,
        resturantName: resturantDetails.resturantName,
    } as any;

    // const dispatch = useDispatch<AppDispatch>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchResturentData(params));
        // eslint-disable-next-line
    }, []);

    const selector = useAppSelector((state) => state.ResturantData.data);
    // const selector = {
    //     isLoading: false,
    // };
    const resturantData = selector.data;
    // console.log(resturantData);

    // const resturantData: any = response;
    const tempResturentId = String(
        resturantData?.pages?.current?.resId
    ) as String;
    const resturantMenus = resturantData?.pages?.restaurant?.[
        `${tempResturentId}`
    ]?.order?.menuList?.menus as Menu[];

    /**
     * I want the dropdown in which which the title of the dropdown will be the category
     */
    return (
        <div className=" mx-auto  max-h-[50%]">
            {selector.isLoading ? (
                <div className="flex justify-center align-middle w-full h-40 ">
                    <img
                        src={Images.ResturentDataLoadingSvg}
                        alt="Resturant loading svg"
                    />
                </div>
            ) : (
                <MenuCardsIterator resturantMenus={resturantMenus} />
            )}
        </div>
    );
};

export default MenuListSidebar;
