import s from "./Users.module.css";
import photo from "./Photo-cover.svg";

export default function Users() {
    return (
        <section className={s.users}>
            <h2 className={s.title}>Our cheerful users</h2>
            <p className={s.content}>The best specialists are shown below</p>
            <ul>
                <li>
                <div className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Salvador Stewart Flynn Thomas Salvatore Morga...</h4>
                    <p className={s.about}>Leading specialist of the department of control over co...JeromeKlarkaJeromeKlarka@... +38 (098) 278 76 24</p>
                </div>
                </li>

                <li>
                <div className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Takamaru Ayako Jurrien</h4>
                    <p className={s.about}>Lead Independent Director Takamuru@gmail.com +38 (098) 278 90 24</p>
                </div>
                </li>

                <li>
                <div className={s.item}>
                    <img className={s.photo} src={photo} alt="photo"/>
                    <h4 className={s.name}>Ilya </h4>
                    <p className={s.about}>Co-Founder and CEO Ilya_founder@gmail.com +38 (098) 235 44 24</p>
                </div>
                </li>
                
            </ul>
            <button type="button" className={s.more}>Show more</button>
        </section>
    ); 
  }