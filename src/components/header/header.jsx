import { useState } from "react";
import styles from "../header/header.module.css";
import LogoHeader from "../../assets/logo.svg";
import iconCloser from "../../assets/menu-closer.svg";
import iconBars from "../../assets/menu-togle.svg";
import Button from "../button/button";

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
        setMenuActive("!menuActive")
    } 

    return (
        <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
            <div className={styles.WrapperHeader}>
                <div className={styles.btnLogoHeader}>
                    <button className={styles.btnLogo}>
                        <img className={styles.imgLogoHeader} src={LogoHeader} alt="" />
                    </button>
                <div className={styles.contentHeader}>
                    <button onClick={toggleMenu} className={styles.menuMobile} id={styles.menuIcons}>
                        <img src={ menuActive ? iconCloser : iconBars } alt="" className="" />
                    </button>
                </div>
                </div>
                <nav className={menuActive ? styles.active : ""}>
                    <ul className={styles.ulHeader}>
                        <li className={styles.liHeader}><a href="" className={styles.aHeader}>Inicio</a></li>
                        <li className={styles.liHeader}><a href="" className={styles.aHeader}>Carros</a></li>
                        <li className={styles.liHeader}><a href="" className={styles.aHeader}>Manutenção</a></li>
                        <li className={styles.liHeader}><a href="" className={styles.aHeader}>Novos</a></li>
                        <li className={styles.btiLi} > <Button>Comprar</Button> </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header ;