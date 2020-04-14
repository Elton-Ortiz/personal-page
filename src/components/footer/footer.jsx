import React, { Component } from 'react'
import './styles.css'

export default class  Header extends Component {
    render(){

        return(
            <div>
         
        <div className="footer">
       <ul>
         <a href="#"> <li><img src={require("../../_assets/img/icons/facebook.png")} alt="facebook"/></li></a>
         <a href="#"> <li><img src={require("../../_assets/img/icons/instagran.png")} alt="instagran icon"/></li></a>
         <a href="#"> <li><img src={require("../../_assets/img/icons/github.png")} alt="github icon"/></li></a>
         <a href="#"> <li><img src={require("../../_assets/img/icons/linkedin.png")} alt="linkedin icon"/></li></a>

       </ul>
        </div>
        </div>
    )
}
}