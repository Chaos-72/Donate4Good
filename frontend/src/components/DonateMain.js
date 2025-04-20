// // import { useState, useEffect } from "react";
// import Donate from "./Donate";
// import Payment from "./Payment";
// import { Routes, Route } from "react-router-dom";
// // import xmlParser from 'xml-js';
// // import { prettyDOM } from "@testing-library/react";


// export default function DonateMain() {

//     // const [parsedData, setParsedData] = useState(null);

//     // // useEffect to fetch the data from teh api
//     // const getData = () => {
//     //     fetch('https://api.globalgiving.org/api/public/projectservice/campaign/187/projects?api_key=b1e21e37-c3a4-499f-845b-fd59450d90e0', {
//     //         method: 'GET',
//     //         headers: {
//     //             'Accept': 'application/xml',
//     //             'Content-Type': 'application/json'
//     //         }
//     //     })
//     //         .then(response => {
//     //             if (!response.ok) {
//     //                 throw new Error('Network response was not ok');
//     //             }
//     //             return response.text();
//     //         })
//     //         .then(data => {
//     //             // Handle the response data here
//     //             const parsedXml = xmlParser.xml2js(data, { compact: true }); // Parse XML to JS object
//     //             console.log(parsedXml);
//     //             setParsedData(parsedXml); // Set parsed data in state
           
//     //         })
//     //         .catch(error => {
//     //             // Handle errors here
//     //             console.error('There was a problem with the request:', error);
//     //         });

//     // }

//     // useEffect(() => {
//     //     getData();
//     // }, [])


//     // if condition to check whether the data is fetched or not, if yes then show the content

    
//     // if (parsedData && parsedData.projects && parsedData.projects.project) {
//     //     const projectsArray = parsedData.projects.project;
        
//         return (
//             <>
//             {/* <Donate projects={projectsArray} /> */}
//                 <Routes>
//                     <Route path={`/:id`} element={<Donate />} />
//                     <Route path="/payment" element={<Payment />} />
//                 </Routes>
//                 {/* {projectsArray.map((project, index) => (
                    
//                 ))} */}
//             </>
//         );
//     }

// // }