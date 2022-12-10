import React from 'react'

export default class Altura extends React.Component{
   render(){
    return(
            <div>
                <label>Altura</label>
                <input type="text" value={this.props.a} onChange={(e)=>{this.props.sa(e.target.value)}}/>
            </div>
        )
   }
}