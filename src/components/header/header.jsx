import { useState } from "react";
import styles from "../header/header.module.css";
import LogoHeader from "../../assets/logo.svg";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
import Button from "../button/button";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div>
          <button>
            <a href="#"><img className={styles.logoHeader} src={LogoHeader} alt="" /></a>
          </button>
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img src={menuActive ? iconCloser : iconBars} id={styles.menuIcons} alt="" />
        </button>
        <nav className={menuActive ? styles.active : ""}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a className={styles.aHeader} href="">Inicio</a>
            </li>
            <li className={styles.navLi}>
              <a className={styles.aHeader} href="">Carros</a>
            </li>
            <li className={styles.navLi}>
              <a className={styles.aHeader} href="">Manuntenção</a>
            </li>
            <li className={styles.navLi}>
              <a className={styles.aHeader} href="">Novos</a>
            </li>
            <li className={styles.liBtn}>
                <Button>Comprar</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
