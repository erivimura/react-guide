import React, {Component} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';

class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    url = Global.url;

    state = {
        article: {},
        status: null
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    saveArticle = (e) => {
        e.preventDefault();

        this.changeState();

        axios.post(this.url + "save", this.state.article)
        .then(res => {

            if(res.data.article) {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                })

            } else {

                this.setState({
                    status: 'failed'
                })

            }

        })
    }
  
    render() {       
        
        if(this.state.status === 'success') {
            return <Redirect to={'/blog'}></Redirect>;
        }
        
        return ( 
            
            <div className="center">
                <section id="content">

                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <div className="clearfix"></div>
                            <input type="file" name="file0" />
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success" />

                    </form>                                            
                    
                </section>

                <Sidebar></Sidebar>

                <div className="clearfix"></div>
            </div>
                 
        );
    }

}

export default CreateArticle;