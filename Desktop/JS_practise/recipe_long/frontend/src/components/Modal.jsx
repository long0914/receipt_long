import React from 'react';
import './Modal.Module.css';

function Modal({ show, close, children }) {
const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={show ? 'modal display-block' : 'modal display-none'} onClick={close}>
      <section className="modal-main" onClick={handleContainerClick}>
        {children}
        <button onClick={close}>close</button>
      </section>
    </div>
  );
}

export default Modal;