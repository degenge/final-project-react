import React, {useEffect} from 'react';
import {useState} from "react";
import {VectorMap} from "react-jvectormap";
import MapModul from './MapModul';
import {useAsync} from 'react-async';

const API = 'http://final-project-api.localhost/index.php/';
// const API = 'http://bc_final-project-api/index.php/';
const COLOR_VISITED = 'visit/api/'

const loadVisits = async () =>
    await fetch(API + COLOR_VISITED)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

export default function Map() {

    // const mapDataTemp = {
    //     CN: 0,
    //     RU: 0,
    // };
    // console.log(mapData);

    const [modalShow, setModalShow] = useState(false);

    const { data, error, isLoading } = useAsync({ promiseFn: loadVisits })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

    return (
        <>
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}

            <MapModul
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div className="map" >
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
                                values: data, //this is your data
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
