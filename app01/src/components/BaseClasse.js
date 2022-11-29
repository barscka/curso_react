import { render } from '@testing-library/react'
import React, { Component } from 'react'

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canal:'CFB Cursos',
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status
        //bindagem
        let ad=ativarDesativar.bind(this)
        //instruções do construtor
    }

// Função para manipular state
ativarDesativar(){
    this.setState(
        state=>({ ativo=!state.ativo})
    )
}
componentDidMount(){
    console.log('O componente foi criado')
}
componentDidUpdate(){
    console.log('O componente foi atualizado')
}
componentWillUnmount(){
    console.log('O componente foi removido')
}

render() {
    return (
         <>
            <h1> Componentes de Classe</h1>
            {/* //chamada da funcao com o bind */}
            <button onClick={this.ad}> Ativar Desativar</button>
            {/* chamada de funçao sem bindagem     */}
            <button onClick={()=>this.ativarDesativar}> Ativar Desativar</button>
         </>
    )
}
}