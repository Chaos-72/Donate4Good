import React, { useEffect, useState } from "react";
import "./components.css"
import xmlParser from 'xml-js';
import Payment from "./Payment";



export default function BlogPage() {

    const [parsedData, setParsedData] = useState();

    const getData = () => {
        fetch(`https://api.globalgiving.org/api/public/projectservice/themes/edu/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0`, {
            method: 'GET',
            headers: {
                'Accept': 'application/xml',
                'Content-type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw Error("Network resonse was not ok.");
            }
            return response.text();
        }).then(data => {
            const parsedXml = xmlParser.xml2js(data, { compact: true });
            console.log("parsed data is ", parsedXml);
            // const newData = parsedXml.projects.project.find((item) => parseInt(item.id._text) === parseInt(id));
            // console.log("new data", newData)
            setParsedData(parsedXml);
        }).catch(error => {
            // Handle errors here
            console.error('There was a problem with the request:', error);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    // useEffect(() => {
    //     console.log("parsedData has been updated:", parsedData);
    // }, [parsedData]);

    console.log("parsedData:  ", parsedData)

    if (parsedData && parsedData.projects && parsedData.projects.project) {
        const projectsArray = parsedData.projects.project;


        return (
            <>
                <div className=" mt-2 bg-blog volunteer-card-bg-blue " style={{ height: '4.1rem' }}></div>
                {projectsArray && projectsArray.map((project, index) => (

                    <section className="container border border-primary mt-5">
                        <div className="row border border-danger">
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12 border border-success">
                                <div className="blog-body border border-danger">
                                    <div className="">
                                        <h2 className="border border-dark text-warning ">{project.title._text}</h2>
                                        <p>{project.modifiedDate._text}</p>
                                    </div>
                                    <div className="blog-img">
                                        <img src={project.image.imagelink[5].url._text} width={"100%"} height={"100%"} />
                                    </div>
                                    <div className="blog-desc border border-warning">
                                        <div className="border border-danger mt-3">
                                            <p className="fs-15 mb-0 fw-600">Activities: </p>
                                            <p className="ml-5 mt-0">{project.activities._text}</p>

                                            <p className="fs-15 mb-0 fw-600 mt-2">Long Term Impact: </p>
                                            <p className="ml-5">{project.longTermImpact._text}</p>

                                            <p className="fs-15 mb-0 fw-600 mt-2">Need: </p>
                                            <p className="ml-5">{project.need._text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                ))};

                {/* <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <Payment />
                </div> */}
            </>

        );
    }
    else {
        return <p className="fs-40 mt-5">Loading...</p>
    }
}