import React from "react";
import "./components.css";

export default function WorkingCard(props) {
    return (
        <>
        <div className={`col-12 col-lg-${props.col} col-md-6 col-sm-12 `}>
            <div className={`card mx-3 text-center `}>
                <div className="d-flex justify-content-center my-3">
                    <img className={`img-100 ${props.classDeco2}  ${props.classDeco}`} src={props.imgUrl} />
                </div>
                <h5 className="card-title mx-3 my-2">{props.workTitle}</h5>
                <div className="card-body">
                    <p className="card-text">{props.workDesc}</p>
                    <button className="light-slide-btn btn-md-text-dark p-2 fs-sm-10">{props.btnName}</button>
                </div>
            </div>
            </div>
        </>
    );
}