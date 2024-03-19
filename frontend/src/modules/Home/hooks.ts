import { useEffect, useState } from "react"; 

export const useDebounce = (value: string, delay: number = 500) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const deBouncer = setTimeout(() => {
            setDebounceValue(value); 
        }, delay); 


        return () => clearTimeout(deBouncer);
    }, [value, delay]);

    return debounceValue;
};

 