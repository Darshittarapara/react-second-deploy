import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='footer'>
                <div className='logo'>
                    <img src={logo} alt='' width={250} height={40} />
                </div>
                <div className='link'>
                    <Router>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>about</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                            <li>
                                <Link to='/Books'>Books</Link>
                            </li>
                        </ul>
                    </Router>
                </div>
                <div className='social-icon'>

                    <span className="fa fa-facebook "></span>
                    <a href='https://github.com/Darshittarapara?tab=repositories'>
                        <span className="fa fa-github "></span>
                    </a>

                    <span className="fa fa-instagram "></span>
                    <a href='https://www.linkedin.com/in/darshit-tarapara-30960a19b/'>
                        <span className="fa fa-linkedin "></span>
                    </a>

                </div>
            </div>
        );
    }
}

export default Footer;