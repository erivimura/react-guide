import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {
 
    render() {
        
        var btnString = "Ir al blog";

        return ( 
            <React.Fragment>

                <Slider 
                    title="Bienvenido al Curso de React con Víctor Robles de victorroblesweb.es"
                    btn={btnString}
                    size="slider-big"
                /> 

                <div className="center">        
                    
                    <div id="content">                        
                        <h1 className="subheader">Ultimos articulos</h1>   
                        <Articles home={true}></Articles>                     
                    </div>

                    <Sidebar />

                    <div className="clearfix"></div>
                </div>
            </React.Fragment>                  
        );
    }

}

export default Home;