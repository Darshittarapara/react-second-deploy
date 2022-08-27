import React, { Component } from 'react';
import '../App.css'
class Back extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='background'>
                <div className='background_contain'>
                    <h1>
                        {this.props.home}
                    </h1>
                    <h4>
                        {this.props.title}
                    </h4>
                </div>
            </div>
        );
    }
}

export default Back;