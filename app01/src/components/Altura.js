import React from 'react'

export default function Altura(props){
   
    return(
            <div>
                <label>Altura</label>
                <input type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
            </div>
        )
    
}