import React from "react";
import Input from "../../../components/Input/Input";

const PlaceOrder = () => { 

    return (
        <div className="space-y-2">
            <div className="border-[1px] p-2 rounded-lg border-gray-400/40">
                <h2 className="text-base font-semibold mb-2">
                    Address & Locality
                </h2>
                <div className="">
                    <span className="text-xs ">Address</span>
                    <Input type="text" placeholder="Enter address" />
                </div>
                <div className="">
                    <span className="text-xs ">Pin Code</span>
                    <Input type="number" placeholder="Enter Pin Code" />
                </div>
            </div>
            <div className="border-[1px] p-2 rounded-lg border-gray-400/40">
                <h2 className="text-base font-semibold mb-2">
                    Enter Card Details
                </h2>
                <div className="">
                    <span className="text-xs ">Name on Card</span>
                    <Input type="text" placeholder="Enter name on card" />
                </div>
                <div className="">
                    <span className="text-xs ">Card Number</span>
                    <Input
                        type="number"
                        placeholder="Enter 16-digit Card Number"
                    />
                </div>
                <div className="">
                    <span className="text-xs ">Expiry Date</span>
                    <Input type="number" placeholder="MM/YY" />
                </div>
                <div className="">
                    <span className="text-xs ">CVV</span>
                    <Input type="number" placeholder="000" />
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
