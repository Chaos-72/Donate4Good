import React from "react";

export default function VolunteerCard(props) {
    return (
        <>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12 volunteer-card card-shape">
                <div className="w-100 overflow-hidden" style={{height: '60vh'}}>
                    <img className="card-shape-lg" style={{height: 'auto'}} src={props.volunteerImgUrl} width={'100%'} />
                </div>
                <div className={`volunteer-card-name text-center rounded w-75 ${props.volunteerBgColor}`}>
                    <p className="fw-600 fs-15 line-spancing mb-0  text-white">{props.volunteerName}</p>
                    <p className="text-white">Volunteer</p>
                </div>
            </div>
        </>
    );
}