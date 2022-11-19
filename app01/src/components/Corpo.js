import React from 'react'
import Dados from './Dados';

export default function Corpo() {
    const nome='Alisson' 
    const sobrenome='Oliveira' 
    const idade='32' 
    const cidade='Paracatu'
    const altura=175
    const peso=80
    var imc =0
    const calculoImc = (peso / ((altura * altura) 
    / 10000)).toFixed(2)
    
    if (calculoImc < 18.6) 
        imc = 'IMC de '+calculoImc+', você está abaixo do peso ideal' ;       
    else if (  calculoImc >= 18.6 && calculoImc < 24.9) 
        imc = 'IMC de '+calculoImc+', você está no peso ideal';          
    else 
        imc = 'IMC de '+calculoImc+', você está acima do peso'  ;

    
    return(
        <section>
            <h2> Cruso react</h2>
            <p> Treinamento de componentes</p>
            <Dados 
                nome={nome}
                sobrenome={sobrenome}
                idade={idade} 
                cidade={cidade}
                imc={imc}
                />
        </section>
    )
}
