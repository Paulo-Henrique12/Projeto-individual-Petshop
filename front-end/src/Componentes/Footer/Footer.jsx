import styles from './Footer.module.css'

function Footer(){
    return(
     <div className={styles.footer}>
            <p className={styles.textoFooter}>Feito com carinho para facilitar o cuidado com seu pet.</p>
            <p className={styles.linkGithub}>Github: https://github.com/Paulo-Henrique12</p>
     </div>
        
    )
}

export default Footer;