import React from 'react'

export default function Peso(props){
    return(
        <div>
            <label>Peso</label>
            <input type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
        </div>
    )
}