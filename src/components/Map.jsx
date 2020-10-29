import React from 'react';
import {VectorMap} from "react-jvectormap";




export default function Map() {
    
    const API = 'http://final-project-api.localhost/index.php/'; 
    const COUNTRY_GET_LIST = 'country/api';
    const COLOR_VISITED = '';

    fetch(API + COUNTRY_GET_LIST)
        .then(response => response.json())
        // .then(data => console.log(data));

    const mapData = {
        // CN: 0,
        // IN: 0,
        // SA: 0,
        // EG: 50000,
        // SE: 30000,
        // FI: 20000,
        // FR: 10000,
        // US: 0
    };

    return (
        <>
            <div  class="map">
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="#f8f5ee" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "680px",
                    }}
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
                                scale: ["#ef7670", "#2938bc"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div >
        </>
    );
}
