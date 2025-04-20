import React from "react";
import "./components.css";

export default function ProgressiveForm () {
    return (
        <>
            <div className="container">
                <form className="container">
                    <div id="step1" className="show">
                        <input type="text" id="" placeholder="First name"/>
                        <input type="text" id="" placeholder="Last name"/>
                    </div>
                </form>
            </div>
        </>
    );
}