import React, { Component } from 'react';
import Back from './Back';

import '../App.css';
const link = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.71873588948!2d72.54380178096999!3d23.038827336453853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d4b%3A0x6853ee97a9a2996b!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1642430281173!5m2!1sen!2sin';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='contact_page'>
                <Back home='Contact us' title='' />
                <div className='contact_block'>
                    <iframe src={link}></iframe>
                </div>

                <div className="contact">
                    <div className="left">
                        <div>
                            <i className="fa fa-home" style={{ fontSize: "24px", color: "indianred" }}></i>
                            <span className="span">Gr Flr, Sharanya Avenue, Darpan Six Rd,</span>
                            <h4 className="margin">Ahmadabad ,Gujrat</h4>
                        </div>
                        <div>
                            <i className="fa fa-phone" style={{ fontSize: "24px", color: "indianred" }}></i>
                            <span>+91 8923828845</span>
                            <h4>Morning 10:00 AM to 6:00 PM</h4>

                        </div>
                        <div>
                            <i className="fa fa-envelope" style={{ fontSize: "24px", color: "indianred" }}></i>
                            <span>info@darshittarapara.com</span>
                            <h4>Email us any Query</h4>
                        </div>
                    </div>
                    <div id="confirm" className="right">
                        <form action="" id="form">
                            <input id="name" type="text" placeholder="Enter your Name" />
                            <input id="email" type="email" placeholder="Enter your email" />
                            <input id="current-password" type="password" placeholder="Enter your Password" />
                            <textarea id="message" rows="10" coloum="9" placeholder="Message"  ></textarea>
                            <input id="SUBMIT" className='sub' type="submit" value="Send Message" />

                        </form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;
