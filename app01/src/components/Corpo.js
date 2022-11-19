import React from 'react'
import Dados from './Dados';


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

    
    return(
        <section className='caixa'>
            <h2 style={{color:'#f00', fontSize:'4em'}}> Cruso react</h2>
            <p style={textoDestaque}> Treinamento de componentes</p>
            <Dados 
                nome={nome}
                sobrenome={sobrenome}
                idade={idade} 
                cidade={cidade}
                imc={imc}                
                />
            <p className='texto'>Muito obrigado por usar nossos serviços!</p>
            <a href='#' target="_blank">Sobre nós</a>
        </section>
    )
}
