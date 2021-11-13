// import s from "./Hero.module.css";
// import Modal from '../Modal';

// export default function Hero() {
//     return (
//         <section className={s.heroBg}>
//                   <Modal />
//             <div className={s.hero}>
//             <h1 className={s.heroTitle}>Test assignment for front-end developers</h1>
//             <p className={s.heroContent}>Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.</p>
//             <button type="button" className={s.heroButton}>Sign up</button>
//             </div>

//         </section>
//     ); 
//   }


import s from "./Hero.module.css";
import Modal from '../Modal';
import { useState } from "react";

const Hero = () => {
    const [modalActive, setModalActive] = useState(true)
    return (
        <section className={s.heroBg}>
            <Modal active={modalActive} setActive={setModalActive}/>
            <div className={s.hero}>
              <h1 className={s.heroTitle}>Test assignment for front-end developers</h1>
              <p className={s.heroContent}>Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.</p>
              <button type="button" className={s.heroButton} onClick={() => setModalActive(true)}>Sign up</button>
            </div>
        </section>
    ); 
  }

export default Hero;