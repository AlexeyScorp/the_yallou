import React from 'react'
import BaseInformation from '../../../data/data';

const Footer = () => {
    return (
        <footer>
            <div id="footer_wrap">
                <div id="footer_logo_wrap">
                    <h6 className='footer_name footer_logo'>{BaseInformation.NameSite}</h6>
                </div>
                <div id="footer_design">
                    <span className='footer_autor'>
                        Designed by &nbsp;<a href={BaseInformation.DesignInfoUrl}>{BaseInformation.DesignInfo}</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;