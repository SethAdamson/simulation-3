import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUser, clearData} from '../../ducks/reducer';
import axios from 'axios';

class Nav extends Component {
    constructor(){
        super();

        this.logout = this.logout.bind(this);

    }


    componentDidMount(){
        this.userInfo();
    }

    userInfo(){
        axios.get('/api/auth/me').then(res => {
            console.log(res.data);
            // this.updateUser(res.data[0].username, res.data[0].password, res.data[0].pic);
        })
    }

    logout(){
        axios.post('/api/auth/logout').then(res => {
            this.clearData();
        })
    }

    render(){
        return (
            <div className='post-parent'>
                <div className='nav-content'>
                    <img src={this.props.pic} alt='profile' />
                    <p className='username'>{this.props.username}</p>
                    <Link to='/dash'>
                        <button className='home'>Home</button>
                    </Link>
                    <Link to='/new'>
                        <button className='new'>New Post</button>
                    </Link>
                    <Link to='/'>
                        <button className='logout' onClick={this.logout}>Logout</button>
                    </Link>
                </div> 
            </div> 
        )
    }
}


function mapStateToProps(state) {
    console.log(state);
    return {
        username: state.username,
        password: state.password,
        pic: state.pic
    };
}

export default connect(mapStateToProps, {updateUser, clearData})(Nav);