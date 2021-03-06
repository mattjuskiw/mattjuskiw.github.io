import React from 'react';
import './style.css';

import Header from './Header';
import AboutCards from './AboutCards';

function About() {
    return (
        <div id='about'>
            <Header />
            <hr className='my-4' />

            <AboutCards />
        </div>
    );
}

export default About;