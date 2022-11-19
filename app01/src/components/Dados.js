import React from 'react';

export default function Dados(props) {    
    return(
        <section>
            
            <b><p className='text'>Dados:</p></b>
            <p>Nome: {props.nome}</p>
            <p>Sobrenome: {props.sobrenome}</p>
            <p>Idade: {props.idade}</p>
            <p>Cidade: {props.cidade}</p>
            <p>Peso ideal: {props.imc}</p>
            
            
        </section>
    )
};
