import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

class Router extends Component {

    render() {

        var btnString = "Ir al blog";

        return(            

            <BrowserRouter>

                <Header />

                <Slider 
                    title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    btn={btnString}
                />

                <div className="center">
                    <section id="content">
                        <section className="componentes">
                        
                            {/**Configurar rutas y paginas */}

                            <Switch>
                                <Route exact path="/" component={Peliculas} />
                                <Route exact path="/home" component={Peliculas} />  
                                <Route exact path="/ruta-prueba" component={MiComponente} />

                                <Route component={Error} />
                            </Switch>

                        </section>
                    </section>

                    <Sidebar />

                    <div className="clearfix"></div>

                </div>

                <Footer />

            </BrowserRouter>

        );
    }

}

export default Router;