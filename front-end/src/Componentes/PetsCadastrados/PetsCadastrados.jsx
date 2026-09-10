import styles from './PetsCadastrados.module.css'

function PetsCadastrados({ setPagina }) {
    return (
        <section className={styles.sectionSobreGet}>
            <div className={styles.sobreGet}>
                <i className={`fa-solid fa-list ${styles.logoLista}`}></i>
                <div className={styles.consultarPets}>
                    <p className={styles.tituloCadastrados}>1. Pets cadastrados</p>
                    <p className={styles.textoCadastrados}>Consulte a lista de todos os pets
                        cadastrados no sistema</p>
                    <button onClick={() => setPagina("pets")}>
                        <i className={`fa-solid fa-magnifying-glass ${styles.lupa}`}></i> Ver pets cadastrados
                    </button>
                </div>
            </div>

            <div className={styles.sobreLista}>
                <p>Lista de pets</p>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Espécie</th>
                            <th>Raça</th>
                            <th>Idade</th>
                            <th>Curiosidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Thor</td>
                            <td>Cachorro</td>
                            <td>Golden Retriever</td>
                            <td>3</td>
                            <td>Ele ama brincar na chuva</td>
                        </tr>
                        <tr>
                            <td>Bobby</td>
                            <td>Cachorro</td>
                            <td>Yorkiepoo</td>
                            <td>10</td>
                            <td>Ele ama carinho</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default PetsCadastrados
