import React from "react";
import SignupForm from "./components/SignupForm";
import Button from "../../components/Button/Button";
import { Images } from "../../config/Globals";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Index = () => {
    return (
        <div className="flex h-screen">
            {/* Image Section (Takes up half the screen height) */}
            <div className=" bg-gray-300 hidden md:flex sm:flex justify-start">
                <img
                    src={Images.SignUpCoverImage}
                    alt="Signup cover"
                    className="h-full w-auto mx-auto"
                />
            </div>

            {/* Form Section (Takes up the other half of the screen) */}
            <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
                {/* Your form content goes here */}
                <div className="space-y-5 w-full max-w-sm">
                    <h1 className="text-center text-2xl font-extrabold">
                        Signup to get started
                    </h1>
                    {/* The signup form will goes here */}
                    <SignupForm />
                </div>

                <hr className="h-px my-8 border-0 w-1/3 dark:bg-gray-500" />

                <div className="">
                    <span className="text-black flex text-nowrap space-x-2 !text-base">
                        <span> Already have an account ? </span>
                        <Button buttonType="ACTION" className="!p-0">
                            Login Here
                        </Button>
                    </span>
                </div>

                <div className="flex justify-center align-bottom">
                    <Button buttonType="ACTION">
                        <KeyboardBackspaceIcon className="my-auto" />
                        Go to Home Page
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Index;
