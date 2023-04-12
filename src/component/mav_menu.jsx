import React from 'react'
import BaseInformation from '../date/date';

const NavMenu = () => {
    return (
        <ul id='main_menu'>
            {BaseInformation.MenuInfo.map((menu_info, index) =>
                <li style={
                    {
                        //zIndex: (index + 1), 
                        '--i': (BaseInformation.MenuInfo.length - index)
                    }}
                    key={index.toString()}>
                    <a href="#"><img src={menu_info.icon}></img>{menu_info.name}</a>
                </li>
            )}
        </ul>
    )
}

export default NavMenu;