import React from "react";
import { InputProps } from "../../types/PropsTypes";

const Index = ({
    type,
    id,
    className,
    placeholder,
    value,
    onChange,
}: InputProps) => {
    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            // onKeyUp={(e) => console.log(e.target)}
            placeholder={placeholder ?? "this is dummy placeholder"}
            className={`${className} text-bas text-black font-semibold px-3 py-1 w-full rounded-lg border-2 border-gray-500/50 focus:border-gray-500/90 bg-transparent outline-none`}
        />
    );
};

export default Index;
