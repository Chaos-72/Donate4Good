import React from "react";
import "./components.css";
import { useState, useEffect } from "react";
import xmlParser from 'xml-js';
import { Link, useParams } from "react-router-dom";
import FooterSmall from "./FooterSmall";


export default function Payment() {
    const [parsedData, setParsedData] = useState(null);

    const {id} = useParams()

    // const getData = () => {
    //     fetch('https://api.globalgiving.org/api/public/projectservice/campaign/187/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0', {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/xml',
    //             'Content-Type': 'application/json'
    //             // 'range' : 'bytes=0-1000'
    //         }
    //     })
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.text();
    //         })
    //         .then(data => {
    //             // Handle the response data here
    //             const parsedXml = xmlParser.xml2js(data, { compact: true }); // Parse XML to JS object

    //             const newData = parsedXml.projects.project.find((item) => parseInt(item.id._text) === parseInt(id));

                
    //             console.log("newData is ",newData);
    //             setParsedData(newData); // Set parsed data in state
    //         })
    //         .catch(error => {
    //             // Handle errors here
    //             console.error('There was a problem with the request:', error);
    //         });

    // }

    // useEffect(() => {
    //     getData();
    // }, [id])

    // useEffect(() => {
    //     console.log("parsedData has been updated:", parsedData);
    // }, [parsedData]);

    
    const getData = () => {
        fetch(`https://api.globalgiving.org/api/public/projectservice/themes/edu/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0`, {
            method: 'GET',
            headers: {
                'Accept': 'application/xml',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Handle the response data here
                const parsedXml = xmlParser.xml2js(data, { compact: true }); // Parse XML to JS object
                
                const newData = parsedXml.projects.project.find((item) => parseInt(item.id._text) === parseInt(id));

                setParsedData(newData);
            })
            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the request:', error);
            });

    }

    useEffect(() => {
        getData();
    }, [id])

    useEffect(() => {
        console.log("parsedData has been updated:", parsedData);
    }, [parsedData]);

    console.log("parsedData:  ", parsedData)

    // if (parsedData && parsedData.projects && parsedData.projects.project) {
    //     const projectsArray = parsedData.projects.project;

    if(parsedData) {

        const projectsArray = Array.isArray(parsedData)
        ? parsedData
        : [parsedData];

        console.log("projectArray typefo  : ", Array.isArray( projectsArray))

        return (

            <>
                {projectsArray && projectsArray.map((project, index) => (

                    <div key={index} className="container-fluid bg-cream " style={{marginTop: '4rem'}}>
                        <div className="container border border-dark ">
                            <div className="row border border-warning">
                                <div className="col-lg-4 col-md-12 border border-primary bg-light">
                                    <img className="" src={project.image.imagelink[5].url._text} width={'100%'} alt="img-donate" />
                                    <div className="">
                                        <p className="img-overlay-info text-light w-90 ml-1 p-2 text-center">{project.title._text}</p>
                                        <div className="d-flex justify-content-between mt-3">
                                            <p className="fs-20">Donate: </p>
                                            <span className="fs-20 fw-600 border border-dark w-25">
                                                $<input className="w-75 input-remove-design" type="text" name="donte-amounr" id="donate-amount" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="p-4 bg-cream mt-3">However, it's essential to note that removing the focus outline could affect the accessibility of your site or application,</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12  border border-danger">
                                    <div className="">
                                        {/* <span className="fs-40">Donate to</span> */}
                                        <h2 className='font-Aleo-donation_heading '>{project.title._text}</h2>
                                        <p>and we'll send you updates from Authorrow about your impact!</p>
                                        <div>
                                            <form>
                                                <div>
                                                    <p className="mb-0 mt-1">Already have an account? <Link to="/login">Log in.</Link></p>
                                                    <input className="w-75 input-payment-box input-remove-design mb-1" type="text" name="username" id="username" placeholder="Name: " /> <br/>
                                                    <input className="w-75 input-payment-box input-remove-design" type="text" name="email" id="email" placeholder="Email" />
                                                    <div className="form-check my-3 ">
                                                        <input className="form-check-input" type="checkbox" value="" id="donateAnanymously" />
                                                        <label className="form-check-label text-italic" htmlFor="donateAnanymously">
                                                         <i>Donate anonymously</i> 
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <input className="w-75 input-payment-box input-remove-design " type="text" name="upiID" id="upiID" placeholder="Enter UPI Id: "/>
                                                    </div>
                                                    <div className="form-check my-3">
                                                        <input className="form-check-input" type="checkbox" value="" id="emailME" />
                                                        <label className="form-check-label text-italic" htmlFor="emailME">
                                                         <i>Email me periodic Reports of the Cause I support</i> 
                                                        </label>
                                                    </div>
                                                    <button className="light-slide-btn w-50 input-payment-box mb-3">Donate Now</button>
                                                    <p className=""><i>By making a donation to GlobalGiving, you agree to our Terms of Service, Privacy Policy, and Nonprofit Support Fee.</i></p>
                                                    <div>
                                                        {/* <img src="https://thumbs.dreamstime.com/b/100-secure-website-seal-18731629.jpg" width={'60px'} alt="secure-image-logo"/> */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                ))};
                <FooterSmall/>
            </>
        );
    }
    else {
        return <p className="fs-40">Loading...</p>
    }
}