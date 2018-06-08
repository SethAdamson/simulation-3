import React, {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Form extends Component {
    render() {
        return(
            <div className='form-parent'>
                <div className='form-content'>
                    <Nav />
                </div> 
            </div> 
        )
    }
}