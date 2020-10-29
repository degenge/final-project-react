import React from 'react';
import {useState} from "react";

import {VectorMap} from "react-jvectormap";
import {Button ,Modal} from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton >
                <Modal.Title id="contained-modal-title-vcenter" >
                    Modal heading
                </Modal.Title >
            </Modal.Header >
            <Modal.Body >
                <h4 >Centered Modal</h4 >
                <p >
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p >
            </Modal.Body >
            <Modal.Footer >
                <Button onClick={props.onHide} >Close</Button >
            </Modal.Footer >
        </Modal >
    );
}

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
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
         {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button> */}

            <MyVerticallyCenteredModal
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
