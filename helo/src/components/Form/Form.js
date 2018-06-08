import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


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
        // this.handleImg = this.handleImg.bind(this);
        this.newPost = this.newPost.bind(this);

    }

    handlePost(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleImg(e){
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let file = e.target.value;
    
    //     reader.onloadend = () => {
    //       this.setState({
    //         img: file,
    //         imagePreviewUrl: reader.result
    //       });
    //     }
    
    //     reader.readAsDataURL(file)
    // }

    newPost(){
        let {title, img, content} = this.state;
        axios.post(`/posts/${this.props.id}`, {title, img, content}).then(res => {
            this.setState({redirect: true})
        })
    }
    

    render() {
        let {imgPreview} = this.state;
        let preview = null;
        if (imgPreview) {
          preview= (<img src={imgPreview} />);
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