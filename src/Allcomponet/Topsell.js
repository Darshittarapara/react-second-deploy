import React, { Component } from 'react';
import Home from './Home';

class Topsell extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='Top_Seller'>

                <div className='contain_book'>
                    <img src={this.props.image} alt='' width={150} height={200} />
                    <h4>{this.props.Name}</h4>
                    <span>Price: INR {this.props.price}</span>
                    {console.log(this.props)}
                    <div className='button'>
                        <button type='button' onClick={() => {
                            <Home />
                        }} >Buy Now</button>
                        <button type='button' >Add to Card</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topsell;