import { createPortal } from 'react-dom'
import style from './Modal.module.css'

const Modal = ({ active, setActive, children }) => {
  console.log('modal', active)
  return createPortal(
    <div
      className={
        active ? `${style.Overlay} ${style.active}` : `${style.Overlay}`
      }
      onClick={() => setActive(false)}
    >
      <div className={style.Modal} onClick={(e) => e.stopPropagation()}>
        <div className={style.form}>
          {children}
          <h3 className={style.title}>Congratulations</h3>
          <p className={style.content}>
            You have successfully passed the registration{' '}
          </p>
          <button type="button" className={style.button}>
            Great
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
}

export default Modal
