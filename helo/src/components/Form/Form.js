import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import noImage from '../../images/no_image.jpg';


class Form extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            img: '',
            content: '',
            imgPreview: '',
            redirect: false
        }

        this.handlePost = this.handlePost.bind(this);
        this.newPost = this.newPost.bind(this);

    }

    handlePost(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newPost(){
        let {title, img, content} = this.state;
        axios.post(`/posts/`, {title, img, content}).then(res => {
            this.setState({redirect: true})
        })
    }
    

    render() {
        let {img} = this.state;
        let preview = <img className='new-post-img' src={noImage}/>;
        if (img) {
          preview = (<img className='new-post-img' src={img} />);
        }
        if(this.state.redirect){
            return(<Redirect to='/dash' />)
        }
        return(
            <div className='form-parent'>
                <Nav />
                <div className='form-content'>
                    <p>
                        Title: 
                        <input name='title' className='title' onChange={this.handlePost}/>
                    </p>
                    {preview}
                    <p>
                        Image: 
                        <input name='img' className='img' onChange={this.handlePost}/>
                    </p>
                    <p>
                        Content: 
                        <input name='content' className='content' onChange={this.handlePost}/>
                    </p>
                    <button className='post' onClick={this.newPost}>Post</button>
                </div> 
            </div> 
        )
    }
}

function mapStateToProps(state){
    return {
        id: state.id
    }
}

export default connect(mapStateToProps)(Form);