import React from 'react'
import './Loading.css'

const Loading = () => {
    // document.body.style.overflowY = "hidden";
    return (
        <>
            <div className='loading-background' >
                <span className='loading-container'>
                    <img src='/img/open-trade.png'></img>
                    <p>Loading...</p>
                </span>
            </div>
        </>
    )
}

export default Loading