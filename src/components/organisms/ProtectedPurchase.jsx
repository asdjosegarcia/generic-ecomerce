import React from 'react'
import ShieldProtectSVG from '@/SVG/ShieldProtectSVG'
import UndoArrowSVG from '@/SVG/UndoArrowSVG'
import PremiunSVG from '@/SVG/PremiunSVG'
import './ProtectedPurchase.css'

const ProtectedPurchase = () => {
    return (
        <div className='ProtectedPurchase'>
            <p><ShieldProtectSVG width={"24px"} fill="green"/>Purchase protected by Open Trade</p>
            <p><UndoArrowSVG width={"24px"} fill={"black"}/>Free return</p>
            <p><PremiunSVG width={"24px"} fill={"blue"}/>3 months warranty</p>
        </div>
    )
}

export default ProtectedPurchase
