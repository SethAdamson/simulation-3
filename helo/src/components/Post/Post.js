import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

export default class Post extends Component {
    constructor(){
        super();

        this.state = {
            title: '',
            img: '',
            content: '',
            username: '',
            pic: '',
        }

        this.getSingle = this.getSingle.bind(this);

    }

    componentDidMount(){
        this.getSingle();
    }

    getSingle(){
        axios.get(`/single/${this.props.match.params.postid}`).then(res => {
            // console.log(res.data)
            this.setState({
                title: res.data[0].title,
                img: res.data[0].img,
                content: res.data[0].content,
                username: res.data[0].username,
                pic: res.data[0].pic,
            })
        })
    }

    render() {
        // console.log(this.props.match, this.state)
        let {title, username, img, content, pic} = this.state;
        return(
            <div className='post-parent'>
                <Nav />
                <div className='post-content'>
                    <p>{title}</p>
                    <p>{img}</p>
                    <p>{content}</p>
                    <p>{username}</p>
                    <p>{pic}</p>
                </div> 
            </div> 
        )
    }
}