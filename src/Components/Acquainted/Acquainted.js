import s from './Acquainted.module.css';
import boy from "./boy.svg";

export default function Acquainted() {
    return (
        <section className={s.container} id="Relationships">
            <div className={s.block}>
                <picture><img src={boy} alt="boy" with="296" className={s.img}/></picture>
            </div>
            <div className={s.block}>
                <h2 className={s.title}>Let's get acquainted</h2>
                <p className={s.content}>I'm a good front-end developer</p>
                <p className={s.text}>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <button type="button" className={s.heroButton}>Sign up</button>
            </div>
        </section>
    ); 
  }