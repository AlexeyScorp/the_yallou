import React from 'react';

const IconAreaBody = (icon_ini) => {
    return (
        <div className='icon_area_box'>
            <div className="icon_area_content">
                <div className="icon_image">
                    <img src={icon_ini.icon_box.src} alt={icon_ini.icon_box.name} />
                </div>
                <span>{icon_ini.icon_box.name}</span>
            </div>
        </div>
    )
}

export default IconAreaBody;