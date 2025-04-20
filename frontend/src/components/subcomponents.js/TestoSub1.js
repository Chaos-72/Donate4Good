import React from "react";
import "../components.css";
import WorkingCard from "../WorkingCards";

export default function TestoSub1(props) {
    return (
        <>
            <div className="container row justify-content-center border border-dark p-5 bg-black">
                <WorkingCard workTitle={props.workTitle1} col={props.col} btnName="READ MORE" classDec2={props.class2} classDeco={props.class} imgUrl={props.imgUrl1} workDesc="Donatekart is a very good crowdfunding platform.." />
                <WorkingCard workTitle={props.workTitle2} col={props.col} btnName="READ MORE" classDec2={props.class2} classDeco={props.class} imgUrl={props.imgUrl2} workDesc="Donatekart is a very good crowdfunding platform.." />
                <WorkingCard workTitle={props.workTitle3} col={props.col} btnName="READ MORE" classDec2={props.class2} classDeco={props.class} imgUrl={props.imgUrl3} workDesc="Donatekart is a very good crowdfunding platform.." />
            </div> 
        </>
    );
}
