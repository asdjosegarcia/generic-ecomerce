import React from 'react'
import "./ShipmentProgressBar.css"
import HouseSVG from '@/SVG/HouseSVG'
import BagSVG from '@/SVG/BagSVG'
import ShipingTruckSVG from '@/SVG/ShipingTruckSVG'

let timeLoad=true
let shipingProgress;
let shipingTruckStyle;
const ShipmentProgressBar = (props) => { 
        const shipingProgress= Math.floor(Math.random() * 70) + 5 //numero aleatorio del 10 al 70 sin decimales
        const shipingTruckStyle={left:`${props.progress}%`}

    return (
        <div className="ShipmentProgressBar shipment-bar__container ">

            <progress className="shipment-bar" value={props.progress} max={100}></progress>
            <ShipingTruckSVG style={shipingTruckStyle} ></ShipingTruckSVG>
            <BagSVG ></BagSVG>
            <HouseSVG ></HouseSVG>

        </div>
    )
}

export default ShipmentProgressBar