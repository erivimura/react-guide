import React, {Component} from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {
        peliculas: [
            { titulo: 'Peli 1',  imagen: 'https://via.placeholder.com/150'},
            { titulo: 'Peli 2',  imagen: 'https://via.placeholder.com/150'},
            { titulo: 'Peli 3',  imagen: 'https://via.placeholder.com/150'}
        ],
        nombre: 'Erika Munini'
    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Nombre cambiado";

        this.setState({
            peliculas: peliculas
        })
    }
    
    render() {
        return (
            <React.Fragment>

                <h2 className="subheader">Peliculas</h2>
                <p> Seleccion de peliculas de {this.state.nombre}</p>
                <p><button onClick={this.cambiarTitulo}>Cambiar Titulo</button></p>

                <div id="articles">
                {
                    this.state.peliculas.map((pelicula, i) => {
                        return(
                            <Pelicula key={i} pelicula={pelicula} />
                        );
                    })
                }  
                </div>              

            </React.Fragment>           
        );
    }

}

export default Peliculas;