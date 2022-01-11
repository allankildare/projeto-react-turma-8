import './App.css'
import React, { useContext } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Drinks from './components/Drinks/Drinks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Center from './components/Center/Center'
import ExemploState from './components/ExemploState/ExemploState'
import DrinksPopulares from './components/Drinks/DrinksPopulares'
import BuscaDrinks from './components/Drinks/BuscaDrinks'
import MainCover from './components/MainCover/MainCover'
import Usuario from './components/Usuario/Usuario'
import UsuarioLogin from './components/Usuario/UsuarioLogin'
import { UserContext } from './context'
import Buscar from './components/Buscar/Buscar'

function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <MainCover />
          } />
          <Route path="/sobre-nos" element={
            <Center>
              <h1>Sobre nós</h1>
            </Center>
          } />
          <Route path="/nosso-time" element={
            <Center>
              <h1>Nosso time</h1>
              <p>Usuário é {user}</p>
              <ExemploState />
            </Center>
          } />
          <Route path="/contato" element={<Form />} />
          <Route path="/drinks" element={<Drinks />}>
            <Route path="populares" element={<DrinksPopulares />} />
            <Route path="buscar-drinks" element={<BuscaDrinks />} />
          </Route>
          <Route path="/contexto" element={
            <>
              <Usuario />
              <UsuarioLogin />
            </>
          } />
          <Route path="/teste" element={<Buscar />} />
          <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
