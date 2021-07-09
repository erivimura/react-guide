import React, {Component} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import Global from '../Global';
import { Redirect } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';


class CreateArticle extends Component {

    titleRef = React.createRef();
    contentRef = React.createRef();

    url = Global.url;

    state = {
        article: {},
        status: null,
        selectedFile:  null
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido',
                alpha_num_space: 'Solo numeros, letras y espacios'
            }
        });
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

        if(!this.validator.allValid()) {

            this.setState({
                status: 'failed'
            })

            this.validator.showMessages();
            this.forceUpdate();
            return;
        }

        axios.post(this.url + "save", this.state.article)
        .then(res => {

            if(res.data.article) {

                this.setState({
                    article: res.data.article,
                    status: 'waiting'
                })

                //Subir imagen
                if(this.state.selectedFile !== null) {

                    //sacar id del articulo
                    var articleId = this.state.article._id;

                    //crear form data con el fichero
                    const formData = new FormData();
                    formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );

                    //llamar ajax
                    axios.post(this.url + 'upload-image/' + articleId, formData)
                    .then(res => {
                        if (res.data.article) {
                            this.setState({
                                article: res.data.article,
                                status: 'success'
                            });
                        } else {
                            this.setState({
                                article: res.data.article,
                                status: 'failed'
                            });
                        }
                    });


                    this.setState({
                        article: res.data.article,
                        status: 'success'
                    });

                } else {
                    this.setState({
                        status: 'success'
                    });
                }


            } else {

                this.setState({
                    status: 'failed'
                })

            }

        })
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
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

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}></textarea>

                            {this.validator.message('content', this.state.article.content, 'required|alpha_num_space')}
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <div className="clearfix"></div>
                            <input type="file" name="file0" onChange={this.fileChange} />
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