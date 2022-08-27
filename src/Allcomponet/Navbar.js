import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import Contact from './Contact';
import Book from './Book';
import About from './About';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='router_parent'>
                <div className='router'>
                    <Router>
                        <div className='position'>
                            <ul>
                                <li>
                                    <Link to='/' style={{ textDecoration: 'none' ,color:'white'}}>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about' style={{ textDecoration: 'none' ,color:'white'}}>about</Link>
                                </li>
                                <li>
                                    <Link to='/contact' style={{ textDecoration: 'none' ,color:'white'}}>contact</Link>
                                </li>
                                <li>
                                    <Link to='/Books' style={{ textDecoration: 'none' ,color:'white'}}>Books</Link>
                                </li>
                            </ul>



                        </div>


                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/Books' element={<Book />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Navbar;