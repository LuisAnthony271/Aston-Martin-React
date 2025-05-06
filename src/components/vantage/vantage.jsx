import styles from "../vantage/vantage.module.css";
import carVantage from "../../assets/carrow-cinza.png";
import Button from "../button/button";
import useRevealObserver from '../../hook/useRevealObserver'
import { withReveal } from '../../hook/withReveal'

const Vantage = () => {

    useRevealObserver()

    return (

        <section className={styles.vantage}>

            <div className={styles.vantageWrapper}>

                <div className={withReveal(styles.imgVantage)}>
                    <img src={carVantage} className={styles.carVantage}/>
                </div>

                <div className={withReveal(styles.vantageContent)}>
                    <p className={styles.pVantage}>
                        Vantage é cru e instintivo, inabalável em seu propósito<br/>
                     singular: dominar os sentidos através de seu design de<br/>
                      renome mundial, desempenho ágil e habilidade artesanal<br/>
                       dedicada.
                    </p>
                    
                    <Button className={styles.btnHeroClass}> SAIBA MAIS </Button>
                </div>

            </div>

        </section>

    )
}

export default Vantage;