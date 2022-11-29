import React, {  useState } from 'react'
import '../App.css'
import Relogio from './Relogio';
import Logo from './imgs/logo.png'
import Globais from './Globais'
import Info from './Info';

export default function Header(){
    const [resumo,setResumo]=useState(Globais.resumo)

    const gravarResumo=()=>{
        Globais.resumo=resumo;        
        
    }
    const verResumo=()=>{
        alert(Globais.resumo)
        
    }
    
    const textoDestaque={
        color:'#00f',
        fontSize: '3em'
    }
    return(
        <header className='caixa'>
            <img src={Logo}/>
            <h2 style={{color:'#f00', fontSize:'4em'}}> {Globais.canal}</h2>
            <h2 style={{color:'#f00', fontSize:'4em'}}>{Globais.curso}</h2>
            <h2 style={{color:'#f00', fontSize:'4em'}}>{Globais.ano}</h2>
            <p className='relogio'><Relogio/></p>
            <p style={textoDestaque}> Treinamento de componentes</p>
            <Info/>
            <input type="text" size="100" value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
            <br/>
            <button onClick={()=>gravarResumo()}>Gravar resumo</button>
            <button onClick={()=>verResumo()}>Ver resumo</button>
    
            
        </header>
    )
}
