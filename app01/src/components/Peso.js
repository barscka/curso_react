import React from 'react'

export default class Peso extends React.Component{
    constructor(){
        super()
    }
    render(){
    return(
        <div>
            <label>Peso</label>
            <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
        </div>
    )
    }
}