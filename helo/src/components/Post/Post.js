import React, {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Post extends Component {
    render() {
        return(
            <div className='post-parent'>
                <div className='post-content'>
                    <Nav />
                </div> 
            </div> 
        )
    }
}