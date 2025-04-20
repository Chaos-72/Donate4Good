import React from "react";
import './components.css';
import { Link } from "react-router-dom";
export default function FundCard({ projects }) {




    return (
        <>
            {projects.map((project, index) => (
                <div className="row  ">
                    <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                        <div className="card mx-3  onHover card-shape" style={{ width: '22vw' }}>
                            <img className="card-img-top w-100" style={{ height: '35vh', borderRadius: '0.25rem 3.8rem 0.25rem 0.25rem' }} src={project.image.imagelink[5].url._text} alt="Card  cap" />
                            <div className="card-body ">
                                <h5 className="card-title">{project.title._text}</h5>
                                <p className="card-text">{project.need._text < 150 ? project.need._text : project.need._text.slice(0, 150)}...</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-1"><span className="fs-20 fw-600">${project.funding._text}</span>  <span>raised</span></p>
                                    <span>${project.goal._text}</span>
                                </div>
                                <div className="progress" style={{ width: '75%', height: '0.4rem', marginBottom: '10px' }} >
                                    <div className="progress-bar" role="progressbar" style={{ width: '75%', height: '0.5rem', marginBottom: '10px' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="text-center">
                                    <Link to={`/payment`} className="">
                                        <button className="light-slide-btn btn-md-text-dark fw-600 upper-case">Donate Now</button>
                                    </Link>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* {console.log("project id: ", project.id._text)} */}
                </div>
            ))}
        </>

    );
}