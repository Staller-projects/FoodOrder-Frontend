import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useForNewUserInput } from "../Hooks/CustomHooks";
import { FormFields } from "../../../config/Globals";
import { OnSubmitSignupForm } from "../Helper/HelperFunctions";

const SignupForm = () => {
    const { inputValues, setNewValues } = useForNewUserInput();

    return (
        <>
            <div className="">
                <Input
                    type="text"
                    value={inputValues.name}
                    onChange={(newInputValue: string) =>
                        setNewValues(newInputValue, FormFields.name)
                    }
                    placeholder="Please enter your name"
                />
            </div>
            <div className="">
                <Input
                    type="email"
                    value={inputValues.email}
                    onChange={(newInputValue: string) =>
                        setNewValues(newInputValue, FormFields.email)
                    }
                    placeholder="Please enter your email"
                />
            </div>
            <div className="">
                <Input
                    type="password"
                    value={inputValues.password}
                    onChange={(newInputValue: string) =>
                        setNewValues(newInputValue, FormFields.password)
                    }
                    placeholder="Please enter your password"
                />
            </div>
            <div className="">
                <Button
                    onClick={() => OnSubmitSignupForm(inputValues)}
                    buttonType="PRIMARY"
                >
                    Sign Up
                </Button>
            </div>
        </>
    );
};

export default SignupForm;
