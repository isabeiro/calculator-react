import React from 'react'

import Container from './components/Container'
import Header from './components/Header'
import Keyboard from './components/Keyboard'


function App() {
  return (
    <Container>
      <Header titulo="Calculadora"/>
      <Keyboard/>
    </Container>
  )
}

export default App
