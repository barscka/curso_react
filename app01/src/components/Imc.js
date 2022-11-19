import React from 'react'


export default function Imc(props) {

    let altura=175
    let peso=80
    var imc =0
    const calculoImc=()=>{
        (peso / ((altura * altura) 
    / 10000)).toFixed(2)
    } 
    if (calculoImc < 18.6) 
        imc = 'IMC de '+calculoImc+' é abaixo do peso ideal' ;       
    else if (  calculoImc >= 18.6 && calculoImc < 24.9) 
        imc = 'IMC de '+calculoImc()+' peso ideal '-'';          
    else 
        imc = 'IMC de '+calculoImc()+' Acima do peso ;('  ;

    
    return(
        <section>
            <h2> Calculo Imc</h2>
            <p> Treinamento de componentes <b> IMC</b></p>
            <Imc
                imc={imc}
            />
        </section>
    )
}
