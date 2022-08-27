import React, { Component } from 'react';
import Back from './Back';
import about from '../img/about.jpg';
import '../App.css'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className='about_page'>
                <Back home='About us' title='' />
                <div className='about_block'>
                    <div className='contain'>
                        <div>
                            <h2>Brief infro about Bookshop</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed magnam aperiam culpa quos molestiae quia pariatur voluptas, recusandae sit itaque non saepe asperiores facilis ipsa iure adipisci corrupti eos illo delectus. Tenetur, autem? Ipsam, est! Odio reprehenderit a inventore veniam! Laborum modi neque accusantium nostrum aspernatur atque nobis perspiciatis delectus sed facilis voluptate doloremque voluptatibus suscipit sunt aliquam natus consequuntur sequi tempore tenetur, praesentium laboriosam eaque voluptates corrupti! Itaque aliquid inventore laboriosam, laborum sed pariatur laudantium tenetur animi nihil incidunt accusamus illum aperiam, iusto quae doloribus, perspiciatis mollitia officiis ullam! Ut incidunt iusto corrupti nulla. Nam molestiae fuga earum possimus.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed magnam aperiam culpa quos molestiae quia pariatur voluptas, recusandae sit itaque non saepe asperiores facilis ipsa iure adipisci corrupti eos illo delectus. Tenetur, autem? Ipsam, est! Odio reprehenderit a inventore veniam! Laborum modi neque accusantium nostrum aspernatur atque nobis perspiciatis delectus sed facilis voluptate doloremque voluptatibus suscipit sunt aliquam natus consequuntur sequi tempore tenetur, praesentium laboriosam eaque voluptates corrupti! Itaque aliquid inventore laboriosam, laborum sed pariatur laudantium tenetur animi nihil incidunt accusamus illum aperiam, iusto quae doloribus, perspiciatis mollitia officiis ullam! Ut incidunt iusto corrupti nulla. Nam molestiae fuga earum possimus.
                            </p>
                        </div>
                    </div>
                    <div className='contain'>
                        <img src={about} alt='' width={500} height={500} />
                    </div>
                </div>
            </div>


        );
    }
}

export default About;
// about = 'About us' contact = 'contacts us'