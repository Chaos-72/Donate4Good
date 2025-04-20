import { Link } from "react-router-dom";
import "./components.css";
import React from "react";

export default function FooterSmall() {
    return (
        <>
            <div className="container-fluid  bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 border border-danger" >
                            <div className="mt-3">
                                {/* <h5>Donate4Good</h5> */}
                                <p className="font-weight-light fs-sm-10"><span>&#169; </span>Copyright 2023-2024 Donate4Good Registered in MGM's College of Engineering, Nanded (IN) <br /> MGMCEN, Airport Road, Nanded, Maharashra, India-431605</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-md-6 col-sm-12 border border-primary " style={{ height: '60px' }}>
                            <ul className="testobar d-flex h-100 align-items-center justify-content-end w-100 border border-light">
                                <li className="list-none mr-4">
                                    <Link to="/" id="a1" className="text-light fw-600" >HOME</Link>
                                </li>
                                <li className="list-none mx-4">
                                    <Link to="/new" id="a2" className="text-light fw-600">T&C</Link>
                                </li>
                                <li className="list-none  mx-4">
                                    <Link to="/mid" id="a3" className="text-light fw-600">PRIVACY</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}