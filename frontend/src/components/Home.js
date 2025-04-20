import React, { useState, useEffect } from "react";
import '../App.css';
import Testimonials from "./Testimonials";
import Slider from "../components/slider";
import FundCard from "../components/FundCard";
import DonateMonthly from "../components/DonateMonthly";
import Category from "../components/Category";
import WorkingCard from "../components/WorkingCards";
import Footer from "../components/Footer";
import xmlParser from 'xml-js';
import CountNumberAOS from './CountNumberAOS';
import VolunteerCard from "./VolunteerCard";
import BlogCard from "./BlogCard";


export default function Home() {

    // function for fetching data from the API
    const [parsedData, setParsedData] = useState(null);

    // used to show loading when containt is loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // set loading to true 
        setLoading(true)

        // then wait for 5 seconds 
        setTimeout(() => {
            // and then again set loading to false 
            setLoading(false)
        }, 5000)
    }, [])

    const getData = () => {
        fetch('https://api.globalgiving.org/api/public/projectservice/campaign/187/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0', {
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
                console.log(parsedXml);
                setParsedData(parsedXml); // Set parsed data in state
                setLoading(false);
            })
            .catch(error => {
                // Handle errors here
                console.error('There was a problem with the request:', error);
            });

    }

    useEffect(() => {
        getData();
    }, [])

    if (parsedData && parsedData.projects && parsedData.projects.project) {
        const projectsArray = parsedData.projects.project;


        return (

            <>
                <div className="" >
                    <Slider btnName="Donate" projects={projectsArray} />
                    <Category />
                    <div className="container overflow-auto d-flex my-2 justify-content-center  bg-blue-info pt-4 pb-4 rounded">
                        <FundCard projects={projectsArray} />
                    </div>

                    <div className="sect-mr container pb-4 justify-content-center">
                        <h4 className="card-title mt-3 my-4  head-title text-center">How It Works</h4>
                        <p className=" text-center mb-4">Lets understand How our team Works!</p>

                        <div className="container row  justify-content-around">
                            <WorkingCard workTitle="Choose the Category" col="3" btnName="READ MORE" workDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis." imgUrl="https://cdn-icons-png.flaticon.com/512/5485/5485853.png" />
                            <WorkingCard workTitle="Donate the goods" col="3" btnName="READ MORE" workDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis." imgUrl="https://img.favpng.com/18/0/7/payment-gateway-technology-business-e-commerce-payment-system-png-favpng-Rk2fNCMsxqtVdtUGb45J6pf7M.jpg" />
                            <WorkingCard workTitle="We distribute it" col="3" btnName="READ MORE" workDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis." imgUrl="https://w7.pngwing.com/pngs/938/948/png-transparent-cartoon-delivery-boy-cartoon-delivery-boy-cartoon-delivery-man-courier-thumbnail.png" />
                            <WorkingCard workTitle="You feel them happy" col="3" btnName="READ MORE" workDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, omnis." imgUrl="https://png.pngtree.com/png-clipart/20220909/original/pngtree-a-boy-gives-food-parcel-to-poor-old-man-png-image_8517452.png" />
                        </div>
                    </div>

                    <div className="sect-mr container  rounded pb-4 justify-content-center">
                        <h4 className="card-title mt-3 my-4  head-title text-center">Donate monthly</h4>
                        <p className=" text-center">Sign once and invest in India future</p>
                        <div className="container  row justify-content-around">
                            <DonateMonthly donateTitle="Real change" donateDesc="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <DonateMonthly donateTitle="Regular updates" donateDesc="Some quick example text to build on the card title and make up the bulk of the card's content." />
                            <DonateMonthly donateTitle="Trusted giving" donateDesc="Some quick example text to build on the card title and make up the bulk of the card's content." />
                        </div>
                    </div>

                    {/* number counter */}

                    <div className=' mt-5 bg-white p-5 container-fluid bg-counter-blue' >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
                                    <p className="fw-600 fs-20 text-white" style={{ fontSize: '1.8rem' }}>We are on mission to help all your problems</p>
                                    <button className="bg-transprent btn-remove-design border mr-4 btn-radius btn-lg-round fs-sm-10 fw-600">DONATE NOW</button>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 ">
                                    <div className='d-flex row r'>
                                        <div className=' text-center col-lg-2 col-md-4 col-sm-6 col-12 '>
                                            <p className='text-center d-flex  align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                $<CountNumberAOS className="text-center fw-700" number="700" />K+
                                            </p><span className='  text-white fw-600'>Total goal</span>
                                        </div>

                                        <div className=' text-center  col-lg-2 col-md-4 col-sm-6 col-12 '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                $<CountNumberAOS number="300" />K+
                                            </p><span className='  text-white fw-600'>Remaining</span>
                                        </div>
                                        <div className=' text-center col-lg-2 col-md-4 col-sm-6 col-12  '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="2245" />K+
                                            </p><span className='  text-white fw-600'>Donors</span>
                                        </div>
                                        <div className=' text-center  col-lg-2 col-md-4 col-sm-6 col-12 '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="1500" />
                                            </p><span className='  text-white fw-600'>Monthly donors</span>
                                        </div>
                                        <div className=' text-center  col-lg-2 col-md-4 col-sm-6 col-12 '>
                                            <p className='text-center d-flex align-items-center text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="45" />
                                            </p><span className='  text-white fw-600'>Fundraisers</span>
                                        </div>
                                        <div className=' text-center  col-lg-2 col-md-4 col-sm-6 col-12 '>
                                            <p className='text-center d-flex align-items-center text text text-warning font-weight-bold ' style={{ fontSize: '1.6rem' }}>
                                                <CountNumberAOS number="2" />
                                            </p><span className='  text-white fw-600'>Month</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="sect-mr">
                        <Testimonials testoTitle="Testomonials" workTitle1="1.1" workTitle2="1.2" workDesc="Know what other peoples think about us, our policies and so on." />
                    </div>

                    {/* Volunteers */}
                    <section className="container">
                        <div className="row text-center  mb-4">
                            <h4 className="card-title mt-3 my-4  head-title text-center w-100">Our Volunteers</h4>
                            <p className=" w-100"> Meet our Expert volunteer, who fully organize the campaign</p>
                        </div>
                        <div className="row">
                            <VolunteerCard volunteerImgUrl="https://c.pxhere.com/photos/32/cf/white_male_fashion_man_young_people_person_portrait-580923.jpg!d" volunteerName="Sachin Chauhan" volunteerBgColor="volunteer-card-bg-blue" />
                            <VolunteerCard volunteerImgUrl="https://i.pinimg.com/originals/de/97/55/de975595890f0ed79238dc4d61532777.jpg" volunteerName="Jenifer Lawrence" volunteerBgColor="volunteer-card-bg-pink" />
                            <VolunteerCard volunteerImgUrl="https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=180" volunteerName="Robert Chosky" volunteerBgColor="volunteer-card-bg-green" />
                            <VolunteerCard volunteerImgUrl="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/15345c41332353.57a1ce9141249.jpg" volunteerName="Merry Watson" volunteerBgColor="volunteer-card-bg-red" />

                        </div>
                    </section>

                    {/* impact stories or Blogs */}

                    <div className="container-fluid pt-4 pb-3 bg-creame" style={{marginTop: '6rem'}}>
                    <section className="container" style={{ height: '75vh' }}>
                        <div className="row text-center  mb-4">
                            <h4 className="card-title mt-3 my-4  head-title text-center w-100">Our Blogs</h4>
                            <p className=" w-100  fw-600"> Meet our Expert volunteer, who fully organize the campaign</p>
                        </div>
                        <div id="blogSlider" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#blogSlider" data-slide-to="0" className="active"></li>
                                <li data-target="#blogSlider" data-slide-to="1"></li>
                                <li data-target="#blogSlider" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active" style={{ height: '50vh' }}>
                                    <div className="carousel-overlay h-100" ></div>
                                    <BlogCard blogImg="https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=600" blogTitle="Journey of Inspiration" blogDesc="Robert serve as Volunteer in villages to transport Food." />
                                </div>
                                <div className="carousel-item" style={{ height: '50vh' }}>
                                    <div className="carousel-overlay h-100" ></div>
                                    <BlogCard blogImg="https://images.pexels.com/photos/6994855/pexels-photo-6994855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" blogTitle="Help by giving cloths" blogDesc="Lisa donate her friends and relatives cloths in charity." />
                                </div>
                                <div className="carousel-item" style={{ height: '50vh' }}>
                                    <div className="carousel-overlay h-100" ></div>
                                    <BlogCard blogImg="https://images.pexels.com/photos/6647112/pexels-photo-6647112.jpeg?auto=compress&cs=tinysrgb&w=600" blogTitle="Educate the childrens" blogDesc="Donate educational Goods to help the poors." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#blogSlider" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#blogSlider" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </section>
                    </div>

                    <div className="container text-center mt-5">
                        <div className="row ">
                            <h4 className="card-title mt-3 my-4  head-title text-center w-100">Our Partners</h4>
                            <p>More than 40 Companies help us to overcome the causes by different means. Digital campeigning, Gift card, Freebies, and many more donation are made by these companies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo architecto, cupiditate excepturi similique exercitationem impedit doloremque veritatis sed necessitatibus, vel fugiat, maiores laudantium.</p>
                        </div>
                        <div className="row mt-4 justify-content-center ">
                            <img className="comp-logo" src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" alt="amazon logo" />
                            <img className="comp-logo" src="https://upload.wikimedia.org/wikipedia/id/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" alt="starbuck" />
                            <img className="comp-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0uj9ig2_O31NKESxh8lUwmpaOQAr0ACfiRez4limaQwo0_HHtrriGjMtvNFmVS9ldqVk&usqp=CAU" alt="coco cola logo" />
                            <img className="comp-logo" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRRYIbbl8HGD_d0dsxzA8tRCggV9GXFQoIrgyyZn-qCpoDSNnAH" alt="gilead logo" />
                            <img className="comp-logo" src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049" alt="apple logo" />
                            <img className="comp-logo" src="https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg" alt="ibm logo" />
                            <img className="comp-logo" src="https://c.s-microsoft.com/en-us/CMSImages/ImgOne.jpg?version=D418E733-821C-244F-37F9-DC865BDEFEC0" alt="microsoft logo" />
                        </div>
                    </div>
                    <div className="sect-mr">
                        <Footer footerTitle="Donate4Good" footerSubTitle1="Discover" footerSubTitle2="Learn" footerSubTitle3="Contact" footerDesc="Seamless Giving, Tangible Impact: Experience effortless and secure donations on our platform. Keep track of your contributions, read inspiring success stories, and stay connected with our cause. Explore volunteer opportunities and stay informed through our newsletter. Join our community and be part of the change you want to see in the world." />
                    </div>
                </div>


            </>
        );
    }
    else {
        return <p className="fs-40 mt-5">Loading...</p>
    }
}