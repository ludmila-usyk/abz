import s from './Hero.module.css';
import Modal from '../Modal';
import { useState } from 'react';

const Hero = () => {
  const [modalActive, setModalActive] = useState(true)
  return (
    <section className={s.heroBg} id="About-me">
      <Modal active={modalActive} setActive={setModalActive} />
      <div className={s.hero}>
        <h1 className={s.heroTitle}>
          Test assignment for front-end developers
        </h1>
        <p className={s.heroContentMob}>
          Front-end developers make sure the user sees and interacts with all
          the necessary elements to ensure conversion.
        </p>
        <p className={s.heroContentTablet}>
        Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.
        </p>
        <button
          type="button"
          className={s.heroButton}
          onClick={() => {
            setModalActive(!modalActive)
            console.log('hero', modalActive)
          }}
        >
          Sign up
        </button>
      </div>
    </section>
  )
}

export default Hero