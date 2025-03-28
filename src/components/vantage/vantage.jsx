import styles from "../vantage/vantage.module.css";
import carVantage from "../../assets/carrow-cinza.png";
import Button from "../button/button";

const Vantage = () => {
    return (

        <section className={styles.vantage}>
            <div className={styles.vantageWrapper}>
                <div className={styles.imgVantage}>
                    <img src={carVantage} className={styles.carVantage}/>
                </div>
                <div className={styles.vantagecontent}>
                    <p>Vantage é cru e instintivo, inabalável em seu propósito<br/> singular: dominar os sentidos através de seu design de<br/> renome mundial, desempenho ágil e habilidade artesanal dedicada.</p>
                    <Button className={styles.btnHeroClass}> SAIBA MAIS </Button>
                </div>
            </div>
        </section>

    )
}

export default Vantage