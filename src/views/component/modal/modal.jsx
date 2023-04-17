import React from 'react'

const Modal = ({ children, visible, setVisible }) => {
    console.log(children);

    const rootClasses = ['modal_state'];

    if (visible) {
        rootClasses.push('modal_active')
    }

    const visibleChange = () => {
        if (visible) {
            visible = !visible;
        }
    }


    return (
        <div id="modal" className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div id="moda_lwrap" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;