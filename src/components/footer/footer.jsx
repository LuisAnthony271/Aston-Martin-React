import styles from "../footer/footer.module.css";
import logoFooter from "../../assets/logo-bottom.svg";

const Footer = () => {
    return (

        <footer className={styles.footer}>

            <div className={styles.footerWrapper}>

                <div className={styles.footerImg}>
                    <a href="" className={styles.aFooterImg}><img src={logoFooter} className={styles.logoFooter} /></a>
                </div>

                <div className={styles.footerContent}>
                    <p className={styles.pFooter}>
                        Os valores de emissões/economia de combustível citados são provenientes de resultados de testes regulamentados oficiais obtidos através de testes de laboratório. Servem apenas para fins de
                        comparabilidade e podem não refletir a sua experiência de condução real, que pode variar dependendo de fatores como condições da estrada, condições meteorológicas, carga do veículo e estilo
                        de condução.
                    </p>
                </div>

                <div className={styles.footerPolicy}>

                        <div className={styles.copyright}>
                            <p className={styles.pFooter}>© 2023 Aston Martin. Todos os direitos reservados.</p>
                        </div>

                        <div className={styles.privacy}>
                            <div><a href="" className={styles.aFooter}> Politica de privacidade </a></div>
                            <div><a href="" className={styles.aFooter}> Termos de uso </a></div>
                        </div>
                        
                    </div>
                </div>
        </footer>
    )
}

export default Footer;