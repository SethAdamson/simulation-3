import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
    console.log(props);
    return (
            <div className='post-parent'>
                <div className='nav-content'>
                    <img src={props.pic} alt='profile' />
                    <p className='username'>{props.username}</p>
                    <Link to='/dash'>
                        <button className='home'>Home</button>
                    </Link>
                    <Link to='/new'>
                        <button className='new'>New Post</button>
                    </Link>
                    <Link to='/'>
                        <button className='logout'>Logout</button>
                    </Link>
                </div> 
            </div> 
    )
}

function mapStateToProps(state) {
    console.log(state);
    return {
        username: state.username,
        password: state.password,
        pic: state.pic
    };
}

export default connect(mapStateToProps)(Nav);