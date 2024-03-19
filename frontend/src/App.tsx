import React from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout";

import Navbar from "./components/Navbar/Navbar";
import CheckoutDrawer from "./modules/CheckoutDrawer/CheckoutDrawer";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                {/* <Signup /> */}

                <Navbar />

                {/* cart section */}
                <div className="h-full">
                    <CheckoutDrawer />
                </div>

                <div className="space-y-10">
                    {/* <Home /> */}
                    {/* <ResturantMenu /> */}
                    <AppLayout />
                </div>
            </div>
        </div>
    );
}

export default App;
