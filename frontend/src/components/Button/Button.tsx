import React from "react";
import { motion } from "framer-motion";
import { BUTTON_TYPES } from "../../config/Globals";
import { ButtonProps } from "../../types/PropsTypes";

const Index = ({ children, className, buttonType, onClick }: ButtonProps) => {
    return (
        <motion.button
            onClick={onClick}
            className={`${BUTTON_TYPES[buttonType]} ${className} py-1.5 px-5 text-base md:text-[16px] w-full font-semibold cursor-pointer md:font-semibold rounded-lg`}
        >
            {children}
        </motion.button>
    );
};

export default Index;
