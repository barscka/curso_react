import React, { useReducer, useState } from 'react';
import Dados from './Dados';
import Relogio from './Relogio';
import Nota from './Nota';
import Resultado from './Resultado';

export default function Corpo() {
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
    const [carro, setCarro]=useState('')
    const listaCarros=carros.map(
        (c)=>
            <option>{c.categoria} - {c.modelo} : R$ {c.preco}</option>
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

  const [form, setForm]=useState({"nome": "", "sobrenome":"","idade":"", "peso": "", "altura":"","cidade":""})
  const handleFormChange=(e)=>{
    if(e.target.getAttribute('name')== 'fnome'){
        setForm({"nome": e.target.value, "sobrenome": form.sobrenome, "idade": form.idade, "peso": form.peso, "altura": "", "cidade": form.cidade})
    }else if (e.target.getAttribute('name')== 'fsobrenome'){
        setForm({"nome": form.nome, "sobrenome": e.target.value, "idade": form.idade, "peso": form.peso, "altura": "", "cidade": form.cidade})
    }else if (e.target.getAttribute('name') =='fidade'){
        setForm({"nome": form.nome, "sobrenome": form.sobrenome, "idade": e.target.value, "peso": form.peso, "altura": "", "cidade": form.cidade})
    }else if (e.target.getAttribute('name') =='fpeso'){
        setForm({"nome": form.nome, "sobrenome": form.sobrenome, "idade": form.idade, "peso": e.target.value, "altura": "", "cidade": form.cidade})
    }else if (e.target.getAttribute('name') =='faltura'){
        setForm({"nome": form.nome, "sobrenome": form.sobrenome, "idade": form.idade, "peso": form.peso, "altura": e.target.value, "cidade": form.cidade})
    }else if (e.target.getAttribute('name') =='fcidade'){
        setForm({"nome": form.nome, "sobrenome": form.sobrenome, "idade": form.idade, "peso": form.peso, "altura": form.altura, "cidade": e.target.value})
    }
    
  }
  setInterval(mudaCor, 1000)

const [notas,setNotas]=useState({"nota1": "0", "nota2": "0","nota3": "0","nota4": "0"})
const handleSetNotas=(e)=>{
      if(e.target.getAttribute('name')== 'nota1'){
        setNotas({"nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4})        
}else if(e.target.getAttribute('name')== 'nota2'){
        setNotas({"nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3, "nota4": notas.nota4})        
}else if(e.target.getAttribute('name')== 'nota3'){
        setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value, "nota4": notas.nota4})        
}else if(e.target.getAttribute('name')== 'nota4'){
        setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.target.value})        
  }
}

let somaNotasTotal = (parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4))
    
    return(
        <section className='caixa'>
            <p className='relogio'><Relogio/></p>
            <h2 style={{color:'#f00', fontSize:'4em'}}> Curso react</h2>
            <p style={textoDestaque}> Treinamento de componentes</p>
            <label>Nome</label>
            <input type="text" name="fnome" value={form.nome} onChange={(e)=>handleFormChange(e)}/>
            <label>Sobrenome</label>
            <input type="text" name="fsobrenome" value={form.sobrenome} onChange={(e)=>handleFormChange(e)}/>
            <label>Idade</label>
            <input type="text" name="fidade" value={form.idade} onChange={(e)=>handleFormChange(e)}/>
            <label>Peso</label>
            <input type="text" name="fpeso" value={form.peso} onChange={(e)=>handleFormChange(e)}/>
            <label>Altura</label>
            <input type="text" name="faltura" value={form.altura} onChange={(e)=>handleFormChange(e)}/>
            <label>Cidade</label>
            <input type="text" name="fcidade" value={form.cidade} onChange={(e)=>handleFormChange(e)}/>
            
            <Dados 
                nome={form.nome}
                sobrenome={form.sobrenome}
                idade={form.idade} 
                peso={form.peso}
                altura={form.altura}
                cidade={form.cidade}
                imc={imc}                
                />
            <p >Lista de carros</p>
            <select value={carros} onChange={(e)=> setCarro(e.target.value)}>
                {listaCarros}
            </select>
            <p> Carro selecionado:  {carro}</p>            

            <h3>Notas:</h3><br></br>
            {/* Notas */}
            <Nota num={1} nome={'nota1'} nota={notas.nota1} setNota={handleSetNotas}/>
            <Nota num={2} nome={'nota2'} nota={notas.nota2} setNota={handleSetNotas}/>
            <Nota num={3} nome={'nota3'} nota={notas.nota3} setNota={handleSetNotas}/>
            <Nota num={4} nome={'nota4'} nota={notas.nota4} setNota={handleSetNotas}/>
            
            <Resultado somaNotas={somaNotasTotal}/>
            
            <p style={retCor(cor)}  className='texto'>Muito obrigado por usar nossos serviços!</p>
            <a href='#' target="_blank">Sobre nós</a>
        </section>        
    )
}
