import React from 'react'
import MainSlider from '../../layouts/header/slider/slider'
import BaseInformation from '../../../data/data'
import Modal from '../../component/modal/modal'

const MainHeader = ({ setVisible }) => {
	return (
		<div id="header_wrap">
			<header>
				<div id="main-discription">
					<h1 className="main-name main-logo">{BaseInformation.NameSite}</h1>
					<span className="main-autor">
						Craft By Css{' '}
						<a href={BaseInformation.AutorInfoUrl}>
							{BaseInformation.AutorInfo}
						</a>
					</span>
				</div>
				<div id="nav-box">
					<nav
						onClick={evented => {
							setVisible(true)
						}}
					>
						<i id="nav-click"></i>
					</nav>
				</div>
			</header>
			<MainSlider />
		</div>
	)
}

export default MainHeader
