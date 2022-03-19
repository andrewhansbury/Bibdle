import './Game.css';

import React, { Component } from 'react';

class Game extends Component {
    constructor(){
        super();
        this.state = {
                        guess_1:"",
                        guess_2:"",
                        guess_3:"",
                        guess_4:"",
                        guess_5:"",
                    }
    }

    addLetter(letter){
        
    }

    letterClick(event){
        // if (event.key === "q")
        // addLetter(event.target.innerText);
        console.log(event.target.innerText);

    }

    letterPress(event){
        this.addLetter(event.key);
        console.log(event.key);
    }


    render() {
        return (
            document.addEventListener("keydown", this.letterPress),


             <div>
                <table className='guess_1'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <table className='guess_2'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <table className='guess_3'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <table className='guess_4'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <table className='guess_5'>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            
 

            
            <div className='keyboard' onKeyDown={this.letterPress}
            tabIndex="0">
                
                <button  onClick={this.letterClick}>q</button>
                <button onClick={this.letterClick}>w</button>
                <button onClick={this.letterClick}>e</button>
                <button onClick={this.letterClick}>r</button>
                <button onClick={this.letterClick}>t</button>
                <button onClick={this.letterClick}>y</button>
                <button onClick={this.letterClick}>u</button>
                <button onClick={this.letterClick}>i</button>
                <button onClick={this.letterClick}>o</button>
                <button onClick={this.letterClick}>p</button>

                <br/>

                <button onClick={this.letterClick}>a</button>
                <button onClick={this.letterClick}>s</button>
                <button onClick={this.letterClick}>d</button>
                <button onClick={this.letterClick}>f</button>
                <button onClick={this.letterClick}>g</button>
                <button onClick={this.letterClick}>h</button>
                <button onClick={this.letterClick}>j</button>
                <button onClick={this.letterClick}>k</button>
                <button onClick={this.letterClick}>l</button>

                <br/>

                <button onClick={this.letterClick}>z</button>
                <button onClick={this.letterClick}>x</button>
                <button onClick={this.letterClick}>c</button>
                <button onClick={this.letterClick}>v</button>
                <button onClick={this.letterClick}>b</button>
                <button onClick={this.letterClick}>n</button>
                <button onClick={this.letterClick}>m</button>
           

                </div>
                
            </div>
           
           
           
        );
    }
}

export default Game;