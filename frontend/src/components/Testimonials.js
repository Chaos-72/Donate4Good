import React from "react";
import "./components.css";
import TestoSub1 from "./subcomponents.js/TestoSub1";
import { useState } from "react";
import SachinImg from "./images/Sachin-img.jpg"
import RaviImg from "./images/Ravi-img.jpg"

export default function Testimonials(props) {

    const [activateSection, setActivateSection] = useState(null);

    // const scrollIntoTestomonials = (id) => {
    //     const section = document.getElementById(id)
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    const handleScrollIntoTestomonials = (id)=> {
        showLine(id);
        setActivateSection(id);
        // scrollIntoTestomonials(id);
    }

    const showLine = (id) => {
        // Use to select all the elements of testobar class
        const links = document.querySelectorAll('.testobar button');
        // Use to remove class from the link element
        links.forEach(link => link.classList.remove('border'));
        const clickedLink = document.getElementById(id);
        if (clickedLink) {
            clickedLink.classList.add('border');
        }
    }

    // ************** NEW Logic *******

    // states to handle the active section
    // const [isActiveSectionOne, setIsActivateSectionOne] = useState(true);
    // const [isActiveSectionTwo, setIsActivateSectionTwo] = useState(false);
    // const [isActiveSectionThree, setIsActivateSectionThree] = useState(false);

    // const handleActiveSection = (link) => {
    //     if(link === 'link2') {
    //         setIsActivateSectionTwo(true)
    //         setIsActivateSectionThree(false)
    //         setIsActivateSectionOne(false)
    //     }
    //     else if(link === 'link3') {
    //         setIsActivateSectionThree(true)
    //         setIsActivateSectionTwo(false)
    //         setIsActivateSectionOne(false)
    //     }
    // }
    

    return (

        <>

            <div className="container my-5">
                <div className="text-center">
                    <h4 className="card-title mt-3 my-4  head-title text-center">{props.testoTitle}</h4>
                    <p className="card-text">{props.workDesc}</p>
                    <hr />
                    <div className="d-flex justify-content-around mt-2">

                        <ul className="d-flex justify-content-around testobar">
                            <li className="list-none">
                                <button id="link1" className="text-dark btn-remove-design bg-white" onClick={() => handleScrollIntoTestomonials("link1")}><strong>Celebrity</strong></button>
                            </li>
                            <li className="list-none">
                                <button id="link2" className="text-dark btn-remove-design bg-white" onClick={() => handleScrollIntoTestomonials("link2")}><strong>Donor</strong></button>
                            </li>
                            <li className="list-none">
                                <button id="link3" className="text-dark btn-remove-design bg-white" onClick={() => handleScrollIntoTestomonials("link3")}><strong>Company</strong></button>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <div to="/" style={{display: activateSection==='link1'? 'block': 'none'}} > 
                            <TestoSub1 key="1" col="4" workTitle1="Sachin Bodke" workTitle2="Sharukh Khan" workTitle3="Amir Khan" class2="testoDecoration2 " class="testo-img" imgUrl1={SachinImg} imgUrl2="https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg" imgUrl3="https://images.inuth.com/2017/05/aamirkhanhotfacebookdp6.jpg"  />
                        </div>
                        <div id="link2" style={{display: activateSection==='link2'? 'block': 'none'}}>
                            <TestoSub1 key="2" col="4" workTitle1="Ravi Bhagat" workTitle2="Vidya Balan" workTitle3="Priyanka Chopra" imgUrl1={RaviImg} class="testo-img" imgUrl2="https://w0.peakpx.com/wallpaper/35/468/HD-wallpaper-vidya-balan-indian-film-actress-bollywood-smile-portrait.jpg" imgUrl3="https://i.pinimg.com/originals/5f/77/fa/5f77fa73453f44c0edccb71affa6a424.jpg" class2="testoDecoration2" />
                        </div>
                        <div id="link3" style={{display: activateSection==='link3'? 'block': 'none'}}>
                            <TestoSub1 key="3" col="4" workTitle1="Salman Khan" workTitle2="Sayli Chadhary" workTitle3="Varun Singh" class="testo-img" imgUrl1="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg" imgUrl2="https://static.abplive.com/wp-content/uploads/sites/2/2019/12/24135459/pjimage-20.jpg?impolicy=abp_cdn&imwidth=650" imgUrl3="https://images.news18.com/ibnlive/uploads/2021/07/1627356986_rahul-bose.jpg"  class2="testoDecoration2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}