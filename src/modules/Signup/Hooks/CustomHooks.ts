import React, { useState } from "react";

export interface UserData {
    name: string;
    email: string;
    password: string;
}

export const useForNewUserInput = () => {
    const [inputValues, setInputValues] = useState<UserData>({
        name: "",
        email: "",
        password: "",
    });

    const validateUserInputs = (
        newInputValue: string,
        inputForLabel: string
    ) => {};

    const setNewValues = (newInputValue: string, inputForLabel: string) => {
        // validateUserInputs;
        setInputValues({ ...inputValues, [inputForLabel]: newInputValue });
    };

    return { inputValues, setNewValues, validateUserInputs };
};
