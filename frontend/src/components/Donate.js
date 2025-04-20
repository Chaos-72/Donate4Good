

import React, { useEffect, useRef, useState } from 'react';
import Footer from "./Footer";
import xmlParser from 'xml-js';
import { Link, useParams } from 'react-router-dom';
import CountNumberAOS from './CountNumberAOS';
import FooterSmall from './FooterSmall';
// import { type } from '@testing-library/user-event/dist/type';


export default function Donate(props, { projects }) {

    const donateMonthly = useRef(null);
    const donateOnce = useRef(null);
    const [displayDonateOnce, setDisplayDonateOnce] = useState(true);
    const [displayDonateMonthly, setDisplayDonateMonthly] = useState(true);

    const [parsedData, setParsedData] = useState(null);

    // parameter to get data on the basis of id
    console.log(useParams());
    const { id } = useParams();

    const DisplayDonateMonthly = () => {
        console.log("inside donte monthly");
        setDisplayDonateOnce(false);    // this ensure that donteOnce section should not display when click om monthly seection
        setDisplayDonateMonthly(!displayDonateMonthly);   // if true make it false i.e. shown then hide and vice versa
    }

    const DisplayDonateOnce = () => {
        console.log("inside donte once");
        setDisplayDonateOnce(!displayDonateOnce);   // if true make it false i.e. shown then hide and vice versa
        setDisplayDonateMonthly(true);      // As initial conditon is true-> none and false-> show therefore we write true. This ensure that donteOnce section should not display when click om monthly seection
    }

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
                console.log("new data",newData)
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
    if (parsedData) {

        // it checks whether the parsedData is array or not
        const projectsArray = Array.isArray(parsedData)
            ? parsedData
            : [parsedData];

            console.log("projectArray typefo  : ", Array.isArray( projectsArray))

        return (
            <>
                {projectsArray && projectsArray.map((project, index) => (
                    <div key={index} className='container-fluid  bg-cream mt-5 ' style={{ fontFamily: "font-family: 'Open Sans',Helvetica,Arial,sans-serif" }}>
                        <div className='container '>
                            <div className='d-flex justify-content-center'>
                                <ul className="d-flex row  justify-content-center w-90 mt-3">
                                    <li className=" list-none font-weight-bold font-italic col-12 col-lg-4 col-md-6 col-sm-6">
                                        <a href="/old" id="a1" className=" pt-1 pb-1 px-4 border-grey" >{project.themeName._text}</a>
                                    </li>
                                    <li className="list-none font-weight-bold font-italic col-12 col-lg-4 col-md-6 col-sm-6">
                                        <a href="/new" id="a2" className="pt-1 pb-1 px-4 border-grey">{project.region._text}</a>
                                    </li>
                                    <li className="list-none font-weight-bold font-italic col-12 col-lg-2 col-md-6 col-sm-6">
                                        <a href="/mid" id="a3" className="pt-1 pb-1 px-4 border-grey">{project.country._text}</a>
                                    </li>

                                    <li className="list-none col-12 col-lg-2 col-md-6 col-sm-6">
                                        <span className='pt-2 pb-2 px-4 text-secondary font-weight-nomal font-italic'>{project.id._text}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className='text-center mb-4'>
                                <h1 className='font-Aleo-donation_heading text-grey-head'>{project.title._text}</h1>
                                {/* <p className=''> by <a href='/'><span className='font-weight-bold'>Author</span></a></p> */}
                            </div>


                        </div>
                        <div className='row justify-content-center fs-15  d-flex ' style={{ height: '100%' }}>
                            <div className='col-lg-6 col-md-12 mr-md-3 mb-5 mr-3 mr-5'>
                                <div>
                                    {/* <img src={parsedData.projects.project[index].image.imagelink[5].url._text} width='100%' height='50%' className='mt-2' alt='image-desc' /> */}
                                    <img src={project.image.imagelink[5].url._text} width='100%' height='50%' className='mt-2' alt='image-desc' />
                                </div>

                                {/* <div className='d-flex justify-content-around mt-4'>
                                <p className="  font-weight-bold py-2 hover-btn border border-dark w-25 text-center">
                                    <span href="/old" id="a1" className="" >STORY</span>
                                </p>
                                <p className=" font-weight-bold py-2 hover-btn border border-dark w-25 text-center">
                                    <span href="/new" id="a2" className=" ">PROJECTS</span>
                                </p>
                                <p className="font-weight-bold py-2 hover-btn border border-dark w-25 text-center">
                                    <span href="/mid" id="a3" className=" ">REPORTS</span>
                                </p>
                                <p className="py-2 hover-btn border border-dark w-25 text-center">
                                    <span className='  font-weight-bold '>FAQ</span>
                                </p>
                            </div> */}

                                {/* number counter */}
                                <div className='  mt-4 bg-white p-4' >
                                    <h4 className='font-Aleo-donation_heading text font-weight-bold fw-600'>Summary</h4>
                                    <div className=' ' >
                                        <p>{project.summary._text}</p>
                                    </div>
                                    <div className='d-flex justify-content-around  '>
                                        <div className=' text-center  '>
                                            <p className='text-center d-flex  align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                $<CountNumberAOS number="700" />K+
                                            </p><span className='  text-grey-head'>total goal</span>
                                        </div>

                                        <div className=' text-center  '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                $<CountNumberAOS number="300" />K+
                                            </p><span className='  text-grey-head'>remaining</span>
                                        </div>
                                        <div className=' text-center  '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="2245" />K+
                                            </p><span className='  text-grey-head'>Donors</span>
                                        </div>
                                        <div className=' text-center  '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="1500" />
                                            </p><span className='  text-grey-head'>Monthly donors</span>
                                        </div>
                                        <div className=' text-center  '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="45" />
                                            </p><span className='  text-grey-head'>Fundraisers</span>
                                        </div>
                                        <div className=' text-center  '>
                                            <p className='text-center d-flex align-items-center text text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="2" />
                                            </p><span className='  text-grey-head'>Month</span>
                                        </div>

                                    </div>
                                </div>

                                <div className='bg-white  mt-0 p-4'>
                                    <h4 className='font-Aleo-donation_heading text fw-600'>Challenge</h4>
                                    <div className=' ' >
                                        <p>{project.activities._text}</p>
                                    </div>
                                </div>
                                <div className='bg-white  mt-0 p-4'>
                                    <h4 className='font-Aleo-donation_heading text fw-600'>Solution</h4>
                                    <div className=' ' >
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est veritatis ullam laboriosam nulla explicabo, accusamus nostrum eaque consectetur quo ipsa vitae aspernatur cupiditate, repudiandae !z</p>
                                    </div>
                                </div>
                                <div className='bg-white  mt-0 p-4'>
                                    <h4 className='font-Aleo-donation_heading text fw-600'>How Your Donation Will Be Used</h4>
                                    <div className=' ' >
                                        <p>{project.need._text}</p>
                                        {/* <ul typeof='disc'>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                        <li>Provide food, clean water, and medicine to survivors</li>
                                    </ul> */}
                                    </div>
                                </div>
                                <div className='bg-white mt-4 p-4'>
                                    <h4 className='font-Aleo-donation_heading text fw-600'>Impact report and Transperency</h4>
                                    <div className=' ' >
                                        <p>{project.longTermImpact._text}</p>
                                    </div>
                                </div>


                            </div>
                            <div className='col-lg-4 col-md-12 ml-md-3 ml-3   '>

                                <div className='card-body border border-dark bg-white  m-3 '>
                                    <div className='d-flex justify-content-between'>
                                        <h2 className='text'>${project.funding._text}</h2> <span className='mt-2'>raised of ${project.goal._text}</span>
                                    </div>
                                    <div className="progress  " style={{ width: '75%', height: '0.4rem', marginBottom: '10px' }} >
                                        <div className="progress-bar" role="progressbar" style={{ width: '75%', height: '0.5rem', marginBottom: '10px' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <span>{project.numberOfDonations._text} donations</span>
                                        {/* <span>${project.funding._text} - {project.goal._text}</span> */}
                                    </div>
                                </div>
                                <div className='text-center my-4'>
                                    <Link to={`/payment/${project.id._text}`}>
                                        <button className="light-slide-btn w-75 py-2 rounded"><b>Donate Now</b></button>
                                    </Link>
                                </div>
                                <div className='border border-dark bg-white mx-3'>
                                    {/* <div className='d-flex justify-content-between'>
                                    <h6 className='m-3 ml-5 w-50 p-2 border border-dark' onClick={DisplayDonateOnce} >Donate Once</h6>
                                    <h6 className='m-3 ml-5 w-50 p-2  ' onClick={DisplayDonateMonthly} >Donate Monthly</h6>
                                </div> */}

                                    <div ref={donateOnce} id='donateOnce' className='donate-once ' style={{ display: displayDonateOnce ? 'block' : 'none' }}>
                                        <Link to={`/donate/payment/${project.id._text}`}>
                                            <div className='bg-orange d-flex align-item-center justify-content-between border border-dark'>
                                                <div className='d-flex  align-items-center justify-content-center'>
                                                {/* <span className='fs-20 fw-600 p-3 text-dark'>{project.donationOptions.donationOption[0].amount._text}</span> */}
                                            </div>
                                            <div className='d-flex  align-items-center justify-content-center'>
                                                {/* <span className='p-1 fs-15 text-dark'>{project.donationOptions.donationOption[0].description._text}</span> */}
                                            </div>
                                                <div className='d-flex border border-left text-dark align-items-center justify-content-center' style={{ backgroundColor: '#f8c087' }}>
                                                    <span className='p-4 '><span className='fas fa-angle-right'></span></span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    {/*  console.log("Data is", parsedData.projects.project[0].donationOptions.donationOption[0]);  */}

                                    <div ref={donateMonthly} id='donateMonthly' className='donate-monthly' style={{ display: displayDonateMonthly ? 'none' : 'block' }} >
                                        <a href='/'>
                                            <div className='card-body d-flex align-item-center'>
                                                <div className='   text-center'>
                                                    <span className='fs-20 fw-600 pl-3 pr-3'>$50</span> <br />
                                                    <span className='fs-sm-10'>Monthly</span>
                                                </div>
                                                <span className='p-2  '>emergency crisis and emnergenc relief for the needy.</span>
                                                <span className='p-3  '><span className='fas fa-angle-right'></span></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))};
            </>
        );
    }
    else {
        return <p className='fs-40 mt-5'>Loading...</p>
    }
}
