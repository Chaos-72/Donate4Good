import React from "react";
import "./components.css";
// import { a } from "react-router-dom";

export default function Footer(props) {
    return (
        <>
            <footer className="container-fluid  -info mt-4 bg-dark text-light">
                <div className="  ">
                    <div className="row  ">
                        <div className="col-4  ">
                            <div className=" ">
                                <a href="/" >
                                    <h4 className="card-title mt-3 my-4 border-bottom-warning text-light" style={{ width: '10rem' }}>{props.footerTitle}</h4>
                                </a>
                                <p className="card-text">{props.footerDesc}</p>
                            </div>
                        </div>
                        <div className="col-2  ">
                            <div className="  ">
                                <h5 className="card-title  mt-3 my-4 mx-5" style={{ width: '10rem' }}>{props.footerSubTitle1}</h5>
                                <div className="">
                                    <ul className="testobar  text-light w-90">
                                        <li className="list-none  pt-2 pb-2 mx-2">
                                            <a href="/old" id="a1" className="text-light" >Home</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/new" id="a2" className="text-light">Raise donation</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/mid" id="a3" className="text-light">Donate monthly</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/mid" id="a3" className="text-light">Organize Campaign</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/mid" id="a3" className="text-light">Join us</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-2  ">
                            <div className="  s">
                                <h5 className="card-title  mt-3 my-4 mx-5" style={{ width: '10rem' }}>{props.footerSubTitle2}</h5>
                                <div>
                                    <ul className="list-none testobar  w-90">
                                        <li className="pt-2 pb-2 mx-2">
                                            <a href="/old" id="a1" className="text-light" >About us</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/new" id="a2" className="text-light">FAQ</a>
                                        </li>
                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/mid" id="a3" className="text-light">How it works</a>
                                        </li>

                                        <li className="list-none pt-2 pb-2 mx-2">
                                            <a href="/mid" id="a3" className="text-light">NGOs</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-4  ">
                            <div className="  s">
                                <h5 className="card-title  mt-3 my-4 mx-1" style={{ width: '10rem' }}>{props.footerSubTitle3}</h5>
                                {/* <div className="card-body w-90"> */}
                                <h6 className="ml-2">Address:</h6>
                                <p className="ml-2"><span className="fa fa-home"></span> MGM's College of Engineering, Airport Road, Namaskar chowk, Nanded, Maharashtra, India- 431605</p>
                                {/* </div> */}
                                {/* <div className="card-body w-90"> */}
                                <h6 className="ml-2">Email Id:</h6>
                                <span className="ml-2"><span className="fa fa-envelope"></span> s21_bhagat_ravi@mgmcen.ac.in</span> <br />
                                <span className="ml-2"><span className="fa fa-envelope"></span> s21_bodke_sachin@mgmcen.ac.in</span>
                                {/* </div> */}
                                {/* <div className="card-body w-90"> */}
                                <br /><br />
                                <h6 className="ml-2">Mobile No.:</h6>
                                <span className="ml-2"><span className="fa fa-phone"></span> 91+ 9284963183</span> <br />
                                <span className="ml-2"><span className="fa fa-phone"></span> 91+ 7757921858</span>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row  ">
                        <div className="card-body   d-flex align-item-center ">
                            <h5 className="card-title  w-25" style={{ width: '10rem' }}>Get connected with Us</h5>

                            <ul className="testobar  w-90 d-flex h-10">
                                <li className="list-none mr-4">
                                    <a href="/old" id="a1" className="text-light " ><span className="fa fa-instagram "></span></a>
                                </li>
                                <li className="list-none mx-4">
                                    <a href="/new" id="a2" className="text-light "><span className="fa fa-facebook "></span></a>
                                </li>
                                <li className="list-none  mx-4">
                                    <a href="/mid" id="a3" className="text-light "><span className="fa fa-twitter "></span></a>
                                </li>

                                <li className="list-none  mx-4">
                                    <a href="/mid" id="a3" className="text-light "><span className="fa fa-linkedin "></span></a>
                                </li>
                               
                            </ul>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}