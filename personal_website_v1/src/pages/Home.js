import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Image from '../images/img-1.jpg';

function Home() {
    return (
        <>
            <Header /> 
            <Hero image={Image} />
        </>
    );
}

export default Home;