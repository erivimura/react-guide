import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

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
                        <h1 className="subheader">Soy home</h1>                        
                    </div>

                    <Sidebar />

                    <div className="clearfix"></div>
                </div>
            </React.Fragment>                  
        );
    }

}

export default Home;