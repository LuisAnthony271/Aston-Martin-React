import styles from "../hero/hero.module.css";
import carHero from "../../assets/carro-preto.png";
import Button from "../button/button";

const Hero = () => {

    
    return (
        <section className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <h2 className={styles.h2Hero}>DBS <span className={styles.spanHero}>ULTIMATE 700</span></h2>
                    <p className={styles.pHero}>Por mais de meio século, o nome DBS<br/>significou apenas uma coisa: a produção<br/> definitiva do Aston Martin.</p>
                    <div className={styles.btnWrapper}>
                        <Button className={styles.btnHeroClass} id={styles.btnHero}> SAIBA MAIS </Button>
                    </div>
                </div>
            <div className={styles.heroImg}>
                <img src={carHero} className={styles.carHero} />
            </div>
            </div>
        </section>
    )

}

export default Hero;