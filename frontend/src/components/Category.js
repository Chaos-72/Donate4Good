import React from "react";
import "./components.css";

export default function Category() {
    return (
        <>

            <div className="container sect-mr">
                <h4 className="card-title mt-3 my-4  head-title text-center">Category</h4>
                <p className="card-text text-center">Break the limits of Donation with our different categories. Donate whateven you want.</p>
                <hr/>
                <div className="row d-flex justify-content-center my-2 ">
                    <div className="col-2 text-center my-1 bg-info-blue">
                        <div className="cat-card bg-blue-info" style={{borderRadius: '30px 30px 0px 0px '}}>
                            <img className="cat-img" src="https://media.istockphoto.com/id/1267161539/vector/meal-breaks-vector-line-icon-simple-thin-line-icon-premium-quality-design-element.jpg?s=612x612&w=0&k=20&c=9RNCS0uQvtbUGXqnmK1slk2y4rOOkJlE8bJ2W2qW9tY=" alt="Food" />
                            <h6 className="text-center">Food</h6>
                        </div>
                    </div>

                    <div className="col-2 text-center my-1">
                        <div className="cat-card ">
                            <img src="http://www.clipartbest.com/cliparts/Kin/LRj/KinLRjjRT.png"
                                className="cat-img" />
                            <h6 className="text-center">Medicines</h6>
                        </div>
                    </div>

                    <div className="col-2 text-center my-1">
                        <div className="cat-card ">
                            <img className="cat-img" src="https://tse2.mm.bing.net/th?id=OIP.V2-7owmjD3f1Opjl1Cjr2gHaHa&pid=Api&P=0&h=180" alt="cloth" />
                            <h6 className="text-center">Cloth</h6>
                        </div>
                    </div>

                    <div className="col-2 text-center my-1">
                        <div className="cat-card ">
                            <img className="cat-img" src="https://static.thenounproject.com/png/811139-200.png" alt="organ" />
                            <h6 className="text-center">Organ</h6>
                        </div>
                    </div>

                    <div className="col-2 text-center my-1">
                        <div className="cat-card ">
                            <img className="cat-img" src="https://tse3.mm.bing.net/th?id=OIP.IRQZ9YbNHmU43tyd0ktpEAHaHL&pid=Api&P=0&h=180" alt="education" />
                            <h6 className="text-center">Education</h6>
                        </div>
                    </div>

                    <div className="col-2 text-center my-1">
                        <div className="cat-card ">
                            <img className="cat-img" src="https://clipground.com/images/blood-logo-png-2.jpg" alt="blood" />
                            <h6 className="text-center">Blood</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}