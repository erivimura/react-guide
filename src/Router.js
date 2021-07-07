import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Peliculas from './components/Peliculas';
import Error from './components/Error';
import Article from './components/Article';
import Search from './components/Search';

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
                        <Route exact path="/blog/articulo/:id" component={Article} /> 
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (<Redirect to={'/blog/busqueda/' + search}></Redirect>)
                            }
                        } />
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