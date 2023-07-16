import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import Fade from "react-reveal/Fade";


function AboutEntry(props) {
    const [isFlipped,setIsFlipped] = useState(false);
    function flip(){
        setIsFlipped(!isFlipped);
    }
    return (<Fade bottom duration={3000}>
    <div className='flex-box'>
        <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
            <div className='front' onClick={flip}>
                <h1 className='about-front-heading'>{props.front}</h1>
                <h1 className='about-front-emoji'>{props.emoji}</h1>
            </div>
            <div className='back' onClick={flip}>
                <ul className='list'>
                <li>{props.back1}</li>
                <li>{props.back2}</li>
                <li>{props.back3}</li>
                </ul>
            </div>
        </ReactCardFlip>
    </div>
    </Fade>
    )
}

export default AboutEntry;