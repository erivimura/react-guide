import React, {Component} from 'react';

class Pelicula extends Component {

    state = {
        peliculas: [
            { titulo: '',  imagen: ''},
            { titulo: '',  imagen: ''},
            { titulo: '',  imagen: ''}
        ],
        nombre: 'Erika Munini'
    }
    
    render() {

        const { titulo, imagen } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={imagen} alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span class="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>

                <div class="clearfix"></div>
            </article>         
        );
    }

}

export default Pelicula;