import React from 'react';
import Logo from './components/imgs/logo.png';



export default function App() {
  const canal=()=>{
    return ('Curso react CFB')
  }
  function curso(){
    return 'Curso de React'
  }
  return(
    <section>
      <header>
        <img src={Logo}/>
        <img src={'/img/eu.png'}/>
      </header>
      
      <p> {'Canal' + canal()}</p>
      <p>{curso()}</p>
    </section>
  )
};
