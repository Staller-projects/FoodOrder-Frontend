import React, { ReactNode } from "react";

export interface CommonProps {
    /**
     * id
     */
    id?: string;

    /**
     * classname
     */
    className?: string;
}

// ButtonProps: Defines the props interface for the PrimaryButton component.
export interface ButtonProps extends CommonProps {
    /**
     * Children elements that will be rendered inside the PrimaryButton component.
     * @type {ReactNode}
     */
    children?: ReactNode;

    /**
     * The route name or location where the path is loaded.
     * @type {string} The name or location of the route where the path is loaded.
     */
    path?: string;

    /**
     * Type representing the type of button to render.
     * @type {"PRIMARY" | "OUTLINE" | "ACTION" | "ICON"}
     */
    buttonType: "PRIMARY" | "OUTLINE" | "ACTION" | "ICON";

    /**
     * Click event handler for the PrimaryButton component.
     * @template T The type of data expected by the onClick handler.
     * @param {T} data The data passed to the onClick handler.
     * @returns {void}
     */
    onClick?: <T>(data: T) => void;
}

// input tag different props types defining
export interface InputProps extends CommonProps {
    /**
     * input field specifies here
     */
    type:
        | "text"
        | "email"
        | "date"
        | "number"
        | "radio"
        | "file"
        | "password"
        | "time"
        | "datetime";

    /**
     * placeholder type
     */
    placeholder?: string;

    /**
     * value property from the input tag
     */
    value?: string | number | readonly string[] | undefined;

    /**
     * On change event handler for populating data on input tag
     * @template T The type of data expected by the onChange handler
     * @param {T} data The type of data expected by onChange handler
     * @return {void}
     */
    onChange?: (data: string) => void;
}



