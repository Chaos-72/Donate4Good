import React from "react";
import CountNumberAOS from "./CountNumberAOS";
import SachinImg from "./images/Sachin-img.jpg"
import RaviImg from "./images/Ravi-img.jpg"
import Footer from "./Footer";


export default function About() {

    return (
        <>
            <div className="container-fluid bg-img " >

                {/* Add overlay on top of the background image */}
                <div className="bg-img-overlay "></div>
                <div className="container content ">
                    <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: '100px' }}>
                        <h1 className='font-Aleo-donation_heading text-grey-head text-center text-white fw-600 fs-40 mt-5'>About</h1>
                    </div>
                    <div className="text-center mt-2" data-aos="fade-up">
                        <span data-aos="fade-up" className="py-0 px-2 mt-1 rounded bg-primary text-white fs-20">Donate4Good TEAM</span>
                        <p className="text-white text-center mt-3">We are here for people want help, Our Team is fully work enthusiast.</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 ">
                            <h2 className="text-white mb-5"><span className="after-bottom-line pb-2">About Donate4Good</span></h2>
                            <p className="text-white mt-3">Donate4Good’s mission is to "make giving bigger and better". We are the most trusted giving platform in India. Through our technology solutions and services, we enable individuals and organizations to raise funds for, and donate to any cause they care about, with trust and convenience. Our community of 2.7M+ individual donors and 300+ organizations supports 3,000+ verified nonprofits, serving 15M+ people across the country.</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 d-flex justify-content-end">
                            <img className="ml-5" src="https://media.istockphoto.com/id/1360092910/photo/words-with-about-us-web-concept-idea.jpg?s=2048x2048&w=is&k=20&c=ujGrF3CyUyM1S8mLaBVyyWRjZO0mOkBDtBonHJLG_MA=" width={'80%'} alt="img-about" />
                        </div>
                    </div>
                </div>

                {/* Number counter on scroll */}
                <div className="row  mx-5 my-3">
                    <div className="container-fluid z-index-2 mx-5 mr-5 mt-5">
                        <div className="linear-gradient-b-w w-100 pt-3 d-flex justify-content-around">
                            <div>
                                <CountNumberAOS number="1000" />
                                <p className="text-center">Donors</p>
                            </div>
                            <div>
                                <CountNumberAOS number="4000" />
                                <p className="text-center">NGOs</p>
                            </div>
                            <div>
                                <CountNumberAOS number="6000" />
                                <p className="text-center">Donation</p>
                            </div>
                            <div>
                                <CountNumberAOS number="500" />
                                <p className="text-center">Members</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our CEOs */}
                <div className="container-fluid content mb-5 bg-black">
                    <div className="row py-5 border-left-blue">
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center ">
                            <p className="fs-40 text-white ml-5 font-Aleo-donation_heading">Our CEOs</p>
                        </div>
                        <div className="col-12 col-lg-6 col-md-12 col-sm-12 ">
                            <div className=" d-flex justify-content-end mb-5">
                                <p className="text-white mr-5">
                                    <p className="fs-20 fw-600 text-white">SACHIN BODKE</p>
                                    The BackEnd developer, known for his courage and commitment towards his work. Hard working and fareless, at the same time Kind and Sweet.
                                    Hard working and fareless, at the same time Kind and Sweet.
                                </p>
                                <img src={SachinImg} alt="Sachin-img" className="ceo-img-1 ml-5" />
                            </div>
                            <div className=" d-flex justify-content-end mt-5">
                                <p className="text-white mr-5">
                                    <p className="fs-20 fw-600 text-white">RAVI BHAGAT</p>
                                    The FrontEnd developer, known for his courage and commitment towards his work. Hard working and fareless, at the same time Kind and Sweet.
                                    Hard working and fareless, at the same time Kind and Sweet.
                                </p>
                                <img src={RaviImg} alt="Sachin-img" className="ceo-img-2 ml-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our values */}
                <div className="container content my-5 bg-black  rounded" >
                    <div className="mt-5 container rounded pb-4 ">
                        <h3 className="card-title mt-3 my-4  head-title text-white text-center ">Our Values</h3>
                        <p className=" text-center text-white fw-600">Sign once and invest in India future</p>
                        <div className="container  d-flex justify-content-around">
                            <div className="row">
                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 my-2 ">
                                    <div className="card mx-3 shadow-sm hover-card-shadow" >
                                        <h5 className="card-title mx-3 my-2"><span className="far fa-check-circle text-success"></span> Integrity in everything we do</h5>

                                        <div className="card-body">
                                            <p className="card-text">We strive never to take the easy path, but always the honest one. We practice integrity in all our actions.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 my-2 ">
                                    <div className="card mx-3 shadow-sm hover-card-shadow" >
                                        <h5 className="card-title mx-3 my-2"><span className="far fa-check-circle text-success"></span> Serve with passion</h5>

                                        <div className="card-body">
                                            <p className="card-text">We are fiercely to our purpose of poverty alleviation, and work with a burning desire to.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 my-2 ">
                                    <div className="card mx-3 shadow-sm hover-card-shadow" >
                                        <h5 className="card-title mx-3 my-2"><span className="far fa-check-circle text-success"></span> Focused on scale</h5>

                                        <div className="card-body">
                                            <p className="card-text">We stay laser-focused on large-scale impact. If we can’t scale it, we park it different from other platform.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-3 col-md-6 col-sm-12 my-2 ">
                                    <div className="card mx-3 shadow-sm hover-card-shadow" >
                                        <h5 className="card-title mx-3 my-2"><span className="far fa-check-circle text-success"></span> Empathy for all</h5>

                                        <div className="card-body">
                                            <p className="card-text">We stay laser-focused on large-scale impact. If we can’t scale it, we park it it different from other platform it different from .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Purpose */}
                <div className="container content bg-black  mb-5">
                    <div className="row ">
                        <div className="col-12 col-lg-5 col-md-5 col-sm-12 d-flex align-items-center ">
                            <h3 className="text- font-Aleo-donation_heading border-bottom-white after-bottom-line text-white">Our Purpose</h3>
                        </div>
                        <div className="col-12 col-lg-7 col-md-7 col-sm-12 p-4 ">
                            <p className="text-white fw-600">We exist to alleviate poverty by enabling the world to give. Donate4Good was born to bridge the gap between the people who want tomake a difference through giving back and those who are doing phenomenal work but need more support.</p>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="container content  bg-white mb-5 pb-4 pt-3">
                    <div className="row ">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12   ">
                            <div className="mb-5">
                                <h3 className="fs-40 text-dark font-Aleo-donation_heading">Contact</h3>
                                <p className="text-secondary fs-15 mr-5">
                                    420, MGM's College of Engineering, Nanded, <br />
                                    Maharashtra, India - 431605 <br />
                                    Mon - Sat : 10:30 am - 5:30 pm
                                </p>
                            </div>
                            <div className="" style={{ marginTop: '7rem' }}>
                                <h3 className="fs-40 text-dark mb-3 font-Aleo-donation_heading">Follow</h3>
                                <ul className="testobar  w-90 d-flex h-10">
                                    <li className="list-none mr-4">
                                        <a href="/old" id="a1" className="text-dark " ><span className="fa fa-instagram "></span></a>
                                    </li>
                                    <li className="list-none mx-4">
                                        <a href="/new" id="a2" className="text-dark "><span className="fa fa-facebook "></span></a>
                                    </li>
                                    <li className="list-none  mx-4">
                                        <a href="/mid" id="a3" className="text-dark "><span className="fa fa-twitter "></span></a>
                                    </li>

                                    <li className="list-none  mx-4">
                                        <a href="/mid" id="a3" className="text-dark "><span className="fa fa-linkedin "></span></a>
                                    </li>
                                </ul>
                                <p className="fs-15 "><span>&#169;</span>2023 Privacy Policies</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                            <form className=" ">
                                <div className="mt-5 mb-3">
                                    <input className="input-payment-box input-remove-design w-100 input-border-bottom fs-15" type="text" placeholder="Enter Your Name: " /> <br />
                                </div> <br />
                                <div className="mt-2 mb-3">
                                    <input className="input-payment-box input-remove-design w-100 input-border-bottom fs-15" type="email" placeholder="Enter a Valid Email address" /> <br />
                                </div><br />
                                <div className="mt-2 mb-3">
                                    <textarea className="input-remove-design w-100 input-border-bottom fs-15" type="text" rows={4} placeholder="Enter your message"></textarea> <br />
                                </div>
                                <div className="mt-5">
                                    <button className="light-slide-btn px-5 py-2 fs-15">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
          
                <Footer footerTitle="Donate4Good" footerSubTitle1="Discover" footerSubTitle2="Learn" footerSubTitle3="Contact" footerDesc="Seamless Giving, Tangible Impact: Experience effortless and secure donations on our platform. Keep track of your contributions, read inspiring success stories, and stay connected with our cause. Explore volunteer opportunities and stay informed through our newsletter. Join our community and be part of the change you want to see in the world." />
          
        </>


    );
}