import React from 'react';
import { Component } from 'react';
import './styles.css'


export default class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: "x",
            positions: ["", "", "", "", "", "", "", "", ""]
        }

    }

	/*checks the game winner*/
    winner(){
        const msg = " Winner is: " + this.state.toggle;
        /*check from the central position */
        if(this.state.positions[4]!==""){
        if(this.state.positions[0]===this.state.positions[4] && this.state.positions[4]===this.state.positions[8]||
         this.state.positions[2]===this.state.positions[4] && this.state.positions[4]===this.state.positions[6]||
         this.state.positions[1]===this.state.positions[4] && this.state.positions[4]===this.state.positions[7]||
         this.state.positions[3]===this.state.positions[4] && this.state.positions[4]===this.state.positions[5]
        ){
        alert(msg)
        this.setState({positions:["", "", "", "", "", "", "", "", ""]});
        this.setState({toggle:"x"});
        }
        /*check from the inicial position */
    	}else if(this.state.positions[0]!==""){
    	if(this.state.positions[1]===this.state.positions[0] && this.state.positions[0]===this.state.positions[2]||
        this.state.positions[3]===this.state.positions[0] && this.state.positions[0]===this.state.positions[6]
       	){
        alert(msg);
        this.setState({positions:["", "", "", "", "", "", "", "", ""]});
        this.setState({toggle:"x"});
       	}
       	/*check from the last position */
    	}else if(this.state.positions[8]!=="")
    	if(this.state.positions[2]===this.state.positions[8] && this.state.positions[8]===this.state.positions[5]||
        this.state.positions[6]===this.state.positions[8] && this.state.positions[8]===this.state.positions[7]
       	){
        alert(msg);
        this.setState({positions:["", "", "", "", "", "", "", "", ""]});
        this.setState({toggle:"x"});
       	}
    }

	/*set states from the play and change the palyer*/
    click(e, position) {
	/*check if the positon in state.position is empty, else alert invalid*/
        if (this.state.positions[position] == "") {
            this.state.positions.splice(position, 1, this.state.toggle);
            this.setState({ positions: this.state.positions });
            this.winner()
            if (this.state.toggle == "x") {
                this.setState({ toggle: "o" })
            } else {
                this.setState({ toggle: "x" })
            };
        } else { alert("invalid") }
    }

    render() {
        return (
            <div className="container ">
                <h2>Tic Tac</h2>
                <p><strong>{this.state.toggle}</strong> play!</p>
                <div className="grid">
                    <div id="zero" onClick={(e) => this.click(e, 0)} >{this.state.positions[0]}</div>
                    <div id="one"  onClick={(e) => this.click(e, 1)} >{this.state.positions[1]}</div>
                    <div id="two"  onClick={(e) => this.click(e, 2)} >{this.state.positions[2]}</div>
                    <div id="three"onClick={(e) => this.click(e, 3)} >{this.state.positions[3]}</div>
                    <div id="four" onClick={(e) => this.click(e, 4)} >{this.state.positions[4]}</div>
                    <div id="five" onClick={(e) => this.click(e, 5)} >{this.state.positions[5]}</div>
                    <div id="six"  onClick={(e) => this.click(e, 6)} >{this.state.positions[6]}</div>
                    <div id="seven"onClick={(e) => this.click(e, 7)} >{this.state.positions[7]}</div>
                    <div id="eight"onClick={(e) => this.click(e, 8)} >{this.state.positions[8]}</div>
                </div>
            </div>
        )
    }
}
