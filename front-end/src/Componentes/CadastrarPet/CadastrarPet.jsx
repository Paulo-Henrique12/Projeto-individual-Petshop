import { useState } from 'react'
import styles from './CadastrarPet.module.css'

const API_URL = 'http://localhost:8080/pets'

function CadastrarPet({ onPetCadastrado }) {

    const [nome, setNome] = useState('')
    const [especie, setEspecie] = useState('')
    const [raca, setRaca] = useState('')
    const [idade, setIdade] = useState('')
    const [curiosidade, setCuriosidade] = useState('')
    const [enviando, setEnviando] = useState(false)
    const [erro, setErro] = useState('')

    async function handleCadastrar() {
        if (!nome || !especie) {
            setErro('Preencha ao menos o nome e a espécie.')
            return
        }

        setErro('')
        setEnviando(true)

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: nome,
                    especie: especie,
                    raca: raca,
                    idade: idade ? Number(idade) : null,
                    curiosidade: curiosidade
                })
            })

            if (!response.ok) {
                throw new Error('Não foi possível cadastrar o pet.')
            }

            setNome('')
            setEspecie('')
            setRaca('')
            setIdade('')
            setCuriosidade('')

            if (onPetCadastrado) {
                onPetCadastrado()
            }

        } catch (error) {
            console.error(error)
            setErro('Erro ao cadastrar o pet. Verifique se o back-end está rodando.')
        } finally {
            setEnviando(false)
        }
    }

    return (
        <section className={styles.sectionSobrePost}>
            <div className={styles.sobrePost}>
                <i className={`fa-solid fa-plus ${styles.logoCadastro}`}></i>
                <div className={styles.cadastrarPets}>
                    <p className={styles.tituloCadastrar}>2. Cadastrar pet</p>
                    <p className={styles.textoCadastrar}>Preencha os dados abaixo para cadastrar um
                         novo pet no sistema</p>
                </div>
            </div>

            <div className={styles.atributosCadastro}>

                {erro && <p style={{ color: 'red' }}>{erro}</p>}

                <div className={styles.atributosTextoInput}>

                    <div className={styles.textoAtributos}>
                        <p>Nome:</p>
                        <p>Espécie:</p>
                        <p>Raça:</p>
                        <p>Idade:</p>
                        <p>Curiosidade:</p>
                    </div>

                    <div className={styles.inputAtributos}>
                        <input
                            placeholder='Ex: Thor'
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <input
                            placeholder='Ex: Cachorro'
                            type="text"
                            value={especie}
                            onChange={(e) => setEspecie(e.target.value)}
                        />
                        <input
                            placeholder='Ex: Golden Retriever'
                            type="text"
                            value={raca}
                            onChange={(e) => setRaca(e.target.value)}
                        />
                        <input
                            placeholder='Ex: 3'
                            type="number"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                        <input
                            placeholder='Ex: Ele ama brincar na chuva'
                            type="text"
                            value={curiosidade}
                            onChange={(e) => setCuriosidade(e.target.value)}
                        />
                    </div>

                </div>

                <div className={styles.botaoCadastrar}>
                    <button onClick={handleCadastrar} disabled={enviando}>
                        {enviando ? 'Cadastrando...' : 'Cadastrar pet'}
                    </button>
                </div>

            </div>
        </section>
    )
}

export default CadastrarPet
