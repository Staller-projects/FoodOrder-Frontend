import React from "react";

const SearchCardSeletonLoading = () => {
    return (
        <div className="  flex w-full">
            <div className=" m-1 w-[96px] h-[96px] rounded-lg bg-slate-400  animate-pulse"></div>
            <div className="space-y-3">
                <div className=" m-1 w-[200px] h-[19px] bg-slate-400  animate-pulse"></div>
                <div className="flex gap-2">
                    <div className=" m-1 w-[70px] h-[18px] bg-slate-400  animate-pulse"></div>
                    <div className=" m-1 w-[70px] h-[18px] bg-slate-400  animate-pulse"></div>
                </div>
                <div className=" m-1 w-[200px] h-[12px] bg-slate-400  animate-pulse"></div>
            </div>
        </div>
    );
};

export default SearchCardSeletonLoading;
