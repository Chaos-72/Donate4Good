import React from "react";
import { useState } from "react";

export default function RaiseDonation() {

    const [ToggleShow, setToggleShow] = useState(true);
    const [cause, setCause] = useState('what cause')
    const [recepeint, setRecepeint] = useState('Recepeint')

    // It toggle the element display from
    const toggleShow = () => {
        setToggleShow(!ToggleShow);
    }
    return (
        <>
            <div className="container mt-2 bg-blog volunteer-card-bg-red " style={{height: '4.1rem'}}></div>      
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-5 col-md-5 col-sm mt-5  ">
                        <img src="https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/react/images/startfr3/web/webStep1.png" width={'90%'} alt="raise donation image" />
                        <p className="fs-20 fw-600">Many people rainsing donation online on Donate4Good <br /><span className="fs-20 fw-600"><b>You Can Too!</b></span></p>
                    </div>
                    <div className="col-12 col-lg-7 col-md-7 col-sm mt-5 testoDecoration ">
                        <div className="steps m-5 d-flex justify-content-between">
                            <div className="text-center   align-items-center justify-content-center">
                                <p className="bg-orange-dark rounded-circle d-flex ml-3 align-items-center text-light fw-600 fs-20 justify-content-center mb-0"><span className="">1</span></p>
                                <p className="fw-600">Your details</p>
                            </div>
                            <div className="text-center   align-items-center justify-content-center">
                                <p className="bg-orange-dark rounded-circle d-flex ml-3 align-items-center text-light fw-600 fs-20 justify-content-center mb-0"><span className="">2</span></p>
                                <p className="fw-600">Fund details</p>
                            </div>
                            <div className="text-center   align-items-center justify-content-center">
                                <p className="bg-orange-dark rounded-circle d-flex ml-3 align-items-center text-light fw-600 fs-20 justify-content-center mb-0"><span className="">3</span></p>
                                <p className="fw-600">Verificaion</p>
                            </div>
                        </div>
                        <form>

                            {
                                // Toggle the display of section-1

                                ToggleShow && 
                                <div div id="section-1" className="show ">
                                    <div className="bg-cream rounded w-90 d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <p className="fw-600 my-2 ml-3">I am rainsing funds for: </p>
                                        <div className="dropdown mr-3">
                                            <button className="btn btn-secondary dropdown-toggle bg-white fw-600 text-warning" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {cause}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a onClick={()=> setCause('Medical')} className="dropdown-item" href="#">Medical</a>
                                                <a onClick={()=> setCause('Orfanage')} className="dropdown-item" href="#">Orfanage</a>
                                                <a onClick={()=> setCause('Disaster')} className="dropdown-item" href="#">Disaster</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-cream rounded w-90 mt-4 d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <p className="fw-600 my-2 ml-3">I am rainsing funds for: </p>
                                        <div className="dropdown mr-3">
                                            <button className="btn btn-secondary dropdown-toggle bg-white text-warning fw-600" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {recepeint}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a onClick={()=> setRecepeint('NGOs')} className="dropdown-item" href="#">NGOs</a>
                                                <a onClick={()=> setRecepeint('Community')} className="dropdown-item" href="#">Community</a>
                                                <a onClick={()=> setRecepeint('Individual')} className="dropdown-item" href="#">Individuals</a>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="bg-cream rounded w-90  -primary mt-4 mb-5 pb-4 d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <form className=" mb-3 w-100 py-4 pl-3">
                                            {/* <fieldset> */}
                                            <legend className="fs-sm-10 fw-600">Enter You Mobile Number</legend>
                                            <input className=" w-90" type="text" />
                                            {/* </fieldset> */}
                                        </form>
                                    </div>
                                    <div className=" testoDecoration w-100 text-center pt-3">
                                        <button className="light-slide-btn w-50 input-payment-box mb-3">NEXT</button>
                                    </div>
                                </div>
                            }

                            {/* section-2 */}
                            {/* <div id="section-2" className="show ">
                                <div className=" border-dark">
                                    <div className="bg-cream  mt-2 rounded w-90  d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <input className="ml-3 input-remove-desing w-90" type="text" placeholder="Cause" />
                                    </div>
                                    <div className="bg-cream mt-2 rounded w-90  d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <input className="ml-3 input-remove-desing w-90" type="text" placeholder="Cause" />
                                    </div>
                                    <div className="bg-cream mt-2 rounded w-90  d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <input className="ml-3 input-remove-desing w-90" type="text" placeholder="Cause" />
                                    </div>
                                    <div className="bg-cream mt-2 rounded w-90  d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <input className="ml-3 input-remove-desing w-90" type="text" placeholder="Cause" />
                                    </div>
                                    <div className="bg-cream mt-2 rounded w-90  d-flex justify-content-between align-items-center" style={{ height: '4rem' }}>
                                        <input className="ml-3 input-remove-desing w-90" type="text" placeholder="Cause" />
                                    </div>
                                </div>
                            </div> */}

                        </form>
                    </div>
                </div >
            </div >
        </>
    );
}