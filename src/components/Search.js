import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {
  
    render() {        
        var searched = this.props.match.params.search;

        return ( 
            <React.Fragment>

                <Slider 
                    title={"Busqueda: " + searched}
                    size="slider-small"
                /> 

                <div className="center">        
                    
                    <div id="content">  

                        <Articles 
                            search={searched} 
                        />
                      
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

export default Search;