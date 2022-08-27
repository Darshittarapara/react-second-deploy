import React, { Component } from 'react';
import Topsell from './Topsell';
import '../App.css';
import Book_9 from '../img/Book_9.jpg';
import Book_10 from '../img/Book_10.jpg'
const alldetails = [
    {
        Name: "Meditaion and it's Method",
        img: 'https://cdn.exoticindia.com/images/products/original/books/naf944.jpg',
        price: 566
    },

    {
        Name: "ListeNing To the Silence",
        img: 'https://cdn.exoticindia.com/images/products/original/books-2019/aza295.jpg',
        price: 455
    },

    {
        Name: "BhaGavad Geeta",
        img: 'https://wisdombooksofindia.com/wp-content/uploads/2019/05/Eng-cvr-Bhagavad-gita.jpg',
        price: 566
    },

    {
        Name: "As i Lay Dying",
        img: 'https://media.audiobookstore.com/a/u/au95/au95-square.jpg',
        price: 566
    },

    {
        Name: "Why I write",
        img: 'https://www.readandcobooks.co.uk/wp-content/uploads/why-i-write-orwell-9781528719216-cover.jpg',
        price: 600
    },

    {
        Name: "A Thosand Nights",
        img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1462732496i/30134512._UY2327_SS2327_.jpg',
        price: 700
    }
    ,
    {
        Name: "Into a Water",
        img: 'hhttps://th.bing.com/th/id/OIP.nsVCp13aUcJKLSoxtg62dgHaLj?pid=ImgDet&rs=1',
        price: 570
    }
    ,
    {
        Name: "MELUHA",
        img: 'https://www.spiritedblogger.com/wp-content/uploads/2020/08/Subtle-Art.jpg',
        price: 566
    }
    ,
    {
        Name: "The glass bird Girl",
        img: 'http://ecx.images-amazon.com/images/I/51VgbJ6TBCL.jpg',
        price: 650
    }
    ,

    {
        Name: "Can you keep a Secret",
        img: 'https://www.sophiekinsella.co.uk/wp-content/uploads/2017/10/timthumb-47.jpg',
        price: 690
    }

]
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='book_block'>
                <div className='all_book_contain'>
                    <h2>All Books</h2>
                    <div className='book_block'>
                        <div>
                            <Topsell Name={alldetails[0].Name} price={alldetails[0].price} image={alldetails[0].img} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[1].Name} price={alldetails[1].price} image={alldetails[1].img} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[2].Name} price={alldetails[2].price} image={alldetails[2].img} />
                        </div>
                    </div>

                    <div className='book_block'>
                        <div>
                            <Topsell Name={alldetails[3].Name} price={alldetails[3].price} image={alldetails[3].img} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[5].Name} price={alldetails[5].price} image={alldetails[5].img} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[6].Name} price={alldetails[6].price} image={Book_9} />
                        </div>
                    </div>



                    <div className='book_block'>
                        <div>
                            <Topsell Name={alldetails[7].Name} price={alldetails[7].price} image={Book_10} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[8].Name} price={alldetails[8].price} image={alldetails[8].img} />
                        </div>
                        <div>
                            <Topsell Name={alldetails[9].Name} price={alldetails[9].price} image={alldetails[9].img} />
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

export default Book;


//sophie kinsella