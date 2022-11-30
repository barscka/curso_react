import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Corpo from './components/Corpo';
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina2'



export default function App(){
  const [pagina, setPagina]=useState(0)

  useEffect(
    ()=>{
      const url=window.location.href
      const res=url.split('?')
      setPagina(res[1])
    }
  )

  const LinksPagina=(p)=>{
    if(p==1){
      window.open('http://localhost:3000?1','_self')
    }else if(p==2){
      window.open('http://localhost:3000?2','_self')
    }
  }
  const retornaPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return (<div>
                <button onClick={()=> LinksPagina(1)}>Pagina 1</button>
                <button onClick={()=> LinksPagina(2)}>Pagina 2</button>
             </div>)
    }
}



  return(
    <>  
     {retornaPagina()}
    <Header/>
   
    <Corpo/>

    </>
  )
}
