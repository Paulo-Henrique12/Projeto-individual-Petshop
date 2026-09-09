import { useState } from 'react'

import Navbar from './Componentes/Navbar/Navbar.jsx'
import './reset.css'
import styles from './App.module.css'

import BoasVindas from './Componentes/Boas-vindas/BoasVindas.jsx'
import PetsCadastrados from './Componentes/PetsCadastrados/PetsCadastrados.jsx'
import CadastrarPet from './Componentes/CadastrarPet/CadastrarPet.jsx'
import ListaPets from './Componentes/ListaPets/ListaPets.jsx'
import Footer from './Componentes/Footer/Footer.jsx'

function App() {

    const [pagina, setPagina] = useState("inicio")

    return (
        <>
            <Navbar setPagina={setPagina} />

            {pagina === "inicio" && (
                <>
                    <BoasVindas />

                    <div className={styles.cardPets}>
                        <PetsCadastrados setPagina={setPagina} />
                        <CadastrarPet onPetCadastrado={() => setPagina("pets")} />
                    </div>
                </>
            )}

            {pagina === "pets" && (
                <ListaPets setPagina={setPagina} />
            )}

            <Footer />
        </>
    )
}

export default App