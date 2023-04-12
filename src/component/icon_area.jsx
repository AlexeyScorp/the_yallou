import React, { Component } from 'react';
import BaseInformation from '../date/date';
import IconAreaBody from './icon_area_box';

const IconArea = () => {
    //Через индекс т-к элементы статичны (можно да\нет?) (илл как лучше)
    return (
        <div id='icon_area_wrap'>
            {BaseInformation.IconAreaPath.map((icon_box, index) =>
                <IconAreaBody icon_box={icon_box} key={index.toString()} />
            )}
        </div>
    )
}

export default IconArea;