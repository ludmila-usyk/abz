import s from "./Header.module.css";
import icon from "./menu.png";
import logotype from "./logo.png";

export default function Header() {
    return (
        <header className={s.header}>
            <a href="./index.html"><img className={s.logo} src={logotype} alt="logo"/></a>
            <img className={s.menu} src={icon} alt="icon"/>
        </header>
    );
  }