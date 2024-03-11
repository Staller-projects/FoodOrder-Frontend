import React from "react";
import HeroContainer from "./Components/HeroContainer";
import NearbyResturent from "./Components/NearbyResturent";

const Index = () => {
    return (
        <div className="space-y-10">
            {/* Hero search box  */}
            <HeroContainer />

            {/* Based on location, nearby resturents dislpay container */}
            <NearbyResturent />
        </div>
    );
};

export default Index;
