import React, { useState } from 'react';
import MainHeader from './component/header';
import IconArea from './component/icon_area';
import Posts from './component/posts';
import TemplateInform from './component/template_imformation';
import Footer from './component/footer';
import Modal from './component/modal';
import NavMenu from './component/mav_menu';

function App() {

  const [modal, setModal] = useState(false);

  const menuBar = () => {
    return (
      <div></div>
    )
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
  );
}

export default App;
