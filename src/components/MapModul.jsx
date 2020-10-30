import React from 'react';
import {Button, Modal} from 'react-bootstrap';
import {useAsync} from "react-async";

// const API = 'http://final-project-api.localhost/index.php/';
const API = 'http://bc_final-project-api/index.php/';
const COLOR_VISITED = 'visit/api/fr'

const loadVisit = async () =>
    await fetch(API + COLOR_VISITED)
        .then(res => (res.ok ? res : Promise.reject(res)))
        .then(res => res.json())

export default function MapModul(props) {

    const {data, error, isLoading} = useAsync({promiseFn: loadVisit})
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)

        return (

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {data.map(visit => (
                    <>
                        <Modal.Header closeButton >
                            <Modal.Title id="contained-modal-title-vcenter" >{visit.name}</Modal.Title >
                        </Modal.Header >
                        <Modal.Body >
                            <h4 >{visit.title}</h4 >
                            <p >{visit.description}</p >
                            <p>From <strong>{visit.date_visited_from}</strong> till {visit.date_visited_till}</p>
                        </Modal.Body >
                        <Modal.Footer >
                            <Button onClick={props.onHide} >Read Blog</Button >
                        </Modal.Footer >
                    </>
                ))}
            </Modal >
        )
}
