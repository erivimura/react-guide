import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {
 
    render() {
        
        return ( 
            <React.Fragment>

                <Slider 
                    title="Blog"
                    size="slider-small"
                /> 

                <div className="center">        
                    
                    <div id="content">                        
                        <h1 className="subheader">Soy blog</h1>                        
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

export default Blog;