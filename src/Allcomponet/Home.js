import React, { Component } from 'react';
import Back from './Back';
import Topsell from './Topsell';
import book_1 from '../img/Book_1.jpg';
import book_2 from '../img/Book_2.jpg';
import book_3 from '../img/Book_3.jpg';
import book_4 from '../img/Book_4.jpg';
import '../App.css'
import book_5 from '../img/Book_5.jpg';
import book_6 from '../img/Book_6.jpg';
import book_benefies from '../img/benefits.jpg';
const alldetails = [
    {
        Name: 'How to Win Friends and influence people',
        price: 200,

    },
    {
        Name: 'IGNITED  MIND',
        price: 160,

    },
    {
        Name: 'Change Your habit change your life',
        price: 249,

    },
    {
        Name: ' Ruskin Bond',
        price: 400
    },
    {
        Name: 'The Law of Attraction',
        price: 350
    },
    {
        Name: 'Values for Life',
        price: 500
    }


]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { object: '' };
    }
    setfun() {
        this.setState({
            object: <Back />
        }

        )
    }
    render() {
        return (
            <div>
                <Back
                    home='Welcome to Bookshop' title=' Here All Type of Books are available'
                />
                <button type='button' onClick={this.setfun.bind(this)} />
                <div>
                    {this.state.object}
                </div>
                <div className='set_sell'>
                    <h2>Top Sellerbooks</h2>
                    <div className='sell_contain'>
                        <div>
                            <Topsell Name={alldetails[0].Name} price={alldetails[0].price} image={book_1} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[1].Name} price={alldetails[1].price} image={book_2} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[2].Name} price={alldetails[2].price} image={book_3} />
                        </div>
                    </div>

                </div>

                <div className='set_sell'>
                    <h2>Top Storybooks</h2>
                    <div className='sell_contain'>
                        <div>
                            <Topsell Name={alldetails[3].Name} price={alldetails[3].price} image={book_4} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[4].Name} price={alldetails[4].price} image={book_5} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[5].Name} price={alldetails[5].price} image={book_6} />
                        </div>
                    </div>

                </div>

                <br></br>
                <div className='benefits_book'>
                    <div className='benefite_book_child'>
                        <div className='common_book'>
                            <div>
                                <h4>
                                    Increases your ability to empathize
                                </h4>
                                <p>
                                    And speaking of sensing pain, researchTrusted Source has shown that people who read literary fiction — stories that explore the inner lives of characters — show a heightened ability to understand the feelings and beliefs of others.
                                    Researchers call this ability the “theory of mind,” a set of skills essential for building, navigating, and maintaining social relationships.
                                    While a single session of reading literary fiction isn’t likely to spark this feeling, researchTrusted Source shows that long-term fiction readers do tend to have a better-developed theory of mind.
                                </p>
                            </div>
                            <div>
                                <h4>Reduces stress</h4>
                                <p>
                                    In 2009, a group of researchers measured the effects of yoga, humor, and reading on the stress levels of students in demanding health science programs in the United States.

                                    The study found that 30 minutes of reading lowered blood pressure, heart rate, and feelings of psychological distress just as effectively as yoga and humor did.

                                    The authors concluded, “Since time constraints are one of the most frequently cited reasons for high stress levels reported by health science students, 30 minutes of one of these techniques can be easily incorporated into their schedule without diverting a large amount of time from their studies.”
                                </p>
                            </div>
                        </div>
                        <div className='common_book'>
                            <img src={book_benefies} alt='' width={600} height={400} />
                        </div>
                    </div>
                </div>



                <div className='offer'>
                    <div className='offer_contain'>
                        <h4>Hurry up !Get  40% Off for everybooks </h4>
                        <button type='button'>Buy Now</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;
//
/*  */