
import React from "react";
import "./Slider.css";
import "./components.css";
import { Link } from "react-router-dom";

export default function Slider({ projects }) {

    return (
        <>

            <div id="carouselExampleIndicators" className="carousel slide carousel-align h-75" data-ride="carousel">
                <ol className="carousel-indicators ">
                    {projects.map((index) => (
                        <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
                    ))}
                </ol>
                <div className="carousel-inner h-95 carousel-align-inner">
                    {projects.map((project, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>

                            <div className="carousel-overlay h-100" ></div>

                            <img className="d-block w-100 carousel-img" src={project.image.imagelink[5].url._text} alt={`Slide ${index}`} width={'95vh'} />
                            <div className="carousel-caption-modify text-left carousel-caption  d-none d-md-block mb-5">
                                <h5 className="line-spacing upper-case line-height fs-16 mb-3">{project.themeName._text}</h5>
                                <h2 className="text-white fw-700 fs-25 fw-600">{project.title._text}</h2>
                                <div className="mt-3 d-flex align-items-center">
                                    <Link to={`/payment/${project.id._text}`} className="">
                                        <button className="light-slide-btn btn-radius btn-lg-round mr-4 fs-sm-10 fw-600">DONATE NOW</button>
                                    </Link>
                                    <Link to={`/donate/${project.id._text}`} className="">                  
                                        <i class='fas fa-arrow-alt-circle-right fw-600 bg-warning mx-3'></i>
                                    </Link>
                                </div>

                                {/* <p className="text-white fw-600 ">{project.need._text}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrow-align ">
                    <a className="carousel-control-prev arrow-align " href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next arrow-align " href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </>
    );
}
