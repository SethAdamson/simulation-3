import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Auth from './components/Auth/Auth';
import Post from './components/Post/Post';


export default (
    <Switch>
        <Route component={Auth} path='/' exact />    
        <Route component={Dashboard} path='/dash' />    
        <Route component={Form} path='/new' />    
        <Route component={Post} path='/post/:postid' />    
    </Switch>
)