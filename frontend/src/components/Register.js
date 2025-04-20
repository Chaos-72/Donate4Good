import React, {useState} from "react";
import "./components.css"
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();     // prevent from default submit
        axios.post('http://localhost:3000/register', {name, email, password})     // send the data to the server with given url/ location
        .then(result => console.log(result))
        .catch(error => console.error(error))
    }

    return (
        <>

            <section className=" gradient-form" id="background" style={{ backgroundColor: '#eee;' }}>
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

                                            <form onSubmit={handleSubmit}>
                                                <p>Please Register to your account</p>
                                                <div className="form-outline mb-2 ">
                                                    <input type="text" id="name" className="form-control input-border-bottom  input-remove-design "
                                                        placeholder="Name" onChange={(e) => setName(e.target.value)} />
                                                    <label className="form-label" for="name"></label>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <input type="text" id="phone" className="form-control input-border-bottom  input-remove-design "
                                                        placeholder="Phone" />
                                                    <label className="form-label" for="phone"></label>
                                                </div> 

                                                <div className="form-outline mb-2">
                                                    <input type="email" id="email" className="form-control input-border-bottom  input-remove-design "
                                                        placeholder="Email-Address" onChange={(e) => setEmail(e.target.value)}/>
                                                    <label className="form-label" for="email"></label>
                                                </div>

                                                <div className="form-outline mb-2">
                                                    <input type="password" id="password" className="form-control input-border-bottom   input-remove-design " placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                                    <label className="form-label" for="password"></label>
                                                </div>

                                                <div className="text-center pt-1  pb-1">
                                                    <button className="btn btn-secondary btn-block fa-lg gradient-custom-2 mb-4 btn-width py-3" type="button">Sign Up</button>

                                                    <a className="text-muted" href="#!">Forgot password?</a>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="mb-0">Login to your account?</p>
                                                    <Link to="/login" >
                                                        <button type="button" className="btn btn-outline-danger mt-2">Login</button>
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