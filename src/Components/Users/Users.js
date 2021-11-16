import s from "./Users.module.css";
import photo from "./Photo-cover.svg";

export default function Users() {
    return (
        <section className={s.users} id="Users">
            <h2 className={s.title}>Our cheerful users</h2>
            <p className={s.content}>The best specialists are shown below</p>
            <ul className={s.cards}>
                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Salvador Stewart Flynn Thomas Salvatore Morga...</h4>
                    <p className={s.about}>Leading specialist of the department of control over co...<br />JeromeKlarkaJeromeKlarka@...<br /> +38 (098) 278 76 24</p>
                </li>

                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Takamaru Ayako Jurrien</h4>
                    <p className={s.about}>Lead Independent Director <br />Takamuru@gmail.com<br /> +38 (098) 278 90 24</p>
                </li>

                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Ilya</h4>
                    <p className={s.about}>Co-Founder and CEO <br />Ilya_founder@gmail.com<br /> +38 (098) 235 44 24</p>
                </li>

                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Alexandre</h4>
                    <p className={s.about}>Lead Independent Director <br />Alexandr_develop@gmail.com<br /> +38 (098) 198 44 24</p>
                </li>

                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Winny</h4>
                    <p className={s.about}>Former Senior Director <br />Winny_develop@gmail.com<br /> +38 (098) 278 22 88</p>
                </li>

                <li className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Simon</h4>
                    <p className={s.about}>President of Commerce  <br />Simon@gmail.com<br /> +38 (098) 278 44 00</p>
                </li>
                
            </ul>
            <button type="button" className={s.more}>Show more</button>
        </section>
    ); 
  }