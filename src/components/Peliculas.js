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
    
    render() {
        return (
            <div id="article-template" className="article-item">

                <h2 className="subheader">Peliculas</h2>
                <p> Seleccion de peliculas de {this.state.nombre}</p>

                {
                    this.state.peliculas.map((pelicula, i) => {
                        return(
                            <Pelicula key={i} pelicula={pelicula} />
                        );
                    })
                }                

            </div>            
        );
    }

}

export default Peliculas;