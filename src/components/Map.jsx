import React from 'react';
import {useState} from "react";
import {VectorMap} from "react-jvectormap";
import MapModul from './MapModul';



export default function Map() {

    
   
    const API = 'http://final-project-api.localhost/index.php/'; 
    const COLOR_VISITED = 'visit/api/'

    let mapData = [];

        fetch(API + COLOR_VISITED)
        .then(response => response.json())
        .then(data => {


            // console.log(data);
            data.forEach(function (country) {
                // console.log(country.code);
                mapData.push(country.code.toUpperCase() +":0,");
            });
        })

    console.log(mapData);

    // const mapData = {
    //     CN:0,
    //     RU:0,
    // };

    const [modalShow, setModalShow] = useState(false);

    
    return (
        <>
         {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}

            <MapModul
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div  class="map">
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="#f8f5ee" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "680px",
                    }}
                    onRegionClick={() => setModalShow(true)} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#386980",
                            "fill-opacity": 0.9,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 0
                        },
                        hover: {
                            "fill-opacity": 0.8,
                            cursor: "pointer"
                        },
                        selected: {
                            fill: "#ef7670" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                        regions: [
                            {
                                values: mapData, //this is your data
                                scale: ["#ef7670"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div >
        </>
    );
}
