import React from "react";

export default function BlogCard(props) {
    return (
        <>
            <div className="w-100 h-100 bg-blog">
                <div className="row " style={{ height: '50vh', width: '100%' }}>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12  overflow-hidden">
                        <img src={props.blogImg} width={'100%'} height={'100%'} />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-5 pt-3">
                        <span className="text-beige fw-600 fs-25 ">{props.blogTitle}</span>
                        <p className="fw-00 text-light ">{props.blogDesc}</p>
                        <div className="mt-3">
                            <button className=" mr-4 btn-radius btn-tranperent-white fs-sm-10 fw-600">DONATE NOW</button>
                            <button className=" mr-4 btn-radius btn-tranperent-white fs-sm-10 fw-600">READ <i class="fa-solid fa-circle-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}