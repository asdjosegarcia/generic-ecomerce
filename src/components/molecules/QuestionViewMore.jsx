import React from 'react'
import ExpandMoreSVG from '@/SVG/ExpandMoreSVG'
import ExpandLessSVG from '@/SVG/ExpandLessSVG'


const QuestionViewMore = (props) => {
    console.log(props)
    return (
        <button onClick={() => { props.setViewMore(!props.getViewMore) }} className='questions--list__viewMore'>{/* invertimos  */}
            {!props.getViewMore ?
                <>
                    <p>View more </p>
                    <ExpandMoreSVG width={24} ></ExpandMoreSVG>
                </>
                :
                <>
                    <p>View less</p>
                    <ExpandLessSVG width={24} ></ExpandLessSVG>
                </>
            
            }

        </button>
    )
}

export default QuestionViewMore