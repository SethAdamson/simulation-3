import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from '../../ducks/reducer';

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            redirect: false,
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.createUser = this.createUser.bind(this);
        this.getUser = this.getUser.bind(this);

    }

    handleLogin(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    createUser(){
        let {username, password} = this.state;
        let pic = `https://robohash.org/${username}.png`
        axios.post('/user/create', {username, password, pic}).then(res => {
            // console.log(res.data[0].username);
            this.props.updateUser(res.data[0].username, res.data[0].password, res.data[0].pic);
            this.setState({redirect: true});
        })
    }

    getUser(){
        let {username, password} = this.state;
        axios.post('/user/get', {username, password}).then(res => {
            // console.log(res.data[0].username);
            this.props.updateUser(res.data[0].username, res.data[0].password, res.data[0].pic);
            this.setState({redirect: true});
        })
    }

    render() {
        console.log(this.state);
        if(this.state.redirect){
            return(<Redirect to='/dash' />)
        }
        return(
            <div className='auth-parent'>
                <div className='auth-content'>
                    <p>
                        Username: 
                        <input name='username' className='username' onChange={this.handleLogin} />
                    </p>
                    <p>
                        Password: 
                        <input name='password' className='password' onChange={this.handleLogin} />
                    </p>
                        <button className='login' onClick={this.getUser}>Login</button>
                        <button className='register' onClick={this.createUser}>Register</button>
                </div> 
            </div> 
        )
    }
}

export default connect(null, {updateUser})(Auth);