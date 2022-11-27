import React, { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Corpo from './components/Corpo';
import Numero from './components/Numero';


export default function App() {
  const [num,setNum]=useState(10)
  


  return(
    <>  
    <Header></Header>
    <Corpo/>
    <h2 >CFB Cursos</h2>
    <p> Valor do state num em App: {num}</p>
    <Numero num={num} setNum={setNum}/>
    </>
  )
}
