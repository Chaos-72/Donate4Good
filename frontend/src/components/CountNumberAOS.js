import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function CountNumberAOS (props) {

    const [counterOn, setCounterOn] = useState(false); 

    return (
        <>
            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} >
                <h3 className="mb-0 fw-700">
                    {/* {counterOn && <CountUp start={0} end={2000} delay={200} duration={5} /> } + */}
                    {counterOn && <CountUp start={0} end={props.number} delay={1.2} duration={2} /> }
                </h3>
            </ScrollTrigger>

        </>
    );
}