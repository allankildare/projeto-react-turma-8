import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Modal from './components/Modal/Modal'
import Drinks from './components/Drinks/Drinks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Center from './components/Center/Center'
import Logo from './components/Logo/Logo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Header />
            <Routes>
              <Route path="/" element={
                <Center>
                  <Logo />
                </Center>
              } />
              <Route path="/sobre-nos" element={
                <Center>
                  <h1>Sobre nós</h1>
                </Center>
              } />
              <Route path="/nosso-time" element={
                <Center>
                  <h1>Nosso time</h1>
                </Center>
              } />
              <Route path="/contato" element={<Form />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="*" element={<h1>Erro 404</h1>} />
            </Routes>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;
