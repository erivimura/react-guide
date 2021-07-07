import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Article extends Component {
  
    render() {        
        
        return ( 
            <React.Fragment>

                <Slider 
                    title="Articulo"
                    size="slider-small"
                /> 

                <div className="center">        
                    
                    <div id="content">  

                        <h1>Holaaa</h1>
                      
                    </div>

                    <Sidebar
                        blog="false"
                    />

                    <div className="clearfix"></div>
                </div>
            </React.Fragment>                  
        );
    }

}

export default Article;