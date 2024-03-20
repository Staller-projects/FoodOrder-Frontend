/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#515DFD", //39DB4A -> light green // FE6869 -> REDISH
                "primary-light": "#7887FF",
                "primary-dark": "#2D3FBF",
                secondary: "#F6AD55",
                "secondary-light": "#FFC278",
                "secondary-dark": "#C47D1E",
                "text-primary": "#333333",
                "text-secondary": "#666666",
                "bg-primary": "#FFFFFF",
                "bg-secondary": "#F8F8F8",
                success: "#6ABD90",
                warning: "#F6C90E",
                error: "#EF4444",
                info: "#6CB2EB",
                neutral: "#CCCCCC",
                "neutral-light": "#E5E5E5",
                "neutral-dark": "#999999",
                accent: "#FF3E3E",
                "accent-light": "#FF6B6B",
                "accent-dark": "#D11B1B",
                "shadow-primary": "",
            }, 
        },
    },
    plugins: [],
};
