import React, { useState } from 'react'
import BaseInformation from '../date/date';
import Slide from './slide';

const MainSlider = () => {
    let qqq = '1111';
    let [classes, setCount] = useState();

    const previousSlide = (inform) => {

    }

    const nextSlide = (inform) => {

    }

    return (
        <div id="slider_wrap">
            <div id='slider_navigation' className={qqq}>
                <i className='previous_slide' onClick={previousSlide}></i>
                <i className='next_slide' onClick={nextSlide}></i>
            </div>
            <Slide />
        </div >
    )
}

export default MainSlider;