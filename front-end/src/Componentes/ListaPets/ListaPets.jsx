import { useEffect, useState } from 'react'
import styles from './ListaPets.module.css'

const API_URL = 'http://localhost:8080/pets'

function ListaPets({ setPagina }) {

    const [pets, setPets] = useState([])
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    async function buscarPets() {
        setCarregando(true)
        setErro('')
        try {
            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error('Não foi possível carregar os pets.')
            }

            const dados = await response.json()
            setPets(dados)

        } catch (error) {
            console.error(error)
            setErro('Erro ao carregar a lista de pets. Verifique se o back-end está rodando.')
        } finally {
            setCarregando(false)
        }
    }

    // busca os pets assim que a página é exibida
    useEffect(() => {
        buscarPets()
    }, [])

    return (
        <main>

            <section className={styles.bannerPets}>

                <div className={styles.conteudoBanner}>

                    <div className={styles.tituloBanner}>

                        <div className={styles.iconeTitulo}>
                            <i className="fa-solid fa-paw"></i>
                        </div>

                        <h1>Pets cadastrados</h1>

                    </div>

                    <p>
                        Confira a lista de todos os pets registrados no sistema.
                    </p>

                    <button
                        className={styles.botaoVoltar}
                        onClick={() => setPagina("inicio")}
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Voltar para o início
                    </button>

                </div>

            </section>


            <section className={styles.listaContainer}>

                <div className={styles.tituloLista}>

                    <div className={styles.iconeLista}>
                        <i className="fa-solid fa-list"></i>
                    </div>

                    <h2>Lista de pets</h2>

                </div>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}
                {carregando && <p>Carregando pets...</p>}

                {!carregando && !erro && (
                    <div className={styles.tabelaContainer}>

                        <table>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Espécie</th>
                                    <th>Raça</th>
                                    <th>Idade</th>
                                    <th>Curiosidade</th>
                                </tr>
                            </thead>

                            <tbody>

                                {pets.map((pet) => (
                                    <tr key={pet.id}>

                                        <td>{pet.id}</td>

                                        <td>{pet.nome}</td>

                                        <td>{pet.especie}</td>

                                        <td>{pet.raca}</td>

                                        <td>{pet.idade} anos</td>

                                        <td>{pet.curiosidade}</td>

                                    </tr>
                                ))}

                            </tbody>

                        </table>

                    </div>
                )}

            </section>

        </main>
    )
}

export default ListaPets
