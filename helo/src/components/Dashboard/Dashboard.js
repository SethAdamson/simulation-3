import React, {Component} from 'react';
import Nav from '../Nav/Nav';

export default class Dashboard extends Component {
    render() {
        return(
            <div className='dash-parent'>
                <div className='dash-content'>
                    <Nav />
                </div> 
            </div> 
        )
    }
}