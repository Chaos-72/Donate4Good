import React from "react";
import './components.css';

export default function DonateMonthly(props) {
    return (
        <>
            <div className="col-12 col-lg-4 col-md-6 col-sm-6">
                <div className="card mx-3 shadow-sm m-1" >
                    <h5 className="card-title mx-3 my-2"><span className="far fa-check-circle text-success"></span> {props.donateTitle}</h5>
                    <div className="card-body">
                        <p className="card-text">{props.donateDesc}</p>
                    </div>
                </div>
            </div>
        </>
    );
}