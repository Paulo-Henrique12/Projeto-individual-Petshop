import styles from "./BoasVindas.module.css"

function BoasVindas(){
    return(
        <section className={styles.banner}>
            <div className={styles.conteudoBanner}>
                <h1>Bem-Vindo!</h1>
                <p className={styles.textoBoasVindas}>Um sistema simples para <br />
                consultar e cadastrar pets.</p>
            </div>
        </section>
    );
}

export default BoasVindas