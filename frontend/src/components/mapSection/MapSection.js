import React from 'react'
import JoinEvent from '../joinEvent/JoinEvent';
import MapBox from './mapbox/MapBox'



export default function MapSection() {
    return (
        <div>
           <MapBox/>
           <JoinEvent />
        </div>
    )
}

