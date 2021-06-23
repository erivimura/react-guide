import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component {

    state = {
        contador: 0
    }

    suma = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });        
    }

    resta = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        }); 
    }

    render() {
        return (
            <div id="peliculas">
                <h4>Soy peli</h4>
                <MensajeEstatico />
                <p>Contador: {this.state.contador}</p>
                <p>
                    <button onClick={this.suma}>Suma</button>
                    <button onClick={this.resta}>Resta</button>
                </p>
            </div>            
        );
    }

}

export default Peliculas;