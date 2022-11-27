import React, { useState } from 'react';
import Dados from './Dados';
import Relogio from './Relogio';

export default function Corpo() {
    const nome='Alisson' 
    const sobrenome='Oliveira' 
    const idade='32' 
    const cidade='Paracatu'
    let altura=175
    let peso=80
    var imc =0
    const calculoImc = (peso / ((altura * altura) 
    / 10000)).toFixed(2)
    
    if (calculoImc < 18.6) 
        imc = 'IMC de '+calculoImc+', você está abaixo do peso ideal' ;       
    else if (  calculoImc >= 18.6 && calculoImc < 24.9) 
        imc = 'IMC de '+calculoImc+', você está no peso ideal';          
    else 
        imc = 'IMC de '+calculoImc+', você está acima do peso'  ;
    const textoDestaque={
        color:'#00f',
        fontSize: '3em'
    }
    const [cor, setCor]=useState(1)

    const carros=[
        {categoria: "Esporte", preco: "100000.00", modelo: "Golfe GTI"},
        {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
        {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
        {categoria: "SUV", preco: "120000.00", modelo: "T-Cross"},
        {categoria: "Utilitario", preco: "120000.00", modelo: "Hilux"},
        {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
    ];
    const listaCarros=carros.map(
        (c)=>
            <li>{c.categoria} - {c.modelo} : R$ {c.preco}</li>
    )
  
  const vermelho={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const retCor=(c)=>{
    if (c==1){
      return vermelho
    }else if(c==2){
      return verde
    }else{
      return azul
    }
  }

  const mudaCor=()=>{
    setCor(cor+1)
    if (cor > 2)
      setCor(1)
  }
  setInterval(mudaCor, 1000)
    
    return(
        <section className='caixa'>
            <p className='relogio'><Relogio/></p>
            <h2 style={{color:'#f00', fontSize:'4em'}}> Curso react</h2>
            <p style={textoDestaque}> Treinamento de componentes</p>
            <Dados 
                nome={nome}
                sobrenome={sobrenome}
                idade={idade} 
                cidade={cidade}
                imc={imc}                
                />
            <p >Lista de carros</p>
            <ul>{listaCarros}</ul>
            <p style={retCor(cor)}  className='texto'>Muito obrigado por usar nossos serviços!</p>
            <a href='#' target="_blank">Sobre nós</a>
        </section>
    )
}
