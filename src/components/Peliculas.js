import React, {Component} from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';        

class Peliculas extends Component {

    state = {}

    componentWillMount(){
        this.setState({
            peliculas: [
                { titulo: 'Peli 1',  imagen: 'https://via.placeholder.com/150'},
                { titulo: 'Peli 2',  imagen: 'https://via.placeholder.com/150'},
                { titulo: 'Peli 3',  imagen: 'https://via.placeholder.com/150'}
            ],
            nombre: 'Erika Munini',
            favorita: {}
        });
    }

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Nombre cambiado";

        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula) => {
        this.setState({
            favorita: pelicula
        })
    }
    
    render() {
        return (
            <React.Fragment>

                <Slider 
                    title="Peliculas"
                    size="slider-small"
                /> 

                <div className="center">        
                    
                    <div id="content">

                        <h2 className="subheader">Listado de Peliculas</h2>
                        <p> Seleccion de peliculas de {this.state.nombre}</p>
                        <p>
                            <button onClick={this.cambiarTitulo}>Cambiar Titulo</button>
                        </p>
                        {this.state.favorita.titulo ? (
                                <p className="favorita">
                                    <strong>La pelicula favorita es: </strong>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                            ) : (
                                <p>No hay pelicula favorita</p>
                            )
                        }
                        

                        <div id="articles">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return(
                                    <Pelicula 
                                        key={i} 
                                        pelicula={pelicula} 
                                        marcarFavorita={this.favorita} 
                                    />
                                );
                            })
                        }  
                        </div>

                    </div>

                    <Sidebar
                        blog="true"
                    />

                    <div className="clearfix"></div>
                </div>              

            </React.Fragment>           
        );
    }

}

export default Peliculas;