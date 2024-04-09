import React from 'react'
import './Loading.css'

const Loading = (props) => {
    // document.body.style.overflowY = "hidden";
    //"rgba(0, 0, 0, 0.103)"
    const style={
        backgroundColor: props?.backgroundColor
    }
    
    return (
        <>
            <div style={style} className='loading-background' >
                <span className='loading-container'>
                    <img src='/img/open-trade.png'></img>
                    <p>Loading...</p>
                </span>
            </div>
        </>
    )
}

export default Loading
//propiedades:
//backgroundColor