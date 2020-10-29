import React from 'react'
import Map from '../components/Map.jsx'
import Header from '../components/Header.jsx'

export default function Explore() {
    return (
    <>
        <Header />
        <div className="mapContainer">
        <Map />
        </div>
    </>
    )
}
