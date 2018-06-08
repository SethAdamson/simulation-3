import React, {Component} from 'react';
import Nav from '../Nav/Nav';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super ();

        this.state = {
            search: '',
            myPosts: true,
            posts: [],
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.toggle = this.toggle.bind(this);
        this.getPosts = this.getPosts.bind(this);
        this.resetPosts = this.resetPosts.bind(this);

    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts(){
        let {search, myPosts} = this.state;
        axios.get(`/posts/?search=${search}&&userposts=${myPosts}`).then(res => {
            this.setState({posts: res.data})
        });
    }

    resetPosts(){
        let {myPosts} = this.state;
        let reset = '';
        axios.get(`/posts/?search=${reset}&&userposts=${myPosts}`).then(res => {
            this.setState({posts: res.data, search: ''})
        });
    }

    handleSearch(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    toggle() {
        this.setState({myPosts: !this.state.myPosts})
    }

    render() {
        let display = this.state.posts.map(post => {
            return(
                <div className='dash-posts' key={post.id}>
                    <Link to={`/post/${post.id}`} >
                        <div className='dash-info'>
                            <p>{post.title}</p>
                            <p>{post.username}</p>
                            <img className='mini-img' src={post.pic} alt='profile' />
                        </div> 
                    </Link>
                </div> 
            )
        })
        return(
            <div className='dash-parent'>
                <div className='dash-content'>
                    <Nav />
                    <div className='dash-search'>
                        <input value={this.state.search} name='search' className='search-input' onChange={this.handleSearch}/>
                        <button className='search-button' onClick={this.getPosts}>Search</button>
                        <button className='reset' onClick={this.resetPosts}>Reset</button>
                        <input type='checkbox' className='myPosts' checked={this.state.myPosts} onChange={this.toggle} />
                    </div> 
                    <main>
                        {display}
                    </main>
                </div> 
            </div> 
        )
    }
}