import React, {Component} from 'react';
import axios from 'axios';
import Global from '../Global';
import Moment from 'react-moment';
import 'moment/locale/es';
import { Link} from 'react-router-dom';


class Articles extends Component {

    url = Global.url;

    state = {
        articles: {},
        status: null
    }

    componentWillMount() {
        var home = this.props.home;

        if (home) 
        {
            this.getLastArticles();
        } else {
            this.getArticles();
        }
    }

    getArticles = () => {
        axios.get(this.url + "articles")
        .then(res => {

            this.setState({
                articles: res.data.articles,
                status: 'success'
            })

        })
    }

    getLastArticles = () => {
        axios.get(this.url + "articles/3")
        .then(res => {

            this.setState({
                articles: res.data.articles,
                status: 'success'
            })

        })
    }

 
    render() {   
        
        if(this.state.articles.length >= 1) {   
            
            var listArticles = this.state.articles.map((article) => {
                return(                    
                    <article className="article-item" id="article-template" key={article._id}>
                        <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url + "get-image/" + article.image} alt={article.title} />
                            ) : (
                                <img src="https://via.placeholder.com/150" alt="Sin imagen" />
                            )}
                        </div>
    
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>

                        <Link to={'/blog/articulo/'+article._id}>Leer más</Link>

                        <div className="clearfix"></div>
                    </article>
                )
            })

            return ( 
                <div id="articles">
                    {listArticles}
                </div>               
            );
        } else if(this.state.articles.length === 0 && this.state.status === 'success') {
            return ( 
                <div id="articles">
                    <h2 className="subheader">Sin articulos</h2>
                </div>               
            );
        } else {
            return ( 
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                </div>               
            );
        }
    }

}

export default Articles;

/*


{ this.state.status === 'success' && 
                            <React.Fragment>
                            { this.state.articles.map((article) => {
                                return (<h1 key={article._id}>{article.title}</h1>)
                            })}
                            </React.Fragment>
                        }*/