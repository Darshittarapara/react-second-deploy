import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../App.css';
//const nAME = ['darshit']
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='header'>

                <div className='logo'>
                    <img src={logo} alt='' width={250} height={40} />
                </div>

                <div className='btn'>
                    <button type='button'>
                        sign up
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;