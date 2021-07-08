import React, {Component} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    }

    componentWillMount() {        
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + "article/" + id)
        .then(res => {

            this.setState({
                article: res.data.article,
                status: 'success'
            })

        })
    }
  
    render() {        
        
        return ( 
            <React.Fragment>
                <div className="center">
                    <section id="content">

                        {this.state.article && 
                        
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {this.state.article.image !== null ? (
                                    <img src={this.url + "get-image/" + this.state.article.image} alt={this.state.article.title} />
                                ) : (
                                    <img src="https://via.placeholder.com/150" alt="Sin imagen" />
                                )}
                            </div>
            
                                <h1 className="subheader">{this.state.article.title}</h1>
                                <span className="date">
                                    <Moment fromNow>{this.state.article.date}</Moment>
                                </span>
                                <p>
                                    {this.state.article.content}
                                </p>

                                <a href="#" className="btn btn-danger">Eliminar</a>
                                <a href="#" className="btn btn-warning">Editar</a>
                                
                                <div className="clearfix"></div>
                            </article>

                        }  

                        {!this.state.article && 
                            <div id="article">
                                <h2 className="subheader">
                                    No existe el articulo
                                </h2>
                            </div>
                        }                          
                        
                    </section>

                    <Sidebar></Sidebar>

                    <div className="clearfix"></div>
                </div>
            </React.Fragment>                  
        );
    }

}

export default Article;