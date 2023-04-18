import React, { useState } from 'react'
import MainHeader from './views/layouts/header/header'
import IconArea from './views/layouts/iconArea/iconArea'
import Posts from './views/layouts/posts/posts'
import TemplateInform from './views/layouts/templateInformftion/templateImformation'
import Footer from './views/layouts/footer/footer'
import Modal from './views/component/modal/modal'
import NavMenu from './views/component/nav/mavMenu'

function App() {
	const [modal, setModal] = useState(false)

	const menuBar = () => {
		return <div></div>
	}

	return (
		<div>
			{/* <button onClick={() => setModal(true)}> Нажать</button> */}
			<Modal visible={modal} setVisible={setModal}>
				<NavMenu />
			</Modal>
			<MainHeader setVisible={setModal} />
			<main>
				<IconArea />
				<Posts />
				<TemplateInform />
			</main>
			{/* <App /> */}
			<Footer />
		</div>
	)
}

export default App
