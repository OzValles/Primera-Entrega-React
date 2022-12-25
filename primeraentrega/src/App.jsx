import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { ItemListContainer } from './components/Container/itemListContainer/ItemListContainer'
//import './App.css'

import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer saludo={'En construccion..'} />
    </>
  )
    
}

export default App
