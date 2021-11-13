// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import style from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={style.Overlay} onClick={this.handleOverlayClick}>
//         <div className={style.Modal}>{this.props.children}
//         <div className={style.form}>
//             <h3 className={style.title}>Congratulations</h3>
//             <p className={style.content}>You have successfully passed the registration </p>
//             <button type="button" className={style.button}>Great</button>
//         </div>
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }




import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const Modal = ({active, setActive, children}) => {
  return (
    <div className={active ? `style.Overlay style.active` : `style.Overlay`}
     onClick={() => setActive(false)}>
      <div className={style.Modal} onClick={e => e.stopPropagation()}>
      <div className={style.form}>
          {children}
          <h3 className={style.title}>Congratulations</h3>
          <p className={style.content}>You have successfully passed the registration </p>
          <button type="button" className={style.button}>Great</button>
      </div>
      </div>
    </div>
  )
}

 export default Modal;