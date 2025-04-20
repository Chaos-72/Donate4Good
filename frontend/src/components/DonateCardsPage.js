import React, { useEffect, useState } from "react";
import "./components.css";
import xmlParser from 'xml-js';
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function DonateCardsPage() {

    const [parsedData, setParsedData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch('https://api.globalgiving.org/api/public/projectservice/themes/edu/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0', {
            method: 'GET',
            headers: {
                'Accept': 'application/xml',
                'Content-type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw new Error("Data found");
            }
            else {
                return response.text();
            }
        }).then(data => {
            // Handle response data
            const parsedData = xmlParser.xml2js(data, { compact: true });
            console.log(parsedData);
            setParsedData(parsedData);
        }).catch(error => {
            console.error("There was problem with request!", error);
        })

    }

    if (parsedData && parsedData.projects && parsedData.projects.project) {
        const projectsArray = parsedData.projects.project;

        return (
            <>
                <div className="container mt-2 bg-blog volunteer-card-bg-blue " style={{height: '4.1rem'}}></div>      
                <div className="container  ">
                    <div className="row mt-5  justify-content-center">
                        {projectsArray && projectsArray.map((project, index) => (
                            <div key={index} className="card mx-3 my-4 onHover shadow-sm card-shape" style={{ width: '22vw' }}>
                                <img className="card-img-top w-100" style={{ height: '35vh', borderRadius: '0.25rem 3.8rem 0.25rem 0.25rem' }} src={project.image.imagelink[5].url._text} alt="Card  cap" />
                                <div className="card-body ">
                                    <h5 className="card-title">{project.title._text}</h5>
                                    <p className="card-text">{project.need._text < 150 ? project.need._text : project.need._text.slice(0, 150)}...</p>
                                    <div className="">
                                        <Link to={`/payment/:${project.id._text}`} className="">
                                            <button className="light-slide-btn btn-md-text-dark btn-radius px-3 py-2 fw-600 upper-case fs-sm-10">Donate Now</button>
                                        </Link>
                                        <Link to={`/donate/:${project.id._text}`} >
                                            <button className=" btn-radius btn-tranperent-white text-dark ml-4 fs-sm-10 fw-600">READ <i class="fa-solid fa-circle-chevron-right"></i></button>
                                        </Link>

                                    </div>

                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                <Footer footerTitle="Donate4Good" footerSubTitle1="Discover" footerSubTitle2="Learn" footerSubTitle3="Contact" footerDesc="Seamless Giving, Tangible Impact: Experience effortless and secure donations on our platform. Keep track of your contributions, read inspiring success stories, and stay connected with our cause. Explore volunteer opportunities and stay informed through our newsletter. Join our community and be part of the change you want to see in the world." />

                {/* <article className="donateCard">
                            <img
                                className="donateCard__background"
                                src="https://i.imgur.com/QYWAcXk.jpeg"
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div className="donateCard__content | flow">
                                <div className="donateCard__content--container | flow">
                                    <h2 className="donateCard__title">Colombia</h2>
                                    <p className="donateCard__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                        labore laudantium deserunt fugiat numquam.
                                    </p>
                                </div>
                                <button className="donateCard__button">Read more</button>
                            </div>
                        </article> */}

            </>
        );
    }
    else {
        return <p className="fs-40 mt-5">Loading...</p>
    }
}