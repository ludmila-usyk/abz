import s from "./Header.module.css";
import icon from "./menu.png";
import logotype from "./logo.png";

export default function Header() {
    return (
        <header className={s.header}>
            <a href="./index.html"><img className={s.logo} src={logotype} alt="logo"/></a>

            <nav className={s.nav}>
                <ul className={s.navList}>
                    <li className={s.navListItem}> <a href="#About-me">About me</a></li>
                    <li className={s.navListItem}> <a href="#Relationships">Relationships</a></li>
                    <li className={s.navListItem}> <a href="#Requirements">Requirements</a></li>
                    <li className={s.navListItem}> <a href="#Users">Users</a></li>
                    <li className={s.navListItem}> <a href="#Sign-Up">Sign Up</a></li>
                </ul>
            </nav>

            <img className={s.menu} src={icon} alt="icon"/>
        </header>
    );
  }