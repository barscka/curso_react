import React from 'react';

export default class Carro extends React.Component {
    constructor(props){
        super(props)
        this.modelo='HRV'
        this.state={
            ligado:false,
            velAtual:0,
        }
        this.ld=this.ligarDesligar.bind(this)
    }
    ligarDesligar(){
        this.setState({ligado:!this.state.ligado})
    }
    acelerar(){
        this.setState(
            (state, props)=>(
                {velAtual:state.velAtual + props.fator}
            )
        )
    }
    render(){
        return(
            <div>
                <h1>Meu Carro</h1>
                <p> Modelo: {this.modelo}</p>
                <p> Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p> Vel. Atual: {this.state.velAtual}</p>
                <button onClick={this.ld}>{this.state.ligado ? 'Desligar Carro' : 'Ligar Carro'}</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>
            </div>
        )
    }
    
};
