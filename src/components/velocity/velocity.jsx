import styles from "../velocity/velocity.module.css";
import carVelocity from "../../assets/carro-vermelho.png";
import Button from "../button/button";

const Velocity = () => {
    return (
        <section className={styles.velocity}>
            <div className={styles.velocityWrapper}>
                <div className={styles.velocityContent}>
                    <h1 className={styles.h1Velocity}>Velocidade e qualidade aston martin!</h1>
                    <p className={styles.pVelocity}>
                    Obtenha os nossos melhores carros e seja seu<br/>
                    sonho, desempenho ágil mais habilidade artesanal
                     </p>
                     <div className={styles.btnVelocityWrapper}>
                        <Button className={styles.btnVelocity}> COMPRAR </Button>
                     </div>

                </div>
                <div className={styles.velocityImg}>
                    <img src={carVelocity} className={styles.carVelocity} />
                </div>
            </div>
        </section>

    )
}

export default Velocity;