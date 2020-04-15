import React from 'react';
import { Component } from 'react';
import Card from '../../pages/root/card/card';
import { Link } from 'react-router-dom'

import './styles.css'


export default class  Container extends Component{
    constructor(props){
        super(props);
        this.first = {
            name:"TiTac",
            text:"Este é o clássico jogo da velha"
        }
         this.second = {
            name:"ton2",
            text:"dsfdfsdf"
        }
         this.third = {
            name:"ton3",
            text:"dsfdfsdf"
        }
    }
    render(){
        return(
            <div className="container ">
                <div className=" flex">
                    <div><Link to="/Tictac" className="link" ><Card  name={this.first.name} text={this.first.text}/></Link> </div>       
                    <div><Card  name={this.second.name} text={this.second.text}/> </div>
                    <div><Card  name={this.third.name} text={this.third.text}/> </div>
                </div>
            </div> 
        )
}
}


