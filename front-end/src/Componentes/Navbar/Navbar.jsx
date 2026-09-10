import styles from "./Navbar.module.css"
import logo from "../../assets/PatinhaLaranja.png"

function Navbar({ setPagina }) {
    return (
        <header>

            <div className={styles.logo}>

                <img src={logo} alt="" />

                <div className={styles.textoLogo}>

                    <p className={styles.nome}>
                        Pet<span className={styles.laranja}>Lar</span>
                    </p>

                    <p className={styles.descricao}>
                        Sistema de Cadastro de Pets
                    </p>

                </div>

            </div>

            <nav>

                <ul>

                    <li className={styles.inicio}>
                        <button
                            className={styles.botaoInicio}
                            onClick={() => setPagina("inicio")}
                        >
                            <i className="fa-solid fa-house"></i>
                            Início
                        </button>
                    </li>

                    <li className={styles.pets}>
                        <button
                            className={styles.botaoPets}
                            onClick={() => setPagina("pets")}
                        >
                            <i className="fa-solid fa-paw"></i>
                            Pets
                        </button>
                    </li>

                </ul>

            </nav>

        </header>
    )
}

export default Navbar