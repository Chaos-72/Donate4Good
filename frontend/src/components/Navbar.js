import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";


export default function Navbar(props) {

  // isSCroll is used to check scroll status of screen
  const [isScroll, setIsScroll] = useState(false);

  useEffect(()=>{
    const toggleNavbarColor = ()=> {
      const scrollTop = window.scrollY;

      setIsScroll(scrollTop > 0)
    };

    // Attach event listener when component mount
    window.addEventListener("scroll", toggleNavbarColor);

    return () => {
   
      window.removeEventListener("scroll", toggleNavbarColor);
    };

  },[])
  

  return (
    <>
      <nav className="navbar navbar-expand-lg text-warning navbar-default fixed-top mt-1 "  >
        <div className={`container ${isScroll? 'navbar-glassy': ''}`}>
          <Link className="navbar-brand " to="/"><h2 className='text-light fw-700 '>{props.title}</h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=''>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2 fw-600">
                  <Link className="nav-link text-white active" aria-current="page" to="/">{props.link1}</Link>
                </li>
                <li className="nav-item mx-2 fw-600">
                  <Link className="nav-link text-white" to="/donateCardsPage">{props.link2}</Link>
                </li>

                <li className="nav-item  mx-2 fw-600">
                  <Link className="nav-link text-white" to="/raise donation">{props.link3}</Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link" to="/donate monthly">{props.link4}</Link>
              </li> */}
                <li className="nav-item  mx-2 fw-600">
                  <Link className="nav-link text-white" to="/about">{props.link5}</Link>
                </li>
                <li className="nav-item  mx-2 fw-600">
                  <Link className="nav-link text-white" to="/register">{props.link6}</Link>
                </li>
                <li className="nav-item  mx-2 fw-600">
                  <Link className="nav-link text-white" to="/blog">{props.link7}</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
