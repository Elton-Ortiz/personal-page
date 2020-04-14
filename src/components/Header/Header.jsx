import React, { Component } from 'react'
import '../Header/styles.css'

export default class  Header extends Component {
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
openMenu(){
    if (this.state.open) {
      return("navlat")
    }else{
        return("nav")
    }
}

    render(){

        return(
            <div>
            <div id={this.openMenu()}>
           <nav>
               <ul>
                   <a href="#" className="click"><li>Contato</li></a>
                   <a href="#" className="click"><li>Quem Sou</li></a>
                   <a href="#" className="click"><li>Meus Projetos</li></a>      
               </ul>
           </nav>
            </div>
        <div className="Header">
        <h1>- Ton Ortiz -</h1>
        </div>
            <div className="menu">
                <div className="anime kebab" onClick={()=>this.setState({open:!this.state.open})}>
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
        </div>
    )
}
}
