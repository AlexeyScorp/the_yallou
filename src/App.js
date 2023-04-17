import React, { useState } from 'react';
import MainHeader from './views/layouts/header/header';
import IconArea from './views/layouts/icon_area/icon_area';
import Posts from './views/layouts/posts/posts';
import TemplateInform from './views/layouts/template_informftion/template_imformation';
import Footer from './views/layouts/footer/footer';
import Modal from './views/component/modal/modal';
import NavMenu from './views/component/nav/mav_menu';

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
