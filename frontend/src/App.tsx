import React from "react";
import "./App.css";

import Signup from "./layouts/Signup/Index";
import Home from "./layouts/Home/Index";
import Navbar from "../src/components/Navbar/Index";

function App() {
    return (
        <div className="App">
            <div className="App-header">
                {/* <Signup /> */}
                <Navbar />
                <div className="">
                    <Home />
                </div>
            </div>
        </div>
    );
}

export default App;
