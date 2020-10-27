import logo from './logo.svg';
import './App.css';
import {VectorMap} from "react-jvectormap"

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

function App() {

    const API = 'http://bc_final-project-api/index.php/';
    const COUNTRY_GET_LIST = 'country/api';
    const COLOR_VISITED = '';

    fetch(API + COUNTRY_GET_LIST)
        .then(response => response.json())
        .then(data => console.log(data));

    const mapData = {
        CN: 100000,
        IN: 0,
        SA: 0,
        EG: 50000,
        SE: 30000,
        FI: 20000,
        FR: 10000,
        US: 0
    };

    const handleClick = (e, countryCode) => {
        console.log(countryCode);
        alert(countryCode);

    };

    const Map = () => {
        return (
            <div >
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "520px"
                    }}
                    onRegionClick={handleClick} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#e4e4e4",
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
                            fill: "#2938bc" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                        regions: [
                            {
                                values: mapData, //this is your data
                                scale: ["#146804", "#ff0000"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div >
        );
    };

    const [modalShow, setModalShow] = React.useState(false);

    return (

        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <div >
                <VectorMap
                    map={"world_mill"}
                    backgroundColor="transparent" //change it to ocean blue: #0077be
                    zoomOnScroll={false}
                    containerStyle={{
                        width: "100%",
                        height: "520px"
                    }}
                    onRegionClick={handleClick} //gets the country code
                    containerClassName="map"
                    regionStyle={{
                        initial: {
                            fill: "#e4e4e4",
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
                            fill: "#2938bc" //color for the clicked country
                        },
                        selectedHover: {}
                    }}
                    regionsSelectable={true}
                    series={{
                        regions: [
                            {
                                values: mapData, //this is your data
                                scale: ["#146804", "#2938bc"], //your color game's here
                                normalizeFunction: "polynomial"
                            }
                        ]
                    }}
                />
            </div >

        </>
    );
}

export default App;
