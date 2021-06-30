import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

class Router extends Component {

    render() {

        return(            

            <BrowserRouter>

                <Header />  

                    {/**Configurar rutas y paginas */}

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} /> 
                        <Route exact path="/blog" component={Blog} />  
                        <Route exact path="/formulario" component={Formulario} />
                        <Route exact path="/peliculas" component={Peliculas} />

                        <Route component={Error} />
                    </Switch>

                <Footer />

            </BrowserRouter>

        );
    }

}

export default Router;