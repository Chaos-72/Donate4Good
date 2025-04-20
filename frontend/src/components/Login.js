import React from "react";
import "./components.css"
import { Link } from "react-router-dom";

export default function Login() {

  

    return (
        <>
            <div className="container  bg-blog volunteer-card-bg-red " style={{height: '4.1rem'}}></div>      

            <section className=" gradient-form " id="background" style={{ backgroundColor: '#eee' }}>
                <div className="container ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                    style={{ width: "180px" }} alt="logo" />
                                                <h4 className="mt-1 mb-2 pb-1">We Are The Open-Heart Team</h4>
                                            </div>

                                            <form>
                                                <p>Please Register to your account</p>
                                                <div className="form-outline mb-2">
                                                    <input type="email" id="email" className="form-control input-border-bottom  input-remove-design "
                                                        placeholder="Email-Address" />
                                                    <label className="form-label" for="email"></label>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <input type="password" id="password" className="form-control input-border-bottom   input-remove-design " placeholder="Password" />
                                                    <label className="form-label" for="password"></label>
                                                </div>

                                                <div className="text-center pt-1  pb-1">
                                                    <button className="btn btn-secondary btn-block fa-lg gradient-custom-2 mb-4 btn-width py-3" type="button">Login</button>
                                                    
                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0">Login to your account?</p>
                                                    <Link to="/register" >
                                                        <button type="button" className="btn btn-outline-danger mt-2">Sign Up</button>
                                                    </Link>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a Donar !</h4>
                                            <p className="small mb-0">“Money is not the only commodity that is fun to give. We can give time, we can give our expertise, we can give our love, or simply give a smile. What does that cost? The point is, none of us can ever run out of something worthwhile to give."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}